import { specialsMeta, SpecialsPage } from "@/components/site/pages/OfferPages";

/** Daily, so campaigns appear and expire on their dates without a redeploy. */
export const revalidate = 86400;

export const metadata = specialsMeta("en");

export default function Page() {
  return <SpecialsPage lang="en" />;
}
