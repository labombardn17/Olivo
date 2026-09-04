"use client";

import { useRef, useState } from "react";
import { clinic, devices, fullMenu } from "@/content/olivo";
import { Marquee } from "@/components/shared/Marquee";
import { ScrollTrigger, useGSAP, prefersReducedMotion } from "@/lib/gsap";
import { Verify } from "@/lib/verify";
import { CurrentBlock } from "./CurrentBlock";

const tones = ["ground", "inverse", "accent"] as const;

/**
 * "Nine machines. One clinic." A sticky left panel with a huge 01 to 09
 * counter and the device name; on the right, cards peel over one another
 * (position: sticky offsets plus ScrollTrigger for the counter).
 */
export function CurrentMachines() {
  const ref = useRef<HTMLElement>(null);
  const [i, setI] = useState(0);
  useGSAP(
    () => {
      const el = ref.current;
      if (!el || prefersReducedMotion()) return;
      const cards = Array.from(el.querySelectorAll<HTMLElement>("[data-card]"));
      const triggers = cards.map((c, k) => ScrollTrigger.create({ trigger: c, start: "top 60%", onEnter: () => setI(k), onEnterBack: () => setI(Math.max(0, k - 1)) }));
      return () => triggers.forEach((t) => t.kill());
    },
    { scope: ref },
  );
  const d = devices[i]!;
  return (
    <section ref={ref} id="technology" aria-labelledby="machines-title" className="cblock relative">
      <div className="grid md:grid-cols-[42fr_58fr] px-[var(--gutter)] gap-x-[var(--gutter)] pt-20 md:pt-28">
        <div className="md:sticky md:top-24 md:h-[calc(100svh-6rem)] flex flex-col justify-between pb-10">
          <h2 id="machines-title" className="font-display text-[12vw] md:text-[5.5vw]">Nine machines. One clinic.</h2>
          <div aria-live="polite" className="mt-10">
            <p className="font-display text-[28vw] md:text-[14vw] tabular-nums text-accent-text leading-[0.85]">{String(i + 1).padStart(2, "0")}</p>
            <p className="font-display mt-4 text-[2rem] md:text-[3vw]">{d.name}</p>
            <p className="cap mt-2">{d.family} · {d.area}</p>
          </div>
        </div>
        <ol className="relative">
          {devices.map((x, k) => (
            <li key={x.slug} data-card="" className={`card grid grid-cols-[1fr_auto] gap-6 p-6 md:p-10 mb-6 ${k % 3 === 0 ? "card-ground" : k % 3 === 1 ? "card-inverse" : "card-accent"}`} style={{ top: `${6 + k * 0.75}rem` }}>
              <div className="flex flex-col justify-between">
                <div>
                  <p className="text-[0.875rem] opacity-70">{String(k + 1).padStart(2, "0")} / 09 · {x.family}</p>
                  <h3 className="font-display mt-4 text-[2.2rem] md:text-[3.6vw]">{x.name}</h3>
                </div>
                <div>
                  <p className="mt-6 max-w-[28ch] text-[1rem] leading-[1.45]">{x.fn}{x.verify && <Verify note={x.verify} />}</p>
                  <a href={clinic.booking} target="_blank" rel="noopener noreferrer" data-cta="text" className="u-draw mt-5 inline-block">Book {x.name}</a>
                </div>
              </div>
              <CurrentBlock device={x} tone={tones[k % 3]} className="w-[34vw] md:w-[16vw] self-end !border-0" />
            </li>
          ))}
        </ol>
      </div>
      <div className="mt-10 border-y border-rule">
        <Marquee duration={14} className="py-4" ariaLabel="Device names">
          {devices.map((x) => (
            <span key={x.slug} className="font-display mx-6 text-[2.2rem] md:text-[3.6vw] whitespace-nowrap">{x.name}<span className="text-accent-text mx-6">·</span></span>
          ))}
        </Marquee>
      </div>
      <div className="grid gap-6 px-[var(--gutter)] py-14 md:grid-cols-[42fr_58fr] md:gap-x-[var(--gutter)]">
        <p className="cap">Also on the menu, {fullMenu.length} more</p>
        <ul className="columns-2 gap-8 text-[0.9375rem] leading-[2] md:columns-3">
          {fullMenu.map((m) => <li key={m.name}>{m.name}{m.verify && <Verify note={m.verify} />}</li>)}
        </ul>
      </div>
    </section>
  );
}
