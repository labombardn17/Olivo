import Link from "next/link";
import type { Service } from "@/content/types";
import { categoryByKey, site } from "@/content/site";
import { getService } from "@/content/services";
import { concerns } from "@/content/concerns";
import { ui, type Lang } from "@/content/ui";
import { href } from "@/lib/i18n";
import { localizeCategory, localizeConcern, localizeService } from "@/lib/localize";
import { Photo } from "@/components/site/Photo";
import { Reveal } from "@/components/shared/Reveal";
import { Drift, Stagger } from "@/components/site/Motion";
import { Crumbs, CtaBand, FaqList, LinkCard, Steps, defaultSteps } from "@/components/site/Blocks";
import { JsonLd } from "@/components/site/JsonLd";
import { breadcrumbs, faqSchema, serviceSchema } from "@/lib/schema";
import { Verify } from "@/lib/verify";
import { Arrow, Check, Phone } from "@/components/functional/Icons";

export function ServiceTemplate({ s: raw, lang = "en" }: { s: Service; lang?: Lang }) {
  const t = ui(lang);
  const p = t.pages.service;
  const s = localizeService(raw, lang);
  const cat = localizeCategory(categoryByKey(s.category), lang);
  const related = s.related.map(getService).filter((x): x is Service => Boolean(x)).map((x) => localizeService(x, lang));
  const concernList = concerns.filter((c) => s.concerns.includes(c.slug)).map((c) => localizeConcern(c, lang));
  const sms = p.sms(s.name);
  const L = (x: string) => href(lang, x);
  return (
    <>
      <JsonLd data={[serviceSchema(s), faqSchema(s.faqs), breadcrumbs([{ name: t.blocks.home, path: L("/") }, { name: t.nav.treatments, path: L("/treatments") }, { name: cat.name, path: L(`/treatments/${cat.key}`) }, { name: s.name, path: L(`/treatments/${s.slug}`) }])]} />
      <section data-hero="" aria-labelledby="svc-title" className="bg-ground-2">
        <div className="container-x grid items-center gap-10 py-10 lg:grid-cols-2 lg:gap-16 lg:py-20">
          <div>
            <Crumbs lang={lang} items={[{ name: t.blocks.home, href: "/" }, { name: t.nav.treatments, href: "/treatments" }, { name: cat.name, href: `/treatments/${cat.key}` }, { name: s.name }]} />
            <p className="pill mt-6">{s.brand ? `${s.brand} · ` : ""}{s.tag}</p>
            <h1 id="svc-title" className="display-xl mt-4 balance">{s.name}</h1>
            <p className="lede mt-5 max-w-[50ch]">{s.headline}</p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a href={L(site.booking)} data-cta="primary" className="btn btn-primary">{p.bookThis(s.name)}</a>
              <a href={site.sms(sms)} className="btn btn-outline">{p.textAbout}</a>
            </div>
            <dl className="mt-10 grid grid-cols-2 gap-5 border-t border-rule pt-6 sm:grid-cols-4">
              {[[p.session, s.session.duration], [p.plan, s.session.sessions], [p.downtime, s.session.downtime], [p.where, p.whereValue]].map(([k, v]) => (<div key={k}><dt className="kicker !text-ink-2">{k}</dt><dd className="mt-1 text-[0.9375rem] font-semibold leading-snug">{v}</dd></div>))}
            </dl>
            <p className="mt-3 text-[0.8125rem] text-ink-2">{p.facts}{s.session.verify && <Verify note={s.session.verify} />}</p>
          </div>
          <Drift className="img-frame shadow-[var(--shadow-card-hover)]"><Photo slot={s.image.slot} fallback={s.image.fallback} alt={s.name} lang={lang} className="aspect-[4/5] sm:aspect-[4/3] lg:aspect-[4/5]" /></Drift>
        </div>
      </section>

      <section aria-labelledby="about-title" className="py-20 md:py-24">
        <div className="container-x grid gap-12 lg:grid-cols-[1.4fr_1fr] lg:gap-20">
          <Reveal>
            <p className="kicker">{p.aboutKicker}</p>
            <h2 id="about-title" className="section-title mt-3 balance">{s.summary.split(". ")[0]}.</h2>
            <div className="prose">{s.intro.map((x) => <p key={x.slice(0, 40)}>{x}</p>)}</div>
            <ul className="mt-8 grid gap-3 sm:grid-cols-2">{s.benefits.map((b) => (<li key={b} className="flex items-start gap-3 text-[0.9375rem]"><Check className="mt-1 h-4 w-4 shrink-0 text-accent-text" />{b}</li>))}</ul>
            {concernList.length > 0 && <p className="mt-8 text-[0.9375rem] text-ink-2">{p.oftenChosen}: {concernList.map((c, i) => (<span key={c.slug}>{i > 0 && ", "}<Link href={L(`/concerns/${c.slug}`)} className="link-arrow">{c.name.toLowerCase()}</Link></span>))}.</p>}
            {s.verify?.map((v) => <Verify key={v} note={v} />)}
          </Reveal>
          <Reveal delay={0.1}>
            <div className="card sticky top-28 p-7">
              <p className="kicker">{p.feels}</p>
              <p className="mt-2 leading-relaxed">{s.session.feels}</p>
              <p className="kicker mt-6">{p.notice}</p>
              <p className="mt-2 leading-relaxed">{s.session.results}</p>
              <p className="kicker mt-6">{p.goodFor}</p>
              <ul className="mt-2 space-y-2 text-[0.9375rem]">{s.goodFor.map((g) => (<li key={g} className="flex items-start gap-3"><Check className="mt-1 h-4 w-4 shrink-0 text-accent-text" />{g}</li>))}</ul>
              <a href={L(site.booking)} className="btn btn-primary mt-7 w-full">{t.nav.bookConsult}</a>
              <a href={site.phoneTel} className="btn btn-outline mt-3 w-full"><Phone />{site.phoneDisplay}</a>
              <p className="mt-4 text-center text-[0.8125rem] text-ink-2">{t.blocks.resultsVary}</p>
              <Link href={L("/quiz")} className="mt-5 block rounded-[var(--r-card)] bg-ground-2 p-4 text-[0.875rem] hover:ring-soft"><span className="font-semibold">{p.notSure}</span><br /><span className="text-ink-2">{p.quizLine}</span></Link>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="bg-ground-2 py-20 md:py-24">
        <div className="container-x grid gap-12 md:grid-cols-2 md:gap-16">
          <Reveal><Steps steps={defaultSteps(s.name, lang)} lang={lang} /></Reveal>
          <Reveal delay={0.1}>
            <h2 className="section-title">{p.pairedWith}</h2>
            <Stagger as="ul" className="mt-8 grid gap-4">{related.map((r) => (<li key={r.slug}><LinkCard lang={lang} href={`/treatments/${r.slug}`} title={r.name} line={r.headline} meta={localizeCategory(categoryByKey(r.category), lang).name} /></li>))}</Stagger>
            <Link href={L(`/treatments/${cat.key}`)} className="link-arrow mt-6 text-[0.9375rem]">{p.all(cat.name.toLowerCase())} <Arrow /></Link>
          </Reveal>
        </div>
      </section>
      <FaqList faqs={s.faqs} title={p.answered(s.name)} lang={lang} />
      <CtaBand title={p.askAbout(s.name)} line={p.askLine} sms={sms} lang={lang} />
    </>
  );
}
