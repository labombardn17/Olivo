import Link from "next/link";
import type { CategoryMeta } from "@/content/site";
import { servicesIn } from "@/content/services";
import { concerns } from "@/content/concerns";
import { Photo } from "@/components/site/Photo";
import { Reveal } from "@/components/shared/Reveal";
import { Stagger } from "@/components/site/Motion";
import { Crumbs, CtaBand } from "@/components/site/Blocks";
import { JsonLd } from "@/components/site/JsonLd";
import { breadcrumbs } from "@/lib/schema";
import { Arrow } from "@/components/functional/Icons";

export function CategoryTemplate({ c }: { c: CategoryMeta }) {
  const list = servicesIn(c.key);
  const slugs = new Set(list.flatMap((s) => s.concerns));
  const related = concerns.filter((x) => slugs.has(x.slug)).slice(0, 6);
  return (
    <>
      <JsonLd data={breadcrumbs([{ name: "Home", path: "/" }, { name: "Treatments", path: "/treatments" }, { name: c.name, path: `/treatments/${c.key}` }])} />
      <section data-hero="" className="bg-ground-2">
        <div className="container-x grid items-center gap-10 py-10 lg:grid-cols-2 lg:gap-16 lg:py-20">
          <div>
            <Crumbs items={[{ name: "Home", href: "/" }, { name: "Treatments", href: "/treatments" }, { name: c.name }]} />
            <p className="kicker mt-6">Treatments</p>
            <h1 className="display-xl mt-3 balance">{c.name}</h1>
            <p className="lede mt-5 max-w-[48ch]">{c.line} Every plan starts with a consultation with the physician-led team.</p>
            <div className="mt-8 flex flex-wrap gap-3"><Link href="/quiz" className="btn btn-primary">Find my treatment</Link><a href="#list" className="btn btn-outline">See the options</a></div>
          </div>
          <Photo slot={c.slot} fallback={c.fallback} className="img-frame aspect-[4/3] shadow-[var(--shadow-card-hover)]" sizes="(min-width: 64rem) 50vw, 100vw" priority />
        </div>
      </section>
      <section id="list" className="py-20 md:py-24">
        <div className="container-x">
          <Reveal className="max-w-2xl"><h2 className="section-title">{list.length} {list.length === 1 ? "treatment" : "treatments"} in {c.name.toLowerCase()}</h2></Reveal>
          <Stagger as="ul" className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {list.map((s) => (
              <li key={s.slug}><Link href={`/treatments/${s.slug}`} className="group card card-link lift flex h-full flex-col overflow-hidden">
                <Photo slot={s.image.slot} fallback={s.image.fallback} alt={s.image.alt} className="aspect-[16/10]" imgClassName="transition-transform duration-[1200ms] group-hover:scale-[1.05]" sizes="(min-width: 64rem) 33vw, (min-width: 40rem) 50vw, 100vw" />
                <div className="flex flex-1 flex-col p-6"><p className="kicker">{s.tag}</p><h3 className="font-display mt-2 text-[1.6rem] leading-tight">{s.name}</h3><p className="mt-2 flex-1 text-[0.9375rem] leading-relaxed text-ink-2">{s.headline}</p><span className="link-arrow mt-4 text-[0.875rem]">Learn more <Arrow /></span></div>
              </Link></li>
            ))}
          </Stagger>
        </div>
      </section>
      {related.length > 0 && (
        <section className="bg-ground-2 py-16">
          <div className="container-x"><p className="kicker">Related concerns</p><ul className="mt-4 flex flex-wrap gap-2">{related.map((x) => (<li key={x.slug}><Link href={`/concerns/${x.slug}`} className="rounded-full border border-rule bg-ground px-4 py-2 text-[0.9375rem] hover:border-accent hover:text-accent-text">{x.name}</Link></li>))}</ul></div>
        </section>
      )}
      <CtaBand title={`Talk to us about ${c.name.toLowerCase()}.`} />
    </>
  );
}
