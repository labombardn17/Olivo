import { patientsMeta, ForPatientsPage } from "@/components/site/pages/MorePages";

export const metadata = patientsMeta("en");

export default function Page() {
  return <ForPatientsPage lang="en" />;
}
