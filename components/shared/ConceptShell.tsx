import type { ReactNode } from "react";
import { OpeningReveal } from "./OpeningReveal";
import { StickyMobileBar } from "./StickyMobileBar";
import { buildJsonLd, emitSchema } from "@/content/seo";

/**
 * Per-page shell: opening curtain, sticky mobile bar, gated JSON-LD. Pages
 * are statically prerendered; the palette (URL param, stored choice, or the
 * concept default) is resolved by the blocking inline script in the root
 * layout before first paint and kept in sync by the switcher's hook.
 */
export function ConceptShell({ children }: { children: ReactNode }) {
  return (
    <>
      <OpeningReveal />
      {emitSchema && <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(buildJsonLd()) }} />}
      {children}
      <StickyMobileBar />
    </>
  );
}
