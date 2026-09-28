import Link from "next/link";
import { HeroVideo } from "@/components/shared/HeroVideo";
import { HeroFade, Magnetic } from "@/components/site/Motion";
import { site } from "@/content/site";
import { ui, type Lang } from "@/content/ui";
import { href } from "@/lib/i18n";
import { withBase } from "@/lib/base";
import { Verify } from "@/lib/verify";

/**
 * Full-bleed hero on the clinic's own film: a 14 second silent loop (drone
 * over Logan Square, the storefront, reception, a greeting, Emsculpt,
 * Hydrafacial). The poster frame is the LCP; the film arrives after first
 * interaction or idle and stays off under reduced motion or data saver.
 * Copy sits low over an orchid fade; the supporting line is desktop only.
 */
export function HomeHero({ lang = "en" }: { lang?: Lang }) {
  const t = ui(lang).hero;
  return (
    <section id="top" data-hero="" aria-labelledby="hero-title" className="relative min-h-[100svh] overflow-hidden bg-[#1a1220] md:min-h-[92svh]">
      <HeroVideo className="absolute inset-0 h-full w-full" poster="/video/hero-poster.jpg" posterAlt={lang === "es" ? "Olivo Med Spa en Logan Square, Chicago" : "Olivo Med Spa in Logan Square, Chicago"} mp4={withBase("/video/hero.mp4")} width={1280} height={720} />
      <div className="hero-orchid-scrim absolute inset-0" aria-hidden="true" />
      <HeroFade className="relative z-10 flex min-h-[100svh] items-end md:min-h-[92svh] md:items-center">
        <div className="container-x w-full pb-24 pt-28 md:pb-24">
          <div className="max-w-xl text-[#fff]">
            <p className="pill !bg-[#fff]/14 !text-[#fff] backdrop-blur-sm">{t.kicker}</p>
            <h1 id="hero-title" className="display-xl hero-rise mt-5 balance">{t.title}</h1>
            <p className="mt-5 hidden max-w-[46ch] text-[1.0625rem] leading-relaxed text-[#fff]/85 md:block sm:text-[1.2rem]">{t.sub}</p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Magnetic><a href={href(lang, site.booking)} data-cta="primary" className="btn btn-primary">{t.book}</a></Magnetic>
              <Link href={href(lang, "/quiz")} className="btn btn-light">{t.quiz}</Link>
            </div>
            <p className="mt-6 hidden text-[0.875rem] text-[#fff]/85 md:block">
              <a href={site.directionsUrl} target="_blank" rel="noopener noreferrer" className="underline underline-offset-4">2550 W. Fullerton Ave</a>
              {" · "}{t.hoursLine}{" · "}<a href={site.phoneTel} className="underline underline-offset-4">{site.phoneDisplay}</a>
              <Verify note={site.smsVerify} />
            </p>
          </div>
        </div>
      </HeroFade>
    </section>
  );
}
