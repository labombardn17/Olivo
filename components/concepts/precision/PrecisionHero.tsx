import { HeroVideo } from "@/components/shared/HeroVideo";
import { BookingCTA } from "@/components/shared/BookingCTA";
import { clinic, subLines, cta } from "@/content/olivo";
import { Slide } from "./PrecisionMotion";

/** Split hero: 40% ground with headline, mono spec block and CTA; 60% video in a hard-edged frame. */
export function PrecisionHero() {
  return (
    <section id="top" data-hero="" aria-labelledby="hero-title" className="grid min-h-[100svh] md:grid-cols-[2fr_3fr]">
      <div className="order-2 md:order-1 flex flex-col justify-end px-[var(--gutter)] pb-10 pt-8 md:pt-32 md:pb-14 md:border-r border-rule">
        <Slide axis="y" stagger={0.08}>
          <p className="label">Physician-led aesthetic medicine</p>
          <h1 id="hero-title" className="font-display mt-5 text-[13vw] leading-[0.95] md:text-[5.2vw]">Every platform. One physician.</h1>
          <p className="mt-5 max-w-[34ch] text-ink-2">{subLines.precision}</p>
          <pre className="mono mt-10 whitespace-pre-wrap border-y border-rule py-4 leading-[1.9] text-ink-2">{`PHYSICIAN OWNED    EST. ${clinic.founded}\nADDRESS            ${clinic.address.line1.replace(" Ave", "")}\nPLATFORMS          BTL / ALMA / LASER\nBOOKING            VAGARO`}</pre>
          <div className="mt-8 flex flex-wrap items-center gap-x-8 gap-y-4">
            <BookingCTA />
            <a href="#technology" data-cta="text" className="u-draw">{cta.secondary}</a>
          </div>
        </Slide>
      </div>
      <div className="order-1 md:order-2 relative min-h-[52svh] md:min-h-0 md:h-[100svh]">
        <HeroVideo className="absolute inset-0 h-full w-full" />
        <div className="scrim absolute inset-x-0 bottom-0 h-[30%] md:hidden" aria-hidden="true" />
        <p className="mono absolute bottom-4 right-[var(--gutter)] hidden md:block text-ink-2" aria-hidden="true">SCROLL 01/08</p>
      </div>
    </section>
  );
}
