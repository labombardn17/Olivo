"use client";

import { useRef, useState } from "react";
import { clinic, devices, fullMenu, sectionCopy } from "@/content/olivo";
import { ScrollTrigger, useGSAP, prefersReducedMotion } from "@/lib/gsap";
import { Verify } from "@/lib/verify";
import { AtelierPlate } from "./AtelierPlate";
import { RunningHead } from "./RunningHead";

/**
 * "The Instruments": a pinned two-column spread. Left, the device in the
 * serif with a spelled ordinal; right, the plate pinned and crossfading per
 * step with a 1.15 to 1.0 settle. Reads like a catalogue raisonne.
 * Reduced motion and small screens get the same nine as a stacked list.
 */
export function AtelierInstruments() {
  const ref = useRef<HTMLElement>(null);
  const [active, setActive] = useState(0);
  const [pinned, setPinned] = useState(false);
  useGSAP(
    () => {
      const el = ref.current;
      if (!el || prefersReducedMotion()) return;
      const mm = window.matchMedia("(min-width: 52rem)");
      if (!mm.matches) return;
      setPinned(true);
      const st = ScrollTrigger.create({
        trigger: el.querySelector("[data-track]"),
        start: "top top",
        end: "bottom bottom",
        onUpdate: (self) => setActive(Math.min(devices.length - 1, Math.floor(self.progress * devices.length))),
      });
      return () => st.kill();
    },
    { scope: ref },
  );
  const d = devices[active]!;
  return (
    <section ref={ref} id="technology" aria-labelledby="instruments-title" className="relative border-t border-rule">
      <RunningHead word="Two" title="The technology" folio="ii" />
      <div className="grid-12 px-[var(--gutter)] pt-20 md:pt-28">
        <h2 id="instruments-title" className="col-span-12 md:col-start-2 md:col-span-7 font-display text-[9vw] md:text-[5vw] leading-[0.98] hang">The instruments</h2>
        <p className="col-span-12 md:col-start-7 md:col-span-5 mt-6 text-ink-2 max-w-[38ch]">{sectionCopy.technologyIntro}<Verify note={sectionCopy.technologyIntroVerify} /></p>
      </div>

      {pinned ? (
        <div data-track="" style={{ height: `${devices.length * 70}vh` }} className="relative mt-10">
          <div className="sticky top-0 h-[100vh] grid-12 px-[var(--gutter)] items-center">
            <div className="col-start-2 col-span-5" aria-live="polite">
              <ol className="mb-10 flex gap-1" aria-hidden="true">
                {devices.map((x, i) => (
                  <li key={x.slug} className={`h-px flex-1 transition-colors duration-500 ${i <= active ? "bg-ink" : "bg-rule"}`} />
                ))}
              </ol>
              <p className="folio">{d.ordinal}</p>
              <h3 className="font-display text-[4.2vw] leading-[1] mt-4 hang">{d.name}</h3>
              <p className="sc text-ink-2 mt-3">{d.family}</p>
              <p className="mt-8 max-w-[30ch] text-[1.125rem] leading-[1.5]">{d.fn}{d.verify && <Verify note={d.verify} />}</p>
              <a href={clinic.booking} target="_blank" rel="noopener noreferrer" data-cta="text" className="u-draw mt-8 inline-block">Book {d.name}</a>
            </div>
            <div className="col-start-8 col-span-5 relative aspect-[4/5] max-h-[80vh] mx-auto w-full">
              {devices.map((x, i) => (
                <div key={x.slug} className="plate" data-active={i === active}>
                  <AtelierPlate device={x} index={i} className="h-full" />
                </div>
              ))}
            </div>
          </div>
        </div>
      ) : (
        <ol className="mt-12 md:mt-16 border-t border-rule">
          {devices.map((x, i) => (
            <li key={x.slug} className="grid-12 px-[var(--gutter)] py-10 border-b border-rule items-center gap-y-6">
              <div className="col-span-12 md:col-start-2 md:col-span-5">
                <p className="folio">{x.ordinal}</p>
                <h3 className="font-display text-[2.2rem] md:text-[3vw] leading-[1.02] mt-2">{x.name}</h3>
                <p className="sc text-ink-2 mt-2">{x.family}</p>
                <p className="mt-4 max-w-[32ch]">{x.fn}{x.verify && <Verify note={x.verify} />}</p>
                <a href={clinic.booking} target="_blank" rel="noopener noreferrer" data-cta="text" className="u-draw mt-4 inline-block">Book {x.name}</a>
              </div>
              <AtelierPlate device={x} index={i} className="col-span-7 md:col-start-8 md:col-span-4" />
            </li>
          ))}
        </ol>
      )}

      <div className="grid-12 px-[var(--gutter)] py-16 md:py-24 border-t border-rule">
        <p className="col-span-12 md:col-start-2 md:col-span-3 sc text-ink-2">The full menu</p>
        <ul className="col-span-12 md:col-start-5 md:col-span-7 columns-2 md:columns-3 gap-8 text-[0.9375rem] leading-[1.9]">
          {fullMenu.map((m) => (
            <li key={m.name}>{m.name}{m.verify && <Verify note={m.verify} />}</li>
          ))}
        </ul>
      </div>
    </section>
  );
}
