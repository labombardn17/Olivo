"use client";

import { useEffect, useState } from "react";

/** Palette ground lifts like a curtain, 480ms. Skipped under reduced motion. */
export function OpeningReveal() {
  const [done, setDone] = useState(false);
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setDone(true);
      return;
    }
    const t = window.setTimeout(() => setDone(true), 600);
    return () => window.clearTimeout(t);
  }, []);
  if (done) return null;
  return (
    <div
      aria-hidden="true"
      className="fixed inset-0 z-[85] bg-ground pointer-events-none"
      style={{ animation: "curtain 480ms cubic-bezier(0.76, 0, 0.24, 1) 80ms forwards" }}
    >
      <style>{`@keyframes curtain{to{transform:translateY(-100%)}}`}</style>
    </div>
  );
}
