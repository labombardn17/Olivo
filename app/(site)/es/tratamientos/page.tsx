import Link from "next/link";
import { esCategories, esUi } from "@/content/patients";
import { categories, site } from "@/content/site";
import { services, servicesIn } from "@/content/services";
import { Photo } from "@/components/site/Photo";
import { Stagger } from "@/components/site/Motion";
import { Crumbs } from "@/components/site/Blocks";
import { buildMeta } from "@/lib/meta";
import { Verify } from "@/lib/verify";
import { Arrow, Phone } from "@/components/functional/Icons";

export const metadata = buildMeta({ title: "Tratamientos | Olivo Med Spa, Logan Square, Chicago", description: "Todos los tratamientos de Olivo Med Spa en Logan Square, Chicago: Emsculpt Neo, Emface, Exion, Opus Plasma, láser CO2, Miradry, inyectables, Hydrafacial y más. Atención en español.", path: "/es/tratamientos", languages: { en: "/treatments", es: "/es/tratamientos", "x-default": "/treatments" } });

export default function Tratamientos() {
  return (
    <>
      <section className="py-12 md:py-20"><div className="container-x">
        <Crumbs items={[{ name: "Inicio", href: "/es" }, { name: esUi.treatments }]} />
        <p className="kicker mt-8">{esUi.allTreatments}</p>
        <h1 className="section-title mt-3 balance">{services.length} tratamientos. Nueve plataformas. Un plan dirigido por una médica.</h1>
        <p className="lede mt-4 max-w-[52ch]">{esUi.intro}<Verify note={esUi.introVerify} /> Las páginas de detalle están en inglés por ahora.<Verify note="Spanish detail pages: translate after content sign-off" /></p>
        <div className="mt-14 space-y-16">
          {categories.map((c) => { const list = servicesIn(c.key); const es = esCategories[c.key]; return (
            <div key={c.key} id={c.key} className="grid gap-6 lg:grid-cols-[1fr_2fr] lg:gap-12">
              <Link href={`/treatments/${c.key}`} className="group card card-link lift relative block h-[16rem] overflow-hidden lg:h-auto"><Photo slot={c.slot} fallback={c.fallback} className="absolute inset-0 h-full" imgClassName="transition-transform duration-[1200ms] group-hover:scale-[1.05]" sizes="(min-width: 64rem) 33vw, 100vw" /><div className="absolute inset-0 scrim-up" /><div className="absolute inset-x-0 bottom-0 p-6 text-[#fff]"><h2 className="font-display text-[1.9rem] leading-tight">{es.name}</h2><p className="mt-1 text-[0.9375rem] text-[#fff]/80">{es.line}</p><span className="link-arrow mt-2 !text-[#fff] text-[0.875rem]">{esUi.seeAll} <Arrow /></span></div></Link>
              <Stagger as="ul" className="grid gap-3 sm:grid-cols-2" amount={0.04}>{list.map((s) => (<li key={s.slug}><Link href={`/treatments/${s.slug}`} className="card card-link lift flex h-full flex-col p-5"><h3 className="font-display text-[1.35rem] leading-tight">{s.es?.name ?? s.name}</h3><p className="mt-1.5 flex-1 text-[0.9rem] leading-snug text-ink-2">{s.es?.summary ?? s.summary}</p></Link></li>))}</Stagger>
            </div>); })}
        </div>
      </div></section>
      <section className="inverse py-20"><div className="container-x text-center"><h2 className="section-title balance">Reserve su consulta.</h2><p className="section-sub mx-auto mt-4">En línea a cualquier hora, por texto o por teléfono en horario de clínica.</p><div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row"><a href={site.booking} className="btn btn-primary">{esUi.book}</a><a href={site.sms("Hola Olivo, quisiera reservar una consulta.")} className="btn btn-outline">{esUi.text}</a><a href={site.phoneTel} className="btn btn-outline"><Phone />{esUi.call} {site.phoneDisplay}</a></div></div></section>
    </>
  );
}
