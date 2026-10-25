import Link from "next/link";
import type { Film, UpcomingProject } from "@/lib/content";
import { genreLabel, synopsisTeaser } from "@/lib/content";
import { Backdrop } from "./Backdrop";
import { FramedMedia } from "./FramedMedia";
import { Button, Container, SectionHeading } from "./ui";
import { PlayIcon } from "./Icons";

/* ------------------------------- Feature -------------------------------- */

export function Feature({ film }: { film: Film }) {
  return (
    <section id="featured" className="scroll-mt-20 border-t border-line py-16 sm:py-24">
      <Container>
        <SectionHeading
          label="Featured"
          title="From the studio"
          href="/films"
        />

        <div className="mt-8 grid gap-8 lg:grid-cols-12 lg:gap-12">
          <div className="lg:col-span-7">
            <Link
              href={`/films/${film.slug}`}
              className="group relative block aspect-[16/11] overflow-hidden bg-smoke"
            >
              <Backdrop
                poster={film.poster}
                backdrop={film.backdrop}
                video={film.video}
                title={film.title}
                accent={film.accent}
                label={film.status}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-80" />
              <div className="absolute bottom-5 left-5 flex items-center gap-2 text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                {film.trailer && (
                  <>
                    <PlayIcon className="h-3 w-3" />
                    <span className="label">Watch trailer</span>
                  </>
                )}
              </div>
            </Link>
          </div>

          <div className="flex flex-col lg:col-span-5">
            <h3 className="font-sans text-[1.9rem] font-medium leading-[0.98] tracking-[-0.03em] sm:text-[2.6rem]">
              {film.title}
            </h3>
            {film.tagline && (
              <p className="mt-3 text-[1.05rem] italic text-ash">{film.tagline}</p>
            )}
            <div className="mt-5 max-w-prose leading-relaxed text-ink/80">
              {film.synopsis && (
                <>
                  <span className="details-teaser block mb-3 max-w-prose text-[0.95rem] leading-relaxed text-ink/70">
                    {synopsisTeaser(film.synopsis)}
                  </span>
                  <details className="flex min-h-11 items-center gap-2 label text-ink cursor-pointer select-none hover:text-ash transition-colors list-none">
                    <summary className="flex min-h-11 items-center gap-2">
                      <span>Read more</span>
                      <span className="ml-auto transition-transform arrow-rotate" aria-hidden="true">▸</span>
                    </summary>
                    <div className="mt-3 max-w-prose text-[0.95rem] leading-relaxed text-ink/70 prose prose-sm prose-ink">
                      {film.synopsis.split('\n\n').map((para, i) => (
                        <p key={i} className="mb-4">{para}</p>
                      ))}
                    </div>
                  </details>
                </>
              )}
            </div>

            <dl className="mt-8 grid grid-cols-2 gap-x-6 gap-y-5 border-t border-line pt-6">
              <Meta label="Genre" value={genreLabel(film)} />
              {film.director && <Meta label="Director" value={film.director} />}
              {film.credits && <Meta label="Distribution" value={film.credits} />}
              <Meta label="Year" value={String(film.year)} />
            </dl>

            <div className="mt-8 flex flex-wrap gap-3">
              <Button href={`/films/${film.slug}`} size="lg">
                View details
              </Button>
              {film.trailer && (
                <Button href={film.trailer} external variant="outline" size="lg">
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

/* ------------------------------ Upcoming -------------------------------- */

/**
 * Teaser grid for in-development titles. Cards are deliberately not linked
 * yet — they start linking to detail pages once real project info arrives.
 */
export function UpcomingSection({ items }: { items: UpcomingProject[] }) {
  if (!items.length) return null;
  return (
    <section className="border-t border-line py-16 sm:py-24">
      <Container>
        <SectionHeading label="In Development" title="Upcoming" />
        <div className="mt-9 grid grid-cols-1 sm:grid-cols-2 gap-x-5 gap-y-10 sm:gap-x-6">
          {items.map((p) => (
            <div key={p.slug} className="group">
              <div className="relative aspect-[3/4] overflow-hidden bg-smoke">
                <FramedMedia
                  src={p.image}
                  alt={`Photograph from ${p.title}`}
                  accent={p.accent}
                  title={p.title}
                  label="Upcoming"
                  innerClassName="transition-transform duration-700 group-hover:scale-[1.03]"
                />
              </div>
              <div className="mt-4 flex flex-wrap items-center gap-x-3 gap-y-1">
                <span className="label text-ash">{p.status}</span>
                <span className="h-1 w-1 rounded-full bg-ash" />
                <span className="label text-ash tabular-nums">
                  {p.releaseLabel}
                </span>
              </div>
              <h3 className="mt-2 font-sans text-[1.15rem] font-medium leading-tight tracking-[-0.01em]">
                {p.title}
              </h3>
              {p.synopsis && (
                <>
                  <p className="details-teaser mb-3 max-w-prose text-[0.95rem] leading-relaxed text-ink/70">
                    {synopsisTeaser(p.synopsis)}
                  </p>
                  <details className="mt-4">
                    <summary className="flex min-h-11 items-center gap-2 label text-ink cursor-pointer select-none hover:text-ash transition-colors list-none">
                      <span>Read more</span>
                      <span className="ml-auto transition-transform arrow-rotate" aria-hidden="true">▸</span>
                    </summary>
                    <div className="mt-3 max-w-prose text-[0.95rem] leading-relaxed text-ink/70 prose prose-sm prose-ink">
                      {p.synopsis.split('\n\n').map((para, i) => (
                        <p key={i} className="mb-4">{para}</p>
                      ))}
                    </div>
                  </details>
                </>
              )}
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
