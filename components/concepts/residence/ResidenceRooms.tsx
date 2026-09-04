"use client";

import { useState } from "react";
import { clinic, devices, fullMenu } from "@/content/olivo";
import { Placeholder, type Shot } from "@/components/shared/Placeholder";
import { Reveal } from "@/components/shared/Reveal";
import { Verify } from "@/lib/verify";

interface Room { shot: Shot; name: string; line: string; spots: { i: number; x: number; y: number }[] }

/** Three rooms, three devices each, in canonical order. Positions are placeholders until room photography exists. */
const rooms: Room[] = [
  { shot: "room-1", name: "The body room", line: "Where the BTL platforms live.", spots: [{ i: 0, x: 30, y: 58 }, { i: 1, x: 62, y: 46 }, { i: 2, x: 80, y: 66 }] },
  { shot: "room-2", name: "The wellness and resurfacing room", line: "Quiet, and warmer than you expect.", spots: [{ i: 3, x: 24, y: 62 }, { i: 4, x: 55, y: 50 }, { i: 5, x: 78, y: 58 }] },
  { shot: "room-3", name: "The treatment suite", line: "Facials, sweat, and texture, in one room.", spots: [{ i: 6, x: 28, y: 52 }, { i: 7, x: 50, y: 64 }, { i: 8, x: 76, y: 48 }] },
];

function Hotspot({ i, x, y, open, onToggle, onOpen }: { i: number; x: number; y: number; open: boolean; onToggle: () => void; onOpen: () => void }) {
  const d = devices[i]!;
  return (
    <div className={`hotspot ${x > 60 ? "flip" : ""}`} style={{ left: `${x}%`, top: `${y}%` }} data-open={open} onMouseEnter={onOpen}>
      <button type="button" className="hotspot-dot" aria-expanded={open} aria-controls={`spot-${d.slug}`} aria-label={`${d.name}: show details`} onClick={onToggle}>
        {i + 1}
      </button>
      <div id={`spot-${d.slug}`} className="hotspot-card" role="region" aria-label={d.name} hidden={!open}>
        <p className="font-display text-[1.35rem] leading-[1.1]">{d.name}</p>
        <p className="eyebrow-r mt-1">{d.family}</p>
        <p className="mt-2 text-[0.8125rem] leading-[1.5] text-ink-2">{d.fn}{d.verify && <Verify note={d.verify} />}</p>
        <a href={clinic.booking} target="_blank" rel="noopener noreferrer" data-cta="text" className="u-draw mt-3 inline-block">Book</a>
      </div>
    </div>
  );
}

/** "The rooms": full-frame room photographs with numbered hotspots that expand into name and function. */
export function ResidenceRooms() {
  const [open, setOpen] = useState<number | null>(null);
  return (
    <section id="technology" aria-labelledby="rooms-title" className="gap-section">
      <div className="mx-auto max-w-[44rem] px-[var(--gutter)] text-center">
        <p className="eyebrow-r">The rooms</p>
        <Reveal as="h2" id="rooms-title" stagger={0.12} duration={1.2} className="font-display mt-4 text-[1.9rem] md:text-[2.6vw] balance">
          <span className="block">Nine platforms, shown where they stand,</span>
          <span className="block ital">in the rooms on Fullerton.</span>
        </Reveal>
        <p className="mt-4 text-[0.9375rem] text-ink-2">Hover or tap a number.<Verify note="Room names and device positions are placeholders until room photography is made" /></p>
      </div>
      <ol className="mt-16 space-y-16 md:space-y-24">
        {rooms.map((r, k) => (
          <li key={r.shot} className="frame">
            <Reveal className="room relative overflow-hidden" duration={1.2}>
              <Placeholder shot={r.shot} className="aspect-[4/5] md:aspect-[16/9]" sizes="100vw" />
              {r.spots.map((s) => (
                <Hotspot key={s.i} {...s} open={open === s.i} onToggle={() => setOpen(open === s.i ? null : s.i)} onOpen={() => setOpen(s.i)} />
              ))}
            </Reveal>
            <div className="grid grid-cols-[auto_1fr_auto] items-baseline gap-4 border-t border-rule px-5 py-4 text-[0.8125rem] md:px-8">
              <span className="eyebrow-r">Room {k + 1}</span>
              <p className="font-display text-[1.25rem]">{r.name}</p>
              <p className="text-ink-2 hidden sm:block">{r.line}</p>
            </div>
          </li>
        ))}
      </ol>
      <div className="frame mt-16 md:mt-24 grid gap-10 px-6 py-12 md:grid-cols-2 md:px-14 md:py-16">
        <div>
          <p className="eyebrow-r">The nine</p>
          <ol className="mt-4 divide-y divide-rule">
            {devices.map((d, i) => (
              <li key={d.slug} className="grid grid-cols-[2rem_1fr_auto] items-baseline gap-3 py-2.5 text-[0.9375rem]">
                <span className="text-ink-2 text-[0.75rem]">{i + 1}</span>
                <span className="font-display text-[1.2rem]">{d.name}</span>
                <span className="text-ink-2 text-[0.8125rem]">{d.family}</span>
              </li>
            ))}
          </ol>
        </div>
        <div>
          <p className="eyebrow-r">The full menu</p>
          <ul className="mt-4 columns-2 gap-8 text-[0.9375rem] leading-[2.1] text-ink-2">
            {fullMenu.map((m) => <li key={m.name}>{m.name}{m.verify && <Verify note={m.verify} />}</li>)}
          </ul>
        </div>
      </div>
    </section>
  );
}
