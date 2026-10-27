"use client";

import Link from "next/link";
import type { Film, Series } from "@/lib/content";
import { genreLabel } from "@/lib/content";
import { Backdrop } from "./Backdrop";
import { Button, Container, SectionHeading } from "./ui";
import { PlayIcon } from "./Icons";

type Title = Film | Series;

function isFilm(t: Title): t is Film {
  return !("seasonLabel" in t);
}

/**
 * Editorial spotlight — a single title given room to breathe with
 * trailer, synopsis, and metadata. Not the "whole point", just the
 * current focus. Rotates or is curated manually.
 */
export function Spotlight({ item }: { item: Title }) {
  const film = isFilm(item) ? item : null;
  const series = film ? null : (item as Series);
  const trailer = "trailer" in item ? item.trailer : undefined;

  return (
    <section id="spotlight" className="scroll-mt-20 border-t border-line py-16 sm:py-24">
      <Container>
        <SectionHeading
          label="Spotlight"
          title="Currently featuring"
          href={film ? "/films" : "/series"}
        />

        <div className="mt-8 grid gap-8 lg:grid-cols-12 lg:gap-12">
          <div className="lg:col-span-7">
            <Link
              href={film ? `/films/${item.slug}` : `/series/${item.slug}`}
              className="group relative block aspect-[16/11] overflow-hidden bg-smoke"
            >
              <Backdrop
                poster={item.poster}
                backdrop={item.backdrop}
                video={film?.video}
                title={item.title}
                accent={item.accent}
                label={item.status}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-80" />
              <div className="absolute bottom-5 left-5 flex items-center gap-2 text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                {trailer && (
                  <>
                    <PlayIcon className="h-3 w-3" />
                    <span className="label">Watch trailer</span>
                  </>
                )}
              </div>
            </Link>
          </div>

          <div className="flex flex-col lg:col-span-5">
            <div className="flex items-center gap-2 text-ash">
              <span className="label">{film ? "Film" : "Series"}</span>
              <span className="h-1 w-1 rounded-full bg-gold" />
              {item.status && (
                <>
                  <span className="h-1 w-1 rounded-full bg-gold" />
                  <span className="label">{item.status}</span>
                </>
              )}
            </div>

            <h3 className="mt-3 font-sans text-[1.9rem] font-medium leading-[0.98] tracking-[-0.03em] sm:text-[2.6rem]">
              {item.title}
            </h3>
            {film?.tagline && (
              <p className="mt-3 text-[1.05rem] italic text-ash">{film.tagline}</p>
            )}

            <p className="mt-5 max-w-prose leading-relaxed text-ink/80">
              {item.synopsis && (
                <>
                  <span className="details-teaser block mb-3 max-w-prose text-[0.95rem] leading-relaxed text-ink/70">
                    {item.synopsis.split("\n\n")[0]?.slice(0, 180)}…
                  </span>
                  <details className="flex min-h-11 items-center gap-2 label text-ink cursor-pointer select-none hover:text-ash transition-colors list-none">
                    <summary className="flex min-h-11 items-center gap-2">
                      <span>Read more</span>
                      <span className="ml-auto transition-transform arrow-rotate" aria-hidden="true">▸</span>
                    </summary>
                    <div className="mt-3 max-w-prose text-[0.95rem] leading-relaxed text-ink/70 prose prose-sm prose-ink">
                      {item.synopsis.split("\n\n").map((para, i) => (
                        <p key={i} className="mb-4">{para}</p>
                      ))}
                    </div>
                  </details>
                </>
              )}
            </p>

            <dl className="mt-8 grid grid-cols-2 gap-x-6 gap-y-5 border-t border-line pt-6">
              <Meta label="Genre" value={genreLabel(item)} />
              {film?.director && <Meta label="Director" value={film.director} />}
              {film?.credits && <Meta label="Distribution" value={film.credits} />}
              {film?.distribution && (
                <Meta label="Inflight" value={film.distribution.eyebrow} />
              )}
              {series?.network && <Meta label="Network" value={series.network} />}
              <Meta label="Year" value={String(item.year)} />
            </dl>

            <div className="mt-8 flex flex-wrap gap-3">
              <Button href={film ? `/films/${item.slug}` : `/series/${item.slug}`} size="lg">
                View details
              </Button>
              {trailer && (
                <Button href={trailer} external variant="outline" size="lg">
                  <PlayIcon className="h-[0.7rem] w-[0.7rem]" />
                  Watch Trailer
                </Button>
              )}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

function Meta({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <dt className="label text-ash">{label}</dt>
      <dd className="mt-1.5 text-[0.95rem] leading-snug">{value}</dd>
    </div>
  );
}