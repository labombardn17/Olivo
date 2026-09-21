// Axe accessibility pass on every route at 1440 and 390. Fails on any violation.
import { chromium } from "playwright";
import { readFileSync } from "node:fs";
import { createRequire } from "node:module";
import { BASE, ensureServer } from "./server.mjs";
import { ALL_ROUTES, CONCEPT_ROUTES, SITE_ROUTES } from "./routes.mjs";

const require = createRequire(import.meta.url);
const axeSource = readFileSync(require.resolve("axe-core/axe.min.js"), "utf8");
const routes = process.argv.includes("--all") ? ALL_ROUTES : process.argv.includes("--concepts") ? CONCEPT_ROUTES : (process.argv.find((a) => a.startsWith("--only="))?.slice(7).split(",") ?? SITE_ROUTES);
const stop = await ensureServer();
const browser = await chromium.launch({ executablePath: "/opt/pw-browsers/chromium" });
const failures = [];
for (const r of routes) {
  for (const w of [1440, 390]) {
    const ctx = await browser.newContext({ viewport: { width: w, height: w === 390 ? 844 : 900 }, isMobile: w === 390, reducedMotion: "reduce" });
    const page = await ctx.newPage();
    await page.goto(`${BASE}${r}`, { waitUntil: "networkidle" });
    await page.addScriptTag({ content: axeSource });
    const res = await page.evaluate(async () => {
      const out = await window.axe.run(document, { runOnly: { type: "tag", values: ["wcag2a", "wcag2aa", "wcag21a", "wcag21aa", "best-practice"] } });
      return out.violations.map((v) => ({ id: v.id, impact: v.impact, nodes: v.nodes.slice(0, 3).map((n) => n.target.join(" ")) }));
    });
    for (const v of res) failures.push(`${r} @${w}: ${v.id} (${v.impact}) ${v.nodes.join(" | ")}`);
    await ctx.close();
  }
  console.log("axe", r);
}
await browser.close();
stop();
if (failures.length) { console.error("AXE VIOLATIONS\n" + failures.join("\n")); process.exit(1); }
console.log("Axe: zero violations.");
