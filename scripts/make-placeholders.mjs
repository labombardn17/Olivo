// Generates abstract, monochrome photographic placeholders. No stock imagery,
// no people, no trademarked devices. Each is a soft tonal field with one
// light source, so the palette tint layer has something to work with.
import sharp from "sharp";
import { mkdirSync } from "node:fs";

const out = new URL("../public/img/placeholders/", import.meta.url).pathname;
mkdirSync(out, { recursive: true });

function seeded(seed) {
  let s = seed >>> 0;
  return () => ((s = (s * 1664525 + 1013904223) >>> 0) / 4294967296);
}

function field({ w, h, base, range, light, seed, band }) {
  const rnd = seeded(seed);
  const buf = Buffer.alloc(w * h * 3);
  for (let y = 0; y < h; y++) {
    for (let x = 0; x < w; x++) {
      const nx = x / w, ny = y / h;
      // Soft light source
      const dx = nx - light.x, dy = ny - light.y;
      const d = Math.sqrt(dx * dx + dy * dy);
      let v = base + range * Math.max(0, 1 - d / light.r);
      // Vertical gradient like a wall meeting a floor
      v -= 28 * ny;
      // Optional dark band (a doorway, a table edge)
      if (band && nx > band.x0 && nx < band.x1) v -= band.depth * (1 - Math.abs((nx - (band.x0 + band.x1) / 2) / ((band.x1 - band.x0) / 2)));
      // Grain
      v += (rnd() - 0.5) * 10;
      const c = Math.max(0, Math.min(255, Math.round(v)));
      const i = (y * w + x) * 3;
      buf[i] = c; buf[i + 1] = c; buf[i + 2] = c;
    }
  }
  return sharp(buf, { raw: { width: w, height: h, channels: 3 } });
}

const shots = {
  "room-1": { w: 1600, h: 1000, base: 150, range: 80, light: { x: 0.72, y: 0.35, r: 0.55 }, seed: 1, band: { x0: 0.08, x1: 0.3, depth: 40 } },
  "room-2": { w: 1600, h: 1000, base: 140, range: 90, light: { x: 0.25, y: 0.3, r: 0.5 }, seed: 2, band: { x0: 0.62, x1: 0.95, depth: 35 } },
  "room-3": { w: 1600, h: 1000, base: 160, range: 70, light: { x: 0.5, y: 0.2, r: 0.7 }, seed: 3 },
  "skin-1": { w: 1200, h: 1500, base: 170, range: 70, light: { x: 0.35, y: 0.3, r: 0.6 }, seed: 4 },
  "skin-2": { w: 1200, h: 1500, base: 165, range: 75, light: { x: 0.7, y: 0.55, r: 0.6 }, seed: 5 },
  "hands-1": { w: 1600, h: 1000, base: 145, range: 85, light: { x: 0.55, y: 0.45, r: 0.45 }, seed: 6, band: { x0: 0.0, x1: 0.22, depth: 50 } },
  "steel-1": { w: 1200, h: 1500, base: 120, range: 110, light: { x: 0.6, y: 0.25, r: 0.4 }, seed: 7, band: { x0: 0.4, x1: 0.5, depth: 60 } },
  "light-1": { w: 1600, h: 1000, base: 175, range: 60, light: { x: 0.8, y: 0.15, r: 0.8 }, seed: 8 },
  portrait: { w: 1200, h: 1500, base: 150, range: 60, light: { x: 0.5, y: 0.25, r: 0.6 }, seed: 9 },
  map: { w: 1200, h: 800, base: 205, range: 20, light: { x: 0.5, y: 0.5, r: 1 }, seed: 10 },
};

for (const [name, s] of Object.entries(shots)) {
  let img = field(s).blur(name === "map" ? 0.3 : 1.2);
  if (name === "portrait") {
    // A neutral silhouette: head and shoulders as flat shapes.
    const svg = `<svg xmlns='http://www.w3.org/2000/svg' width='${s.w}' height='${s.h}'><g fill='#6b6b68'><circle cx='600' cy='560' r='190'/><path d='M180 1500 C 200 1000, 420 860, 600 860 C 780 860, 1000 1000, 1020 1500 Z'/></g></svg>`;
    img = img.composite([{ input: Buffer.from(svg) }]);
  }
  await img.jpeg({ quality: 78, mozjpeg: true }).toFile(`${out}${name}.jpg`);
  console.log("wrote", name);
}
