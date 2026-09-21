import { LegalPage } from "@/components/site/LegalPage";
import { buildMeta } from "@/lib/meta";
export const metadata = buildMeta({ title: "Privacy Policy | Olivo Med Spa", description: "How Olivo Med Spa in Logan Square, Chicago handles information collected through this website and by phone, text, and online booking.", path: "/privacy" });
export default function Page() { return <LegalPage kind="privacy" />; }
