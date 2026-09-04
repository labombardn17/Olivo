import { ConceptShell } from "@/components/shared/ConceptShell";
import { Footer } from "@/components/shared/Footer";
import { resolvePageParams, type SearchParams } from "@/lib/page";
import { descriptions, pageMetadata } from "@/content/seo";
import { PrecisionNav, PrecisionWordmark } from "@/components/concepts/precision/PrecisionNav";
import { PrecisionHero } from "@/components/concepts/precision/PrecisionHero";
import { PrecisionIndex } from "@/components/concepts/precision/PrecisionIndex";
import { PrecisionConcerns } from "@/components/concepts/precision/PrecisionConcerns";
import { PrecisionDoctor, PrecisionFinal, PrecisionMemberships, PrecisionProof, PrecisionResults, PrecisionReviews, PrecisionVisit } from "@/components/concepts/precision/PrecisionSections";

export const metadata = pageMetadata(descriptions.home);

export default async function PrecisionPage({ searchParams }: { searchParams: SearchParams }) {
  const { palette, fromUrl } = await resolvePageParams(searchParams, "precision");
  return (
    <ConceptShell palette={palette} fromUrl={fromUrl}>
      <PrecisionNav />
      <main>
        <PrecisionHero />
        <PrecisionProof />
        <PrecisionDoctor />
        <PrecisionIndex />
        <PrecisionConcerns />
        <PrecisionResults />
        <PrecisionMemberships />
        <PrecisionReviews />
        <PrecisionVisit />
        <PrecisionFinal />
      </main>
      <Footer wordmark={<PrecisionWordmark />} />
    </ConceptShell>
  );
}
