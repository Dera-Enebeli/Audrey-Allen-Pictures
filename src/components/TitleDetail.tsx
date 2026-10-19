import Link from "next/link";
import type { Film, MediaEntry, Series } from "@/lib/content";
import { genreLabel } from "@/lib/content";
import { Rail } from "./Rail";
import { Media } from "./Media";
import { PosterCard, railCell } from "./cards";
import { Backdrop } from "./Backdrop";
import { Button, Container, SectionHeading, StatusBadge } from "./ui";
import { PlayIcon, TicketIcon } from "./Icons";

type Title = Film | Series;

function isFilm(t: Title): t is Film {
  return !("seasonLabel" in t);
}

export function TitleDetail({
  item,
  kind,
  related,
}: {
  item: Title;
  kind: "film" | "series";
  related: Film[];
}) {
  const film = isFilm(item) ? item : null;
  const series = film ? null : (item as Series);
  const trailer = "trailer" in item ? item.trailer : undefined;
  const cast = "cast" in item ? item.cast : undefined;
  const gallery = film?.gallery;

  return (
    <div>
      {/* hero */}
      <section className="relative h-[78svh] min-h-[520px] w-full overflow-hidden bg-paper">
        <Backdrop
          poster={item.poster}
          backdrop={item.backdrop}
          video={"video" in item ? item.video : undefined}
          title={item.title}
          accent={item.accent}
          label={item.status}
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-black/30" />
        <Container className="absolute inset-x-0 bottom-0 pb-10 sm:pb-14">
          <div className="animate-fade-up max-w-3xl">
            <StatusBadge
              status={item.status}
              releaseLabel={film?.releaseLabel}
              tone="paper"
            />
            <h1 className="mt-5 font-sans text-[2.75rem] font-medium leading-[0.9] tracking-[-0.035em] text-white sm:text-[4.5rem] lg:text-[5.5rem]">
              {item.title}
            </h1>
            {film?.tagline && (
              <p className="mt-4 max-w-xl text-[1.05rem] italic text-white/80">
                {film.tagline}
              </p>
            )}
            <div className="mt-7 flex flex-wrap items-center gap-3">
              <Button href="#where" variant="light" size="lg">
                {item.status === "In Cinemas" ? (
                  <TicketIcon className="h-[0.9rem] w-[0.9rem]" />
                ) : null}
                {item.status === "In Cinemas" ? "Buy Tickets" : "Get Updates"}
              </Button>
              {trailer && (
                <Button
                  href={trailer}
                  external
                  variant="outline"
                  size="lg"
                  className="border-white/40 text-white hover:border-white"
                >
                  <PlayIcon className="h-[0.7rem] w-[0.7rem]" />
                  Watch Trailer
                </Button>
              )}
            </div>
          </div>
        </Container>
      </section>

      {/* body */}
      <section className="py-16 sm:py-24">
        <Container>
          <div className="grid gap-12 lg:grid-cols-12">
            <div className="lg:col-span-7">
              <h2 className="label text-ash">Synopsis</h2>
              <p className="mt-6 font-sans text-[1.3rem] font-medium leading-[1.4] tracking-[-0.015em] sm:text-[1.6rem]">
                {item.synopsis}
              </p>
            </div>

            <div className="lg:col-span-5" id="where">
              <dl className="grid grid-cols-2 gap-x-6 gap-y-6 border-t border-line pt-7">
                <Meta label="Genre" value={genreLabel(item)} />
                <Meta label="Year" value={String(item.year)} />
                {film?.director && <Meta label="Director" value={film.director} />}
                {film?.runtime && <Meta label="Runtime" value={film.runtime} />}
                {film?.credits && (
                  <Meta label="Distribution" value={film.credits} />
                )}
                {series?.network && <Meta label="Network" value={series.network} />}
                {series?.seasonLabel && (
                  <Meta label="Season" value={series.seasonLabel} />
                )}
                <Meta label="Status" value={item.status} />
              </dl>

              <div className="mt-9 border-t border-line pt-7">
                <h3 className="label text-ash">Where to watch</h3>
                <p className="mt-3 text-[0.95rem] leading-relaxed text-ink/70">
                  {item.status === "In Cinemas"
                    ? "Available in cinemas and on select streaming platforms. Check your local listings for showtimes."
                    : "Release details are still being finalised. Subscribe to the newsletter or get in touch to hear when this title lands."}
                </p>
                <div className="mt-5 flex flex-wrap gap-3">
                  <Button href="/about#contact" size="md">
                    Find a screening
                  </Button>
                  <Button href="/about#contact" variant="outline" size="md">
                    Partner with us
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* based on the book */}
      {series?.basedOn && (
        <section className="border-t border-line py-16 sm:py-24">
          <Container>
            <div className="grid gap-10 lg:grid-cols-12">
              <div className="lg:col-span-4">
                <div className="relative aspect-[3/4] w-full max-w-[280px] overflow-hidden bg-smoke">
                  <Media
                    src={series.basedOn.cover}
                    alt={`Cover of ${series.basedOn.title}`}
                    accent={series.accent}
                    title={series.basedOn.title}
                    label="The book"
                  />
                </div>
              </div>
              <div className="lg:col-span-8">
                <p className="label text-ash">Based on the book</p>
                <h2 className="mt-5 font-sans text-[1.9rem] font-medium leading-[1.02] tracking-[-0.025em] sm:text-[2.5rem]">
                  {series.basedOn.title}
                </h2>
                <p className="mt-3 text-[1.05rem] text-ash">
                  by {series.basedOn.author}
                </p>
                <p className="mt-6 max-w-prose leading-relaxed text-ink/75">
                  {series.title} begins on the page. The series is adapted from
                  the novel by {series.basedOn.author}, bringing its world,
                  characters and conflicts to the screen for the first time.
                </p>
              </div>
            </div>
          </Container>
        </section>
      )}

      {/* cast */}
      {cast && cast.length > 0 && (
        <section className="border-t border-line py-16 sm:py-24">
          <Container>
            <SectionHeading label="Ensemble" title="Cast" />
            <div className="mt-9">
              <MediaRail entries={cast} accent={item.accent} fallbackTitle={item.title} />
            </div>
          </Container>
        </section>
      )}

      {/* gallery */}
      {gallery && gallery.length > 0 && (
        <section className="border-t border-line py-16 sm:py-24">
          <Container>
            <SectionHeading label="From the set" title="Stills" />
            <div className="mt-9">
              <MediaRail entries={gallery} accent={item.accent} fallbackTitle={item.title} />
            </div>
          </Container>
        </section>
      )}

      {/* related */}
      {related.length > 0 && (
        <section className="border-t border-line py-16 sm:py-24">
          <Container>
            <SectionHeading label="More from the studio" title="You may also like" />
            <div className="mt-9">
              <Rail>
                {related.map((f) => (
                  <PosterCard
                    key={f.slug}
                    item={f}
                    href={`/films/${f.slug}`}
                    kind="film"
                    className={railCell}
                  />
                ))}
              </Rail>
            </div>
          </Container>
        </section>
      )}

      <Container className="pb-20">
        <Link href={kind === "series" ? "/series" : "/films"} className="label text-ash hover:text-ink">
          ← Back to {kind === "series" ? "Series" : "Films"}
        </Link>
      </Container>
    </div>
  );
}

/** Horizontal rail of portrait media tiles (photos or looping clips). */
function MediaRail({
  entries,
  accent,
  fallbackTitle,
}: {
  entries: MediaEntry[];
  accent: string;
  fallbackTitle: string;
}) {
  return (
    <Rail>
      {entries.map((entry, i) => (
        <div
          key={entry.src ?? entry.video ?? i}
          className={`w-[220px] shrink-0 snap-start sm:w-[260px] ${railCell}`}
        >
          <div className="relative aspect-[3/4] overflow-hidden bg-smoke">
            <Media
              src={entry.src}
              video={entry.video}
              alt={entry.alt}
              accent={accent}
              title={fallbackTitle}
              label={entry.video ? "Watch" : "Cast"}
              imgClassName="transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] hover:scale-[1.04]"
            />
          </div>
        </div>
      ))}
    </Rail>
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
