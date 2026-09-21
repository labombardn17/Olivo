import Link from "next/link";
import { categories } from "@/content/site";
import { services, servicesIn } from "@/content/services";
import { concerns } from "@/content/concerns";
import { areas } from "@/content/areas";
import { posts } from "@/content/blog";
import { teamMembers } from "@/content/team";
import { Crumbs } from "@/components/site/Blocks";
import { buildMeta } from "@/lib/meta";

export const metadata = buildMeta({ title: "Site Map | Olivo Med Spa", description: "Every page on the Olivo Med Spa site: treatments by category, concerns, neighborhoods served, team, memberships, journal, and patient resources.", path: "/site-map" });

const Col = ({ title, items }: { title: string; items: [string, string][] }) => (
  <div><h2 className="font-display text-[1.5rem]">{title}</h2><ul className="mt-3 space-y-1.5 text-[0.9375rem]">{items.map(([h, l]) => <li key={h}><Link href={h} className="hover:underline underline-offset-4">{l}</Link></li>)}</ul></div>
);

export default function SiteMap() {
  const clinic: [string, string][] = [["/", "Home"], ["/es", "Inicio (español)"], ["/es/tratamientos", "Tratamientos (español)"], ["/quiz", "Treatment quiz"], ["/book", "Book"], ["/about", "About"], ["/team", "Team"], ...teamMembers.map((t) => [`/team/${t.slug}`, t.name] as [string, string]), ["/for-patients", "For patients"], ["/memberships", "Memberships"], ["/specials", "Specials"], ["/gift-cards", "Gift cards"], ["/financing", "Financing"], ["/skincare", "Skincare"], ["/results", "Results"], ["/reviews", "Reviews"], ["/visit", "Visit"], ["/contact", "Contact"], ["/privacy", "Privacy"], ["/terms", "Terms"], ["/accessibility", "Accessibility"]];
  return (
    <section className="py-12 md:py-20"><div className="container-x">
      <Crumbs items={[{ name: "Home", href: "/" }, { name: "Site map" }]} />
      <h1 className="section-title mt-8">Every page, one list.</h1>
      <p className="lede mt-3">{services.length} treatments, {concerns.length} concerns, {areas.length} neighborhoods, {posts.length} journal posts, and the clinic pages.</p>
      <div className="mt-12 grid gap-10 md:grid-cols-2 lg:grid-cols-4">
        <Col title="Clinic" items={clinic} />
        <div className="space-y-8">{categories.map((c) => <Col key={c.key} title={c.name} items={[[`/treatments/${c.key}`, `All ${c.name.toLowerCase()}`], ...servicesIn(c.key).map((s) => [`/treatments/${s.slug}`, s.name] as [string, string])]} />)}</div>
        <div className="space-y-8"><Col title="Concerns" items={[["/concerns", "All concerns"], ...concerns.map((c) => [`/concerns/${c.slug}`, c.name] as [string, string])]} /><Col title="Neighborhoods" items={areas.map((a) => [`/med-spa/${a.slug}`, a.name] as [string, string])} /></div>
        <Col title="Journal" items={[["/blog", "All posts"], ...[...posts].sort((a, b) => b.date.localeCompare(a.date)).map((p) => [`/blog/${p.slug}`, p.title] as [string, string])]} />
      </div>
    </div></section>
  );
}
