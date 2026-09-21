import { LegalPage, legalMeta } from "@/components/site/LegalPage";
import { buildMeta } from "@/lib/meta";

const [title, description] = legalMeta("accessibility", "es");
export const metadata = buildMeta({ title, description, path: "/accessibility", lang: "es" });

export default function Page() {
  return <LegalPage kind="accessibility" lang="es" />;
}
