import Link from "next/link";
import type { Post, Service } from "@/content/types";
import { getService } from "@/content/services";
import { Crumbs, CtaBand, LinkCard } from "@/components/site/Blocks";
import { JsonLd } from "@/components/site/JsonLd";
import { article, breadcrumbs } from "@/lib/schema";
import { Verify } from "@/lib/verify";
import { Photo } from "@/components/site/Photo";
import { Drift } from "@/components/site/Motion";

export function PostTemplate({ p }: { p: Post }) {
  const related = p.related.map(getService).filter((s): s is Service => Boolean(s));
  const date = new Date(p.date).toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" });
  return (
    <>
      <JsonLd data={[article({ title: p.title, description: p.seo.description, path: `/blog/${p.slug}`, date: p.date }), breadcrumbs([{ name: "Home", path: "/" }, { name: "Journal", path: "/blog" }, { name: p.title, path: `/blog/${p.slug}` }])]} />
      <article className="py-12 md:py-20">
        <div className="container-x mx-auto max-w-3xl">
          <Crumbs items={[{ name: "Home", href: "/" }, { name: "Journal", href: "/blog" }, { name: p.title }]} />
          <p className="kicker mt-8">{date} · {p.readMinutes} min read</p>
          <h1 className="section-title mt-3 balance">{p.title}</h1>
          <p className="lede mt-5">{p.excerpt}</p>
          {related[0] && <Drift className="img-frame mt-8"><Photo slot={related[0].image.slot} fallback={related[0].image.fallback} alt={related[0].image.alt} className="aspect-[16/9]" sizes="(min-width: 48rem) 48rem, 100vw" priority /></Drift>}
          <div className="prose mt-6">{p.sections.map((s) => (<section key={s.h}><h2>{s.h}</h2>{s.p.map((t) => <p key={t.slice(0, 30)}>{t}</p>)}</section>))}</div>
          <p className="mt-10 text-[0.8125rem] text-ink-2">Reviewed by the clinical team at Olivo Med Spa. Educational content, not medical advice. Candidacy and expectations are set at consultation.<Verify note="Medical review of this post: Dr. Olivo to approve before publishing" />{p.verify?.map((v) => <Verify key={v} note={v} />)}</p>
          {related.length > 0 && (<div className="mt-12"><p className="kicker">Related treatments</p><ul className="mt-4 grid gap-4 sm:grid-cols-2">{related.map((s) => <li key={s.slug}><LinkCard href={`/treatments/${s.slug}`} title={s.name} line={s.headline} meta={s.tag} /></li>)}</ul></div>)}
          <p className="mt-10"><Link href="/blog" className="link-arrow">All journal posts</Link></p>
        </div>
      </article>
      <CtaBand />
    </>
  );
}
