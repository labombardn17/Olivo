// Ad-hoc viewport screenshot with motion on: node scripts/peek.mjs <path> <width> <height> <scrollY> [out] [hoverSelector] [reduced]
import { chromium } from "playwright";
const [path = "/atelier", w = "1440", h = "900", sy = "0", out = "peek.png", hover, reduced] = process.argv.slice(2);
const b = await chromium.launch({ executablePath: "/opt/pw-browsers/chromium" });
const ctx = await b.newContext({ viewport: { width: +w, height: +h }, isMobile: +w < 600, hasTouch: +w < 600, reducedMotion: reduced ? "reduce" : "no-preference" });
const p = await ctx.newPage();
await p.goto(`http://127.0.0.1:3100${path}${path.includes("?") ? "&" : "?"}present=1`, { waitUntil: "networkidle" });
await p.evaluate(() => document.fonts.ready);
await p.waitForTimeout(900);
// scroll in steps so ScrollTrigger fires
const target = +sy;
for (let y = 0; y <= target; y += 600) { await p.evaluate((v) => window.scrollTo(0, v), Math.min(y, target)); await p.waitForTimeout(60); }
await p.evaluate((v) => window.scrollTo(0, v), target);
await p.waitForTimeout(400);
if (hover) { await p.evaluate((sel) => document.querySelector(sel)?.scrollIntoView({ block: "center" }), hover); await p.waitForTimeout(400); await p.hover(hover); await p.waitForTimeout(700); }
await p.waitForTimeout(1400);
const dir = "/tmp/claude-0/-home-user-benchmark-advisors/bd507d5b-899f-5b41-a50c-39bb106196e9/scratchpad/";
await p.screenshot({ path: dir + out });
console.log("scrollY", await p.evaluate(() => window.scrollY), "->", out);
await b.close();
