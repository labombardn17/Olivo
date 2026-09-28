import Link from "next/link";
import Image from "next/image";
import { HeroFade, Magnetic } from "@/components/site/Motion";
import { site } from "@/content/site";
import { ui, type Lang } from "@/content/ui";
import { photos } from "@/content/photos";
import { href } from "@/lib/i18n";
import { Verify } from "@/lib/verify";

/** Split hero: copy on the left over a soft orchid field, the clinic photograph framed on the right. The photo is the LCP. */
export function HomeHero({ lang = "en" }: { lang?: Lang }) {
  const t = ui(lang).hero;
  const photo = photos.home!;
  return (
    <section id="top" data-hero="" aria-labelledby="hero-title" className="hero-light relative overflow-hidden">
      <div className="hero-glow" aria-hidden="true" />
      <div className="container-x relative grid items-center gap-10 pb-16 pt-10 md:grid-cols-[1.05fr_1fr] md:gap-14 md:pb-24 md:pt-16 lg:min-h-[86svh]">
        <HeroFade>
          <p className="pill">{t.kicker}</p>
          <h1 id="hero-title" className="display-xl hero-rise mt-6 balance">{t.title}</h1>
          <p className="mt-6 max-w-[50ch] text-[1.0625rem] leading-relaxed text-ink-2 sm:text-[1.2rem]">{t.sub}</p>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <Magnetic><a href={href(lang, site.booking)} data-cta="primary" className="btn btn-primary">{t.book}</a></Magnetic>
            <Link href={href(lang, "/quiz")} className="btn btn-outline">{t.quiz}</Link>
          </div>
          <dl className="mt-10 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-3 border-t border-rule pt-6 text-[0.875rem] sm:grid-cols-3">
            <div><dt className="text-ink-2">{t.clinic}</dt><dd className="mt-0.5 font-medium"><a href={site.directionsUrl} target="_blank" rel="noopener noreferrer" className="hover:underline underline-offset-4">2550 W. Fullerton Ave</a></dd></div>
            <div><dt className="text-ink-2">{t.hours}</dt><dd className="mt-0.5 font-medium">{t.hoursLine}</dd></div>
            <div><dt className="text-ink-2">{t.reach}</dt><dd className="mt-0.5 font-medium"><a href={site.sms(ui(lang).textNow.body)} className="hover:underline underline-offset-4">{t.reachLine}</a><Verify note={site.smsVerify} /></dd></div>
          </dl>
        </HeroFade>
        <div className="hero-photo img-frame relative aspect-[4/3] md:aspect-[4/5] lg:aspect-[5/6]">
          <Image src={photo.src} alt={lang === "es" ? "Recepción de Olivo Med Spa en Logan Square" : "Olivo Med Spa reception in Logan Square"} fill priority sizes="(min-width: 48rem) 50vw, 100vw" quality={78} className="object-cover" style={{ objectPosition: photo.focus }} />
        </div>
      </div>
    </section>
  );
}
