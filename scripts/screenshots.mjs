// Playwright: 5 concepts x 5 palettes x 3 viewports, plus open mobile nav and
// footer per concept, plus rendered DOM checks. Writes hero stills for the
// chooser to public/img/heroes and a report to public/screens/report.json.
import { chromium } from "playwright";
import { mkdirSync, writeFileSync } from "node:fs";
import sharp from "sharp";
import { BASE, ensureServer } from "./server.mjs";

const root = new URL("..", import.meta.url).pathname;
const concepts = ["atelier", "cinema", "precision", "residence", "current"];
const palettes = ["noir", "orchid", "olivo", "champagne", "glacier"];
const viewports = [
  { name: "390", width: 390, height: 844, mobile: true },
  { name: "834", width: 834, height: 1194, mobile: false },
  { name: "1440", width: 1440, height: 900, mobile: false },
];
const only = process.argv.find((a) => a.startsWith("--only="))?.slice(7).split(",");
const quick = process.argv.includes("--quick"); // default palette only
const screens = `${root}public/screens/`;
mkdirSync(screens, { recursive: true });
mkdirSync(`${root}public/img/heroes/`, { recursive: true });

const stop = await ensureServer();

/** Scroll through the page so lazy images load, wait for them, return to top. */
async function settle(page) {
  await page.evaluate(async () => {
    const h = document.body.scrollHeight;
    for (let y = 0; y < h; y += 500) { window.scrollTo(0, y); await new Promise((r) => setTimeout(r, 40)); }
    window.scrollTo(0, 0);
    await Promise.all([...document.images].filter((i) => !i.complete).map((i) => new Promise((r) => { i.onload = i.onerror = r; })));
  });
  await page.waitForTimeout(300);
}
const browser = await chromium.launch({ executablePath: "/opt/pw-browsers/chromium" });
const report = { violations: [], pages: {} };

const DOM_CHECKS = `(() => {
  const out = [];
  // 1. heading followed by exactly three sibling cards whose first child is an svg
  for (const h of document.querySelectorAll('h1,h2,h3')) {
    let n = h.nextElementSibling; while (n && !n.children.length) n = n.nextElementSibling;
    if (n && n.children.length === 3 && [...n.children].every(c => c.firstElementChild && c.firstElementChild.tagName === 'svg')) out.push('triptych-svg-cards after "' + h.textContent.trim().slice(0,40) + '"');
  }
  // 2. sections opening with eyebrow + headline + sub + CTA
  let stacks = 0;
  for (const s of document.querySelectorAll('main section')) {
    const first = s.querySelector('.eyebrow, [data-eyebrow]');
    if (!first) continue;
    const h = s.querySelector('h1,h2');
    const p = h && h.nextElementSibling && h.nextElementSibling.tagName === 'P';
    const cta = s.querySelector('a[data-cta]');
    if (first && h && p && cta && s.textContent.indexOf(first.textContent) < s.textContent.indexOf(h.textContent)) stacks++;
  }
  if (stacks > 2) out.push('eyebrow-stack-count ' + stacks);
  // 3. :hover rules with a transform scale above 1.03
  for (const sheet of document.styleSheets) {
    let rules; try { rules = sheet.cssRules; } catch { continue; }
    for (const r of rules) {
      if (r.selectorText && r.selectorText.includes(':hover') && r.style && r.style.transform) {
        const m = r.style.transform.match(/scale\\(([\\d.]+)/); if (m && parseFloat(m[1]) > 1.03) out.push('hover-scale ' + r.selectorText + ' ' + r.style.transform);
      }
      if (r.selectorText && r.selectorText.includes(':hover') && r.style && r.style.scale) {
        const v = parseFloat(r.style.scale); if (v > 1.03) out.push('hover-scale ' + r.selectorText + ' ' + r.style.scale);
      }
    }
  }
  // 4. exactly one h1, sections labelled
  if (document.querySelectorAll('h1').length !== 1) out.push('h1-count ' + document.querySelectorAll('h1').length);
  for (const s of document.querySelectorAll('main section')) if (!s.getAttribute('aria-labelledby') && !s.getAttribute('aria-label')) out.push('section-unlabelled ' + (s.id || s.className.slice(0,30)));
  out.push('sections ' + document.querySelectorAll('main > section, main > div > section').length);
  // 5. switcher vs sticky bar overlap
  const sw = document.querySelector('[data-switcher]'); const bar = document.querySelector('[data-sticky-bar]');
  if (sw && bar) { const a = sw.getBoundingClientRect(), b = bar.getBoundingClientRect(); if (a.right > b.left && a.left < b.right && a.bottom > b.top && a.top < b.bottom) out.push('switcher-overlaps-sticky-bar'); }
  return out;
})()`;

for (const c of concepts) {
  if (only && !only.includes(c)) continue;
  for (const p of quick ? [null] : palettes) {
    for (const v of viewports) {
      const ctx = await browser.newContext({ viewport: { width: v.width, height: v.height }, deviceScaleFactor: 1, isMobile: v.mobile, hasTouch: v.mobile, reducedMotion: "reduce" });
      const page = await ctx.newPage();
      const url = `${BASE}/${c}${p ? `?palette=${p}` : ""}`;
      await page.goto(url, { waitUntil: "networkidle" });
      const pal = p ?? (await page.evaluate(() => document.documentElement.getAttribute("data-palette")));
      await page.evaluate(() => document.fonts.ready);
      await settle(page);
      await page.screenshot({ path: `${screens}${c}-${pal}-${v.name}.png`, fullPage: true });
      const checks = await page.evaluate(DOM_CHECKS);
      report.pages[`${c}-${pal}-${v.name}`] = checks;
      for (const x of checks) if (!x.startsWith("sections ")) report.violations.push(`${c}/${pal}/${v.name}: ${x}`);
      if (v.name === "1440") {
        // Hero still with motion on, for the chooser tiles and contact sheet.
        const ctx2 = await browser.newContext({ viewport: { width: 1440, height: 900 }, deviceScaleFactor: 1 });
        const p2 = await ctx2.newPage();
        await p2.goto(`${url}${url.includes("?") ? "&" : "?"}present=1`, { waitUntil: "networkidle" });
        await p2.evaluate(() => document.fonts.ready);
        await p2.waitForTimeout(2200);
        const buf = await p2.screenshot();
        await sharp(buf).jpeg({ quality: 72, mozjpeg: true }).toFile(`${root}public/img/heroes/${c}-${pal}.jpg`);
        await ctx2.close();
      }
      if (v.name === "390" && (p === null || p === "noir")) {
        // Open mobile nav
        const toggle = page.locator("[data-nav-toggle]");
        if (await toggle.count()) {
          await toggle.first().click();
          await page.waitForTimeout(500);
          await page.screenshot({ path: `${screens}${c}-${pal}-390-nav.png` });
          await page.keyboard.press("Escape");
        }
        await page.evaluate(() => window.scrollTo(0, document.body.scrollHeight));
        await page.waitForTimeout(400);
        await page.screenshot({ path: `${screens}${c}-${pal}-390-footer.png` });
      }
      await ctx.close();
    }
  }
  console.log("captured", c);
}

await browser.close();
stop();
writeFileSync(`${screens}report.json`, JSON.stringify(report, null, 2));
if (report.violations.length) {
  console.error("DOM CHECKS FAILED\n" + report.violations.join("\n"));
  process.exit(1);
}
console.log("DOM checks passed.");
