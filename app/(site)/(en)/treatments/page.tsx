import { treatmentsMeta, TreatmentsPage } from "@/components/site/pages/TreatmentsPage";

export const metadata = treatmentsMeta("en");

export default function Page() {
  return <TreatmentsPage lang="en" />;
}
