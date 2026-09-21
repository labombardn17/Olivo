import { visitMeta, VisitPage } from "@/components/site/pages/ContactPages";

export const metadata = visitMeta("en");

export default function Page() {
  return <VisitPage lang="en" />;
}
