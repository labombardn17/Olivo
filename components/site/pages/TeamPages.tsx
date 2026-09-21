import Link from "next/link";
import { teamMembers, getMember } from "@/content/team";
import { doctor } from "@/content/clinic";
import { site } from "@/content/site";
import { ui, type Lang } from "@/content/ui";
import { href } from "@/lib/i18n";
import { doctorFor, localizeMember } from "@/lib/localize";
import { Photo } from "@/components/site/Photo";
import { Reveal } from "@/components/shared/Reveal";
import { Stagger } from "@/components/site/Motion";
import { Crumbs, CtaBand } from "@/components/site/Blocks";
import { JsonLd } from "@/components/site/JsonLd";
import { breadcrumbs, physician } from "@/lib/schema";
import { buildMeta } from "@/lib/meta";
import { Verify } from "@/lib/verify";
import { Arrow, Check } from "@/components/functional/Icons";

export const teamMeta = (lang: Lang) => buildMeta(lang === "es"
  ? { title: "Nuestro equipo | Olivo Med Spa, Logan Square, Chicago", description: "La Dra. Jacqueline Olivo y el equipo de estética con licencia de Olivo Med Spa en Logan Square, Chicago. Propiedad de una médica y dirigido por ella desde 2013.", path: "/team", lang }
  : { title: "Meet the Team | Olivo Med Spa, Logan Square Chicago", description: "Jacqueline Olivo, MD and the licensed esthetics team at Olivo Med Spa in Logan Square, Chicago. Physician owned and led since 2013.", path: "/team", lang });

export function TeamPage({ lang }: { lang: Lang }) {
  const t = ui(lang);
  const p = t.pages.team;
  return (
    <>
      <section className="py-12 md:py-20"><div className="container-x">
        <Crumbs lang={lang} items={[{ name: t.blocks.home, href: "/" }, { name: p.crumb }]} />
        <p className="kicker mt-8">{p.kicker}</p>
        <h1 className="section-title mt-3 balance">{p.title}</h1>
        <Stagger as="ul" className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">{teamMembers.map((raw) => { const m = localizeMember(raw, lang); return (<li key={m.slug}><Link href={href(lang, `/team/${m.slug}`)} className="group card card-link lift block overflow-hidden"><Photo slot={m.slot} fallback="portrait" alt={m.name} lang={lang} className="aspect-[4/5]" /><div className="p-5"><h2 className="font-display text-[1.35rem] leading-tight">{m.name}</h2><p className="mt-1 text-[0.875rem] text-ink-2">{m.role}</p><p className="mt-2 text-[0.9rem] text-ink-2">{m.short}</p><span className="link-arrow mt-3 text-[0.8125rem]">{t.pages.about.profile} <Arrow /></span></div></Link></li>); })}</Stagger>
      </div></section>
      <CtaBand lang={lang} />
    </>
  );
}

export const memberParams = () => teamMembers.map((m) => ({ slug: m.slug }));

export const memberMeta = (slug: string, lang: Lang) => {
  const raw = getMember(slug);
  if (!raw) return {};
  const m = localizeMember(raw, lang);
  const desc = lang === "es" ? `${m.name}, ${m.role.toLowerCase()} en Olivo Med Spa en Logan Square, Chicago. ${m.short}` : `${m.name}, ${m.role.toLowerCase()} at Olivo Med Spa in Logan Square, Chicago. ${m.short}`;
  return buildMeta({ title: `${m.name} | Olivo Med Spa`, description: desc.slice(0, 158), path: `/team/${slug}`, lang });
};

export function MemberPage({ slug, lang }: { slug: string; lang: Lang }) {
  const t = ui(lang);
  const p = t.pages.team;
  const raw = getMember(slug);
  if (!raw) return null;
  const m = localizeMember(raw, lang);
  const isDoctor = m.slug === "jacqueline-olivo-md";
  const d = doctorFor(lang);
  const L = (x: string) => href(lang, x);
  return (
    <>
      <JsonLd data={[breadcrumbs([{ name: t.blocks.home, path: L("/") }, { name: p.crumb, path: L("/team") }, { name: m.name, path: L(`/team/${m.slug}`) }]), ...(isDoctor ? [physician()] : [])]} />
      <section data-hero="" className="bg-ground-2"><div className="container-x grid items-center gap-10 py-10 lg:grid-cols-[1fr_1.2fr] lg:gap-16 lg:py-20">
        <Reveal><Photo slot={m.slot} fallback="portrait" alt={m.name} lang={lang} className="img-frame aspect-[4/5] shadow-[var(--shadow-card-hover)]" /></Reveal>
        <div>
          <Crumbs lang={lang} items={[{ name: t.blocks.home, href: "/" }, { name: p.crumb, href: "/team" }, { name: m.name }]} />
          <p className="kicker mt-6">{m.role}</p>
          <h1 className="display-xl mt-3 balance">{m.name}</h1>
          {isDoctor && <blockquote className="font-display mt-5 text-[1.9rem] italic leading-tight">&ldquo;{t.home.quote}&rdquo;</blockquote>}
          <div className="prose">{m.bio.map((x) => <p key={x.slice(0, 30)}>{x}</p>)}</div>
          {isDoctor && <ul className="mt-6 space-y-1.5 text-[0.9375rem]">{d.credentials.map((c) => <li key={c}>{c}</li>)}<li>{d.boardLine}<Verify note={doctor.boardVerify} /></li></ul>}
          <p className="kicker mt-8">{p.focus}</p>
          <ul className="mt-3 grid gap-2 sm:grid-cols-2">{m.focus.map((f) => (<li key={f} className="flex items-start gap-3 text-[0.9375rem]"><Check className="mt-1 h-4 w-4 shrink-0 text-accent-text" />{f}</li>))}</ul>
          <Verify note={m.verify} />
          <div className="mt-8 flex flex-wrap gap-3"><a href={L(site.booking)} className="btn btn-primary">{p.bookWith}</a><Link href={L("/team")} className="btn btn-outline">{p.all}</Link></div>
        </div>
      </div></section>
      <CtaBand lang={lang} />
    </>
  );
}
