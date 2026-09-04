import { ConceptShell } from "@/components/shared/ConceptShell";
import { Footer } from "@/components/shared/Footer";
import { resolvePageParams, type SearchParams } from "@/lib/page";
import { descriptions, pageMetadata } from "@/content/seo";
import { AtelierNav, AtelierWordmark } from "@/components/concepts/atelier/AtelierNav";
import { AtelierHero } from "@/components/concepts/atelier/AtelierHero";
import { AtelierConcerns } from "@/components/concepts/atelier/AtelierConcerns";
import { AtelierInstruments } from "@/components/concepts/atelier/AtelierInstruments";
import { AtelierResults } from "@/components/concepts/atelier/AtelierResults";
import { AtelierDoctor, AtelierFinal, AtelierMemberships, AtelierProof, AtelierReviews, AtelierVisit } from "@/components/concepts/atelier/AtelierSections";

export const metadata = pageMetadata(descriptions.home);

export default async function AtelierPage({ searchParams }: { searchParams: SearchParams }) {
  const { palette, fromUrl } = await resolvePageParams(searchParams, "atelier");
  return (
    <ConceptShell palette={palette} fromUrl={fromUrl}>
      <AtelierNav />
      <main>
        <AtelierHero />
        <AtelierProof />
        <AtelierDoctor />
        <AtelierConcerns />
        <AtelierInstruments />
        <AtelierResults />
        <AtelierMemberships />
        <AtelierReviews />
        <AtelierVisit />
        <AtelierFinal />
      </main>
      <Footer wordmark={<AtelierWordmark />} />
    </ConceptShell>
  );
}
