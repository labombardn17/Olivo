import { clinic, doctor, firstVisit, firstVisitVerify, memberships, proof, reviewPlaceholder, results, resultsVerify, sectionCopy, skincareLines, cta } from "@/content/olivo";
import { Placeholder } from "@/components/shared/Placeholder";
import { Reveal } from "@/components/shared/Reveal";
import { BookingCTA } from "@/components/shared/BookingCTA";
import { BeforeAfter } from "@/components/shared/BeforeAfter";
import { InstagramTiles } from "@/components/shared/InstagramTiles";
import { MapPlaceholder } from "@/components/shared/MapPlaceholder";
import { Verify } from "@/lib/verify";

const gentle = { duration: 1.2, drift: 20 };

/** Proof: three lines of type, centered, with hairlines. Opens with the facts themselves. */
export function ResidenceProof() {
  return (
    <section aria-label="Facts about the clinic" className="gap-section !pb-0">
      <Reveal as="ul" stagger={0.12} className="frame grid divide-y divide-rule md:grid-cols-3 md:divide-y-0 md:divide-x" {...gentle}>
        {[proof.physician, proof.platforms, proof.place].map((f) => (
          <li key={f} className="px-6 py-8 text-center font-display text-[1.35rem] md:text-[1.6vw]">{f}</li>
        ))}
      </Reveal>
    </section>
  );
}

/** The physician, centered: portrait in the frame, credentials beneath. Opens with the portrait. */
export function ResidenceDoctor() {
  return (
    <section id="doctor" aria-labelledby="doctor-title" className="gap-section">
      <div className="frame grid md:grid-cols-[1fr_1fr]">
        <Reveal className="md:border-r border-rule" {...gentle}>
          <Placeholder shot="portrait" className="aspect-[4/5] md:h-full" sizes="(min-width: 52rem) 50vw, 100vw" />
        </Reveal>
        <div className="flex flex-col justify-center px-6 py-12 text-center md:px-14 md:py-20">
          <p className="eyebrow-r">The physician</p>
          <h2 id="doctor-title" className="font-display mt-4 text-[1.9rem] md:text-[2.6vw]">{doctor.name}</h2>
          <p className="mt-2 text-ink-2 text-[0.9375rem]">{doctor.role}</p>
          <blockquote className="font-display ital mt-10 text-[1.6rem] md:text-[2vw]">&ldquo;{doctor.quote}&rdquo;</blockquote>
          <ul className="mx-auto mt-10 max-w-[38ch] space-y-1.5 text-[0.875rem] leading-[1.6] text-ink-2">
            {doctor.credentials.map((c) => <li key={c}>{c}</li>)}
            <li>{doctor.boardLine}<Verify note={doctor.boardVerify} /></li>
          </ul>
          <a href="#doctor" data-cta="text" className="u-draw mx-auto mt-8 inline-block">{cta.bio}</a>
        </div>
      </div>
    </section>
  );
}

/** Results, framed, with the reveal. Silent section: an image and one line. */
export function ResidenceResults() {
  return (
    <section id="results" aria-labelledby="results-title" className="gap-section !pt-0">
      <div className="frame">
        <BeforeAfter
          aspectClassName="aspect-[4/5] md:aspect-[16/9]"
          labelClassName="text-[0.75rem] tracking-[0.14em] uppercase bg-ground text-ink px-3 py-1.5"
          handleClassName="bg-ground"
          rangeClassName="reveal-range"
        />
        <div className="border-t border-rule px-6 py-5 text-center md:px-14">
          <h2 id="results-title" className="font-display text-[1.25rem]">{results[1]!.treatment}, {results[1]!.sessions}. {sectionCopy.resultsNote}<Verify note={resultsVerify} /></h2>
        </div>
      </div>
    </section>
  );
}

/** Memberships and skincare, centered and symmetrical. Opens with the two names. */
export function ResidenceMemberships() {
  return (
    <section id="memberships" aria-labelledby="memberships-title" className="gap-section !pt-0">
      <div className="frame px-6 py-14 text-center md:px-14 md:py-24">
        <div className="mx-auto grid max-w-[52rem] gap-12 md:grid-cols-2 md:gap-20">
          {memberships.tiers.map((t) => (
            <div key={t.name}>
              <h3 className="font-display text-[1.75rem] md:text-[2vw]">{t.name}</h3>
              <ul className="mt-5 space-y-2 text-[0.9375rem] text-ink-2">
                {t.perks.map((p) => <li key={p}>{p}</li>)}
              </ul>
            </div>
          ))}
        </div>
        <h2 id="memberships-title" className="eyebrow-r mt-14">Memberships and skincare</h2>
        <p className="mt-3 text-[0.9375rem] text-ink-2">{clinic.financing.line}<Verify note={memberships.verify} /></p>
        <p className="font-display ital mx-auto mt-10 max-w-[40ch] text-[1.5rem] md:text-[1.8vw]">{skincareLines.join(", ")}, dispensed by the clinical team.</p>
        <a href="#memberships" data-cta="text" className="u-draw mt-5 inline-block">{cta.shop}</a>
      </div>
    </section>
  );
}

/** Reviews: three placeholders stacked, centered, hairlines between. */
export function ResidenceReviews() {
  return (
    <section aria-labelledby="reviews-title" className="gap-section !pt-0">
      <div className="frame px-6 py-14 text-center md:px-14 md:py-20">
        <h2 id="reviews-title" className="eyebrow-r">{sectionCopy.reviewsIntro}</h2>
        <ol className="mx-auto mt-8 max-w-[44rem] divide-y divide-rule">
          {[1, 2, 3].map((n) => (
            <li key={n} className="py-8">
              <p className="font-display ital text-[1.3rem] md:text-[1.6vw] leading-[1.35] text-ink-2">{reviewPlaceholder}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

/** Visit: address, framed map, then "Your first visit" as a five-step hairline timeline, then follow. */
export function ResidenceVisit() {
  return (
    <section id="visit" aria-labelledby="visit-title" className="gap-section !pt-0">
      <div className="frame grid md:grid-cols-2">
        <MapPlaceholder className="aspect-[4/3] md:aspect-auto md:border-r border-rule" />
        <div className="px-6 py-12 text-center md:px-14 md:py-20 flex flex-col justify-center">
          <p className="eyebrow-r">{clinic.address.neighborhood}</p>
          <h2 id="visit-title" className="font-display mt-4 text-[1.9rem] md:text-[2.4vw]">{clinic.address.line1}, {clinic.address.city}</h2>
          <p className="mt-4 text-[0.9375rem] text-ink-2 leading-[1.8]">
            <a href={clinic.phoneTel} className="u-draw text-ink">{clinic.phoneDisplay}</a><br />
            {clinic.hours.placeholder}<Verify note={clinic.hours.verify} /><br />
            {clinic.transit.line}<Verify note={clinic.transit.verify} />
          </p>
        </div>
      </div>
      <div className="frame mt-6 border-t-0 md:border-t px-6 py-12 md:px-14 md:py-16">
        <p className="eyebrow-r text-center">Your first visit<Verify note={firstVisitVerify} /></p>
        <ol className="timeline mt-10 grid grid-cols-1 gap-8 md:grid-cols-5 md:gap-6">
          {firstVisit.map((s, i) => (
            <li key={s.step} className="relative pl-8 md:pl-0">
              <span className="tick absolute left-0 top-0 md:static md:block" aria-hidden="true" />
              <p className="font-display mt-0 md:mt-4 text-[1.25rem]"><span className="text-ink-2 text-[0.75rem] mr-2">{i + 1}</span>{s.step}</p>
              <p className="mt-1 text-[0.8125rem] leading-[1.6] text-ink-2">{s.line}</p>
            </li>
          ))}
        </ol>
      </div>
      <div id="follow" className="frame mt-6 border-t-0 md:border-t px-6 py-12 md:px-14 md:py-16">
        <InstagramTiles count={6} className="mx-auto max-w-[36rem]" />
      </div>
    </section>
  );
}

/** Final: one italic line, one CTA, inside the frame. */
export function ResidenceFinal() {
  return (
    <section aria-labelledby="final-title" className="pb-[var(--inset)]">
      <div className="frame px-6 py-20 text-center md:px-14 md:py-32">
        <Reveal as="h2" id="final-title" stagger={0.12} className="font-display mx-auto max-w-[30ch] text-[1.9rem] md:text-[2.8vw] balance" {...gentle}>
          <span className="block">Come as you are.</span>
          <span className="block ital">Leave as you intend.</span>
        </Reveal>
        <BookingCTA className="mt-10" />
        <p className="mt-6 text-[0.8125rem] text-ink-2">{sectionCopy.finalCta}<Verify note={sectionCopy.finalCtaVerify} /></p>
      </div>
    </section>
  );
}
