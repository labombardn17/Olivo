import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Fraunces, Manrope } from "next/font/google";
import { concepts } from "@/content/olivo";
import { descriptions, noindex } from "@/content/seo";
import { palettes, conceptDefaults, isPaletteKey } from "@/lib/palettes";
import { ChooserDots } from "@/components/chooser/ChooserDots";

const fraunces = Fraunces({ subsets: ["latin"], display: "swap", preload: true, axes: ["opsz", "SOFT", "WONK"], variable: "--font-chooser-display" });
const manrope = Manrope({ subsets: ["latin"], display: "swap", preload: true, variable: "--font-chooser-text" });

export const metadata: Metadata = {
  title: "Olivo Med Spa | Five homepage concepts",
  description: descriptions.chooser,
  robots: noindex,
};

/** The URL the client receives. Five tiles, five palette dots, no redirect. */
export default async function Chooser({ searchParams }: { searchParams: Promise<{ palette?: string }> }) {
  const sp = await searchParams;
  const urlPalette = isPaletteKey(sp.palette) ? sp.palette : null;
  return (
    <main
      className={`${fraunces.variable} ${manrope.variable} min-h-screen px-5 md:px-10 py-10 md:py-14`}
      style={{ ["--font-display-face" as string]: "var(--font-chooser-display)", ["--font-text-face" as string]: "var(--font-chooser-text)" }}
    >
      <header className="flex flex-wrap items-end justify-between gap-6 border-b border-rule pb-6">
        <div>
          <p className="eyebrow text-ink-2">Olivo Med Spa</p>
          <h1 className="font-display mt-2 text-[2rem] md:text-[3rem] leading-[1.02] hang" style={{ fontVariationSettings: '"opsz" 144, "SOFT" 50' }}>
            Five homepages. One clinic.
          </h1>
          <p className="mt-3 max-w-[52ch] text-ink-2 text-[15px] leading-relaxed">
            Open a concept, then use the round switch at the bottom left to flip between all five and try each palette. Press 1 to 5 for concepts, P for palettes.
          </p>
        </div>
        <ChooserDots initial={urlPalette} />
      </header>

      <ol className="mt-10 grid gap-x-8 gap-y-14 md:grid-cols-6">
        {concepts.map((c, i) => {
          const wide = i === 0 || i === 3;
          return (
            <li key={c.key} className={wide ? "md:col-span-4" : i === 4 ? "md:col-span-6 md:grid md:grid-cols-6 md:gap-8" : "md:col-span-2"}>
              <Link href={`/${c.key}${urlPalette ? `?palette=${urlPalette}` : ""}`} className={`group block ${i === 4 ? "md:col-span-4" : ""}`}>
                <figure className="relative aspect-[16/10] overflow-hidden border border-rule bg-ground-2">
                  <Image
                    src={`/img/heroes/${c.key}-${urlPalette ?? conceptDefaults[c.key]}.jpg`}
                    alt={`Hero still of concept ${c.number}, ${c.name}`}
                    width={1440}
                    height={900}
                    sizes="(min-width: 52rem) 66vw, 100vw"
                    priority={i < 2}
                    className="h-full w-full object-cover object-top transition-opacity duration-500 group-hover:opacity-90"
                  />
                </figure>
                <div className="mt-4 flex items-baseline gap-4">
                  <span className="font-mono text-[12px] text-ink-2 tabular-nums">{c.number}</span>
                  <h2 className="font-display text-[1.75rem] leading-none" style={{ fontVariationSettings: '"opsz" 72, "SOFT" 30' }}>{c.name}</h2>
                  <span className="ml-auto text-[12px] text-ink-2">Default palette: {conceptDefaults[c.key]}</span>
                </div>
                <p className="mt-2 text-[14px] text-ink-2">{c.line}</p>
              </Link>
              {i === 4 && (
                <div className="md:col-span-2 mt-6 md:mt-0 text-[13px] text-ink-2 leading-relaxed self-end">
                  <p>Also: <Link href="/compare" className="u-draw text-ink">compare two side by side</Link>.</p>
                  <p className="mt-2">Add <span className="font-mono">?present=1</span> to hide the switch, <span className="font-mono">?notes=1</span> to send a note by email.</p>
                </div>
              )}
            </li>
          );
        })}
      </ol>

      <footer className="mt-16 border-t border-rule pt-6 text-[12px] text-ink-2 flex flex-wrap gap-x-8 gap-y-2">
        <span>Private design review. Not indexed.</span>
        <span>Palettes: {palettes.map((p) => p.name).join(", ")}.</span>
        <span>All imagery and reviews are placeholders.</span>
      </footer>
    </main>
  );
}
