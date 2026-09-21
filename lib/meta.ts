import type { Metadata } from "next";
import { indexable, site, siteUrl } from "@/content/site";

interface Opts {
  title: string;
  description: string;
  path: string;
  image?: string;
  /** Alternate language paths, e.g. { en: "/", es: "/es" }. */
  languages?: Record<string, string>;
  type?: "website" | "article";
}

/** Page metadata with canonical, Open Graph, and robots gated on NEXT_PUBLIC_INDEXABLE. */
export function buildMeta({ title, description, path, image = "/og.jpg", languages, type = "website" }: Opts): Metadata {
  const url = `${siteUrl}${path}`;
  return {
    title,
    description,
    metadataBase: new URL(siteUrl),
    alternates: { canonical: url, ...(languages ? { languages: Object.fromEntries(Object.entries(languages).map(([k, v]) => [k, `${siteUrl}${v}`])) } : {}) },
    robots: indexable ? { index: true, follow: true } : { index: false, follow: false, nocache: true },
    openGraph: { title, description, url, siteName: site.name, type, locale: path.startsWith("/es") ? "es_US" : "en_US", images: [{ url: image, width: 1200, height: 630, alt: site.name }] },
    twitter: { card: "summary_large_image", title, description, images: [image] },
  };
}
