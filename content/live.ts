// Whether this build is the public olivomedspa.com site. True only for a
// production build of the Vercel project that owns olivomedspa.com: previews,
// local builds and the /olivo export inside benchmark-advisors stay noindex.
// NEXT_PUBLIC_INDEXABLE=1 or 0 overrides it either way.
//
// This module also loads in the browser (through content/site.ts), where there
// is no `process`. The guard keeps it from throwing there; nothing on the client
// reads these values, they only drive server metadata, robots and headers.
const env: Record<string, string | undefined> = typeof process === "undefined" ? {} : process.env;

export const liveSite =
  env.VERCEL_ENV === "production" &&
  /^(www\.)?olivomedspa\.com$/.test(env.VERCEL_PROJECT_PRODUCTION_URL ?? "") &&
  env.OLIVO_EXPORT !== "1";

export const indexable = env.NEXT_PUBLIC_INDEXABLE ? env.NEXT_PUBLIC_INDEXABLE === "1" : liveSite;

/** Canonical origin. */
export const siteUrl = (env.NEXT_PUBLIC_SITE_URL || (liveSite ? "https://www.olivomedspa.com" : "https://olivo-med-spa.vercel.app")).replace(/\/$/, "");
