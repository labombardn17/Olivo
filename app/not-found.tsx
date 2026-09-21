import Link from "next/link";

export default function NotFound() {
  return (
    <main className="container-x flex min-h-[70vh] flex-col items-start justify-center py-20">
      <p className="text-[0.75rem] font-semibold uppercase tracking-[0.18em] opacity-70">404</p>
      <h1 className="font-display mt-3 text-[2.5rem] leading-tight">That page has moved or never existed.</h1>
      <p className="mt-4 max-w-[46ch] opacity-80">Try the treatments list, or text the clinic and we will point you the right way.</p>
      <div className="mt-8 flex flex-wrap gap-3"><Link href="/treatments" className="btn btn-primary">All treatments</Link><Link href="/" className="btn btn-outline">Home</Link></div>
    </main>
  );
}
