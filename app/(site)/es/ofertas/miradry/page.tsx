import { miradryOfferMeta, MiradryOfferPage } from "@/components/site/pages/MiradryOffer";

/** Daily, so the price follows the running campaign without a redeploy. */
export const revalidate = 86400;

export const metadata = miradryOfferMeta("es");

export default function Page() {
  return <MiradryOfferPage lang="es" />;
}
