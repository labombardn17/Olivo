import { LegalPage } from "@/components/site/LegalPage";
import { buildMeta } from "@/lib/meta";
export const metadata = buildMeta({ title: "Terms of Use | Olivo Med Spa", description: "Terms of use for the Olivo Med Spa website, including that site content is educational and not a substitute for a consultation.", path: "/terms" });
export default function Page() { return <LegalPage kind="terms" />; }
