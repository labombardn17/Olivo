// Logs every LCP candidate Chrome reports for a route (mobile viewport). Usage: node scripts/lcp-trace.mjs / /treatments
import { chromium } from "playwright";
const browser = await chromium.launch({ executablePath: "/opt/pw-browsers/chromium" });
for (const path of process.argv.slice(2)) {
  const ctx = await browser.newContext({ viewport: { width: 412, height: 823 }, isMobile: true, deviceScaleFactor: 1.75 });
  const page = await ctx.newPage();
  await page.addInitScript(() => { window.__lcp = []; new PerformanceObserver((l) => { for (const e of l.getEntries()) window.__lcp.push({ t: Math.round(e.startTime), size: e.size, tag: e.element?.tagName, cls: (e.element?.className || "").toString().slice(0, 50), txt: (e.element?.textContent || e.element?.alt || "").slice(0, 30), url: (e.url || "").split("/").pop().slice(0, 30) }); }).observe({ type: "largest-contentful-paint", buffered: true }); });
  await page.goto("http://127.0.0.1:3100" + path, { waitUntil: "networkidle" });
  await page.waitForTimeout(1500);
  const lcp = await page.evaluate(() => window.__lcp);
  const paints = await page.evaluate(() => performance.getEntriesByType("paint").map((p) => p.name + ":" + Math.round(p.startTime)));
  console.log(path, paints.join(" "), JSON.stringify(lcp));
  await ctx.close();
}
await browser.close();
