"use client";

import { useRef, type ElementType, type ReactNode } from "react";
import { gsap, useGSAP, prefersReducedMotion } from "@/lib/gsap";

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

/** Generic fade and drift on enter. Each concept passes its own timing. */
export function Reveal({ as: Tag = "div", children, className = "", drift = 20, axis = "y", duration = 0.9, delay = 0, ease = "power2.out", stagger, id, style }: Props) {
  const ref = useRef<HTMLElement>(null);
  useGSAP(
    () => {
      const el = ref.current;
      if (!el || prefersReducedMotion()) return;
      const targets = stagger ? Array.from(el.children) : el;
      gsap.from(targets, {
        opacity: 0,
        [axis]: drift,
        duration,
        delay,
        ease,
        stagger: stagger ?? 0,
        scrollTrigger: { trigger: el, start: "top 88%", once: true },
      });
    },
    { scope: ref },
  );
  return (
    <Tag ref={ref} id={id} className={className} style={style}>
      {children}
    </Tag>
  );
}
