import { blogMeta, BlogPage } from "@/components/site/pages/BlogPage";

export const metadata = blogMeta("en");

export default function Page() {
  return <BlogPage lang="en" />;
}
