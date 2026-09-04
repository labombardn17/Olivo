import { results, resultsVerify, reviewPlaceholder, sectionCopy, trust } from "@/content/olivo";
import { BeforeAfter } from "@/components/shared/BeforeAfter";
import { Verify } from "@/lib/verify";
import { Arrow, Stars } from "./Icons";

/** Before and after preview with a reveal slider, and the caption rules. */
export function ResultsPreview({ dark = true }: { dark?: boolean }) {
  return (
    <section id="results" aria-labelledby="results-title" className={`${dark ? "inverse" : "bg-ground-2"} py-20 md:py-28`}>
      <div className="container-x">
        <div className="mx-auto max-w-2xl text-center">
          <span className="pill">Results</span>
          <h2 id="results-title" className="section-title mt-4">{sectionCopy.resultsHeading}</h2>
          <p className="section-sub mx-auto mt-4">Drag the divider. Real before and after images require written patient authorization and are labelled with treatment and session count only.<Verify note={resultsVerify} /></p>
        </div>
        <div className="mx-auto mt-10 max-w-3xl">
          <BeforeAfter
            className="img-frame overflow-hidden shadow-[var(--shadow-card-hover)]"
            aspectClassName="aspect-[4/5] sm:aspect-[16/10]"
            labelClassName="rounded-full bg-ground px-3 py-1 text-[0.75rem] font-semibold uppercase tracking-[0.12em] text-ink"
            handleClassName="!w-[3px] bg-ground"
            rangeClassName="reveal-range"
          />
          <p className="mt-4 text-center text-[0.9375rem] text-ink-2">{results[0]!.treatment}, {results[0]!.sessions}. Placeholder frames.</p>
          <p className="mt-6 text-center"><a href="#results" className="link-arrow">See more results <Arrow /></a></p>
        </div>
      </div>
    </section>
  );
}

/** Three review cards. The text stays a literal placeholder until verified reviews and permissions exist. */
export function Reviews() {
  return (
    <section id="reviews" aria-labelledby="reviews-title" className="py-20 md:py-28">
      <div className="container-x">
        <div className="mx-auto max-w-2xl text-center">
          <span className="pill"><Stars /> [PLACEHOLDER RATING] · {trust.google}<Verify note={trust.googleVerify} /></span>
          <h2 id="reviews-title" className="section-title mt-4">{sectionCopy.reviewsHeading}</h2>
        </div>
        <ul className="mt-12 grid gap-6 md:grid-cols-3">
          {[1, 2, 3].map((n) => (
            <li key={n} className="card flex h-full flex-col p-7">
              <Stars />
              <p className="mt-4 flex-1 italic leading-relaxed text-ink-2">&ldquo;{reviewPlaceholder}&rdquo;</p>
              <div className="mt-6 flex items-center justify-between border-t border-rule pt-4 text-[0.875rem]">
                <span className="font-semibold">[Reviewer {n}]</span>
                <span className="text-ink-2">via Google</span>
              </div>
            </li>
          ))}
        </ul>
        <p className="mt-8 text-center"><a href="#reviews" className="link-arrow">Read all reviews on Google <Arrow /></a></p>
      </div>
    </section>
  );
}
