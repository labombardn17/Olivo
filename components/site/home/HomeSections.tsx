import Link from "next/link";
import { Marquee } from "@/components/shared/Marquee";
import { Reveal } from "@/components/shared/Reveal";
import { Photo } from "@/components/site/Photo";
import { ComingSoon } from "@/components/site/ComingSoon";
import { CountUp, Stagger } from "@/components/site/Motion";
import { SectionHead } from "@/components/site/Blocks";
import { categories, site } from "@/content/site";
import { flagship } from "@/content/services";
import { doctor } from "@/content/clinic";
import { testimonials, ratingVerify } from "@/content/testimonials";
import { ui, type Lang } from "@/content/ui";
import { href } from "@/lib/i18n";
import { doctorFor, localizeCategory, localizeService, testimonialsNoteFor } from "@/lib/localize";
import { Verify } from "@/lib/verify";
import { Arrow, Stars } from "@/components/functional/Icons";

type P = { lang?: Lang };

export function DeviceMarquee({ lang = "en" }: P) {
  const names = flagship().map((s) => localizeService(s, lang).name);
  return (
    <div className="border-y border-rule bg-ground-2 py-4">
      <Marquee duration={36} ariaLabel="Device platforms on site">
        {names.map((n) => (<span key={n} className="mx-6 inline-flex items-center gap-6 font-display text-[1.35rem] text-ink-2"><span className="h-1.5 w-1.5 rounded-full bg-accent" aria-hidden="true" />{n}</span>))}
      </Marquee>
    </div>
  );
}

export function ProofStrip({ lang = "en" }: P) {
  const t = ui(lang).home;
  const nums = [2013, 9, 6];
  return (
    <section aria-label={t.proofKicker} className="py-16 md:py-20">
      <div className="container-x grid gap-10 md:grid-cols-[1.1fr_2fr] md:gap-16">
        <Reveal><p className="kicker">{t.proofKicker}</p><h2 className="section-title mt-3 balance">{t.proofTitle}</h2></Reveal>
        <Stagger className="grid grid-cols-1 gap-6 sm:grid-cols-3">
          {t.stats.map(([l, d], i) => (<div key={l} className="border-t border-rule pt-5"><p className="num"><CountUp value={nums[i]!} /></p><p className="mt-2 font-semibold">{l}</p><p className="mt-1 text-[0.9rem] text-ink-2">{d}</p></div>))}
        </Stagger>
      </div>
    </section>
  );
}

export function TreatmentGrid({ lang = "en" }: P) {
  const t = ui(lang);
  return (
    <section id="treatments" aria-labelledby="treat-title" className="bg-ground-2 py-20 md:py-28">
      <div className="container-x">
        <SectionHead id="treat-title" kicker={t.home.treatKicker} title={t.home.treatTitle} sub={t.home.treatSub} />
        <Stagger as="ul" className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3" amount={0.06}>
          {categories.map((raw, i) => { const c = localizeCategory(raw, lang); return (
            <li key={c.key} className={i === 0 ? "sm:col-span-2 lg:col-span-1" : ""}>
              <Link href={href(lang, `/treatments/${c.key}`)} className="group card card-link lift relative block h-[22rem] overflow-hidden">
                <Photo slot={c.slot} fallback={c.fallback} alt={c.name} lang={lang} className="absolute inset-0 h-full" sizes="(min-width: 64rem) 33vw, (min-width: 40rem) 50vw, 100vw" />
                <div className="absolute inset-0 scrim-up" aria-hidden="true" />
                <div className="absolute inset-x-0 bottom-0 p-6 text-[#fff]">
                  <h3 className="font-display text-[1.75rem] leading-tight">{c.name}</h3>
                  <p className="mt-1.5 max-w-[34ch] text-[0.9375rem] leading-snug text-[#fff]/80">{c.line}</p>
                  <span className="link-arrow mt-3 !text-[#fff] text-[0.875rem]">{t.blocks.explore} <Arrow /></span>
                </div>
              </Link>
            </li>); })}
        </Stagger>
        <p className="mt-8 text-center text-[0.9375rem] text-ink-2">{t.home.concernPrompt} <Link href={href(lang, "/concerns")} className="link-arrow">{t.home.browseConcern} <Arrow /></Link></p>
      </div>
    </section>
  );
}

export function Technology({ lang = "en" }: P) {
  const t = ui(lang).home;
  const list = flagship().map((s) => localizeService(s, lang));
  return (
    <section id="technology" aria-labelledby="tech-title" className="py-20 md:py-28">
      <div className="container-x grid gap-10 lg:grid-cols-[1fr_2fr] lg:gap-16">
        <Reveal>
          <p className="kicker">{t.techKicker}</p>
          <h2 id="tech-title" className="section-title mt-3 balance">{t.techTitle}</h2>
          <p className="section-sub mt-4">{t.techSub}<Verify note="'chose it, trained on it, and uses it': clinic to confirm" /></p>
          <Link href={href(lang, "/quiz")} className="btn btn-outline mt-8">{t.techCta}</Link>
        </Reveal>
        <Stagger as="ol" className="grid gap-3 sm:grid-cols-2" amount={0.05}>
          {list.map((d, i) => (
            <li key={d.slug}><Link href={href(lang, `/treatments/${d.slug}`)} className="card card-link lift flex h-full flex-col p-5"><div className="flex items-baseline justify-between gap-3"><h3 className="font-display text-[1.35rem]">{d.name}</h3><span className="kicker !text-ink-2">{d.brand ?? ""} 0{i + 1}</span></div><p className="mt-2 flex-1 text-[0.9rem] leading-snug text-ink-2">{d.headline}</p></Link></li>
          ))}
        </Stagger>
      </div>
    </section>
  );
}

export function DoctorBlock({ lang = "en" }: P) {
  const t = ui(lang).home;
  const d = doctorFor(lang);
  return (
    <section id="doctor" aria-labelledby="doctor-title" className="bg-ground-2 py-20 md:py-28">
      <div className="container-x grid items-center gap-10 md:grid-cols-2 md:gap-16">
        <Reveal><ComingSoon kind="portrait" label="Dr. Jacqueline Olivo" lang={lang} className="img-frame aspect-[4/5] shadow-[var(--shadow-card-hover)]" /></Reveal>
        <Reveal delay={0.1}>
          <p className="kicker">{t.doctorKicker}</p>
          <h2 id="doctor-title" className="section-title mt-3">{t.doctorTitle}</h2>
          <p className="mt-2 text-[1.0625rem] text-ink-2">{doctor.name}. {t.doctorRole}.</p>
          <blockquote className="font-display mt-6 text-[2rem] italic leading-tight">&ldquo;{t.quote}&rdquo;</blockquote>
          <p className="mt-6 leading-relaxed text-ink-2">{t.doctorBio}<Verify note={doctor.bioVerify} /></p>
          <ul className="mt-6 space-y-1.5 text-[0.9375rem]">{d.credentials.map((c) => <li key={c}>{c}</li>)}<li>{d.boardLine}<Verify note={doctor.boardVerify} /></li></ul>
          <div className="mt-8 flex flex-wrap gap-3"><Link href={href(lang, "/team/jacqueline-olivo-md")} className="btn btn-outline">{t.doctorCta}</Link><Link href={href(lang, "/team")} className="link-arrow">{t.teamCta} <Arrow /></Link></div>
        </Reveal>
      </div>
    </section>
  );
}

export function Results({ lang = "en" }: P) {
  const t = ui(lang).home;
  return (
    <section id="results" aria-labelledby="results-title" className="inverse py-20 md:py-28">
      <div className="container-x">
        <SectionHead id="results-title" kicker={t.resultsKicker} title={t.resultsTitle} sub={t.resultsSub} />
        <div className="mx-auto mt-10 max-w-3xl">
          <ComingSoon kind="gallery" lang={lang} className="img-frame aspect-[4/5] sm:aspect-[16/10] shadow-[var(--shadow-card-hover)]" />
          <p className="mt-6 text-center"><Link href={href(lang, "/results")} className="link-arrow">{t.resultsPolicy} <Arrow /></Link></p>
        </div>
      </div>
    </section>
  );
}

export function Testimonials({ lang = "en" }: P) {
  const t = ui(lang).home;
  return (
    <section id="reviews" aria-labelledby="reviews-title" className="py-20 md:py-28">
      <div className="container-x">
        <SectionHead id="reviews-title" kicker={t.reviewsKicker} title={t.reviewsTitle} />
        <Stagger as="ul" className="mt-12 grid gap-6 md:grid-cols-3">
          {testimonials.map((x) => (
            <li key={x.name} className="card flex h-full flex-col p-7"><Stars label="Five stars" /><p className="mt-4 flex-1 font-display text-[1.25rem] leading-snug" lang="en">&ldquo;{x.text}&rdquo;</p><div className="mt-6 flex items-center justify-between border-t border-rule pt-4 text-[0.875rem]"><span className="font-semibold">{x.name}</span><span className="text-ink-2">{t.via} {x.source}</span></div></li>
          ))}
        </Stagger>
        <p className="mt-6 text-center text-[0.8125rem] text-ink-2">{testimonialsNoteFor(lang)}<Verify note={ratingVerify} /></p>
        <p className="mt-4 text-center"><a href={site.mapsUrl} target="_blank" rel="noopener noreferrer" className="link-arrow">{t.reviewsGoogle} <Arrow /></a></p>
      </div>
    </section>
  );
}
