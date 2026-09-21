import Link from "next/link";
import type { ReactNode } from "react";
import { site } from "@/content/site";
import type { Faq } from "@/content/types";
import { ui, type Lang } from "@/content/ui";
import { href } from "@/lib/i18n";
import { Verify } from "@/lib/verify";
import { Arrow, Phone } from "@/components/functional/Icons";
import { Reveal } from "@/components/shared/Reveal";
import { Magnetic } from "@/components/site/Motion";

export function Crumbs({ items, lang = "en" }: { items: { name: string; href?: string }[]; lang?: Lang }) {
  return (
    <nav aria-label="Breadcrumb" className="text-[0.8125rem] text-ink-2">
      <ol className="flex flex-wrap items-center gap-1.5">
        {items.map((it, i) => (
          <li key={i} className="inline-flex items-center gap-1.5">
            {it.href ? <Link href={href(lang, it.href)} className="hover:underline underline-offset-4">{it.name}</Link> : <span aria-current="page" className="text-ink">{it.name}</span>}
            {i < items.length - 1 && <span aria-hidden="true">/</span>}
          </li>
        ))}
      </ol>
    </nav>
  );
}

export function SectionHead({ kicker, title, sub, center = true, id }: { kicker?: string; title: ReactNode; sub?: ReactNode; center?: boolean; id?: string }) {
  return (
    <Reveal className={`${center ? "mx-auto max-w-2xl text-center" : "max-w-2xl"}`}>
      {kicker && <p className="kicker">{kicker}</p>}
      <h2 id={id} className="section-title mt-3 balance">{title}</h2>
      {sub && <p className={`section-sub mt-4 ${center ? "mx-auto" : ""}`}>{sub}</p>}
    </Reveal>
  );
}

export function FaqList({ faqs, title, id = "faq", lang = "en" }: { faqs: Faq[]; title?: string; id?: string; lang?: Lang }) {
  if (!faqs.length) return null;
  const t = ui(lang);
  return (
    <section aria-labelledby={`${id}-title`} className="py-20 md:py-24">
      <div className="container-x mx-auto max-w-3xl">
        <h2 id={`${id}-title`} className="section-title text-center">{title ?? t.blocks.goodToKnow}</h2>
        <div className="mt-10 divide-y divide-rule border-y border-rule">
          {faqs.map((f) => (
            <details key={f.q} className="faq py-4">
              <summary className="flex items-center justify-between gap-4 text-[1.0625rem] font-semibold">{f.q}<span className="faq-plus text-[1.5rem] font-light leading-none text-accent-text" aria-hidden="true">+</span></summary>
              <p className="mt-3 max-w-[62ch] leading-relaxed text-ink-2">{f.a}{f.verify && <Verify note={f.verify} />}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}

export function CtaBand({ title, line, sms, lang = "en" }: { title?: string; line?: string; sms?: string; lang?: Lang }) {
  const t = ui(lang);
  return (
    <section aria-labelledby="cta-title" className="inverse py-20 md:py-28">
      <div className="container-x">
        <Reveal className="mx-auto max-w-3xl text-center">
          <h2 id="cta-title" className="section-title balance">{title ?? t.blocks.ready}</h2>
          <p className="section-sub mx-auto mt-4">{line ?? t.blocks.readyLine}</p>
          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <Magnetic><a href={href(lang, site.booking)} data-cta="primary" className="btn btn-primary">{t.nav.bookConsult}</a></Magnetic>
            <a href={site.sms(sms ?? t.textNow.body)} className="btn btn-outline">{t.nav.textUs}</a>
            <a href={site.phoneTel} className="btn btn-outline"><Phone />{site.phoneDisplay}</a>
          </div>
          <p className="mt-5 text-[0.875rem] text-ink-2">{t.blocks.financingNote}<Verify note={site.financingVerify} /></p>
        </Reveal>
      </div>
    </section>
  );
}

export function Steps({ steps, title, lang = "en" }: { steps: { step: string; line: string }[]; title?: string; lang?: Lang }) {
  return (
    <div>
      <h2 className="section-title">{title ?? ui(lang).blocks.whatToExpect}</h2>
      <ol className="mt-8 space-y-5">
        {steps.map((s, i) => (
          <li key={s.step} className="flex gap-4"><span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-accent-fill font-display text-[1.1rem] text-accent-ink">{i + 1}</span><div><p className="font-semibold">{s.step}</p><p className="text-[0.9375rem] leading-relaxed text-ink-2">{s.line}</p></div></li>
        ))}
      </ol>
    </div>
  );
}

export function LinkCard({ href: to, title, line, meta, className = "", lang = "en" }: { href: string; title: string; line: string; meta?: string; className?: string; lang?: Lang }) {
  return (
    <Link href={href(lang, to)} className={`card card-link lift group flex h-full flex-col p-6 ${className}`}>
      {meta && <p className="kicker">{meta}</p>}
      <h3 className="font-display mt-2 text-[1.5rem] leading-tight">{title}</h3>
      <p className="mt-2 flex-1 text-[0.9375rem] leading-relaxed text-ink-2">{line}</p>
      <span className="link-arrow mt-4 text-[0.875rem]">{ui(lang).blocks.learnMore} <Arrow /></span>
    </Link>
  );
}

/** Default first-visit steps for a treatment page. */
export function defaultSteps(name: string, lang: Lang) {
  const t = ui(lang).blocks;
  return [{ step: t.consult, line: t.consultLine }, { step: t.treatment, line: t.treatmentLine(name) }, { step: t.aftercare, line: t.aftercareLine }, { step: t.followUp, line: t.followUpLine }];
}
