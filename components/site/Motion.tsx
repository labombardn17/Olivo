"use client";

import { useRef, type ReactNode } from "react";
import { gsap, useGSAP, prefersReducedMotion } from "@/lib/gsap";

/** Counts from 0 to the number inside on first view. Non-numeric text is left alone. */
export function CountUp({ value, suffix = "", className = "" }: { value: number; suffix?: string; className?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  useGSAP(() => {
    const el = ref.current;
    if (!el) return;
    if (prefersReducedMotion()) { el.textContent = `${value}${suffix}`; return; }
    const o = { n: 0 };
    gsap.to(o, { n: value, duration: 1.6, ease: "power2.out", scrollTrigger: { trigger: el, start: "top 90%", once: true }, onUpdate: () => { el.textContent = `${Math.round(o.n)}${suffix}`; } });
  }, { scope: ref });
  return <span ref={ref} className={className}>{value}{suffix}</span>;
}

/** Child drifts vertically against scroll. Strength in pixels over the element's scroll range. */
export function Parallax({ children, strength = 60, className = "" }: { children: ReactNode; strength?: number; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  useGSAP(() => {
    const el = ref.current;
    if (!el || prefersReducedMotion()) return;
    gsap.fromTo(el.firstElementChild, { y: -strength / 2 }, { y: strength / 2, ease: "none", scrollTrigger: { trigger: el, start: "top bottom", end: "bottom top", scrub: true } });
  }, { scope: ref });
  return <div ref={ref} className={className}>{children}</div>;
}

/** Hero content fades and lifts as the hero scrolls away. */
export function HeroFade({ children, className = "" }: { children: ReactNode; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  useGSAP(() => {
    const el = ref.current;
    if (!el || prefersReducedMotion()) return;
    gsap.to(el, { opacity: 0.15, y: -40, ease: "none", scrollTrigger: { trigger: el.closest("[data-hero]") ?? el, start: "top top", end: "bottom top", scrub: true } });
  }, { scope: ref });
  return <div ref={ref} className={className}>{children}</div>;
}

/** Stagger direct children into view. */
export function Stagger({ children, className = "", as: Tag = "div", amount = 0.08 }: { children: ReactNode; className?: string; as?: "div" | "ul" | "ol"; amount?: number }) {
  const ref = useRef<HTMLDivElement>(null);
  useGSAP(() => {
    const el = ref.current;
    if (!el || prefersReducedMotion()) return;
    gsap.from(el.children, { opacity: 0, y: 28, duration: 0.9, ease: "power3.out", stagger: amount, scrollTrigger: { trigger: el, start: "top 85%", once: true } });
  }, { scope: ref });
  const El = Tag as "div";
  return <El ref={ref} className={className}>{children}</El>;
}

/** Buttons lean toward a fine pointer. Children must be a single element. */
export function Magnetic({ children, className = "", strength = 0.25 }: { children: ReactNode; className?: string; strength?: number }) {
  const ref = useRef<HTMLDivElement>(null);
  useGSAP(() => {
    const el = ref.current;
    if (!el || prefersReducedMotion() || !window.matchMedia("(pointer: fine)").matches) return;
    const target = el.firstElementChild as HTMLElement | null;
    if (!target) return;
    const move = (e: PointerEvent) => {
      const r = el.getBoundingClientRect();
      gsap.to(target, { x: (e.clientX - r.left - r.width / 2) * strength, y: (e.clientY - r.top - r.height / 2) * strength, duration: 0.5, ease: "power3.out" });
    };
    const leave = () => gsap.to(target, { x: 0, y: 0, duration: 0.7, ease: "elastic.out(1, 0.45)" });
    el.addEventListener("pointermove", move);
    el.addEventListener("pointerleave", leave);
    return () => { el.removeEventListener("pointermove", move); el.removeEventListener("pointerleave", leave); };
  }, { scope: ref });
  return <div ref={ref} className={`inline-block ${className}`}>{children}</div>;
}

/** Slow Ken Burns on a framed image. */
export function Drift({ children, className = "" }: { children: ReactNode; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  useGSAP(() => {
    const el = ref.current;
    if (!el || prefersReducedMotion()) return;
    gsap.fromTo(el, { clipPath: "inset(0 0 100% 0)" }, { clipPath: "inset(0 0 0% 0)", duration: 1.1, ease: "power4.out", scrollTrigger: { trigger: el, start: "top 85%", once: true } });
    gsap.fromTo(el.firstElementChild, { scale: 1.12 }, { scale: 1, duration: 2, ease: "power2.out", scrollTrigger: { trigger: el, start: "top 85%", once: true } });
  }, { scope: ref });
  return <div ref={ref} className={`overflow-hidden ${className}`}>{children}</div>;
}
