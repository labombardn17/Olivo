import Link from "next/link";
import { categories } from "@/content/site";
import { services, servicesIn } from "@/content/services";
import { Photo } from "@/components/site/Photo";
import { Crumbs, CtaBand } from "@/components/site/Blocks";
import { Stagger } from "@/components/site/Motion";
import { buildMeta } from "@/lib/meta";
import { Arrow } from "@/components/functional/Icons";

export const metadata = buildMeta({ title: "All Treatments | Olivo Med Spa, Logan Square Chicago", description: "Every treatment at Olivo Med Spa in Logan Square, Chicago: Emsculpt Neo, Emface, Exion, Opus Plasma, Miradry, Hydrafacial, injectables, laser hair removal.", path: "/treatments" });

export default function Treatments() {
  return (
    <>
      <section className="py-12 md:py-20"><div className="container-x">
        <Crumbs items={[{ name: "Home", href: "/" }, { name: "Treatments" }]} />
        <p className="kicker mt-8">All treatments</p>
        <h1 className="section-title mt-3 balance">{services.length} treatments. Nine platforms. One physician-led plan.</h1>
        <p className="lede mt-4 max-w-[52ch]">Browse by goal below, by <Link href="/concerns" className="link-arrow">concern</Link>, or <Link href="/quiz" className="link-arrow">take the two-minute quiz</Link>.</p>
        <div className="mt-14 space-y-16">
          {categories.map((c) => { const list = servicesIn(c.key); return (
            <div key={c.key} id={c.key}>
              <div className="grid gap-6 lg:grid-cols-[1fr_2fr] lg:gap-12">
                <Link href={`/treatments/${c.key}`} className="group card card-link lift relative block h-[16rem] overflow-hidden lg:h-auto"><Photo slot={c.slot} fallback={c.fallback} className="absolute inset-0 h-full" imgClassName="transition-transform duration-[1200ms] group-hover:scale-[1.05]" sizes="(min-width: 64rem) 33vw, 100vw" /><div className="absolute inset-0 scrim-up" /><div className="absolute inset-x-0 bottom-0 p-6 text-[#fff]"><h2 className="font-display text-[1.9rem] leading-tight">{c.name}</h2><p className="mt-1 text-[0.9375rem] text-[#fff]/80">{c.line}</p><span className="link-arrow mt-2 !text-[#fff] text-[0.875rem]">Overview <Arrow /></span></div></Link>
                <Stagger as="ul" className="grid gap-3 sm:grid-cols-2" amount={0.04}>{list.map((s) => (<li key={s.slug}><Link href={`/treatments/${s.slug}`} className="card card-link lift flex h-full flex-col p-5"><p className="kicker !text-ink-2">{s.tag}</p><h3 className="font-display mt-1.5 text-[1.35rem] leading-tight">{s.name}</h3><p className="mt-1.5 flex-1 text-[0.9rem] leading-snug text-ink-2">{s.headline}</p></Link></li>))}</Stagger>
              </div>
            </div>); })}
        </div>
      </div></section>
      <CtaBand />
    </>
  );
}
