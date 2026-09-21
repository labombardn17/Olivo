"use client";

import Link from "next/link";
import type { Option, Recommendation } from "@/content/quiz";
import { site } from "@/content/site";
import type { QuizEs } from "@/content/es/quiz";
import { href } from "@/lib/i18n";
import type { Lang } from "@/content/ui";

type UiText = QuizEs["ui"];
import { Arrow, Check, Phone } from "@/components/functional/Icons";

const SMS_NUMBER = "+18723153481";

export function ProgressBar({ step, total, t }: { step: number; total: number; t: UiText }) {
  const current = Math.min(step + 1, total);
  const pct = Math.round((current / total) * 100);
  return (
    <div className="mb-6">
      <div className="mb-2 flex items-center justify-between text-xs text-ink-2">
        <span className="eyebrow">{t.kicker}</span>
        <span aria-live="polite">{t.stepOf(current, total)}</span>
      </div>
      <div
        className="h-1 w-full overflow-hidden rounded-4 bg-ground-2"
        role="progressbar"
        aria-valuemin={1}
        aria-valuemax={total}
        aria-valuenow={current}
        aria-label={t.stepOf(current, total)}
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

export function ResultCard({ rec, compact, t }: { rec: Recommendation; compact: boolean; t: UiText }) {
  return (
    <li>
      <Link href={rec.href} className={`card flex h-full flex-col justify-between ${compact ? "p-4" : "p-5"}`}>
        <div>
          <h3 className={`font-semibold text-ink ${compact ? "text-base" : "text-lg"}`}>{rec.name}</h3>
          <p className="mt-2 text-sm leading-relaxed text-ink-2">{rec.why}</p>
        </div>
        <span className="link-arrow mt-4 text-sm">
          {t.about(rec.name)} <Arrow />
        </span>
      </Link>
    </li>
  );
}

export function smsHref(names: string, t: UiText): string {
  return `sms:${SMS_NUMBER}?&body=${encodeURIComponent(t.sms(names))}`;
}

export function CtaBlock({ names, compact, t, lang }: { names: string; compact: boolean; t: UiText; lang: Lang }) {
  return (
    <div className={`card-2 ${compact ? "p-4" : "p-6"}`}>
      <p className={`font-semibold text-ink ${compact ? "text-base" : "text-lg"}`}>{t.ctaTitle}</p>
      <p className="mt-1 text-sm text-ink-2">{t.ctaLine}</p>
      <div className="mt-4 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
        <a href={href(lang, site.booking)} data-cta="primary" className="btn btn-primary">
          {t.book}
        </a>
        <a href={smsHref(names, t)} className="btn btn-outline">
          {t.textResults}
        </a>
        <a href={site.phoneTel} className="btn btn-outline">
          <Phone />
          {t.call(site.phoneDisplay)}
        </a>
      </div>
    </div>
  );
}
