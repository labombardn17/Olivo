"use client";

import { useMemo, useRef, useState, type KeyboardEvent } from "react";
import { clinic, devices, downtimeVerify, fullMenu, treatmentAreas, type TreatmentArea } from "@/content/olivo";
import { Verify } from "@/lib/verify";
import { DeviceSilhouette } from "@/components/shared/DeviceSilhouette";
import { PrecisionDrawing } from "./PrecisionDrawing";
import { Hairline } from "./PrecisionMotion";

type Filter = "All" | TreatmentArea;

/**
 * "Platform index": a device table that behaves like an instrument panel.
 * Hover or focus pins the drawing and a mono spec card on the right. Rows
 * are keyboard navigable (arrows, Home, End). A mono filter bar sits above.
 */
export function PrecisionIndex() {
  const [filter, setFilter] = useState<Filter>("All");
  const [active, setActive] = useState(0);
  const rows = useRef<Array<HTMLButtonElement | null>>([]);
  const list = useMemo(() => devices.map((d, i) => ({ d, i })).filter(({ d }) => filter === "All" || d.area === filter || (filter !== "Face and body" && d.area === "Face and body" && (filter === "Face" || filter === "Body"))), [filter]);
  const current = devices[active]!;

  const onKey = (e: KeyboardEvent<HTMLButtonElement>, pos: number) => {
    const n = list.length;
    let next = -1;
    if (e.key === "ArrowDown") next = (pos + 1) % n;
    else if (e.key === "ArrowUp") next = (pos - 1 + n) % n;
    else if (e.key === "Home") next = 0;
    else if (e.key === "End") next = n - 1;
    if (next >= 0) {
      e.preventDefault();
      rows.current[next]?.focus();
    }
  };

  return (
    <section id="technology" aria-labelledby="index-title" className="py-16 md:py-24">
      <div className="grid-12 px-[var(--gutter)] items-end gap-y-6">
        <h2 id="index-title" className="col-span-12 md:col-span-6 font-display text-[10vw] leading-[0.95] md:text-[4.2vw]">Platform index</h2>
        <p className="col-span-12 md:col-span-4 md:col-start-9 text-ink-2 max-w-[36ch]">Nine platforms. Filter by treatment area, then hover or use the arrow keys.</p>
      </div>
      <div className="mt-8 px-[var(--gutter)] flex flex-wrap items-center gap-4" role="group" aria-label="Filter by treatment area">
        <span className="label">Area</span>
        <div className="seg">
          {(["All", ...treatmentAreas] as Filter[]).map((f) => (
            <button key={f} type="button" aria-selected={f === filter} role="tab" onClick={() => { setFilter(f); setActive(devices.findIndex((d) => f === "All" || d.area === f || (d.area === "Face and body" && (f === "Face" || f === "Body")))); }}>{f}</button>
          ))}
        </div>
      </div>

      <div className="mt-8 grid-12 px-[var(--gutter)] gap-y-10">
        <div className="col-span-12 md:col-span-7" role="listbox" aria-label="Devices" aria-activedescendant={`row-${current.slug}`}>
          <div className="row !border-t-0 label" aria-hidden="true">
            <span>No.</span><span>Fig.</span><span>Device</span><span className="cell-wide">Family</span><span className="cell-wide">Function</span><span className="cell-wide">Area</span><span className="cell-wide">Downtime</span>
          </div>
          {list.map(({ d, i }, pos) => (
            <button
              key={d.slug}
              id={`row-${d.slug}`}
              ref={(el) => { rows.current[pos] = el; }}
              type="button"
              role="option"
              aria-selected={i === active}
              className="row"
              onMouseEnter={() => setActive(i)}
              onFocus={() => setActive(i)}
              onClick={() => setActive(i)}
              onKeyDown={(e) => onKey(e, pos)}
            >
              <span className="mono text-ink-2">{String(i + 1).padStart(2, "0")}</span>
              <span className="block h-9 w-9 border border-rule bg-ground"><DeviceSilhouette shape={d.shape} className="h-full w-full text-ink p-1" /></span>
              <span className="font-display text-[1.05rem] font-medium">{d.name}</span>
              <span className="cell-wide mono text-ink-2">{d.family}</span>
              <span className="cell-wide text-[0.8125rem] text-ink-2 leading-snug">{d.fn}</span>
              <span className="cell-wide mono text-ink-2">{d.area}</span>
              <span className="cell-wide"><span className="tag">{d.downtime}</span></span>
            </button>
          ))}
          <Hairline className="!bg-rule" />
          <p className="mono mt-3 text-ink-2">{list.length} of {devices.length} shown. Downtime tags are qualitative.<Verify note={downtimeVerify} /></p>
        </div>
        <div className="col-span-12 md:col-span-4 md:col-start-9 md:sticky md:top-24 self-start">
          <PrecisionDrawing device={current} index={active} className="w-full" />
          <dl className="mono mt-4 grid grid-cols-[6rem_1fr] gap-y-2 border-t border-rule pt-4" aria-live="polite">
            <dt className="text-ink-2">DEVICE</dt><dd>{current.name}</dd>
            <dt className="text-ink-2">FAMILY</dt><dd>{current.family}</dd>
            <dt className="text-ink-2">AREA</dt><dd>{current.area}</dd>
            <dt className="text-ink-2">DOWNTIME</dt><dd>{current.downtime}</dd>
            <dt className="text-ink-2">FUNCTION</dt><dd className="normal-case">{current.fn}{current.verify && <Verify note={current.verify} />}</dd>
          </dl>
          <a href={clinic.booking} target="_blank" rel="noopener noreferrer" data-cta="primary" className="mt-6 inline-flex">Book {current.name}</a>
        </div>
      </div>

      <div className="mt-16 grid-12 px-[var(--gutter)] border-t border-rule pt-8">
        <p className="label col-span-12 md:col-span-3">Full menu, {fullMenu.length} items</p>
        <ol className="col-span-12 md:col-span-9 mt-4 md:mt-0 grid grid-cols-2 md:grid-cols-3 gap-x-6 text-[0.875rem] leading-[2]">
          {fullMenu.map((m, i) => (
            <li key={m.name} className="flex gap-3 border-b border-rule"><span className="mono text-ink-2 pt-[0.35em]">{String(i + 10).padStart(2, "0")}</span>{m.name}{m.verify && <Verify note={m.verify} />}</li>
          ))}
        </ol>
      </div>
    </section>
  );
}
