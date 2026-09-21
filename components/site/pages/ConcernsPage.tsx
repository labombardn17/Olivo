import Link from "next/link";
import { concerns } from "@/content/concerns";
import { ui, type Lang } from "@/content/ui";
import { href } from "@/lib/i18n";
import { localizeConcern } from "@/lib/localize";
import { Photo } from "@/components/site/Photo";
import { Crumbs, CtaBand } from "@/components/site/Blocks";
import { Stagger } from "@/components/site/Motion";
import { buildMeta } from "@/lib/meta";
import { Arrow } from "@/components/functional/Icons";

export const concernsMeta = (lang: Lang) => buildMeta(lang === "es"
  ? { title: "Tratamientos por inquietud | Olivo Med Spa, Logan Square", description: "Empiece por lo que quiere cambiar: líneas, volumen, flacidez, grasa localizada, sudoración, textura o vello, con los tratamientos de Olivo Med Spa en Chicago.", path: "/concerns", lang }
  : { title: "Treatments by Concern | Olivo Med Spa, Logan Square", description: "Start with what you would like to change: lines, volume, sagging, stubborn fat, sweat, texture, or hair, matched to treatments at Olivo Med Spa in Chicago.", path: "/concerns", lang });

export function ConcernsPage({ lang }: { lang: Lang }) {
  const t = ui(lang);
  const p = t.pages.concerns;
  const L = (x: string) => href(lang, x);
  return (
    <>
      <section className="py-12 md:py-20"><div className="container-x">
        <Crumbs lang={lang} items={[{ name: t.blocks.home, href: "/" }, { name: p.crumb }]} />
        <p className="kicker mt-8">{p.kicker}</p>
        <h1 className="section-title mt-3 balance">{p.title}</h1>
        <p className="lede mt-4 max-w-[52ch]">{p.lede} <Link href={L("/quiz")} className="link-arrow">{p.quiz}</Link>.</p>
        <Stagger as="ul" className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4" amount={0.04}>
          {concerns.map((raw) => { const c = localizeConcern(raw, lang); return (<li key={c.slug}><Link href={L(`/concerns/${c.slug}`)} className="group card card-link lift flex h-full flex-col overflow-hidden"><Photo slot={c.image.slot} fallback={c.image.fallback} alt={c.name} lang={lang} className="aspect-[4/3]" /><div className="flex flex-1 flex-col p-5"><h2 className="font-display text-[1.4rem] leading-tight">{c.name}</h2><p className="mt-2 flex-1 text-[0.9rem] leading-relaxed text-ink-2">{c.summary}</p><span className="link-arrow mt-3 text-[0.8125rem]">{p.seeTreatments} <Arrow /></span></div></Link></li>); })}
        </Stagger>
      </div></section>
      <CtaBand lang={lang} />
    </>
  );
}
