import { clinic, faq, sectionCopy } from "@/content/olivo";
import { MapPlaceholder } from "@/components/shared/MapPlaceholder";
import { InstagramTiles } from "@/components/shared/InstagramTiles";
import { Verify } from "@/lib/verify";
import { Phone, Pin } from "./Icons";

/** Visit: map, address, hours, phone, parking, directions, and the Instagram block. */
export function Visit() {
  const maps = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(`${clinic.address.line1}, ${clinic.address.city}, ${clinic.address.state} ${clinic.address.zip}`)}`;
  return (
    <section id="visit" aria-labelledby="visit-title" className="bg-ground-2 py-20 md:py-28">
      <div className="container-x grid gap-10 md:grid-cols-2 md:gap-16">
        <MapPlaceholder className="img-frame aspect-[4/3] shadow-[var(--shadow-card)]" />
        <div>
          <span className="pill">{clinic.address.neighborhood}</span>
          <h2 id="visit-title" className="section-title mt-4">{sectionCopy.visitHeading}</h2>
          <address className="mt-6 not-italic text-[1.0625rem] leading-relaxed">
            <p className="flex items-start gap-3"><Pin className="mt-1.5 h-4 w-4 shrink-0 text-accent-text" /><span>{clinic.address.line1}<br />{clinic.address.city}, {clinic.address.state} {clinic.address.zip}</span></p>
            <p className="mt-3 flex items-center gap-3"><Phone className="h-4 w-4 shrink-0 text-accent-text" /><a href={clinic.phoneTel} className="font-semibold hover:underline underline-offset-4">{clinic.phoneDisplay}</a></p>
          </address>
          <dl className="mt-6 grid gap-x-8 gap-y-3 text-[0.9375rem] sm:grid-cols-2">
            <div><dt className="font-semibold">Hours</dt><dd className="text-ink-2">{clinic.hours.placeholder}<Verify note={clinic.hours.verify} /></dd></div>
            <div><dt className="font-semibold">Parking and transit</dt><dd className="text-ink-2">{clinic.transit.line}<Verify note={clinic.transit.verify} /></dd></div>
          </dl>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href={maps} target="_blank" rel="noopener noreferrer" className="btn btn-outline btn-sm">Get directions</a>
            <a href={clinic.booking} target="_blank" rel="noopener noreferrer" className="btn btn-primary btn-sm">Book a visit</a>
          </div>
          <div id="follow" className="mt-10 max-w-sm"><InstagramTiles count={4} /></div>
        </div>
      </div>
    </section>
  );
}

/** Compact FAQ accordion, collapsed by default. Native details for accessibility. */
export function Faq() {
  return (
    <section aria-labelledby="faq-title" className="py-20 md:py-24">
      <div className="container-x mx-auto max-w-3xl">
        <h2 id="faq-title" className="section-title text-center">{sectionCopy.faqHeading}</h2>
        <div className="mt-10 divide-y divide-rule border-y border-rule">
          {faq.map((f) => (
            <details key={f.q} className="faq group py-4">
              <summary className="flex items-center justify-between gap-4 text-[1.0625rem] font-semibold">
                {f.q}
                <span className="faq-plus text-[1.5rem] font-light leading-none text-accent-text" aria-hidden="true">+</span>
              </summary>
              <p className="mt-3 max-w-[60ch] leading-relaxed text-ink-2">{f.a}{f.verify && <Verify note={f.verify} />}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
