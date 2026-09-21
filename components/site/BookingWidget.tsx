"use client";

import { useState } from "react";
import { site } from "@/content/site";

/** The Vagaro calendar loads on tap so the page stays light and Vagaro's cookies are set only when the visitor chooses to book. */
export function BookingWidget() {
  const [open, setOpen] = useState(false);
  if (!open) {
    return (
      <div className="card flex min-h-[26rem] flex-col items-center justify-center p-8 text-center">
        <p className="kicker">Live calendar</p>
        <h2 className="font-display mt-3 text-[1.9rem] leading-tight">See open times and book in about a minute.</h2>
        <p className="mt-3 max-w-[40ch] text-[0.9375rem] text-ink-2">The calendar is run by Vagaro, the clinic&apos;s booking system. It opens right here.</p>
        <button type="button" onClick={() => setOpen(true)} className="btn btn-primary mt-7">Open the calendar</button>
        <a href={site.bookingExternal} target="_blank" rel="noopener noreferrer" className="link-arrow mt-4 text-[0.875rem]">Or open it in a new tab</a>
      </div>
    );
  }
  return (
    <div className="card overflow-hidden p-2">
      <iframe src={site.bookingWidget} title="Olivo Med Spa online booking, powered by Vagaro" className="h-[68rem] w-full rounded-[calc(var(--r-card)-0.25rem)] bg-ground" style={{ border: 0 }} />
      <p className="p-3 text-center text-[0.8125rem] text-ink-2">If the calendar does not load, <a href={site.bookingExternal} target="_blank" rel="noopener noreferrer" className="link-arrow">open it on Vagaro</a> or text us.</p>
    </div>
  );
}
