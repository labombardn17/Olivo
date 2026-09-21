import { notFound } from "next/navigation";
import { posts } from "@/content/blog";
import { PostTemplate } from "@/components/site/templates/PostTemplate";
import { buildMeta } from "@/lib/meta";

export const dynamicParams = false;
export function generateStaticParams() { return posts.map((p) => ({ slug: p.slug })); }
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const p = posts.find((x) => x.slug === slug);
  return p ? buildMeta({ title: p.seo.title, description: p.seo.description, path: `/blog/${slug}`, type: "article" }) : {};
}
export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const p = posts.find((x) => x.slug === slug);
  if (!p) notFound();
  return <PostTemplate p={p} />;
}
