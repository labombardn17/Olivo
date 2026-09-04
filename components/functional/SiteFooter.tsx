import { clinic, devices, featured, footerPolicies, fullMenu, team, teamRoleVerify } from "@/content/olivo";
import { Verify } from "@/lib/verify";

/** Footer: services, technology, team, book and pay, policies, accessibility, medical director, trademarks. */
export function SiteFooter({ wordmark }: { wordmark?: React.ReactNode }) {
  return (
    <footer data-footer="" className="inverse border-t border-rule" aria-label="Site footer">
      <div className="container-x grid gap-10 py-16 md:grid-cols-12 md:py-20">
        <div className="md:col-span-4">
          {wordmark ?? <span className="font-display text-2xl">{clinic.wordmark}</span>}
          <p className="mt-4 max-w-[36ch] text-[0.9375rem] leading-relaxed text-ink-2">Physician owned and led since {clinic.founded}. The full BTL and Alma platforms under one roof in Logan Square.</p>
          <p className="mt-4 text-[0.9375rem] text-ink-2">{clinic.address.line1}<br />{clinic.address.city}, {clinic.address.state} {clinic.address.zip}</p>
          <a href={clinic.phoneTel} className="mt-2 inline-block py-1 font-semibold">{clinic.phoneDisplay}</a>
          <p className="mt-2 text-[0.875rem] text-ink-2">{clinic.hours.placeholder}<Verify note={clinic.hours.verify} /></p>
        </div>
        <nav className="md:col-span-2" aria-label="Treatments">
          <h2 className="text-[0.75rem] font-semibold uppercase tracking-[0.14em] text-ink-2">Treatments</h2>
          <ul className="mt-4 space-y-2 text-[0.9375rem]">
            {featured.map((f) => <li key={f.slug}><a href="#treatments" className="hover:underline underline-offset-4">{f.title}</a></li>)}
          </ul>
        </nav>
        <nav className="md:col-span-2" aria-label="Technology">
          <h2 className="text-[0.75rem] font-semibold uppercase tracking-[0.14em] text-ink-2">Technology</h2>
          <ul className="mt-4 space-y-2 text-[0.9375rem]">
            {devices.map((d) => <li key={d.slug}><a href="#technology" className="hover:underline underline-offset-4">{d.name}</a></li>)}
          </ul>
        </nav>
        <div className="md:col-span-2">
          <h2 className="text-[0.75rem] font-semibold uppercase tracking-[0.14em] text-ink-2">Team</h2>
          <ul className="mt-4 space-y-2 text-[0.9375rem]">
            {team.map((t) => <li key={t.name}>{t.name}<span className="block text-[0.8125rem] text-ink-2">{t.role}</span></li>)}
            <li><Verify note={teamRoleVerify} /></li>
          </ul>
        </div>
        <div className="md:col-span-2">
          <h2 className="text-[0.75rem] font-semibold uppercase tracking-[0.14em] text-ink-2">Book and pay</h2>
          <ul className="mt-4 space-y-2 text-[0.9375rem]">
            <li><a href={clinic.booking} target="_blank" rel="noopener noreferrer" className="hover:underline underline-offset-4">Book on Vagaro</a></li>
            <li>{clinic.financing.line}</li>
            <li><a href="#follow" className="hover:underline underline-offset-4">Instagram {clinic.instagram.handle}</a><Verify note={clinic.instagram.verify} /></li>
          </ul>
          <h2 className="mt-8 text-[0.75rem] font-semibold uppercase tracking-[0.14em] text-ink-2">Policies</h2>
          <ul className="mt-4 space-y-2 text-[0.9375rem]">
            {footerPolicies.map((p) => <li key={p}><a href="#" className="hover:underline underline-offset-4">{p}</a></li>)}
          </ul>
        </div>
      </div>
      <div className="container-x border-t border-rule py-8 text-[0.8125rem] leading-relaxed text-ink-2">
        <details className="mb-4">
          <summary className="cursor-pointer font-semibold">Full treatment menu</summary>
          <ul className="mt-3 columns-2 gap-6 sm:columns-3 lg:columns-4">
            {fullMenu.map((m) => <li key={m.name}>{m.name}{m.verify && <Verify note={m.verify} />}</li>)}
          </ul>
        </details>
        <div className="grid gap-2 md:grid-cols-2">
          <p className="max-w-[56ch]">{clinic.accessibility}</p>
          <div className="md:text-right">
            <p>{clinic.medicalDirector}</p>
            <p>{clinic.trademarkLine}</p>
            <p>Individual results vary. Candidacy and expectations are set at consultation.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
