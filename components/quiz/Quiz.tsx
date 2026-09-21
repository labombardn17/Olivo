"use client";

import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { gsap, useGSAP, prefersReducedMotion } from "@/lib/gsap";
import { questions, optionsFor, recommend, joinNames, type Answers, type StepId } from "@/content/quiz";
import { CtaBlock, OptionCard, ProgressBar, ResultCard } from "./QuizParts";

const STORAGE_KEY = "olivo-quiz-answers";
const ADVANCE_DELAY_MS = 260;
const SMALL_PRINT = "A quiz is a starting point. Candidacy and expectations are set at your consultation.";

interface QuizProps {
  /** Tighter spacing for a homepage section. Same logic. */
  compact?: boolean;
}

function readStored(): Answers {
  try {
    const raw = window.sessionStorage.getItem(STORAGE_KEY);
    if (!raw) return {};
    const parsed: unknown = JSON.parse(raw);
    if (typeof parsed !== "object" || parsed === null) return {};
    const out: Answers = {};
    for (const step of questions) {
      const v = (parsed as Record<string, unknown>)[step.id];
      if (typeof v === "string") out[step.id] = v;
    }
    return out;
  } catch {
    return {};
  }
}

function writeStored(answers: Answers): void {
  try {
    window.sessionStorage.setItem(STORAGE_KEY, JSON.stringify(answers));
  } catch {
    // Storage may be blocked. The quiz works without it.
  }
}

/** Five short questions, then up to three treatment suggestions. */
export default function Quiz({ compact = false }: QuizProps) {
  const total = questions.length;
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<Answers>({});
  const [pending, setPending] = useState<string | null>(null);
  const [direction, setDirection] = useState<1 | -1>(1);
  const panelRef = useRef<HTMLDivElement>(null);
  const timerRef = useRef<number | null>(null);
  const tweenRef = useRef<gsap.core.Tween | null>(null);

  const showingResults = step >= total;
  const current = questions[step];
  const options = useMemo(() => (current ? optionsFor(current, answers) : []), [current, answers]);
  const results = useMemo(() => (showingResults ? recommend(answers) : []), [showingResults, answers]);
  const names = useMemo(() => joinNames(results.map((r) => r.name)), [results]);

  useEffect(() => {
    const stored = readStored();
    if (Object.keys(stored).length > 0) setAnswers(stored);
  }, []);

  useEffect(() => {
    return () => {
      if (timerRef.current !== null) window.clearTimeout(timerRef.current);
      tweenRef.current?.kill();
    };
  }, []);

  useGSAP(
    () => {
      const el = panelRef.current;
      if (!el || prefersReducedMotion()) return;
      gsap.fromTo(
        el,
        { opacity: 0, x: 24 * direction },
        { opacity: 1, x: 0, duration: 0.4, ease: "power2.out", clearProps: "x" },
      );
    },
    { dependencies: [step], scope: panelRef },
  );

  const goTo = useCallback((next: number, dir: 1 | -1) => {
    setDirection(dir);
    const el = panelRef.current;
    if (!el || prefersReducedMotion()) {
      setStep(next);
      setPending(null);
      return;
    }
    tweenRef.current?.kill();
    tweenRef.current = gsap.to(el, {
      opacity: 0,
      x: -16 * dir,
      duration: 0.2,
      ease: "power1.in",
      onComplete: () => {
        setStep(next);
        setPending(null);
      },
    });
  }, []);

  const select = useCallback(
    (id: string) => {
      if (!current || pending !== null) return;
      const stepId: StepId = current.id;
      const next: Answers = { ...answers, [stepId]: id };
      if (stepId === "area" && answers.area !== id) delete next.concern;
      setAnswers(next);
      writeStored(next);
      setPending(id);
      if (timerRef.current !== null) window.clearTimeout(timerRef.current);
      timerRef.current = window.setTimeout(() => {
        timerRef.current = null;
        goTo(step + 1, 1);
      }, ADVANCE_DELAY_MS);
    },
    [answers, current, goTo, pending, step],
  );

  const back = useCallback(() => {
    if (step === 0 || pending !== null) return;
    goTo(step - 1, -1);
  }, [goTo, pending, step]);

  const restart = useCallback(() => {
    if (timerRef.current !== null) window.clearTimeout(timerRef.current);
    timerRef.current = null;
    setAnswers({});
    writeStored({});
    setPending(null);
    goTo(0, -1);
  }, [goTo]);

  const outer = compact ? "py-2" : "py-6 md:py-10";
  const grid = compact ? "grid gap-2 sm:grid-cols-2" : "grid gap-3 sm:grid-cols-2";

  return (
    <div className={`w-full max-w-3xl ${outer}`} data-quiz={compact ? "compact" : "full"}>
      {!showingResults ? <ProgressBar step={step} total={total} /> : null}

      <div ref={panelRef} key={step}>
        {current && !showingResults ? (
          <section aria-labelledby={`quiz-q-${current.id}`}>
            <h2 id={`quiz-q-${current.id}`} className={`font-display text-ink balance ${compact ? "text-2xl" : "text-3xl md:text-4xl"}`}>
              {current.title}
            </h2>
            {current.sub && !compact ? <p className="section-sub mt-2 text-base">{current.sub}</p> : null}
            <div className={`mt-5 ${grid}`} role="group" aria-labelledby={`quiz-q-${current.id}`}>
              {options.map((o) => (
                <OptionCard
                  key={o.id}
                  option={o}
                  compact={compact}
                  selected={pending === o.id || (pending === null && answers[current.id] === o.id)}
                  disabled={pending !== null}
                  onSelect={select}
                />
              ))}
            </div>
            <div className="mt-5 flex items-center justify-between text-sm">
              {step > 0 ? (
                <button type="button" onClick={back} className="u-draw min-h-[44px] text-ink-2 hover:text-ink">
                  Back
                </button>
              ) : (
                <span />
              )}
              {step > 0 ? (
                <button type="button" onClick={restart} className="u-draw min-h-[44px] text-xs text-ink-2 hover:text-ink">
                  Start over
                </button>
              ) : null}
            </div>
          </section>
        ) : null}

        {showingResults ? (
          <section aria-labelledby="quiz-results-title">
            <span className="pill">Your results</span>
            <h2 id="quiz-results-title" className={`font-display text-ink balance mt-3 ${compact ? "text-2xl" : "text-3xl md:text-4xl"}`}>
              {results.length > 0 ? "A good place to start the conversation." : "Let us point you in the right direction."}
            </h2>
            {results.length > 0 ? (
              <ul className={`mt-5 grid gap-3 ${results.length > 1 ? "sm:grid-cols-2" : ""} ${results.length > 2 && !compact ? "lg:grid-cols-3" : ""}`}>
                {results.map((rec) => (
                  <ResultCard key={rec.slug} rec={rec} compact={compact} />
                ))}
              </ul>
            ) : (
              <p className="section-sub mt-3">Tell us what you have in mind and the clinical team will match it to the right treatment.</p>
            )}
            <div className="mt-6">
              <CtaBlock names={names || "a consultation"} compact={compact} />
            </div>
            <div className="mt-4 flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
              <p className="text-xs text-ink-2">{SMALL_PRINT}</p>
              <button type="button" onClick={restart} className="u-draw min-h-[44px] self-start text-xs text-ink-2 hover:text-ink sm:self-auto">
                Start over
              </button>
            </div>
          </section>
        ) : null}
      </div>

      {!showingResults ? <p className="mt-6 text-xs text-ink-2">{SMALL_PRINT}</p> : null}
    </div>
  );
}
