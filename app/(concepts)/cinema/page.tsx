import { ConceptShell } from "@/components/shared/ConceptShell";
import { Footer } from "@/components/shared/Footer";
import { Cursor } from "@/components/shared/Cursor";
import { resolvePageParams, type SearchParams } from "@/lib/page";
import { descriptions, pageMetadata } from "@/content/seo";
import { CinemaNav, CinemaWordmark } from "@/components/concepts/cinema/CinemaNav";
import { CinemaHero } from "@/components/concepts/cinema/CinemaHero";
import { CinemaCollection } from "@/components/concepts/cinema/CinemaCollection";
import { CinemaConcerns } from "@/components/concepts/cinema/CinemaConcerns";
import { CinemaDoctor, CinemaFinal, CinemaMemberships, CinemaProof, CinemaResults, CinemaReviews, CinemaVisit } from "@/components/concepts/cinema/CinemaSections";

export const metadata = pageMetadata(descriptions.home);

export default async function CinemaPage({ searchParams }: { searchParams: SearchParams }) {
  const { palette, fromUrl } = await resolvePageParams(searchParams, "cinema");
  return (
    <ConceptShell palette={palette} fromUrl={fromUrl}>
      <CinemaNav />
      <main>
        <CinemaHero />
        <CinemaProof />
        <CinemaDoctor />
        <CinemaCollection />
        <CinemaConcerns />
        <CinemaResults />
        <CinemaMemberships />
        <CinemaReviews />
        <CinemaVisit />
        <CinemaFinal />
      </main>
      <Footer wordmark={<CinemaWordmark />} />
      <Cursor />
    </ConceptShell>
  );
}
