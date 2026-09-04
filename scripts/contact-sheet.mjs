// Composites the 25 hero stills into one PNG: docs/contact-sheet.png
import sharp from "sharp";
import { mkdirSync } from "node:fs";

const root = new URL("..", import.meta.url).pathname;
const concepts = ["atelier", "cinema", "precision", "residence", "current"];
const palettes = ["noir", "orchid", "olivo", "champagne", "glacier"];
const W = 480, H = 300, PAD = 16, LABEL = 28;
const sheetW = PAD + palettes.length * (W + PAD);
const sheetH = PAD + concepts.length * (H + LABEL + PAD);
const layers = [];
let svgText = "";
for (let r = 0; r < concepts.length; r++) {
  for (let c = 0; c < palettes.length; c++) {
    const x = PAD + c * (W + PAD), y = PAD + r * (H + LABEL + PAD);
    const buf = await sharp(`${root}public/img/heroes/${concepts[r]}-${palettes[c]}.jpg`).resize(W, H, { fit: "cover", position: "top" }).png().toBuffer();
    layers.push({ input: buf, left: x, top: y });
    svgText += `<text x="${x}" y="${y + H + 19}" font-family="monospace" font-size="13" fill="#141414">${String(r + 1).padStart(2, "0")} ${concepts[r]} / ${palettes[c]}</text>`;
  }
}
const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="${sheetW}" height="${sheetH}">${svgText}</svg>`;
layers.push({ input: Buffer.from(svg), left: 0, top: 0 });
mkdirSync(`${root}docs`, { recursive: true });
await sharp({ create: { width: sheetW, height: sheetH, channels: 3, background: "#f7f4ee" } }).composite(layers).png().toFile(`${root}docs/contact-sheet.png`);
console.log("wrote docs/contact-sheet.png");
