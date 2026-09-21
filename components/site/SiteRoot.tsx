import { Cormorant_Garamond, Figtree } from "next/font/google";
import type { ReactNode } from "react";
import type { Lang } from "@/content/ui";
import { RootShell } from "@/components/shell/RootShell";
import "@/styles/tokens.css";
import "@/styles/site.css";
import { JsonLd } from "@/components/site/JsonLd";
import { SiteFrame } from "@/components/site/SiteFrame";
import { medicalBusiness, physician } from "@/lib/schema";

const cormorant = Cormorant_Garamond({ subsets: ["latin"], display: "swap", preload: true, weight: ["400", "500", "600"], style: ["normal", "italic"], variable: "--font-cormorant" });
const figtree = Figtree({ subsets: ["latin"], display: "swap", preload: true, variable: "--font-figtree" });

/** Root layout body for the public site in one language: fonts, schema, header, main, footer, text bar. */
export function SiteRoot({ lang, children }: { lang: Lang; children: ReactNode }) {
  return (
    <RootShell lang={lang}>
      <div
        data-concept="site"
        className={`${cormorant.variable} ${figtree.variable} font-text`}
        style={{ ["--font-display-face" as string]: "var(--font-cormorant)", ["--font-text-face" as string]: "var(--font-figtree)", ["--font-mono-face" as string]: "var(--font-figtree)" }}
      >
        <JsonLd data={[medicalBusiness(), physician()]} />
        <SiteFrame lang={lang}>{children}</SiteFrame>
      </div>
    </RootShell>
  );
}
