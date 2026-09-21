import Link from "next/link";
import { HeroVideo } from "@/components/shared/HeroVideo";
import { HeroFade, Magnetic } from "@/components/site/Motion";
import { site } from "@/content/site";
import { Verify } from "@/lib/verify";
import liveVideoJson from "@/content/live-video.json";

const liveVideo = liveVideoJson as { ok: boolean; src: string | null; poster: string | null };

interface Copy { kicker: string; title: string; sub: string; book: string; quiz: string; hours: string; note: string; scroll: string; quizHref: string }

export const heroEn: Copy = { kicker: "Logan Square, Chicago", title: "Come as you are. Leave as you intend.", sub: "Physician owned and led by Jacqueline Olivo, MD, with the full BTL and Alma platforms in one calm clinic on West Fullerton.", book: "Book a consultation", quiz: "Find my treatment", hours: "Mon to Fri 10 to 7, Sat 10 to 5", note: "Text or call 872-315-3481", scroll: "Scroll", quizHref: "/quiz" };
export const heroEs: Copy = { kicker: "Logan Square, Chicago", title: "Llega como eres. Sal como te lo propones.", sub: "Propiedad de una médica y dirigido por ella, la Dra. Jacqueline Olivo, con las plataformas completas de BTL y Alma en una clínica tranquila sobre West Fullerton.", book: "Reservar una consulta", quiz: "Ver tratamientos", hours: "Lun a vie 10 a 7, sáb 10 a 5", note: "Escríbenos o llama al 872-315-3481", scroll: "Desliza", quizHref: "/es/tratamientos" };

/** Full-bleed film hero. Poster is the LCP; the film arrives after first interaction. */
export function HomeHero({ copy = heroEn }: { copy?: Copy }) {
  return (
    <section id="top" data-hero="" aria-labelledby="hero-title" className="relative">
      <div className="relative min-h-[92svh] w-full overflow-hidden">
        <HeroVideo className="absolute inset-0 h-full w-full" {...(liveVideo.ok && liveVideo.src && liveVideo.poster ? { mp4: liveVideo.src, webm: liveVideo.src, poster: liveVideo.poster, posterAlt: "Inside Olivo Med Spa" } : { posterAlt: "Aerial view over Logan Square at dusk" })} />
        <div className="absolute inset-0 hero-scrim" aria-hidden="true" />
        <HeroFade className="relative z-10 flex min-h-[92svh] items-end">
          <div className="container-x w-full pb-16 pt-32 md:pb-24">
            <div className="max-w-3xl text-[#fff]">
              <p className="pill !bg-[#fff]/14 !text-[#fff] backdrop-blur-sm">{copy.kicker}</p>
              <h1 id="hero-title" className="display-xl hero-rise mt-6 balance">{copy.title}</h1>
              <p className="mt-6 max-w-[52ch] text-[1.0625rem] leading-relaxed text-[#fff]/85 sm:text-[1.2rem]">{copy.sub}</p>
              <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                <Magnetic><a href={site.booking} data-cta="primary" className="btn btn-primary">{copy.book}</a></Magnetic>
                <Link href={copy.quizHref} className="btn btn-light">{copy.quiz}</Link>
              </div>
              <dl className="mt-10 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-3 border-t border-[#fff]/25 pt-6 text-[0.875rem] sm:grid-cols-3">
                <div><dt className="text-[#fff]/60">Clinic</dt><dd className="mt-0.5 font-medium">2550 W. Fullerton Ave</dd></div>
                <div><dt className="text-[#fff]/60">Hours</dt><dd className="mt-0.5 font-medium">{copy.hours}</dd></div>
                <div><dt className="text-[#fff]/60">Reach us</dt><dd className="mt-0.5 font-medium"><a href={site.sms("Hi Olivo, I would like to book a consultation.")} className="hover:underline underline-offset-4">{copy.note}</a><Verify note={site.smsVerify} /></dd></div>
              </dl>
            </div>
          </div>
        </HeroFade>
        <div className="absolute bottom-6 right-6 z-10 hidden items-center gap-2 text-[0.6875rem] uppercase tracking-[0.2em] text-[#fff]/70 md:flex" aria-hidden="true"><span className="float-y block h-8 w-px bg-[#fff]/60" />{copy.scroll}</div>
      </div>
    </section>
  );
}
