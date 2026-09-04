import { basePath } from "./base";

/**
 * Image loader. Standalone, this is identical to Next's default. Mounted at
 * /olivo inside the main site, the export points at the host app's optimizer
 * with the base path on the source, so images stay optimized and responsive.
 */
export default function imageLoader({ src, width, quality }: { src: string; width: number; quality?: number }): string {
  const url = src.startsWith("/") ? `${basePath}${src}` : src;
  return `/_next/image?url=${encodeURIComponent(url)}&w=${width}&q=${quality ?? 75}`;
}
