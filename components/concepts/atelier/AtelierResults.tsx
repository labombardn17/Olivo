import { results, resultsVerify, sectionCopy } from "@/content/olivo";
import { BeforeAfter } from "@/components/shared/BeforeAfter";
import { Verify } from "@/lib/verify";
import { RunningHead } from "./RunningHead";

/** Opens with the image. Treatment and session count only. */
export function AtelierResults() {
  const r = results[0]!;
  return (
    <section id="results" aria-labelledby="results-title" className="relative border-t border-rule">
      <RunningHead word="Three" title="The results" folio="iii" />
      <div className="grid-12 px-0 md:px-[var(--gutter)] pt-16 md:pt-24 pb-20 md:pb-28 gap-y-10">
        <BeforeAfter
          className="col-span-12 md:col-start-1 md:col-span-7 md:-ml-[var(--gutter)]"
          labelClassName="font-display text-[1.5rem] bg-ground text-ink px-3 py-1"
          handleClassName="bg-ground"
          rangeClassName="reveal-range"
        />
        <div className="col-span-12 md:col-start-8 md:col-span-4 px-[var(--gutter)] md:px-0 md:self-end">
          {/* Deliberate irregularity: the headline runs back over the image edge. */}
          <h2 id="results-title" className="font-display text-[2.4rem] md:text-[3.4vw] leading-[1] hang md:-ml-[14%] relative z-10">Before, and after<span className="wonk">.</span></h2>
          <dl className="mt-8 border-t border-rule text-[0.9375rem]">
            {results.map((x) => (
              <div key={x.treatment} className="flex justify-between gap-4 border-b border-rule py-3">
                <dt>{x.treatment}</dt>
                <dd className="text-ink-2">{x.sessions}</dd>
              </div>
            ))}
          </dl>
          <p className="mt-4 text-[0.8125rem] text-ink-2">{sectionCopy.resultsNote}<Verify note={resultsVerify} /></p>
          <p className="sr-only">Shown: {r.treatment}, {r.sessions}. Drag the divider to compare.</p>
        </div>
      </div>
    </section>
  );
}
