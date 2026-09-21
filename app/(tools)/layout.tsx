import type { Metadata, Viewport } from "next";
import type { ReactNode } from "react";
import { RootShell } from "@/components/shell/RootShell";
import { siteTitle, descriptions, noindex } from "@/content/seo";

export const metadata: Metadata = { title: siteTitle, description: descriptions.home, robots: noindex };
export const viewport: Viewport = { width: "device-width", initialScale: 1 };

/** Private review tools: the concept chooser, the compare view, and the contact sheet. */
export default function ToolsLayout({ children }: { children: ReactNode }) {
  return <RootShell lang="en">{children}</RootShell>;
}
