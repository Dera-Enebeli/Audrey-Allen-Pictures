# Drop your pictures & videos here

The site is already wired to these paths. Add the files and they appear
automatically — no code changes needed. If a file is missing, the card shows a
colour + title tile, and heroes fall back to a blurred-poster layout, so nothing
ever looks broken.

## Your titles (current)

| Title | Type | Folder |
|---|---|---|
| I Love You Regardless | Film | `public/media/films/i-love-you-regardless/` |
| Beguiled | Film | `public/media/films/beguiled/` |
| Noise | Film | `public/media/films/noise/` |
| Red Crest High | Series | `public/media/series/red-crest-high/` |

## What to add to each folder

```
poster.jpg     portrait  2:3   (1200×1800)  — poster cards & grids  [REQUIRED]
backdrop.jpg   landscape 16:9  (1920×1080+) — hero & detail pages
preview.mp4    optional looping video (muted, 6–10s, < ~5 MB)
```

**Example — Beguiled:**
```
public/media/films/beguiled/poster.jpg      ← the poster
public/media/films/beguiled/backdrop.jpg    ← the wide still (hero)
public/media/films/beguiled/preview.mp4     ← optional teaser loop
```

> ✅ **Done:** all four titles now have `poster.jpg`. Still optional for each:
> `backdrop.jpg` — until you add one, that title's hero uses the blurred-poster
> treatment built from your poster.

## Series
```
public/media/series/red-crest-high/poster.jpg
public/media/series/red-crest-high/backdrop.jpg
```

## Foundation

```
public/media/foundation/hero.jpg        landscape 4:3 — /foundation page hero
public/media/foundation/gallery-1.jpg   → used in the /foundation gallery
public/media/foundation/gallery-2.jpg
public/media/foundation/gallery-3.jpg
public/media/foundation/gallery-4.jpg
```

The `hero.jpg` and `gallery-*.jpg` files were pulled from the Audrey Allen
Foundation press coverage (`modernghana.com`). Replace them with your own
high-res photos whenever you're ready — same names, no code changes.

## News
```
public/media/news/i-love-you-regardless.jpg
```

## Tips
- **Posters**: ideally 1200×1800 (2:3). Your current set is portrait
  (1151×1886, 1414×2000, 1080×1558, 1500×1985) — fine, the cards crop to 2:3.
- **Backdrops**: 1920×1080 or larger, 16:9 — used full-bleed with `object-cover`.
- **Videos**: MP4 / H.264, muted & looped. Remove the `video:` line in
  `src/lib/content.ts` to disable a video.
- `accent` in `src/lib/content.ts` is the fallback colour for each title.

## Other assets
- **Logo**: replace the text wordmark in `src/components/Logo.tsx`, or drop an
  SVG at `public/media/brand/logo.svg`.
- **Fonts**: drop `.woff2` files in `public/fonts` and add `@font-face` rules at
  the top of `src/app/globals.css`.

## Adding more titles later
Edit `src/lib/content.ts` — add an entry with a `slug`, then create the matching
folder here using that same slug.
