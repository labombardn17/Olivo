# Olivo Med Spa: five homepage concepts, one URL

A design-selection prototype for Dr. Jacqueline Olivo. One link opens a chooser; from any concept the round switch at the bottom left flips between all five designs and five palettes.

## Open it

| Route | What it is |
|---|---|
| `/` | The chooser. Five tiles, five palette dots. Send this link. |
| `/atelier` | 01 The Atelier: editorial, type is the image |
| `/cinema` | 02 The Cinema: dark screening room, devices as sculpture |
| `/precision` | 03 The Precision: Swiss clinic, data and grid |
| `/residence` | 04 The Residence: boutique hotel, framed photography |
| `/current` | 05 The Current: bold color blocks and motion |
| `/<concept>/emsculpt-neo` | One interior page per concept, to judge whether the system extends |
| `/compare` | Two concepts side by side with independent palettes |
| `/contact-sheet` | 25 hero stills in a grid (development view) |

## The switch

- Bottom left. Tap the circle to open it. Concepts are listed 01 to 05; the palette dots are Noir, Orchid, Olivo, Champagne and Glacier.
- Keyboard: `1` to `5` switch concept, `P` cycles palettes, `H` hides the switch, `Esc` closes it.
- Palette rule: a `?palette=` in the URL wins; otherwise the last palette you chose is remembered; otherwise each concept opens in its own default (Atelier: olivo, Cinema: champagne, Precision: glacier, Residence: champagne, Current: orchid).
- Deep links work: `/precision?palette=noir`.
- `?present=1` hides the switch for a presentation. `?notes=1` adds a "Note on this concept" link that opens an email with the concept and palette already in the subject.

## What is placeholder

Everything visual. The hero film, all photographs, the portrait, the device images, the map, the reviews and the Instagram tiles are placeholders and are labelled as such in the page. See `ASSETS.md` for the list of what to supply and the licenses. Every claim not sourced in the brief carries a `<!-- VERIFY -->` comment in the HTML; `docs/VERIFY.md` lists all of them.

## Claims, HIPAA and reviews

- Real before and after images require written patient authorization for marketing use. Captions stay to treatment name and session count.
- Reviews are the literal placeholder text until verified Google reviews and reviewer permission exist. Fabricated reviews are an FTC problem even in draft.
- "Board-certified" never appears alone; the certifying board is named in full and flagged for counsel.
- No "FDA-approved", no "permanent", no "cure", no comparative claims, no financing rates. Financing reads "Financing available through Cherry."
- Every route is `noindex, nofollow` (metadata and an `X-Robots-Tag` header). JSON-LD is built in `content/seo.ts` and emitted only when `NEXT_PUBLIC_EMIT_SCHEMA=true`.

## Run it

```bash
cd olivo
npm install
npm run dev          # http://localhost:3000
npm run build && npm start
```

Checks:

```bash
npm run audit        # banned fonts, Tailwind default colors, class patterns, copy words, 25 contrast pairs
npm run screenshots  # 5 concepts x 5 palettes x 3 viewports, mobile nav, footer, DOM checks, hero stills
npm run contact-sheet
npm run lighthouse   # mobile Lighthouse on every route against next start
npm run axe          # axe-core on every route at 1440 and 390
node scripts/verify-list.mjs
```

The screenshot, Lighthouse and axe scripts start `next start` on port 3100 if nothing is listening. Playwright uses the environment's Chromium at `/opt/pw-browsers/chromium`; change `executablePath` in `scripts/*.mjs` if yours lives elsewhere.

## Deploy

The prototype deploys two ways.

**Inside the main site (what is live).** The repository is connected to Vercel as the `benchmark-advisors` project. During that project's production build, `next.config.mjs` runs `scripts/build-olivo.mjs`, which installs this app, exports it statically with `basePath: "/olivo"`, and copies it to `public/olivo`. The main site then serves it at `/olivo`, `/olivo/atelier`, `/olivo/compare` and so on, with `X-Robots-Tag: noindex` and a `Disallow: /olivo/` in `robots.txt`. Images are optimized by the host app's `/_next/image` through `lib/image-loader.ts`. Every push to a branch gets a Vercel preview URL; merging to `main` makes it `https://benchmark-advisors.com/olivo`.

**On its own.** As a separate Vercel project with the root directory set to `olivo`:

```bash
cd olivo
npx vercel login
npx vercel --prod
```

Either way the URL is unlisted and every route is noindexed. For a password, use Vercel Deployment Protection on the project; the static export has no middleware.

## Assets the client must supply

Drone footage, manufacturer device imagery, a portrait, room photography, before and after images with authorizations, the logo, hours, verified reviews, membership terms, and the certifying board's full name. Details in `ASSETS.md`.
