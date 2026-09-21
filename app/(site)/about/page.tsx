import Link from "next/link";
import { Photo } from "@/components/site/Photo";
import { Reveal } from "@/components/shared/Reveal";
import { Stagger } from "@/components/site/Motion";
import { Crumbs, CtaBand, SectionHead } from "@/components/site/Blocks";
import { DeviceMarquee, ProofStrip } from "@/components/site/home/HomeSections";
import { teamMembers } from "@/content/team";
import { firstVisit, firstVisitVerify } from "@/content/clinic";
import { buildMeta } from "@/lib/meta";
import { Verify } from "@/lib/verify";
import { Arrow } from "@/components/functional/Icons";

export const metadata = buildMeta({ title: "About Olivo Med Spa | Physician-Led Since 2013 | Logan Square", description: "Olivo Med Spa is a physician owned and led aesthetics clinic in Logan Square, Chicago, founded in 2013 by Jacqueline Olivo, MD, with the full BTL and Alma platforms under one roof.", path: "/about" });

export default function About() {
  return (
    <>
      <section data-hero="" className="bg-ground-2"><div className="container-x grid items-center gap-10 py-10 lg:grid-cols-2 lg:gap-16 lg:py-20">
        <div><Crumbs items={[{ name: "Home", href: "/" }, { name: "About" }]} /><p className="kicker mt-6">About the clinic</p><h1 className="display-xl mt-3 balance">A physician's clinic, not a franchise.</h1><p className="lede mt-5 max-w-[50ch]">Olivo Med Spa opened on West Fullerton in 2013. Dr. Jacqueline Olivo still writes the plans, chooses the technology, and sees patients herself. That is the whole idea.</p></div>
        <Photo slot="about" fallback="room-2" alt="Inside Olivo Med Spa" className="img-frame aspect-[4/3] shadow-[var(--shadow-card-hover)]" sizes="(min-width: 64rem) 50vw, 100vw" priority />
      </div></section>
      <DeviceMarquee />
      <ProofStrip />
      <section className="bg-ground-2 py-20 md:py-28"><div className="container-x grid gap-12 lg:grid-cols-2 lg:gap-20">
        <Reveal><p className="kicker">How we work</p><h2 className="section-title mt-3 balance">Match the treatment to the person, not the person to a menu.</h2><div className="prose"><p>Most clinics carry two or three devices and steer everyone toward them. Olivo carries the full BTL and Alma platforms plus CO2, Miradry, and Hydrafacial, so the plan can start with what you want to change rather than what happens to be in the room.</p><p>Every plan begins with a consultation. You leave with a written plan in plain words: what we recommend, what it involves, what it can and cannot do, and what it costs. Nothing is booked until you have read it.</p><p>Treatments are performed by Dr. Olivo and her licensed team under her direction as medical director.<Verify note="Who performs which treatments: clinic to confirm" /></p></div></Reveal>
        <Reveal delay={0.1}><h2 className="section-title">Your first visit</h2><ol className="mt-8 space-y-5">{firstVisit.map((s, i) => (<li key={s.step} className="flex gap-4"><span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-accent-fill font-display text-[1.1rem] text-accent-ink">{i + 1}</span><div><p className="font-semibold">{s.step}</p><p className="text-[0.9375rem] text-ink-2">{s.line}</p></div></li>))}</ol><p className="mt-4 text-[0.8125rem] text-ink-2"><Verify note={firstVisitVerify} />Individual results vary.</p></Reveal>
      </div></section>
      <section className="py-20 md:py-28"><div className="container-x">
        <SectionHead kicker="The team" title="Small by design." sub="A physician, a senior lead aesthetician, and a licensed team who will know your name by the second visit." />
        <Stagger as="ul" className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">{teamMembers.map((t) => (<li key={t.slug}><Link href={`/team/${t.slug}`} className="group card card-link lift block overflow-hidden"><Photo slot={t.slot} fallback="portrait" alt={t.name} className="aspect-[4/5]" imgClassName="transition-transform duration-[1200ms] group-hover:scale-[1.04]" sizes="(min-width: 64rem) 25vw, 50vw" /><div className="p-5"><h3 className="font-display text-[1.35rem] leading-tight">{t.name}</h3><p className="mt-1 text-[0.875rem] text-ink-2">{t.role}</p><span className="link-arrow mt-3 text-[0.8125rem]">Profile <Arrow /></span></div></Link></li>))}</Stagger>
      </div></section>
      <CtaBand title="Come see the clinic." line="Book a consultation, or text us with a question first." />
    </>
  );
}
