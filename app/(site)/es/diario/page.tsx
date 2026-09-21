import { blogMeta, BlogPage } from "@/components/site/pages/BlogPage";

export const metadata = blogMeta("es");

export default function Page() {
  return <BlogPage lang="es" />;
}
