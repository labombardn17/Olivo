// Anti-template audit. Fails on any hit. Run: npm run audit
import { readdirSync, readFileSync, statSync } from "node:fs";
import { join, relative } from "node:path";

const root = new URL("..", import.meta.url).pathname;
const SRC_DIRS = ["app", "components", "content", "lib", "styles"];
const files = [];
function walk(d) {
  for (const n of readdirSync(d)) {
    const p = join(d, n);
    if (statSync(p).isDirectory()) walk(p);
    else if (/\.(tsx?|css|mdx?)$/.test(n)) files.push(p);
  }
}
SRC_DIRS.forEach((d) => walk(join(root, d)));

const failures = [];
const rel = (p) => relative(root, p);
const hit = (file, line, rule, text) => failures.push(`${rel(file)}:${line}  [${rule}]  ${text.trim().slice(0, 110)}`);

// 1. Fonts
const bannedFonts = /\b(Inter|Poppins|Roboto|Open_Sans|Open Sans|Montserrat|Lato|Geist(?!_Mono|\s?Mono)|Space_Grotesk|Space Grotesk|Plus_Jakarta|Plus Jakarta)\b/;
// 2. Tailwind default color utilities
const twColors = /(?:^|[\s"'`{(:!])(?:bg|text|border|from|to|via|ring|fill|stroke|outline|decoration|divide|shadow|accent|caret)-(?:gray|slate|zinc|neutral|stone|red|orange|amber|yellow|lime|green|emerald|teal|cyan|sky|blue|indigo|violet|purple|fuchsia|pink|rose|white|black)(?:-\d{2,3})?(?=[\s"'`})/])/;
// 3. Class patterns. Since the functional-homepage pivot (Ariava model) cards,
// shadows, pills and rounded corners are allowed; only text-gradient and
// Tailwind default-shadow/radius shortcuts stay banned so skins own those values.
const twPatterns = /\b(bg-gradient-to|bg-linear-to|bg-radial|bg-conic|bg-clip-text|shadow-lg|shadow-xl|shadow-2xl|rounded-2xl|rounded-3xl)\b/;
const roundedFull = /\bnever-match-rounded-full\b/;
const hoverScale = /whileHover=\{\{[^}]*scale:\s*(1\.\d+|[2-9])/;
const emoji = /[\u{1F300}-\u{1FAFF}\u{2600}-\u{27BF}]/u;
const icons = /from\s+["'](lucide-react|@heroicons\/react|react-icons)/;
const emDash = /—/;
// 4. Copy
const bannedWords = /\b(elevate[ds]?|transform(?:s|ed|ing|ation)?|unlock(?:s|ed)?|journey|seamless(?:ly)?|cutting-edge|state-of-the-art|empower(?:s|ed|ing)?|revolutioni[sz]e[sd]?|next-level|game-changer|bespoke|curated|tailored|sanctuary|radiance|rejuvenat(?:e|es|ed|ion|ing)|holistic|personali[sz]ed)\b/i;
const bannedPhrases = /(look and feel your best|FDA[- ]approved|0% interest|\bAPR\b|permanent(?:ly)?|\bcure[sd]?\b|book now|request appointment)/i;
const codeLine = /className=|style=|@keyframes|transform\s*[:=]|transform-origin|will-change|\.style\.|transition|translate/;
const notXButY = /It(?:'|’)s not [^.]{1,40}\. It(?:'|’)s /;
const exclaim = /[A-Za-z]![\s"'<]/;
const superlative = /\b(#1|number one|the best|most complete|most advanced)\b/i;

for (const f of files) {
  const text = readFileSync(f, "utf8");
  const isSwitcher = /components\/(switcher|chooser)\//.test(f);
  const isTokens = /styles\/tokens\.css$/.test(f);
  const isAuditDoc = /\.mdx?$/.test(f);
  text.split("\n").forEach((line, i) => {
    const n = i + 1;
    if (bannedFonts.test(line) && !/^\s*\/\//.test(line)) hit(f, n, "font", line);
    if (twColors.test(line)) hit(f, n, "tw-color", line);
    if (twPatterns.test(line)) hit(f, n, "tw-pattern", line);
    if (roundedFull.test(line) && !isSwitcher) hit(f, n, "rounded-full", line);
    if (hoverScale.test(line)) hit(f, n, "hover-scale", line);
    if (emoji.test(line)) hit(f, n, "emoji", line);
    if (icons.test(line)) hit(f, n, "icon-lib", line);
    if (emDash.test(line)) hit(f, n, "em-dash", line);
    if (/VERIFY|banned|audit/i.test(line) || isAuditDoc || isTokens) return;
    if (bannedWords.test(line) && !codeLine.test(line)) hit(f, n, "banned-word", line);
    if (bannedPhrases.test(line)) hit(f, n, "banned-phrase", line);
    if (notXButY.test(line)) hit(f, n, "not-x-its-y", line);
    if (exclaim.test(line) && /content\//.test(f)) hit(f, n, "exclamation", line);
    if (superlative.test(line) && !/verify/i.test(line)) hit(f, n, "superlative", line);
  });
}

// 5. Contrast for all 25 concept and palette pairs
const css = readFileSync(join(root, "styles/tokens.css"), "utf8");
const palettes = {};
for (const m of css.matchAll(/html\[data-palette="(\w+)"\]\s*\{([^}]+)\}/g)) {
  const vars = {};
  for (const v of m[2].matchAll(/--([\w-]+):\s*(#[0-9a-fA-F]{6})/g)) vars[v[1]] = v[2];
  palettes[m[1]] = vars;
}
const lum = (hex) => {
  const c = [1, 3, 5].map((i) => parseInt(hex.slice(i, i + 2), 16) / 255).map((v) => (v <= 0.03928 ? v / 12.92 : ((v + 0.055) / 1.055) ** 2.4));
  return 0.2126 * c[0] + 0.7152 * c[1] + 0.0722 * c[2];
};
const ratio = (a, b) => { const [x, y] = [lum(a), lum(b)].sort((p, q) => q - p); return (x + 0.05) / (y + 0.05); };
const concepts = ["atelier", "cinema", "precision", "residence", "current"];
const report = [];
for (const c of concepts) {
  for (const [k, v] of Object.entries(palettes)) {
    const schemes = c === "cinema" ? ["d"] : ["l", "d"]; // light concepts also run inverse sections
    for (const s of schemes) {
      const g = v[`${s}-ground`], g2 = v[`${s}-ground-2`], ink = v[`${s}-ink`], ink2 = v[`${s}-ink-2`], at = v[`${s}-accent-text`], ai = v[`${s}-accent-ink`], af = v[`${s}-accent-fill`], bt = v[`${s}-brass-text`];
      const checks = [
        ["ink on ground", ratio(ink, g), 4.5], ["ink on ground-2", ratio(ink, g2), 4.5],
        ["ink-2 on ground", ratio(ink2, g), 4.5], ["ink-2 on ground-2", ratio(ink2, g2), 4.5],
        ["accent-text on ground", ratio(at, g), 4.5], ["accent-text on ground-2", ratio(at, g2), 4.5],
        ["brass-text on ground", ratio(bt, g), 4.5], ["brass-text on ground-2", ratio(bt, g2), 4.5], ["accent-ink on accent-fill", ratio(ai, af), 4.5],
        ["focus ring (accent-text) on ground", ratio(at, g), 3], ["display ink on ground", ratio(ink, g), 3],
      ];
      for (const [name, r, min] of checks) {
        report.push(`${c}/${k}/${s}: ${name} ${r.toFixed(2)}`);
        if (r < min) failures.push(`contrast  ${c} ${k} (${s === "d" ? "dark" : "light"}): ${name} = ${r.toFixed(2)} < ${min}`);
      }
    }
  }
}

if (process.argv.includes("--contrast")) console.log(report.join("\n"));
if (failures.length) {
  console.error(`AUDIT FAILED: ${failures.length} hit(s)\n` + failures.join("\n"));
  process.exit(1);
}
console.log(`Audit passed: ${files.length} files, ${report.length} contrast checks.`);
