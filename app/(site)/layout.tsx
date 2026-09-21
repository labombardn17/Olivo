import { Cormorant_Garamond, Figtree } from "next/font/google";
import type { ReactNode } from "react";
import "@/styles/site.css";
import { SiteHeader } from "@/components/site/SiteHeader";
import { SiteFooter } from "@/components/site/SiteFooter";
import { TextNow } from "@/components/site/TextNow";
import { JsonLd } from "@/components/site/JsonLd";
import { medicalBusiness, physician } from "@/lib/schema";

const cormorant = Cormorant_Garamond({ subsets: ["latin"], display: "swap", preload: true, weight: ["400", "500", "600"], style: ["normal", "italic"], variable: "--font-cormorant" });
const figtree = Figtree({ subsets: ["latin"], display: "swap", preload: true, variable: "--font-figtree" });

/** The public site. One design; the concept review lives under /concepts. */
export default function SiteLayout({ children }: { children: ReactNode }) {
  return (
    <div
      data-concept="site"
      className={`${cormorant.variable} ${figtree.variable} font-text`}
      style={{ ["--font-display-face" as string]: "var(--font-cormorant)", ["--font-text-face" as string]: "var(--font-figtree)", ["--font-mono-face" as string]: "var(--font-figtree)" }}
    >
      <a href="#main" className="sr-skip">Skip to content</a>
      <JsonLd data={[medicalBusiness(), physician()]} />
      <SiteHeader />
      <main id="main">{children}</main>
      <SiteFooter />
      <TextNow />
    </div>
  );
}
