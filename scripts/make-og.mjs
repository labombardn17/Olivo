// Renders public/og.jpg (1200x630): wordmark, tagline, address on the orchid palette.
import sharp from "sharp";
const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630">
  <defs><linearGradient id="g" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#2a1b36"/><stop offset="1" stop-color="#1a1220"/></linearGradient></defs>
  <rect width="1200" height="630" fill="url(#g)"/>
  <circle cx="1010" cy="140" r="260" fill="#6e4b8f" opacity="0.28"/>
  <circle cx="1090" cy="520" r="180" fill="#c4a6dd" opacity="0.12"/>
  <text x="80" y="150" font-family="Cormorant Garamond, Georgia, serif" font-size="92" letter-spacing="14" fill="#efe6f3">OLIVO</text>
  <text x="84" y="192" font-family="Figtree, Helvetica, Arial, sans-serif" font-size="20" letter-spacing="6" fill="#c4a6dd">MED SPA</text>
  <text x="80" y="330" font-family="Cormorant Garamond, Georgia, serif" font-size="64" fill="#efe6f3">Come as you are.</text>
  <text x="80" y="404" font-family="Cormorant Garamond, Georgia, serif" font-size="64" fill="#efe6f3">Leave as you intend.</text>
  <text x="80" y="500" font-family="Figtree, Helvetica, Arial, sans-serif" font-size="26" fill="#baaec5">Physician owned and led since 2013 · Logan Square, Chicago</text>
  <text x="80" y="548" font-family="Figtree, Helvetica, Arial, sans-serif" font-size="22" fill="#baaec5">2550 W. Fullerton Ave · 872-315-3481</text>
</svg>`;
await sharp(Buffer.from(svg)).jpeg({ quality: 86 }).toFile(new URL("../public/og.jpg", import.meta.url).pathname);
console.log("og.jpg written");
