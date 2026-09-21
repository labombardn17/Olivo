import Link from "next/link";
import { HeroField } from "@/components/site/home/HeroField";
import { HeroFade, Magnetic } from "@/components/site/Motion";
import { site } from "@/content/site";
import { ui, type Lang } from "@/content/ui";
import { href } from "@/lib/i18n";
import { Verify } from "@/lib/verify";
/** Full-bleed hero on a designed field. The clinic film drops in here once it is shot. */
export function HomeHero({ lang = "en" }: { lang?: Lang }) {
  const t = ui(lang).hero;
  return (
    <section id="top" data-hero="" aria-labelledby="hero-title" className="relative">
      <div className="relative min-h-[92svh] w-full overflow-hidden">
        <HeroField lang={lang} />
        <div className="absolute inset-0 hero-scrim" aria-hidden="true" />
        <HeroFade className="relative z-10 flex min-h-[92svh] items-end">
          <div className="container-x w-full pb-16 pt-32 md:pb-24">
            <div className="max-w-3xl text-[#fff]">
              <p className="pill !bg-[#fff]/14 !text-[#fff] backdrop-blur-sm">{t.kicker}</p>
              <h1 id="hero-title" className="display-xl hero-rise mt-6 balance">{t.title}</h1>
              <p className="mt-6 max-w-[52ch] text-[1.0625rem] leading-relaxed text-[#fff]/85 sm:text-[1.2rem]">{t.sub}</p>
              <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                <Magnetic><a href={href(lang, site.booking)} data-cta="primary" className="btn btn-primary">{t.book}</a></Magnetic>
                <Link href={href(lang, "/quiz")} className="btn btn-light">{t.quiz}</Link>
              </div>
              <dl className="mt-10 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-3 border-t border-[#fff]/25 pt-6 text-[0.875rem] sm:grid-cols-3">
                <div><dt className="text-[#fff]/60">{t.clinic}</dt><dd className="mt-0.5 font-medium">2550 W. Fullerton Ave</dd></div>
                <div><dt className="text-[#fff]/60">{t.hours}</dt><dd className="mt-0.5 font-medium">{t.hoursLine}</dd></div>
                <div><dt className="text-[#fff]/60">{t.reach}</dt><dd className="mt-0.5 font-medium"><a href={site.sms(ui(lang).textNow.body)} className="hover:underline underline-offset-4">{t.reachLine}</a><Verify note={site.smsVerify} /></dd></div>
              </dl>
            </div>
          </div>
        </HeroFade>
        <div className="absolute bottom-6 right-6 z-10 hidden items-center gap-2 text-[0.6875rem] uppercase tracking-[0.2em] text-[#fff]/70 md:flex" aria-hidden="true"><span className="float-y block h-8 w-px bg-[#fff]/60" />{t.scroll}</div>
      </div>
    </section>
  );
}
