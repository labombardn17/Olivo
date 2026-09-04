// Functional checks for the design switcher: open, switch concept via panel and keys, palette persistence, present mode.
import { chromium } from "playwright";
import { BASE, ensureServer } from "./server.mjs";
const stop = await ensureServer();
const b = await chromium.launch({ executablePath: "/opt/pw-browsers/chromium" });
const p = await b.newPage({ viewport: { width: 1440, height: 900 } });
const fails = [];
const check = (c, m) => { if (!c) fails.push(m); };
const pal = () => p.evaluate(() => document.documentElement.getAttribute("data-palette"));

await p.goto(`${BASE}/atelier`, { waitUntil: "networkidle" });
check((await pal()) === "olivo", "atelier default palette should be olivo, got " + (await pal()));
await p.click("[data-switcher] > button");
await p.waitForSelector("[data-switcher] [role=dialog]");
await p.click("[data-switcher] button[aria-label='Palette: Glacier']");
await p.waitForTimeout(500);
check((await pal()) === "glacier", "palette dot should set glacier");
check(p.url().includes("palette=glacier"), "URL should carry palette=glacier, got " + p.url());
await p.click("[data-switcher] > button");
await p.click("[data-switcher] > button");
await p.click("[data-switcher] ol button:has-text('Cinema')");
await p.waitForURL(/\/cinema/, { timeout: 8000 });
await p.waitForTimeout(900);
check((await pal()) === "glacier", "chosen palette should persist across concept switch, got " + (await pal()));
check(await p.evaluate(() => !!document.querySelector('[data-concept="cinema"]')), "cinema segment should mount");
await p.keyboard.press("3");
await p.waitForURL(/\/precision/, { timeout: 8000 });
await p.waitForTimeout(900);
check((await pal()) === "glacier", "palette persists via key switch");
await p.keyboard.press("p");
await p.waitForTimeout(500);
check((await pal()) === "noir", "P cycles glacier to noir, got " + (await pal()));
await p.keyboard.press("h");
await p.waitForTimeout(200);
check(!(await p.$("[data-switcher]")), "H hides the switcher");
// Deep link cold load
const p2 = await b.newPage({ viewport: { width: 1440, height: 900 } });
await p2.goto(`${BASE}/precision?palette=noir`, { waitUntil: "domcontentloaded" });
check((await p2.evaluate(() => document.documentElement.getAttribute("data-palette"))) === "noir", "deep link palette resolves on cold load");
// Fresh context: stored palette wins over concept default
const ctx = await b.newContext({ viewport: { width: 1440, height: 900 } });
const p3 = await ctx.newPage();
await p3.goto(`${BASE}/residence`, { waitUntil: "domcontentloaded" });
check((await p3.evaluate(() => document.documentElement.getAttribute("data-palette"))) === "champagne", "residence default champagne in a fresh context");
await p3.goto(`${BASE}/residence?present=1`, { waitUntil: "networkidle" });
check(!(await p3.$("[data-switcher]")), "present=1 hides the switcher");
await p3.goto(`${BASE}/residence?notes=1`, { waitUntil: "networkidle" });
await p3.click("[data-switcher] > button");
check(!!(await p3.$("[data-switcher] a[href^='mailto:']")), "notes=1 shows the mailto link");
// Typing guard: keys ignored in inputs
await p3.goto(`${BASE}/compare`, { waitUntil: "networkidle" });
await p3.focus("select");
await p3.keyboard.press("2");
await p3.waitForTimeout(300);
check(p3.url().includes("/compare"), "number keys ignored while a select is focused");
await b.close();
stop();
if (fails.length) { console.error("SWITCHER FAILURES\n" + fails.join("\n")); process.exit(1); }
console.log("Switcher checks passed.");
