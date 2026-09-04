import { ConceptShell } from "@/components/shared/ConceptShell";
import { Footer } from "@/components/shared/Footer";
import { resolvePageParams, type SearchParams } from "@/lib/page";
import { descriptions, pageMetadata } from "@/content/seo";
import { ResidenceNav, ResidenceWordmark } from "@/components/concepts/residence/ResidenceNav";
import { ResidenceHero } from "@/components/concepts/residence/ResidenceHero";
import { ResidenceRooms } from "@/components/concepts/residence/ResidenceRooms";
import { ResidenceConcerns } from "@/components/concepts/residence/ResidenceConcerns";
import { ResidenceDoctor, ResidenceFinal, ResidenceMemberships, ResidenceProof, ResidenceResults, ResidenceReviews, ResidenceVisit } from "@/components/concepts/residence/ResidenceSections";

export const metadata = pageMetadata(descriptions.home);

export default async function ResidencePage({ searchParams }: { searchParams: SearchParams }) {
  const { palette, fromUrl } = await resolvePageParams(searchParams, "residence");
  return (
    <ConceptShell palette={palette} fromUrl={fromUrl}>
      <ResidenceNav />
      <main>
        <ResidenceHero />
        <ResidenceProof />
        <ResidenceDoctor />
        <ResidenceRooms />
        <ResidenceConcerns />
        <ResidenceResults />
        <ResidenceMemberships />
        <ResidenceReviews />
        <ResidenceVisit />
        <ResidenceFinal />
      </main>
      <Footer wordmark={<ResidenceWordmark className="!items-start" />} className="mx-[var(--inset)] mb-[var(--inset)]" />
    </ConceptShell>
  );
}
