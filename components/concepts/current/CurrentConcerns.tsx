"use client";

import { useEffect, useRef, useState } from "react";
import { clinic, concerns, concernsVerify } from "@/content/olivo";
import { Placeholder, type Shot } from "@/components/shared/Placeholder";
import { Verify } from "@/lib/verify";

const grids: Shot[][] = [
  ["skin-1", "skin-2", "hands-1", "light-1"],
  ["skin-2", "room-1", "skin-1", "hands-1"],
  ["room-2", "skin-1", "light-1", "skin-2"],
  ["hands-1", "skin-2", "room-3", "skin-1"],
  ["room-3", "light-1", "skin-2", "room-1"],
  ["skin-1", "hands-1", "skin-2", "room-2"],
];

/** Oversized tabs; the active one underlined with a 2px accent rule that slides. Swaps a 4-up image grid. */
export function CurrentConcerns() {
  const [i, setI] = useState(0);
  const tabs = useRef<Array<HTMLButtonElement | null>>([]);
  const [rule, setRule] = useState({ left: 0, width: 0 });
  useEffect(() => {
    const t = tabs.current[i];
    if (t) setRule({ left: t.offsetLeft, width: t.offsetWidth });
  }, [i]);
  const c = concerns[i]!;
  return (
    <section id="treatments" aria-labelledby="concerns-title" className="inverse px-[var(--gutter)] py-20 md:py-28">
      <div className="flex flex-wrap items-end justify-between gap-4">
        <h2 id="concerns-title" className="cap">Pick a concern<Verify note={concernsVerify} /></h2>
        <p className="cap">Six ways in</p>
      </div>
      <div className="tabs mt-4" role="tablist" aria-label="Concerns">
        {concerns.map((x, k) => (
          <button key={x.key} ref={(el) => { tabs.current[k] = el; }} type="button" role="tab" id={`tab-${x.key}`} aria-selected={k === i} aria-controls="concern-grid" className="tab" onClick={() => setI(k)}>
            {x.label}
          </button>
        ))}
        <span className="tab-rule" style={{ left: rule.left, width: rule.width }} aria-hidden="true" />
      </div>
      <div id="concern-grid" role="tabpanel" aria-labelledby={`tab-${c.key}`} className="mt-10 grid gap-8 md:grid-cols-[3fr_2fr]">
        <ul className="grid grid-cols-2 gap-3">
          {grids[i]!.map((s, k) => (
            <li key={`${s}-${k}`}><Placeholder shot={s} className="aspect-[4/3]" sizes="(min-width: 52rem) 30vw, 50vw" /></li>
          ))}
        </ul>
        <div className="md:pl-8 flex flex-col justify-end">
          <p className="font-display text-[2rem] md:text-[3vw]">{c.question}</p>
          <ul className="mt-6 text-[1.0625rem] leading-[1.8]">
            {c.treatments.map((t) => <li key={t}>{t}</li>)}
          </ul>
          <a href={clinic.booking} target="_blank" rel="noopener noreferrer" data-cta="primary" className="mt-8 inline-flex self-start">Book for {c.label.toLowerCase()}</a>
        </div>
      </div>
    </section>
  );
}
