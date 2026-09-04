import type { Skin } from "@/components/functional/HomePage";

export function Wordmark() {
  return (
    <a href="#top" className="inline-flex items-baseline gap-2 leading-none">
      <span className="font-display text-[1.125rem] font-semibold tracking-[-0.02em]">OLIVO</span><span className="text-[0.625rem] font-medium uppercase tracking-[0.12em] opacity-70" style={{ fontFamily: "var(--font-mono-face)" }}>Med Spa</span>
    </a>
  );
}

export const skin: Skin = {
  wordmark: <Wordmark />,
  hero: "split",
  overlay: false,
  eyebrow: "Physician owned · Est. 2013 · 2550 W Fullerton",
  title: <>Every platform. One physician.</>,
  sub: "Emsculpt Neo, Emface, Exion, Emsella, Opus Plasma, CO2 laser, Miradry, Hydrafacial, and RF microneedling, chosen for you at a consultation.",
  resultsDark: false,
  doctorDark: true,
  finalTitle: "Book a consultation.",
};
