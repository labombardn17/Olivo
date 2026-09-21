import Link from "next/link";
import { site } from "@/content/site";
import { ui, type Lang } from "@/content/ui";
import { href } from "@/lib/i18n";
import { faq } from "@/content/featured";
import { faqEs } from "@/content/es/home";
import { Testimonials } from "@/components/site/home/HomeSections";
import { VisitBlock } from "@/components/site/home/HomeSections2";
import { TextComposer } from "@/components/site/TextComposer";
import { BookingWidget } from "@/components/site/BookingWidget";
import { ComingSoon } from "@/components/site/ComingSoon";
import { Crumbs, CtaBand, FaqList } from "@/components/site/Blocks";
import { buildMeta } from "@/lib/meta";
import { Verify } from "@/lib/verify";
import { Phone } from "@/components/functional/Icons";

export const resultsMeta = (lang: Lang) => buildMeta(lang === "es"
  ? { title: "Resultados y política de galería | Olivo Med Spa", description: "Cómo comparte Olivo Med Spa en Logan Square, Chicago, sus resultados de antes y después: autorización escrita, solo tratamiento y sesiones, sin promesas.", path: "/results", lang }
  : { title: "Results and Gallery Policy | Olivo Med Spa", description: "How Olivo Med Spa in Logan Square, Chicago shares before and after results: written patient authorization, treatment and session count only, no promises.", path: "/results", lang });

export function ResultsPage({ lang }: { lang: Lang }) {
  const t = ui(lang); const p = t.pages.results;
  return (
    <>
      <section className="py-12 md:py-20"><div className="container-x mx-auto max-w-3xl">
        <Crumbs lang={lang} items={[{ name: t.blocks.home, href: "/" }, { name: p.crumb }]} />
        <p className="kicker mt-8">{p.kicker}</p><h1 className="section-title mt-3 balance">{p.title}</h1>
        <div className="prose">{p.body.map((x) => <p key={x.slice(0, 20)}>{x}</p>)}</div>
        <div className="mt-10"><ComingSoon kind="gallery" lang={lang} className="img-frame aspect-[4/5] sm:aspect-[16/10] shadow-[var(--shadow-card-hover)]" /><Verify note="Gallery: supply authorized before and after cases with signed releases" /></div>
      </div></section>
      <CtaBand title={p.cta} line={p.ctaLine} lang={lang} />
    </>
  );
}

export const reviewsMeta = (lang: Lang) => buildMeta(lang === "es"
  ? { title: "Reseñas de pacientes | Olivo Med Spa, Logan Square, Chicago", description: "Lo que dicen los pacientes de Olivo Med Spa en Logan Square, Chicago, y dónde leer todas las reseñas en Google.", path: "/reviews", lang }
  : { title: "Patient Reviews | Olivo Med Spa, Logan Square Chicago", description: "What patients say about Olivo Med Spa in Logan Square, Chicago, and where to read every review on Google.", path: "/reviews", lang });

export function ReviewsPage({ lang }: { lang: Lang }) {
  const t = ui(lang); const p = t.pages.reviews;
  return (
    <>
      <section className="pt-12 md:pt-20"><div className="container-x"><Crumbs lang={lang} items={[{ name: t.blocks.home, href: "/" }, { name: p.crumb }]} /><h1 className="section-title mt-8 balance">{p.title}</h1><p className="lede mt-3 max-w-[52ch]">{p.lede1} <a href={site.mapsUrl} target="_blank" rel="noopener noreferrer" className="link-arrow">Google</a>{p.lede2}</p></div></section>
      <Testimonials lang={lang} />
      <CtaBand title={p.cta} lang={lang} />
    </>
  );
}

export const visitMeta = (lang: Lang) => buildMeta(lang === "es"
  ? { title: "Visítenos | 2550 W Fullerton, Logan Square | Olivo Med Spa", description: "Olivo Med Spa está en 2550 W. Fullerton Ave, Chicago, IL 60618, en Logan Square. Horario, estacionamiento, transporte, cómo llegar y cómo reservar.", path: "/visit", lang }
  : { title: "Visit Olivo Med Spa | 2550 W Fullerton Ave, Logan Square", description: "Olivo Med Spa is at 2550 W. Fullerton Ave, Chicago, IL 60618 in Logan Square. Hours, parking, transit, directions, and how to book or text the clinic.", path: "/visit", lang });

export function VisitPage({ lang }: { lang: Lang }) {
  const t = ui(lang); const p = t.pages.visit;
  return (
    <>
      <section className="pt-12 md:pt-20"><div className="container-x"><Crumbs lang={lang} items={[{ name: t.blocks.home, href: "/" }, { name: p.crumb }]} /><h1 className="section-title mt-8">{p.title}</h1></div></section>
      <VisitBlock lang={lang} />
      <FaqList faqs={lang === "es" ? faqEs : faq} lang={lang} />
      <CtaBand lang={lang} />
    </>
  );
}

export const contactMeta = (lang: Lang) => buildMeta(lang === "es"
  ? { title: "Contacto | Escriba, llame o reserve | Olivo Med Spa", description: "Escriba o llame a Olivo Med Spa al 872-315-3481, reserve en línea a través de Vagaro o visítenos en 2550 W. Fullerton Ave en Logan Square, Chicago.", path: "/contact", lang }
  : { title: "Contact Olivo Med Spa | Text, Call, or Book Online", description: "Text or call Olivo Med Spa at 872-315-3481, book online through Vagaro, or visit 2550 W. Fullerton Ave in Logan Square, Chicago.", path: "/contact", lang });

export function ContactPage({ lang }: { lang: Lang }) {
  const t = ui(lang); const p = t.pages.contact;
  return (
    <>
      <section className="py-12 md:py-20"><div className="container-x">
        <Crumbs lang={lang} items={[{ name: t.blocks.home, href: "/" }, { name: p.crumb }]} />
        <h1 className="section-title mt-8 balance">{p.title}</h1>
        <p className="lede mt-3 max-w-[52ch]">{p.lede}</p>
        <div className="mt-10 grid gap-5 md:grid-cols-3">
          <a href={site.sms(p.sms)} className="card lift p-7"><p className="kicker">{p.textNow}</p><p className="font-display mt-2 text-[1.75rem]">{site.phoneDisplay}</p><p className="mt-2 text-[0.9375rem] text-ink-2">{p.textLine}</p><Verify note={site.smsVerify} /></a>
          <a href={site.phoneTel} className="card lift p-7"><p className="kicker">{p.call}</p><p className="font-display mt-2 inline-flex items-center gap-3 text-[1.75rem]"><Phone className="h-5 w-5 text-accent-text" />{site.phoneDisplay}</p><p className="mt-2 text-[0.9375rem] text-ink-2">{p.callLine}</p></a>
          <Link href={href(lang, "/book")} className="card lift p-7 !border-accent"><p className="kicker">{p.bookOnline}</p><p className="font-display mt-2 text-[1.75rem]">{p.bookTitle}</p><p className="mt-2 text-[0.9375rem] text-ink-2">{p.bookLine}</p></Link>
        </div>
        <div className="mx-auto mt-14 max-w-3xl"><TextComposer lang={lang} /></div>
      </div></section>
      <VisitBlock lang={lang} />
      <CtaBand sms={p.sms} lang={lang} />
    </>
  );
}

export const bookMeta = (lang: Lang) => buildMeta(lang === "es"
  ? { title: "Reserve una consulta o tratamiento | Olivo Med Spa, Chicago", description: "Reserve en línea en Olivo Med Spa en Logan Square, Chicago. Elija una consulta o un tratamiento y un horario, o escriba al 872-315-3481 y el equipo lo agenda.", path: "/book", lang }
  : { title: "Book a Consultation or Treatment | Olivo Med Spa, Chicago", description: "Book online at Olivo Med Spa in Logan Square, Chicago. Pick a consultation or treatment and a time, or text 872-315-3481 and the team will book it for you.", path: "/book", lang });

export function BookPage({ lang }: { lang: Lang }) {
  const t = ui(lang); const p = t.pages.book;
  return (
    <section className="py-12 md:py-16"><div className="container-x">
      <Crumbs lang={lang} items={[{ name: t.blocks.home, href: "/" }, { name: p.crumb }]} />
      <div className="mt-8 grid gap-10 lg:grid-cols-[1fr_1.6fr] lg:gap-14">
        <div>
          <p className="kicker">{p.kicker}</p><h1 className="section-title mt-3 balance">{p.title}</h1><p className="lede mt-4">{p.lede}</p>
          <ul className="mt-6 space-y-2 text-[0.9375rem] text-ink-2">{p.facts.map((f) => <li key={f}>{f}</li>)}</ul>
          <div className="mt-8 flex flex-col gap-3"><a href={site.sms(t.textNow.body)} className="btn btn-outline">{p.preferText}</a><a href={site.phoneTel} className="btn btn-outline"><Phone />{p.call} {site.phoneDisplay}</a><a href={site.bookingExternal} target="_blank" rel="noopener noreferrer" className="link-arrow text-[0.875rem]">{p.vagaro}</a></div>
          <p className="mt-6 text-[0.8125rem] text-ink-2">{p.notSure} <Link href={href(lang, "/quiz")} className="link-arrow">{p.quiz}</Link> {p.first}</p>
          <Verify note={site.bookingVerify} />
        </div>
        <BookingWidget lang={lang} />
      </div>
    </div></section>
  );
}
