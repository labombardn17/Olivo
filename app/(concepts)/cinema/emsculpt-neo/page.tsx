import { ConceptShell } from "@/components/shared/ConceptShell";
import { Footer } from "@/components/shared/Footer";
import { Cursor } from "@/components/shared/Cursor";
import { resolvePageParams, type SearchParams } from "@/lib/page";
import { descriptions, pageMetadata } from "@/content/seo";
import { CinemaNav, CinemaWordmark } from "@/components/concepts/cinema/CinemaNav";
import { CinemaObject } from "@/components/concepts/cinema/CinemaObject";
import { BookingCTA } from "@/components/shared/BookingCTA";
import { Placeholder } from "@/components/shared/Placeholder";
import { Reveal } from "@/components/shared/Reveal";
import { devices, clinic, downtimeVerify, proof } from "@/content/olivo";
import { Verify } from "@/lib/verify";

export const metadata = pageMetadata(descriptions.emsculptNeo, "Emsculpt Neo | Olivo Med Spa, Logan Square");

/** Interior: one object on the stage. */
export default async function Page({ searchParams }: { searchParams: SearchParams }) {
  const { palette, fromUrl } = await resolvePageParams(searchParams, "cinema");
  const d = devices[0]!;
  return (
    <ConceptShell palette={palette} fromUrl={fromUrl}>
      <CinemaNav />
      <main>
        <section id="top" data-hero="" aria-labelledby="device-title" className="stage grid min-h-[100svh] items-center gap-10 pt-28 pb-16 md:grid-cols-12">
          <Reveal className="md:col-span-5" duration={1.4}>
            <CinemaObject device={d} className="max-h-[70svh] w-full" />
          </Reveal>
          <div className="md:col-span-6 md:col-start-7">
            <p className="micro text-ink-2">{d.family} · 01 / 09</p>
            <h1 id="device-title" className="font-display mt-4 text-[13vw] leading-[0.92] md:text-[6.5vw]">{d.name}</h1>
            <p className="serif mt-6 text-[1.5rem] leading-[1.25] max-w-[26ch]">{d.fn}</p>
            <dl className="mt-10 grid grid-cols-2 gap-x-8 gap-y-3 border-t border-rule pt-5 text-[0.875rem] max-w-[28rem]">
              {[["Area", d.area], ["Downtime", d.downtime], ["Platform", d.family], ["Where", proof.place]].map(([k, v]) => (
                <div key={k} className="contents"><dt className="micro text-ink-2">{k}</dt><dd>{v}</dd></div>
              ))}
            </dl>
            <p className="mt-3 text-[0.8125rem] text-ink-2 max-w-[40ch]">Candidacy and expectations are set at consultation.<Verify note={downtimeVerify} /></p>
            <div className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-4">
              <BookingCTA label={`Book ${d.name}`} />
              <a href="/cinema#technology" data-cta="text" className="u-draw text-ink-2">The full collection</a>
            </div>
          </div>
        </section>
        <section aria-label="Treatment room" className="border-t border-rule">
          <Placeholder shot="room-2" className="aspect-[21/9] w-full" sizes="100vw" />
          <p className="stage micro py-5 text-ink-2">One line only: the room where {d.name} lives.</p>
        </section>
        <section aria-labelledby="cta-title" className="border-t border-rule">
          <div className="stage flex flex-col items-center py-28 text-center">
            <h2 id="cta-title" className="font-display text-[10vw] leading-[0.92] md:text-[5vw]">Ask about {d.name}</h2>
            <BookingCTA className="mt-10" />
            <a href={clinic.phoneTel} className="u-draw mt-6 text-[0.875rem] text-ink-2">{clinic.phoneDisplay}</a>
          </div>
        </section>
      </main>
      <Footer wordmark={<CinemaWordmark />} />
      <Cursor />
    </ConceptShell>
  );
}
