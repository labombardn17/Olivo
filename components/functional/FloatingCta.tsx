"use client";

import { useEffect, useState } from "react";
import { clinic, cta } from "@/content/olivo";
import { Phone } from "./Icons";

/** Desktop: a floating Book button bottom-right after the hero. Mobile: a Call / Book bar. Never overlaps the design switcher (bottom-left). */
export function FloatingCta() {
  const [show, setShow] = useState(false);
  useEffect(() => {
    const hero = document.querySelector("[data-hero]");
    if (!hero) return;
    const io = new IntersectionObserver(([e]) => setShow(!(e?.isIntersecting ?? true)), { threshold: 0.1 });
    io.observe(hero);
    return () => io.disconnect();
  }, []);
  const cls = show ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0 pointer-events-none";
  return (
    <>
      <div data-sticky-bar="" className={`fixed bottom-6 right-6 z-[75] hidden md:flex flex-col items-end gap-2 transition-all duration-300 ${cls}`} aria-hidden={!show}>
        <span className="rounded-full bg-ground/90 px-3 py-1 text-[0.75rem] text-ink-2 shadow-[var(--shadow-card)]">{clinic.financing.line}</span>
        <a href={clinic.booking} target="_blank" rel="noopener noreferrer" className="btn btn-primary shadow-[var(--shadow-card-hover)]" tabIndex={show ? 0 : -1}>{cta.primary}</a>
      </div>
      <div data-sticky-bar="" className={`fixed inset-x-0 bottom-0 z-[75] md:hidden px-3 pb-[max(0.75rem,env(safe-area-inset-bottom))] pt-3 pointer-events-none transition-all duration-300 ${cls}`} aria-hidden={!show}>
        <div className="pointer-events-auto ml-[4.75rem] flex items-center gap-2 rounded-[var(--r-card)] border border-rule bg-ground p-1.5 shadow-[var(--shadow-card-hover)]">
          <a href={clinic.phoneTel} className="btn btn-outline flex-1 !px-3" tabIndex={show ? 0 : -1}><Phone />{cta.call}</a>
          <a href={clinic.booking} target="_blank" rel="noopener noreferrer" className="btn btn-primary flex-1 !px-3" tabIndex={show ? 0 : -1}>{cta.book}</a>
        </div>
      </div>
    </>
  );
}
