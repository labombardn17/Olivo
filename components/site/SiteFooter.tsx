import Link from "next/link";
import { categories, site } from "@/content/site";
import { flagshipSlugs } from "@/content/services";
import { teamMembers } from "@/content/team";
import { areas } from "@/content/areas";
import { ui, type Lang } from "@/content/ui";
import { href } from "@/lib/i18n";
import { localizeCategory } from "@/lib/localize";
import { Verify } from "@/lib/verify";
import { Wordmark } from "./Wordmark";

const flagshipNames: Record<string, string> = { "emsculpt-neo": "Emsculpt Neo", emface: "Emface", "exion-body": "Exion", emsella: "Emsella", "opus-plasma": "Opus Plasma", "co2-fractional-laser": "CO2", miradry: "Miradry", hydrafacial: "Hydrafacial", "exion-rf-microneedling": "Exion RF microneedling" };

export function SiteFooter({ lang = "en" }: { lang?: Lang }) {
  const t = ui(lang);
  const L = (p: string) => href(lang, p);
  const cats = categories.map((c) => localizeCategory(c, lang));
  return (
    <footer data-footer="" className="inverse border-t border-rule pb-24 md:pb-0" aria-label="Site footer">
      <div className="container-x grid gap-10 py-16 md:grid-cols-12 md:py-20">
        <div className="md:col-span-4">
          <Wordmark href={L("/")} />
          <p className="mt-4 max-w-[34ch] text-[0.9375rem] leading-relaxed text-ink-2">{t.footer.blurb}</p>
          <address className="mt-5 not-italic text-[0.9375rem] leading-relaxed">
            <p>{site.address.line1}<br />{site.address.city}, {site.address.state} {site.address.zip}</p>
            <p className="mt-2"><a href={site.phoneTel} className="font-semibold hover:underline underline-offset-4">{site.phoneDisplay}</a> <span className="text-ink-2">{t.nav.callOrText}</span><Verify note={site.smsVerify} /></p>
          </address>
          <dl className="mt-4 text-[0.875rem] text-ink-2">
            {site.hours.map((h, i) => (<div key={h.days} className="flex justify-between gap-4 border-b border-rule py-1.5 max-w-[20rem]"><dt>{lang === "es" ? ["Lunes a viernes", "Sábado", "Domingo"][i] : h.days}</dt><dd>{"closed" in h && h.closed ? t.footer.closed : `${h.open} ${t.footer.to} ${h.close}`}</dd></div>))}
          </dl>
          <ul className="mt-5 flex flex-wrap gap-x-4 gap-y-1 text-[0.875rem]">
            {Object.entries(site.social).map(([k, v]) => (<li key={k}><a href={v} target="_blank" rel="noopener noreferrer" className="capitalize hover:underline underline-offset-4">{k}</a></li>))}
            <li><a href={site.mapsUrl} target="_blank" rel="noopener noreferrer" className="hover:underline underline-offset-4">Google</a></li>
          </ul>
        </div>
        <nav className="md:col-span-2" aria-label={t.footer.treatments}><h2 className="kicker">{t.footer.treatments}</h2><ul className="mt-4 space-y-2 text-[0.9375rem]">{cats.map((c) => (<li key={c.key}><Link href={L(`/treatments/${c.key}`)} className="hover:underline underline-offset-4">{c.name}</Link></li>))}<li><Link href={L("/concerns")} className="hover:underline underline-offset-4">{t.footer.byConcern}</Link></li><li><Link href={L("/quiz")} className="hover:underline underline-offset-4">{t.nav.quiz}</Link></li></ul></nav>
        <nav className="md:col-span-2" aria-label={t.footer.technology}><h2 className="kicker">{t.footer.technology}</h2><ul className="mt-4 space-y-2 text-[0.9375rem]">{flagshipSlugs.map((s) => (<li key={s}><Link href={L(`/treatments/${s}`)} className="hover:underline underline-offset-4">{flagshipNames[s]}</Link></li>))}</ul></nav>
        <nav className="md:col-span-2" aria-label={t.footer.clinic}><h2 className="kicker">{t.footer.clinic}</h2><ul className="mt-4 space-y-2 text-[0.9375rem]">{t.footer.links.map(([h, l]) => (<li key={h}><Link href={L(h)} className="hover:underline underline-offset-4">{l}</Link></li>))}</ul></nav>
        <div className="md:col-span-2"><h2 className="kicker">{t.footer.team}</h2><ul className="mt-4 space-y-2 text-[0.9375rem]">{teamMembers.map((m) => (<li key={m.slug}><Link href={L(`/team/${m.slug}`)} className="hover:underline underline-offset-4">{m.name}</Link></li>))}</ul>
          <h2 className="kicker mt-8">{t.footer.bookAndPay}</h2><ul className="mt-4 space-y-2 text-[0.9375rem]"><li><Link href={L("/book")} className="hover:underline underline-offset-4">{t.footer.bookOnline}</Link></li><li><a href={site.financing} target="_blank" rel="noopener noreferrer" className="hover:underline underline-offset-4">{t.footer.financing}</a><Verify note={site.financingVerify} /></li><li><a href={site.memberships} target="_blank" rel="noopener noreferrer" className="hover:underline underline-offset-4">{t.footer.portal}</a><Verify note={site.membershipsVerify} /></li></ul></div>
      </div>
      <div className="container-x border-t border-rule py-6 text-[0.8125rem] text-ink-2">
        <p className="kicker !text-ink-2">{t.footer.serving}</p>
        <ul className="mt-1 flex flex-wrap gap-x-2">{areas.map((a) => (<li key={a.slug}><Link href={L(`/med-spa/${a.slug}`)} className="inline-block px-1.5 py-2 hover:underline underline-offset-4">{a.name}</Link></li>))}</ul>
      </div>
      <div className="container-x border-t border-rule py-8 text-[0.8125rem] leading-relaxed text-ink-2 grid gap-3 md:grid-cols-2">
        <div><p>{t.footer.a11y}</p><p className="mt-2"><Link href={L("/privacy")} className="hover:underline">{t.footer.privacy}</Link> · <Link href={L("/terms")} className="hover:underline">{t.footer.terms}</Link> · <Link href={L("/accessibility")} className="hover:underline">{t.footer.accessibility}</Link> · <Link href={L("/site-map")} className="hover:underline">{t.footer.siteMap}</Link></p></div>
        <div className="md:text-right"><p>{t.footer.director}</p><p>{t.footer.trademarks}</p><p>{t.footer.results}</p><p className="mt-2">© {new Date().getFullYear()} {site.legalName}</p></div>
      </div>
    </footer>
  );
}
