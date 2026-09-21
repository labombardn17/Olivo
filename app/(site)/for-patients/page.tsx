import Link from "next/link";
import { forPatients } from "@/content/patients";
import { categoryByKey, site } from "@/content/site";
import { Photo } from "@/components/site/Photo";
import { Reveal } from "@/components/shared/Reveal";
import { Stagger } from "@/components/site/Motion";
import { Crumbs, CtaBand, FaqList, Steps } from "@/components/site/Blocks";
import { JsonLd } from "@/components/site/JsonLd";
import { breadcrumbs, faqSchema } from "@/lib/schema";
import { buildMeta } from "@/lib/meta";
import { Verify } from "@/lib/verify";
import { Check } from "@/components/functional/Icons";

export const metadata = buildMeta({ title: "For Patients: First Visit, Policies, Aftercare | Olivo Med Spa", description: "What to expect at your first visit to Olivo Med Spa in Logan Square, Chicago, what to bring, clinic policies, and aftercare guidance for every treatment category.", path: "/for-patients" });

export default function ForPatients() {
  const { intro, firstVisit, firstVisitVerify, bring, policies, aftercare, aftercareNote, faqs } = forPatients;
  return (
    <>
      <JsonLd data={[faqSchema(faqs), breadcrumbs([{ name: "Home", path: "/" }, { name: "For patients", path: "/for-patients" }])]} />
      <section data-hero="" className="bg-ground-2"><div className="container-x grid items-center gap-10 py-10 lg:grid-cols-2 lg:gap-16 lg:py-20">
        <div><Crumbs items={[{ name: "Home", href: "/" }, { name: "For patients" }]} /><p className="kicker mt-6">For patients</p><h1 className="display-xl mt-3 balance">Your first visit, in plain words.</h1><p className="lede mt-5 max-w-[50ch]">{intro}</p><div className="mt-8 flex flex-wrap gap-3"><a href={site.booking} className="btn btn-primary">Book a consultation</a><a href="#aftercare" className="btn btn-outline">Aftercare</a></div></div>
        <Photo slot="visit" fallback="room-3" alt="Inside Olivo Med Spa" className="img-frame aspect-[4/3] shadow-[var(--shadow-card-hover)]" sizes="(min-width: 64rem) 50vw, 100vw" priority />
      </div></section>
      <section className="py-20 md:py-24"><div className="container-x grid gap-12 lg:grid-cols-2 lg:gap-20">
        <Reveal><Steps title="How a first visit goes" steps={firstVisit} /><p className="mt-4 text-[0.8125rem] text-ink-2"><Verify note={firstVisitVerify} />Individual plans vary.</p></Reveal>
        <Reveal delay={0.1}><h2 className="section-title">What to bring</h2><ul className="mt-8 space-y-3">{bring.map((b) => (<li key={b} className="flex items-start gap-3"><Check className="mt-1 h-4 w-4 shrink-0 text-accent-text" />{b}</li>))}</ul><div className="card-2 mt-8 p-6"><p className="font-semibold">Running late or need to move a visit?</p><p className="mt-1 text-[0.9375rem] text-ink-2">Text or call {site.phoneDisplay} as early as you can and the team will sort it out.</p></div></Reveal>
      </div></section>
      <section className="bg-ground-2 py-20 md:py-24"><div className="container-x"><Reveal className="max-w-2xl"><p className="kicker">Policies</p><h2 className="section-title mt-3">Clinic policies</h2></Reveal>
        <Stagger className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">{policies.map((p) => (<div key={p.title} className="card p-6"><h3 className="font-display text-[1.4rem] leading-tight">{p.title}</h3><ul className="mt-3 space-y-2 text-[0.9375rem] text-ink-2">{p.lines.map((l) => <li key={l}>{l}</li>)}</ul><Verify note={p.verify} /></div>))}</Stagger>
      </div></section>
      <section id="aftercare" className="py-20 md:py-24"><div className="container-x"><Reveal className="max-w-2xl"><p className="kicker">Aftercare</p><h2 className="section-title mt-3">After your treatment</h2><p className="section-sub mt-4">{aftercareNote}</p></Reveal>
        <Stagger className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">{aftercare.map((a) => (<div key={a.category} className="card flex h-full flex-col p-6"><p className="kicker">{categoryByKey(a.category).name}</p><h3 className="font-display mt-2 text-[1.35rem] leading-tight">{a.title}</h3><ul className="mt-3 flex-1 space-y-2 text-[0.9375rem] text-ink-2">{a.lines.map((l) => <li key={l} className="flex gap-3"><span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />{l}</li>)}</ul><Verify note={a.verify} /><Link href={`/treatments/${a.category}`} className="link-arrow mt-4 text-[0.875rem]">Treatments in this category</Link></div>))}</Stagger>
      </div></section>
      <FaqList faqs={faqs} title="Common questions" />
      <CtaBand title="Questions before you book?" line="Text us and a person will answer during clinic hours." sms="Hi Olivo, I have a question before booking." />
    </>
  );
}
