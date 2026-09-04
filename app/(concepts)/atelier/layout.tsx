import { Fraunces, Manrope } from "next/font/google";
import type { ReactNode } from "react";
import "@/components/concepts/atelier/atelier.css";

const fraunces = Fraunces({ subsets: ["latin"], display: "swap", preload: true, axes: ["opsz", "SOFT", "WONK"], variable: "--font-fraunces" });
const manrope = Manrope({ subsets: ["latin"], display: "swap", preload: true, variable: "--font-manrope" });

export default function AtelierLayout({ children }: { children: ReactNode }) {
  return (
    <div
      data-concept="atelier"
      className={`${fraunces.variable} ${manrope.variable} font-text`}
      style={{ ["--font-display-face" as string]: "var(--font-fraunces)", ["--font-text-face" as string]: "var(--font-manrope)", ["--font-mono-face" as string]: "var(--font-manrope)" }}
    >
      {children}
    </div>
  );
}
