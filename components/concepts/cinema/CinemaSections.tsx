import { clinic, doctor, memberships, proof, reviewPlaceholder, results, resultsVerify, sectionCopy, skincareLines, cta } from "@/content/olivo";
import { Placeholder } from "@/components/shared/Placeholder";
import { Reveal } from "@/components/shared/Reveal";
import { Marquee } from "@/components/shared/Marquee";
import { BookingCTA } from "@/components/shared/BookingCTA";
import { BeforeAfter } from "@/components/shared/BeforeAfter";
import { InstagramTiles } from "@/components/shared/InstagramTiles";
import { MapPlaceholder } from "@/components/shared/MapPlaceholder";
import { Verify } from "@/lib/verify";

const slow = { duration: 1.2, ease: "power2.out" };

/** Trust facts run in a hairline-bounded marquee, 20s per loop. */
export function CinemaProof() {
  const facts = [proof.platforms, proof.physician, proof.place, proof.since, proof.nine];
  return (
    <section aria-label="Facts about the clinic" className="border-y border-rule">
      <Marquee duration={20} className="py-5" ariaLabel={facts.join(". ")}>
        {facts.map((f) => (
          <span key={f} className="micro mx-8 flex items-center gap-8 text-ink-2 whitespace-nowrap">
            {f}<span className="h-px w-8 bg-rule" aria-hidden="true" />
          </span>
        ))}
      </Marquee>
    </section>
  );
}

/** The physician right after the proof strip: a pull quote in the serif italic, then the credentials. */
export function CinemaDoctor() {
  return (
    <section id="doctor" aria-labelledby="doctor-title" className="stage grid gap-12 py-24 md:grid-cols-12 md:py-36 md:gap-10">
      <Reveal className="md:col-span-5 md:col-start-2" {...slow}>
        <Placeholder shot="portrait" className="aspect-[4/5]" sizes="(min-width: 52rem) 38vw, 100vw" />
      </Reveal>
      <div className="md:col-span-5 md:col-start-8 md:self-center">
        <Reveal as="blockquote" className="serif text-[3rem] leading-[1.05] md:text-[4vw]" {...slow}>
          <p>&ldquo;{doctor.quote}&rdquo;</p>
        </Reveal>
        <h2 id="doctor-title" className="micro mt-10 text-ink-2">{doctor.name}</h2>
        <ul className="measure mt-4 text-[0.9375rem] leading-[1.7] text-ink-2">
          {doctor.credentials.map((c) => <li key={c}>{c}</li>)}
          <li>{doctor.boardLine}<Verify note={doctor.boardVerify} /></li>
        </ul>
        <a href="#doctor" data-cta="text" className="u-draw mt-8 inline-block">{cta.bio}</a>
      </div>
    </section>
  );
}

/** Wide letterboxed frame with a vertical handle; caption bottom-left in micro caps. */
export function CinemaResults() {
  return (
    <section id="results" aria-labelledby="results-title" className="border-t border-rule py-20 md:py-32">
      <div className="stage">
        <BeforeAfter
          aspectClassName="aspect-[4/5] md:aspect-[21/9]"
          labelClassName="micro bg-ground text-ink px-3 py-2"
          handleClassName="bg-ink"
          rangeClassName="reveal-range"
          caption={
            <div className="mt-5 flex flex-wrap items-baseline justify-between gap-4">
              <p className="micro text-ink-2">{results[0]!.treatment} · {results[0]!.sessions} · {sectionCopy.resultsNote}<Verify note={resultsVerify} /></p>
              <h2 id="results-title" className="serif text-[1.75rem] leading-none">Before, then after</h2>
            </div>
          }
        />
      </div>
    </section>
  );
}

/** Memberships and skincare on a narrow measure. Opens with a number. */
export function CinemaMemberships() {
  return (
    <section id="memberships" aria-labelledby="memberships-title" className="border-t border-rule">
      <div className="stage grid gap-10 py-20 md:grid-cols-12 md:py-32">
        <p className="serif text-[5rem] leading-none md:col-span-2 md:text-[7vw]" aria-hidden="true">2</p>
        <div className="md:col-span-6 md:col-start-4">
          <h2 id="memberships-title" className="font-display text-[1.75rem] leading-[1.1] md:text-[2.4vw]">{sectionCopy.membershipsIntro}</h2>
          <div className="mt-10 grid gap-8 sm:grid-cols-2">
            {memberships.tiers.map((t) => (
              <div key={t.name} className="border-t border-rule pt-4">
                <h3 className="micro">{t.name}</h3>
                <ul className="mt-3 text-[0.9375rem] leading-[1.7] text-ink-2">
                  {t.perks.map((p) => <li key={p}>{p}</li>)}
                </ul>
              </div>
            ))}
          </div>
          <p className="mt-8 text-[0.8125rem] text-ink-2">{clinic.financing.line}<Verify note={memberships.verify} /></p>
        </div>
        <div className="md:col-span-3 md:col-start-10 md:self-end">
          <p className="micro text-ink-2">Skincare</p>
          <p className="serif mt-3 text-[1.4rem] leading-[1.25]">{skincareLines.join(", ")}.</p>
          <a href="#memberships" data-cta="text" className="u-draw mt-4 inline-block">{cta.shop}</a>
        </div>
      </div>
    </section>
  );
}

/** Three literal placeholders as pull quotes. */
export function CinemaReviews() {
  return (
    <section aria-labelledby="reviews-title" className="border-t border-rule">
      <div className="stage py-20 md:py-32">
        <h2 id="reviews-title" className="micro text-ink-2">{sectionCopy.reviewsIntro}</h2>
        <ol className="mt-10 grid gap-10 md:grid-cols-12 md:gap-y-16">
          {[1, 2, 3].map((n) => (
            <li key={n} className={`border-l border-rule pl-6 ${n === 1 ? "md:col-span-5" : n === 2 ? "md:col-span-5 md:col-start-8 md:mt-16" : "md:col-span-5 md:col-start-4"}`}>
              <p className="serif text-[1.35rem] leading-[1.3] text-ink-2">{reviewPlaceholder}</p>
              <p className="micro mt-4 text-ink-2">0{n}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

/** Visit and follow. Opens with the map, edge to edge on the left. */
export function CinemaVisit() {
  return (
    <section id="visit" aria-labelledby="visit-title" className="border-t border-rule">
      <div className="grid md:grid-cols-2">
        <MapPlaceholder className="aspect-[4/3] md:aspect-auto md:min-h-[32rem]" />
        <div className="px-[var(--gutter)] py-16 md:py-24 md:pl-16">
          <h2 id="visit-title" className="font-display text-[2rem] leading-[1] md:text-[3vw]">{clinic.address.neighborhood}</h2>
          <address className="not-italic mt-6 text-[0.9375rem] leading-[1.8] text-ink-2">
            {clinic.address.line1}, {clinic.address.city}, {clinic.address.state} {clinic.address.zip}<br />
            <a href={clinic.phoneTel} className="u-draw text-ink">{clinic.phoneDisplay}</a><br />
            {clinic.hours.placeholder}<Verify note={clinic.hours.verify} /><br />
            {clinic.transit.line}<Verify note={clinic.transit.verify} />
          </address>
          <div id="follow" className="mt-12 max-w-[24rem]">
            <InstagramTiles count={4} />
          </div>
        </div>
      </div>
    </section>
  );
}

/** Final title card. */
export function CinemaFinal() {
  return (
    <section aria-labelledby="final-title" className="border-t border-rule">
      <div className="stage flex flex-col items-center py-28 text-center md:py-44">
        <Reveal as="h2" id="final-title" className="font-display text-[12vw] leading-[0.92] md:text-[6.5vw] balance" {...slow}>
          The doctor is <span className="serif">in</span>.
        </Reveal>
        <p className="mt-6 max-w-[40ch] text-ink-2">{sectionCopy.finalCta}<Verify note={sectionCopy.finalCtaVerify} /></p>
        <BookingCTA className="mt-10" />
      </div>
    </section>
  );
}
