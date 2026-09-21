import Link from "next/link";
import { categories, site } from "@/content/site";
import { flagshipSlugs } from "@/content/services";
import { team } from "@/content/clinic";
import { Verify } from "@/lib/verify";
import { Wordmark } from "./Wordmark";

const flagshipNames: Record<string, string> = { "emsculpt-neo": "Emsculpt Neo", emface: "Emface", "exion-body": "Exion", emsella: "Emsella", "opus-plasma": "Opus Plasma", "co2-fractional-laser": "CO2 fractional laser", miradry: "Miradry", hydrafacial: "Hydrafacial", "exion-rf-microneedling": "Exion RF microneedling" };
const areas = ["logan-square", "bucktown", "wicker-park", "lincoln-park", "avondale", "humboldt-park", "ukrainian-village", "roscoe-village", "irving-park", "old-town", "lakeview", "river-north"];
const title = (s: string) => s.split("-").map((w) => w[0]!.toUpperCase() + w.slice(1)).join(" ");

export function SiteFooter() {
  return (
    <footer data-footer="" className="inverse border-t border-rule" aria-label="Site footer">
      <div className="container-x grid gap-10 py-16 md:grid-cols-12 md:py-20">
        <div className="md:col-span-4">
          <Wordmark />
          <p className="mt-4 max-w-[34ch] text-[0.9375rem] leading-relaxed text-ink-2">Physician owned and led since {site.founded}. The full BTL and Alma platforms under one roof in Logan Square, Chicago.</p>
          <address className="mt-5 not-italic text-[0.9375rem] leading-relaxed">
            <p>{site.address.line1}<br />{site.address.city}, {site.address.state} {site.address.zip}</p>
            <p className="mt-2"><a href={site.phoneTel} className="font-semibold hover:underline underline-offset-4">{site.phoneDisplay}</a> <span className="text-ink-2">call or text</span><Verify note={site.smsVerify} /></p>
          </address>
          <dl className="mt-4 text-[0.875rem] text-ink-2">
            {site.hours.map((h) => (<div key={h.days} className="flex justify-between gap-4 border-b border-rule py-1.5 max-w-[20rem]"><dt>{h.days}</dt><dd>{"closed" in h && h.closed ? "Closed" : `${h.open} to ${h.close}`}</dd></div>))}
          </dl>
          <ul className="mt-5 flex flex-wrap gap-x-4 gap-y-1 text-[0.875rem]">
            {Object.entries(site.social).map(([k, v]) => (<li key={k}><a href={v} target="_blank" rel="noopener noreferrer" className="capitalize hover:underline underline-offset-4">{k}</a></li>))}
            <li><a href={site.mapsUrl} target="_blank" rel="noopener noreferrer" className="hover:underline underline-offset-4">Google</a></li>
          </ul>
        </div>
        <nav className="md:col-span-2" aria-label="Treatments"><h2 className="kicker">Treatments</h2><ul className="mt-4 space-y-2 text-[0.9375rem]">{categories.map((c) => (<li key={c.key}><Link href={`/treatments/${c.key}`} className="hover:underline underline-offset-4">{c.name}</Link></li>))}<li><Link href="/concerns" className="hover:underline underline-offset-4">By concern</Link></li><li><Link href="/quiz" className="hover:underline underline-offset-4">Treatment quiz</Link></li></ul></nav>
        <nav className="md:col-span-2" aria-label="Technology"><h2 className="kicker">Technology</h2><ul className="mt-4 space-y-2 text-[0.9375rem]">{flagshipSlugs.map((s) => (<li key={s}><Link href={`/treatments/${s}`} className="hover:underline underline-offset-4">{flagshipNames[s]}</Link></li>))}</ul></nav>
        <nav className="md:col-span-2" aria-label="Clinic"><h2 className="kicker">Clinic</h2><ul className="mt-4 space-y-2 text-[0.9375rem]">{[["/about", "About"], ["/team", "Team"], ["/for-patients", "For patients"], ["/memberships", "Memberships"], ["/specials", "Specials"], ["/gift-cards", "Gift cards"], ["/financing", "Financing"], ["/skincare", "Skincare"], ["/treatments/for-men", "For men"], ["/results", "Results"], ["/reviews", "Reviews"], ["/blog", "Journal"], ["/visit", "Visit and contact"], ["/es", "Español"]].map(([h, l]) => (<li key={h}><Link href={h!} className="hover:underline underline-offset-4">{l}</Link></li>))}</ul></nav>
        <div className="md:col-span-2"><h2 className="kicker">Team</h2><ul className="mt-4 space-y-2 text-[0.9375rem]">{team.map((t) => (<li key={t.name}><Link href={`/team/${t.name === "Jacqueline Olivo, MD" ? "jacqueline-olivo-md" : t.name.split(",")[0]!.toLowerCase().replace(/\s+/g, "-")}`} className="hover:underline underline-offset-4">{t.name}</Link></li>))}</ul>
          <h2 className="kicker mt-8">Book and pay</h2><ul className="mt-4 space-y-2 text-[0.9375rem]"><li><a href={site.booking} target="_blank" rel="noopener noreferrer" className="hover:underline underline-offset-4">Book on Vagaro</a></li><li><a href={site.financing} target="_blank" rel="noopener noreferrer" className="hover:underline underline-offset-4">Financing through Cherry</a><Verify note={site.financingVerify} /></li><li><a href={site.memberships} target="_blank" rel="noopener noreferrer" className="hover:underline underline-offset-4">Member portal</a><Verify note={site.membershipsVerify} /></li></ul></div>
      </div>
      <div className="container-x border-t border-rule py-6 text-[0.8125rem] text-ink-2">
        <p className="kicker !text-ink-2">Serving</p>
        <ul className="mt-1 flex flex-wrap gap-x-2">{areas.map((a) => (<li key={a}><Link href={`/med-spa/${a}`} className="inline-block px-1.5 py-2 hover:underline underline-offset-4">{title(a)}</Link></li>))}</ul>
      </div>
      <div className="container-x border-t border-rule py-8 text-[0.8125rem] leading-relaxed text-ink-2 grid gap-3 md:grid-cols-2">
        <div><p>We want everyone to be able to use this site. If something is hard to reach, call us and we will help.</p><p className="mt-2"><Link href="/privacy" className="hover:underline">Privacy</Link> · <Link href="/terms" className="hover:underline">Terms</Link> · <Link href="/accessibility" className="hover:underline">Accessibility</Link></p></div>
        <div className="md:text-right"><p>Medical director: Jacqueline Olivo, MD.</p><p>All product names are trademarks of their respective owners.</p><p>Individual results vary. Candidacy and expectations are set at consultation.</p><p className="mt-2">© {new Date().getFullYear()} {site.legalName}</p></div>
      </div>
    </footer>
  );
}
