import { LegalPage, legalMeta } from "@/components/site/LegalPage";
import { buildMeta } from "@/lib/meta";

const [title, description] = legalMeta("privacy", "en");
export const metadata = buildMeta({ title, description, path: "/privacy", lang: "en" });

export default function Page() {
  return <LegalPage kind="privacy" lang="en" />;
}
