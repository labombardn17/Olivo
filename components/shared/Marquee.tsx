import type { ReactNode } from "react";

interface Props {
  children: ReactNode;
  /** Seconds per loop. */
  duration?: number;
  className?: string;
  ariaLabel?: string;
}

/** Content is duplicated once so the loop has no visible join; the copy is aria-hidden. */
export function Marquee({ children, duration = 20, className = "", ariaLabel }: Props) {
  return (
    <div className={`marquee ${className}`} aria-label={ariaLabel} style={{ ["--marquee-duration" as string]: `${duration}s` }}>
      <div className="marquee-track">
        <div className="flex shrink-0">{children}</div>
        <div className="flex shrink-0" aria-hidden="true">{children}</div>
      </div>
    </div>
  );
}
