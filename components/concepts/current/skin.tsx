import type { Skin } from "@/components/functional/HomePage";

export function Wordmark() {
  return (
    <a href="#top" className="inline-flex items-baseline gap-2 leading-none">
      <span className="font-display text-[1.4rem]">OLIVO</span><span className="text-[0.625rem] font-bold uppercase tracking-[0.14em] opacity-70">Med Spa</span>
    </a>
  );
}

export const skin: Skin = {
  wordmark: <Wordmark />,
  hero: "block",
  overlay: false,
  eyebrow: "Nine machines. One doctor.",
  title: <>Built different, on Fullerton.</>,
  sub: "The full BTL and Alma platforms under one roof, physician owned and led since 2013. Pick a concern and book.",
  resultsDark: true,
  doctorDark: false,
  finalTitle: "Book it.",
};
