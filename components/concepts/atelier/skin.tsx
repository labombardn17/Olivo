import type { Skin } from "@/components/functional/HomePage";

export function Wordmark() {
  return (
    <a href="#top" className="inline-flex items-baseline gap-2 leading-none">
      <span className="font-display text-[1.6rem] tracking-[0.02em]" style={{ fontVariationSettings: '"opsz" 72, "SOFT" 50' }}>OLIVO</span><span className="text-[0.625rem] font-semibold uppercase tracking-[0.18em] opacity-80">Med Spa</span>
    </a>
  );
}

export const skin: Skin = {
  wordmark: <Wordmark />,
  hero: "photo",
  overlay: true,
  eyebrow: "Physician-led med spa in Logan Square",
  title: <>Aesthetic medicine, practiced by a physician.</>,
  sub: "The full BTL and Alma platforms under one roof, with a treatment plan written at your consultation.",
  resultsDark: true,
  doctorDark: false,
  finalTitle: "Ready when you are.",
};
