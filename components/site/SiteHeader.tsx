"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { categories, mainNav, site } from "@/content/site";
import { flagshipSlugs } from "@/content/services";
import { ui, type Lang } from "@/content/ui";
import { altPath, href } from "@/lib/i18n";
import { localizeCategory } from "@/lib/localize";
import { useScrolled } from "@/components/shared/useScrolled";
import { Phone, Arrow } from "@/components/functional/Icons";
import { Wordmark } from "./Wordmark";

const flagshipNames: Record<string, string> = { "emsculpt-neo": "Emsculpt Neo", emface: "Emface", "exion-body": "Exion", emsella: "Emsella", "opus-plasma": "Opus Plasma", "co2-fractional-laser": "CO2", miradry: "Miradry", hydrafacial: "Hydrafacial", "exion-rf-microneedling": "RF microneedling" };

/** Sticky header. Transparent over a dark hero on the homepage, solid elsewhere. Hides on scroll down. */
export function SiteHeader({ lang = "en" }: { lang?: Lang }) {
  const t = ui(lang);
  const pathname = usePathname();
  const overlay = pathname === "/" || pathname === "/es";
  const scrolled = useScrolled(40);
  const solid = !overlay || scrolled;
  const [open, setOpen] = useState(false);
  const [mega, setMega] = useState(false);
  const [hidden, setHidden] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const dialogRef = useRef<HTMLDialogElement>(null);
  const cats = categories.map((c) => localizeCategory(c, lang));
  const navItems = [[t.nav.treatments, "/treatments", true], [t.nav.concerns, "/concerns", false], [t.nav.memberships, "/memberships", false], [t.nav.specials, "/specials", false], [t.nav.about, "/about", false], [t.nav.visit, "/visit", false]] as [string, string, boolean][];
  void mainNav;
  useEffect(() => { setMega(false); setOpen(false); }, [pathname]);
  useEffect(() => {
    let last = window.scrollY;
    const on = () => { const y = window.scrollY; setHidden(y > 320 && y > last + 4 && !mega); last = y; };
    window.addEventListener("scroll", on, { passive: true });
    return () => window.removeEventListener("scroll", on);
  }, [mega]);
  useEffect(() => {
    if (!mega) return;
    const on = (e: PointerEvent) => { if (ref.current && !ref.current.contains(e.target as Node)) setMega(false); };
    const esc = (e: KeyboardEvent) => { if (e.key === "Escape") setMega(false); };
    document.addEventListener("pointerdown", on); document.addEventListener("keydown", esc);
    return () => { document.removeEventListener("pointerdown", on); document.removeEventListener("keydown", esc); };
  }, [mega]);
  useEffect(() => {
    const d = dialogRef.current;
    if (!d) return;
    if (open && !d.open) d.showModal();
    if (!open && d.open) d.close();
  }, [open]);
  const L = (p: string) => href(lang, p);
  return (
    <header data-header="" data-hidden={hidden} className={`sticky top-0 z-[50] ${solid ? "glass border-b border-rule text-ink" : "border-b border-transparent text-[#fff]"}`} style={{ marginBottom: overlay ? "calc(-1 * 4.5rem)" : 0 }}>
      <div className="container-x flex h-[4.5rem] items-center justify-between gap-6 lg:h-[5rem]">
        <Wordmark href={L("/")} />
        <nav className="hidden items-center gap-7 lg:flex" aria-label="Primary">
          {navItems.map(([label, path, isMega]) =>
            isMega ? (
              <div key={path} ref={ref} className="relative">
                <button type="button" aria-expanded={mega} aria-haspopup="true" onClick={() => setMega(!mega)} className="inline-flex items-center gap-1 text-[0.9375rem] font-medium hover:opacity-70">
                  {label} <span aria-hidden="true" className="text-[0.65rem]">{mega ? "▴" : "▾"}</span>
                </button>
                {mega && (
                  <div className="absolute left-1/2 top-full mt-4 w-[46rem] -translate-x-1/2 card p-7 text-ink grid grid-cols-[1.2fr_1fr] gap-8 shadow-[var(--shadow-card-hover)]">
                    <div>
                      <p className="kicker mb-3">{t.nav.byGoal}</p>
                      <ul className="grid grid-cols-2 gap-x-6 gap-y-2 text-[0.9375rem]">
                        {cats.map((c) => (<li key={c.key}><Link href={L(`/treatments/${c.key}`)} className="block py-0.5 hover:text-accent-text">{c.name}</Link></li>))}
                      </ul>
                      <Link href={L("/treatments")} className="link-arrow mt-4 text-[0.875rem]">{t.nav.allTreatments} <Arrow /></Link>
                    </div>
                    <div className="border-l border-rule pl-8">
                      <p className="kicker mb-3">{t.nav.byDevice}</p>
                      <ul className="space-y-1.5 text-[0.9375rem]">
                        {flagshipSlugs.map((s) => (<li key={s}><Link href={L(`/treatments/${s}`)} className="hover:text-accent-text">{flagshipNames[s]}</Link></li>))}
                      </ul>
                      <Link href={L("/quiz")} className="mt-5 block rounded-[var(--r-card)] bg-ground-2 p-4 text-[0.875rem] hover:ring-soft"><span className="font-semibold">{t.nav.notSure}</span><br /><span className="text-ink-2">{t.nav.quizLine}</span></Link>
                    </div>
                  </div>
                )}
              </div>
            ) : (
              <Link key={path} href={L(path)} className={`text-[0.9375rem] font-medium hover:opacity-70 ${pathname === L(path) ? "underline underline-offset-8 decoration-1" : ""}`}>{label}</Link>
            ),
          )}
        </nav>
        <div className="hidden items-center gap-4 lg:flex">
          <Link href={altPath(pathname)} className="text-[0.75rem] font-semibold tracking-[0.12em] opacity-80 hover:opacity-100" aria-label={t.nav.switchLangLabel} hrefLang={lang === "es" ? "en" : "es"}>{t.nav.switchLang}</Link>
          <a href={site.phoneTel} className="inline-flex items-center gap-2 text-[0.9375rem] font-medium hover:opacity-70"><Phone />{site.phoneDisplay}</a>
          <a href={L(site.booking)} data-cta="primary" className="btn btn-primary btn-sm">{t.nav.book}</a>
        </div>
        <button type="button" data-nav-toggle="" onClick={() => setOpen(true)} className="lg:hidden inline-flex items-center gap-2 text-[0.875rem] font-semibold" aria-haspopup="dialog" aria-expanded={open}>
          <span aria-hidden="true" className="flex flex-col gap-[5px]"><span className="block h-[2px] w-6 bg-current" /><span className="block h-[2px] w-6 bg-current" /><span className="block h-[2px] w-4 bg-current" /></span>{t.nav.menu}
        </button>
        <dialog ref={dialogRef} onClose={() => setOpen(false)} onClick={(e) => { if (e.target === dialogRef.current) setOpen(false); }} className="menu-dialog m-0 h-full max-h-none w-full max-w-none bg-ground p-0 text-ink" data-mobile-menu="" aria-label={t.nav.menu}>
          <div className="flex min-h-full flex-col overflow-y-auto">
            <div className="container-x flex h-[4.5rem] items-center justify-between">
              <Wordmark href={L("/")} />
              <button type="button" onClick={() => setOpen(false)} className="text-[0.875rem] font-semibold">{t.nav.close}</button>
            </div>
            <nav className="container-x flex-1 py-4" aria-label="Mobile">
              <ul className="divide-y divide-rule border-y border-rule">
                {navItems.map(([label, path]) => (<li key={path}><Link href={L(path)} className="flex items-center justify-between py-4 font-display text-[1.75rem]">{label}<Arrow className="h-4 w-4 opacity-50" /></Link></li>))}
                <li><Link href={L("/quiz")} className="flex items-center justify-between py-4 font-display text-[1.75rem]">{t.nav.quiz}<Arrow className="h-4 w-4 opacity-50" /></Link></li>
              </ul>
              <ul className="mt-5 grid grid-cols-2 gap-x-4 gap-y-2 text-[0.9375rem] text-ink-2">
                {cats.map((c) => (<li key={c.key}><Link href={L(`/treatments/${c.key}`)}>{c.name}</Link></li>))}
              </ul>
              <p className="mt-6 text-[0.8125rem] font-semibold tracking-[0.12em] text-ink-2"><Link href={altPath(pathname)} hrefLang={lang === "es" ? "en" : "es"}>{lang === "es" ? "ENGLISH" : "ESPAÑOL"}</Link></p>
            </nav>
            <div className="container-x grid gap-3 pb-10">
              <a href={L(site.booking)} className="btn btn-primary">{t.nav.bookConsult}</a>
              <div className="grid grid-cols-2 gap-3">
                <a href={site.sms(t.textNow.body)} className="btn btn-outline">{t.nav.textUs}</a>
                <a href={site.phoneTel} className="btn btn-outline"><Phone />{t.nav.call}</a>
              </div>
            </div>
          </div>
        </dialog>
      </div>
    </header>
  );
}
