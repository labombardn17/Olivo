"use client";

import { useEffect, useState } from "react";
import { site } from "@/content/site";
import { ui, type Lang } from "@/content/ui";
import { href } from "@/lib/i18n";
import { Verify } from "@/lib/verify";
import { Phone } from "@/components/functional/Icons";

function Chat({ className = "h-5 w-5" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M21 12a8 8 0 0 1-11.6 7.1L4 20l1.1-4.2A8 8 0 1 1 21 12Z" /><path d="M8 12h.01M12 12h.01M16 12h.01" />
    </svg>
  );
}

/** Text now. Desktop: a pill bottom-right. Mobile: a Text, Call, Book bar once the hero has passed. */
export function TextNow({ lang = "en" }: { lang?: Lang }) {
  const t = ui(lang).textNow;
  const [show, setShow] = useState(false);
  useEffect(() => {
    const hero = document.querySelector("[data-hero]");
    if (!hero) { setShow(true); return; }
    const io = new IntersectionObserver(([e]) => setShow(!(e?.isIntersecting ?? true)), { threshold: 0.05 });
    io.observe(hero);
    return () => io.disconnect();
  }, []);
  const cls = show ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0 pointer-events-none";
  const book = href(lang, site.booking);
  return (
    <aside aria-label={t.label}>
      <div className={`fixed bottom-6 right-6 z-[75] hidden md:flex items-center gap-2 rounded-full glass border border-rule p-1.5 text-now transition-all duration-300 ${cls}`} aria-hidden={!show}>
        <a href={site.sms(t.body)} className="btn btn-outline btn-sm !border-transparent" tabIndex={show ? 0 : -1}><Chat className="h-4 w-4" />{t.text}</a>
        <a href={site.phoneTel} className="btn btn-outline btn-sm !border-transparent" tabIndex={show ? 0 : -1}><Phone />{t.call}</a>
        <a href={book} className="btn btn-primary btn-sm" tabIndex={show ? 0 : -1}>{t.book}</a>
        <Verify note={site.smsVerify} />
      </div>
      <div className={`fixed inset-x-0 bottom-0 z-[75] md:hidden px-3 pb-[max(0.75rem,env(safe-area-inset-bottom))] pt-3 pointer-events-none transition-all duration-300 ${cls}`} aria-hidden={!show}>
        <div className="pointer-events-auto grid grid-cols-3 gap-1.5 rounded-full glass border border-rule p-1.5 text-now">
          <a href={site.sms(t.body)} className="btn btn-outline !border-transparent !px-2" tabIndex={show ? 0 : -1}><Chat className="h-4 w-4" />{t.textShort}</a>
          <a href={site.phoneTel} className="btn btn-outline !border-transparent !px-2" tabIndex={show ? 0 : -1}><Phone />{t.call}</a>
          <a href={book} className="btn btn-primary !px-2" tabIndex={show ? 0 : -1}>{t.book}</a>
        </div>
      </div>
    </aside>
  );
}
