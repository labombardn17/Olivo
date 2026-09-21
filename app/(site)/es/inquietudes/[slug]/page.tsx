import { concernParams, concernMeta, ConcernRoute } from "@/components/site/pages/DynamicPages";
import type { SlugParams } from "@/components/site/pages/DynamicPages";

export const dynamicParams = false;
export const generateStaticParams = concernParams;

export async function generateMetadata({ params }: SlugParams) {
  const { slug } = await params;
  return concernMeta(slug, "es");
}

export default async function Page({ params }: SlugParams) {
  const { slug } = await params;
  return <ConcernRoute slug={slug} lang="es" />;
}
