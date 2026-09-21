import Link from "next/link";
import { posts } from "@/content/blog";
import { ui, type Lang } from "@/content/ui";
import { dateLocale, href } from "@/lib/i18n";
import { localizePost } from "@/lib/localize";
import { Crumbs, CtaBand } from "@/components/site/Blocks";
import { Stagger } from "@/components/site/Motion";
import { buildMeta } from "@/lib/meta";
import { Arrow } from "@/components/functional/Icons";

export const blogMeta = (lang: Lang) => buildMeta(lang === "es"
  ? { title: "Diario | Notas sobre piel, cuerpo y bienestar | Olivo Med Spa", description: "Notas en lenguaje claro del equipo médico de Olivo Med Spa en Logan Square, Chicago: qué hace cada tratamiento, cómo es una primera visita y cómo prepararse.", path: "/blog", lang }
  : { title: "Journal | Skin, Body, and Wellness Notes | Olivo Med Spa", description: "Plain-language notes from the physician-led team at Olivo Med Spa in Logan Square, Chicago: what treatments do, what a first visit is like, and how to prepare.", path: "/blog", lang });

export function BlogPage({ lang }: { lang: Lang }) {
  const t = ui(lang);
  const b = t.pages.blog;
  const sorted = [...posts].sort((a, c) => c.date.localeCompare(a.date)).map((p) => localizePost(p, lang));
  return (
    <>
      <section className="py-12 md:py-20"><div className="container-x">
        <Crumbs lang={lang} items={[{ name: t.blocks.home, href: "/" }, { name: b.crumb }]} />
        <p className="kicker mt-8">{b.kicker}</p>
        <h1 className="section-title mt-3 balance">{b.title}</h1>
        <Stagger as="ul" className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {sorted.map((p) => (<li key={p.slug}><Link href={href(lang, `/blog/${p.slug}`)} className="card card-link lift flex h-full flex-col p-7"><p className="kicker">{new Date(p.date).toLocaleDateString(dateLocale[lang], { month: "long", day: "numeric", year: "numeric" })} · {p.readMinutes} {b.min}</p><h2 className="font-display mt-3 text-[1.6rem] leading-tight">{p.title}</h2><p className="mt-3 flex-1 text-[0.9375rem] leading-relaxed text-ink-2">{p.excerpt}</p><span className="link-arrow mt-5 text-[0.875rem]">{b.read} <Arrow /></span></Link></li>))}
        </Stagger>
      </div></section>
      <CtaBand lang={lang} />
    </>
  );
}
