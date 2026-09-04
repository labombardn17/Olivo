import { clinic, doctor, memberships, proof, reviewPlaceholder, results, resultsVerify, sectionCopy, skincareLines, cta } from "@/content/olivo";
import { Placeholder } from "@/components/shared/Placeholder";
import { Reveal } from "@/components/shared/Reveal";
import { SplitReveal } from "@/components/shared/SplitReveal";
import { BookingCTA } from "@/components/shared/BookingCTA";
import { BeforeAfter } from "@/components/shared/BeforeAfter";
import { InstagramTiles } from "@/components/shared/InstagramTiles";
import { MapPlaceholder } from "@/components/shared/MapPlaceholder";
import { Verify } from "@/lib/verify";

/** Mobile proof strip (desktop facts live over the expanded hero video). Opens with numbers. */
export function CurrentProof() {
  return (
    <section aria-label="Facts about the clinic" className="inverse md:hidden px-[var(--gutter)] py-12">
      <ul className="grid grid-cols-2 gap-6">
        {[proof.nine, proof.physician, proof.platforms, proof.place].map((f, i) => (
          <li key={f} className="border-t border-rule pt-3">
            <span className="font-display block text-[2.4rem]">0{i + 1}</span>
            <span className="text-[0.875rem]">{f}</span>
          </li>
        ))}
      </ul>
    </section>
  );
}

/** The physician: a giant word beside a tiny caption. The portrait overlaps into the next block. */
export function CurrentDoctor() {
  return (
    <section id="doctor" aria-labelledby="doctor-title" className="cblock relative px-[var(--gutter)] pt-20 md:pt-28 pb-0">
      <div className="grid gap-10 md:grid-cols-[55fr_45fr] md:gap-x-[var(--gutter)]">
        <div className="relative z-10">
          <SplitReveal as="h2" id="doctor-title" className="font-display text-[15vw] md:text-[9vw] runoff -mr-[20vw]">Dr. Olivo</SplitReveal>
          <p className="cap mt-3">{doctor.role}</p>
          <blockquote className="font-display mt-10 text-[2.4rem] md:text-[3.6vw]">&ldquo;{doctor.quote}&rdquo;</blockquote>
          <ul className="mt-8 max-w-[40ch] text-[0.9375rem] leading-[1.7] text-ink-2">
            {doctor.credentials.map((c) => <li key={c}>{c}</li>)}
            <li>{doctor.boardLine}<Verify note={doctor.boardVerify} /></li>
          </ul>
          <a href="#doctor" data-cta="text" className="u-draw mt-6 inline-block">{cta.bio}</a>
        </div>
        <Reveal className="relative md:-mb-32 md:translate-y-12" drift={40}>
          <Placeholder shot="portrait" className="aspect-[4/5]" sizes="(min-width: 52rem) 42vw, 100vw" />
          <p className="cap mt-2">Portrait placeholder. Overlaps the next block on purpose.</p>
        </Reveal>
      </div>
    </section>
  );
}

/** Before and after with a bold handle and giant labels, one set at an angle. */
export function CurrentResults() {
  return (
    <section id="results" aria-labelledby="results-title" className="inverse px-[var(--gutter)] pt-40 md:pt-56 pb-20 md:pb-28">
      <div className="flex flex-wrap items-end justify-between gap-6">
        <h2 id="results-title" className="font-display text-[12vw] md:text-[6vw]">Before. After.</h2>
        <p className="cap max-w-[30ch]">{results[2]!.treatment}, {results[2]!.sessions}. {sectionCopy.resultsNote}<Verify note={resultsVerify} /></p>
      </div>
      <BeforeAfter
        className="mt-8"
        aspectClassName="aspect-[4/5] md:aspect-[2/1]"
        labelClassName="font-display text-[3rem] md:text-[6vw] text-inverse-ink"
        afterLabelClassName="tilt !bottom-10"
        handleClassName="!w-[6px] bg-accent-fill"
        rangeClassName="reveal-range"
      />
    </section>
  );
}

/** Memberships and skincare: two flat blocks, one giant number. */
export function CurrentMemberships() {
  return (
    <section id="memberships" aria-labelledby="memberships-title" className="cblock px-[var(--gutter)] py-20 md:py-28">
      <div className="grid gap-10 md:grid-cols-[42fr_58fr] md:gap-x-[var(--gutter)]">
        <div>
          <p className="font-display text-[30vw] md:text-[14vw] leading-[0.8] text-accent-text" aria-hidden="true">2</p>
          <h2 id="memberships-title" className="font-display mt-6 text-[2rem] md:text-[3vw]">{sectionCopy.membershipsIntro}</h2>
          <p className="cap mt-3">{clinic.financing.line}<Verify note={memberships.verify} /></p>
        </div>
        <div className="grid gap-4 sm:grid-cols-2 self-end">
          {memberships.tiers.map((t, i) => (
            <div key={t.name} className={`p-6 md:p-8 ${i ? "card-accent" : "card-inverse"}`}>
              <h3 className="font-display text-[1.75rem] md:text-[2.2vw]">{t.name}</h3>
              <ul className="mt-5 space-y-1.5 text-[0.9375rem] leading-[1.6]">
                {t.perks.map((p) => <li key={p}>{p}</li>)}
              </ul>
            </div>
          ))}
          <div className="sm:col-span-2 mt-4 flex flex-wrap items-baseline justify-between gap-4 border-t border-rule pt-4">
            <p className="text-[1.0625rem]">{skincareLines.join(" · ")}</p>
            <a href="#memberships" data-cta="text" className="u-draw">{cta.shop}</a>
          </div>
        </div>
      </div>
    </section>
  );
}

/** Reviews: three placeholders as one tall list, giant index numbers. */
export function CurrentReviews() {
  return (
    <section aria-labelledby="reviews-title" className="inverse px-[var(--gutter)] py-20 md:py-28">
      <h2 id="reviews-title" className="cap">{sectionCopy.reviewsIntro}</h2>
      <ol className="mt-6 divide-y divide-rule border-y border-rule">
        {[1, 2, 3].map((n) => (
          <li key={n} className="grid grid-cols-[4rem_1fr] items-center gap-6 py-6 md:grid-cols-[10rem_1fr]">
            <span className="font-display text-[2.4rem] md:text-[5vw] text-accent-text">0{n}</span>
            <p className="text-[1.0625rem] md:text-[1.4rem] leading-[1.35]">{reviewPlaceholder}</p>
          </li>
        ))}
      </ol>
    </section>
  );
}

/** Visit and follow in one block. Opens with the address, giant. */
export function CurrentVisit() {
  return (
    <section id="visit" aria-labelledby="visit-title" className="cblock px-[var(--gutter)] py-20 md:py-28">
      <h2 id="visit-title" className="font-display text-[11vw] md:text-[6vw] runoff -mr-[10vw]">2550 W. Fullerton</h2>
      <div className="mt-10 grid gap-10 md:grid-cols-[58fr_42fr] md:gap-x-[var(--gutter)]">
        <MapPlaceholder className="aspect-[3/2]" />
        <div className="flex flex-col justify-between gap-10">
          <address className="not-italic text-[1.0625rem] leading-[1.8]">
            {clinic.address.neighborhood}, {clinic.address.city}, {clinic.address.state} {clinic.address.zip}<br />
            <a href={clinic.phoneTel} className="u-draw">{clinic.phoneDisplay}</a><br />
            <span className="text-ink-2">{clinic.hours.placeholder}<Verify note={clinic.hours.verify} /></span><br />
            <span className="text-ink-2">{clinic.transit.line}<Verify note={clinic.transit.verify} /></span>
          </address>
          <div id="follow"><InstagramTiles count={4} /></div>
        </div>
      </div>
    </section>
  );
}

/** Final block: one giant line, one CTA. */
export function CurrentFinal() {
  return (
    <section aria-labelledby="final-title" className="inverse px-[var(--gutter)] py-24 md:py-36">
      <SplitReveal as="h2" id="final-title" className="font-display text-[16vw] md:text-[11vw]">Book it.</SplitReveal>
      <div className="mt-8 flex flex-wrap items-center gap-x-10 gap-y-4">
        <BookingCTA />
        <p className="cap max-w-[36ch]">{sectionCopy.finalCta}<Verify note={sectionCopy.finalCtaVerify} /></p>
      </div>
    </section>
  );
}
