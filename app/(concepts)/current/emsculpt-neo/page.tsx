import Link from "next/link";
import { ConceptShell } from "@/components/shared/ConceptShell";
import { Footer } from "@/components/shared/Footer";
import { descriptions, pageMetadata } from "@/content/seo";
import { CurrentNav, CurrentWordmark } from "@/components/concepts/current/CurrentNav";
import { CurrentBlock } from "@/components/concepts/current/CurrentBlock";
import { BookingCTA } from "@/components/shared/BookingCTA";
import { Placeholder } from "@/components/shared/Placeholder";
import { SplitReveal } from "@/components/shared/SplitReveal";
import { devices, clinic, downtimeVerify, proof } from "@/content/olivo";
import { Verify } from "@/lib/verify";

export const metadata = pageMetadata(descriptions.emsculptNeo, "Emsculpt Neo | Olivo Med Spa, Logan Square");

/** Interior: one card, blown up to a page. */
export default function Page() {
  const d = devices[0]!;
  return (
    <ConceptShell>
      <CurrentNav />
      <main>
        <section id="top" data-hero="" aria-labelledby="device-title" className="cblock px-[var(--gutter)] pt-28 md:pt-36 pb-16">
          <div className="grid gap-10 md:grid-cols-[58fr_42fr] md:gap-x-[var(--gutter)] items-end">
            <div>
              <p className="cap">01 / 09 · {d.family}</p>
              <SplitReveal as="h1" id="device-title" immediate className="font-display mt-4 text-[16vw] md:text-[9vw] runoff -mr-[10vw] relative z-20">{d.name}</SplitReveal>
              <p className="mt-6 max-w-[34ch] text-[1.25rem] leading-[1.35]">{d.fn}</p>
              <div className="mt-8 flex flex-wrap items-center gap-x-8 gap-y-4">
                <BookingCTA label={`Book ${d.name}`} />
                <Link href="/current#technology" data-cta="text" className="u-draw">All nine</Link>
              </div>
            </div>
            <CurrentBlock device={d} tone="accent" className="w-full md:-mb-32 relative z-10" />
          </div>
        </section>
        <section aria-label="Facts" className="inverse px-[var(--gutter)] pt-20 md:pt-44 pb-16 md:pb-24">
          <dl className="grid grid-cols-2 gap-6 md:grid-cols-4 md:max-w-[58%]">
            {[["Area", d.area], ["Downtime", d.downtime], ["Platform", d.family], ["Where", proof.place]].map(([k, v]) => (
              <div key={k} className="border-t border-rule pt-3"><dt className="cap">{k}</dt><dd className="font-display mt-2 text-[1.6rem] md:text-[2vw]">{v}</dd></div>
            ))}
          </dl>
          <p className="cap mt-6">Candidacy and expectations are set at consultation.<Verify note={downtimeVerify} /></p>
        </section>
        <section aria-label="Detail" className="cblock">
          <Placeholder shot="hands-1" className="aspect-[4/5] md:aspect-[21/9]" sizes="100vw" />
          <p className="cap px-[var(--gutter)] py-4">One image, one line: the session, in the room.</p>
        </section>
        <section aria-labelledby="cta-title" className="inverse px-[var(--gutter)] py-20 md:py-28">
          <SplitReveal as="h2" id="cta-title" className="font-display text-[14vw] md:text-[8vw]">Ask about it.</SplitReveal>
          <div className="mt-8 flex flex-wrap items-center gap-x-10 gap-y-4">
            <BookingCTA />
            <a href={clinic.phoneTel} className="u-draw text-[0.9375rem]">{clinic.phoneDisplay}</a>
          </div>
        </section>
      </main>
      <Footer wordmark={<CurrentWordmark />} />
    </ConceptShell>
  );
}
