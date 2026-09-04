"use client";

import { clinic, cta, nav } from "@/content/olivo";
import { useScrolled } from "@/components/shared/useScrolled";
import { MobileMenu } from "@/components/shared/MobileMenu";
import { Verify } from "@/lib/verify";

export function ResidenceWordmark({ className = "" }: { className?: string }) {
  return (
    <a href="#top" className={`inline-flex flex-col items-center leading-none ${className}`} aria-label="Olivo Med Spa, home">
      <span className="font-display text-[1.5rem] tracking-[0.22em] font-normal">OLIVO</span>
      <span className="eyebrow-r mt-1 text-[0.5625rem]">Med Spa</span>
    </a>
  );
}

/** Centered wordmark. Transparent over the framed film, ground after 80px. */
export function ResidenceNav() {
  const scrolled = useScrolled(80);
  return (
    <header className="fixed inset-x-0 top-0 z-[50] transition-colors duration-700" style={{ backgroundColor: scrolled ? "var(--ground)" : "transparent", borderBottom: `1px solid ${scrolled ? "var(--rule)" : "transparent"}` }}>
      <div className="grid grid-cols-[1fr_auto_1fr] items-center px-[var(--gutter)] py-4 md:py-5">
        <nav className="hidden md:flex items-center gap-7" aria-label="Primary">
          {nav.slice(0, 3).map((n) => (
            <a key={n.href} href={n.href} className="u-draw text-[0.8125rem] tracking-[0.04em]">{n.label}</a>
          ))}
        </nav>
        <div className="md:hidden">
          <MobileMenu triggerClassName="eyebrow-r !text-ink" label="Menu" wordmark={<ResidenceWordmark />} linkClassName="!font-normal text-center" />
        </div>
        <ResidenceWordmark />
        <div className="hidden md:flex items-center justify-end gap-7 text-[0.8125rem] tracking-[0.04em]">
          {nav.slice(3).map((n) => (
            <a key={n.href} href={n.href} className="u-draw">{n.label}</a>
          ))}
          <span className="text-ink-2" aria-label="Language, English selected">EN <span className="opacity-50">/ ES</span><Verify note={clinic.language.verify} /></span>
          <a href={clinic.booking} target="_blank" rel="noopener noreferrer" data-cta="primary" className="!py-2 !px-4">{cta.book}</a>
        </div>
        <a href={clinic.phoneTel} className="md:hidden justify-self-end text-[0.8125rem]">{cta.call}</a>
      </div>
    </header>
  );
}
