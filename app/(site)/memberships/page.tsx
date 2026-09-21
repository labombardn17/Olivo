import Link from "next/link";
import { membershipTiers, membershipsVerify, financing } from "@/content/offers";
import { site } from "@/content/site";
import { getService } from "@/content/services";
import { Photo } from "@/components/site/Photo";
import { Reveal } from "@/components/shared/Reveal";
import { Stagger } from "@/components/site/Motion";
import { Crumbs, CtaBand, FaqList } from "@/components/site/Blocks";
import { buildMeta } from "@/lib/meta";
import { Verify } from "@/lib/verify";
import { Check } from "@/components/functional/Icons";

export const metadata = buildMeta({ title: "Memberships: Skin Club and Sculpt It | Olivo Med Spa", description: "Skin Club, Emsculpt NEO Club, Sculpt It, and the Laser Hair Reduction Club at Olivo Med Spa in Logan Square, Chicago. Monthly credits and member pricing.", path: "/memberships" });

export default function Memberships() {
  return (
    <>
      <section data-hero="" className="bg-ground-2"><div className="container-x grid items-center gap-10 py-10 lg:grid-cols-2 lg:gap-16 lg:py-20">
        <div><Crumbs items={[{ name: "Home", href: "/" }, { name: "Memberships" }]} /><p className="kicker mt-6">Memberships</p><h1 className="display-xl mt-3 balance">Keep a rhythm instead of starting over.</h1><p className="lede mt-5 max-w-[50ch]">Skin, body, and laser hair reduction, each as a monthly program with a credit, member pricing, and a standing place in the calendar.</p><div className="mt-8 flex flex-wrap gap-3"><a href={site.memberships} target="_blank" rel="noopener noreferrer" className="btn btn-primary">Open the member portal</a><a href={site.sms("Hi Olivo, I would like to hear about memberships.")} className="btn btn-outline">Text us about it</a></div><Verify note={site.membershipsVerify} /></div>
        <Photo slot="memberships" fallback="light-1" className="img-frame aspect-[4/3] shadow-[var(--shadow-card-hover)]" sizes="(min-width: 64rem) 50vw, 100vw" priority />
      </div></section>
      <section className="py-20 md:py-28"><div className="container-x">
        <Stagger className="grid gap-6 lg:grid-cols-3">
          {membershipTiers.map((t, i) => (<div key={t.slug} id={t.slug} className={`card flex h-full flex-col p-8 ${i === 1 ? "!border-accent" : ""}`}><p className="kicker">{t.family}</p><h2 className="font-display mt-2 text-[1.9rem] leading-tight">{t.name}</h2><p className="mt-3 text-ink-2">{t.line}</p><p className="mt-5 text-[0.8125rem] font-semibold uppercase tracking-[0.12em] text-ink-2">Tiers</p><p className="mt-1 text-[0.9375rem]">{t.tiers.join(" · ")}</p><ul className="mt-5 flex-1 space-y-2.5 text-[0.9375rem]">{t.perks.map((p) => (<li key={p} className="flex items-start gap-3"><Check className="mt-1 h-4 w-4 shrink-0 text-accent-text" />{p}</li>))}</ul><p className="mt-5 text-[0.875rem] text-ink-2">Built around: {t.services.map((s) => getService(s)?.name).filter(Boolean).join(", ")}.</p><a href={site.memberships} target="_blank" rel="noopener noreferrer" className={`btn mt-7 w-full ${i === 1 ? "btn-primary" : "btn-outline"}`}>Join in the portal</a></div>))}
        </Stagger>
        <p className="mt-6 text-center text-[0.8125rem] text-ink-2">Monthly terms, pricing, and cancellation are shown in the member portal and at the clinic.<Verify note={membershipsVerify} /></p>
      </div></section>
      <section className="bg-ground-2 py-20"><div className="container-x grid gap-10 lg:grid-cols-2 lg:gap-16"><Reveal><p className="kicker">Financing</p><h2 className="section-title mt-3">{financing.headline}</h2><div className="prose">{financing.lines.map((l) => <p key={l.slice(0, 20)}>{l}</p>)}</div><Verify note={financing.verify} /><div className="mt-6 flex flex-wrap gap-3"><a href={site.financing} target="_blank" rel="noopener noreferrer" className="btn btn-primary">Apply through Cherry</a><Link href="/financing" className="btn btn-outline">How it works</Link></div></Reveal><Reveal delay={0.1}><Photo slot="skincare" fallback="steel-1" className="img-frame aspect-[4/3]" sizes="(min-width: 64rem) 50vw, 100vw" /></Reveal></div></section>
      <FaqList faqs={financing.faqs} title="Financing, answered" />
      <CtaBand title="Ask which membership fits." sms="Hi Olivo, I would like to hear about memberships." />
    </>
  );
}
