import type { MetadataRoute } from "next";
import { indexable, siteUrl } from "@/content/site";

export const dynamic = "force-static";

export default function robots(): MetadataRoute.Robots {
  return indexable
    ? { rules: [{ userAgent: "*", allow: "/", disallow: ["/concepts", "/compare", "/contact-sheet", "/atelier", "/cinema", "/precision", "/residence", "/current"] }], sitemap: `${siteUrl}/sitemap.xml`, host: siteUrl }
    : { rules: [{ userAgent: "*", disallow: "/" }] };
}
