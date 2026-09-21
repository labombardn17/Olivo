import type { ReactNode } from "react";
import { DesignProvider } from "@/components/switcher/DesignProvider";

/** The five concept routes keep the design switcher; the public site does not load it. */
export default function ConceptsLayout({ children }: { children: ReactNode }) {
  return <DesignProvider>{children}</DesignProvider>;
}
