import { clinic, doctor, memberships, proof, reviewPlaceholder, results, resultsVerify, sectionCopy, skincareLines, cta } from "@/content/olivo";
import { Placeholder } from "@/components/shared/Placeholder";
import { BookingCTA } from "@/components/shared/BookingCTA";
import { InstagramTiles } from "@/components/shared/InstagramTiles";
import { MapPlaceholder } from "@/components/shared/MapPlaceholder";
import { Verify } from "@/lib/verify";
import { CountUp, Hairline, Slide } from "./PrecisionMotion";

/** Proof strip: four numbers counting up once, on visible column rules. */
export function PrecisionProof() {
  const facts = [
    { n: 2013, label: "Physician owned and led since" },
    { n: 2007, label: "Practicing medicine since" },
    { n: 9, label: "Device platforms on site" },
    { n: 2, label: "Manufacturer families, BTL and Alma" },
  ];
  return (
    <section aria-label="Facts about the clinic" className="cols">
      <dl className="grid grid-cols-2 md:grid-cols-4">
        {facts.map((f, i) => (
          <div key={f.label} className={`px-[var(--gutter)] py-8 md:py-10 ${i % 2 ? "border-l border-rule" : ""} ${i >= 2 ? "border-t md:border-t-0 md:border-l border-rule" : ""}`}>
            <dd className="font-display text-[3rem] leading-none md:text-[4.5vw] tabular-nums"><CountUp value={f.n} /></dd>
            <dt className="mono mt-3 text-ink-2">{f.label}</dt>
          </div>
        ))}
      </dl>
    </section>
  );
}

/** The physician: 40/60 split. Portrait hard-edged; credentials as a spec list. */
export function PrecisionDoctor() {
  return (
    <section id="doctor" aria-labelledby="doctor-title" className="grid md:grid-cols-[2fr_3fr]">
      <Placeholder shot="portrait" className="aspect-[4/5] md:aspect-auto md:min-h-[40rem] md:border-r border-rule" sizes="(min-width: 52rem) 40vw, 100vw" />
      <div className="px-[var(--gutter)] py-12 md:py-20 md:pl-12 flex flex-col justify-between">
        <div>
          <p className="mono text-ink-2">01 / Physician</p>
          <h2 id="doctor-title" className="font-display mt-3 text-[2.4rem] leading-[1] md:text-[3.6vw]">{doctor.name}</h2>
          <p className="mt-4 text-ink-2">{doctor.role}</p>
          <Hairline className="mt-8" />
          <dl className="mono mt-6 grid grid-cols-[7rem_1fr] gap-y-3 text-[0.8125rem]">
            <dt className="text-ink-2">DEGREE</dt><dd>{doctor.credentials[0]}</dd>
            <dt className="text-ink-2">RESIDENCY</dt><dd>{doctor.credentials[1]}</dd>
            <dt className="text-ink-2">LICENSED</dt><dd>{doctor.credentials[2]}</dd>
            <dt className="text-ink-2">ALSO</dt><dd>{doctor.credentials[3]}</dd>
            <dt className="text-ink-2">CERTIFIED</dt><dd>{doctor.boardLine}<Verify note={doctor.boardVerify} /></dd>
          </dl>
        </div>
        <div className="mt-12">
          <blockquote className="font-display text-[1.75rem] leading-[1.1] md:text-[2.2vw]">&ldquo;{doctor.quote}&rdquo;</blockquote>
          <a href="#doctor" data-cta="text" className="u-draw mt-6 inline-block">{cta.bio}</a>
        </div>
      </div>
    </section>
  );
}

/** Results: side by side, not a slider. Mono caption strip and a vertical hairline between. */
export function PrecisionResults() {
  return (
    <section id="results" aria-labelledby="results-title" className="py-16 md:py-24">
      <div className="grid-12 px-[var(--gutter)] items-end gap-y-6">
        <h2 id="results-title" className="col-span-12 md:col-span-5 font-display text-[2rem] leading-[1] md:text-[3vw]">Results, side by side</h2>
        <p className="col-span-12 md:col-span-4 md:col-start-9 mono text-ink-2">{sectionCopy.resultsNote}<Verify note={resultsVerify} /></p>
      </div>
      <div className="mt-8 grid grid-cols-2 border-y border-rule">
        <Placeholder shot="skin-1" className="aspect-[4/5] md:aspect-[4/3] border-r border-ink" sizes="50vw" />
        <Placeholder shot="skin-2" className="aspect-[4/5] md:aspect-[4/3]" sizes="50vw" />
      </div>
      <div className="grid grid-cols-2 border-b border-rule mono text-ink-2">
        <p className="px-[var(--gutter)] py-3 border-r border-rule">BEFORE / {results[0]!.treatment.toUpperCase()}</p>
        <p className="px-[var(--gutter)] py-3">AFTER / {results[0]!.sessions.toUpperCase()}</p>
      </div>
      <p className="sr-only">{sectionCopy.resultsPlaceholder}</p>
    </section>
  );
}

/** Memberships and skincare in a 50/50 split, hairline between. Opens with the list. */
export function PrecisionMemberships() {
  return (
    <section id="memberships" aria-labelledby="memberships-title" className="grid md:grid-cols-2">
      <div className="px-[var(--gutter)] py-14 md:py-20 md:border-r border-rule">
        <ol className="grid gap-8 sm:grid-cols-2">
          {memberships.tiers.map((t, i) => (
            <li key={t.name}>
              <p className="mono text-ink-2">0{i + 1}</p>
              <h3 className="font-display mt-2 text-[1.5rem] leading-[1.05]">{t.name}</h3>
              <ul className="mt-4 text-[0.875rem] leading-[1.8] text-ink-2">
                {t.perks.map((p) => <li key={p} className="border-t border-rule py-1.5">{p}</li>)}
              </ul>
            </li>
          ))}
        </ol>
        <p className="mono mt-8 text-ink-2">{clinic.financing.line}<Verify note={memberships.verify} /></p>
      </div>
      <div className="px-[var(--gutter)] py-14 md:py-20 md:pl-12">
        <h2 id="memberships-title" className="label">Memberships and skincare</h2>
        <Slide axis="x" as="p" className="font-display mt-4 text-[2rem] leading-[1] md:text-[3vw]">{sectionCopy.membershipsIntro}</Slide>
        <Hairline className="mt-10" />
        <p className="mono mt-6 text-ink-2">SKINCARE LINES</p>
        <p className="mt-2 text-[1.125rem]">{skincareLines.join(" / ")}</p>
        <a href="#memberships" data-cta="text" className="u-draw mt-4 inline-block">{cta.shop}</a>
      </div>
    </section>
  );
}

/** Reviews: an indexed list with hairlines. */
export function PrecisionReviews() {
  return (
    <section aria-labelledby="reviews-title" className="py-16 md:py-24">
      <div className="grid-12 px-[var(--gutter)]">
        <h2 id="reviews-title" className="col-span-12 md:col-span-3 label">{sectionCopy.reviewsIntro}</h2>
        <ol className="col-span-12 md:col-span-8 md:col-start-5 mt-4 md:mt-0">
          {[1, 2, 3].map((n) => (
            <li key={n} className="grid grid-cols-[3rem_1fr] gap-4 border-t border-rule py-5 last:border-b">
              <span className="mono text-ink-2">0{n}</span>
              <p className="text-[1rem] leading-[1.5] text-ink-2">{reviewPlaceholder}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

/** Visit and follow: 50/50, map hard-edged on the left. */
export function PrecisionVisit() {
  return (
    <section id="visit" aria-labelledby="visit-title" className="grid md:grid-cols-2">
      <MapPlaceholder className="aspect-[4/3] md:aspect-auto md:border-r border-rule" />
      <div className="px-[var(--gutter)] py-14 md:py-20 md:pl-12">
        <p className="mono text-ink-2">41.9250 N, 87.6910 W<Verify note="Coordinates are approximate; replace with the geocoded address" /></p>
        <h2 id="visit-title" className="font-display mt-3 text-[2rem] leading-[1] md:text-[3vw]">{clinic.address.neighborhood}</h2>
        <dl className="mono mt-8 grid grid-cols-[6rem_1fr] gap-y-3 text-[0.8125rem]">
          <dt className="text-ink-2">ADDRESS</dt><dd>{clinic.address.line1}, {clinic.address.city}, {clinic.address.state} {clinic.address.zip}</dd>
          <dt className="text-ink-2">PHONE</dt><dd><a href={clinic.phoneTel} className="u-draw">{clinic.phoneDisplay}</a></dd>
          <dt className="text-ink-2">HOURS</dt><dd>{clinic.hours.placeholder}<Verify note={clinic.hours.verify} /></dd>
          <dt className="text-ink-2">TRANSIT</dt><dd>{clinic.transit.line}<Verify note={clinic.transit.verify} /></dd>
        </dl>
        <div id="follow" className="mt-10 max-w-[22rem]">
          <InstagramTiles count={4} />
        </div>
      </div>
    </section>
  );
}

/** Final CTA: one line, left anchored, with the spec repeated. */
export function PrecisionFinal() {
  return (
    <section aria-labelledby="final-title" className="cols">
      <div className="grid-12 px-[var(--gutter)] py-20 md:py-32 items-end gap-y-8">
        <h2 id="final-title" className="col-span-12 md:col-span-8 font-display text-[11vw] leading-[0.95] md:text-[6vw]">{sectionCopy.finalCta}<Verify note={sectionCopy.finalCtaVerify} /></h2>
        <div className="col-span-12 md:col-span-3 md:col-start-10 flex flex-col items-start gap-4">
          <BookingCTA />
          <p className="mono text-ink-2">{proof.place.toUpperCase()}</p>
        </div>
      </div>
    </section>
  );
}
