import { LegalPage, legalMeta } from "@/components/site/LegalPage";
import { buildMeta } from "@/lib/meta";

const [title, description] = legalMeta("accessibility", "en");
export const metadata = buildMeta({ title, description, path: "/accessibility", lang: "en" });

export default function Page() {
  return <LegalPage kind="accessibility" lang="en" />;
}
