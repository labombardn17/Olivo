import Link from "next/link";
import type { CategoryMeta } from "@/content/site";
import { servicesIn } from "@/content/services";
import { concerns } from "@/content/concerns";
import { ui, type Lang } from "@/content/ui";
import { href } from "@/lib/i18n";
import { localizeCategory, localizeConcern, localizeService } from "@/lib/localize";
import { Photo } from "@/components/site/Photo";
import { Reveal } from "@/components/shared/Reveal";
import { Stagger } from "@/components/site/Motion";
import { Crumbs, CtaBand } from "@/components/site/Blocks";
import { JsonLd } from "@/components/site/JsonLd";
import { breadcrumbs } from "@/lib/schema";
import { Arrow } from "@/components/functional/Icons";

export function CategoryTemplate({ c: raw, lang = "en" }: { c: CategoryMeta; lang?: Lang }) {
  const t = ui(lang);
  const p = t.pages.treatments;
  const c = localizeCategory(raw, lang);
  const list = servicesIn(c.key).map((s) => localizeService(s, lang));
  const slugs = new Set(list.flatMap((s) => s.concerns));
  const related = concerns.filter((x) => slugs.has(x.slug)).slice(0, 6).map((x) => localizeConcern(x, lang));
  const L = (x: string) => href(lang, x);
  return (
    <>
      <JsonLd data={breadcrumbs([{ name: t.blocks.home, path: L("/") }, { name: t.nav.treatments, path: L("/treatments") }, { name: c.name, path: L(`/treatments/${c.key}`) }])} />
      <section data-hero="" className="bg-ground-2">
        <div className="container-x grid items-center gap-10 py-10 lg:grid-cols-2 lg:gap-16 lg:py-20">
          <div>
            <Crumbs lang={lang} items={[{ name: t.blocks.home, href: "/" }, { name: t.nav.treatments, href: "/treatments" }, { name: c.name }]} />
            <p className="kicker mt-6">{p.categoryKicker}</p>
            <h1 className="display-xl mt-3 balance">{c.name}</h1>
            <p className="lede mt-5 max-w-[48ch]">{c.line} {p.categoryLede}</p>
            <div className="mt-8 flex flex-wrap gap-3"><Link href={L("/quiz")} className="btn btn-primary">{p.findMine}</Link><a href="#list" className="btn btn-outline">{p.seeOptions}</a></div>
          </div>
          <Photo slot={c.slot} fallback={c.fallback} alt={c.name} lang={lang} className="img-frame aspect-[4/3] shadow-[var(--shadow-card-hover)]" />
        </div>
      </section>
      <section id="list" className="py-20 md:py-24">
        <div className="container-x">
          <Reveal className="max-w-2xl"><h2 className="section-title">{p.countIn(list.length, c.name.toLowerCase())}</h2></Reveal>
          <Stagger as="ul" className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {list.map((s) => (
              <li key={s.slug}><Link href={L(`/treatments/${s.slug}`)} className="group card card-link lift flex h-full flex-col overflow-hidden">
                <Photo slot={s.image.slot} fallback={s.image.fallback} alt={s.name} lang={lang} className="aspect-[16/10]" />
                <div className="flex flex-1 flex-col p-6"><p className="kicker">{s.tag}</p><h3 className="font-display mt-2 text-[1.6rem] leading-tight">{s.name}</h3><p className="mt-2 flex-1 text-[0.9375rem] leading-relaxed text-ink-2">{s.headline}</p><span className="link-arrow mt-4 text-[0.875rem]">{t.blocks.learnMore} <Arrow /></span></div>
              </Link></li>
            ))}
          </Stagger>
        </div>
      </section>
      {related.length > 0 && (
        <section className="bg-ground-2 py-16">
          <div className="container-x"><p className="kicker">{p.relatedConcerns}</p><ul className="mt-4 flex flex-wrap gap-2">{related.map((x) => (<li key={x.slug}><Link href={L(`/concerns/${x.slug}`)} className="rounded-full border border-rule bg-ground px-4 py-2 text-[0.9375rem] hover:border-accent hover:text-accent-text">{x.name}</Link></li>))}</ul></div>
        </section>
      )}
      <CtaBand title={p.talk(c.name.toLowerCase())} lang={lang} />
    </>
  );
}
