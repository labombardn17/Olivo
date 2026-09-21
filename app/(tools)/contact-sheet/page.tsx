import type { Metadata } from "next";
import { noindex } from "@/content/seo";
import { concepts } from "@/content/olivo";
import { palettes } from "@/lib/palettes";
import { withBase } from "@/lib/base";

export const metadata: Metadata = { title: "Olivo Med Spa | Contact sheet", robots: noindex };

/** Dev only: 25 hero stills in a grid, one row per concept. Images come from scripts/screenshots.mjs. */
export default function ContactSheet() {
  return (
    <main className="min-h-screen bg-tool-ground text-tool-ink p-4 font-mono text-[11px]">
      <h1 className="uppercase tracking-[0.12em] mb-4">Contact sheet: 5 concepts x 5 palettes at 1440</h1>
      {concepts.map((c) => (
        <section key={c.key} aria-labelledby={`cs-${c.key}`} className="mb-6">
          <h2 id={`cs-${c.key}`} className="mb-2">{c.number} {c.name}</h2>
          <div className="grid grid-cols-5 gap-2">
            {palettes.map((p) => (
              <figure key={p.key} className="border border-tool-rule">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={withBase(`/img/heroes/${c.key}-${p.key}.jpg`)} alt={`${c.name} in ${p.name}`} width={1440} height={900} loading="lazy" />
                <figcaption className="px-2 py-1">{p.name}</figcaption>
              </figure>
            ))}
          </div>
        </section>
      ))}
    </main>
  );
}
