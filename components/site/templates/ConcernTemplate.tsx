import Link from "next/link";
import type { Concern, Service } from "@/content/types";
import { categoryByKey, site } from "@/content/site";
import { getService } from "@/content/services";
import { Photo } from "@/components/site/Photo";
import { Reveal } from "@/components/shared/Reveal";
import { Stagger } from "@/components/site/Motion";
import { Crumbs, CtaBand, FaqList } from "@/components/site/Blocks";
import { JsonLd } from "@/components/site/JsonLd";
import { breadcrumbs, faqSchema } from "@/lib/schema";
import { Verify } from "@/lib/verify";
import { Arrow } from "@/components/functional/Icons";

export function ConcernTemplate({ c }: { c: Concern }) {
  const list = c.treatments.map(getService).filter((s): s is Service => Boolean(s));
  const sms = `Hi Olivo, I would like help with ${c.name.toLowerCase()}. Can we set up a consultation?`;
  return (
    <>
      <JsonLd data={[faqSchema(c.faqs), breadcrumbs([{ name: "Home", path: "/" }, { name: "Concerns", path: "/concerns" }, { name: c.name, path: `/concerns/${c.slug}` }])]} />
      <section data-hero="" className="bg-ground-2">
        <div className="container-x grid items-center gap-10 py-10 lg:grid-cols-2 lg:gap-16 lg:py-20">
          <div>
            <Crumbs items={[{ name: "Home", href: "/" }, { name: "Concerns", href: "/concerns" }, { name: c.name }]} />
            <p className="kicker mt-6">Concern</p>
            <h1 className="display-xl mt-3 balance">{c.name}</h1>
            <p className="lede mt-5 max-w-[48ch]">{c.summary}</p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row"><a href={site.booking} className="btn btn-primary">Book a consultation</a><a href={site.sms(sms)} className="btn btn-outline">Text us</a></div>
          </div>
          <Photo slot={c.image.slot} fallbackSlot={list[0] ? list[0].image.slot : "home"} fallback={c.image.fallback} alt={c.image.alt} className="img-frame aspect-[4/3] shadow-[var(--shadow-card-hover)]" sizes="(min-width: 64rem) 50vw, 100vw" priority />
        </div>
      </section>
      <section className="py-20 md:py-24">
        <div className="container-x grid gap-12 lg:grid-cols-[1fr_1.3fr] lg:gap-20">
          <Reveal><p className="kicker">How we think about it</p><div className="prose">{c.intro.map((p) => <p key={p.slice(0, 30)}>{p}</p>)}</div>{c.verify?.map((v) => <Verify key={v} note={v} />)}</Reveal>
          <Reveal delay={0.1}>
            <h2 className="section-title">Treatments we reach for</h2>
            <p className="mt-3 text-[0.9375rem] text-ink-2">In the order the clinic tends to consider them. The right one for you is decided at consultation.<Verify note="Treatment-to-concern mapping and order: clinic to confirm" /></p>
            <Stagger as="ol" className="mt-8 grid gap-4">
              {list.map((s, i) => (<li key={s.slug}><Link href={`/treatments/${s.slug}`} className="card card-link lift flex gap-5 p-5"><span className="font-display text-[2rem] leading-none text-accent-text">0{i + 1}</span><div className="flex-1"><p className="kicker !text-ink-2">{categoryByKey(s.category).name}</p><h3 className="font-display mt-1 text-[1.5rem] leading-tight">{s.name}</h3><p className="mt-1.5 text-[0.9375rem] leading-relaxed text-ink-2">{s.headline}</p><span className="link-arrow mt-3 text-[0.875rem]">Learn more <Arrow /></span></div></Link></li>))}
            </Stagger>
          </Reveal>
        </div>
      </section>
      <FaqList faqs={c.faqs} title={`${c.name}, answered`} />
      <CtaBand title={`Let us look at it together.`} sms={sms} />
    </>
  );
}
