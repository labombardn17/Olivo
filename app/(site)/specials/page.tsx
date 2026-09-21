import Link from "next/link";
import { specials, membershipTiers } from "@/content/offers";
import { site } from "@/content/site";
import { Photo } from "@/components/site/Photo";
import { Stagger } from "@/components/site/Motion";
import { Crumbs, CtaBand } from "@/components/site/Blocks";
import { buildMeta } from "@/lib/meta";
import { Verify } from "@/lib/verify";

export const metadata = buildMeta({ title: "Specials This Month | Olivo Med Spa, Logan Square Chicago", description: "Current monthly specials at Olivo Med Spa in Logan Square, Chicago. Offers change monthly and are confirmed at booking. Text or call 872-315-3481.", path: "/specials" });

export default function Specials() {
  return (
    <>
      <section data-hero="" className="bg-ground-2"><div className="container-x grid items-center gap-10 py-10 lg:grid-cols-2 lg:gap-16 lg:py-20">
        <div><Crumbs items={[{ name: "Home", href: "/" }, { name: "Specials" }]} /><p className="kicker mt-6">This month</p><h1 className="display-xl mt-3 balance">Specials, updated monthly.</h1><p className="lede mt-5 max-w-[50ch]">{specials.intro}</p><div className="mt-8 flex flex-wrap gap-3"><a href={site.sms("Hi Olivo, what are this month's specials?")} className="btn btn-primary">Text for this month's offers</a><a href={site.memberships} target="_blank" rel="noopener noreferrer" className="btn btn-outline">Member portal</a></div><Verify note={specials.verify} /></div>
        <Photo slot="specials" fallback="light-1" className="img-frame aspect-[4/3] shadow-[var(--shadow-card-hover)]" sizes="(min-width: 64rem) 50vw, 100vw" priority />
      </div></section>
      <section className="py-20"><div className="container-x">
        <Stagger className="grid gap-6 md:grid-cols-3">{specials.items.map((s) => (<div key={s.name} className="card p-7"><p className="kicker">Offer</p><h2 className="font-display mt-2 text-[1.6rem] leading-tight">{s.name}</h2><p className="mt-3 text-ink-2">{s.line}</p>{"verify" in s && s.verify && <Verify note={s.verify} />}<a href={site.booking} target="_blank" rel="noopener noreferrer" className="btn btn-outline btn-sm mt-6">Book</a></div>))}</Stagger>
        <div className="card-2 mt-10 p-7 md:flex md:items-center md:justify-between"><div><p className="font-semibold">Prefer a standing discount?</p><p className="mt-1 text-[0.9375rem] text-ink-2">{membershipTiers.map((t) => t.name).join(", ")} include member pricing every month.</p></div><Link href="/memberships" className="btn btn-primary btn-sm mt-4 md:mt-0">See memberships</Link></div>
      </div></section>
      <CtaBand title="Ask what is on this month." sms="Hi Olivo, what are this month's specials?" />
    </>
  );
}
