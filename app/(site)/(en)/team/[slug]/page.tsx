import { memberParams, memberMeta, MemberPage } from "@/components/site/pages/TeamPages";
import type { SlugParams } from "@/components/site/pages/DynamicPages";

export const dynamicParams = false;
export const generateStaticParams = memberParams;

export async function generateMetadata({ params }: SlugParams) {
  const { slug } = await params;
  return memberMeta(slug, "en");
}

export default async function Page({ params }: SlugParams) {
  const { slug } = await params;
  return <MemberPage slug={slug} lang="en" />;
}
