import { ConceptShell } from "@/components/shared/ConceptShell";
import { Footer } from "@/components/shared/Footer";
import { resolvePageParams, type SearchParams } from "@/lib/page";
import { descriptions, pageMetadata } from "@/content/seo";
import { PrecisionNav, PrecisionWordmark } from "@/components/concepts/precision/PrecisionNav";
import { PrecisionDrawing } from "@/components/concepts/precision/PrecisionDrawing";
import { Hairline, Slide } from "@/components/concepts/precision/PrecisionMotion";
import { BookingCTA } from "@/components/shared/BookingCTA";
import { Placeholder } from "@/components/shared/Placeholder";
import { devices, clinic, downtimeVerify, proof } from "@/content/olivo";
import { Verify } from "@/lib/verify";

export const metadata = pageMetadata(descriptions.emsculptNeo, "Emsculpt Neo | Olivo Med Spa, Logan Square");

/** Interior: one row of the index, expanded to a spec sheet. */
export default async function Page({ searchParams }: { searchParams: SearchParams }) {
  const { palette, fromUrl } = await resolvePageParams(searchParams, "precision");
  const d = devices[0]!;
  return (
    <ConceptShell palette={palette} fromUrl={fromUrl}>
      <PrecisionNav />
      <main>
        <section id="top" data-hero="" aria-labelledby="device-title" className="grid md:grid-cols-[3fr_2fr] pt-20 md:pt-24">
          <div className="px-[var(--gutter)] py-12 md:py-20 md:border-r border-rule flex flex-col justify-between">
            <Slide axis="y" stagger={0.08}>
              <p className="mono text-ink-2">01 / 09 · {d.family}</p>
              <h1 id="device-title" className="font-display mt-4 text-[13vw] leading-[0.95] md:text-[6vw]">{d.name}</h1>
              <p className="mt-6 max-w-[36ch] text-[1.125rem]">{d.fn}</p>
            </Slide>
            <div className="mt-12">
              <Hairline />
              <dl className="mono mt-5 grid grid-cols-[7rem_1fr] gap-y-3 text-[0.8125rem]">
                <dt className="text-ink-2">AREA</dt><dd>{d.area}</dd>
                <dt className="text-ink-2">DOWNTIME</dt><dd>{d.downtime}<Verify note={downtimeVerify} /></dd>
                <dt className="text-ink-2">PLATFORM</dt><dd>{d.family}</dd>
                <dt className="text-ink-2">LOCATION</dt><dd>{proof.place}</dd>
              </dl>
              <div className="mt-8 flex flex-wrap items-center gap-x-8 gap-y-4">
                <BookingCTA label={`Book ${d.name}`} />
                <a href="/precision#technology" data-cta="text" className="u-draw">Back to the index</a>
              </div>
            </div>
          </div>
          <PrecisionDrawing device={d} index={0} className="!border-0 !border-b md:!border-b-0 w-full md:aspect-auto md:min-h-[36rem]" />
        </section>
        <section aria-label="Treatment room" className="grid md:grid-cols-2">
          <Placeholder shot="hands-1" className="aspect-[16/10] md:border-r border-rule" sizes="(min-width: 52rem) 50vw, 100vw" />
          <div className="px-[var(--gutter)] py-12 md:py-20 md:pl-12 flex flex-col justify-end">
            <p className="mono text-ink-2">ONE LINE</p>
            <p className="font-display mt-3 text-[1.75rem] leading-[1.1] md:text-[2.4vw]">A session is set at consultation, in writing.<Verify note="Written plan claim: clinic to confirm" /></p>
          </div>
        </section>
        <section aria-labelledby="cta-title" className="cols">
          <div className="grid-12 px-[var(--gutter)] py-20 md:py-28 items-end gap-y-6">
            <h2 id="cta-title" className="col-span-12 md:col-span-8 font-display text-[10vw] leading-[0.95] md:text-[5vw]">Ask about {d.name}.</h2>
            <div className="col-span-12 md:col-span-3 md:col-start-10">
              <BookingCTA />
              <p className="mono mt-4 text-ink-2"><a href={clinic.phoneTel} className="u-draw">{clinic.phoneDisplay}</a></p>
            </div>
          </div>
        </section>
      </main>
      <Footer wordmark={<PrecisionWordmark />} />
    </ConceptShell>
  );
}
