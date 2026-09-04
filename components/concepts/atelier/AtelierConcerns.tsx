"use client";

import { useState } from "react";
import { clinic, concerns, concernsVerify } from "@/content/olivo";
import { Placeholder, type Shot } from "@/components/shared/Placeholder";
import { Verify } from "@/lib/verify";
import { RunningHead } from "./RunningHead";

const shotFor: Shot[] = ["skin-1", "skin-2", "hands-1", "skin-1", "light-1", "skin-2"];

/** Concerns as a serif list; hover or tap reveals treatments in a right-hand column with a soft image swap. */
export function AtelierConcerns() {
  const [i, setI] = useState(0);
  const c = concerns[i]!;
  return (
    <section id="treatments" aria-labelledby="concerns-title" className="relative border-t border-rule">
      <RunningHead word="One" title="The concerns" folio="i" />
      <div className="grid-12 px-[var(--gutter)] py-20 md:py-28 gap-y-12">
        <div className="col-span-12 md:col-start-2 md:col-span-5">
          <h2 id="concerns-title" className="sc text-ink-2">Start with what you would like to change<Verify note={concernsVerify} /></h2>
          <ul role="tablist" aria-label="Concerns" className="mt-8 border-t border-rule">
            {concerns.map((x, k) => (
              <li key={x.key} className="border-b border-rule">
                <button
                  type="button"
                  role="tab"
                  id={`concern-${x.key}`}
                  aria-selected={k === i}
                  aria-controls="concern-panel"
                  onMouseEnter={() => setI(k)}
                  onFocus={() => setI(k)}
                  onClick={() => setI(k)}
                  className="concern-btn block w-full text-left py-4"
                >
                  {x.label}
                </button>
              </li>
            ))}
          </ul>
        </div>
        <div id="concern-panel" role="tabpanel" aria-labelledby={`concern-${c.key}`} className="col-span-12 md:col-start-8 md:col-span-5 md:pt-14">
          <div className="relative aspect-[4/5] max-w-[420px] overflow-hidden">
            {concerns.map((x, k) => (
              <div key={x.key} className="absolute inset-0 transition-opacity duration-700" style={{ opacity: k === i ? 1 : 0 }} aria-hidden={k !== i}>
                <Placeholder shot={shotFor[k]!} className="h-full" sizes="(min-width: 52rem) 40vw, 100vw" />
              </div>
            ))}
          </div>
          <p className="folio mt-6">{c.question}</p>
          <ul className="mt-3 font-display text-[1.5rem] leading-[1.35]" style={{ fontVariationSettings: '"opsz" 48, "SOFT" 50' }}>
            {c.treatments.map((t) => (
              <li key={t}>{t}</li>
            ))}
          </ul>
          <a href={clinic.booking} target="_blank" rel="noopener noreferrer" data-cta="text" className="u-draw mt-6 inline-block">Book a consultation for {c.label.toLowerCase()}</a>
        </div>
      </div>
    </section>
  );
}
