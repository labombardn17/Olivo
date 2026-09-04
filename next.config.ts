import type { NextConfig } from "next";

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
  images: { formats: ["image/avif", "image/webp"], loader: "custom", loaderFile: "./lib/image-loader.ts" },
  ...(isExport
    ? { output: "export", basePath, assetPrefix: basePath }
    : {
        async headers() {
          return [{ source: "/(.*)", headers: securityHeaders }];
        },
      }),
};

export default nextConfig;
