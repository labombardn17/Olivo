// Usage: node scripts/live-crawl.mjs https://olivo-med-spa.vercel.app (needs network access to the site).
// Live QA crawl: every sitemap URL plus every internal link found on them.
// Reports status, title, description, canonical, h1 count, JSON-LD types,
// robots, hreflang, OG image, and broken internal links. Node 22, no deps.
const base = process.argv[2] || "https://olivo-med-spa.vercel.app";
const UA = "Mozilla/5.0 (iPhone; CPU iPhone OS 17_0 like Mac OS X) AppleWebKit/605.1.15 Mobile/15E148 Safari/604.1 OlivoQA/1";
const get = async (u) => { const r = await fetch(u, { headers: { "user-agent": UA }, redirect: "manual" }); return { status: r.status, loc: r.headers.get("location"), ct: r.headers.get("content-type") || "", xr: r.headers.get("x-robots-tag") || "", text: r.status === 200 && /html|xml|text/.test(r.headers.get("content-type") || "") ? await r.text() : "" }; };
const attr = (tag, n) => (new RegExp(`\\b${n}=["']([^"']*)["']`, "i").exec(tag) || [])[1] ?? "";
const sm = await get(`${base}/sitemap.xml`);
const urls = [...sm.text.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1]);
console.log(`sitemap ${sm.status} ${urls.length} urls`);
const seen = new Map(); const queue = [...urls]; const rows = []; const broken = [];
while (queue.length) {
  const u = queue.shift(); if (seen.has(u)) continue; seen.set(u, true);
  let r; try { r = await get(u); } catch (e) { rows.push({ u, status: "ERR" }); continue; }
  const h = r.text;
  const title = (/<title>([^<]*)<\/title>/.exec(h) || [])[1] ?? "";
  const desc = attr((/<meta[^>]+name=["']description["'][^>]*>/i.exec(h) || [""])[0], "content");
  const canon = attr((/<link[^>]+rel=["']canonical["'][^>]*>/i.exec(h) || [""])[0], "href");
  const robots = attr((/<meta[^>]+name=["']robots["'][^>]*>/i.exec(h) || [""])[0], "content");
  const og = attr((/<meta[^>]+property=["']og:image["'][^>]*>/i.exec(h) || [""])[0], "content");
  const h1s = (h.match(/<h1\b/gi) || []).length;
  const hreflang = (h.match(/hrefLang=|hreflang=/gi) || []).length;
  const ld = [...h.matchAll(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/g)].flatMap((m) => { try { const j = JSON.parse(m[1]); return [j["@type"]].flat(); } catch { return ["INVALID"]; } });
  const verify = (h.match(/<!-- VERIFY:/g) || []).length;
  const words = h.replace(/<script[\s\S]*?<\/script>|<style[\s\S]*?<\/style>/g, "").replace(/<[^>]+>/g, " ").split(/\s+/).filter(Boolean).length;
  const imgs = (h.match(/<img\b/gi) || []).length; const live = (h.match(/data-live=/g) || []).length; const placeholder = (h.match(/data-placeholder=/g) || []).length;
  rows.push({ u: u.replace(base, "") || "/", status: r.status, loc: r.loc, title, tl: title.length, dl: desc.length, canon: canon.replace(base, ""), robots, xr: r.xr, og: og ? "y" : "n", h1s, hreflang, ld: ld.join("+"), verify, words, imgs, live, placeholder, bytes: h.length });
  for (const m of h.matchAll(/href="([^"#?]+)/g)) { let l = m[1]; if (l.startsWith("/")) l = base + l; if (!l.startsWith(base)) continue; l = l.replace(/\/$/, "") || base; if (!seen.has(l) && !queue.includes(l)) queue.push(l); }
}
for (const row of rows) if (row.status !== 200) broken.push(row);
console.log("pages", rows.length, "non-200", broken.length);
for (const b of broken) console.log("NON200", b.status, b.u, b.loc || "");
const bad = rows.filter((r) => r.status === 200 && (r.h1s !== 1 || r.tl > 65 || r.tl < 20 || r.dl > 165 || r.dl < 100 || r.og === "n" || !r.canon || r.ld.includes("INVALID")));
console.log("flags", bad.length);
for (const b of bad) console.log("FLAG", b.u, `h1=${b.h1s} title=${b.tl} desc=${b.dl} og=${b.og} canon=${b.canon} ld=${b.ld}`);
const s = (k) => rows.filter((r) => r.status === 200).reduce((n, r) => n + (r[k] || 0), 0);
console.log("totals", JSON.stringify({ live: s("live"), placeholder: s("placeholder"), verify: s("verify"), words: s("words") }));
console.log("robots sample", JSON.stringify(rows.slice(0, 3).map((r) => [r.u, r.robots, r.xr])));
console.log("ld types", JSON.stringify([...new Set(rows.map((r) => r.ld))]));
import { writeFileSync } from "node:fs"; writeFileSync(new URL("../.lighthouse/live-crawl.json", import.meta.url).pathname, JSON.stringify(rows));
