"use client";

import { useRef, type ElementType, type ReactNode } from "react";
import { gsap, SplitText, useGSAP, prefersReducedMotion } from "@/lib/gsap";

interface Props {
  as?: ElementType;
  children: ReactNode;
  className?: string;
  delay?: number;
  stagger?: number;
  duration?: number;
  /** Start on scroll (default) or immediately on mount. */
  immediate?: boolean;
  id?: string;
}

/** SplitText line masks. Allowed on Atelier and Current only. */
export function SplitReveal({ as: Tag = "h2", children, className = "", delay = 0, stagger = 0.09, duration = 1, immediate = false, id }: Props) {
  const ref = useRef<HTMLElement>(null);
  useGSAP(
    () => {
      const el = ref.current;
      if (!el || prefersReducedMotion()) return;
      let split: SplitText | undefined;
      const run = () => {
        split = SplitText.create(el, { type: "lines", mask: "lines", linesClass: "split-line" });
        gsap.from(split.lines, {
          yPercent: 110,
          duration,
          delay,
          stagger,
          ease: "power3.out",
          ...(immediate ? {} : { scrollTrigger: { trigger: el, start: "top 88%", once: true } }),
        });
      };
      document.fonts.ready.then(run);
      return () => split?.revert();
    },
    { scope: ref },
  );
  return (
    <Tag ref={ref} id={id} className={className}>
      {children}
    </Tag>
  );
}
