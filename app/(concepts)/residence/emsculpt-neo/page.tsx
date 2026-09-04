import { ConceptShell } from "@/components/shared/ConceptShell";
import { Footer } from "@/components/shared/Footer";
import { descriptions, pageMetadata } from "@/content/seo";
import { ResidenceNav, ResidenceWordmark } from "@/components/concepts/residence/ResidenceNav";
import { BookingCTA } from "@/components/shared/BookingCTA";
import { Placeholder } from "@/components/shared/Placeholder";
import { Reveal } from "@/components/shared/Reveal";
import { devices, clinic, downtimeVerify, proof } from "@/content/olivo";
import { Verify } from "@/lib/verify";

export const metadata = pageMetadata(descriptions.emsculptNeo, "Emsculpt Neo | Olivo Med Spa, Logan Square");

/** Interior: the room the device lives in, one hotspot, the facts beneath. */
export default function Page() {
  const d = devices[0]!;
  return (
    <ConceptShell>
      <ResidenceNav />
      <main>
        <section id="top" data-hero="" aria-labelledby="device-title" className="pt-24 md:pt-28">
          <div className="frame room relative overflow-hidden">
            <Placeholder shot="room-1" className="aspect-[4/5] md:aspect-[21/9]" sizes="100vw" priority />
            <div className="hotspot" style={{ left: "38%", top: "58%" }} data-open="true">
              <span className="hotspot-dot" aria-hidden="true">1</span>
              <div className="hotspot-card" role="note">
                <p className="font-display text-[1.35rem] leading-[1.1]">{d.name}</p>
                <p className="eyebrow-r mt-1">{d.family}</p>
              </div>
            </div>
          </div>
          <div className="frame mt-6 border-t-0 md:border-t px-6 py-14 text-center md:px-14 md:py-24">
            <p className="eyebrow-r">Room 1 · The first of nine</p>
            <Reveal as="h1" id="device-title" stagger={0.12} className="font-display mt-4 text-[2.2rem] md:text-[3vw]">
              <span className="block">{d.name}</span>
              <span className="block ital text-[0.72em]">{d.fn}</span>
            </Reveal>
            <dl className="mx-auto mt-10 grid max-w-[36rem] grid-cols-2 gap-y-4 text-[0.875rem] sm:grid-cols-4">
              {[["Area", d.area], ["Downtime", d.downtime], ["Platform", d.family], ["Where", proof.place]].map(([k, v]) => (
                <div key={k}><dt className="eyebrow-r">{k}</dt><dd className="mt-1">{v}</dd></div>
              ))}
            </dl>
            <p className="mt-4 text-[0.8125rem] text-ink-2">Candidacy and expectations are set at consultation.<Verify note={downtimeVerify} /></p>
            <div className="mt-10 flex flex-wrap items-center justify-center gap-x-10 gap-y-4">
              <BookingCTA label={`Book ${d.name}`} />
              <a href="/residence#technology" data-cta="text" className="u-draw">All the rooms</a>
            </div>
          </div>
        </section>
        <section aria-label="Detail" className="gap-section">
          <div className="frame">
            <Placeholder shot="hands-1" className="aspect-[4/5] md:aspect-[21/9]" sizes="100vw" />
            <p className="border-t border-rule px-6 py-5 text-center font-display ital text-[1.25rem] md:px-14">A session, in the room, with the door closed.</p>
          </div>
        </section>
        <section aria-labelledby="cta-title" className="pb-[var(--inset)]">
          <div className="frame px-6 py-16 text-center md:px-14 md:py-24">
            <h2 id="cta-title" className="font-display text-[1.9rem] md:text-[2.6vw]">Ask about {d.name}</h2>
            <BookingCTA className="mt-8" />
            <p className="mt-5 text-[0.8125rem] text-ink-2"><a href={clinic.phoneTel} className="u-draw">{clinic.phoneDisplay}</a></p>
          </div>
        </section>
      </main>
      <Footer wordmark={<ResidenceWordmark className="!items-start" />} className="mx-[var(--inset)] mb-[var(--inset)]" />
    </ConceptShell>
  );
}
