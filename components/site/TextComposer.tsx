"use client";

import { useMemo, useState } from "react";
import { categories, site } from "@/content/site";
import { ui, type Lang } from "@/content/ui";
import { localizeCategory } from "@/lib/localize";
import { Verify } from "@/lib/verify";
import { Phone } from "@/components/functional/Icons";

/** Composes a text message to the clinic. Nothing is sent to a server; the phone's messaging app opens with the note written. */
export function TextComposer({ lang = "en" }: { lang?: Lang }) {
  const t = ui(lang).pages.composer;
  const cats = categories.map((c) => localizeCategory(c, lang));
  const [name, setName] = useState("");
  const [interest, setInterest] = useState("");
  const [time, setTime] = useState("");
  const [note, setNote] = useState("");
  const [copied, setCopied] = useState(false);
  const body = useMemo(() => {
    const parts = [`${t.hi}${name ? t.thisIs(name) : ""}.`];
    if (interest) parts.push(t.interested(interest.toLowerCase()));
    if (time) parts.push(t.works(time));
    if (note) parts.push(note);
    parts.push(t.ask);
    return parts.join(" ");
  }, [name, interest, time, note, t]);
  const copy = async () => { try { await navigator.clipboard.writeText(`${body} (${site.phoneDisplay})`); setCopied(true); setTimeout(() => setCopied(false), 1800); } catch {} };
  const field = "mt-1.5 w-full rounded-[var(--r-input)] border border-rule bg-ground px-3.5 py-3 text-[0.9375rem] outline-none focus:border-accent";
  return (
    <form className="card p-6 md:p-8" onSubmit={(e) => e.preventDefault()} aria-labelledby="composer-title">
      <p className="kicker">{t.kicker}</p>
      <h2 id="composer-title" className="font-display mt-2 text-[1.75rem] leading-tight">{t.title}</h2>
      <div className="mt-6 grid gap-4 sm:grid-cols-2">
        <label className="block text-[0.875rem] font-semibold">{t.name}<input value={name} onChange={(e) => setName(e.target.value)} className={field} autoComplete="given-name" placeholder={t.optional} /></label>
        <label className="block text-[0.875rem] font-semibold">{t.time}<select value={time} onChange={(e) => setTime(e.target.value)} className={field}><option value="">{t.noPref}</option>{t.times.map((x) => <option key={x}>{x}</option>)}</select></label>
        <label className="block text-[0.875rem] font-semibold sm:col-span-2">{t.interest}<select value={interest} onChange={(e) => setInterest(e.target.value)} className={field}><option value="">{t.notSure}</option>{cats.map((c) => <option key={c.key}>{c.name}</option>)}<option>{t.consultOnly}</option></select></label>
        <label className="block text-[0.875rem] font-semibold sm:col-span-2">{t.anything}<textarea value={note} onChange={(e) => setNote(e.target.value)} rows={3} className={field} placeholder={t.placeholder} /></label>
      </div>
      <p className="mt-5 rounded-[var(--r-card)] bg-ground-2 p-4 text-[0.9375rem] leading-relaxed text-ink-2" aria-live="polite">{body}</p>
      <div className="mt-5 flex flex-col gap-3 sm:flex-row">
        <a href={site.sms(body)} className="btn btn-primary">{t.send}</a>
        <button type="button" onClick={copy} className="btn btn-outline">{copied ? t.copied : t.copy}</button>
        <a href={site.phoneTel} className="btn btn-outline"><Phone />{t.callInstead}</a>
      </div>
      <p className="mt-4 text-[0.8125rem] text-ink-2">{t.note}<Verify note={site.smsVerify} /></p>
    </form>
  );
}
