"use client";

import { useEffect, useState } from "react";
import { clinic, cta } from "@/content/olivo";

/** Mobile only. Appears after the hero leaves the viewport. Sits bottom-right, clear of the switcher. */
export function StickyMobileBar() {
  const [show, setShow] = useState(false);
  useEffect(() => {
    const hero = document.querySelector("[data-hero]");
    if (!hero) return;
    const io = new IntersectionObserver(([e]) => setShow(!(e?.isIntersecting ?? true)), { threshold: 0.05 });
    io.observe(hero);
    return () => io.disconnect();
  }, []);
  return (
    <div
      data-sticky-bar=""
      aria-hidden={!show}
      className={`fixed right-4 bottom-4 z-[75] flex md:hidden overflow-hidden border border-rule bg-ground text-ink transition-[transform,opacity] duration-300 ${show ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0 pointer-events-none"}`}
    >
      <a href={clinic.booking} target="_blank" rel="noopener noreferrer" className="bg-ink text-ground px-5 py-3.5 text-[13px]" tabIndex={show ? 0 : -1}>
        {cta.book}
      </a>
      <a href={clinic.phoneTel} className="px-5 py-3.5 text-[13px]" tabIndex={show ? 0 : -1}>
        {cta.call}
      </a>
    </div>
  );
}
