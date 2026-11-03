import Link from "next/link";
import { site } from "@/content/site";
import type { Lang } from "@/content/ui";
import { activeCampaigns, chicagoToday, type Campaign, type Offer, type Per, type PriceRow } from "@/content/specials";
import { href } from "@/lib/i18n";
import { Verify } from "@/lib/verify";
import { Arrow } from "@/components/functional/Icons";

const words = {
  en: { sessions: (n: number) => `${n} ${n === 1 ? "session" : "sessions"}`, per: { each: "each", month: "per month", session: "per session", syringe: "per syringe" } as Record<Per, string>, save: (n: string) => `Save ${n}`, endsSoon: "Ends soon", range: (a: string, b: string) => `${a} to ${b}`, book: "Book this", free: "Free", about: (n: string) => `About ${n}` },
  es: { sessions: (n: number) => `${n} ${n === 1 ? "sesión" : "sesiones"}`, per: { each: "c/u", month: "al mes", session: "por sesión", syringe: "por jeringa" } as Record<Per, string>, save: (n: string) => `Ahorre ${n}`, endsSoon: "Termina pronto", range: (a: string, b: string) => `Del ${a} al ${b}`, book: "Reservar", free: "Gratis", about: (n: string) => `Sobre ${n}` },
};

const money = (n: number) => `$${n.toLocaleString("en-US")}`;

function dateRange(c: Campaign, lang: Lang) {
  const f = (d: string, year: boolean) => new Intl.DateTimeFormat(lang === "es" ? "es-US" : "en-US", { month: "short", day: "numeric", ...(year ? { year: "numeric" } : {}), timeZone: "UTC" }).format(new Date(`${d}T12:00:00Z`));
  return words[lang].range(f(c.from, c.from.slice(0, 4) !== c.until.slice(0, 4)), f(c.until, true));
}

function daysLeft(until: string, today: string) {
  return Math.round((Date.parse(`${until}T00:00:00Z`) - Date.parse(`${today}T00:00:00Z`)) / 86_400_000);
}

function Row({ r, lang }: { r: PriceRow; lang: Lang }) {
  const w = words[lang];
  const label = r.label?.[lang] ?? (r.sessions ? w.sessions(r.sessions) : "");
  return (
    <div className="flex items-baseline gap-3 py-1.5">
      {label && <dt className="text-[0.9375rem] text-ink-2">{label}</dt>}
      {label && <span aria-hidden="true" className="min-w-4 flex-1 translate-y-[-0.2rem] border-b border-dotted border-rule" />}
      <dd className={label ? "text-right" : ""}>
        <span className="font-display text-[1.35rem] leading-none">{r.price ? money(r.price) : w.free}</span>
        {r.per && <span className="ml-1 text-[0.8125rem] text-ink-2">{w.per[r.per]}</span>}
        {r.save && <span className="ml-2 rounded-full bg-ground-2 px-2 py-0.5 text-[0.75rem] font-semibold text-accent-text">{w.save(money(r.save))}</span>}
      </dd>
    </div>
  );
}

function OfferCard({ o, lang }: { o: Offer; lang: Lang }) {
  const w = words[lang];
  return (
    <article className="card flex flex-col p-6 md:p-7">
      <h3 className="font-display text-[1.6rem] leading-tight">{o.name[lang]}</h3>
      {o.line && <p className="mt-2 text-[0.9375rem] text-ink-2">{o.line[lang]}</p>}
      <div className="mt-4 flex-1 space-y-4">
        {o.tiers.map((t, i) => (
          <div key={i}>
            {t.label && <p className="kicker !text-[0.6875rem]">{t.label[lang]}</p>}
            <dl className="mt-1">{t.rows.map((r, j) => <Row key={j} r={r} lang={lang} />)}</dl>
          </div>
        ))}
      </div>
      {o.verify && <Verify note={o.verify} />}
      <div className="mt-6 flex flex-wrap items-center gap-4">
        <a href={href(lang, site.booking)} className="btn btn-primary btn-sm">{w.book}</a>
        {o.href && <Link href={href(lang, o.href)} className="link-arrow text-[0.875rem]">{w.about(o.name[lang])} <Arrow /></Link>}
      </div>
    </article>
  );
}

function MenuList({ c, lang }: { c: Campaign; lang: Lang }) {
  const w = words[lang];
  return (
    <div className="card p-6 md:p-9">
      <ul className="grid gap-x-12 gap-y-6 md:grid-cols-2">
        {c.offers.map((o) => {
          const r = o.tiers[0]?.rows[0];
          return (
            <li key={o.id}>
              <div className="flex items-baseline gap-3">
                <h3 className="font-display text-[1.35rem] leading-tight">{o.href ? <Link href={href(lang, o.href)} className="hover:text-accent-text">{o.name[lang]}</Link> : o.name[lang]}</h3>
                <span aria-hidden="true" className="min-w-4 flex-1 translate-y-[-0.2rem] border-b border-dotted border-rule" />
                {r && <p className="whitespace-nowrap"><span className="font-display text-[1.35rem] leading-none">{money(r.price)}</span>{r.per && <span className="ml-1 text-[0.8125rem] text-ink-2">{w.per[r.per]}</span>}</p>}
              </div>
              {o.line && <p className="mt-1 text-[0.9375rem] text-ink-2">{o.line[lang]}</p>}
              {o.verify && <Verify note={o.verify} />}
            </li>
          );
        })}
      </ul>
      <a href={href(lang, site.booking)} className="btn btn-primary btn-sm mt-8">{w.book}</a>
    </div>
  );
}

/** Every campaign running today, soonest to end first. Returns null when none are running. */
export function SpecialsCampaigns({ lang }: { lang: Lang }) {
  const today = chicagoToday();
  const list = activeCampaigns(today);
  if (!list.length) return null;
  const w = words[lang];
  return (
    <div className="space-y-20">
      {list.map((c) => (
        <section key={c.id} aria-labelledby={`sp-${c.id}`}>
          <div className="mb-8 flex flex-wrap items-end justify-between gap-4">
            <div>
              <p className="kicker">{dateRange(c, lang)}</p>
              <h2 id={`sp-${c.id}`} className="section-title mt-2 balance">{c.title[lang]}</h2>
              {c.note && <p className="mt-2 text-ink-2">{c.note[lang]}</p>}
              {c.verify && <Verify note={c.verify} />}
            </div>
            {daysLeft(c.until, today) <= 14 && <span className="pill">{w.endsSoon}</span>}
          </div>
          {c.layout === "menu" ? <MenuList c={c} lang={lang} /> : (
            <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">{c.offers.map((o) => <OfferCard key={o.id} o={o} lang={lang} />)}</div>
          )}
          {c.footer && <p className="mt-6"><Link href={href(lang, c.footer.href)} className="link-arrow">{c.footer.text[lang]} <Arrow /></Link></p>}
        </section>
      ))}
    </div>
  );
}
