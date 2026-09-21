# Launch checklist for olivomedspa.com on this build

## Where things are
- Code: github.com/labombardn17/Olivo (main). Vercel project `olivo-med-spa` auto-deploys main to https://olivo-med-spa.vercel.app.
- The same code lives in benchmark-advisors/olivo and is mounted at benchmark-advisors.com/olivo (static export, always noindex).
- Design review of the five original concepts: /concepts, /compare, /contact-sheet.

## Before showing Dr. Olivo
- Open / on a phone. The hero uses a 10 second cut of her current homepage video when the build could fetch it, otherwise the placeholder film.
- Photos on treatment, category, team, and concern pages are pulled from olivomedspa.com at build time (content/live-images.json lists what was found). Anything without a photo shows a grey labelled placeholder.
- Everything the clinic must confirm renders as `<!-- VERIFY: ... -->` comments in the HTML. `grep -o "VERIFY: [^-]*" out/**/*.html | sort | uniq -c` lists them.

## Go live on the real domain
1. Vercel project settings: add olivomedspa.com and www.olivomedspa.com, set www as primary.
2. Environment variables (production): `NEXT_PUBLIC_SITE_URL=https://www.olivomedspa.com`, `NEXT_PUBLIC_INDEXABLE=1`. Redeploy. robots.txt flips to allow, every page gets index,follow and a canonical on the new domain, sitemap.xml lists 104 URLs.
3. Remove the `X-Robots-Tag: noindex` header in next.config.ts securityHeaders for the standalone build.
4. Legacy redirects: content/redirects.json maps 65 old paths (every service URL, team, about, promos, skincare, neighborhood pages) to their new homes and is wired into next.config.ts. Add any remaining URLs from the old sitemap before DNS moves.
5. DNS: point the apex and www at Vercel. Keep Cloudflare proxy off for the cutover or set SSL to Full (strict).
6. Google Business Profile: update the website URL, confirm hours match (Mon to Fri 10 to 7, Sat 10 to 5), reconcile the two Maps links found on the old site.
7. Search Console: add the property, submit sitemap.xml, request indexing for /, /treatments, /quiz, and the top ten treatments.
8. Replace testimonials and rating with verified Google reviews and a real count; supply authorized before and after cases.
9. Confirm 872-315-3481 receives texts (every Text button uses it) and the Vagaro, Cherry, and RepeatMD links.
10. /book embeds the Vagaro business widget (the same iframe the current site uses). Confirm it loads on the new domain and that the confirmation texts and emails come from the right Vagaro account.

## Live QA (rerun after every deploy)
- `node scripts/live-crawl.mjs https://olivo-med-spa.vercel.app`: every sitemap URL and every internal link, status codes, title and description lengths, H1 count, canonical, Open Graph, JSON-LD types. Expect 0 non-200 and 0 content flags.
- `node scripts/live-schema.mjs https://olivo-med-spa.vercel.app`: every JSON-LD block validated against the schema.org vocabulary. Expect 0 issues.
- Lighthouse against the live URL from a machine with Chrome (the Vercel sandbox works): expect perf 92 or better on mobile, 100 accessibility, 100 best practices. SEO reads 66 to 69 until NEXT_PUBLIC_INDEXABLE=1 removes the noindex.
- The Vercel project must keep the Next.js framework preset (vercel.json pins it). Without it Vercel serves only the public folder and every page 404s.

## Content owners
- Claims: docs/CONTENT-RULES.md governs every string. Counsel to review Emfemme 360, hormone therapy, GLP-1, Miradry, and Kybella pages first.
- Spanish: /es is the home page in Spanish; detail pages are English for now.
