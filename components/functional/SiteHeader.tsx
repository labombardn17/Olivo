"use client";

import { useEffect, useRef, useState } from "react";
import * as Dialog from "@radix-ui/react-dialog";
import { clinic, cta, devices, featured, nav } from "@/content/olivo";
import { useScrolled } from "@/components/shared/useScrolled";
import { Phone } from "./Icons";
import { Verify } from "@/lib/verify";

interface Props {
  wordmark: React.ReactNode;
  /** Transparent over the hero (dark heroes) or always solid. */
  overlay?: boolean;
}

/** Sticky header: wordmark, nav with a Treatments dropdown, phone, Book. Mobile: full-screen menu. */
export function SiteHeader({ wordmark, overlay = false }: Props) {
  const scrolled = useScrolled(60);
  const solid = !overlay || scrolled;
  const [open, setOpen] = useState(false);
  const [dd, setDd] = useState(false);
  const ddRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (!dd) return;
    const on = (e: PointerEvent) => { if (ddRef.current && !ddRef.current.contains(e.target as Node)) setDd(false); };
    document.addEventListener("pointerdown", on);
    return () => document.removeEventListener("pointerdown", on);
  }, [dd]);
  return (
    <header
      data-header=""
      className={`sticky top-0 z-[50] transition-[background-color,box-shadow,border-color] duration-300 ${solid ? "border-b border-rule shadow-[0_1px_0_rgba(0,0,0,0.02)]" : "border-b border-transparent"} ${overlay && !solid ? "text-[#fff]" : "text-ink"}`}
      style={{ backgroundColor: solid ? "var(--ground)" : "transparent", marginBottom: overlay ? "calc(-1 * var(--header-h, 4.5rem))" : 0 }}
    >
      <div className="container-x flex h-[4.5rem] items-center justify-between gap-6 lg:h-20">
        {wordmark}
        <nav className="hidden items-center gap-7 lg:flex" aria-label="Primary">
          {nav.map((n) =>
            n.label === "Treatments" ? (
              <div key={n.href} ref={ddRef} className="relative">
                <button type="button" aria-expanded={dd} aria-haspopup="true" onClick={() => setDd(!dd)} className="inline-flex items-center gap-1 text-[0.9375rem] font-medium hover:opacity-70">
                  Treatments <span aria-hidden="true" className="text-[0.7rem]">{dd ? "▴" : "▾"}</span>
                </button>
                {dd && (
                  <div className="absolute left-0 top-full mt-3 w-[36rem] card p-6 text-ink grid grid-cols-2 gap-6">
                    <div>
                      <p className="pill mb-3">By concern</p>
                      <ul className="space-y-1.5 text-[0.9375rem]">
                        {featured.map((f) => (
                          <li key={f.slug}><a href="#treatments" onClick={() => setDd(false)} className="hover:text-accent-text">{f.title}</a></li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <p className="pill mb-3">By device</p>
                      <ul className="space-y-1.5 text-[0.9375rem]">
                        {devices.map((d) => (
                          <li key={d.slug}><a href="#technology" onClick={() => setDd(false)} className="hover:text-accent-text">{d.name}</a></li>
                        ))}
                      </ul>
                    </div>
                  </div>
                )}
              </div>
            ) : (
              <a key={n.href} href={n.href} className="text-[0.9375rem] font-medium hover:opacity-70">{n.label}</a>
            ),
          )}
        </nav>
        <div className="hidden items-center gap-5 lg:flex">
          <span className="text-[0.75rem] font-semibold tracking-[0.1em] opacity-80" aria-label="Language, English selected">EN / ES<Verify note={clinic.language.verify} /></span>
          <a href={clinic.phoneTel} className="inline-flex items-center gap-2 text-[0.9375rem] font-medium hover:opacity-70"><Phone />{clinic.phoneDisplay}</a>
          <a href={clinic.booking} target="_blank" rel="noopener noreferrer" data-cta="primary" className="btn btn-primary btn-sm">{cta.book}</a>
        </div>
        <Dialog.Root open={open} onOpenChange={setOpen}>
          <Dialog.Trigger data-nav-toggle="" className="lg:hidden inline-flex items-center gap-2 text-[0.875rem] font-semibold" aria-label="Open menu">
            <span aria-hidden="true" className="flex flex-col gap-[5px]"><span className="block h-[2px] w-6 bg-current" /><span className="block h-[2px] w-6 bg-current" /><span className="block h-[2px] w-6 bg-current" /></span>
            Menu
          </Dialog.Trigger>
          <Dialog.Content className="fixed inset-0 z-[78] flex flex-col overflow-y-auto bg-ground text-ink" data-mobile-menu="" aria-describedby={undefined}>
            <div className="container-x flex h-[4.5rem] items-center justify-between">
              <Dialog.Title className="font-display text-xl">{clinic.wordmark}</Dialog.Title>
              <Dialog.Close className="text-[0.875rem] font-semibold" aria-label="Close menu">Close</Dialog.Close>
            </div>
            <nav className="container-x flex-1 py-6" aria-label="Mobile">
              <ul className="divide-y divide-rule border-y border-rule">
                {nav.map((n) => (
                  <li key={n.href}><a href={n.href} onClick={() => setOpen(false)} className="block py-4 font-display text-[1.6rem]">{n.label}</a></li>
                ))}
              </ul>
              <p className="mt-6 text-[0.75rem] font-semibold tracking-[0.1em] text-ink-2">EN / ES<Verify note={clinic.language.verify} /></p>
            </nav>
            <div className="container-x flex flex-col gap-3 pb-28">
              <a href={clinic.booking} target="_blank" rel="noopener noreferrer" className="btn btn-primary">{cta.primary}</a>
              <a href={clinic.phoneTel} className="btn btn-outline"><Phone />{clinic.phoneDisplay}</a>
            </div>
          </Dialog.Content>
        </Dialog.Root>
      </div>
    </header>
  );
}
