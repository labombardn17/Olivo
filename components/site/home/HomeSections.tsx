import Link from "next/link";
import { Marquee } from "@/components/shared/Marquee";
import { BeforeAfter } from "@/components/shared/BeforeAfter";
import { Reveal } from "@/components/shared/Reveal";
import { Photo } from "@/components/site/Photo";
import { CountUp, Stagger } from "@/components/site/Motion";
import { SectionHead } from "@/components/site/Blocks";
import { categories, site } from "@/content/site";
import { flagship } from "@/content/services";
import { doctor } from "@/content/clinic";
import { testimonials, testimonialsNote, ratingVerify } from "@/content/testimonials";
import { Verify } from "@/lib/verify";
import { Arrow, Stars } from "@/components/functional/Icons";

export function DeviceMarquee() {
  const names = flagship().map((s) => s.name);
  const list = names.length ? names : ["Emsculpt Neo", "Emface", "Exion", "Emsella", "Opus Plasma", "CO2 fractional laser", "Miradry", "Hydrafacial", "Exion RF microneedling"];
  return (
    <div className="border-y border-rule bg-ground-2 py-4">
      <Marquee duration={36} ariaLabel="Device platforms on site">
        {list.map((n) => (<span key={n} className="mx-6 inline-flex items-center gap-6 font-display text-[1.35rem] text-ink-2"><span className="h-1.5 w-1.5 rounded-full bg-accent" aria-hidden="true" />{n}</span>))}
      </Marquee>
    </div>
  );
}

export function ProofStrip() {
  return (
    <section aria-label="The clinic in numbers" className="py-16 md:py-20">
      <div className="container-x grid gap-10 md:grid-cols-[1.1fr_2fr] md:gap-16">
        <Reveal>
          <p className="kicker">The clinic</p>
          <h2 className="section-title mt-3 balance">Physician owned. Physician led. One calm clinic on Fullerton.</h2>
        </Reveal>
        <Stagger className="grid grid-cols-1 gap-6 sm:grid-cols-3">
          {[{ n: 2013, s: "", l: "Physician owned and led since", d: "Jacqueline Olivo, MD, founder and medical director" }, { n: 9, s: "", l: "Device platforms on site", d: "The full BTL and Alma platforms under one roof" }, { n: 6, s: "", l: "Days a week", d: "Mon to Fri 10 to 7, Sat 10 to 5, in Logan Square" }].map((x) => (
            <div key={x.l} className="border-t border-rule pt-5"><p className="num"><CountUp value={x.n} suffix={x.s} /></p><p className="mt-2 font-semibold">{x.l}</p><p className="mt-1 text-[0.9rem] text-ink-2">{x.d}</p></div>
          ))}
        </Stagger>
      </div>
    </section>
  );
}

export function TreatmentGrid() {
  return (
    <section id="treatments" aria-labelledby="treat-title" className="bg-ground-2 py-20 md:py-28">
      <div className="container-x">
        <SectionHead id="treat-title" kicker="Treatments" title="What can we help you with?" sub="Nine ways in. Every plan begins with a consultation, and every treatment is matched to you, not to a menu." />
        <Stagger as="ul" className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3" amount={0.06}>
          {categories.map((c, i) => (
            <li key={c.key} className={i === 0 ? "sm:col-span-2 lg:col-span-1" : ""}>
              <Link href={`/treatments/${c.key}`} className="group card card-link lift relative block h-[22rem] overflow-hidden">
                <Photo slot={c.slot} fallback={c.fallback} className="absolute inset-0 h-full" imgClassName="transition-transform duration-[1200ms] ease-out group-hover:scale-[1.05]" sizes="(min-width: 64rem) 33vw, (min-width: 40rem) 50vw, 100vw" />
                <div className="absolute inset-0 scrim-up" aria-hidden="true" />
                <div className="absolute inset-x-0 bottom-0 p-6 text-[#fff]">
                  <h3 className="font-display text-[1.75rem] leading-tight">{c.name}</h3>
                  <p className="mt-1.5 max-w-[34ch] text-[0.9375rem] leading-snug text-[#fff]/80">{c.line}</p>
                  <span className="link-arrow mt-3 !text-[#fff] text-[0.875rem]">Explore <Arrow /></span>
                </div>
              </Link>
            </li>
          ))}
        </Stagger>
        <p className="mt-8 text-center text-[0.9375rem] text-ink-2">Prefer to start from a concern? <Link href="/concerns" className="link-arrow">Browse by concern <Arrow /></Link></p>
      </div>
    </section>
  );
}

export function Technology() {
  const list = flagship();
  return (
    <section id="technology" aria-labelledby="tech-title" className="py-20 md:py-28">
      <div className="container-x grid gap-10 lg:grid-cols-[1fr_2fr] lg:gap-16">
        <Reveal>
          <p className="kicker">Technology</p>
          <h2 id="tech-title" className="section-title mt-3 balance">The full BTL and Alma platforms, under one roof</h2>
          <p className="section-sub mt-4">Nine device platforms, named by brand. If it is here, it is because Dr. Olivo chose it, trained on it, and uses it.<Verify note="'chose it, trained on it, and uses it': clinic to confirm" /></p>
          <Link href="/quiz" className="btn btn-outline mt-8">Ask which is right for you</Link>
        </Reveal>
        <Stagger as="ol" className="grid gap-3 sm:grid-cols-2" amount={0.05}>
          {list.map((d, i) => (
            <li key={d.slug}><Link href={`/treatments/${d.slug}`} className="card card-link lift flex h-full flex-col p-5"><div className="flex items-baseline justify-between gap-3"><h3 className="font-display text-[1.35rem]">{d.name}</h3><span className="kicker !text-ink-2">{d.brand ?? ""} 0{i + 1}</span></div><p className="mt-2 flex-1 text-[0.9rem] leading-snug text-ink-2">{d.headline}</p></Link></li>
          ))}
        </Stagger>
      </div>
    </section>
  );
}

export function DoctorBlock() {
  return (
    <section id="doctor" aria-labelledby="doctor-title" className="bg-ground-2 py-20 md:py-28">
      <div className="container-x grid items-center gap-10 md:grid-cols-2 md:gap-16">
        <Reveal><Photo slot="dr-olivo" fallback="portrait" alt="Dr. Jacqueline Olivo" className="img-frame aspect-[4/5] shadow-[var(--shadow-card-hover)]" sizes="(min-width: 52rem) 50vw, 100vw" /></Reveal>
        <Reveal delay={0.1}>
          <p className="kicker">Physician owned and led</p>
          <h2 id="doctor-title" className="section-title mt-3">Meet Dr. Olivo</h2>
          <p className="mt-2 text-[1.0625rem] text-ink-2">{doctor.name}. {doctor.role}.</p>
          <blockquote className="font-display mt-6 text-[2rem] italic leading-tight">&ldquo;Aging is optional.&rdquo;</blockquote>
          <p className="mt-6 leading-relaxed text-ink-2">Dr. Olivo trained in family medicine and has practiced since 2007. She opened Olivo Med Spa in 2013 and remains its medical director, which is why the equipment list reads the way it does: chosen by a physician, for patients she sees herself.<Verify note={doctor.bioVerify} /></p>
          <ul className="mt-6 space-y-1.5 text-[0.9375rem]">{doctor.credentials.map((c) => <li key={c}>{c}</li>)}<li>{doctor.boardLine}<Verify note={doctor.boardVerify} /></li></ul>
          <div className="mt-8 flex flex-wrap gap-3"><Link href="/team/jacqueline-olivo-md" className="btn btn-outline">Read her story</Link><Link href="/team" className="link-arrow">Meet the team <Arrow /></Link></div>
        </Reveal>
      </div>
    </section>
  );
}

export function Results() {
  return (
    <section id="results" aria-labelledby="results-title" className="inverse py-20 md:py-28">
      <div className="container-x">
        <SectionHead id="results-title" kicker="Results" title="Results belong to the person who earned them." sub="Real before and after images are shown only with written patient authorization and are labelled with treatment and session count. Drag the divider to see how the gallery will work." />
        <div className="mx-auto mt-10 max-w-3xl">
          <BeforeAfter className="img-frame overflow-hidden shadow-[var(--shadow-card-hover)]" aspectClassName="aspect-[4/5] sm:aspect-[16/10]" labelClassName="rounded-full bg-ground px-3 py-1 text-[0.75rem] font-semibold uppercase tracking-[0.12em] text-ink" handleClassName="!w-[3px] bg-ground" rangeClassName="reveal-range" />
          <p className="mt-4 text-center text-[0.9375rem] text-ink-2">Placeholder frames until authorized cases are supplied.<Verify note="Before and after images require written patient authorization" /></p>
          <p className="mt-6 text-center"><Link href="/results" className="link-arrow">About our results policy <Arrow /></Link></p>
        </div>
      </div>
    </section>
  );
}

export function Testimonials() {
  return (
    <section id="reviews" aria-labelledby="reviews-title" className="py-20 md:py-28">
      <div className="container-x">
        <SectionHead id="reviews-title" kicker="In their words" title="What patients have said" />
        <Stagger as="ul" className="mt-12 grid gap-6 md:grid-cols-3">
          {testimonials.map((t) => (
            <li key={t.name} className="card flex h-full flex-col p-7"><Stars label="Five stars" /><p className="mt-4 flex-1 font-display text-[1.25rem] leading-snug">&ldquo;{t.text}&rdquo;</p><div className="mt-6 flex items-center justify-between border-t border-rule pt-4 text-[0.875rem]"><span className="font-semibold">{t.name}</span><span className="text-ink-2">via {t.source}</span></div></li>
          ))}
        </Stagger>
        <p className="mt-6 text-center text-[0.8125rem] text-ink-2">{testimonialsNote}<Verify note={ratingVerify} /></p>
        <p className="mt-4 text-center"><a href={site.mapsUrl} target="_blank" rel="noopener noreferrer" className="link-arrow">Read reviews on Google <Arrow /></a></p>
      </div>
    </section>
  );
}
