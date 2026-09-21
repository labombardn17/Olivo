import { areaParams, areaMeta, AreaRoute } from "@/components/site/pages/DynamicPages";
import type { SlugParams } from "@/components/site/pages/DynamicPages";

export const dynamicParams = false;
export const generateStaticParams = areaParams;

export async function generateMetadata({ params }: SlugParams) {
  const { slug } = await params;
  return areaMeta(slug, "es");
}

export default async function Page({ params }: SlugParams) {
  const { slug } = await params;
  return <AreaRoute slug={slug} lang="es" />;
}
