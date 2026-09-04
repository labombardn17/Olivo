import type { Metadata } from "next";
import { noindex } from "@/content/seo";
import { CompareView } from "@/components/chooser/CompareView";

export const metadata: Metadata = { title: "Olivo Med Spa | Compare two concepts", robots: noindex };

export default async function ComparePage({ searchParams }: { searchParams: Promise<{ a?: string; b?: string; pa?: string; pb?: string }> }) {
  const sp = await searchParams;
  return <CompareView a={sp.a} b={sp.b} pa={sp.pa} pb={sp.pb} />;
}
