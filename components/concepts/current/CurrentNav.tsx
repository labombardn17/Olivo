"use client";

import { clinic, cta, nav } from "@/content/olivo";
import { useScrolled } from "@/components/shared/useScrolled";
import { MobileMenu } from "@/components/shared/MobileMenu";
import { Verify } from "@/lib/verify";

export function CurrentWordmark({ className = "" }: { className?: string }) {
  return (
    <a href="#top" className={`inline-flex items-baseline gap-2 ${className}`}>
      <span className="font-display text-[1.4rem]">OLIVO</span>
      <span className="cap uppercase tracking-[0.1em] text-[0.625rem]">Med Spa</span>
    </a>
  );
}

/** Sticky. Transparent, then the ground block after 80px. */
export function CurrentNav() {
  const scrolled = useScrolled(80);
  return (
    <header className="fixed inset-x-0 top-0 z-[50] transition-colors duration-300" style={{ backgroundColor: scrolled ? "var(--ground)" : "transparent", borderBottom: `1px solid ${scrolled ? "var(--rule)" : "transparent"}` }}>
      <div className="flex items-center justify-between px-[var(--gutter)] py-4">
        <CurrentWordmark />
        <nav className="hidden md:flex items-center gap-7" aria-label="Primary">
          {nav.map((n) => (
            <a key={n.href} href={n.href} className="u-draw text-[0.9375rem] font-medium">{n.label}</a>
          ))}
        </nav>
        <div className="hidden md:flex items-center gap-6 text-[0.9375rem]">
          <span className="cap" aria-label="Language, English selected">EN <span>/ ES</span><Verify note={clinic.language.verify} /></span>
          <a href={clinic.phoneTel} className="u-draw font-medium">{clinic.phoneDisplay}</a>
          <a href={clinic.booking} target="_blank" rel="noopener noreferrer" data-cta="primary" className="!py-2.5 !px-5 !text-[0.875rem]">{cta.book}</a>
        </div>
        <MobileMenu triggerClassName="text-[0.875rem] font-semibold" label="Menu" wordmark={<CurrentWordmark />} linkClassName="!text-[3.2rem]" />
      </div>
    </header>
  );
}
