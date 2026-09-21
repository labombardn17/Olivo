import type { MetadataRoute } from "next";
import { siteUrl, categories } from "@/content/site";
import { services } from "@/content/services";
import { concerns } from "@/content/concerns";
import { areas } from "@/content/areas";
import { posts } from "@/content/blog";
import { teamMembers } from "@/content/team";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const u = (p: string, priority = 0.6, changeFrequency: MetadataRoute.Sitemap[number]["changeFrequency"] = "monthly") => ({ url: `${siteUrl}${p}`, lastModified: now, changeFrequency, priority });
  return [
    u("/", 1, "weekly"), u("/es", 0.8), u("/quiz", 0.9, "weekly"), u("/book", 0.9, "weekly"), u("/site-map", 0.3), u("/treatments", 0.9, "weekly"), u("/concerns", 0.8),
    ...categories.map((c) => u(`/treatments/${c.key}`, 0.8)),
    ...services.map((s) => u(`/treatments/${s.slug}`, 0.8)),
    ...concerns.map((c) => u(`/concerns/${c.slug}`, 0.7)),
    u("/about", 0.7), u("/team", 0.7), u("/for-patients", 0.6), u("/gift-cards", 0.5), u("/es/tratamientos", 0.7), ...teamMembers.map((t) => u(`/team/${t.slug}`, 0.6)),
    u("/memberships", 0.7), u("/specials", 0.7, "weekly"), u("/financing", 0.5), u("/skincare", 0.5), u("/results", 0.5), u("/reviews", 0.6), u("/visit", 0.8), u("/contact", 0.6),
    ...areas.map((a) => u(`/med-spa/${a.slug}`, 0.6)),
    u("/blog", 0.6, "weekly"), ...posts.map((p) => u(`/blog/${p.slug}`, 0.5)),
    u("/privacy", 0.2, "yearly"), u("/terms", 0.2, "yearly"), u("/accessibility", 0.2, "yearly"),
  ];
}
