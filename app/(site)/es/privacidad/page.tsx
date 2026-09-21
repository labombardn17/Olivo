import { LegalPage, legalMeta } from "@/components/site/LegalPage";
import { buildMeta } from "@/lib/meta";

const [title, description] = legalMeta("privacy", "es");
export const metadata = buildMeta({ title, description, path: "/privacy", lang: "es" });

export default function Page() {
  return <LegalPage kind="privacy" lang="es" />;
}
