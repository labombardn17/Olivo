import type { Skin } from "@/components/functional/HomePage";

export function Wordmark() {
  return (
    <a href="#top" className="inline-flex items-baseline gap-2 leading-none">
      <span className="font-display text-[1.6rem] tracking-[0.2em]">OLIVO</span><span className="text-[0.5625rem] font-semibold uppercase tracking-[0.2em] opacity-70">Med Spa</span>
    </a>
  );
}

export const skin: Skin = {
  wordmark: <Wordmark />,
  hero: "framed",
  overlay: false,
  eyebrow: "A quiet room on Fullerton",
  title: <>Come as you are. Leave as you intend.</>,
  sub: "Physician owned and led since 2013, with the full BTL and Alma platforms in one calm clinic in Logan Square.",
  resultsDark: true,
  doctorDark: false,
  finalTitle: "We would love to see you.",
};
