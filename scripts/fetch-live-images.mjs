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

const SKIP = /logo|icon|badge|avatar|emoji|sprite|arrow|\.svg|data:image|gravatar|wp-emoji|payment|award|before|after|b&amp;a|\bba\b|offer|special|promo|coupon|flyer|club|add-?ons?|menu|pricing|price|gift|event|holiday|valentine|galentine|mother|father|black-?friday|cyber|sale|discount|\bmap\b|screenshot|instagram|sbi_|IMG[_ -]?\d{3,}|[0-9A-F]{8}[_ -][0-9A-F]{4}|DSC_?\d|PXL_|beforeandafter|gallery/i;

function pickImages(html) {
  const main = html.split(/<main[\s>]/)[1] ?? html;
  const body = main.split(/<footer[\s>]/)[0];
  const out = [];
  const re = /<img\b[^>]*>/gi;
  let m;
  while ((m = re.exec(body))) {
    const tag = m[0];
    if (SKIP.test(tag)) continue;
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
  // Background images set inline by the page builder.
  const bg = /background(?:-image)?\s*:\s*url\((['"]?)([^'")]+)\1\)/gi;
  let b;
  while ((b = bg.exec(body))) {
    const src = b[2];
    if (!/wp-content\/uploads/.test(src) || SKIP.test(src)) continue;
    const clean = src.replace(/-\d+x\d+(\.\w+)(\?.*)?$/, "$1");
    if (!out.some((o) => o.src.endsWith(clean))) out.push({ src: clean.startsWith("http") ? clean : origin + clean, alt: "" });
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
  // Prefer photographs that crop well: reasonably large and not a thin banner.
  const score = (o) => { const w = parseInt((/-(\d+)x\d+\./.exec(o.src) || [])[1] || "0"); return (o.alt && !/iStock|\d{6,}/.test(o.alt) ? 1 : 0) + (w >= 800 ? 0.5 : 0); };
  out.sort((a, b) => score(b) - score(a));
  return out;
}

let sitemapUrls = null;
/** Every page URL on the current site, from the Yoast page sitemap. */
async function siteUrls() {
  if (sitemapUrls) return sitemapUrls;
  sitemapUrls = [];
  try {
    const r = await get(origin + "/page-sitemap.xml");
    if (r.ok) sitemapUrls = [...(await r.text()).matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1].replace(origin, ""));
  } catch {}
  return sitemapUrls;
}

/** When a guessed path is missing, pick the sitemap URL sharing the most slug words. */
async function resolvePath(path, slot) {
  const urls = await siteUrls();
  const words = slot.split("-").filter((w) => w.length > 2 && !["and", "for", "the", "with"].includes(w));
  let best = null, score = 0;
  for (const u of urls) {
    if (/before|after|gallery|promo|special|blog|category/.test(u)) continue;
    const n = words.filter((w) => u.includes(w)).length;
    if (n > score) { score = n; best = u; }
  }
  return score ? best : null;
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
    const notes = [];
    const tried = [...paths];
    for (let i = 0; i < tried.length; i++) {
      const p = tried[i];
      try {
        const r = await get(origin + p);
        if (!r.ok) {
          notes.push(`${p}=${r.status}`);
          if (r.status === 404 && i === tried.length - 1) { const alt = await resolvePath(p, slot); if (alt && !tried.includes(alt)) tried.push(alt); }
          continue;
        }
        const html = await r.text();
        const imgs = pickImages(html);
        notes.push(`${p}=${r.status}/${(html.match(/<img\b/gi) || []).length}img/${imgs.length}ok`);
        found.push(...imgs);
      } catch (e) { notes.push(`${p}=err`); }
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
        if (meta.width / meta.height > 2.4 && list.length + (found.length - found.indexOf(img)) > limitPerSlot) continue;
        const name = `${slot}-${createHash("md5").update(img.src).digest("hex").slice(0, 8)}.webp`;
        const file = join(outDir, name);
        const resized = sharp(buf).rotate().resize({ width: 1600, withoutEnlargement: true }).webp({ quality: 74 });
        const info = await resized.toFile(file);
        list.push({ src: `/img/live/${name}`, width: info.width, height: info.height, alt: img.alt || `${slot.replace(/-/g, " ")} at Olivo Med Spa` });
        fetched++;
      } catch {}
    }
    if (list.length) manifest[slot] = list;
    console.log(`live-images: ${slot} <- ${list.length}/${found.length} ${notes.join(" ")}${list.map((i) => ` [${i.width}x${i.height} ${i.alt.slice(0, 40)}]`).join("")}`);
  }
  writeFileSync(manifestPath, JSON.stringify(manifest, null, 0));
  console.log(`live-images: ${fetched} new files, ${Object.keys(manifest).length} slots in manifest`);
}

main().catch((e) => { console.log("live-images: skipped after error", e?.message); });
