import { HomePage } from "@/components/functional/HomePage";
import { skin } from "@/components/concepts/residence/skin";
import { descriptions, pageMetadata } from "@/content/seo";

export const metadata = pageMetadata(descriptions.home);

export default function Page() {
  return <HomePage skin={skin} />;
}
