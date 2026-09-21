import type { Metadata } from "next";
import Link from "next/link";
import { Fraunces, Manrope } from "next/font/google";
import { descriptions, noindex } from "@/content/seo";
import { palettes } from "@/lib/palettes";
import { ChooserDots } from "@/components/chooser/ChooserDots";
import { ChooserTiles } from "@/components/chooser/ChooserTiles";
import { DesignProvider } from "@/components/switcher/DesignProvider";

// The chooser is a tool page: Fraunces with the optical size axis only, a third of the full file.
const fraunces = Fraunces({ subsets: ["latin"], display: "swap", preload: true, axes: ["opsz"], variable: "--font-chooser-display" });
const manrope = Manrope({ subsets: ["latin"], display: "swap", preload: true, variable: "--font-chooser-text" });

export const metadata: Metadata = {
  title: "Olivo Med Spa | Five homepage concepts",
  description: descriptions.chooser,
  robots: noindex,
};

/** The URL the client receives. Five tiles, five palette dots, no redirect. Static; palette is client state. */
export default function Chooser() {
  return (
    <DesignProvider>
    <main
      className={`${fraunces.variable} ${manrope.variable} font-text min-h-screen px-5 md:px-10 py-10 md:py-14`}
      style={{ ["--font-display-face" as string]: "var(--font-chooser-display)", ["--font-text-face" as string]: "var(--font-chooser-text)" }}
    >
      <header className="flex flex-wrap items-end justify-between gap-6 border-b border-rule pb-6">
        <div>
          <p className="eyebrow text-ink-2">Olivo Med Spa</p>
          <h1 className="font-display mt-2 text-[2rem] md:text-[3rem] leading-[1.02] hang" style={{ fontVariationSettings: '"opsz" 144' }}>
            Five homepages. One clinic.
          </h1>
          <p className="mt-3 max-w-[52ch] text-ink-2 text-[15px] leading-relaxed">
            Open a concept, then use the round switch at the bottom left to flip between all five and try each palette. Press 1 to 5 for concepts, P for palettes.
          </p>
        </div>
        <ChooserDots />
      </header>

      <ChooserTiles />

      <footer className="mt-16 border-t border-rule pt-6 text-[12px] text-ink-2 flex flex-wrap gap-x-8 gap-y-2">
        <span>Private design review. Not indexed.</span>
        <span>Palettes: {palettes.map((p) => p.name).join(", ")}.</span>
        <span>All imagery and reviews are placeholders.</span>
      </footer>
    </main>
    </DesignProvider>
  );
}
