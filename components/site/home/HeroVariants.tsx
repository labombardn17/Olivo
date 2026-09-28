import Link from "next/link";
import Image from "next/image";
import { Magnetic } from "@/components/site/Motion";
import { site } from "@/content/site";
import { ui, type Lang } from "@/content/ui";
import { href } from "@/lib/i18n";

/* Three mobile-first hero directions for review at /hero-options. Not linked, not indexed. */

function Copy({ lang, light, onOrchid = false, lean = false }: { lang: Lang; light: boolean; onOrchid?: boolean; lean?: boolean }) {
  const t = ui(lang).hero;
  const sub = light ? "text-[#fff]/85" : "text-ink-2";
  return (
    <>
      <p className={`pill ${light ? "!bg-[#fff]/14 !text-[#fff] backdrop-blur-sm" : ""}`}>{t.kicker}</p>
      <h1 className={`display-xl mt-5 balance ${light ? "text-[#fff]" : ""}`}>{t.title}</h1>
      <p className={`mt-5 max-w-[46ch] text-[1.0625rem] leading-relaxed ${sub} ${lean ? "hidden md:block" : ""}`}>{t.sub}</p>
      <div className="mt-8 flex flex-col gap-3 sm:flex-row">
        <Magnetic><a href={href(lang, site.booking)} className={onOrchid ? "btn btn-on-orchid" : "btn btn-primary"}>{t.book}</a></Magnetic>
        <Link href={href(lang, "/quiz")} className={light ? "btn btn-light" : "btn btn-outline"}>{t.quiz}</Link>
      </div>
      <p className={`mt-6 text-[0.875rem] ${sub} ${lean ? "hidden md:block" : ""}`}>
        <a href={site.directionsUrl} target="_blank" rel="noopener noreferrer" className="underline underline-offset-4">2550 W. Fullerton Ave</a>
        {" · "}{t.hoursLine}{" · "}<a href={site.phoneTel} className="underline underline-offset-4">{site.phoneDisplay}</a>
      </p>
    </>
  );
}

/** A. Portrait, the direction her current homepage takes: one face, full bleed, copy low over a deep orchid scrim. */
export function HeroPortrait({ lang = "en" }: { lang?: Lang }) {
  return (
    <section data-hero="" className="relative min-h-[92svh] overflow-hidden bg-[#1a1220]">
      <Image src="/img/live/hero-portrait-tall.webp" alt="" fill priority sizes="100vw" className="object-cover object-[50%_0%] md:hidden" />
      <Image src="/img/live/hero-portrait-wide.webp" alt="" fill priority sizes="100vw" className="hidden object-cover object-[70%_20%] md:block" />
      <div className="hero-orchid-scrim absolute inset-0" aria-hidden="true" />
      <div className="container-x relative flex min-h-[100svh] items-end pb-24 pt-28 md:min-h-[92svh] md:items-center md:pb-24"><div className="max-w-xl"><Copy lang={lang} light lean /></div></div>
    </section>
  );
}

/** B. Film: a 14 second silent cut of the clinic's own homepage film (drone, reception, greeting, Emsculpt, Hydrafacial) behind the copy. */
export function HeroFilm({ lang = "en" }: { lang?: Lang }) {
  return (
    <section data-hero="" className="relative min-h-[92svh] overflow-hidden bg-[#1a1220]">
      <Image src="/video/hero-poster.jpg" alt="" fill priority sizes="100vw" quality={70} className="object-cover object-[45%_50%]" />
      <video className="absolute inset-0 h-full w-full object-cover object-[45%_50%]" autoPlay muted loop playsInline preload="metadata" poster="/video/hero-poster.jpg" aria-hidden="true" data-hero-film=""><source src="/video/hero.mp4" type="video/mp4" /></video>
      <div className="hero-orchid-scrim absolute inset-0" aria-hidden="true" />
      <div className="container-x relative flex min-h-[100svh] items-end pb-24 pt-28 md:min-h-[92svh] md:items-center md:pb-24"><div className="max-w-xl"><Copy lang={lang} light lean /></div></div>
      <p className="absolute bottom-5 right-5 hidden text-[0.6875rem] uppercase tracking-[0.18em] text-[#fff]/70 md:block">Clinic film</p>
    </section>
  );
}

/** C. Editorial: headline first on an orchid block, the portrait card tucked under it, no scrim on the face. */
export function HeroEditorial({ lang = "en" }: { lang?: Lang }) {
  return (
    <section data-hero="" className="relative overflow-hidden bg-[color:var(--accent-fill)] text-[#fff]">
      <div className="hero-glow-light absolute inset-0" aria-hidden="true" />
      <div className="container-x relative grid gap-8 pb-0 pt-10 md:grid-cols-2 md:items-end md:gap-12 md:pb-20 md:pt-20">
        <div className="pb-2 md:pb-10"><Copy lang={lang} light onOrchid /></div>
        <div className="img-frame relative -mb-px aspect-[4/5] translate-y-6 shadow-[var(--shadow-card-hover)] md:translate-y-0 md:aspect-[5/6]">
          <Image src="/img/live/hero-portrait-tall.webp" alt="" fill priority sizes="(min-width: 48rem) 50vw, 100vw" className="object-cover object-top" />
        </div>
      </div>
    </section>
  );
}
