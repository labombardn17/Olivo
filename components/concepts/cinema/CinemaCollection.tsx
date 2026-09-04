"use client";

import { useEffect, useRef, useState } from "react";
import { clinic, devices, fullMenu } from "@/content/olivo";
import { gsap, ScrollTrigger, useGSAP, prefersReducedMotion } from "@/lib/gsap";
import { Verify } from "@/lib/verify";
import { CinemaObject } from "./CinemaObject";

/**
 * "The Collection": a horizontal gallery pinned to the viewport. One device
 * per panel on an unbroken dark ground, a 1 / 9 counter (Cinema's only
 * counter), the custom cursor reading Drag. Dragging scrolls the page.
 * Mobile and reduced motion: a snap-scrolling carousel with the same counter.
 */
export function CinemaCollection() {
  const ref = useRef<HTMLElement>(null);
  const track = useRef<HTMLDivElement>(null);
  const [i, setI] = useState(0);
  const [pinned, setPinned] = useState(false);

  useGSAP(
    () => {
      const el = ref.current, tr = track.current;
      if (!el || !tr || prefersReducedMotion() || !window.matchMedia("(min-width: 52rem)").matches) return;
      setPinned(true);
      const dist = () => tr.scrollWidth - window.innerWidth;
      const tween = gsap.to(tr, {
        x: () => -dist(),
        ease: "none",
        scrollTrigger: {
          trigger: el.querySelector("[data-stage]"),
          start: "top top",
          end: () => `+=${dist()}`,
          pin: true,
          scrub: 0.6,
          invalidateOnRefresh: true,
          onUpdate: (self) => setI(Math.min(devices.length - 1, Math.round(self.progress * (devices.length - 1)))),
        },
      });
      // Drag scrolls the page along the same axis.
      let down = false, lx = 0;
      const onDown = (e: PointerEvent) => { down = true; lx = e.clientX; };
      const onMove = (e: PointerEvent) => { if (!down) return; window.scrollBy(0, (lx - e.clientX) * 1.6); lx = e.clientX; };
      const onUp = () => { down = false; };
      tr.addEventListener("pointerdown", onDown);
      window.addEventListener("pointermove", onMove);
      window.addEventListener("pointerup", onUp);
      return () => {
        tween.scrollTrigger?.kill();
        tween.kill();
        tr.removeEventListener("pointerdown", onDown);
        window.removeEventListener("pointermove", onMove);
        window.removeEventListener("pointerup", onUp);
      };
    },
    { scope: ref },
  );

  // Carousel counter for the non-pinned mode.
  useEffect(() => {
    if (pinned) return;
    const tr = track.current;
    if (!tr) return;
    const on = () => {
      const w = tr.firstElementChild?.getBoundingClientRect().width ?? 1;
      setI(Math.min(devices.length - 1, Math.round(tr.scrollLeft / (w + 16))));
    };
    tr.addEventListener("scroll", on, { passive: true });
    return () => tr.removeEventListener("scroll", on);
  }, [pinned]);

  const counter = `${String(i + 1).padStart(2, "0")} / ${String(devices.length).padStart(2, "0")}`;
  return (
    <section ref={ref} id="technology" aria-labelledby="collection-title" className="relative border-t border-rule">
      <div data-stage="" className="relative flex h-[100svh] flex-col overflow-hidden">
        <div className="stage w-full flex items-end justify-between pt-24 md:pt-28 pb-6">
          <h2 id="collection-title" className="font-display text-[2rem] md:text-[3.2vw] leading-[1]">The collection</h2>
          <p className="micro text-ink-2 tabular-nums" aria-live="polite">{counter}</p>
        </div>
        <div
          ref={track}
          data-cursor="Drag"
          className={`flex flex-1 items-center gap-4 ${pinned ? "pl-[var(--gutter)] pr-[var(--gutter)] select-none" : "snap-x-mandatory overflow-x-auto px-[var(--gutter)]"}`}
          role="list"
          aria-label="The nine devices"
        >
          {devices.map((d, k) => (
            <article key={d.slug} role="listitem" className="panel snap-start grid h-full max-h-[70svh] grid-cols-1 md:grid-cols-[1fr_1.1fr] items-end gap-6 md:gap-10 border-l border-rule pl-5 md:pl-8" aria-labelledby={`dev-${d.slug}`}>
              <div className="pb-2">
                <p className="micro text-ink-2">{d.family} · {String(k + 1).padStart(2, "0")}</p>
                <h3 id={`dev-${d.slug}`} className="font-display mt-3 text-[2rem] leading-[1] md:text-[3.2vw]">{d.name}</h3>
                <p className="mt-4 max-w-[28ch] text-ink-2">{d.fn}{d.verify && <Verify note={d.verify} />}</p>
                <a href={clinic.booking} target="_blank" rel="noopener noreferrer" data-cta="text" className="u-draw mt-6 inline-block">Book</a>
              </div>
              <CinemaObject device={d} className="h-full w-full max-h-[64svh] mx-auto" />
            </article>
          ))}
          <div className="w-[var(--gutter)] shrink-0" aria-hidden="true" />
        </div>
      </div>
      <div className="stage grid gap-8 py-16 md:grid-cols-[1fr_2fr] md:py-24 border-t border-rule">
        <p className="micro text-ink-2">Also on the menu</p>
        <ul className="columns-2 gap-8 text-[0.9375rem] leading-[1.9] text-ink-2 md:columns-3">
          {fullMenu.map((m) => (
            <li key={m.name}>{m.name}{m.verify && <Verify note={m.verify} />}</li>
          ))}
        </ul>
      </div>
    </section>
  );
}
