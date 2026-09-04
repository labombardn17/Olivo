"use client";

import { clinic, cta, nav } from "@/content/olivo";
import { useScrolled } from "@/components/shared/useScrolled";
import { MobileMenu } from "@/components/shared/MobileMenu";
import { Verify } from "@/lib/verify";

export function CinemaWordmark({ className = "" }: { className?: string }) {
  return (
    <a href="#top" className={`inline-flex items-baseline gap-2 ${className}`}>
      <span className="font-display text-[1.25rem] tracking-[0.08em] font-semibold">OLIVO</span>
      <span className="micro text-ink-2">Med Spa</span>
    </a>
  );
}

/** Transparent over the film, solid black after 80px. */
export function CinemaNav() {
  const scrolled = useScrolled(80);
  return (
    <header className="fixed inset-x-0 top-0 z-[50] transition-colors duration-700" style={{ backgroundColor: scrolled ? "var(--ground)" : "transparent", borderBottom: scrolled ? "1px solid var(--rule)" : "1px solid transparent" }}>
      <div className="stage flex items-center justify-between py-5">
        <CinemaWordmark />
        <nav className="hidden md:flex items-center gap-8" aria-label="Primary">
          {nav.map((n) => (
            <a key={n.href} href={n.href} className="u-draw text-[0.8125rem] text-ink-2 hover:text-ink transition-colors">{n.label}</a>
          ))}
        </nav>
        <div className="hidden md:flex items-center gap-6 text-[0.8125rem]">
          <span className="micro text-ink-2" aria-label="Language, English selected">EN <span>/ ES</span><Verify note={clinic.language.verify} /></span>
          <a href={clinic.phoneTel} className="u-draw">{clinic.phoneDisplay}</a>
          <a href={clinic.booking} target="_blank" rel="noopener noreferrer" data-cta="primary" className="!py-2.5 !px-5">{cta.book}</a>
        </div>
        <MobileMenu triggerClassName="micro" label="Menu" wordmark={<CinemaWordmark />} linkClassName="!font-display !tracking-[-0.03em]" />
      </div>
    </header>
  );
}
