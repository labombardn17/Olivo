import { ConceptShell } from "@/components/shared/ConceptShell";
import { resolvePageParams, type SearchParams } from "@/lib/page";
import { descriptions, pageMetadata } from "@/content/seo";

export const metadata = pageMetadata(descriptions.home);

export default async function Page({ searchParams }: { searchParams: SearchParams }) {
  const { palette, fromUrl } = await resolvePageParams(searchParams, "residence");
  return (
    <ConceptShell palette={palette} fromUrl={fromUrl}>
      <main><h1 className="font-display p-10 text-4xl">residence</h1></main>
    </ConceptShell>
  );
}
