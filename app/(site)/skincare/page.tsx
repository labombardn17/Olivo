import { skincare } from "@/content/offers";
import { site } from "@/content/site";
import { Photo } from "@/components/site/Photo";
import { Stagger } from "@/components/site/Motion";
import { Crumbs, CtaBand } from "@/components/site/Blocks";
import { buildMeta } from "@/lib/meta";
import { Verify } from "@/lib/verify";

export const metadata = buildMeta({ title: "Skincare: Alastin, ZO, Skinbetter | Olivo Med Spa", description: "Physician-dispensed skincare at Olivo Med Spa in Logan Square, Chicago: Alastin, ZO Skin Health, and Skinbetter Science, chosen after a skin consultation.", path: "/skincare" });

export default function Skincare() {
  return (
    <>
      <section data-hero="" className="bg-ground-2"><div className="container-x grid items-center gap-10 py-10 lg:grid-cols-2 lg:gap-16 lg:py-20">
        <div><Crumbs items={[{ name: "Home", href: "/" }, { name: "Skincare" }]} /><p className="kicker mt-6">Skincare</p><h1 className="display-xl mt-3 balance">Three lines. Dispensed, not sold.</h1><p className="lede mt-5 max-w-[50ch]">{skincare.note}</p><div className="mt-8 flex flex-wrap gap-3"><a href={site.sms("Hi Olivo, I would like a skincare consultation.")} className="btn btn-primary">Text for a skin consult</a><a href={site.booking} className="btn btn-outline">Book</a></div><Verify note={skincare.verify} /></div>
        <Photo slot="skincare" fallback="steel-1" className="img-frame aspect-[4/3] shadow-[var(--shadow-card-hover)]" sizes="(min-width: 64rem) 50vw, 100vw" priority />
      </div></section>
      <section className="py-20"><div className="container-x"><Stagger className="grid gap-6 md:grid-cols-3">{skincare.lines.map((l) => (<div key={l.name} className="card p-7"><h2 className="font-display text-[1.75rem]">{l.name}</h2><p className="mt-3 text-ink-2">{l.line}</p>{"verify" in l && l.verify && <Verify note={l.verify} />}</div>))}</Stagger></div></section>
      <CtaBand title="Start with a skin consultation." sms="Hi Olivo, I would like a skincare consultation." />
    </>
  );
}
