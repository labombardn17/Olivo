import { Geist_Mono } from "next/font/google";

// The only place Geist Mono is allowed: the switcher is a tool, not a concept.
export const toolMono = Geist_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  display: "swap",
  preload: false,
  variable: "--font-tool",
});
