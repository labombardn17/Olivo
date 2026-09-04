import { HeroVideo } from "@/components/shared/HeroVideo";
import { BookingCTA } from "@/components/shared/BookingCTA";
import { Reveal } from "@/components/shared/Reveal";
import { subLines, cta } from "@/content/olivo";

/** The film inside the frame, slow Ken Burns on the poster while it loads. Headline centered, low. */
export function ResidenceHero() {
  return (
    <section id="top" data-hero="" aria-labelledby="hero-title" className="pt-[var(--inset)]">
      <div className="frame kenburns h-[calc(100svh-var(--inset))] md:h-[calc(100svh-2*var(--inset))] overflow-hidden">
        <HeroVideo className="absolute inset-0 h-full w-full" />
        <div className="scrim absolute inset-x-0 bottom-0 h-[75%]" aria-hidden="true" />
        <div className="relative flex h-full flex-col items-center justify-end px-[var(--gutter)] pb-20 text-center md:pb-28">
          <Reveal as="h1" id="hero-title" stagger={0.12} duration={1.2} className="font-display text-[2rem] md:text-[3vw] max-w-[28ch] balance">
            <span className="block">A quiet room on Fullerton where the technology is complete</span>
            <span className="block ital">and the doctor is in.</span>
          </Reveal>
          <p className="mt-6 text-[0.9375rem] text-ink-2">{subLines.residence}</p>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-x-10 gap-y-4">
            <BookingCTA />
            <a href="#technology" data-cta="text" className="u-draw">{cta.secondary}</a>
          </div>
        </div>
        <p className="absolute bottom-6 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center gap-2 text-[0.6875rem] tracking-[0.14em] uppercase text-ink-2" aria-hidden="true">
          Enter<span className="h-8 w-px bg-ink-2" />
        </p>
      </div>
    </section>
  );
}
