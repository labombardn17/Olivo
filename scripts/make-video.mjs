// Placeholder hero video: a 12s slow pan over a soft two-tone field with
// grain. 1920x1080 H.264 at ~2 Mbps plus WebM (the placeholder is soft, so a
// low bitrate is lossless to the eye; encode client footage at 4 to 6 Mbps).
// Replace with the client's drone footage; HeroVideo needs no other change.
import { execFileSync } from "node:child_process";
import { mkdirSync, existsSync } from "node:fs";
import ffmpeg from "ffmpeg-static";
import sharp from "sharp";

const dir = new URL("../public/video/", import.meta.url).pathname;
mkdirSync(dir, { recursive: true });
const still = `${dir}_still.png`;

// A wide still to pan across: two soft tones, one light source, a horizon.
const W = 2880, H = 1620;
const buf = Buffer.alloc(W * H * 3);
let s = 7;
const rnd = () => ((s = (s * 1664525 + 1013904223) >>> 0) / 4294967296);
for (let y = 0; y < H; y++) {
  for (let x = 0; x < W; x++) {
    const nx = x / W, ny = y / H;
    const horizon = 0.58 + 0.03 * Math.sin(nx * 6.3);
    let v = ny < horizon ? 168 - 40 * ny : 112 - 50 * (ny - horizon);
    const dx = nx - 0.7, dy = ny - 0.25;
    v += 55 * Math.max(0, 1 - Math.sqrt(dx * dx + dy * dy) / 0.6);
    v += (rnd() - 0.5) * 12;
    const c = Math.max(0, Math.min(255, Math.round(v)));
    const i = (y * W + x) * 3;
    buf[i] = c; buf[i + 1] = Math.round(c * 0.985); buf[i + 2] = Math.round(c * 0.96);
  }
}
await sharp(buf, { raw: { width: W, height: H, channels: 3 } }).blur(1.5).png().toFile(still);

const dur = 12, fps = 30, frames = dur * fps;
// zoompan: slow drift right and a hair of zoom, output 1920x1080.
const vf = `zoompan=z='1.04+0.03*on/${frames}':x='(iw-iw/zoom)*on/${frames}':y='(ih-ih/zoom)*0.4':d=${frames}:s=1920x1080:fps=${fps},noise=alls=6:allf=t,format=yuv420p`;
const run = (args) => execFileSync(ffmpeg, ["-y", "-hide_banner", "-loglevel", "error", ...args], { stdio: "inherit" });
run(["-loop", "1", "-i", still, "-t", String(dur), "-vf", vf, "-c:v", "libx264", "-preset", "medium", "-b:v", "2M", "-maxrate", "2.5M", "-bufsize", "5M", "-pix_fmt", "yuv420p", "-movflags", "+faststart", "-an", `${dir}hero-drone.mp4`]);
run(["-i", `${dir}hero-drone.mp4`, "-c:v", "libvpx-vp9", "-b:v", "1.2M", "-row-mt", "1", "-deadline", "good", "-cpu-used", "2", "-an", `${dir}hero-drone.webm`]);
// The poster carries visible grain so it stays a valid LCP candidate (Chrome
// discards images under 0.05 bits per pixel). A real drone frame needs none of this.
run(["-i", `${dir}hero-drone.mp4`, "-ss", "0.5", "-frames:v", "1", "-vf", "noise=alls=22:allf=t+u", "-q:v", "6", `${dir}hero-drone-poster.jpg`]);
if (existsSync(still)) execFileSync("rm", [still]);
console.log("video written");
