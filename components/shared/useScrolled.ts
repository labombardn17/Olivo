"use client";

import { useEffect, useState } from "react";

/** True once the page has scrolled past `offset` pixels. */
export function useScrolled(offset = 80): boolean {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const on = () => setScrolled(window.scrollY > offset);
    on();
    window.addEventListener("scroll", on, { passive: true });
    return () => window.removeEventListener("scroll", on);
  }, [offset]);
  return scrolled;
}
