import type { Metadata } from "next";
import { indexable, site, siteUrl } from "@/content/site";
import { alternates, href, type Lang } from "@/lib/i18n";

interface Opts {
  title: string;
  description: string;
  /** The English path; the Spanish path is derived. */
  path: string;
  lang?: Lang;
  image?: string;
  type?: "website" | "article";
}

/** Page metadata with canonical, hreflang pair, Open Graph, and robots gated on NEXT_PUBLIC_INDEXABLE. */
export function buildMeta({ title, description, path, lang = "en", image = "/og.jpg", type = "website" }: Opts): Metadata {
  const localPath = href(lang, path);
  const url = `${siteUrl}${localPath}`;
  const languages = Object.fromEntries(Object.entries(alternates(path)).map(([k, v]) => [k, `${siteUrl}${v}`]));
  return {
    title,
    description,
    metadataBase: new URL(siteUrl),
    alternates: { canonical: url, languages },
    robots: indexable ? { index: true, follow: true } : { index: false, follow: false, nocache: true },
    openGraph: { title, description, url, siteName: site.name, type, locale: lang === "es" ? "es_US" : "en_US", images: [{ url: image, width: 1200, height: 630, alt: site.name }] },
    twitter: { card: "summary_large_image", title, description, images: [image] },
  };
}
