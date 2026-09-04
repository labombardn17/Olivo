import { clinic, memberships, sectionCopy, skincareLines, cta } from "@/content/olivo";
import { Verify } from "@/lib/verify";
import { Check } from "./Icons";

/** Two membership cards, financing line, skincare lines. No pricing until the client supplies terms. */
export function Memberships() {
  return (
    <section id="memberships" aria-labelledby="memberships-title" className="bg-ground-2 py-20 md:py-28">
      <div className="container-x">
        <div className="mx-auto max-w-2xl text-center">
          <span className="pill">Memberships</span>
          <h2 id="memberships-title" className="section-title mt-4">{sectionCopy.membershipsHeading}</h2>
          <p className="section-sub mx-auto mt-4">{sectionCopy.membershipsIntro} {clinic.financing.line}<Verify note={memberships.verify} /></p>
        </div>
        <div className="mx-auto mt-12 grid max-w-4xl gap-6 md:grid-cols-2">
          {memberships.tiers.map((t, i) => (
            <div key={t.name} className={`card p-8 ${i === 1 ? "!border-accent" : ""}`}>
              {i === 1 && <span className="pill mb-4">Includes body treatments</span>}
              <h3 className="font-display text-[1.75rem]">{t.name}</h3>
              <p className="mt-1 text-[0.9375rem] text-ink-2">Monthly. Cancel any time.<Verify note="Membership terms: client to supply" /></p>
              <ul className="mt-6 space-y-3 text-[0.9375rem]">
                {t.perks.map((p) => (
                  <li key={p} className="flex items-start gap-3"><Check className="mt-1 h-4 w-4 shrink-0 text-accent-text" />{p}</li>
                ))}
              </ul>
              <a href={clinic.booking} target="_blank" rel="noopener noreferrer" className={`btn mt-8 w-full ${i === 1 ? "btn-primary" : "btn-outline"}`}>Ask about this membership</a>
            </div>
          ))}
        </div>
        <div className="mx-auto mt-10 max-w-4xl card-2 flex flex-col items-start justify-between gap-4 p-6 md:flex-row md:items-center">
          <div>
            <p className="font-semibold">Skincare we carry</p>
            <p className="mt-1 text-[0.9375rem] text-ink-2">{skincareLines.join(", ")}, dispensed by the clinical team.</p>
          </div>
          <a href="#memberships" className="btn btn-outline btn-sm">{cta.shop}</a>
        </div>
      </div>
    </section>
  );
}
