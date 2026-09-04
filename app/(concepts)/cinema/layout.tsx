import { Instrument_Sans, Instrument_Serif } from "next/font/google";
import type { ReactNode } from "react";
import "@/components/concepts/cinema/cinema.css";

const sans = Instrument_Sans({ subsets: ["latin"], display: "swap", preload: true, weight: ["400", "500", "600"], variable: "--font-instrument-sans" });
const serif = Instrument_Serif({ subsets: ["latin"], display: "swap", preload: true, weight: "400", style: ["italic", "normal"], variable: "--font-instrument-serif" });

export default function CinemaLayout({ children }: { children: ReactNode }) {
  return (
    <div
      data-concept="cinema"
      className={`${sans.variable} ${serif.variable} font-text bg-ground text-ink`}
      style={{ ["--font-display-face" as string]: "var(--font-instrument-sans)", ["--font-text-face" as string]: "var(--font-instrument-sans)", ["--font-serif-face" as string]: "var(--font-instrument-serif)", ["--font-mono-face" as string]: "var(--font-instrument-sans)" }}
    >
      {children}
    </div>
  );
}
