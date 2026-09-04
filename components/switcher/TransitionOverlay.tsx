"use client";

import { useDesignState } from "./useDesignState";

/**
 * 400ms color wipe in the incoming palette's ground. Covers from the bottom,
 * holds while the route changes, then reveals upward. AnimatePresence cannot
 * run exit animations across App Router route changes, so this lives in the
 * root layout and is owned by the switcher. CSS transitions keep it out of
 * the critical JS path.
 */
export function TransitionOverlay() {
  const { wipe, onWipeCovered, onWipeRevealed } = useDesignState();
  const { phase, color } = wipe;
  const clip =
    phase === "cover" || phase === "hold" ? "inset(0% 0 0 0)" : phase === "reveal" ? "inset(0 0 100% 0)" : "inset(100% 0 0 0)";
  return (
    <div
      aria-hidden="true"
      className="fixed inset-0 z-[90]"
      style={{
        background: color,
        clipPath: clip,
        pointerEvents: phase === "idle" ? "none" : "auto",
        transition: phase === "idle" ? "none" : "clip-path 400ms cubic-bezier(0.76, 0, 0.24, 1)",
      }}
      onTransitionEnd={(e) => {
        if (e.propertyName !== "clip-path") return;
        if (phase === "cover") onWipeCovered();
        if (phase === "reveal") onWipeRevealed();
      }}
    />
  );
}
