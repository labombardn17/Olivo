"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { withBase } from "@/lib/base";

interface Props {
  className?: string;
  /** Poster is the LCP candidate. */
  poster?: string;
  posterAlt?: string;
  mp4?: string;
  webm?: string;
  width?: number;
  height?: number;
  /** Scale, radius and so on can be driven by a parent via this ref. */
  frameRef?: React.RefObject<HTMLDivElement | null>;
}

/**
 * Server renders an empty <video> and a priority poster. Sources are
 * injected after first paint so the poster is the LCP element. Under
 * prefers-reduced-motion or saveData the poster stays. On portrait screens
 * the poster is fetched at 150vw: object-fit cover shows only the middle
 * of a landscape frame. Sources are injected on the first interaction or
 * after 3s idle, whichever comes first, so the poster settles as the LCP.
 */
export function HeroVideo({
  className = "",
  poster = "/video/hero-drone-poster.jpg",
  posterAlt = "Placeholder aerial still, to be replaced with the clinic's drone footage",
  mp4 = withBase("/video/hero-drone.mp4"),
  webm = withBase("/video/hero-drone.webm"),
  width = 1920,
  height = 1080,
  frameRef,
}: Props) {
  const ref = useRef<HTMLVideoElement>(null);
  useEffect(() => {
    const v = ref.current;
    if (!v) return;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const nav = navigator as Navigator & { connection?: { saveData?: boolean } };
    if (reduce || nav.connection?.saveData) return;
    let cancelled = false;
    const inject = () => {
      if (cancelled || v.querySelector("source")) return;
      const w = document.createElement("source");
      w.src = webm;
      w.type = "video/webm";
      const m = document.createElement("source");
      m.src = mp4;
      m.type = "video/mp4";
      v.append(w, m);
      v.load();
      v.play().catch(() => {});
    };
    const win = window as Window & { requestIdleCallback?: (cb: () => void, o?: { timeout: number }) => number };
    const events = ["pointerdown", "keydown", "touchstart", "wheel", "scroll"] as const;
    const onFirst = () => {
      events.forEach((e) => window.removeEventListener(e, onFirst));
      if (win.requestIdleCallback) win.requestIdleCallback(inject, { timeout: 1500 });
      else inject();
    };
    events.forEach((e) => window.addEventListener(e, onFirst, { passive: true, once: true }));
    const t = window.setTimeout(onFirst, 3000);
    return () => {
      cancelled = true;
      window.clearTimeout(t);
      events.forEach((e) => window.removeEventListener(e, onFirst));
    };
  }, [mp4, webm]);

  return (
    <div ref={frameRef} className={`overflow-hidden ${className}`} data-hero-video="">
      <Image src={poster} alt={posterAlt} width={width} height={height} priority quality={75} sizes="(max-width: 52rem) 150vw, 100vw" className="absolute inset-0 h-full w-full object-cover" />
      <video ref={ref} autoPlay muted loop playsInline preload="none" aria-hidden="true" className="absolute inset-0 h-full w-full object-cover" />
      <div aria-hidden="true" className="absolute inset-0 tint-layer" />
    </div>
  );
}
