// Slices a tall screenshot into viewable chunks: node scripts/slice.mjs <png> [chunkHeight] [scale]
import sharp from "sharp";
const [file, ch = "2200", sc = "0.5"] = process.argv.slice(2);
const img = sharp(file);
const { width, height } = await img.metadata();
const chunk = Number(ch), scale = Number(sc);
const out = process.env.OUT || "/tmp/claude-0/-home-user-benchmark-advisors/bd507d5b-899f-5b41-a50c-39bb106196e9/scratchpad";
let n = 0;
for (let y = 0; y < height; y += chunk) {
  const h = Math.min(chunk, height - y);
  await sharp(file).extract({ left: 0, top: y, width, height: h }).resize(Math.round(width * scale)).png().toFile(`${out}/slice-${n}.png`);
  n++;
}
console.log(`${n} slices, page height ${height}`);
