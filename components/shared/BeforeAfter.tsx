"use client";

import { useState } from "react";
import { Placeholder } from "@/components/shared/Placeholder";
import { sectionCopy } from "@/content/olivo";

interface Props {
  className?: string;
  /** Range input class for concept styling. */
  rangeClassName?: string;
  handleClassName?: string;
  labelClassName?: string;
  caption?: React.ReactNode;
  /** Initial reveal percentage. */
  initial?: number;
  /** Frame aspect classes; concepts choose the shape. */
  aspectClassName?: string;
  /** Extra classes for the After label only (Current tilts it). */
  afterLabelClassName?: string;
}

/**
 * Before and after reveal. Two abstract placeholder frames labelled Before and
 * After; a range input drives the reveal so it works by keyboard. Never real
 * patient imagery without written authorization.
 */
export function BeforeAfter({ className = "", rangeClassName = "", handleClassName = "", labelClassName = "", caption, initial = 50, aspectClassName = "aspect-[4/5] md:aspect-[16/10]", afterLabelClassName = "" }: Props) {
  const [v, setV] = useState(initial);
  return (
    <figure className={`relative ${className}`} data-before-after="">
      <div className={`relative overflow-hidden ${aspectClassName}`}>
        <Placeholder shot="skin-1" className="absolute inset-0 h-full" tint />
        <span aria-hidden="true" className={`absolute left-5 bottom-5 ${labelClassName}`}>Before</span>
        <div className="absolute inset-0" style={{ clipPath: `inset(0 0 0 ${v}%)` }} aria-hidden="true">
          <Placeholder shot="skin-2" className="absolute inset-0 h-full" tint />
          <span className={`absolute right-5 bottom-5 ${labelClassName} ${afterLabelClassName}`}>After</span>
        </div>
        <div aria-hidden="true" className={`absolute top-0 bottom-0 w-px ${handleClassName}`} style={{ left: `${v}%` }} />
        <input
          type="range"
          min={0}
          max={100}
          value={v}
          onChange={(e) => setV(Number(e.target.value))}
          aria-label="Reveal before and after"
          aria-valuetext={`${v} percent after`}
          className={`absolute inset-0 ${rangeClassName}`}
        />
      </div>
      <figcaption className="sr-only">{sectionCopy.resultsPlaceholder}</figcaption>
      {caption}
    </figure>
  );
}
