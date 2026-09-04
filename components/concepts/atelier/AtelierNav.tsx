"use client";

import { clinic, cta, nav } from "@/content/olivo";
import { useScrolled } from "@/components/shared/useScrolled";
import { MobileMenu } from "@/components/shared/MobileMenu";
import { Verify } from "@/lib/verify";

export function AtelierWordmark({ className = "" }: { className?: string }) {
  return (
    <a href="#top" className={`inline-flex items-baseline gap-2 ${className}`}>
      <span className="font-display text-[1.6rem] leading-none tracking-[0.02em]" style={{ fontVariationSettings: '"opsz" 72, "SOFT" 50' }}>OLIVO</span>
      <span className="sc text-[0.6875rem] text-ink-2">Med Spa</span>
    </a>
  );
}

/** Sticky. Transparent over the hero, paper after 80px. Hairline above. */
export function AtelierNav() {
  const scrolled = useScrolled(80);
  return (
    <header className={`fixed inset-x-0 top-0 z-[50] transition-colors duration-500 ${scrolled ? "border-b border-rule" : ""}`} style={{ backgroundColor: scrolled ? "color-mix(in srgb, var(--ground) 94%, transparent)" : "transparent" }}>
      <div className="h-px w-full bg-ink/70" aria-hidden="true" />
      <div className="flex items-center justify-between px-[var(--gutter)] py-4">
        <AtelierWordmark />
        <nav className="hidden md:flex items-center gap-7" aria-label="Primary">
          {nav.map((n) => (
            <a key={n.href} href={n.href} className="u-draw text-[0.875rem]">{n.label}</a>
          ))}
        </nav>
        <div className="hidden md:flex items-center gap-6 text-[0.875rem]">
          <span className="text-ink-2" aria-label="Language, English selected">EN <span>/ ES</span><Verify note={clinic.language.verify} /></span>
          <a href={clinic.phoneTel} className="u-draw">{clinic.phoneDisplay}</a>
          <a href={clinic.booking} target="_blank" rel="noopener noreferrer" data-cta="primary" className="!py-2.5 !px-5">{cta.book}</a>
        </div>
        <MobileMenu triggerClassName="sc" label="Menu" wordmark={<AtelierWordmark />} />
      </div>
    </header>
  );
}
