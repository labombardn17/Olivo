import type { Metadata } from "next";
import { Suspense } from "react";
import { noindex } from "@/content/seo";
import { CompareView } from "@/components/chooser/CompareView";

export const metadata: Metadata = { title: "Olivo Med Spa | Compare two concepts", robots: noindex };

export default function ComparePage() {
  return (
    <Suspense fallback={null}>
      <CompareView />
    </Suspense>
  );
}
