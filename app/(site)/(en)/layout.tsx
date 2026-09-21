import type { Metadata, Viewport } from "next";
import type { ReactNode } from "react";
import { SiteRoot } from "@/components/site/SiteRoot";
import { indexable } from "@/content/site";

/** Defaults for pages that set nothing themselves (the 404). Every page overrides through buildMeta. */
export const metadata: Metadata = {
  title: "Olivo Med Spa | Physician-Led Med Spa in Logan Square, Chicago",
  description: "Physician owned and led since 2013. Emsculpt Neo, Emface, Exion, Opus Plasma, CO2 laser and Miradry under one roof at 2550 W. Fullerton, Logan Square.",
  robots: indexable ? { index: true, follow: true } : { index: false, follow: false, nocache: true },
};

export const viewport: Viewport = { width: "device-width", initialScale: 1 };

export default function Layout({ children }: { children: ReactNode }) {
  return <SiteRoot lang="en">{children}</SiteRoot>;
}
