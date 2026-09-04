import { Cormorant_Garamond, Figtree } from "next/font/google";
import type { ReactNode } from "react";
import "@/components/concepts/residence/residence.css";

const cormorant = Cormorant_Garamond({ subsets: ["latin"], display: "swap", preload: true, weight: ["300", "400"], style: ["normal", "italic"], variable: "--font-cormorant" });
const figtree = Figtree({ subsets: ["latin"], display: "swap", preload: true, variable: "--font-figtree" });

export default function ResidenceLayout({ children }: { children: ReactNode }) {
  return (
    <div
      data-concept="residence"
      className={`${cormorant.variable} ${figtree.variable} font-text`}
      style={{ ["--font-display-face" as string]: "var(--font-cormorant)", ["--font-text-face" as string]: "var(--font-figtree)", ["--font-mono-face" as string]: "var(--font-figtree)" }}
    >
      {children}
    </div>
  );
}
