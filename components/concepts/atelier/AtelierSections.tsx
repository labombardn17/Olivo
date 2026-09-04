import { clinic, doctor, memberships, proof, reviewPlaceholder, sectionCopy, skincareLines, cta } from "@/content/olivo";
import { Placeholder } from "@/components/shared/Placeholder";
import { Reveal } from "@/components/shared/Reveal";
import { SplitReveal } from "@/components/shared/SplitReveal";
import { BookingCTA } from "@/components/shared/BookingCTA";
import { InstagramTiles } from "@/components/shared/InstagramTiles";
import { MapPlaceholder } from "@/components/shared/MapPlaceholder";
import { Verify } from "@/lib/verify";
import { RunningHead } from "./RunningHead";

/** Proof strip: facts as one serif paragraph, not icon cards. Opens with a number. */
export function AtelierProof() {
  return (
    <section aria-label="Facts about the clinic" className="relative border-t border-rule">
      <div className="grid-12 px-[var(--gutter)] py-14 md:py-20">
        <p className="col-span-3 md:col-start-2 md:col-span-1 font-display text-[4rem] md:text-[5vw] leading-none" aria-hidden="true">
          <span className="wonk">13</span>
        </p>
        <Reveal as="p" stagger={0.1} className="col-span-12 md:col-start-4 md:col-span-8 font-display text-[1.6rem] md:text-[2.2vw] leading-[1.3] hang" style={{ fontVariationSettings: '"opsz" 72, "SOFT" 50' }}>
          <span>{proof.physician}. </span>
          <span className="text-ink-2">{proof.since}. </span>
          <span>{proof.platforms}. </span>
          <span className="text-ink-2">{proof.place}.</span>
        </Reveal>
      </div>
    </section>
  );
}

/** Dr. Olivo: quote first, portrait bleeding to the left edge, credentials in columns 7 to 11. */
export function AtelierDoctor() {
  return (
    <section id="doctor" aria-labelledby="doctor-title" className="relative border-t border-rule">
      <RunningHead word="Prologue" title="The physician" folio="p" />
      <div className="grid-12 px-0 md:px-[var(--gutter)] gap-y-10 items-end pb-20 md:pb-28">
        <Placeholder shot="portrait" className="col-span-10 md:col-span-5 md:-ml-[var(--gutter)] aspect-[4/5]" sizes="(min-width: 52rem) 42vw, 85vw" />
        <div className="col-span-12 md:col-start-7 md:col-span-5 px-[var(--gutter)] md:px-0">
          <SplitReveal as="blockquote" className="font-display text-[3rem] md:text-[4.4vw] leading-[1] hang">
            <p>&ldquo;{doctor.quote}&rdquo;</p>
          </SplitReveal>
          <h2 id="doctor-title" className="mt-10 sc text-ink-2">{doctor.name}</h2>
          <ul className="mt-3 text-[0.9375rem] leading-[1.6]">
            {doctor.credentials.map((c) => (
              <li key={c}>{c}</li>
            ))}
            <li>{doctor.boardLine}<Verify note={doctor.boardVerify} /></li>
          </ul>
          <p className="mt-6 max-w-[34ch] text-ink-2">{doctor.bio}<Verify note={doctor.bioVerify} /></p>
          <a href="#doctor" data-cta="text" className="u-draw mt-6 inline-block">{cta.bio}</a>
        </div>
      </div>
    </section>
  );
}

/** Memberships and skincare in one section. Opens with a list. */
export function AtelierMemberships() {
  return (
    <section id="memberships" aria-labelledby="memberships-title" className="relative border-t border-rule">
      <RunningHead word="Four" title="Membership and skincare" folio="iv" />
      <div className="grid-12 px-[var(--gutter)] py-20 md:py-28 gap-y-12">
        <div className="col-span-12 md:col-start-2 md:col-span-6 grid grid-cols-2 gap-[var(--gutter)]">
          {memberships.tiers.map((t) => (
            <div key={t.name} className="border-t border-ink pt-4">
              <h3 className="font-display text-[1.6rem] leading-[1.1]" style={{ fontVariationSettings: '"opsz" 48, "SOFT" 50' }}>{t.name}</h3>
              <ul className="mt-4 text-[0.9375rem] leading-[1.7] text-ink-2">
                {t.perks.map((p) => (
                  <li key={p}>{p}</li>
                ))}
              </ul>
            </div>
          ))}
          <p className="col-span-2 text-[0.8125rem] text-ink-2"><Verify note={memberships.verify} />{clinic.financing.line}</p>
        </div>
        <div className="col-span-12 md:col-start-9 md:col-span-3 md:pt-1">
          <h2 id="memberships-title" className="sc text-ink-2">Two memberships</h2>
          <p className="mt-4 text-[0.9375rem] leading-[1.6]">{sectionCopy.membershipsIntro}</p>
          <h3 className="sc text-ink-2 mt-10">Skincare</h3>
          <p className="mt-3 font-display text-[1.25rem] leading-[1.35]" style={{ fontVariationSettings: '"opsz" 36, "SOFT" 50' }}>{skincareLines.join(", ")}.</p>
          <p className="mt-2 text-[0.875rem] text-ink-2">Dispensed by the clinical team.</p>
          <a href="#memberships" data-cta="text" className="u-draw mt-4 inline-block">{cta.shop}</a>
        </div>
      </div>
    </section>
  );
}

/** Reviews: three literal placeholders as a serif list. No fabricated prose. */
export function AtelierReviews() {
  return (
    <section aria-labelledby="reviews-title" className="relative border-t border-rule">
      <RunningHead word="Five" title="In their words" folio="v" />
      <div className="grid-12 px-[var(--gutter)] py-20 md:py-28">
        <h2 id="reviews-title" className="col-span-12 md:col-start-2 md:col-span-3 sc text-ink-2">{sectionCopy.reviewsIntro}</h2>
        <ol className="col-span-12 md:col-start-5 md:col-span-7 mt-6 md:mt-0 divide-y divide-rule border-y border-rule">
          {[1, 2, 3].map((n) => (
            <li key={n} className="py-6 grid grid-cols-[3rem_1fr] gap-4">
              <span className="folio pt-1">{n}</span>
              <p className="font-display text-[1.25rem] leading-[1.4] text-ink-2" style={{ fontVariationSettings: '"opsz" 36, "SOFT" 50' }}>{reviewPlaceholder}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

/** Visit and follow in one section. Opens with the map. */
export function AtelierVisit() {
  return (
    <section id="visit" aria-labelledby="visit-title" className="relative border-t border-rule">
      <RunningHead word="Six" title="Fullerton Avenue" folio="vi" />
      <div className="grid-12 px-0 md:px-[var(--gutter)] py-0 md:py-24 gap-y-10">
        <MapPlaceholder className="col-span-12 md:col-span-6 md:-ml-[var(--gutter)] aspect-[3/2]" />
        <div className="col-span-12 md:col-start-8 md:col-span-4 px-[var(--gutter)] md:px-0 pb-16 md:pb-0">
          <h2 id="visit-title" className="font-display text-[2.4rem] md:text-[3vw] leading-[1] hang">{clinic.address.neighborhood}</h2>
          <address className="not-italic mt-6 text-[0.9375rem] leading-[1.7]">
            {clinic.address.line1}<br />{clinic.address.city}, {clinic.address.state} {clinic.address.zip}<br />
            <a href={clinic.phoneTel} className="u-draw">{clinic.phoneDisplay}</a>
          </address>
          <p className="mt-4 text-ink-2 text-[0.9375rem]">{clinic.hours.placeholder}<Verify note={clinic.hours.verify} /></p>
          <p className="mt-1 text-ink-2 text-[0.9375rem]">{clinic.transit.line}<Verify note={clinic.transit.verify} /></p>
          <div id="follow" className="mt-10">
            <InstagramTiles count={6} />
          </div>
        </div>
      </div>
    </section>
  );
}

/** Final CTA band: one line, one verb. */
export function AtelierFinal() {
  return (
    <section aria-labelledby="final-title" className="relative border-t border-rule">
      <div className="grid-12 px-[var(--gutter)] py-24 md:py-36 items-end">
        <SplitReveal as="h2" id="final-title" className="col-span-12 md:col-start-2 md:col-span-8 font-display text-[11vw] md:text-[7vw] leading-[0.95] hang">
          Book a consultation<span className="wonk">.</span>
        </SplitReveal>
        <div className="col-span-12 md:col-start-10 md:col-span-3 mt-10 md:mt-0 flex flex-col items-start gap-4">
          <BookingCTA />
          <p className="text-[0.875rem] text-ink-2">{sectionCopy.finalCta}<Verify note={sectionCopy.finalCtaVerify} /></p>
        </div>
      </div>
    </section>
  );
}
