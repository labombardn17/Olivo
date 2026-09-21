import { postParams, postMeta, PostRoute } from "@/components/site/pages/DynamicPages";
import type { SlugParams } from "@/components/site/pages/DynamicPages";

export const dynamicParams = false;
export const generateStaticParams = postParams;

export async function generateMetadata({ params }: SlugParams) {
  const { slug } = await params;
  return postMeta(slug, "es");
}

export default async function Page({ params }: SlugParams) {
  const { slug } = await params;
  return <PostRoute slug={slug} lang="es" />;
}
