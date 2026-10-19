import Link from "next/link";
import type { Film, NewsItem, UpcomingProject } from "@/lib/content";
import { activities, genreLabel, studio } from "@/lib/content";
import { Media } from "./Media";
import { Backdrop } from "./Backdrop";
import { Button, Container, SectionHeading } from "./ui";
import { ArrowUpRight, PlayIcon, TicketIcon } from "./Icons";

/* ------------------------------- Feature -------------------------------- */

export function Feature({ film }: { film: Film }) {
  const showing = film.status === "In Cinemas";
  return (
    <section id="featured" className="scroll-mt-20 py-16 sm:py-24">
      <Container>
        <SectionHeading
          label={showing ? "Now Showing" : "From the studio"}
          title={showing ? "In Cinemas" : film.status}
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
            <p className="mt-5 max-w-prose leading-relaxed text-ink/80">
              {film.synopsis}
            </p>

            <dl className="mt-8 grid grid-cols-2 gap-x-6 gap-y-5 border-t border-line pt-6">
              <Meta label="Genre" value={genreLabel(film)} />
              {film.director && <Meta label="Director" value={film.director} />}
              {film.credits && <Meta label="Distribution" value={film.credits} />}
              <Meta label="Year" value={String(film.year)} />
            </dl>

            <div className="mt-8 flex flex-wrap gap-3">
              <Button href={`/films/${film.slug}`} size="lg">
                {showing && <TicketIcon className="h-[0.9rem] w-[0.9rem]" />}
                {showing ? "Buy Tickets" : "Learn More"}
              </Button>
              {film.trailer && (
                <Button href={film.trailer} external variant="outline" size="lg">
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

/* ------------------------------ Activities ------------------------------ */

export function ActivitiesSection() {
  return (
    <section id="activities" className="scroll-mt-20 border-t border-line py-16 sm:py-24">
      <Container>
        <SectionHeading label="What We Do" title="Core Activities" />
        <div className="mt-10 grid gap-x-16 md:grid-cols-2">
          {activities.map((a, i) => (
            <div key={a.title} className="flex gap-6 border-t border-line py-7">
              <span className="label pt-1.5 text-ash tabular-nums">
                {String(i + 1).padStart(2, "0")}
              </span>
              <div>
                <h3 className="font-sans text-[1.2rem] font-medium tracking-[-0.01em]">
                  {a.title}
                </h3>
                <p className="mt-2 max-w-md leading-relaxed text-ink/70">
                  {a.body}
                </p>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}

/* -------------------------------- Studio -------------------------------- */

export function MissionTeaser() {
  return (
    <section className="border-t border-line bg-smoke py-16 sm:py-24">
      <Container>
        <div className="grid gap-10 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <p className="label text-ash">Our Studio</p>
            <p className="mt-5 font-sans text-[1.35rem] font-medium leading-[1.15] tracking-[-0.02em]">
              {studio.genres.join(" · ")}
            </p>
          </div>
          <div className="lg:col-span-8">
            <p className="font-sans text-[1.5rem] font-medium leading-[1.28] tracking-[-0.02em] sm:text-[1.9rem]">
              {studio.intro}
            </p>

            <div className="mt-12 grid gap-10 border-t border-line pt-10 sm:grid-cols-2">
              <div>
                <h3 className="label text-ash">Our Mission</h3>
                <p className="mt-3 leading-relaxed text-ink/75">{studio.mission}</p>
              </div>
              <div>
                <h3 className="label text-ash">Our Vision</h3>
                <p className="mt-3 leading-relaxed text-ink/75">{studio.vision}</p>
              </div>
            </div>

            <Button href="/about" variant="outline" size="lg" className="mt-10" icon>
              More about the studio
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}

/* -------------------------------- News ---------------------------------- */

export function NewsSection({ items }: { items: NewsItem[] }) {
  return (
    <section className="border-t border-line py-16 sm:py-24">
      <Container>
        <SectionHeading label="Latest" title="Notes" href="/notes" />
        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((n) => (
            <Link key={n.slug} href={`/notes/${n.slug}`} className="group block">
              <div className="relative aspect-[4/3] overflow-hidden bg-smoke">
                <Media
                  src={n.image}
                  alt={n.title}
                  accent={n.accent}
                  title={n.title}
                  label={n.category}
                  imgClassName="transition-transform duration-700 group-hover:scale-[1.04]"
                />
              </div>
              <div className="mt-4 flex items-center gap-3">
                <span className="label text-ash">{n.category}</span>
                <span className="h-1 w-1 rounded-full bg-ash" />
                <span className="label text-ash tabular-nums">{n.date}</span>
              </div>
              <h3 className="mt-2 font-sans text-[1.15rem] font-medium leading-tight tracking-[-0.01em]">
                {n.title}
              </h3>
              <p className="mt-2 text-[0.95rem] leading-relaxed text-ink/65">
                {n.excerpt}
              </p>
              <span className="label mt-3 inline-flex items-center gap-1.5 text-ink">
                Read
                <ArrowUpRight className="h-3 w-3" />
              </span>
            </Link>
          ))}
        </div>
      </Container>
    </section>
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
        <div className="mt-9 grid grid-cols-2 gap-x-5 gap-y-10 sm:gap-x-6">
          {items.map((p) => (
            <div key={p.slug} className="group">
              <div className="relative aspect-[3/4] overflow-hidden bg-smoke">
                <Media
                  src={p.image}
                  alt={`Photograph from ${p.title}`}
                  accent={p.accent}
                  title={p.title}
                  label="Upcoming"
                  imgClassName="transition-transform duration-700 group-hover:scale-[1.04]"
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
                <details className="mt-4 group">
                  <summary className="flex items-center gap-2 label text-ink cursor-pointer select-none group-hover:text-ash transition-colors">
                    <span>Synopsis</span>
                    <span className="ml-auto transition-transform group-open:rotate-90" aria-hidden="true">▸</span>
                  </summary>
                  <div className="mt-3 max-w-prose text-[0.95rem] leading-relaxed text-ink/70 prose prose-sm prose-ink">
                    {p.synopsis.split('\n\n').map((para, i) => (
                      <p key={i} className="mb-4">{para}</p>
                    ))}
                  </div>
                </details>
              )}
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
