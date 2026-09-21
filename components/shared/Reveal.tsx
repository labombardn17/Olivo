"use client";

import { useEffect, useRef, type ElementType, type ReactNode } from "react";

interface Props {
  as?: ElementType;
  children: ReactNode;
  className?: string;
  /** Pixels of drift. Direction x or y. */
  drift?: number;
  axis?: "x" | "y";
  duration?: number;
  delay?: number;
  ease?: string;
  /** Stagger direct children instead of the element itself. */
  stagger?: number;
  id?: string;
  style?: React.CSSProperties;
}

const EASES: Record<string, string> = { "power2.out": "cubic-bezier(0.22, 1, 0.36, 1)", "power3.out": "cubic-bezier(0.16, 1, 0.3, 1)", "power4.out": "cubic-bezier(0.1, 1, 0.2, 1)", "expo.out": "cubic-bezier(0.19, 1, 0.22, 1)" };

/**
 * Fade and drift on enter. CSS transitions driven by one IntersectionObserver
 * per element, so a page with forty reveals costs no main-thread work at load.
 * Nothing is hidden before hydration, so the LCP is never delayed by a reveal.
 */
export function Reveal({ as: Tag = "div", children, className = "", drift = 20, axis = "y", duration = 0.9, delay = 0, ease = "power2.out", stagger, id, style }: Props) {
  const ref = useRef<HTMLElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    // Content is never hidden before hydration. Anything already on screen when JS
    // attaches stays put; only elements below the fold get armed and revealed.
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches || el.getBoundingClientRect().top < window.innerHeight) { el.dataset.in = "1"; return; }
    el.classList.add("rv-armed");
    const io = new IntersectionObserver(([e]) => { if (e?.isIntersecting) { el.dataset.in = "1"; io.disconnect(); } }, { rootMargin: "0px 0px -12% 0px" });
    io.observe(el);
    return () => io.disconnect();
  }, []);
  const vars = { ["--rv-x" as string]: axis === "x" ? `${drift}px` : "0px", ["--rv-y" as string]: axis === "y" ? `${drift}px` : "0px", ["--rv-d" as string]: `${duration}s`, ["--rv-delay" as string]: `${delay}s`, ["--rv-ease" as string]: EASES[ease] ?? EASES["power2.out"], ["--rv-stagger" as string]: `${stagger ?? 0}s` };
  return (
    <Tag ref={ref} id={id} className={`${stagger ? "rv-stagger" : "rv"} ${className}`} style={{ ...vars, ...style }}>
      {children}
    </Tag>
  );
}
