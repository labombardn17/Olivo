import { BeforeAfter } from "@/components/shared/BeforeAfter";
import { Crumbs, CtaBand } from "@/components/site/Blocks";
import { buildMeta } from "@/lib/meta";
import { Verify } from "@/lib/verify";

export const metadata = buildMeta({ title: "Results and Gallery Policy | Olivo Med Spa", description: "How Olivo Med Spa in Logan Square, Chicago shares before and after results: written patient authorization, treatment and session count only, no promises.", path: "/results" });

export default function Results() {
  return (
    <>
      <section className="py-12 md:py-20"><div className="container-x mx-auto max-w-3xl">
        <Crumbs items={[{ name: "Home", href: "/" }, { name: "Results" }]} />
        <p className="kicker mt-8">Results</p>
        <h1 className="section-title mt-3 balance">Results belong to the person who earned them.</h1>
        <div className="prose"><p>We show before and after images only with written authorization from the patient, labelled with the treatment and session count and nothing else: no ages, no initials, no claims about what you should expect.</p><p>Results vary from person to person. What a treatment can and cannot do for you is set with the physician at your consultation, where we can also show you authorized cases in the clinic.</p></div>
        <div className="mt-10"><BeforeAfter className="img-frame overflow-hidden shadow-[var(--shadow-card-hover)]" aspectClassName="aspect-[4/5] sm:aspect-[16/10]" labelClassName="rounded-full bg-ground px-3 py-1 text-[0.75rem] font-semibold uppercase tracking-[0.12em] text-ink" handleClassName="!w-[3px] bg-ground" rangeClassName="reveal-range" /><p className="mt-3 text-center text-[0.875rem] text-ink-2">Placeholder frames. Authorized cases will appear here.<Verify note="Gallery: supply authorized before and after cases with signed releases" /></p></div>
      </div></section>
      <CtaBand title="See authorized results in person." line="Book a consultation and ask to see cases for the treatment you are considering." />
    </>
  );
}
