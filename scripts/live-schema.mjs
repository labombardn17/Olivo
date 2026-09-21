// Structured data check: every JSON-LD block on every sitemap URL, validated
// against the live schema.org vocabulary (types exist, properties allowed on
// the type). Usage: node scripts/live-schema.mjs https://olivo-med-spa.vercel.app
const base = process.argv[2];
const vocab = await (await fetch("https://schema.org/version/latest/schemaorg-current-https.jsonld")).json();
const types = new Map(), props = new Map();
for (const n of vocab["@graph"]) {
  const id = n["@id"]; const t = [].concat(n["@type"]);
  if (t.includes("rdfs:Class")) types.set(id.replace("schema:", ""), [].concat(n["rdfs:subClassOf"] || []).map((x) => x["@id"].replace("schema:", "")));
  if (t.includes("rdf:Property")) props.set(id.replace("schema:", ""), [].concat(n["schema:domainIncludes"] || []).map((x) => x["@id"].replace("schema:", "")));
}
const ancestors = (t, acc = new Set()) => { if (!t || acc.has(t)) return acc; acc.add(t); for (const p of types.get(t) || []) ancestors(p, acc); return acc; };
const sm = await (await fetch(base + "/sitemap.xml")).text();
const urls = [...sm.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1]);
const issues = new Map(); let blocks = 0; const typeCount = new Map();
const note = (k) => issues.set(k, (issues.get(k) || 0) + 1);
const walk = (node) => {
  if (Array.isArray(node)) return node.forEach(walk);
  if (!node || typeof node !== "object") return;
  const ts = [].concat(node["@type"] || []);
  if (ts.length) {
    for (const t of ts) { typeCount.set(t, (typeCount.get(t) || 0) + 1); if (!types.has(t)) note(`unknown type ${t}`); }
    const anc = new Set(ts.flatMap((t) => [...ancestors(t)]));
    for (const k of Object.keys(node)) {
      if (k.startsWith("@")) continue;
      if (!props.has(k)) { note(`unknown property ${k}`); continue; }
      const dom = props.get(k);
      if (dom.length && !dom.some((d) => anc.has(d))) note(`${k} not allowed on ${ts.join("|")}`);
    }
  }
  for (const v of Object.values(node)) if (v && typeof v === "object") walk(v);
};
for (const u of urls) {
  const h = await (await fetch(u, { headers: { "user-agent": "Mozilla/5.0 OlivoQA" } })).text();
  for (const m of h.matchAll(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/g)) { blocks++; try { walk(JSON.parse(m[1])); } catch { note("invalid json on " + u); } }
}
console.log("pages", urls.length, "blocks", blocks);
console.log("types", JSON.stringify([...typeCount]));
console.log("issues", issues.size);
for (const [k, v] of issues) console.log("ISSUE", v, k);
if (issues.size) process.exit(1);
