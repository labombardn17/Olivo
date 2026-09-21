// Full-page screenshots of the public site for visual review. Writes to public/screens/site/.
import { chromium } from "playwright";
import { mkdirSync } from "node:fs";
import { BASE, ensureServer } from "./server.mjs";
import { SITE_ROUTES } from "./routes.mjs";

const root = new URL("..", import.meta.url).pathname;
const dir = `${root}public/screens/site/`;
mkdirSync(dir, { recursive: true });
const only = process.argv.find((a) => a.startsWith("--only="))?.slice(7).split(",");
const stop = await ensureServer();
const browser = await chromium.launch({ executablePath: "/opt/pw-browsers/chromium" });
for (const r of SITE_ROUTES) {
  if (only && !only.includes(r)) continue;
  for (const [name, w, h, mobile] of [["390", 390, 844, true], ["1440", 1440, 900, false]]) {
    const ctx = await browser.newContext({ viewport: { width: w, height: h }, isMobile: mobile, deviceScaleFactor: 1, reducedMotion: "reduce" });
    const page = await ctx.newPage();
    await page.goto(`${BASE}${r}`, { waitUntil: "networkidle" });
    await page.evaluate(async () => { const t = document.body.scrollHeight; for (let y = 0; y < t; y += 600) { window.scrollTo(0, y); await new Promise((res) => setTimeout(res, 30)); } window.scrollTo(0, 0); });
    await page.waitForTimeout(400);
    const file = `${dir}${(r === "/" ? "home" : r.slice(1).replace(/\//g, "_"))}-${name}.png`;
    await page.screenshot({ path: file, fullPage: true });
    await ctx.close();
  }
  console.log("shot", r);
}
await browser.close();
stop();
