// Collects every VERIFY marker into docs/VERIFY.md so counsel and the client can work one list.
import { readdirSync, readFileSync, statSync, writeFileSync } from "node:fs";
import { join, relative } from "node:path";
const root = new URL("..", import.meta.url).pathname;
const files = [];
(function walk(d) { for (const n of readdirSync(d)) { const p = join(d, n); if (statSync(p).isDirectory()) walk(p); else if (/\.tsx?$/.test(n)) files.push(p); } })(join(root, "content"));
(function walk(d) { for (const n of readdirSync(d)) { const p = join(d, n); if (statSync(p).isDirectory()) walk(p); else if (/\.tsx?$/.test(n)) files.push(p); } })(join(root, "components"));
(function walk(d) { for (const n of readdirSync(d)) { const p = join(d, n); if (statSync(p).isDirectory()) walk(p); else if (/\.tsx?$/.test(n)) files.push(p); } })(join(root, "app"));
const items = new Map();
for (const f of files) {
  const text = readFileSync(f, "utf8");
  for (const m of text.matchAll(/(?:verify|Verify|boardVerify|bioVerify|concernsVerify|downtimeVerify|resultsVerify|firstVisitVerify|teamRoleVerify)\s*[:=]\s*["'`]([^"'`]+)["'`]/g)) items.set(m[1], relative(root, f));
  for (const m of text.matchAll(/<Verify note="([^"]+)"/g)) items.set(m[1], relative(root, f));
  for (const m of text.matchAll(/verify:\s*\[([^\]]+)\]/g)) for (const q of m[1].matchAll(/"([^"]+)"/g)) items.set(q[1], relative(root, f));
}
const lines = ["# VERIFY list", "", "Every claim on the prototype that is not sourced in the brief. Each renders in the HTML as `<!-- VERIFY: ... -->` next to the claim.", ""];
let i = 1;
for (const [note, file] of [...items.entries()].sort()) lines.push(`${i++}. ${note} (\`${file}\`)`);
writeFileSync(join(root, "docs/VERIFY.md"), lines.join("\n") + "\n");
console.log(`${items.size} verify items written to docs/VERIFY.md`);
