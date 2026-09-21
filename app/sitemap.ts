import type { MetadataRoute } from "next";
import { siteUrl, categories } from "@/content/site";
import { services } from "@/content/services";
import { concerns } from "@/content/concerns";
import { areas } from "@/content/areas";
import { posts } from "@/content/blog";
import { teamMembers } from "@/content/team";
import { alternates } from "@/lib/i18n";

export const dynamic = "force-static";

type Freq = MetadataRoute.Sitemap[number]["changeFrequency"];

/** Every English path with its priority. The Spanish mirror is derived for each one. */
function englishPaths(): [string, number, Freq][] {
  return [
    ["/", 1, "weekly"], ["/quiz", 0.9, "weekly"], ["/book", 0.9, "weekly"], ["/site-map", 0.3, "monthly"], ["/treatments", 0.9, "weekly"], ["/concerns", 0.8, "monthly"],
    ...categories.map((c): [string, number, Freq] => [`/treatments/${c.key}`, 0.8, "monthly"]),
    ...services.map((s): [string, number, Freq] => [`/treatments/${s.slug}`, 0.8, "monthly"]),
    ...concerns.map((c): [string, number, Freq] => [`/concerns/${c.slug}`, 0.7, "monthly"]),
    ["/about", 0.7, "monthly"], ["/team", 0.7, "monthly"], ["/for-patients", 0.6, "monthly"], ["/gift-cards", 0.5, "monthly"],
    ...teamMembers.map((t): [string, number, Freq] => [`/team/${t.slug}`, 0.6, "monthly"]),
    ["/memberships", 0.7, "monthly"], ["/specials", 0.7, "weekly"], ["/financing", 0.5, "monthly"], ["/skincare", 0.5, "monthly"], ["/results", 0.5, "monthly"], ["/reviews", 0.6, "monthly"], ["/visit", 0.8, "monthly"], ["/contact", 0.6, "monthly"],
    ...areas.map((a): [string, number, Freq] => [`/med-spa/${a.slug}`, 0.6, "monthly"]),
    ["/blog", 0.6, "weekly"], ...posts.map((p): [string, number, Freq] => [`/blog/${p.slug}`, 0.5, "monthly"]),
    ["/privacy", 0.2, "yearly"], ["/terms", 0.2, "yearly"], ["/accessibility", 0.2, "yearly"],
  ];
}

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  return englishPaths().flatMap(([p, priority, changeFrequency]) => {
    const alt = alternates(p);
    const languages = { en: `${siteUrl}${alt.en}`, es: `${siteUrl}${alt.es}`, "x-default": `${siteUrl}${alt["x-default"]}` };
    const entry = (path: string, pr: number) => ({ url: `${siteUrl}${path}`, lastModified: now, changeFrequency, priority: pr, alternates: { languages } });
    return [entry(alt.en, priority), entry(alt.es, Math.round(priority * 0.9 * 10) / 10)];
  });
}
