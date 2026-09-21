import type { Metadata, Viewport } from "next";
import "@/styles/tokens.css";
import { paletteInitScript } from "@/lib/palettes";
import { LenisProvider } from "@/components/shared/LenisProvider";
import { Grain } from "@/components/shared/Grain";
import { siteTitle, descriptions, noindex } from "@/content/seo";

export const metadata: Metadata = {
  title: siteTitle,
  description: descriptions.home,
  robots: noindex,
};

export const viewport: Viewport = { width: "device-width", initialScale: 1 };

/**
 * html[data-palette] is set by a blocking inline script before first paint
 * (URL param, then localStorage, then the concept default). Fonts are never
 * loaded here; each concept declares its own in its segment layout.
 */
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: paletteInitScript }} />
      </head>
      <body>
        <LenisProvider>
          {children}
        </LenisProvider>
        <Grain />
      </body>
    </html>
  );
}
