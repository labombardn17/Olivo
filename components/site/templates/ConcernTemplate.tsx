import Link from "next/link";
import type { Concern, Service } from "@/content/types";
import { categoryByKey, site } from "@/content/site";
import { getService } from "@/content/services";
import { ui, type Lang } from "@/content/ui";
import { href } from "@/lib/i18n";
import { localizeCategory, localizeConcern, localizeService } from "@/lib/localize";
import { Photo } from "@/components/site/Photo";
import { Reveal } from "@/components/shared/Reveal";
import { Stagger } from "@/components/site/Motion";
import { Crumbs, CtaBand, FaqList } from "@/components/site/Blocks";
import { JsonLd } from "@/components/site/JsonLd";
import { breadcrumbs, faqSchema } from "@/lib/schema";
import { Verify } from "@/lib/verify";
import { Arrow } from "@/components/functional/Icons";

export function ConcernTemplate({ c: raw, lang = "en" }: { c: Concern; lang?: Lang }) {
  const t = ui(lang);
  const p = t.pages.concerns;
  const c = localizeConcern(raw, lang);
  const list = c.treatments.map(getService).filter((s): s is Service => Boolean(s)).map((s) => localizeService(s, lang));
  const sms = p.sms(c.name.toLowerCase());
  const L = (x: string) => href(lang, x);
  return (
    <>
      <JsonLd data={[faqSchema(c.faqs), breadcrumbs([{ name: t.blocks.home, path: L("/") }, { name: t.nav.concerns, path: L("/concerns") }, { name: c.name, path: L(`/concerns/${c.slug}`) }])]} />
      <section data-hero="" className="bg-ground-2">
        <div className="container-x grid items-center gap-10 py-10 lg:grid-cols-2 lg:gap-16 lg:py-20">
          <div>
            <Crumbs lang={lang} items={[{ name: t.blocks.home, href: "/" }, { name: t.nav.concerns, href: "/concerns" }, { name: c.name }]} />
            <p className="kicker mt-6">{p.concernKicker}</p>
            <h1 className="display-xl mt-3 balance">{c.name}</h1>
            <p className="lede mt-5 max-w-[48ch]">{c.summary}</p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row"><a href={L(site.booking)} className="btn btn-primary">{t.nav.bookConsult}</a><a href={site.sms(sms)} className="btn btn-outline">{t.nav.textUs}</a></div>
          </div>
          <Photo slot={c.image.slot} fallback={c.image.fallback} alt={c.name} lang={lang} className="img-frame aspect-[4/3] shadow-[var(--shadow-card-hover)]" />
        </div>
      </section>
      <section className="py-20 md:py-24">
        <div className="container-x grid gap-12 lg:grid-cols-[1fr_1.3fr] lg:gap-20">
          <Reveal><p className="kicker">{p.howWeThink}</p><div className="prose">{c.intro.map((x) => <p key={x.slice(0, 30)}>{x}</p>)}</div>{c.verify?.map((v) => <Verify key={v} note={v} />)}</Reveal>
          <Reveal delay={0.1}>
            <h2 className="section-title">{p.reachFor}</h2>
            <p className="mt-3 text-[0.9375rem] text-ink-2">{p.order}<Verify note="Treatment-to-concern mapping and order: clinic to confirm" /></p>
            <Stagger as="ol" className="mt-8 grid gap-4">
              {list.map((s, i) => (<li key={s.slug}><Link href={L(`/treatments/${s.slug}`)} className="card card-link lift flex gap-5 p-5"><span className="font-display text-[2rem] leading-none text-accent-text">0{i + 1}</span><div className="flex-1"><p className="kicker !text-ink-2">{localizeCategory(categoryByKey(s.category), lang).name}</p><h3 className="font-display mt-1 text-[1.5rem] leading-tight">{s.name}</h3><p className="mt-1.5 text-[0.9375rem] leading-relaxed text-ink-2">{s.headline}</p><span className="link-arrow mt-3 text-[0.875rem]">{t.blocks.learnMore} <Arrow /></span></div></Link></li>))}
            </Stagger>
          </Reveal>
        </div>
      </section>
      <FaqList faqs={c.faqs} title={t.pages.service.answered(c.name)} lang={lang} />
      <CtaBand title={p.together} sms={sms} lang={lang} />
    </>
  );
}
