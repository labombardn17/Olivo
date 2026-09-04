"use client";

import { clinic, cta, nav } from "@/content/olivo";
import { useScrolled } from "@/components/shared/useScrolled";
import { MobileMenu } from "@/components/shared/MobileMenu";
import { Verify } from "@/lib/verify";

export function PrecisionWordmark({ className = "" }: { className?: string }) {
  return (
    <a href="#top" className={`inline-flex items-baseline gap-2 ${className}`} aria-label="Olivo Med Spa, home">
      <span className="font-display text-[1.125rem] font-medium tracking-[-0.02em]">OLIVO</span>
      <span className="label">Med Spa</span>
    </a>
  );
}

/** Sticky. Transparent over the hero panel, ground after 80px. Hairline under. */
export function PrecisionNav() {
  const scrolled = useScrolled(80);
  return (
    <header className="fixed inset-x-0 top-0 z-[50] transition-colors duration-300" style={{ backgroundColor: scrolled ? "var(--ground)" : "transparent", borderBottom: `1px solid ${scrolled ? "var(--rule)" : "transparent"}` }}>
      <div className="flex items-center justify-between px-[var(--gutter)] py-4">
        <PrecisionWordmark />
        <nav className="hidden md:flex items-center gap-7" aria-label="Primary">
          {nav.map((n, i) => (
            <a key={n.href} href={n.href} className="u-draw text-[0.8125rem]"><span className="mono text-ink-2 mr-1.5">{String(i + 1).padStart(2, "0")}</span>{n.label}</a>
          ))}
        </nav>
        <div className="hidden md:flex items-center gap-6 text-[0.8125rem]">
          <span className="mono text-ink-2" aria-label="Language, English selected">EN<span className="opacity-50">/ES</span><Verify note={clinic.language.verify} /></span>
          <a href={clinic.phoneTel} className="u-draw mono-lg">{clinic.phoneDisplay}</a>
          <a href={clinic.booking} target="_blank" rel="noopener noreferrer" data-cta="primary" className="!py-2 !px-4">{cta.book}</a>
        </div>
        <MobileMenu triggerClassName="mono" label="Menu" wordmark={<PrecisionWordmark />} linkClassName="!font-display !font-medium !tracking-[-0.03em]" />
      </div>
    </header>
  );
}
