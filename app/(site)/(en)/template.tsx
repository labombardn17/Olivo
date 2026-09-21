"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

// True once the first page has mounted, so only client-side navigations animate.
// The first paint of a page arrives without a fade so the LCP is never delayed.
let navigated = false;

/** Page enter: a short rise and fade on route change, CSS only, honours reduced motion. */
export default function Template({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const animate = navigated;
  useEffect(() => { navigated = true; }, []);
  return <div key={pathname} className={animate ? "page-enter" : ""}>{children}</div>;
}
