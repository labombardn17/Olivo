"use client";

import { useRef } from "react";
import { HeroVideo } from "@/components/shared/HeroVideo";
import { BookingCTA } from "@/components/shared/BookingCTA";
import { subLines, cta } from "@/content/olivo";
import { gsap, ScrollTrigger, useGSAP, prefersReducedMotion } from "@/lib/gsap";

/**
 * Edge-to-edge film. On scroll the frame shrinks into a letterbox
 * (scale 1 to 0.86, radius 0 to 4px) while the title lifts out.
 */
export function CinemaHero() {
  const ref = useRef<HTMLElement>(null);
  const frame = useRef<HTMLDivElement>(null);
  useGSAP(
    () => {
      if (prefersReducedMotion()) return;
      gsap.from("[data-title] > *", { opacity: 0, y: 24, duration: 1.4, stagger: 0.12, delay: 0.5, ease: "power2.out" });
      gsap.to(frame.current, {
        scale: 0.86,
        borderRadius: 4,
        ease: "none",
        scrollTrigger: { trigger: ref.current, start: "top top", end: "+=70%", scrub: true },
      });
      gsap.to("[data-title]", {
        yPercent: -30,
        opacity: 0,
        ease: "none",
        scrollTrigger: { trigger: ref.current, start: "top top", end: "+=45%", scrub: true },
      });
      return () => ScrollTrigger.getAll().forEach((t) => t.vars.trigger === ref.current && t.kill());
    },
    { scope: ref },
  );
  return (
    <section ref={ref} id="top" data-hero="" aria-labelledby="hero-title" className="relative h-[100svh] overflow-hidden bg-ground">
      <HeroVideo frameRef={frame} className="hero-frame absolute inset-0 h-full w-full" />
      <div className="scrim absolute inset-x-0 bottom-0 h-[55%]" aria-hidden="true" />
      <div className="absolute inset-x-0 top-0 h-[28%] scrim rotate-180" aria-hidden="true" />
      <div data-title="" className="stage relative flex h-full flex-col items-center justify-end pb-24 text-center md:pb-28">
        <p className="micro text-ink-2">{subLines.cinema}</p>
        <h1 id="hero-title" className="font-display mt-6 text-[14vw] leading-[0.92] md:text-[7.5vw] balance">
          Aging is <span className="serif">optional</span>.
        </h1>
        <div className="mt-10 flex flex-wrap items-center justify-center gap-x-10 gap-y-4">
          <BookingCTA />
          <a href="#technology" data-cta="text" className="u-draw text-ink-2">{cta.secondary}</a>
          <button type="button" data-cta="text" className="u-draw text-ink-2 hidden md:inline" aria-label="Watch the film with sound. Placeholder control.">{cta.film}</button>
        </div>
      </div>
      <p className="absolute bottom-8 left-[var(--gutter)] hidden md:flex items-center gap-3 micro text-ink-2" aria-hidden="true">
        <span className="h-px w-12 bg-ink-2" />Scroll
      </p>
    </section>
  );
}
