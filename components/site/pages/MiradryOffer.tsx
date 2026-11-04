import Link from "next/link";
import { site } from "@/content/site";
import { miradryPrice } from "@/content/specials";
import type { Lang } from "@/content/ui";
import { href } from "@/lib/i18n";
import { buildMeta } from "@/lib/meta";
import { Photo } from "@/components/site/Photo";
import { CtaBand } from "@/components/site/Blocks";
import { Arrow, Check } from "@/components/functional/Icons";

// Landing page for the Meta miraDry ads. It repeats the ads' words and shows
// only the one treatment price from the running campaign, so the page always
// matches the ad that sent the visitor here.
const copy = {
  en: {
    kicker: "Olivo Med Spa, Logan Square",
    title: "Sweater season is miraDry season.",
    lede: "Treat it now. Be ready for summer.",
    points: ["Reduces underarm sweat", "Reduces odor", "Non-surgical, lasting results"],
    one: "One treatment",
    visits: "Most people need one or two visits.",
    book: "Book a consultation",
    text: "Text the clinic",
    caption: "Dr. Jacqueline Olivo, founder and medical director",
    ledTitle: "Physician-led miraDry in Logan Square.",
    led: "Dr. Olivo has led the clinic since 2013. miraDry reduces underarm sweat and odor, usually in one or two visits.",
    consult: "Candidacy and expectations are set at your consultation. Individual results vary.",
    how: "How miraDry works",
    visit: "Directions to the clinic",
    sms: "Hi, I saw the miraDry offer and would like to book a consultation.",
    cta: "Ready to be done with underarm sweat?",
  },
  es: {
    kicker: "Olivo Med Spa, Logan Square",
    title: "La temporada de suéteres es temporada de miraDry.",
    lede: "Trátelo ahora. Esté listo para el verano.",
    points: ["Reduce el sudor de las axilas", "Reduce el olor", "No quirúrgico y duradero"],
    one: "Un tratamiento",
    visits: "La mayoría necesita una o dos visitas.",
    book: "Reserve su consulta",
    text: "Envíe un mensaje",
    caption: "Dra. Jacqueline Olivo, fundadora y directora médica",
    ledTitle: "miraDry dirigido por una médica en Logan Square.",
    led: "La Dra. Olivo dirige la clínica desde 2013. miraDry reduce el sudor y el olor de las axilas, normalmente en una o dos visitas.",
    consult: "La candidatura y las expectativas se definen en su consulta. Los resultados individuales varían.",
    how: "Cómo funciona miraDry",
    visit: "Cómo llegar a la clínica",
    sms: "Hola, vi la oferta de miraDry y quisiera reservar una consulta.",
    cta: "¿Listo para dejar atrás el sudor de las axilas?",
  },
};

/** Ad traffic only: kept out of search so it never competes with the miraDry treatment page. */
export const miradryOfferMeta = (lang: Lang) => ({
  ...buildMeta(lang === "es"
    ? { title: "miraDry en Logan Square | Olivo Med Spa", description: "miraDry dirigido por la Dra. Jacqueline Olivo en Logan Square, Chicago. Reduce el sudor y el olor de las axilas, normalmente en una o dos visitas.", path: "/offers/miradry", lang }
    : { title: "miraDry in Logan Square | Olivo Med Spa", description: "Physician-led miraDry with Dr. Jacqueline Olivo in Logan Square, Chicago. Reduces underarm sweat and odor, usually in one or two visits.", path: "/offers/miradry", lang }),
  robots: { index: false, follow: true },
});

export function MiradryOfferPage({ lang }: { lang: Lang }) {
  const c = copy[lang];
  const price = miradryPrice();
  return (
    <>
      <section data-hero="" className="bg-ground-2"><div className="container-x grid items-center gap-10 py-10 lg:grid-cols-2 lg:gap-16 lg:py-20">
        <div>
          <p className="kicker">{c.kicker}</p>
          <h1 className="display-xl mt-3 balance">{c.title}</h1>
          <p className="lede mt-5 max-w-[50ch]">{c.lede}</p>
          <ul className="mt-6 space-y-2">{c.points.map((p) => <li key={p} className="flex items-center gap-3"><span className="text-accent-text"><Check /></span>{p}</li>)}</ul>
          {price !== undefined && (
            <div className="card mt-8 inline-block p-6">
              <p className="kicker !text-[0.6875rem]">{c.one}</p>
              <p className="font-display mt-1 text-[2.75rem] leading-none">{`$${price.toLocaleString("en-US")}`}</p>
              <p className="mt-2 text-[0.9375rem] text-ink-2">{c.visits}</p>
            </div>
          )}
          <div className="mt-8 flex flex-wrap gap-3">
            <a href={href(lang, site.booking)} className="btn btn-primary">{c.book}</a>
            <a href={site.sms(c.sms)} className="btn btn-outline">{c.text}</a>
          </div>
        </div>
        <figure>
          <Photo slot="dr-olivo" fallback="light-1" alt={c.caption} lang={lang} priority sizes="(min-width: 1024px) 50vw, 100vw" className="img-frame aspect-[4/3] shadow-[var(--shadow-card-hover)]" />
          <figcaption className="mt-3 text-[0.875rem] text-ink-2">{c.caption}</figcaption>
        </figure>
      </div></section>
      <section className="py-20"><div className="container-x max-w-[48rem]">
        <h2 className="section-title balance">{c.ledTitle}</h2>
        <p className="mt-4 text-[1.0625rem]">{c.led}</p>
        <p className="mt-4 text-ink-2">{c.consult}</p>
        <div className="mt-8 flex flex-wrap gap-x-8 gap-y-3">
          <Link href={href(lang, "/treatments/miradry")} className="link-arrow">{c.how} <Arrow /></Link>
          <a href={site.directionsUrl} target="_blank" rel="noopener noreferrer" className="link-arrow">{c.visit}: {site.addressLine} <Arrow /></a>
        </div>
      </div></section>
      <CtaBand title={c.cta} sms={c.sms} lang={lang} />
    </>
  );
}
