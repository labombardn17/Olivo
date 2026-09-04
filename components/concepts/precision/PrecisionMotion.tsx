"use client";

import { useRef } from "react";
import { gsap, useGSAP, prefersReducedMotion } from "@/lib/gsap";

/** Counts up once when it enters the viewport. Mechanical, 900ms. */
export function CountUp({ value, className = "", suffix = "" }: { value: number; className?: string; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  useGSAP(
    () => {
      const el = ref.current;
      if (!el || prefersReducedMotion()) return;
      const o = { v: 0 };
      gsap.to(o, {
        v: value,
        duration: 0.9,
        ease: "power3.out",
        scrollTrigger: { trigger: el, start: "top 90%", once: true },
        onUpdate: () => { el.textContent = Math.round(o.v).toString().padStart(String(value).length, "0") + suffix; },
      });
    },
    { scope: ref },
  );
  return <span ref={ref} className={className}>{value}{suffix}</span>;
}

/** Hairline that draws in from the left when it enters the viewport. */
export function Hairline({ className = "" }: { className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  useGSAP(
    () => {
      const el = ref.current;
      if (!el || prefersReducedMotion()) return;
      gsap.to(el, { scaleX: 1, duration: 0.45, ease: "power3.out", scrollTrigger: { trigger: el, start: "top 92%", once: true } });
    },
    { scope: ref },
  );
  return <div ref={ref} aria-hidden="true" className={`hairline ${className}`} />;
}

/** Slides along one axis on enter. 300 to 450ms, power3.out. */
export function Slide({ children, axis = "x", className = "", as: Tag = "div", stagger }: { children: React.ReactNode; axis?: "x" | "y"; className?: string; as?: React.ElementType; stagger?: number }) {
  const ref = useRef<HTMLElement>(null);
  useGSAP(
    () => {
      const el = ref.current;
      if (!el || prefersReducedMotion()) return;
      gsap.from(stagger ? Array.from(el.children) : el, { [axis]: axis === "x" ? -24 : 16, opacity: 0, duration: 0.4, stagger: stagger ?? 0, ease: "power3.out", scrollTrigger: { trigger: el, start: "top 90%", once: true } });
    },
    { scope: ref },
  );
  return <Tag ref={ref} className={className}>{children}</Tag>;
}
