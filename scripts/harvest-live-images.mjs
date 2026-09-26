// Harvests every photograph on the clinic's current site so a person can pick
// the right one per page. Runs in CI (this container cannot reach the site).
// Output, under ../review/olivo-live: img/NNN.webp, sheet-NN.jpg contact
// sheets with the NNN labels, and catalog.json (id, src, alt, pages, size).
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";
import sharp from "sharp";

const origin = process.env.LIVE_ORIGIN || "https://www.olivomedspa.com";
const out = new URL("../../review/olivo-live/", import.meta.url).pathname;
const UA = "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/128 Safari/537.36 OlivoSiteBuild/1.0";
const MAX_IMAGES = Number(process.env.LIVE_MAX || 600);
mkdirSync(join(out, "img"), { recursive: true });

async function get(url, ms = 20000) {
  const ctrl = new AbortController();
  const t = setTimeout(() => ctrl.abort(), ms);
  try { return await fetch(url, { headers: { "user-agent": UA, accept: "*/*" }, signal: ctrl.signal, redirect: "follow" }); } finally { clearTimeout(t); }
}

async function pageUrls() {
  const urls = new Set(["/"]);
  for (const sm of ["/page-sitemap.xml", "/post-sitemap.xml", "/sitemap_index.xml", "/sitemap.xml"]) {
    try {
      const r = await get(origin + sm);
      if (!r.ok) continue;
      const xml = await r.text();
      for (const m of xml.matchAll(/<loc>([^<]+)<\/loc>/g)) {
        const u = m[1].trim();
        if (/\.xml$/.test(u)) { try { const rr = await get(u); if (rr.ok) for (const mm of (await rr.text()).matchAll(/<loc>([^<]+)<\/loc>/g)) if (!/\.xml$/.test(mm[1])) urls.add(mm[1].replace(origin, "")); } catch {} }
        else urls.add(u.replace(origin, ""));
      }
    } catch {}
  }
  return [...urls].filter((u) => u.startsWith("/") && !/\.(jpg|png|pdf)$/i.test(u));
}

const DROP = /\.svg|data:image|gravatar|wp-emoji|emoji|sprite|favicon|\/plugins\/|\/themes\//i;
function imagesIn(html) {
  const found = [];
  const push = (src, alt) => {
    if (!src || DROP.test(src) || !/wp-content\/uploads/.test(src)) return;
    let clean = src.split("?")[0].replace(/-\d+x\d+(\.\w+)$/, "$1").replace(/-scaled(\.\w+)$/, "$1");
    if (!clean.startsWith("http")) clean = origin + clean;
    if (!found.some((f) => f.src === clean)) found.push({ src: clean, alt: (alt || "").replace(/\s+/g, " ").trim() });
  };
  for (const m of html.matchAll(/<img\b[^>]*>/gi)) {
    const tag = m[0];
    const attr = (n) => (new RegExp(`\\b${n}=["']([^"']+)["']`, "i").exec(tag) || [])[1];
    const ss = attr("data-srcset") || attr("srcset");
    let src = attr("data-src") || attr("data-lazy-src") || attr("src") || "";
    if (ss) { const c = ss.split(",").map((x) => x.trim().split(/\s+/)).filter((x) => x[0]).sort((a, b) => parseInt(b[1] || "0") - parseInt(a[1] || "0")); if (c[0]) src = c[0][0]; }
    push(src, attr("alt"));
  }
  for (const m of html.matchAll(/url\((['"]?)([^'")]+)\1\)/gi)) push(m[2], "");
  for (const m of html.matchAll(/["'](https?:\/\/[^"']*wp-content\/uploads\/[^"']+\.(?:jpe?g|png|webp))["']/gi)) push(m[1], "");
  return found;
}

async function main() {
  const pages = await pageUrls();
  console.log(`pages: ${pages.length}`);
  const catalog = new Map();
  for (const p of pages) {
    try {
      const r = await get(origin + p);
      if (!r.ok) { console.log(`skip ${p} ${r.status}`); continue; }
      const html = await r.text();
      const title = (/<title>([^<]*)<\/title>/i.exec(html) || [])[1]?.replace(/\s+/g, " ").trim() ?? "";
      const imgs = imagesIn(html);
      for (const im of imgs) {
        const c = catalog.get(im.src) ?? { src: im.src, alt: im.alt, pages: [] };
        if (!c.alt && im.alt) c.alt = im.alt;
        if (!c.pages.includes(p)) c.pages.push(p);
        c.titles = c.titles ?? []; if (title && !c.titles.includes(title)) c.titles.push(title);
        catalog.set(im.src, c);
      }
      console.log(`${p} ${imgs.length}`);
    } catch (e) { console.log(`err ${p} ${e?.message}`); }
  }
  const items = [...catalog.values()].slice(0, MAX_IMAGES);
  console.log(`unique images: ${catalog.size}, downloading ${items.length}`);
  const kept = [];
  let n = 0;
  for (const it of items) {
    try {
      const r = await get(it.src, 30000);
      if (!r.ok) continue;
      const buf = Buffer.from(await r.arrayBuffer());
      const meta = await sharp(buf).metadata();
      if (!meta.width || !meta.height || meta.width < 320 || meta.height < 200) continue;
      const id = String(++n).padStart(3, "0");
      const file = `img/${id}.webp`;
      const info = await sharp(buf).rotate().resize({ width: 1600, withoutEnlargement: true }).webp({ quality: 78 }).toFile(join(out, file));
      kept.push({ id, file, src: it.src, alt: it.alt, pages: it.pages, titles: it.titles ?? [], width: info.width, height: info.height, bytes: buf.length });
    } catch (e) { console.log(`img err ${it.src} ${e?.message}`); }
  }
  writeFileSync(join(out, "catalog.json"), JSON.stringify(kept, null, 1));
  // Contact sheets: 4 x 5 cells of 360 x 270 with the id in the corner.
  const cols = 4, rows = 5, cw = 360, ch = 270, per = cols * rows;
  for (let s = 0; s * per < kept.length; s++) {
    const batch = kept.slice(s * per, (s + 1) * per);
    const layers = [];
    for (let i = 0; i < batch.length; i++) {
      const k = batch[i];
      const thumb = await sharp(join(out, k.file)).resize(cw - 8, ch - 8, { fit: "cover", position: "attention" }).toBuffer();
      const x = (i % cols) * cw + 4, y = Math.floor(i / cols) * ch + 4;
      layers.push({ input: thumb, left: x, top: y });
      const label = Buffer.from(`<svg width="${cw}" height="${ch}"><rect x="6" y="6" width="112" height="34" rx="6" fill="rgba(0,0,0,0.7)"/><text x="14" y="30" font-family="Arial" font-size="22" font-weight="bold" fill="#fff">${k.id} ${k.width}x${k.height}</text></svg>`.replace(`${k.id} ${k.width}x${k.height}`, `${k.id}`));
      layers.push({ input: label, left: x, top: y });
    }
    await sharp({ create: { width: cols * cw, height: rows * ch, channels: 3, background: "#e9e5dc" } }).composite(layers).jpeg({ quality: 82 }).toFile(join(out, `sheet-${String(s + 1).padStart(2, "0")}.jpg`));
  }
  const lines = kept.map((k) => `${k.id} | ${k.width}x${k.height} | ${k.alt || "(no alt)"} | ${k.pages.join(" ")} | ${k.src.replace(origin, "")}`);
  writeFileSync(join(out, "catalog.txt"), lines.join("\n") + "\n");
  console.log(`kept ${kept.length} images, ${Math.ceil(kept.length / per)} sheets`);
}

main().catch((e) => { console.error(e); process.exit(1); });
