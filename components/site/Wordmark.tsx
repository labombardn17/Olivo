import Link from "next/link";

export function Wordmark({ className = "" }: { className?: string }) {
  return (
    <Link href="/" className={`inline-flex items-baseline gap-2 leading-none ${className}`}>
      <span className="font-display text-[1.75rem] font-medium tracking-[0.18em]">OLIVO</span>
      <span className="text-[0.5625rem] font-semibold uppercase tracking-[0.22em] opacity-70">Med Spa</span>
    </Link>
  );
}
