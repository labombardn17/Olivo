import Link from "next/link";
import { categoryByKey, categories, site } from "@/content/site";
import { services, servicesIn } from "@/content/services";
import { concerns } from "@/content/concerns";
import { areas } from "@/content/areas";
import { posts } from "@/content/blog";
import { teamMembers } from "@/content/team";
import { ui, type Lang } from "@/content/ui";
import { href } from "@/lib/i18n";
import { localizeArea, localizeCategory, localizeConcern, localizeMember, localizePost, localizeService, patientsFor } from "@/lib/localize";
import Quiz from "@/components/quiz/Quiz";
import { Photo } from "@/components/site/Photo";
import { Reveal } from "@/components/shared/Reveal";
import { Stagger } from "@/components/site/Motion";
import { Crumbs, CtaBand, FaqList, Steps } from "@/components/site/Blocks";
import { JsonLd } from "@/components/site/JsonLd";
import { breadcrumbs, faqSchema } from "@/lib/schema";
import { buildMeta } from "@/lib/meta";
import { Verify } from "@/lib/verify";
import { Check } from "@/components/functional/Icons";

export const quizMeta = (lang: Lang) => buildMeta(lang === "es"
  ? { title: "Cuestionario: encuentre su tratamiento | Olivo Med Spa", description: "Responda cinco preguntas y reciba hasta tres tratamientos para leer, luego envíe sus resultados por texto a Olivo Med Spa en Logan Square, Chicago con un toque.", path: "/quiz", lang }
  : { title: "Treatment Quiz: Find Your Treatment | Olivo Med Spa", description: "Answer five questions and get up to three treatments to read about, then text your results to Olivo Med Spa in Logan Square, Chicago with one tap.", path: "/quiz", lang });

export function QuizPage({ lang }: { lang: Lang }) {
  const t = ui(lang); const p = t.pages.quiz;
  return (
    <section className="py-12 md:py-20"><div className="container-x mx-auto max-w-3xl">
      <Crumbs lang={lang} items={[{ name: t.blocks.home, href: "/" }, { name: p.crumb }]} />
      <p className="kicker mt-8">{p.kicker}</p><h1 className="section-title mt-3 balance">{p.title}</h1><p className="lede mt-4 max-w-[52ch]">{p.lede}</p>
      <div className="card mt-10 p-6 md:p-10"><Quiz lang={lang} /></div>
    </div></section>
  );
}

export const patientsMeta = (lang: Lang) => buildMeta(lang === "es"
  ? { title: "Para pacientes: primera visita y cuidados | Olivo Med Spa", description: "Qué esperar en su primera visita a Olivo Med Spa en Logan Square, Chicago, qué traer, políticas de la clínica y cuidados posteriores para cada categoría de tratamiento.", path: "/for-patients", lang }
  : { title: "For Patients: First Visit and Aftercare | Olivo Med Spa", description: "What to expect at your first visit to Olivo Med Spa in Logan Square, Chicago, what to bring, clinic policies, and aftercare for every treatment category.", path: "/for-patients", lang });

export function ForPatientsPage({ lang }: { lang: Lang }) {
  const t = ui(lang); const p = t.pages.patients; const { forPatients } = patientsFor(lang); const L = (x: string) => href(lang, x);
  const { intro, firstVisit, firstVisitVerify, bring, policies, aftercare, aftercareNote, faqs } = forPatients;
  return (
    <>
      <JsonLd data={[faqSchema(faqs), breadcrumbs([{ name: t.blocks.home, path: L("/") }, { name: p.crumb, path: L("/for-patients") }])]} />
      <section data-hero="" className="bg-ground-2"><div className="container-x grid items-center gap-10 py-10 lg:grid-cols-2 lg:gap-16 lg:py-20">
        <div><Crumbs lang={lang} items={[{ name: t.blocks.home, href: "/" }, { name: p.crumb }]} /><p className="kicker mt-6">{p.kicker}</p><h1 className="display-xl mt-3 balance">{p.title}</h1><p className="lede mt-5 max-w-[50ch]">{intro}</p><div className="mt-8 flex flex-wrap gap-3"><a href={L(site.booking)} className="btn btn-primary">{t.nav.bookConsult}</a><a href="#aftercare" className="btn btn-outline">{p.aftercare}</a></div></div>
        <Photo slot="visit" fallback="room-3" alt="Olivo Med Spa" lang={lang} className="img-frame aspect-[4/3] shadow-[var(--shadow-card-hover)]" />
      </div></section>
      <section className="py-20 md:py-24"><div className="container-x grid gap-12 lg:grid-cols-2 lg:gap-20">
        <Reveal><Steps lang={lang} title={p.howTitle} steps={firstVisit} /><p className="mt-4 text-[0.8125rem] text-ink-2"><Verify note={firstVisitVerify} />{p.plansVary}</p></Reveal>
        <Reveal delay={0.1}><h2 className="section-title">{p.bring}</h2><ul className="mt-8 space-y-3">{bring.map((b) => (<li key={b} className="flex items-start gap-3"><Check className="mt-1 h-4 w-4 shrink-0 text-accent-text" />{b}</li>))}</ul><div className="card-2 mt-8 p-6"><p className="font-semibold">{p.late}</p><p className="mt-1 text-[0.9375rem] text-ink-2">{p.lateLine(site.phoneDisplay)}</p></div></Reveal>
      </div></section>
      <section className="bg-ground-2 py-20 md:py-24"><div className="container-x"><Reveal className="max-w-2xl"><p className="kicker">{p.policiesKicker}</p><h2 className="section-title mt-3">{p.policiesTitle}</h2></Reveal>
        <Stagger className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">{policies.map((x) => (<div key={x.title} className="card p-6"><h3 className="font-display text-[1.4rem] leading-tight">{x.title}</h3><ul className="mt-3 space-y-2 text-[0.9375rem] text-ink-2">{x.lines.map((l) => <li key={l}>{l}</li>)}</ul><Verify note={x.verify} /></div>))}</Stagger>
      </div></section>
      <section id="aftercare" className="py-20 md:py-24"><div className="container-x"><Reveal className="max-w-2xl"><p className="kicker">{p.aftercareKicker}</p><h2 className="section-title mt-3">{p.aftercareTitle}</h2><p className="section-sub mt-4">{aftercareNote}</p></Reveal>
        <Stagger className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">{aftercare.map((a) => (<div key={a.category} className="card flex h-full flex-col p-6"><p className="kicker">{localizeCategory(categoryByKey(a.category), lang).name}</p><h3 className="font-display mt-2 text-[1.35rem] leading-tight">{a.title}</h3><ul className="mt-3 flex-1 space-y-2 text-[0.9375rem] text-ink-2">{a.lines.map((l) => <li key={l} className="flex gap-3"><span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />{l}</li>)}</ul><Verify note={a.verify} /><Link href={L(`/treatments/${a.category}`)} className="link-arrow mt-4 text-[0.875rem]">{p.inCategory}</Link></div>))}</Stagger>
      </div></section>
      <FaqList faqs={faqs} title={p.faqTitle} lang={lang} />
      <CtaBand title={p.cta} line={p.ctaLine} sms={p.sms} lang={lang} />
    </>
  );
}

export const giftMeta = (lang: Lang) => buildMeta(lang === "es"
  ? { title: "Tarjetas de regalo | Olivo Med Spa, Logan Square, Chicago", description: "Regale un tratamiento o productos de cuidado de la piel en Olivo Med Spa en Logan Square, Chicago. Tarjetas disponibles en la clínica y en línea para cualquier tratamiento.", path: "/gift-cards", lang }
  : { title: "Gift Cards | Olivo Med Spa, Logan Square Chicago", description: "Give a treatment or skincare at Olivo Med Spa in Logan Square, Chicago. Gift cards are available in the clinic and online for any treatment or product.", path: "/gift-cards", lang });

export function GiftCardsPage({ lang }: { lang: Lang }) {
  const t = ui(lang); const p = t.pages.gift; const { giftCards } = patientsFor(lang); const L = (x: string) => href(lang, x);
  return (
    <>
      <section data-hero="" className="bg-ground-2"><div className="container-x grid items-center gap-10 py-10 lg:grid-cols-2 lg:gap-16 lg:py-20">
        <div><Crumbs lang={lang} items={[{ name: t.blocks.home, href: "/" }, { name: p.crumb }]} /><p className="kicker mt-6">{p.kicker}</p><h1 className="display-xl mt-3 balance">{p.title}</h1><p className="lede mt-5 max-w-[50ch]">{giftCards.intro}</p><div className="mt-8 flex flex-wrap gap-3"><a href={L(site.booking)} className="btn btn-primary">{p.buy}</a><a href={site.sms(p.sms)} className="btn btn-outline">{p.text}</a></div><Verify note={giftCards.verify} /></div>
        <Photo slot="skincare" fallback="light-1" alt={p.crumb} lang={lang} className="img-frame aspect-[4/3] shadow-[var(--shadow-card-hover)]" />
      </div></section>
      <section className="py-20 md:py-24"><div className="container-x grid gap-12 lg:grid-cols-2 lg:gap-20">
        <Reveal><Steps lang={lang} title={p.how} steps={giftCards.how} /></Reveal>
        <Reveal delay={0.1}><h2 className="section-title">{p.know}</h2><ul className="mt-8 space-y-3 text-[1.0625rem] text-ink-2">{giftCards.notes.map((n) => <li key={n} className="flex gap-3"><span className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />{n}</li>)}</ul><p className="mt-8 text-[0.9375rem] text-ink-2">{p.notSure} <Link href={L("/quiz")} className="link-arrow">{p.quiz}</Link> {p.or} <Link href={L("/treatments")} className="link-arrow">{p.page}</Link>.</p></Reveal>
      </div></section>
      <CtaBand title={p.cta} sms={p.sms} lang={lang} />
    </>
  );
}

export const siteMapMeta = (lang: Lang) => buildMeta(lang === "es"
  ? { title: "Mapa del sitio | Olivo Med Spa", description: "Todas las páginas del sitio de Olivo Med Spa: tratamientos por categoría, inquietudes, vecindarios, equipo, membresías, diario y recursos para pacientes.", path: "/site-map", lang }
  : { title: "Site Map | Olivo Med Spa", description: "Every page on the Olivo Med Spa site: treatments by category, concerns, neighborhoods served, team, memberships, journal, and patient resources.", path: "/site-map", lang });

const Col = ({ title, items, lang }: { title: string; items: [string, string][]; lang: Lang }) => (
  <div><h2 className="font-display text-[1.5rem]">{title}</h2><ul className="mt-3 space-y-1.5 text-[0.9375rem]">{items.map(([h, l]) => <li key={h}><Link href={href(lang, h)} className="hover:underline underline-offset-4">{l}</Link></li>)}</ul></div>
);

export function SiteMapPage({ lang }: { lang: Lang }) {
  const t = ui(lang); const p = t.pages.siteMap;
  const clinic: [string, string][] = [["/", t.blocks.home], ["/quiz", t.nav.quiz], ["/book", t.footer.bookOnline], ...t.footer.links, ["/contact", t.pages.contact.crumb], ...teamMembers.map((m) => [`/team/${m.slug}`, m.name] as [string, string]), ["/privacy", t.footer.privacy], ["/terms", t.footer.terms], ["/accessibility", t.footer.accessibility]];
  return (
    <section className="py-12 md:py-20"><div className="container-x">
      <Crumbs lang={lang} items={[{ name: t.blocks.home, href: "/" }, { name: p.crumb }]} />
      <h1 className="section-title mt-8">{p.title}</h1>
      <p className="lede mt-3">{p.lede(services.length, concerns.length, areas.length, posts.length)}</p>
      <div className="mt-12 grid gap-10 md:grid-cols-2 lg:grid-cols-4">
        <Col lang={lang} title={p.clinic} items={clinic} />
        <div className="space-y-8">{categories.map((raw) => { const c = localizeCategory(raw, lang); return <Col key={c.key} lang={lang} title={c.name} items={[[`/treatments/${c.key}`, p.all(c.name.toLowerCase())], ...servicesIn(c.key).map((s) => [`/treatments/${s.slug}`, localizeService(s, lang).name] as [string, string])]} />; })}</div>
        <div className="space-y-8"><Col lang={lang} title={p.concerns} items={[["/concerns", p.allConcerns], ...concerns.map((c) => [`/concerns/${c.slug}`, localizeConcern(c, lang).name] as [string, string])]} /><Col lang={lang} title={p.neighborhoods} items={areas.map((a) => [`/med-spa/${a.slug}`, localizeArea(a, lang).name] as [string, string])} /></div>
        <Col lang={lang} title={p.journal} items={[["/blog", p.allPosts], ...[...posts].sort((a, b) => b.date.localeCompare(a.date)).map((x) => [`/blog/${x.slug}`, localizePost(x, lang).title] as [string, string])]} />
      </div>
      <span hidden>{localizeMember(teamMembers[0]!, lang).name}</span>
    </div></section>
  );
}
