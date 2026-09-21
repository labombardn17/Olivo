import { notFound } from "next/navigation";
import { areas } from "@/content/areas";
import { AreaTemplate } from "@/components/site/templates/AreaTemplate";
import { buildMeta } from "@/lib/meta";

export const dynamicParams = false;
export function generateStaticParams() { return areas.map((a) => ({ slug: a.slug })); }
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const a = areas.find((x) => x.slug === slug);
  return a ? buildMeta({ title: a.seo.title, description: a.seo.description, path: `/med-spa/${slug}` }) : {};
}
export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const a = areas.find((x) => x.slug === slug);
  if (!a) notFound();
  return <AreaTemplate a={a} />;
}
