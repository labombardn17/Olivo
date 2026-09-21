import Link from "next/link";
import { categories } from "@/content/site";
import { services, servicesIn } from "@/content/services";
import { ui, type Lang } from "@/content/ui";
import { href } from "@/lib/i18n";
import { localizeCategory, localizeService } from "@/lib/localize";
import { Photo } from "@/components/site/Photo";
import { Crumbs, CtaBand } from "@/components/site/Blocks";
import { Stagger } from "@/components/site/Motion";
import { buildMeta } from "@/lib/meta";
import { Arrow } from "@/components/functional/Icons";

export const treatmentsMeta = (lang: Lang) => buildMeta(lang === "es"
  ? { title: "Tratamientos | Olivo Med Spa, Logan Square, Chicago", description: "Tratamientos de Olivo Med Spa en Logan Square, Chicago: Emsculpt Neo, Emface, Exion, Opus Plasma, Miradry, inyectables e Hydrafacial. Atención en español.", path: "/treatments", lang }
  : { title: "All Treatments | Olivo Med Spa, Logan Square Chicago", description: "Every treatment at Olivo Med Spa in Logan Square, Chicago: Emsculpt Neo, Emface, Exion, Opus Plasma, Miradry, Hydrafacial, injectables, laser hair removal.", path: "/treatments", lang });

export function TreatmentsPage({ lang }: { lang: Lang }) {
  const t = ui(lang);
  const p = t.pages.treatments;
  const L = (x: string) => href(lang, x);
  return (
    <>
      <section className="py-12 md:py-20"><div className="container-x">
        <Crumbs lang={lang} items={[{ name: t.blocks.home, href: "/" }, { name: p.crumb }]} />
        <p className="kicker mt-8">{p.kicker}</p>
        <h1 className="section-title mt-3 balance">{p.title(services.length)}</h1>
        <p className="lede mt-4 max-w-[52ch]">{p.lede1} <Link href={L("/concerns")} className="link-arrow">{p.lede2}</Link>{p.lede3} <Link href={L("/quiz")} className="link-arrow">{p.lede4}</Link>.</p>
        <div className="mt-14 space-y-16">
          {categories.map((raw) => { const c = localizeCategory(raw, lang); const list = servicesIn(c.key).map((s) => localizeService(s, lang)); return (
            <div key={c.key} id={c.key} className="grid gap-6 lg:grid-cols-[1fr_2fr] lg:gap-12">
              <Link href={L(`/treatments/${c.key}`)} className="group card card-link lift relative block h-[16rem] overflow-hidden lg:h-auto"><Photo slot={c.slot} fallback={c.fallback} alt={c.name} lang={lang} className="absolute inset-0 h-full" /><div className="absolute inset-0 scrim-up" /><div className="absolute inset-x-0 bottom-0 p-6 text-[#fff]"><h2 className="font-display text-[1.9rem] leading-tight">{c.name}</h2><p className="mt-1 text-[0.9375rem] text-[#fff]/80">{c.line}</p><span className="link-arrow mt-2 !text-[#fff] text-[0.875rem]">{p.overview} <Arrow /></span></div></Link>
              <Stagger as="ul" className="grid gap-3 sm:grid-cols-2" amount={0.04}>{list.map((s) => (<li key={s.slug}><Link href={L(`/treatments/${s.slug}`)} className="card card-link lift flex h-full flex-col p-5"><p className="kicker !text-ink-2">{s.tag}</p><h3 className="font-display mt-1.5 text-[1.35rem] leading-tight">{s.name}</h3><p className="mt-1.5 flex-1 text-[0.9rem] leading-snug text-ink-2">{s.headline}</p></Link></li>))}</Stagger>
            </div>); })}
        </div>
      </div></section>
      <CtaBand lang={lang} />
    </>
  );
}
