import { aboutMeta, AboutPage } from "@/components/site/pages/AboutPage";

export const metadata = aboutMeta("en");

export default function Page() {
  return <AboutPage lang="en" />;
}
