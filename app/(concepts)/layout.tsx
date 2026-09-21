import type { Metadata, Viewport } from "next";
import type { ReactNode } from "react";
import { RootShell } from "@/components/shell/RootShell";
import { DesignProvider } from "@/components/switcher/DesignProvider";
import { siteTitle, descriptions, noindex } from "@/content/seo";

export const metadata: Metadata = { title: siteTitle, description: descriptions.home, robots: noindex };
export const viewport: Viewport = { width: "device-width", initialScale: 1 };

/** The five concept routes keep the design switcher; the public site does not load it. */
export default function ConceptsLayout({ children }: { children: ReactNode }) {
  return (
    <RootShell lang="en">
      <DesignProvider>{children}</DesignProvider>
    </RootShell>
  );
}
