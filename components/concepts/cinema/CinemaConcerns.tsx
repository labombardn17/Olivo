"use client";

import { useEffect, useState } from "react";
import { clinic, concerns, concernsVerify } from "@/content/olivo";
import { Placeholder, type Shot } from "@/components/shared/Placeholder";
import { Verify } from "@/lib/verify";

const shotFor: Shot[] = ["skin-1", "skin-2", "hands-1", "skin-1", "light-1", "skin-2"];

/** A vertical marquee of concerns on the left that slows on hover; selecting fades the right panel through black. */
export function CinemaConcerns() {
  const [i, setI] = useState(0);
  const [shown, setShown] = useState(0);
  const [fade, setFade] = useState(false);
  useEffect(() => {
    if (i === shown) return;
    setFade(true);
    const t = window.setTimeout(() => { setShown(i); setFade(false); }, 350);
    return () => window.clearTimeout(t);
  }, [i, shown]);
  const c = concerns[shown]!;
  const items = [...concerns, ...concerns];
  return (
    <section id="treatments" aria-labelledby="concerns-title" className="border-t border-rule">
      <div className="stage grid gap-12 py-20 md:grid-cols-2 md:gap-16 md:py-32">
        <div>
          <h2 id="concerns-title" className="micro text-ink-2">Choose a concern<Verify note={concernsVerify} /></h2>
          <div className="vmarquee mt-6" role="tablist" aria-label="Concerns">
            <div className="vmarquee-track">
              {items.map((x, k) => (
                <button
                  key={`${x.key}-${k}`}
                  type="button"
                  role={k < concerns.length ? "tab" : undefined}
                  aria-hidden={k >= concerns.length}
                  tabIndex={k >= concerns.length ? -1 : 0}
                  aria-selected={k < concerns.length ? k === i : undefined}
                  aria-controls="concern-panel"
                  onClick={() => setI(k % concerns.length)}
                  onFocus={() => setI(k % concerns.length)}
                  className="concern-item"
                >
                  {x.label}
                </button>
              ))}
            </div>
          </div>
        </div>
        <div id="concern-panel" role="tabpanel" className="transition-opacity duration-[350ms]" style={{ opacity: fade ? 0 : 1 }}>
          <Placeholder shot={shotFor[shown]!} className="aspect-[4/5] max-w-[26rem]" sizes="(min-width: 52rem) 40vw, 100vw" />
          <p className="serif mt-8 text-[1.6rem] leading-[1.2] text-ink">{c.question}</p>
          <ul className="mt-4 text-ink-2 leading-[1.8]">
            {c.treatments.map((t) => (
              <li key={t}>{t}</li>
            ))}
          </ul>
          <a href={clinic.booking} target="_blank" rel="noopener noreferrer" data-cta="text" className="u-draw mt-6 inline-block">Book for {c.label.toLowerCase()}</a>
        </div>
      </div>
    </section>
  );
}
