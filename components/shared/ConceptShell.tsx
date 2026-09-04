import type { ReactNode } from "react";
import { PaletteSync } from "./PaletteSync";
import { OpeningReveal } from "./OpeningReveal";
import { StickyMobileBar } from "./StickyMobileBar";
import { buildJsonLd, emitSchema } from "@/content/seo";
import type { PaletteKey } from "@/lib/palettes";

interface Props {
  palette: PaletteKey;
  fromUrl: boolean;
  children: ReactNode;
}

/** Per-page shell: palette sync, opening curtain, sticky mobile bar, gated JSON-LD. */
export function ConceptShell({ palette, fromUrl, children }: Props) {
  return (
    <>
      <PaletteSync palette={palette} fromUrl={fromUrl} />
      <OpeningReveal />
      {emitSchema && <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(buildJsonLd()) }} />}
      {children}
      <StickyMobileBar />
    </>
  );
}
