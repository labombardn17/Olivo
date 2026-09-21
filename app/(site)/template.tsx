"use client";

import { usePathname } from "next/navigation";

/** Page enter: a short rise and fade on every route change, CSS only, honours reduced motion. */
export default function Template({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  return <div key={pathname} className="page-enter">{children}</div>;
}
