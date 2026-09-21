"use client";

import Link from "next/link";
import type { Option, Recommendation } from "@/content/quiz";
import { clinic } from "@/content/clinic";
import { Arrow, Check, Phone } from "@/components/functional/Icons";

const SMS_NUMBER = "+18723153481";

export function ProgressBar({ step, total }: { step: number; total: number }) {
  const current = Math.min(step + 1, total);
  const pct = Math.round((current / total) * 100);
  return (
    <div className="mb-6">
      <div className="mb-2 flex items-center justify-between text-xs text-ink-2">
        <span className="eyebrow">Treatment quiz</span>
        <span aria-live="polite">Step {current} of {total}</span>
      </div>
      <div
        className="h-1 w-full overflow-hidden rounded-4 bg-ground-2"
        role="progressbar"
        aria-valuemin={1}
        aria-valuemax={total}
        aria-valuenow={current}
        aria-label={`Step ${current} of ${total}`}
      >
        <div className="h-full bg-accent-fill transition-[width] duration-300 ease-out" style={{ width: `${pct}%` }} />
      </div>
    </div>
  );
}

interface OptionCardProps {
  option: Option;
  selected: boolean;
  disabled: boolean;
  compact: boolean;
  onSelect: (id: string) => void;
}

export function OptionCard({ option, selected, disabled, compact, onSelect }: OptionCardProps) {
  const pad = compact ? "px-4 py-3" : "px-5 py-4";
  const ring = selected ? "border-accent-fill bg-ground-2" : "border-rule bg-ground hover:border-ink";
  return (
    <button
      type="button"
      aria-pressed={selected}
      disabled={disabled}
      onClick={() => onSelect(option.id)}
      className={`card flex min-h-[44px] w-full items-center justify-between gap-3 text-left transition-colors ${pad} ${ring} disabled:cursor-default`}
    >
      <span className="flex flex-col">
        <span className={`font-semibold text-ink ${compact ? "text-[0.9375rem]" : "text-base"}`}>{option.label}</span>
        {option.hint ? <span className="mt-0.5 text-sm text-ink-2">{option.hint}</span> : null}
      </span>
      <span
        aria-hidden="true"
        className={`flex h-6 w-6 shrink-0 items-center justify-center rounded-4 border ${
          selected ? "border-accent-fill bg-accent-fill text-accent-ink" : "border-rule text-ink-2"
        }`}
        style={{ borderRadius: "999px" }}
      >
        {selected ? <Check className="h-3.5 w-3.5" /> : null}
      </span>
    </button>
  );
}

export function ResultCard({ rec, compact }: { rec: Recommendation; compact: boolean }) {
  return (
    <li>
      <Link href={rec.href} className={`card flex h-full flex-col justify-between ${compact ? "p-4" : "p-5"}`}>
        <div>
          <h3 className={`font-semibold text-ink ${compact ? "text-base" : "text-lg"}`}>{rec.name}</h3>
          <p className="mt-2 text-sm leading-relaxed text-ink-2">{rec.why}</p>
        </div>
        <span className="link-arrow mt-4 text-sm">
          About {rec.name} <Arrow />
        </span>
      </Link>
    </li>
  );
}

export function smsHref(names: string): string {
  const body = `Hi Olivo, I took the quiz. I'm interested in ${names}. Can we set up a consultation?`;
  return `sms:${SMS_NUMBER}?&body=${encodeURIComponent(body)}`;
}

export function CtaBlock({ names, compact }: { names: string; compact: boolean }) {
  return (
    <div className={`card-2 ${compact ? "p-4" : "p-6"}`}>
      <p className={`font-semibold text-ink ${compact ? "text-base" : "text-lg"}`}>Next step: talk it through with the clinical team.</p>
      <p className="mt-1 text-sm text-ink-2">Bring your results. The consultation is where the plan gets written.</p>
      <div className="mt-4 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
        <a href={clinic.booking} target="_blank" rel="noopener noreferrer" data-cta="primary" className="btn btn-primary">
          Book a consultation
        </a>
        <a href={smsHref(names)} className="btn btn-outline">
          Text us your results
        </a>
        <a href={clinic.phoneTel} className="btn btn-outline">
          <Phone />
          Call {clinic.phoneDisplay}
        </a>
      </div>
    </div>
  );
}
