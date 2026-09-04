"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";

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
 * prefers-reduced-motion or saveData the poster stays.
 */
export function HeroVideo({
  className = "",
  poster = "/video/hero-drone-poster.jpg",
  posterAlt = "Placeholder aerial still, to be replaced with the clinic's drone footage",
  mp4 = "/video/hero-drone.mp4",
  webm = "/video/hero-drone.webm",
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
    const t = window.setTimeout(inject, 1500);
    if (win.requestIdleCallback) win.requestIdleCallback(inject, { timeout: 1500 });
    return () => {
      cancelled = true;
      window.clearTimeout(t);
    };
  }, [mp4, webm]);

  return (
    <div ref={frameRef} className={`relative overflow-hidden ${className}`} data-hero-video="">
      <Image src={poster} alt={posterAlt} width={width} height={height} priority sizes="100vw" className="absolute inset-0 h-full w-full object-cover" />
      <video ref={ref} autoPlay muted loop playsInline preload="none" aria-hidden="true" className="absolute inset-0 h-full w-full object-cover" />
    </div>
  );
}
