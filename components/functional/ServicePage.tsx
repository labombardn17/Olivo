import type { ReactNode } from "react";
import Link from "next/link";
import type { ConceptKey } from "@/content/copy";
import { ConceptShell } from "@/components/shared/ConceptShell";
import { Placeholder } from "@/components/shared/Placeholder";
import { clinic, devices, downtimeVerify, faq, proof, cta } from "@/content/olivo";
import { Verify } from "@/lib/verify";
import { SiteHeader } from "./SiteHeader";
import { FinalCta } from "./FinalCta";
import { FloatingCta } from "./FloatingCta";
import { SiteFooter } from "./SiteFooter";
import { Check, Phone } from "./Icons";

/** Interior page for one device, functional: hero with facts, what it does, what to expect, related devices, FAQ, book. */
export function ServicePage({ concept, wordmark }: { concept: ConceptKey; wordmark: ReactNode }) {
  const d = devices[0]!;
  const related = devices.filter((x) => x.slug !== d.slug && (x.area === d.area || x.family === d.family)).slice(0, 3);
  return (
    <ConceptShell>
      <SiteHeader wordmark={wordmark} />
      <main>
        <section id="top" data-hero="" aria-labelledby="device-title" className="bg-ground-2">
          <div className="container-x grid items-center gap-10 py-12 lg:grid-cols-2 lg:gap-16 lg:py-20">
            <div>
              <p className="text-[0.8125rem] text-ink-2"><Link href={`/${concept}`} className="hover:underline underline-offset-4">Home</Link> <span aria-hidden="true">/</span> <Link href={`/${concept}#technology`} className="hover:underline underline-offset-4">Technology</Link> <span aria-hidden="true">/</span> {d.name}</p>
              <span className="pill mt-5">{d.family} · {d.area}</span>
              <h1 id="device-title" className="font-display mt-4 text-[2.75rem] leading-[1.05] sm:text-[3.5rem]">{d.name}</h1>
              <p className="mt-5 max-w-[46ch] text-[1.125rem] leading-relaxed text-ink-2">{d.fn}</p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <a href={clinic.booking} target="_blank" rel="noopener noreferrer" className="btn btn-primary">Book {d.name}</a>
                <a href={clinic.phoneTel} className="btn btn-outline"><Phone />{clinic.phoneDisplay}</a>
              </div>
              <dl className="mt-10 grid grid-cols-2 gap-4 border-t border-rule pt-6 sm:grid-cols-4">
                {[["Area", d.area], ["Downtime", d.downtime], ["Platform", d.family], ["Where", proof.place]].map(([k, v]) => (
                  <div key={k}><dt className="text-[0.75rem] font-semibold uppercase tracking-[0.12em] text-ink-2">{k}</dt><dd className="mt-1 font-semibold">{v}</dd></div>
                ))}
              </dl>
              <p className="mt-3 text-[0.8125rem] text-ink-2">Downtime is a qualitative guide; candidacy and expectations are set at consultation.<Verify note={downtimeVerify} /></p>
            </div>
            <Placeholder shot="room-1" className="img-frame aspect-[4/5] sm:aspect-[4/3] shadow-[var(--shadow-card-hover)]" sizes="(min-width: 64rem) 50vw, 100vw" priority />
          </div>
        </section>
        <section aria-labelledby="how-title" className="py-20 md:py-24">
          <div className="container-x grid gap-10 md:grid-cols-2 md:gap-16">
            <div>
              <h2 id="how-title" className="section-title">What to expect</h2>
              <ol className="mt-8 space-y-5">
                {[["Consultation", "A conversation with the clinical team, candidacy check, and a written plan."], ["Treatment", `A session on ${d.name} in the clinic, on the schedule the plan sets.`], ["Aftercare", "Plain-language instructions and a number to call."], ["Follow-up", "A check on the result and what, if anything, comes next."]].map(([t, l], i) => (
                  <li key={t} className="flex gap-4"><span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-accent-fill text-[0.8125rem] font-semibold text-accent-ink">{i + 1}</span><div><p className="font-semibold">{t}</p><p className="text-[0.9375rem] text-ink-2">{l}</p></div></li>
                ))}
              </ol>
              <p className="mt-4 text-[0.8125rem] text-ink-2"><Verify note="Process steps describe a typical visit; clinic to confirm" />Individual results vary.</p>
            </div>
            <div className="card p-8">
              <h2 className="font-display text-[1.5rem]">Good candidates</h2>
              <ul className="mt-5 space-y-3 text-[0.9375rem]">
                {["Adults looking for a non-surgical option", "People who can commit to the session schedule in the plan", "Anyone cleared at consultation"].map((x) => <li key={x} className="flex items-start gap-3"><Check className="mt-1 h-4 w-4 shrink-0 text-accent-text" />{x}</li>)}
              </ul>
              <p className="mt-4 text-[0.8125rem] text-ink-2">Candidacy is decided at consultation.<Verify note="Candidacy language: clinic and counsel to confirm" /></p>
              <a href={clinic.booking} target="_blank" rel="noopener noreferrer" className="btn btn-primary mt-8 w-full">{cta.primary}</a>
            </div>
          </div>
        </section>
        <section aria-labelledby="related-title" className="bg-ground-2 py-20 md:py-24">
          <div className="container-x">
            <h2 id="related-title" className="section-title">Often paired with</h2>
            <ul className="mt-8 grid gap-6 sm:grid-cols-3">
              {related.map((x) => (
                <li key={x.slug} className="card p-6"><h3 className="font-display text-[1.35rem]">{x.name}</h3><p className="mt-2 text-[0.9rem] text-ink-2">{x.fn}</p><Link href={`/${concept}#technology`} className="link-arrow mt-4 text-[0.875rem]">All technology</Link></li>
              ))}
            </ul>
          </div>
        </section>
        <section aria-labelledby="faq2-title" className="py-20 md:py-24">
          <div className="container-x mx-auto max-w-3xl">
            <h2 id="faq2-title" className="section-title text-center">Questions</h2>
            <div className="mt-10 divide-y divide-rule border-y border-rule">
              {faq.slice(0, 3).map((f) => (
                <details key={f.q} className="faq py-4"><summary className="flex items-center justify-between gap-4 text-[1.0625rem] font-semibold">{f.q}<span className="faq-plus text-[1.5rem] font-light text-accent-text" aria-hidden="true">+</span></summary><p className="mt-3 max-w-[60ch] leading-relaxed text-ink-2">{f.a}{f.verify && <Verify note={f.verify} />}</p></details>
              ))}
            </div>
          </div>
        </section>
        <FinalCta title={`Ask about ${d.name}`} />
      </main>
      <SiteFooter wordmark={wordmark} />
      <FloatingCta />
    </ConceptShell>
  );
}
