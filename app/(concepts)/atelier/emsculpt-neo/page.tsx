import { ConceptShell } from "@/components/shared/ConceptShell";
import { Footer } from "@/components/shared/Footer";
import { resolvePageParams, type SearchParams } from "@/lib/page";
import { descriptions, pageMetadata } from "@/content/seo";
import { AtelierNav, AtelierWordmark } from "@/components/concepts/atelier/AtelierNav";
import { AtelierPlate } from "@/components/concepts/atelier/AtelierPlate";
import { RunningHead } from "@/components/concepts/atelier/RunningHead";
import { BookingCTA } from "@/components/shared/BookingCTA";
import { Placeholder } from "@/components/shared/Placeholder";
import { SplitReveal } from "@/components/shared/SplitReveal";
import { devices, clinic, downtimeVerify, proof } from "@/content/olivo";
import { Verify } from "@/lib/verify";

export const metadata = pageMetadata(descriptions.emsculptNeo, "Emsculpt Neo | Olivo Med Spa, Logan Square");

/** Interior page: does the Atelier system extend to a single device? */
export default async function Page({ searchParams }: { searchParams: SearchParams }) {
  const { palette, fromUrl } = await resolvePageParams(searchParams, "atelier");
  const d = devices[0]!;
  return (
    <ConceptShell palette={palette} fromUrl={fromUrl}>
      <AtelierNav />
      <main>
        <section id="top" data-hero="" aria-labelledby="device-title" className="relative pt-32 md:pt-40 pb-16 md:pb-24">
          <RunningHead word="Plate one" title={d.name} folio="1" below />
          <div className="grid-12 px-[var(--gutter)] gap-y-10 items-end">
            <div className="col-span-12 md:col-start-2 md:col-span-6">
              <p className="folio">{d.ordinal} of nine</p>
              <SplitReveal as="h1" id="device-title" immediate className="font-display text-[13vw] md:text-[7.5vw] leading-[0.94] mt-4 hang">{d.name}</SplitReveal>
              <p className="sc text-ink-2 mt-6">{d.family}</p>
              <p className="mt-6 max-w-[34ch] text-[1.125rem] leading-[1.5]">{d.fn}</p>
              <div className="mt-8 flex flex-wrap items-center gap-x-8 gap-y-4">
                <BookingCTA label={`Book ${d.name}`} />
                <a href="/atelier#technology" data-cta="text" className="u-draw">All nine instruments</a>
              </div>
            </div>
            <AtelierPlate device={d} index={0} className="col-span-8 md:col-start-9 md:col-span-4" />
          </div>
        </section>
        <section aria-labelledby="how-title" className="relative border-t border-rule">
          <RunningHead word="Plate one" title="How it works" folio="2" />
          <div className="grid-12 px-0 md:px-[var(--gutter)] py-16 md:py-24 gap-y-10">
            <Placeholder shot="hands-1" className="col-span-12 md:col-span-7 md:-ml-[var(--gutter)] aspect-[16/10]" sizes="(min-width: 52rem) 58vw, 100vw" />
            <div className="col-span-12 md:col-start-9 md:col-span-3 px-[var(--gutter)] md:px-0">
              <h2 id="how-title" className="font-display text-[2.2rem] md:text-[2.6vw] leading-[1.05] hang">A session, described plainly</h2>
              <dl className="mt-8 border-t border-rule text-[0.9375rem]">
                {[["Area", d.area], ["Downtime", d.downtime], ["Platform", d.family], ["Where", proof.place]].map(([k, v]) => (
                  <div key={k} className="flex justify-between gap-4 border-b border-rule py-3"><dt className="text-ink-2">{k}</dt><dd>{v}</dd></div>
                ))}
              </dl>
              <p className="mt-4 text-[0.8125rem] text-ink-2">Session details, candidacy, and what to expect are set at consultation.<Verify note={downtimeVerify} /></p>
            </div>
          </div>
        </section>
        <section aria-labelledby="cta-title" className="border-t border-rule">
          <div className="grid-12 px-[var(--gutter)] py-20 md:py-28 items-end">
            <h2 id="cta-title" className="col-span-12 md:col-start-2 md:col-span-7 font-display text-[10vw] md:text-[5.5vw] leading-[0.96] hang">Ask about {d.name}<span className="wonk">.</span></h2>
            <div className="col-span-12 md:col-start-10 md:col-span-3 mt-8 md:mt-0">
              <BookingCTA />
              <p className="mt-4 text-[0.875rem] text-ink-2"><a href={clinic.phoneTel} className="u-draw">{clinic.phoneDisplay}</a></p>
            </div>
          </div>
        </section>
      </main>
      <Footer wordmark={<AtelierWordmark />} />
    </ConceptShell>
  );
}
