import type { Metadata } from "next";
import { HeroEditorial, HeroFilm, HeroPortrait } from "@/components/site/home/HeroVariants";

export const metadata: Metadata = { title: "Hero options | Olivo Med Spa", robots: { index: false, follow: false } };

const Label = ({ n, text }: { n: string; text: string }) => (
  <div className="container-x py-6"><p className="kicker">Option {n}</p><p className="mt-1 text-ink-2">{text}</p></div>
);

/** Internal review page: three homepage hero directions stacked. Not linked from the site. */
export default function Page() {
  return (
    <>
      <Label n="A" text="Portrait. The direction her current homepage takes: one face, full bleed, copy low over a deep orchid scrim." />
      <HeroPortrait />
      <Label n="B" text="Film. Her homepage film looping silently behind the copy, poster until it plays." />
      <HeroFilm />
      <Label n="C" text="Editorial. Headline first on orchid, the portrait card tucked under it, nothing over the face." />
      <HeroEditorial />
      <div className="py-16" />
    </>
  );
}
