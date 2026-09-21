import Link from "next/link";
import { Photo } from "@/components/site/Photo";
import { Reveal } from "@/components/shared/Reveal";
import { Stagger } from "@/components/site/Motion";
import { Crumbs, CtaBand, SectionHead } from "@/components/site/Blocks";
import { DeviceMarquee, ProofStrip } from "@/components/site/home/HomeSections";
import { teamMembers } from "@/content/team";
import { firstVisit, firstVisitVerify } from "@/content/clinic";
import { site } from "@/content/site";
import { ui, type Lang } from "@/content/ui";
import { href } from "@/lib/i18n";
import { localizeMember, patientsFor } from "@/lib/localize";
import { buildMeta } from "@/lib/meta";
import { Verify } from "@/lib/verify";
import { Arrow } from "@/components/functional/Icons";

export const aboutMeta = (lang: Lang) => buildMeta(lang === "es"
  ? { title: "Nosotros | Olivo Med Spa, dirigido por una médica desde 2013", description: "Clínica de estética en Logan Square, Chicago, propiedad de una médica y dirigida por ella, la Dra. Jacqueline Olivo, desde 2013, con las plataformas completas de BTL y Alma.", path: "/about", lang }
  : { title: "About Olivo Med Spa | Physician-Led Since 2013", description: "A physician owned and led aesthetics clinic in Logan Square, Chicago, founded in 2013 by Jacqueline Olivo, MD, with the full BTL and Alma platforms on site.", path: "/about", lang });

export function AboutPage({ lang }: { lang: Lang }) {
  const t = ui(lang);
  const a = t.pages.about;
  const steps = lang === "es" ? patientsFor(lang).forPatients.firstVisit : firstVisit;
  return (
    <>
      <section data-hero="" className="bg-ground-2"><div className="container-x grid items-center gap-10 py-10 lg:grid-cols-2 lg:gap-16 lg:py-20">
        <div><Crumbs lang={lang} items={[{ name: t.blocks.home, href: "/" }, { name: a.crumb }]} /><p className="kicker mt-6">{a.kicker}</p><h1 className="display-xl mt-3 balance">{a.title}</h1><p className="lede mt-5 max-w-[50ch]">{a.lede}</p></div>
        <Photo slot="about" fallback="room-2" alt="Olivo Med Spa" lang={lang} className="img-frame aspect-[4/3] shadow-[var(--shadow-card-hover)]" />
      </div></section>
      <DeviceMarquee lang={lang} />
      <ProofStrip lang={lang} />
      <section className="bg-ground-2 py-20 md:py-28"><div className="container-x grid gap-12 lg:grid-cols-2 lg:gap-20">
        <Reveal><p className="kicker">{a.howKicker}</p><h2 className="section-title mt-3 balance">{a.howTitle}</h2><div className="prose">{a.how.map((x, i) => <p key={i}>{x}{i === 2 && <Verify note="Who performs which treatments: clinic to confirm" />}</p>)}</div></Reveal>
        <Reveal delay={0.1}><h2 className="section-title">{a.firstVisit}</h2><ol className="mt-8 space-y-5">{steps.map((s, i) => (<li key={s.step} className="flex gap-4"><span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-accent-fill font-display text-[1.1rem] text-accent-ink">{i + 1}</span><div><p className="font-semibold">{s.step}</p><p className="text-[0.9375rem] text-ink-2">{s.line}</p></div></li>))}</ol><p className="mt-4 text-[0.8125rem] text-ink-2"><Verify note={firstVisitVerify} />{t.blocks.resultsVary}</p></Reveal>
      </div></section>
      <section className="py-20 md:py-28"><div className="container-x">
        <SectionHead kicker={a.teamKicker} title={a.teamTitle} sub={a.teamSub} />
        <Stagger as="ul" className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">{teamMembers.map((raw) => { const m = localizeMember(raw, lang); return (<li key={m.slug}><Link href={href(lang, `/team/${m.slug}`)} className="group card card-link lift block overflow-hidden"><Photo slot={m.slot} fallback="portrait" alt={m.name} lang={lang} className="aspect-[4/5]" /><div className="p-5"><h3 className="font-display text-[1.35rem] leading-tight">{m.name}</h3><p className="mt-1 text-[0.875rem] text-ink-2">{m.role}</p><span className="link-arrow mt-3 text-[0.8125rem]">{a.profile} <Arrow /></span></div></Link></li>); })}</Stagger>
      </div></section>
      <CtaBand title={a.cta} line={a.ctaLine} lang={lang} />
      <span hidden>{site.name}</span>
    </>
  );
}
