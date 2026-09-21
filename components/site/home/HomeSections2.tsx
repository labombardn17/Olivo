import Link from "next/link";
import { Reveal } from "@/components/shared/Reveal";
import { MapPlaceholder } from "@/components/shared/MapPlaceholder";
import { Stagger } from "@/components/site/Motion";
import { SectionHead } from "@/components/site/Blocks";
import { site } from "@/content/site";
import { membershipTiers, membershipsVerify } from "@/content/offers";
import { Verify } from "@/lib/verify";
import { Arrow, Check, Phone, Pin } from "@/components/functional/Icons";

export function MembershipsTeaser() {
  return (
    <section id="memberships" aria-labelledby="mem-title" className="bg-ground-2 py-20 md:py-28">
      <div className="container-x">
        <SectionHead id="mem-title" kicker="Memberships and financing" title="Keep a rhythm instead of starting over." sub="Three clubs, one for skin, one for body, one for laser hair reduction. Financing available through Cherry." />
        <Stagger className="mx-auto mt-12 grid max-w-5xl gap-6 md:grid-cols-3">
          {membershipTiers.map((t, i) => (
            <div key={t.slug} className={`card flex h-full flex-col p-7 ${i === 1 ? "!border-accent" : ""}`}>
              <p className="kicker">{t.family}</p>
              <h3 className="font-display mt-2 text-[1.6rem] leading-tight">{t.name}</h3>
              <p className="mt-2 text-[0.9375rem] text-ink-2">{t.line}</p>
              <ul className="mt-5 flex-1 space-y-2.5 text-[0.9375rem]">{t.perks.map((p) => (<li key={p} className="flex items-start gap-3"><Check className="mt-1 h-4 w-4 shrink-0 text-accent-text" />{p}</li>))}</ul>
              <Link href="/memberships" className={`btn mt-7 w-full ${i === 1 ? "btn-primary" : "btn-outline"}`}>See the details</Link>
            </div>
          ))}
        </Stagger>
        <p className="mt-6 text-center text-[0.8125rem] text-ink-2">Terms are shown at the clinic and in the member portal.<Verify note={membershipsVerify} /></p>
      </div>
    </section>
  );
}

const areaList = [["logan-square", "Logan Square"], ["bucktown", "Bucktown"], ["wicker-park", "Wicker Park"], ["lincoln-park", "Lincoln Park"], ["avondale", "Avondale"], ["humboldt-park", "Humboldt Park"], ["ukrainian-village", "Ukrainian Village"], ["roscoe-village", "Roscoe Village"], ["irving-park", "Irving Park"], ["old-town", "Old Town"], ["lakeview", "Lakeview"], ["river-north", "River North"]];

export function VisitBlock() {
  return (
    <section id="visit" aria-labelledby="visit-title" className="py-20 md:py-28">
      <div className="container-x grid gap-10 md:grid-cols-2 md:gap-16">
        <Reveal><a href={site.directionsUrl} target="_blank" rel="noopener noreferrer" className="block"><MapPlaceholder className="img-frame aspect-[4/3] shadow-[var(--shadow-card)]" /><span className="sr-only">Open directions to 2550 W. Fullerton Ave in Google Maps</span></a></Reveal>
        <Reveal delay={0.1}>
          <p className="kicker">Logan Square</p>
          <h2 id="visit-title" className="section-title mt-3">Visit us on Fullerton</h2>
          <address className="mt-6 not-italic text-[1.0625rem] leading-relaxed">
            <p className="flex items-start gap-3"><Pin className="mt-1.5 h-4 w-4 shrink-0 text-accent-text" /><span>{site.address.line1}<br />{site.address.city}, {site.address.state} {site.address.zip}</span></p>
            <p className="mt-3 flex items-center gap-3"><Phone className="h-4 w-4 shrink-0 text-accent-text" /><a href={site.phoneTel} className="font-semibold hover:underline underline-offset-4">{site.phoneDisplay}</a><span className="text-[0.875rem] text-ink-2">call or text</span></p>
          </address>
          <dl className="mt-6 grid gap-x-8 gap-y-4 text-[0.9375rem] sm:grid-cols-2">
            <div><dt className="font-semibold">Hours</dt><dd className="text-ink-2">{site.hours.map((h) => (<span key={h.days} className="block">{h.days}: {"closed" in h && h.closed ? "Closed" : `${h.open} to ${h.close}`}</span>))}</dd></div>
            <div><dt className="font-semibold">Parking and transit</dt><dd className="text-ink-2">{site.transit}<Verify note={site.transitVerify} /></dd></div>
          </dl>
          <div className="mt-8 flex flex-wrap gap-3"><a href={site.directionsUrl} target="_blank" rel="noopener noreferrer" className="btn btn-outline btn-sm">Get directions</a><a href={site.booking} target="_blank" rel="noopener noreferrer" className="btn btn-primary btn-sm">Book a visit</a></div>
          <p className="mt-8 text-[0.8125rem] text-ink-2">Also serving</p>
          <ul className="mt-2 flex flex-wrap gap-2">{areaList.map(([s, n]) => (<li key={s}><Link href={`/med-spa/${s}`} className="rounded-full border border-rule px-3 py-1 text-[0.8125rem] hover:border-accent hover:text-accent-text">{n}</Link></li>))}</ul>
        </Reveal>
      </div>
    </section>
  );
}

export function QuizTeaser({ children }: { children: React.ReactNode }) {
  return (
    <section id="quiz" aria-labelledby="quiz-title" className="py-20 md:py-28">
      <div className="container-x grid gap-10 lg:grid-cols-[1fr_1.4fr] lg:gap-16">
        <Reveal>
          <p className="kicker">Two-minute quiz</p>
          <h2 id="quiz-title" className="section-title mt-3 balance">Not sure where to start? Tell us what you would change.</h2>
          <p className="section-sub mt-4">Five questions. You get up to three treatments to read about and a text you can send us with one tap. No email required.</p>
          <Link href="/quiz" className="link-arrow mt-6 text-[0.9375rem]">Open the full quiz <Arrow /></Link>
        </Reveal>
        <Reveal delay={0.1} className="card p-6 md:p-8">{children}</Reveal>
      </div>
    </section>
  );
}
