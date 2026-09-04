/** Film grain at 5% multiply. Shown only for concepts that opt in via CSS. */
export function Grain() {
  const svg =
    "data:image/svg+xml;utf8," +
    encodeURIComponent(
      `<svg xmlns='http://www.w3.org/2000/svg' width='240' height='240'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2' stitchTiles='stitch'/><feColorMatrix values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.9 0'/></filter><rect width='100%' height='100%' filter='url(#n)'/></svg>`,
    );
  return <div aria-hidden="true" className="grain" data-grain="" style={{ backgroundImage: `url("${svg}")` }} />;
}
