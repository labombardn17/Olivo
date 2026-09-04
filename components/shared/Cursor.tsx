"use client";

import { useEffect, useRef, useState } from "react";

/**
 * Custom cursor (Cinema only). Reads the nearest [data-cursor] label.
 * Fine pointers only; never rendered on touch or under reduced motion.
 */
export function Cursor() {
  const ref = useRef<HTMLDivElement>(null);
  const [label, setLabel] = useState<string | null>(null);
  const [on, setOn] = useState(false);
  useEffect(() => {
    if (!window.matchMedia("(pointer: fine)").matches) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    setOn(true);
    let x = 0, y = 0, cx = 0, cy = 0, raf = 0;
    const move = (e: PointerEvent) => {
      if (ref.current) ref.current.style.opacity = "1";
      x = e.clientX;
      y = e.clientY;
      const t = (e.target as Element | null)?.closest?.("[data-cursor]");
      setLabel(t ? (t as HTMLElement).dataset.cursor ?? null : null);
    };
    const loop = () => {
      cx += (x - cx) * 0.18;
      cy += (y - cy) * 0.18;
      if (ref.current) ref.current.style.transform = `translate3d(${cx}px, ${cy}px, 0) translate(-50%, -50%)`;
      raf = requestAnimationFrame(loop);
    };
    window.addEventListener("pointermove", move, { passive: true });
    raf = requestAnimationFrame(loop);
    return () => {
      window.removeEventListener("pointermove", move);
      cancelAnimationFrame(raf);
    };
  }, []);
  if (!on) return null;
  return (
    <div
      ref={ref}
      aria-hidden="true"
      className="pointer-events-none fixed left-0 top-0 z-[70] grid place-items-center rounded-[50%] border border-ink text-ink text-[11px] uppercase tracking-[0.1em] transition-[width,height,background-color] duration-300"
      style={{ opacity: 0, width: label ? 72 : 10, height: label ? 72 : 10, background: label ? "var(--ground)" : "var(--ink)" }}
    >
      {label}
    </div>
  );
}
