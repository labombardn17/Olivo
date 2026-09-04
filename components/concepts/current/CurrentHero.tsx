"use client";

import { useRef } from "react";
import { HeroVideo } from "@/components/shared/HeroVideo";
import { BookingCTA } from "@/components/shared/BookingCTA";
import { SplitReveal } from "@/components/shared/SplitReveal";
import { proof, subLines, cta } from "@/content/olivo";
import { gsap, useGSAP, prefersReducedMotion } from "@/lib/gsap";

/**
 * Split hero. Left 45%: three words, one line, one CTA. Right 55%: the film
 * in a tall frame past the fold. On scroll the frame expands to full width
 * and becomes the ground of the proof strip that follows.
 */
export function CurrentHero() {
  const ref = useRef<HTMLElement>(null);
  useGSAP(
    () => {
      const el = ref.current;
      if (!el || prefersReducedMotion() || !window.matchMedia("(min-width: 52rem)").matches) return;
      const tl = gsap.timeline({ scrollTrigger: { trigger: el, start: "top top", end: "+=120%", scrub: 0.5, pin: true } });
      tl.to("[data-frame]", { left: "0%", width: "100%", top: "0%", height: "100%", ease: "none" }, 0)
        .to("[data-copy]", { opacity: 0, y: -40, ease: "none" }, 0)
        .fromTo("[data-proof]", { opacity: 0, y: 30 }, { opacity: 1, y: 0, ease: "none" }, 0.55);
    },
    { scope: ref },
  );
  return (
    <section ref={ref} id="top" data-hero="" aria-labelledby="hero-title" className="relative overflow-hidden md:h-[100svh]">
      <div className="grid md:grid-cols-[45fr_55fr] md:h-full">
        <div data-copy="" className="order-2 md:order-1 relative z-10 flex flex-col justify-end px-[var(--gutter)] pb-12 pt-10 md:pb-20 md:pt-28">
          <SplitReveal as="h1" id="hero-title" immediate delay={0.2} stagger={0.1} className="font-display text-[15vw] md:text-[8.5vw]">
            Nine machines. One doctor.
          </SplitReveal>
          <p className="mt-6 max-w-[36ch] text-[1.0625rem] text-ink-2">{subLines.current}</p>
          <div className="mt-8 flex flex-wrap items-center gap-x-8 gap-y-4">
            <BookingCTA />
            <a href="#technology" data-cta="text" className="u-draw">{cta.secondary}</a>
          </div>
        </div>
        <div className="order-1 md:order-2 relative h-[62svh] md:h-full" aria-hidden="true" />
      </div>
      {/* One frame for both layouts: full width at the top on mobile, a tall offset frame on desktop that GSAP expands. */}
      <div data-frame="" className="absolute left-0 top-0 h-[62svh] w-full md:left-[48%] md:top-[8%] md:h-[120%] md:w-[52%]">
        <HeroVideo className="absolute inset-0 h-full w-full" />
        <div className="inverse absolute inset-x-0 bottom-0 h-[45%] !bg-transparent" style={{ background: "linear-gradient(to top, var(--ground), transparent)" }} aria-hidden="true" />
      </div>
      <div data-proof="" className="inverse absolute inset-x-0 bottom-0 hidden md:block !bg-transparent opacity-0">
        <ul className="grid grid-cols-4 gap-6 px-[var(--gutter)] pb-10" aria-label="Facts about the clinic">
          {[proof.nine, proof.physician, proof.platforms, proof.place].map((f, i) => (
            <li key={f} className="border-t border-rule pt-3">
              <span className="font-display text-[3rem] block leading-none">0{i + 1}</span>
              <span className="text-[0.9375rem]">{f}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
