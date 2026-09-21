import { treatmentParams, treatmentMeta, TreatmentRoute } from "@/components/site/pages/DynamicPages";
import type { SlugParams } from "@/components/site/pages/DynamicPages";

export const dynamicParams = false;
export const generateStaticParams = treatmentParams;

export async function generateMetadata({ params }: SlugParams) {
  const { slug } = await params;
  return treatmentMeta(slug, "es");
}

export default async function Page({ params }: SlugParams) {
  const { slug } = await params;
  return <TreatmentRoute slug={slug} lang="es" />;
}
