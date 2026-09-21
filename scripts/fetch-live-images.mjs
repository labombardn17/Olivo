// Pulls photographs from the clinic's current site (www.olivomedspa.com) at
// build time, resizes them to WebP, and writes content/live-images.json.
// Idempotent: existing files are reused. Any failure leaves the manifest as
// is, so a build never breaks because the old site is unreachable.
import { createHash } from "node:crypto";
import { existsSync, mkdirSync, readFileSync, readdirSync, statSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const root = new URL("..", import.meta.url).pathname;
const outDir = join(root, "public", "img", "live");
const manifestPath = join(root, "content", "live-images.json");
const origin = "https://www.olivomedspa.com";
const UA = "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/128 Safari/537.36 OlivoSiteBuild/1.0";
const limitPerSlot = Number(process.env.LIVE_IMAGES_PER_SLOT || 3);
const skip = process.env.LIVE_IMAGES_SKIP === "1";

mkdirSync(outDir, { recursive: true });
let manifest = {};
try { manifest = JSON.parse(readFileSync(manifestPath, "utf8")); } catch {}

async function get(url, ms = 15000) {
  const ctrl = new AbortController();
  const t = setTimeout(() => ctrl.abort(), ms);
  try { return await fetch(url, { headers: { "user-agent": UA, accept: "*/*" }, signal: ctrl.signal, redirect: "follow" }); } finally { clearTimeout(t); }
}

function pickImages(html) {
  const main = html.split(/<main[\s>]/)[1] ?? html;
  const body = main.split(/<footer[\s>]/)[0];
  const out = [];
  const re = /<img\b[^>]*>/gi;
  let m;
  while ((m = re.exec(body))) {
    const tag = m[0];
    if (/logo|icon|badge|avatar|emoji|sprite|arrow|\.svg|data:image|gravatar|wp-emoji|payment|award/i.test(tag)) continue;
    const attr = (n) => (new RegExp(`\\b${n}=["']([^"']+)["']`, "i").exec(tag) || [])[1];
    let src = attr("data-src") || attr("src") || "";
    const ss = attr("data-srcset") || attr("srcset");
    if (ss) {
      const c = ss.split(",").map((x) => x.trim().split(/\s+/)).filter((x) => x[0]).sort((a, b) => parseInt(b[1] || "0") - parseInt(a[1] || "0"));
      if (c[0]) src = c[0][0];
    }
    if (!src || !/wp-content\/uploads/.test(src)) continue;
    src = src.replace(/-\d+x\d+(\.\w+)(\?.*)?$/, "$1");
    const w = parseInt(attr("width") || "0");
    if (w && w < 400) continue;
    const alt = (attr("alt") || "").replace(/\s+/g, " ").trim();
    if (!out.some((o) => o.src === src)) out.push({ src: src.startsWith("http") ? src : origin + src, alt });
  }
  return out;
}

/** Reads slug and live path pairs from content/services/*.ts without compiling TypeScript. */
function scanServices() {
  const dir = join(root, "content", "services");
  const out = [];
  if (!existsSync(dir)) return out;
  for (const f of readdirSync(dir)) {
    if (!f.endsWith(".ts") || f === "index.ts") continue;
    const text = readFileSync(join(dir, f), "utf8");
    const parts = text.split(/\n\s*\{\s*\n\s*slug:/).slice(1);
    for (const part of parts) {
      const slug = /^\s*"([^"]+)"/.exec(part)?.[1];
      const live = /\blive:\s*"([^"]+)"/.exec(part)?.[1];
      if (slug && live) out.push({ live, image: { slot: slug } });
    }
  }
  return out;
}

async function loadSharp() {
  try { return (await import("sharp")).default; } catch { return null; }
}

async function main() {
  if (skip) { console.log("live-images: skipped"); return; }
  // next build loads the config in several processes; one fetch per build is enough.
  if (existsSync(manifestPath) && Date.now() - statSync(manifestPath).mtimeMs < 10 * 60 * 1000 && Object.keys(manifest).length) { console.log("live-images: reusing this build's manifest"); return; }
  const slots = [];
  const services = scanServices();
  try {
    const { liveSlots } = await import("../content/live-slots.mjs");
    slots.push(...liveSlots);
  } catch {}
  for (const s of services) if (s.live) slots.push({ slot: s.image.slot, paths: [s.live] });
  const sharp = await loadSharp();
  if (!sharp) { console.log("live-images: sharp unavailable, skipping"); return; }
  let fetched = 0;
  for (const { slot, paths } of slots) {
    if (manifest[slot]?.length && manifest[slot].every((i) => existsSync(join(root, "public", i.src)))) continue;
    const found = [];
    for (const p of paths) {
      try {
        const r = await get(origin + p);
        if (!r.ok) continue;
        found.push(...pickImages(await r.text()));
      } catch {}
      if (found.length >= limitPerSlot) break;
    }
    const list = [];
    for (const img of found.slice(0, limitPerSlot * 2)) {
      if (list.length >= limitPerSlot) break;
      try {
        const r = await get(img.src, 20000);
        if (!r.ok) continue;
        const buf = Buffer.from(await r.arrayBuffer());
        const meta = await sharp(buf).metadata();
        if (!meta.width || meta.width < 500 || !meta.height) continue;
        const name = `${slot}-${createHash("md5").update(img.src).digest("hex").slice(0, 8)}.webp`;
        const file = join(outDir, name);
        const resized = sharp(buf).rotate().resize({ width: 1600, withoutEnlargement: true }).webp({ quality: 74 });
        const info = await resized.toFile(file);
        list.push({ src: `/img/live/${name}`, width: info.width, height: info.height, alt: img.alt || `${slot.replace(/-/g, " ")} at Olivo Med Spa` });
        fetched++;
      } catch {}
    }
    if (list.length) manifest[slot] = list;
  }
  writeFileSync(manifestPath, JSON.stringify(manifest, null, 0));
  console.log(`live-images: ${fetched} new files, ${Object.keys(manifest).length} slots in manifest`);
}

main().catch((e) => { console.log("live-images: skipped after error", e?.message); });
