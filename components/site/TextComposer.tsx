"use client";

import { useMemo, useState } from "react";
import { categories, site } from "@/content/site";
import { Verify } from "@/lib/verify";
import { Phone } from "@/components/functional/Icons";

const times = ["Weekday mornings", "Weekday afternoons", "Weekday evenings", "Saturday"];

/** Composes a text message to the clinic. Nothing is sent to a server; the phone's messaging app opens with the note written. */
export function TextComposer() {
  const [name, setName] = useState("");
  const [interest, setInterest] = useState("");
  const [time, setTime] = useState("");
  const [note, setNote] = useState("");
  const [copied, setCopied] = useState(false);
  const body = useMemo(() => {
    const parts = [`Hi Olivo${name ? `, this is ${name}` : ""}.`];
    if (interest) parts.push(`I am interested in ${interest.toLowerCase()}.`);
    if (time) parts.push(`${time} works best for me.`);
    if (note) parts.push(note);
    parts.push("Can we set up a consultation?");
    return parts.join(" ");
  }, [name, interest, time, note]);
  const copy = async () => { try { await navigator.clipboard.writeText(`${body} (${site.phoneDisplay})`); setCopied(true); setTimeout(() => setCopied(false), 1800); } catch {} };
  const field = "mt-1.5 w-full rounded-[var(--r-input)] border border-rule bg-ground px-3.5 py-3 text-[0.9375rem] outline-none focus:border-accent";
  return (
    <form className="card p-6 md:p-8" onSubmit={(e) => e.preventDefault()} aria-labelledby="composer-title">
      <p className="kicker">Write your text</p>
      <h2 id="composer-title" className="font-display mt-2 text-[1.75rem] leading-tight">Tell us what you are thinking about.</h2>
      <div className="mt-6 grid gap-4 sm:grid-cols-2">
        <label className="block text-[0.875rem] font-semibold">Your first name<input value={name} onChange={(e) => setName(e.target.value)} className={field} autoComplete="given-name" placeholder="Optional" /></label>
        <label className="block text-[0.875rem] font-semibold">Best time<select value={time} onChange={(e) => setTime(e.target.value)} className={field}><option value="">No preference</option>{times.map((t) => <option key={t}>{t}</option>)}</select></label>
        <label className="block text-[0.875rem] font-semibold sm:col-span-2">Interested in<select value={interest} onChange={(e) => setInterest(e.target.value)} className={field}><option value="">Not sure yet</option>{categories.map((c) => <option key={c.key}>{c.name}</option>)}<option>A consultation only</option></select></label>
        <label className="block text-[0.875rem] font-semibold sm:col-span-2">Anything else<textarea value={note} onChange={(e) => setNote(e.target.value)} rows={3} className={field} placeholder="A question, a treatment you have had before, anything useful" /></label>
      </div>
      <p className="mt-5 rounded-[var(--r-card)] bg-ground-2 p-4 text-[0.9375rem] leading-relaxed text-ink-2" aria-live="polite">{body}</p>
      <div className="mt-5 flex flex-col gap-3 sm:flex-row">
        <a href={site.sms(body)} className="btn btn-primary">Text this to us</a>
        <button type="button" onClick={copy} className="btn btn-outline">{copied ? "Copied" : "Copy the message"}</button>
        <a href={site.phoneTel} className="btn btn-outline"><Phone />Call instead</a>
      </div>
      <p className="mt-4 text-[0.8125rem] text-ink-2">Opens your messaging app with the note written. Nothing is stored on this site. The team replies during clinic hours.<Verify note={site.smsVerify} /></p>
    </form>
  );
}
