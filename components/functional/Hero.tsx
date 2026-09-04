import { HeroVideo } from "@/components/shared/HeroVideo";

import { clinic, cta, proof, trust } from "@/content/olivo";
import { Verify } from "@/lib/verify";
import { Stars } from "./Icons";

export type HeroVariant = "photo" | "film" | "split" | "framed" | "block";

interface Props {
  variant: HeroVariant;
  eyebrow: string;
  title: React.ReactNode;
  sub: string;
}

function Actions({ light }: { light?: boolean }) {
  return (
    <>
      <div className="mt-8 flex flex-col gap-3 sm:flex-row">
        <a href={clinic.booking} target="_blank" rel="noopener noreferrer" data-cta="primary" className="btn btn-primary">{cta.primary}</a>
        <a href="#treatments" data-cta="text" className={`btn ${light ? "btn-light" : "btn-outline"}`}>See treatments</a>
      </div>
      <p className={`mt-5 text-[0.875rem] ${light ? "text-[#fff]/80" : "text-ink-2"}`}>
        <a href="#memberships" className="font-medium hover:underline underline-offset-4">Memberships</a>
        <span className="mx-2 opacity-50">|</span>
        <span>{clinic.financing.line}</span>
      </p>
    </>
  );
}

/** Ariava-style hero: photo or film, eyebrow pill, one headline, one subline, two buttons, small membership and financing links. */
export function Hero({ variant, eyebrow, title, sub }: Props) {
  if (variant === "photo" || variant === "film") {
    return (
      <section id="top" data-hero="" aria-labelledby="hero-title" className="relative">
        <div className="relative min-h-[86svh] w-full overflow-hidden">
          <HeroVideo className="absolute inset-0 h-full w-full" />
          <div className="absolute inset-0" style={{ background: "linear-gradient(to right, rgba(0,0,0,0.62), rgba(0,0,0,0.25) 55%, rgba(0,0,0,0.05))" }} aria-hidden="true" />
          <div className="absolute inset-x-0 bottom-0 h-1/2" style={{ background: "linear-gradient(to top, rgba(0,0,0,0.45), transparent)" }} aria-hidden="true" />
          <div className={`relative z-10 flex min-h-[86svh] items-center ${variant === "film" ? "text-center" : ""}`}>
            <div className={`container-x w-full py-24 ${variant === "film" ? "flex flex-col items-center" : ""}`}>
              <div className={`max-w-xl text-[#fff] ${variant === "film" ? "items-center text-center flex flex-col" : ""}`}>
                <span className="pill mb-5 !bg-[#fff]/15 !text-[#fff] backdrop-blur-sm">{eyebrow}</span>
                <h1 id="hero-title" className="font-display text-[2.75rem] leading-[1.05] sm:text-[3.5rem] lg:text-[4.25rem]">{title}</h1>
                <p className="mt-5 max-w-[46ch] text-[1.0625rem] leading-relaxed text-[#fff]/85 sm:text-[1.125rem]">{sub}</p>
                <Actions light />
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
  if (variant === "split" || variant === "block") {
    return (
      <section id="top" data-hero="" aria-labelledby="hero-title" className={variant === "block" ? "bg-ground-2" : ""}>
        <div className="container-x grid items-center gap-10 py-12 lg:grid-cols-2 lg:gap-16 lg:py-20">
          <div className="order-2 lg:order-1">
            <span className="pill mb-5">{eyebrow}</span>
            <h1 id="hero-title" className="font-display text-[2.75rem] leading-[1.05] sm:text-[3.5rem] lg:text-[4rem]">{title}</h1>
            <p className="mt-5 max-w-[46ch] text-[1.0625rem] leading-relaxed text-ink-2 sm:text-[1.125rem]">{sub}</p>
            <Actions />
            {variant === "split" && (
              <dl className="mt-10 grid grid-cols-3 gap-4 border-t border-rule pt-6">
                {[["2013", "Physician owned and led since"], ["9", "Device platforms on site"], ["2007", "Practicing medicine since"]].map(([n, l]) => (
                  <div key={l}><dd className="font-display text-[2rem] leading-none">{n}</dd><dt className="mt-1 text-[0.8125rem] text-ink-2">{l}</dt></div>
                ))}
              </dl>
            )}
          </div>
          <div className={`order-1 lg:order-2 relative img-frame ${variant === "block" ? "lg:-mr-8" : ""}`}>
            <HeroVideo className="relative aspect-[4/5] sm:aspect-[4/3] lg:aspect-[4/5] w-full" />
          </div>
        </div>
      </section>
    );
  }
  // framed
  return (
    <section id="top" data-hero="" aria-labelledby="hero-title" className="pt-6">
      <div className="container-x">
        <div className="relative overflow-hidden img-frame min-h-[78svh]">
          <HeroVideo className="absolute inset-0 h-full w-full" />
          <div className="absolute inset-0" style={{ background: "linear-gradient(to top, rgba(0,0,0,0.6), rgba(0,0,0,0.15) 60%, rgba(0,0,0,0.05))" }} aria-hidden="true" />
          <div className="relative z-10 flex min-h-[78svh] flex-col items-center justify-end px-6 pb-14 text-center text-[#fff] md:pb-20">
            <span className="pill mb-5 !bg-[#fff]/15 !text-[#fff]">{eyebrow}</span>
            <h1 id="hero-title" className="font-display max-w-[22ch] text-[2.5rem] leading-[1.08] sm:text-[3.25rem] lg:text-[3.75rem]">{title}</h1>
            <p className="mt-5 max-w-[48ch] text-[1.0625rem] text-[#fff]/85">{sub}</p>
            <div className="flex flex-col items-center"><Actions light /></div>
          </div>
        </div>
      </div>
    </section>
  );
}

/** Trust bar under the hero: reviews placeholder, physician-led, nine platforms, Logan Square. */
export function TrustBar() {
  return (
    <div className="border-b border-rule bg-ground" aria-label="Trust facts">
      <div className="container-x flex flex-col items-center justify-center gap-3 py-4 text-center text-[0.9375rem] sm:flex-row sm:gap-6">
        <span className="inline-flex items-center gap-2"><Stars /> <span className="font-semibold">[PLACEHOLDER RATING]</span> <span className="text-ink-2">{trust.google}</span><Verify note={trust.googleVerify} /></span>
        <span className="hidden text-rule sm:inline" aria-hidden="true">|</span>
        <span className="text-ink-2">{proof.physician}</span>
        <span className="hidden text-rule sm:inline" aria-hidden="true">|</span>
        <span className="hidden text-ink-2 sm:inline">{proof.nine}</span>
        <span className="hidden text-rule sm:inline" aria-hidden="true">|</span>
        <span className="hidden text-ink-2 sm:inline">{proof.place}</span>
      </div>
    </div>
  );
}
