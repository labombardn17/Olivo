"use client";

import Image from "next/image";
import Link from "next/link";
import { concepts } from "@/content/olivo";
import { conceptDefaults } from "@/lib/palettes";
import { useDesignState } from "@/components/switcher/useDesignState";

/** Five tiles. The hero still follows the chosen palette; otherwise each concept shows its default. */
export function ChooserTiles() {
  const { palette, chosen } = useDesignState();
  return (
    <ol className="mt-10 grid gap-x-8 gap-y-14 md:grid-cols-6">
      {concepts.map((c, i) => {
        const wide = i === 0 || i === 3;
        const pal = chosen ? palette : conceptDefaults[c.key];
        return (
          <li key={c.key} className={wide ? "md:col-span-4" : i === 4 ? "md:col-span-6 md:grid md:grid-cols-6 md:gap-8" : "md:col-span-2"}>
            <Link href={`/${c.key}${chosen ? `?palette=${palette}` : ""}`} className={`group block ${i === 4 ? "md:col-span-4" : ""}`}>
              <figure className="relative aspect-[16/10] overflow-hidden border border-rule bg-ground-2">
                <Image
                  src={`/img/heroes/${c.key}-${pal}.jpg`}
                  alt={`Hero still of concept ${c.number}, ${c.name}, in the ${pal} palette`}
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
  );
}
