import { clinic, devices, footerPolicies, fullMenu, team, teamRoleVerify } from "@/content/olivo";
import { Verify } from "@/lib/verify";

interface Props {
  className?: string;
  /** Concepts pass their own wordmark node so the footer belongs to the page. */
  wordmark?: React.ReactNode;
}

/** Shared footer: services index, team, policies, social, Vagaro and Cherry, accessibility, medical director, trademarks. */
export function Footer({ className = "", wordmark }: Props) {
  return (
    <footer data-footer="" className={`border-t border-rule ${className}`} aria-label="Site footer">
      <div className="px-5 md:px-10 py-14 md:py-20 grid gap-10 md:grid-cols-12">
        <div className="md:col-span-3">
          {wordmark ?? <span className="font-display text-2xl">{clinic.wordmark}</span>}
          <p className="mt-4 text-ink-2 text-[13px] leading-relaxed">
            {clinic.address.line1}
            <br />
            {clinic.address.city}, {clinic.address.state} {clinic.address.zip}
            <br />
            {clinic.address.neighborhood}
          </p>
          <a href={clinic.phoneTel} className="u-draw mt-3 inline-block text-[13px]">{clinic.phoneDisplay}</a>
        </div>
        <nav className="md:col-span-3" aria-label="Services index">
          <h2 className="eyebrow text-ink-2">Technology</h2>
          <ul className="mt-3 space-y-1 text-[13px]">
            {devices.map((d) => (
              <li key={d.slug}>{d.name}</li>
            ))}
          </ul>
          <h2 className="eyebrow text-ink-2 mt-6">Full menu</h2>
          <ul className="mt-3 columns-2 gap-6 text-[13px] leading-6 text-ink-2">
            {fullMenu.map((m) => (
              <li key={m.name}>{m.name}{m.verify && <Verify note={m.verify} />}</li>
            ))}
          </ul>
        </nav>
        <div className="md:col-span-3">
          <h2 className="eyebrow text-ink-2">Team</h2>
          <ul className="mt-3 space-y-1 text-[13px]">
            {team.map((t) => (
              <li key={t.name}>
                {t.name} <span className="text-ink-2">{t.role}</span>
              </li>
            ))}
            <li><Verify note={teamRoleVerify} /></li>
          </ul>
          <h2 className="eyebrow text-ink-2 mt-6">Follow</h2>
          <p className="mt-3 text-[13px]">
            <a href="#follow" className="u-draw">Instagram {clinic.instagram.handle}</a>
            <Verify note={clinic.instagram.verify} />
          </p>
        </div>
        <div className="md:col-span-3">
          <h2 className="eyebrow text-ink-2">Book and pay</h2>
          <ul className="mt-3 space-y-1 text-[13px]">
            <li><a href={clinic.booking} target="_blank" rel="noopener noreferrer" className="u-draw">Book through Vagaro</a></li>
            <li><span>{clinic.financing.line}</span></li>
          </ul>
          <h2 className="eyebrow text-ink-2 mt-6">Policies</h2>
          <ul className="mt-3 space-y-1 text-[13px]">
            {footerPolicies.map((p) => (
              <li key={p}><a href="#" className="u-draw">{p}</a></li>
            ))}
          </ul>
        </div>
      </div>
      <div className="px-5 md:px-10 pb-10 text-[12px] leading-relaxed text-ink-2 border-t border-rule pt-6 grid gap-2 md:grid-cols-2">
        <p className="max-w-[48ch]">{clinic.accessibility}</p>
        <div className="md:text-right">
          <p>{clinic.medicalDirector}</p>
          <p>{clinic.trademarkLine}</p>
          <p>Physician owned and led since {clinic.founded}.</p>
        </div>
      </div>
    </footer>
  );
}
