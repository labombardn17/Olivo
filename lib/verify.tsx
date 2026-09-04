/** Emits a literal HTML comment so unsourced claims are visible in the markup. */
export function Verify({ note }: { note: string }) {
  const safe = note.replace(/-->/g, "");
  return <span hidden data-verify="" dangerouslySetInnerHTML={{ __html: `<!-- VERIFY: ${safe} -->` }} />;
}
