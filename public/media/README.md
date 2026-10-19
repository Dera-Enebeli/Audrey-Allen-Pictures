# Drop your pictures & videos here

The site is wired to these paths. Add or replace files and they appear
automatically — no code changes needed for posters, backdrops or previews. If a
file is missing, the card shows a colour + title tile, and heroes fall back to a
blurred-poster layout, so nothing ever looks broken.

## Your titles (current)

| Title | Type | Folder |
|---|---|---|
| I Love You Regardless | Film | `public/media/films/i-love-you-regardless/` |
| Beguiled | Film | `public/media/films/beguiled/` |
| Noise | Film | `public/media/films/noise/` |
| Red Crest High | Series | `public/media/series/red-crest-high/` |

## What each title folder can hold

```
poster.jpg       portrait  2:3   (1200×1800)  — poster cards & grids  [REQUIRED]
backdrop.jpg     landscape 16:9  (1920×1080+) — hero & detail pages
preview.mp4      optional looping video for the hero (muted, 6–10s, < ~5 MB)
cast/cast-NN.jpg portrait  cast photos (shown in the "Cast" rail)
cast/*.mp4             short behind-the-scenes clips (looping tiles in the rail)
stills/still-NN.jpg    production stills (shown in the "Stills" rail)
```

**Backdrops:** after adding `backdrop.jpg`, set the title's `backdrop:` path in
`src/lib/content.ts`. Leaving it unset (or pointing at a missing file) makes the
hero use the blurred-poster treatment — never a broken image.

**Cast / stills:** listed in `src/lib/content.ts` under `cast:` and `gallery:`
so you control the order and can drop entries you don't want published.

## Series extras

```
public/media/series/red-crest-high/book/book.jpg        book cover
public/media/series/red-crest-high/book/tablet-view.jpg (optional extra art)
```

The "Based on the book" block on the series page is configured via `basedOn`
in `src/lib/content.ts`.

## Foundation

```
public/media/foundation/hero.jpg        landscape 4:3 — reserved for /foundation
public/media/foundation/gallery-*.jpg   used in the /foundation gallery
```

## News

```
public/media/news/<slug>.jpg    article image for the matching news slug
```

## Tips
- **Posters**: ideally 1200×1800 (2:3). The cards crop to 2:3 either way.
- **Backdrops**: 1920×1080 or larger, 16:9 — used full-bleed with `object-cover`.
- **Videos**: MP4 / H.264, muted & looped. Keep hero previews under ~5 MB
  (`avconvert --preset PresetMediumQuality -s in.mp4 -o out.mp4` works well).
- `accent` in `src/lib/content.ts` is the fallback colour for each title.
- Avoid spaces, brackets and trailing punctuation in file/folder names —
  rename to `kebab-case` before committing.

## Other assets
- **Logo**: replace the text wordmark in `src/components/Logo.tsx`, or drop an
  SVG at `public/media/brand/logo.svg`.
- **Brand video**: `public/media/brand/LOGO.mp4` plays on the homepage and the
  Studio page.
- **Fonts**: to self-host, drop `.woff2` files in `public/fonts`, add
  `@font-face` rules at the top of `src/app/globals.css`, and name the families
  in `--font-sans` / `--font-mono` (the Fontshare `<link>` in `layout.tsx` can
  then be removed).

## Adding more titles later
Edit `src/lib/content.ts` — add an entry with a `slug`, then create the matching
folder here using that same slug.
