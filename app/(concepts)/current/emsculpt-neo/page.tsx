import { ServicePage } from "@/components/functional/ServicePage";
import { Wordmark } from "@/components/concepts/current/skin";
import { descriptions, pageMetadata } from "@/content/seo";

export const metadata = pageMetadata(descriptions.emsculptNeo, "Emsculpt Neo | Olivo Med Spa, Logan Square");

export default function Page() {
  return <ServicePage concept="current" wordmark={<Wordmark />} />;
}
