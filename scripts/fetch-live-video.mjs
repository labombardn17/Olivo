// Cuts a short hero loop from the clinic's current homepage video at build
// time: ffmpeg reads the remote MP4 over HTTP with range requests, so only the
// seconds we keep are downloaded. Output: public/video/live-hero.mp4 (1440px,
// 10 s, no audio) and a poster. Writes content/live-video.json { ok }.
// Any failure leaves the placeholder film in place.
import { execFileSync } from "node:child_process";
import { existsSync, mkdirSync, statSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const root = new URL("..", import.meta.url).pathname;
const dir = join(root, "public", "video");
const flag = join(root, "content", "live-video.json");
const src = process.env.LIVE_VIDEO_URL || "https://www.olivomedspa.com/wp-content/uploads/2025/08/olivo_med_spa.mp4";
const start = process.env.LIVE_VIDEO_START || "4";
const seconds = process.env.LIVE_VIDEO_SECONDS || "10";
const mp4 = join(dir, "live-hero.mp4");
const poster = join(dir, "live-hero-poster.jpg");

function done(ok, why = "") {
  writeFileSync(flag, JSON.stringify({ ok, src: ok ? "/video/live-hero.mp4" : null, poster: ok ? "/video/live-hero-poster.jpg" : null, from: ok ? src : null }));
  console.log(`live-video: ${ok ? "ready" : "placeholder"}${why ? ` (${why})` : ""}`);
}

async function main() {
  if (process.env.LIVE_VIDEO_SKIP === "1" || process.env.LIVE_IMAGES_SKIP === "1") return done(false, "skipped");
  mkdirSync(dir, { recursive: true });
  if (existsSync(mp4) && existsSync(poster) && statSync(mp4).size > 200_000) return done(true, "reused");
  let ffmpeg;
  try { ffmpeg = (await import("ffmpeg-static")).default; } catch { return done(false, "ffmpeg-static not installed"); }
  if (!ffmpeg) return done(false, "no ffmpeg binary");
  const run = (args) => execFileSync(ffmpeg, ["-y", "-hide_banner", "-loglevel", "error", ...args], { stdio: "inherit", timeout: 240_000 });
  try {
    run(["-ss", start, "-i", src, "-t", seconds, "-an", "-vf", "scale=1440:-2:flags=lanczos,fps=30,format=yuv420p", "-c:v", "libx264", "-preset", "medium", "-crf", "27", "-maxrate", "3M", "-bufsize", "6M", "-movflags", "+faststart", mp4]);
    run(["-i", mp4, "-ss", "0.5", "-frames:v", "1", "-vf", "scale=1920:-2", "-q:v", "5", poster]);
    const size = statSync(mp4).size;
    if (size < 200_000) throw new Error(`output too small: ${size}`);
    console.log(`live-video: ${Math.round(size / 1024)} KB from ${src}`);
    done(true);
  } catch (e) {
    done(false, e instanceof Error ? e.message.split("\n")[0] : "error");
  }
}

main().catch((e) => done(false, e?.message));
