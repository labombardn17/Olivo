import type { ReactNode } from "react";
import { ConceptShell } from "@/components/shared/ConceptShell";
import { SiteHeader } from "./SiteHeader";
import { Hero, TrustBar, type HeroVariant } from "./Hero";
import { ServicesGrid, TechnologyStrip } from "./ServicesGrid";
import { ResultsPreview, Reviews } from "./Reviews";
import { Memberships } from "./Memberships";
import { Doctor } from "./Doctor";
import { Faq, Visit } from "./Visit";
import { FinalCta } from "./FinalCta";
import { FloatingCta } from "./FloatingCta";
import { SiteFooter } from "./SiteFooter";

export interface Skin {
  wordmark: ReactNode;
  hero: HeroVariant;
  /** Header transparent over a dark hero. */
  overlay: boolean;
  eyebrow: string;
  title: ReactNode;
  sub: string;
  /** Section tones. */
  resultsDark: boolean;
  doctorDark: boolean;
  finalTitle: string;
}

/** The shared functional homepage. Five concepts compose it with their own skin. Order follows Ariava: hero, trust, services, technology, results, reviews, memberships, doctor, visit, FAQ, final CTA. */
export function HomePage({ skin }: { skin: Skin }) {
  return (
    <ConceptShell>
      <SiteHeader wordmark={skin.wordmark} overlay={skin.overlay} />
      <main>
        <Hero variant={skin.hero} eyebrow={skin.eyebrow} title={skin.title} sub={skin.sub} />
        <TrustBar />
        <ServicesGrid />
        <TechnologyStrip />
        <ResultsPreview dark={skin.resultsDark} />
        <Reviews />
        <Memberships />
        <Doctor dark={skin.doctorDark} />
        <Visit />
        <Faq />
        <FinalCta title={skin.finalTitle} />
      </main>
      <SiteFooter wordmark={skin.wordmark} />
      <FloatingCta />
    </ConceptShell>
  );
}
