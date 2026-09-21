import { notFound } from "next/navigation";
import { concerns } from "@/content/concerns";
import { ConcernTemplate } from "@/components/site/templates/ConcernTemplate";
import { buildMeta } from "@/lib/meta";

export const dynamicParams = false;
export function generateStaticParams() { return concerns.map((c) => ({ slug: c.slug })); }
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const c = concerns.find((x) => x.slug === slug);
  return c ? buildMeta({ title: c.seo.title, description: c.seo.description, path: `/concerns/${slug}` }) : {};
}
export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const c = concerns.find((x) => x.slug === slug);
  if (!c) notFound();
  return <ConcernTemplate c={c} />;
}
