"use client";

import { Suspense, type ReactNode } from "react";
import { DesignContext, useDesignStateValue } from "./useDesignState";
import dynamic from "next/dynamic";

// The switcher (and motion) load after hydration; they are not on the first-paint path.
const DesignSwitcher = dynamic(() => import("./DesignSwitcher").then((m) => m.DesignSwitcher), { ssr: false });
import { TransitionOverlay } from "./TransitionOverlay";

function Inner({ children }: { children: ReactNode }) {
  const value = useDesignStateValue();
  return (
    <DesignContext.Provider value={value}>
      {children}
      <TransitionOverlay />
      <DesignSwitcher />
    </DesignContext.Provider>
  );
}

/** useSearchParams requires a Suspense boundary or next build fails. */
export function DesignProvider({ children }: { children: ReactNode }) {
  return (
    <Suspense fallback={children}>
      <Inner>{children}</Inner>
    </Suspense>
  );
}
