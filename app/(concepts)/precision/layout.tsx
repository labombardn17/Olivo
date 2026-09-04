import { JetBrains_Mono, Schibsted_Grotesk } from "next/font/google";
import type { ReactNode } from "react";
import "@/components/concepts/precision/precision.css";

const grotesk = Schibsted_Grotesk({ subsets: ["latin"], display: "swap", preload: true, weight: ["400", "500"], variable: "--font-schibsted" });
const mono = JetBrains_Mono({ subsets: ["latin"], display: "swap", preload: true, weight: ["400", "500"], variable: "--font-jetbrains" });

export default function PrecisionLayout({ children }: { children: ReactNode }) {
  return (
    <div
      data-concept="precision"
      className={`${grotesk.variable} ${mono.variable} font-text`}
      style={{ ["--font-display-face" as string]: "var(--font-schibsted)", ["--font-text-face" as string]: "var(--font-schibsted)", ["--font-mono-face" as string]: "var(--font-jetbrains)" }}
    >
      {children}
    </div>
  );
}
