import { clinic, cta, sectionCopy } from "@/content/olivo";
import { Verify } from "@/lib/verify";
import { Phone } from "./Icons";

/** Final CTA band: one headline, Book, Call. */
export function FinalCta({ title = "Ready when you are." }: { title?: string }) {
  return (
    <section aria-labelledby="final-title" className="inverse py-20 md:py-28">
      <div className="container-x mx-auto max-w-3xl text-center">
        <span className="pill">Book a consultation</span>
        <h2 id="final-title" className="section-title mt-4">{title}</h2>
        <p className="section-sub mx-auto mt-4">{sectionCopy.finalCta} Online any time, or call during clinic hours.<Verify note={sectionCopy.finalCtaVerify} /></p>
        <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
          <a href={clinic.booking} target="_blank" rel="noopener noreferrer" data-cta="primary" className="btn btn-primary">{cta.primary}</a>
          <a href={clinic.phoneTel} className="btn btn-outline"><Phone />{clinic.phoneDisplay}</a>
        </div>
      </div>
    </section>
  );
}
