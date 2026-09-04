// Lighthouse mobile against `next start` for every route. Gates: performance
// 85+, accessibility 100, best practices 100, SEO all passing except the
// intentional noindex (is-crawlable).
import lighthouse from "lighthouse";
import * as chromeLauncher from "chrome-launcher";
import { mkdirSync, writeFileSync } from "node:fs";
import { BASE, ensureServer } from "./server.mjs";

const root = new URL("..", import.meta.url).pathname;
const routes = ["/", "/atelier", "/cinema", "/precision", "/residence", "/current", "/atelier/emsculpt-neo", "/cinema/emsculpt-neo", "/precision/emsculpt-neo", "/residence/emsculpt-neo", "/current/emsculpt-neo", "/compare"];
const only = process.argv.find((a) => a.startsWith("--only="))?.slice(7).split(",");
mkdirSync(`${root}.lighthouse`, { recursive: true });
const stop = await ensureServer();
const chrome = await chromeLauncher.launch({ chromePath: "/opt/pw-browsers/chromium", chromeFlags: ["--headless=new", "--no-sandbox", "--disable-gpu"] });
const failures = [];
const rows = [];
for (const r of routes) {
  if (only && !only.includes(r)) continue;
  const res = await lighthouse(`${BASE}${r}`, { port: chrome.port, output: "json", logLevel: "error", onlyCategories: ["performance", "accessibility", "best-practices", "seo"] });
  const lhr = res.lhr;
  const s = Object.fromEntries(Object.entries(lhr.categories).map(([k, v]) => [k, Math.round((v.score ?? 0) * 100)]));
  const seoFails = lhr.categories.seo.auditRefs.map((a) => lhr.audits[a.id]).filter((a) => a.score !== null && a.score < 1 && a.id !== "is-crawlable").map((a) => a.id);
  const a11yFails = lhr.categories.accessibility.auditRefs.map((a) => lhr.audits[a.id]).filter((a) => a.score !== null && a.score < 1).map((a) => a.id);
  const bpFails = lhr.categories["best-practices"].auditRefs.map((a) => lhr.audits[a.id]).filter((a) => a.score !== null && a.score < 1).map((a) => a.id);
  const lcp = lhr.audits["largest-contentful-paint"]?.numericValue;
  rows.push(`${r.padEnd(26)} perf ${s.performance}  a11y ${s.accessibility}  bp ${s["best-practices"]}  seo ${s.seo}  LCP ${Math.round(lcp)}ms  seoFails [${seoFails}] a11y [${a11yFails}] bp [${bpFails}]`);
  if (s.performance < 85) failures.push(`${r}: performance ${s.performance}`);
  if (a11yFails.length) failures.push(`${r}: accessibility ${a11yFails.join(",")}`);
  if (bpFails.length) failures.push(`${r}: best practices ${bpFails.join(",")}`);
  if (seoFails.length) failures.push(`${r}: seo ${seoFails.join(",")}`);
  writeFileSync(`${root}.lighthouse/${r.replace(/\//g, "_") || "_root"}.json`, JSON.stringify(lhr));
}
await chrome.kill();
stop();
console.log(rows.join("\n"));
if (failures.length) {
  console.error("LIGHTHOUSE GATES FAILED\n" + failures.join("\n"));
  process.exit(1);
}
console.log("Lighthouse gates passed.");
