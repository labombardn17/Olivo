"use client";

import { motion } from "motion/react";
import { useDesignState } from "./useDesignState";

/**
 * 400ms color wipe in the incoming palette's ground. Covers from the bottom,
 * holds while the route changes, then reveals upward. AnimatePresence cannot
 * run exit animations across App Router route changes, so this lives in the
 * root layout and is owned by the switcher.
 */
export function TransitionOverlay() {
  const { wipe, onWipeCovered, onWipeRevealed } = useDesignState();
  const { phase, color } = wipe;
  const clip =
    phase === "cover" || phase === "hold" ? "inset(0% 0 0 0)" : phase === "reveal" ? "inset(0 0 100% 0)" : "inset(100% 0 0 0)";
  return (
    <motion.div
      aria-hidden="true"
      className="fixed inset-0 z-[90] pointer-events-none"
      style={{ background: color, pointerEvents: phase === "idle" ? "none" : "auto" }}
      initial={false}
      animate={{ clipPath: clip }}
      transition={{ duration: phase === "idle" ? 0 : 0.4, ease: [0.76, 0, 0.24, 1] }}
      onAnimationComplete={() => {
        if (phase === "cover") onWipeCovered();
        if (phase === "reveal") onWipeRevealed();
      }}
    />
  );
}
