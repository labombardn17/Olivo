import { notFound } from "next/navigation";
import { categories } from "@/content/site";
import { services, getService } from "@/content/services";
import type { CategoryKey } from "@/content/types";
import { ServiceTemplate } from "@/components/site/templates/ServiceTemplate";
import { CategoryTemplate } from "@/components/site/templates/CategoryTemplate";
import { buildMeta } from "@/lib/meta";

export const dynamicParams = false;

export function generateStaticParams() {
  return [...categories.map((c) => ({ slug: c.key })), ...services.map((s) => ({ slug: s.slug }))];
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const cat = categories.find((c) => c.key === slug);
  if (cat) return buildMeta({ title: `${cat.name} in Logan Square, Chicago | Olivo Med Spa`, description: `${cat.line} Physician-led ${cat.name.toLowerCase()} at Olivo Med Spa in Logan Square, Chicago.`.slice(0, 158), path: `/treatments/${slug}` });
  const s = getService(slug);
  if (!s) return {};
  return buildMeta({ title: s.seo.title, description: s.seo.description, path: `/treatments/${slug}` });
}

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const cat = categories.find((c) => c.key === (slug as CategoryKey));
  if (cat) return <CategoryTemplate c={cat} />;
  const s = getService(slug);
  if (!s) notFound();
  return <ServiceTemplate s={s} />;
}
