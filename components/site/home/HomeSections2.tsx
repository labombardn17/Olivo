import Link from "next/link";
import { Reveal } from "@/components/shared/Reveal";
import { MapPlaceholder } from "@/components/shared/MapPlaceholder";
import { Stagger } from "@/components/site/Motion";
import { SectionHead } from "@/components/site/Blocks";
import { site } from "@/content/site";
import { areas } from "@/content/areas";
import { membershipsVerify } from "@/content/offers";
import { ui, type Lang } from "@/content/ui";
import { href } from "@/lib/i18n";
import { offersFor } from "@/lib/localize";
import { Verify } from "@/lib/verify";
import { Arrow, Check, Phone, Pin } from "@/components/functional/Icons";

type P = { lang?: Lang };

export function MembershipsTeaser({ lang = "en" }: P) {
  const t = ui(lang).home;
  const { membershipTiers } = offersFor(lang);
  return (
    <section id="memberships" aria-labelledby="mem-title" className="bg-ground-2 py-20 md:py-28">
      <div className="container-x">
        <SectionHead id="mem-title" kicker={t.memKicker} title={t.memTitle} sub={t.memSub} />
        <Stagger className="mx-auto mt-12 grid max-w-5xl gap-6 md:grid-cols-3">
          {membershipTiers.map((m, i) => (
            <div key={m.slug} className={`card flex h-full flex-col p-7 ${i === 1 ? "!border-accent" : ""}`}>
              <p className="kicker">{m.family}</p>
              <h3 className="font-display mt-2 text-[1.6rem] leading-tight">{m.name}</h3>
              <p className="mt-2 text-[0.9375rem] text-ink-2">{m.line}</p>
              <ul className="mt-5 flex-1 space-y-2.5 text-[0.9375rem]">{m.perks.map((p) => (<li key={p} className="flex items-start gap-3"><Check className="mt-1 h-4 w-4 shrink-0 text-accent-text" />{p}</li>))}</ul>
              <Link href={href(lang, "/memberships")} className={`btn mt-7 w-full ${i === 1 ? "btn-primary" : "btn-outline"}`}>{t.memCta}</Link>
            </div>
          ))}
        </Stagger>
        <p className="mt-6 text-center text-[0.8125rem] text-ink-2">{t.memNote}<Verify note={membershipsVerify} /></p>
      </div>
    </section>
  );
}

export function VisitBlock({ lang = "en" }: P) {
  const t = ui(lang);
  const h = t.home;
  const days = lang === "es" ? ["Lunes a viernes", "Sábado", "Domingo"] : site.hours.map((x) => x.days);
  return (
    <section id="visit" aria-labelledby="visit-title" className="py-20 md:py-28">
      <div className="container-x grid gap-10 md:grid-cols-2 md:gap-16">
        <Reveal><a href={site.directionsUrl} target="_blank" rel="noopener noreferrer" className="block"><MapPlaceholder className="img-frame aspect-[4/3] shadow-[var(--shadow-card)]" /><span className="sr-only">{h.mapLabel}</span></a></Reveal>
        <Reveal delay={0.1}>
          <p className="kicker">{h.visitKicker}</p>
          <h2 id="visit-title" className="section-title mt-3">{h.visitTitle}</h2>
          <address className="mt-6 not-italic text-[1.0625rem] leading-relaxed">
            <p className="flex items-start gap-3"><Pin className="mt-1.5 h-4 w-4 shrink-0 text-accent-text" /><span>{site.address.line1}<br />{site.address.city}, {site.address.state} {site.address.zip}</span></p>
            <p className="mt-3 flex items-center gap-3"><Phone className="h-4 w-4 shrink-0 text-accent-text" /><a href={site.phoneTel} className="font-semibold hover:underline underline-offset-4">{site.phoneDisplay}</a><span className="text-[0.875rem] text-ink-2">{t.nav.callOrText}</span></p>
          </address>
          <dl className="mt-6 grid gap-x-8 gap-y-4 text-[0.9375rem] sm:grid-cols-2">
            <div><dt className="font-semibold">{h.hours}</dt><dd className="text-ink-2">{site.hours.map((x, i) => (<span key={x.days} className="block">{days[i]}: {"closed" in x && x.closed ? t.footer.closed : `${x.open} ${t.footer.to} ${x.close}`}</span>))}</dd></div>
            <div><dt className="font-semibold">{h.parking}</dt><dd className="text-ink-2">{lang === "es" ? "Estacionamiento en la calle en Fullerton y calles cercanas. La estación California de la Línea Azul y el autobús 74 Fullerton quedan a pocos pasos." : site.transit}<Verify note={site.transitVerify} /></dd></div>
          </dl>
          <div className="mt-8 flex flex-wrap gap-3"><a href={site.directionsUrl} target="_blank" rel="noopener noreferrer" className="btn btn-outline btn-sm">{h.directions}</a><a href={href(lang, site.booking)} className="btn btn-primary btn-sm">{h.bookVisit}</a></div>
          <p className="mt-8 text-[0.8125rem] text-ink-2">{h.alsoServing}</p>
          <ul className="mt-2 flex flex-wrap gap-2">{areas.map((a) => (<li key={a.slug}><Link href={href(lang, `/med-spa/${a.slug}`)} className="rounded-full border border-rule px-3 py-1 text-[0.8125rem] hover:border-accent hover:text-accent-text">{a.name}</Link></li>))}</ul>
        </Reveal>
      </div>
    </section>
  );
}

export function QuizTeaser({ children, lang = "en" }: { children: React.ReactNode; lang?: Lang }) {
  const t = ui(lang).home;
  return (
    <section id="quiz" aria-labelledby="quiz-title" className="py-20 md:py-28">
      <div className="container-x grid gap-10 lg:grid-cols-[1fr_1.4fr] lg:gap-16">
        <Reveal>
          <p className="kicker">{t.quizKicker}</p>
          <h2 id="quiz-title" className="section-title mt-3 balance">{t.quizTitle}</h2>
          <p className="section-sub mt-4">{t.quizSub}</p>
          <Link href={href(lang, "/quiz")} className="link-arrow mt-6 text-[0.9375rem]">{t.quizOpen} <Arrow /></Link>
        </Reveal>
        <Reveal delay={0.1} className="card p-6 md:p-8">{children}</Reveal>
      </div>
    </section>
  );
}
