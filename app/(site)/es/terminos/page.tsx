import { LegalPage, legalMeta } from "@/components/site/LegalPage";
import { buildMeta } from "@/lib/meta";

const [title, description] = legalMeta("terms", "es");
export const metadata = buildMeta({ title, description, path: "/terms", lang: "es" });

export default function Page() {
  return <LegalPage kind="terms" lang="es" />;
}
