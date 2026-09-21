import type { Metadata, Viewport } from "next";
import { SiteRoot } from "@/components/site/SiteRoot";
import { NotFoundBody } from "@/components/site/NotFoundBody";

/** One 404 for every root layout. The copy follows the path's language on the client. */
export const metadata: Metadata = { title: "Page not found | Olivo Med Spa", robots: { index: false, follow: false } };
export const viewport: Viewport = { width: "device-width", initialScale: 1 };

export default function GlobalNotFound() {
  return (
    <SiteRoot lang="en">
      <NotFoundBody />
    </SiteRoot>
  );
}
