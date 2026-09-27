import type { ReactNode } from "react";
import "@/styles/tokens.css";
import { paletteInit, type PaletteKey } from "@/lib/palettes";
import { LenisProvider } from "@/components/shared/LenisProvider";
import { Grain } from "@/components/shared/Grain";

/**
 * The html and body for every root layout. Each language and the concept
 * review get their own root layout so <html lang> is right in the server
 * HTML. html[data-palette] is set by a blocking inline script before first
 * paint: pinned for the public site, otherwise URL param, then localStorage,
 * then the concept default. Fonts are never loaded here; each segment
 * declares its own.
 */
export function RootShell({ lang, palette, children }: { lang: "en" | "es"; palette?: PaletteKey; children: ReactNode }) {
  return (
    <html lang={lang} data-palette={palette} suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: paletteInit(palette) }} />
      </head>
      <body>
        <LenisProvider>{children}</LenisProvider>
        <Grain />
      </body>
    </html>
  );
}
