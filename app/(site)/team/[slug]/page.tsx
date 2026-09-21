import Link from "next/link";
import { notFound } from "next/navigation";
import { teamMembers, getMember } from "@/content/team";
import { doctor } from "@/content/clinic";
import { site } from "@/content/site";
import { Photo } from "@/components/site/Photo";
import { Reveal } from "@/components/shared/Reveal";
import { Crumbs, CtaBand } from "@/components/site/Blocks";
import { JsonLd } from "@/components/site/JsonLd";
import { breadcrumbs, physician } from "@/lib/schema";
import { buildMeta } from "@/lib/meta";
import { Verify } from "@/lib/verify";
import { Check } from "@/components/functional/Icons";

export const dynamicParams = false;
export function generateStaticParams() { return teamMembers.map((t) => ({ slug: t.slug })); }
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params; const t = getMember(slug);
  return t ? buildMeta({ title: `${t.name} | ${t.role} | Olivo Med Spa`, description: `${t.name}, ${t.role.toLowerCase()} at Olivo Med Spa in Logan Square, Chicago. ${t.short}`, path: `/team/${slug}` }) : {};
}
export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params; const t = getMember(slug);
  if (!t) notFound();
  const isDoctor = t.slug === "jacqueline-olivo-md";
  return (
    <>
      <JsonLd data={[breadcrumbs([{ name: "Home", path: "/" }, { name: "Team", path: "/team" }, { name: t.name, path: `/team/${t.slug}` }]), ...(isDoctor ? [physician()] : [])]} />
      <section data-hero="" className="bg-ground-2"><div className="container-x grid items-center gap-10 py-10 lg:grid-cols-[1fr_1.2fr] lg:gap-16 lg:py-20">
        <Reveal><Photo slot={t.slot} fallback="portrait" alt={t.name} className="img-frame aspect-[4/5] shadow-[var(--shadow-card-hover)]" sizes="(min-width: 64rem) 40vw, 100vw" priority /></Reveal>
        <div>
          <Crumbs items={[{ name: "Home", href: "/" }, { name: "Team", href: "/team" }, { name: t.name }]} />
          <p className="kicker mt-6">{t.role}</p>
          <h1 className="display-xl mt-3 balance">{t.name}</h1>
          {isDoctor && <blockquote className="font-display mt-5 text-[1.9rem] italic leading-tight">&ldquo;Aging is optional.&rdquo;</blockquote>}
          <div className="prose">{t.bio.map((p) => <p key={p.slice(0, 30)}>{p}</p>)}</div>
          {isDoctor && <ul className="mt-6 space-y-1.5 text-[0.9375rem]">{doctor.credentials.map((c) => <li key={c}>{c}</li>)}<li>{doctor.boardLine}<Verify note={doctor.boardVerify} /></li></ul>}
          <p className="kicker mt-8">Focus</p>
          <ul className="mt-3 grid gap-2 sm:grid-cols-2">{t.focus.map((f) => (<li key={f} className="flex items-start gap-3 text-[0.9375rem]"><Check className="mt-1 h-4 w-4 shrink-0 text-accent-text" />{f}</li>))}</ul>
          <Verify note={t.verify} />
          <div className="mt-8 flex flex-wrap gap-3"><a href={site.booking} className="btn btn-primary">Book with the team</a><Link href="/team" className="btn btn-outline">All team</Link></div>
        </div>
      </div></section>
      <CtaBand />
    </>
  );
}
