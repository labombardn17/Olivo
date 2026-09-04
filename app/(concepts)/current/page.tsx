import { ConceptShell } from "@/components/shared/ConceptShell";
import { Footer } from "@/components/shared/Footer";
import { resolvePageParams, type SearchParams } from "@/lib/page";
import { descriptions, pageMetadata } from "@/content/seo";
import { CurrentNav, CurrentWordmark } from "@/components/concepts/current/CurrentNav";
import { CurrentHero } from "@/components/concepts/current/CurrentHero";
import { CurrentMachines } from "@/components/concepts/current/CurrentMachines";
import { CurrentConcerns } from "@/components/concepts/current/CurrentConcerns";
import { CurrentDoctor, CurrentFinal, CurrentMemberships, CurrentProof, CurrentResults, CurrentReviews, CurrentVisit } from "@/components/concepts/current/CurrentSections";

export const metadata = pageMetadata(descriptions.home);

export default async function CurrentPage({ searchParams }: { searchParams: SearchParams }) {
  const { palette, fromUrl } = await resolvePageParams(searchParams, "current");
  return (
    <ConceptShell palette={palette} fromUrl={fromUrl}>
      <CurrentNav />
      <main>
        <CurrentHero />
        <CurrentProof />
        <CurrentDoctor />
        <CurrentMachines />
        <CurrentConcerns />
        <CurrentResults />
        <CurrentMemberships />
        <CurrentReviews />
        <CurrentVisit />
        <CurrentFinal />
      </main>
      <Footer wordmark={<CurrentWordmark />} />
    </ConceptShell>
  );
}
