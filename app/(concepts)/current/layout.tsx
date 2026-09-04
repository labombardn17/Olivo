import { Archivo, Onest } from "next/font/google";
import type { ReactNode } from "react";
import "@/components/concepts/current/current.css";

const archivo = Archivo({ subsets: ["latin"], display: "swap", preload: true, axes: ["wdth"], variable: "--font-archivo" });
const onest = Onest({ subsets: ["latin"], display: "swap", preload: true, variable: "--font-onest" });

export default function CurrentLayout({ children }: { children: ReactNode }) {
  return (
    <div
      data-concept="current"
      className={`${archivo.variable} ${onest.variable} font-text`}
      style={{ ["--font-display-face" as string]: "var(--font-archivo)", ["--font-text-face" as string]: "var(--font-onest)", ["--font-mono-face" as string]: "var(--font-onest)" }}
    >
      {children}
    </div>
  );
}
