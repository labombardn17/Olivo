"use client";

import { useState } from "react";
import { clinic, concerns, concernsVerify } from "@/content/olivo";
import { Placeholder, type Shot } from "@/components/shared/Placeholder";
import { Verify } from "@/lib/verify";

const shotFor: Shot[] = ["skin-1", "skin-2", "hands-1", "light-1", "room-3", "skin-1"];

/** One question, answers in two columns; selecting fades the photograph. */
export function ResidenceConcerns() {
  const [i, setI] = useState(0);
  const c = concerns[i]!;
  return (
    <section id="treatments" aria-labelledby="concerns-title" className="gap-section !pt-0">
      <div className="frame grid md:grid-cols-2">
        <div className="relative aspect-[4/5] md:aspect-auto overflow-hidden md:border-r border-rule">
          {concerns.map((x, k) => (
            <div key={x.key} className="absolute inset-0 transition-opacity duration-1000" style={{ opacity: k === i ? 1 : 0 }} aria-hidden={k !== i}>
              <Placeholder shot={shotFor[k]!} className="h-full" sizes="(min-width: 52rem) 50vw, 100vw" />
            </div>
          ))}
        </div>
        <div className="px-6 py-12 md:px-14 md:py-20 flex flex-col justify-center">
          <h2 id="concerns-title" className="font-display text-[1.9rem] md:text-[2.4vw] ital">What would you like to change?<Verify note={concernsVerify} /></h2>
          <div role="tablist" aria-label="Concerns" className="mt-8 grid grid-cols-2 gap-x-8">
            {concerns.map((x, k) => (
              <button key={x.key} type="button" role="tab" id={`concern-${x.key}`} aria-selected={k === i} aria-controls="concern-panel" onClick={() => setI(k)} onFocus={() => setI(k)} className={`block w-full text-left py-3 border-b border-rule font-display text-[1.35rem] transition-colors duration-500 ${k === i ? "text-ink" : "text-ink-2"}`}>
                {x.label}
              </button>
            ))}
          </div>
          <div id="concern-panel" role="tabpanel" aria-labelledby={`concern-${c.key}`} className="mt-8">
            <p className="eyebrow-r">{c.question}</p>
            <p className="mt-2 text-[0.9375rem] leading-[1.7] text-ink-2">{c.treatments.join(", ")}.</p>
            <a href={clinic.booking} target="_blank" rel="noopener noreferrer" data-cta="text" className="u-draw mt-5 inline-block">Book a consultation</a>
          </div>
        </div>
      </div>
    </section>
  );
}
