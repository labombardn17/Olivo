import Link from "next/link";
import type { Post, Service } from "@/content/types";
import { getService } from "@/content/services";
import { ui, type Lang } from "@/content/ui";
import { dateLocale, href } from "@/lib/i18n";
import { localizePost, localizeService } from "@/lib/localize";
import { Crumbs, CtaBand, LinkCard } from "@/components/site/Blocks";
import { JsonLd } from "@/components/site/JsonLd";
import { Photo } from "@/components/site/Photo";
import { Drift } from "@/components/site/Motion";
import { article, breadcrumbs } from "@/lib/schema";
import { Verify } from "@/lib/verify";

export function PostTemplate({ p: raw, lang = "en" }: { p: Post; lang?: Lang }) {
  const t = ui(lang);
  const b = t.pages.blog;
  const p = localizePost(raw, lang);
  const related = p.related.map(getService).filter((s): s is Service => Boolean(s)).map((s) => localizeService(s, lang));
  const date = new Date(p.date).toLocaleDateString(dateLocale[lang], { year: "numeric", month: "long", day: "numeric" });
  const L = (x: string) => href(lang, x);
  return (
    <>
      <JsonLd data={[article({ title: p.title, description: p.seo.description, path: L(`/blog/${p.slug}`), date: p.date }), breadcrumbs([{ name: t.blocks.home, path: L("/") }, { name: b.crumb, path: L("/blog") }, { name: p.title, path: L(`/blog/${p.slug}`) }])]} />
      <article className="py-12 md:py-20">
        <div className="container-x mx-auto max-w-3xl">
          <Crumbs lang={lang} items={[{ name: t.blocks.home, href: "/" }, { name: b.crumb, href: "/blog" }, { name: p.title }]} />
          <p className="kicker mt-8">{date} · {p.readMinutes} {b.minRead}</p>
          <h1 className="section-title mt-3 balance">{p.title}</h1>
          <p className="lede mt-5">{p.excerpt}</p>
          {related[0] && <Drift className="img-frame mt-8"><Photo slot={related[0].image.slot} fallback={related[0].image.fallback} alt={related[0].name} lang={lang} className="aspect-[16/9]" /></Drift>}
          <div className="prose mt-6">{p.sections.map((s) => (<section key={s.h}><h2>{s.h}</h2>{s.p.map((x) => <p key={x.slice(0, 30)}>{x}</p>)}</section>))}</div>
          <p className="mt-10 text-[0.8125rem] text-ink-2">{b.reviewed}<Verify note="Medical review of this post: Dr. Olivo to approve before publishing" />{p.verify?.map((v) => <Verify key={v} note={v} />)}</p>
          {related.length > 0 && (<div className="mt-12"><p className="kicker">{b.related}</p><ul className="mt-4 grid gap-4 sm:grid-cols-2">{related.map((s) => <li key={s.slug}><LinkCard lang={lang} href={`/treatments/${s.slug}`} title={s.name} line={s.headline} meta={s.tag} /></li>)}</ul></div>)}
          <p className="mt-10"><Link href={L("/blog")} className="link-arrow">{b.all}</Link></p>
        </div>
      </article>
      <CtaBand lang={lang} />
    </>
  );
}
