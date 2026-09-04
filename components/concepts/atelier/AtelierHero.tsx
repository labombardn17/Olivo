"use client";

import { useRef } from "react";
import { HeroVideo } from "@/components/shared/HeroVideo";
import { SplitReveal } from "@/components/shared/SplitReveal";
import { BookingCTA } from "@/components/shared/BookingCTA";
import { subLines, cta } from "@/content/olivo";
import { gsap, useGSAP, prefersReducedMotion } from "@/lib/gsap";

/** Full-bleed video. Two-line serif headline bottom-left, second line indented one column. */
export function AtelierHero() {
  const ref = useRef<HTMLDivElement>(null);
  useGSAP(
    () => {
      if (prefersReducedMotion()) return;
      gsap.from("[data-hero-video]", { scale: 1.08, duration: 2.2, ease: "power2.out" });
      gsap.from("[data-hero-sub] > *", { opacity: 0, y: 12, duration: 1, stagger: 0.12, delay: 0.7, ease: "power2.out" });
    },
    { scope: ref },
  );
  return (
    <section ref={ref} id="top" data-hero="" aria-labelledby="hero-title" className="relative min-h-[100svh] overflow-hidden">
      <HeroVideo className="absolute inset-0 h-full w-full" />
      <div className="scrim absolute inset-x-0 bottom-0 h-[75%]" aria-hidden="true" />
      <div className="relative grid-12 min-h-[100svh] items-end px-[var(--gutter)] pb-24 md:pb-16">
        <div className="col-span-12 md:col-start-2 md:col-span-10">
          <SplitReveal as="h1" id="hero-title" immediate delay={0.25} className="font-display text-[11vw] md:text-[8.6vw] leading-[0.94] hang">
            <span className="block">Aesthetic medicine,</span>
            <span className="block md:ml-[8.33%]">practiced<span className="wonk">.</span></span>
          </SplitReveal>
          <div data-hero-sub="" className="mt-8 grid-12 items-end">
            <p className="col-span-12 md:col-start-1 md:col-span-4 text-[1rem] text-ink-2 max-w-[34ch]">{subLines.atelier}</p>
            <div className="col-span-12 md:col-start-7 md:col-span-6 mt-6 md:mt-0 flex flex-wrap items-center gap-x-8 gap-y-4">
              <BookingCTA />
              <a href="#technology" data-cta="text" className="u-draw">{cta.secondary}</a>
            </div>
          </div>
        </div>
      </div>
      <p className="absolute right-[var(--gutter)] bottom-10 hidden md:flex items-center gap-3 text-ink-2" aria-hidden="true">
        <span className="folio [writing-mode:vertical-rl]">Continue</span>
        <span className="h-16 w-px bg-ink-2" />
      </p>
    </section>
  );
}
