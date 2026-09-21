import { financing } from "@/content/offers";
import { site } from "@/content/site";
import { Crumbs, CtaBand, FaqList, Steps } from "@/components/site/Blocks";
import { Reveal } from "@/components/shared/Reveal";
import { buildMeta } from "@/lib/meta";
import { Verify } from "@/lib/verify";

export const metadata = buildMeta({ title: "Financing Through Cherry | Olivo Med Spa, Chicago", description: "Pay for treatments over time through Cherry at Olivo Med Spa in Logan Square, Chicago. Apply online in minutes. Terms are set by Cherry at application.", path: "/financing" });

export default function Financing() {
  return (
    <>
      <section className="py-12 md:py-20"><div className="container-x grid gap-12 lg:grid-cols-2 lg:gap-20">
        <div><Crumbs items={[{ name: "Home", href: "/" }, { name: "Financing" }]} /><p className="kicker mt-8">Financing</p><h1 className="section-title mt-3 balance">{financing.headline}</h1><div className="prose">{financing.lines.map((l) => <p key={l.slice(0, 20)}>{l}</p>)}</div><Verify note={financing.verify} /><div className="mt-8 flex flex-wrap gap-3"><a href={site.financing} target="_blank" rel="noopener noreferrer" className="btn btn-primary">Apply through Cherry</a><a href={site.phoneTel} className="btn btn-outline">Call {site.phoneDisplay}</a></div><p className="mt-4 text-[0.8125rem] text-ink-2">Olivo Med Spa does not set financing terms. Rates, approval, and plan lengths are determined by Cherry.</p></div>
        <Reveal delay={0.1} className="card p-8"><Steps title="How it works" steps={[{ step: "Apply", line: "Use the Cherry link before your visit or at the front desk. It takes a few minutes." }, { step: "See your options", line: "Cherry shows the plans you qualify for." }, { step: "Choose at checkout", line: "Pick a plan when you pay for a treatment or package." }, { step: "Pay Cherry over time", line: "Payments go to Cherry on the schedule you chose." }]} /></Reveal>
      </div></section>
      <FaqList faqs={financing.faqs} title="Financing, answered" />
      <CtaBand />
    </>
  );
}
