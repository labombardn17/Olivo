import Link from "next/link";
import { Photo } from "@/components/site/Photo";
import { Stagger } from "@/components/site/Motion";
import { Crumbs, CtaBand } from "@/components/site/Blocks";
import { teamMembers } from "@/content/team";
import { buildMeta } from "@/lib/meta";
import { Arrow } from "@/components/functional/Icons";

export const metadata = buildMeta({ title: "Meet the Team | Olivo Med Spa, Logan Square Chicago", description: "Jacqueline Olivo, MD and the licensed esthetics team at Olivo Med Spa in Logan Square, Chicago. Physician owned and led since 2013.", path: "/team" });

export default function Team() {
  return (
    <>
      <section className="py-12 md:py-20"><div className="container-x">
        <Crumbs items={[{ name: "Home", href: "/" }, { name: "Team" }]} />
        <p className="kicker mt-8">The team</p>
        <h1 className="section-title mt-3 balance">The people you will actually see.</h1>
        <Stagger as="ul" className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">{teamMembers.map((t) => (<li key={t.slug}><Link href={`/team/${t.slug}`} className="group card card-link lift block overflow-hidden"><Photo slot={t.slot} fallback="portrait" alt={t.name} className="aspect-[4/5]" imgClassName="transition-transform duration-[1200ms] group-hover:scale-[1.04]" sizes="(min-width: 64rem) 25vw, 50vw" /><div className="p-5"><h2 className="font-display text-[1.35rem] leading-tight">{t.name}</h2><p className="mt-1 text-[0.875rem] text-ink-2">{t.role}</p><p className="mt-2 text-[0.9rem] text-ink-2">{t.short}</p><span className="link-arrow mt-3 text-[0.8125rem]">Profile <Arrow /></span></div></Link></li>))}</Stagger>
      </div></section>
      <CtaBand />
    </>
  );
}
