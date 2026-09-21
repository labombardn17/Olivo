import type { NextConfig } from "next";
import { execFileSync } from "node:child_process";
import legacy from "./content/redirects.json";

/**
 * Two modes. Standalone (default): a normal Next app with headers and its own
 * image optimizer. Export (OLIVO_EXPORT=1, set by ../scripts/build-olivo.mjs):
 * a static export under /olivo, mounted inside the main site and served by
 * its optimizer through lib/image-loader.ts.
 */
const isExport = process.env.OLIVO_EXPORT === "1";
const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

const securityHeaders = [
  { key: "X-Robots-Tag", value: "noindex, nofollow" },
  { key: "X-Content-Type-Options", value: "nosniff" },
  { key: "Referrer-Policy", value: "origin-when-cross-origin" },
  // Same-origin framing only: /compare frames the concepts.
  { key: "X-Frame-Options", value: "SAMEORIGIN" },
];

const nextConfig: NextConfig = {
  reactStrictMode: true,
  outputFileTracingRoot: __dirname,
  ...(isExport
    ? {
        output: "export",
        basePath,
        assetPrefix: basePath,
        // The host site's optimizer serves the exported images (see lib/image-loader.ts).
        images: { loader: "custom", loaderFile: "./lib/image-loader.ts" },
      }
    : {
        images: { formats: ["image/avif", "image/webp"] },
        async headers() {
          return [{ source: "/(.*)", headers: securityHeaders }];
        },
        /** Old olivomedspa.com paths map to their new homes once the domain moves. */
        async redirects() {
          return Object.entries(legacy as Record<string, string>).map(([from, to]) => ({ source: from.replace(/\/$/, ""), destination: to, permanent: true })).filter((r) => r.source && r.source !== r.destination);
        },
      }),
};

/** Fetch clinic photos before the production build, whatever the build command is. */
export default function config(phase: string): NextConfig {
  if (phase === "phase-production-build" && process.env.LIVE_IMAGES_SKIP !== "1") {
    try {
      execFileSync(process.execPath, ["scripts/fetch-live-images.mjs"], { stdio: "inherit", cwd: __dirname });
      execFileSync(process.execPath, ["scripts/fetch-live-video.mjs"], { stdio: "inherit", cwd: __dirname });
    } catch (e) {
      console.log("live-images: skipped", e instanceof Error ? e.message : "");
    }
  }
  return nextConfig;
}
