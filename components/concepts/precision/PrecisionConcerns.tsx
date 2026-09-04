"use client";

import { useState } from "react";
import { clinic, concerns, concernsVerify } from "@/content/olivo";
import { Verify } from "@/lib/verify";

/** A segmented control in mono; results in a strict 3-column list with index numbers and hairline dividers. */
export function PrecisionConcerns() {
  const [i, setI] = useState(0);
  const c = concerns[i]!;
  return (
    <section id="treatments" aria-labelledby="concerns-title" className="py-16 md:py-24">
      <div className="grid-12 px-[var(--gutter)] gap-y-8">
        <div className="col-span-12 md:col-span-4">
          <p className="mono text-ink-2">02 / Concern</p>
          <h2 id="concerns-title" className="font-display mt-3 text-[2rem] leading-[1] md:text-[3vw]">Start with the concern<Verify note={concernsVerify} /></h2>
        </div>
        <div className="col-span-12 md:col-span-8 md:col-start-5 overflow-x-auto">
          <div className="seg" role="tablist" aria-label="Concerns">
            {concerns.map((x, k) => (
              <button key={x.key} type="button" role="tab" id={`tab-${x.key}`} aria-selected={k === i} aria-controls="concern-list" onClick={() => setI(k)}>{x.label}</button>
            ))}
          </div>
        </div>
        <div id="concern-list" role="tabpanel" aria-labelledby={`tab-${c.key}`} className="col-span-12 md:col-span-8 md:col-start-5">
          <p className="mono text-ink-2 border-t border-rule pt-3">{c.question}</p>
          <ol className="mt-4 grid grid-cols-1 sm:grid-cols-3 gap-x-6">
            {c.treatments.map((t, k) => (
              <li key={t} className="flex gap-3 border-b border-rule py-3 text-[0.9375rem]"><span className="mono text-ink-2">{String(k + 1).padStart(2, "0")}</span>{t}</li>
            ))}
          </ol>
          <a href={clinic.booking} target="_blank" rel="noopener noreferrer" data-cta="text" className="u-draw mt-6 inline-block">Book for {c.label.toLowerCase()}</a>
        </div>
      </div>
    </section>
  );
}
