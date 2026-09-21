import { LegalPage } from "@/components/site/LegalPage";
import { buildMeta } from "@/lib/meta";
export const metadata = buildMeta({ title: "Accessibility Statement | Olivo Med Spa", description: "Olivo Med Spa's commitment to an accessible website and clinic in Logan Square, Chicago, and how to reach us if something is hard to use.", path: "/accessibility" });
export default function Page() { return <LegalPage kind="accessibility" />; }
