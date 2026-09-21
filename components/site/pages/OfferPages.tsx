import Link from "next/link";
import { membershipsVerify } from "@/content/offers";
import { site } from "@/content/site";
import { getService } from "@/content/services";
import { ui, type Lang } from "@/content/ui";
import { href } from "@/lib/i18n";
import { localizeService, offersFor } from "@/lib/localize";
import { Photo } from "@/components/site/Photo";
import { Reveal } from "@/components/shared/Reveal";
import { Stagger } from "@/components/site/Motion";
import { Crumbs, CtaBand, FaqList, Steps } from "@/components/site/Blocks";
import { buildMeta } from "@/lib/meta";
import { Verify } from "@/lib/verify";
import { Check } from "@/components/functional/Icons";

const name = (slug: string, lang: Lang) => { const s = getService(slug); return s ? localizeService(s, lang).name : slug; };

export const membershipsMeta = (lang: Lang) => buildMeta(lang === "es"
  ? { title: "Membresías: Skin Club y Sculpt It | Olivo Med Spa", description: "Skin Club, Emsculpt NEO Club, Sculpt It y el Laser Hair Reduction Club de Olivo Med Spa en Logan Square, Chicago. Créditos mensuales y precios para miembros.", path: "/memberships", lang }
  : { title: "Memberships: Skin Club and Sculpt It | Olivo Med Spa", description: "Skin Club, Emsculpt NEO Club, Sculpt It, and the Laser Hair Reduction Club at Olivo Med Spa in Logan Square, Chicago. Monthly credits and member pricing.", path: "/memberships", lang });

export function MembershipsPage({ lang }: { lang: Lang }) {
  const t = ui(lang); const p = t.pages.memberships; const { membershipTiers, financing } = offersFor(lang); const L = (x: string) => href(lang, x);
  return (
    <>
      <section data-hero="" className="bg-ground-2"><div className="container-x grid items-center gap-10 py-10 lg:grid-cols-2 lg:gap-16 lg:py-20">
        <div><Crumbs lang={lang} items={[{ name: t.blocks.home, href: "/" }, { name: p.crumb }]} /><p className="kicker mt-6">{p.kicker}</p><h1 className="display-xl mt-3 balance">{p.title}</h1><p className="lede mt-5 max-w-[50ch]">{p.lede}</p><div className="mt-8 flex flex-wrap gap-3"><a href={site.memberships} target="_blank" rel="noopener noreferrer" className="btn btn-primary">{p.portal}</a><a href={site.sms(p.sms)} className="btn btn-outline">{p.text}</a></div><Verify note={site.membershipsVerify} /></div>
        <Photo slot="memberships" fallback="light-1" alt={p.crumb} lang={lang} className="img-frame aspect-[4/3] shadow-[var(--shadow-card-hover)]" />
      </div></section>
      <section className="py-20 md:py-28"><div className="container-x">
        <Stagger className="grid gap-6 lg:grid-cols-3">
          {membershipTiers.map((m, i) => (<div key={m.slug} id={m.slug} className={`card flex h-full flex-col p-8 ${i === 1 ? "!border-accent" : ""}`}><p className="kicker">{m.family}</p><h2 className="font-display mt-2 text-[1.9rem] leading-tight">{m.name}</h2><p className="mt-3 text-ink-2">{m.line}</p><p className="mt-5 text-[0.8125rem] font-semibold uppercase tracking-[0.12em] text-ink-2">{p.tiers}</p><p className="mt-1 text-[0.9375rem]">{m.tiers.join(" · ")}</p><ul className="mt-5 flex-1 space-y-2.5 text-[0.9375rem]">{m.perks.map((x) => (<li key={x} className="flex items-start gap-3"><Check className="mt-1 h-4 w-4 shrink-0 text-accent-text" />{x}</li>))}</ul><p className="mt-5 text-[0.875rem] text-ink-2">{p.builtAround}: {m.services.map((s) => name(s, lang)).join(", ")}.</p><a href={site.memberships} target="_blank" rel="noopener noreferrer" className={`btn mt-7 w-full ${i === 1 ? "btn-primary" : "btn-outline"}`}>{p.join}</a></div>))}
        </Stagger>
        <p className="mt-6 text-center text-[0.8125rem] text-ink-2">{p.note}<Verify note={membershipsVerify} /></p>
      </div></section>
      <section className="bg-ground-2 py-20"><div className="container-x grid gap-10 lg:grid-cols-2 lg:gap-16"><Reveal><p className="kicker">{p.finKicker}</p><h2 className="section-title mt-3">{financing.headline}</h2><div className="prose">{financing.lines.map((l) => <p key={l.slice(0, 20)}>{l}</p>)}</div><Verify note={financing.verify} /><div className="mt-6 flex flex-wrap gap-3"><a href={site.financing} target="_blank" rel="noopener noreferrer" className="btn btn-primary">{p.apply}</a><Link href={L("/financing")} className="btn btn-outline">{p.how}</Link></div></Reveal><Reveal delay={0.1}><Photo slot="skincare" fallback="steel-1" alt={p.finKicker} lang={lang} className="img-frame aspect-[4/3]" /></Reveal></div></section>
      <FaqList faqs={financing.faqs} title={p.finAnswered} lang={lang} />
      <CtaBand title={p.cta} sms={p.sms} lang={lang} />
    </>
  );
}

export const financingMeta = (lang: Lang) => buildMeta(lang === "es"
  ? { title: "Financiamiento con Cherry | Olivo Med Spa, Chicago", description: "Pague sus tratamientos a plazos a través de Cherry en Olivo Med Spa en Logan Square, Chicago. Solicítelo en línea en minutos. Cherry define los términos al aplicar.", path: "/financing", lang }
  : { title: "Financing Through Cherry | Olivo Med Spa, Chicago", description: "Pay for treatments over time through Cherry at Olivo Med Spa in Logan Square, Chicago. Apply online in minutes. Terms are set by Cherry at application.", path: "/financing", lang });

export function FinancingPage({ lang }: { lang: Lang }) {
  const t = ui(lang); const p = t.pages.financing; const { financing } = offersFor(lang);
  return (
    <>
      <section className="py-12 md:py-20"><div className="container-x grid gap-12 lg:grid-cols-2 lg:gap-20">
        <div><Crumbs lang={lang} items={[{ name: t.blocks.home, href: "/" }, { name: p.crumb }]} /><p className="kicker mt-8">{p.kicker}</p><h1 className="section-title mt-3 balance">{financing.headline}</h1><div className="prose">{financing.lines.map((l) => <p key={l.slice(0, 20)}>{l}</p>)}</div><Verify note={financing.verify} /><div className="mt-8 flex flex-wrap gap-3"><a href={site.financing} target="_blank" rel="noopener noreferrer" className="btn btn-primary">{t.pages.memberships.apply}</a><a href={site.phoneTel} className="btn btn-outline">{p.callUs} {site.phoneDisplay}</a></div><p className="mt-4 text-[0.8125rem] text-ink-2">{p.disclaimer}</p></div>
        <Reveal delay={0.1} className="card p-8"><Steps lang={lang} title={p.how} steps={p.steps.map(([step, line]) => ({ step, line }))} /></Reveal>
      </div></section>
      <FaqList faqs={financing.faqs} title={p.answered} lang={lang} />
      <CtaBand lang={lang} />
    </>
  );
}

export const specialsMeta = (lang: Lang) => buildMeta(lang === "es"
  ? { title: "Especiales del mes | Olivo Med Spa, Logan Square, Chicago", description: "Especiales mensuales de Olivo Med Spa en Logan Square, Chicago. Las ofertas cambian cada mes y se confirman al reservar. Escriba o llame al 872-315-3481.", path: "/specials", lang }
  : { title: "Specials This Month | Olivo Med Spa, Logan Square Chicago", description: "Current monthly specials at Olivo Med Spa in Logan Square, Chicago. Offers change monthly and are confirmed at booking. Text or call 872-315-3481.", path: "/specials", lang });

export function SpecialsPage({ lang }: { lang: Lang }) {
  const t = ui(lang); const p = t.pages.specials; const { specials, membershipTiers } = offersFor(lang); const L = (x: string) => href(lang, x);
  return (
    <>
      <section data-hero="" className="bg-ground-2"><div className="container-x grid items-center gap-10 py-10 lg:grid-cols-2 lg:gap-16 lg:py-20">
        <div><Crumbs lang={lang} items={[{ name: t.blocks.home, href: "/" }, { name: p.crumb }]} /><p className="kicker mt-6">{p.kicker}</p><h1 className="display-xl mt-3 balance">{p.title}</h1><p className="lede mt-5 max-w-[50ch]">{specials.intro}</p><div className="mt-8 flex flex-wrap gap-3"><a href={site.sms(p.sms)} className="btn btn-primary">{p.text}</a><a href={site.memberships} target="_blank" rel="noopener noreferrer" className="btn btn-outline">{p.portal}</a></div><Verify note={specials.verify} /></div>
        <Photo slot="specials" fallback="light-1" alt={p.crumb} lang={lang} className="img-frame aspect-[4/3] shadow-[var(--shadow-card-hover)]" />
      </div></section>
      <section className="py-20"><div className="container-x">
        <Stagger className="grid gap-6 md:grid-cols-3">{specials.items.map((s) => (<div key={s.name} className="card p-7"><p className="kicker">{p.offer}</p><h2 className="font-display mt-2 text-[1.6rem] leading-tight">{s.name}</h2><p className="mt-3 text-ink-2">{s.line}</p>{"verify" in s && s.verify && <Verify note={s.verify} />}<a href={L(site.booking)} className="btn btn-outline btn-sm mt-6">{p.book}</a></div>))}</Stagger>
        <div className="card-2 mt-10 p-7 md:flex md:items-center md:justify-between"><div><p className="font-semibold">{p.standing}</p><p className="mt-1 text-[0.9375rem] text-ink-2">{p.standingLine(membershipTiers.map((m) => m.name).join(", "))}</p></div><Link href={L("/memberships")} className="btn btn-primary btn-sm mt-4 md:mt-0">{p.seeMem}</Link></div>
      </div></section>
      <CtaBand title={p.cta} sms={p.sms} lang={lang} />
    </>
  );
}

export const skincareMeta = (lang: Lang) => buildMeta(lang === "es"
  ? { title: "Cuidado de la piel: Alastin, ZO, Skinbetter | Olivo Med Spa", description: "Productos dispensados por médica en Olivo Med Spa en Logan Square, Chicago: Alastin, ZO Skin Health y Skinbetter Science, elegidos tras una consulta de piel.", path: "/skincare", lang }
  : { title: "Skincare: Alastin, ZO, Skinbetter | Olivo Med Spa", description: "Physician-dispensed skincare at Olivo Med Spa in Logan Square, Chicago: Alastin, ZO Skin Health, and Skinbetter Science, chosen after a skin consultation.", path: "/skincare", lang });

export function SkincarePage({ lang }: { lang: Lang }) {
  const t = ui(lang); const p = t.pages.skincare; const { skincare } = offersFor(lang);
  return (
    <>
      <section data-hero="" className="bg-ground-2"><div className="container-x grid items-center gap-10 py-10 lg:grid-cols-2 lg:gap-16 lg:py-20">
        <div><Crumbs lang={lang} items={[{ name: t.blocks.home, href: "/" }, { name: p.crumb }]} /><p className="kicker mt-6">{p.kicker}</p><h1 className="display-xl mt-3 balance">{p.title}</h1><p className="lede mt-5 max-w-[50ch]">{skincare.note}</p><div className="mt-8 flex flex-wrap gap-3"><a href={site.sms(p.sms)} className="btn btn-primary">{p.text}</a><a href={href(lang, site.booking)} className="btn btn-outline">{t.nav.book}</a></div><Verify note={skincare.verify} /></div>
        <Photo slot="skincare" fallback="steel-1" alt={p.crumb} lang={lang} className="img-frame aspect-[4/3] shadow-[var(--shadow-card-hover)]" />
      </div></section>
      <section className="py-20"><div className="container-x"><Stagger className="grid gap-6 md:grid-cols-3">{skincare.lines.map((l) => (<div key={l.name} className="card p-7"><h2 className="font-display text-[1.75rem]">{l.name}</h2><p className="mt-3 text-ink-2">{l.line}</p>{"verify" in l && l.verify && <Verify note={l.verify} />}</div>))}</Stagger></div></section>
      <CtaBand title={p.cta} sms={p.sms} lang={lang} />
    </>
  );
}
