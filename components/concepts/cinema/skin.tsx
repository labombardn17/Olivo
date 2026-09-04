import type { Skin } from "@/components/functional/HomePage";

export function Wordmark() {
  return (
    <a href="#top" className="inline-flex items-baseline gap-2 leading-none">
      <span className="font-display text-[1.25rem] font-semibold tracking-[0.1em]">OLIVO</span><span className="text-[0.625rem] font-medium uppercase tracking-[0.18em] opacity-70">Med Spa</span>
    </a>
  );
}

export const skin: Skin = {
  wordmark: <Wordmark />,
  hero: "film",
  overlay: true,
  eyebrow: "Logan Square · Since 2013",
  title: <>Aging is <span className="serif">optional</span>.</>,
  sub: "Nine device platforms, one physician, one address on Fullerton. Book a consultation and get a plan, not a pitch.",
  resultsDark: false,
  doctorDark: false,
  finalTitle: "The doctor is in.",
};
