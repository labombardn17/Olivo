/**
 * Base path for the static export. Empty when the prototype runs on its own;
 * "/olivo" when it is exported and mounted inside the main site. Next applies
 * it to Link, router and next/font automatically; raw URLs go through withBase.
 */
export const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";
export const withBase = (path: string) => `${basePath}${path}`;
