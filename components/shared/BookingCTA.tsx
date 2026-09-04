import { clinic, cta } from "@/content/olivo";

interface Props {
  label?: string;
  variant?: "primary" | "text";
  className?: string;
}

/** The one primary verb on every page: Book. Styled per concept via data-cta. */
export function BookingCTA({ label = cta.primary, variant = "primary", className = "" }: Props) {
  return (
    <a
      href={clinic.booking}
      target="_blank"
      rel="noopener noreferrer"
      data-cta={variant}
      className={variant === "text" ? `u-draw inline-block ${className}` : `inline-flex items-center justify-center ${className}`}
    >
      {label}
    </a>
  );
}
