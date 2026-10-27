import Link from "next/link";
import type { Film, MediaEntry, Series } from "@/lib/content";
import { genreLabel, synopsisTeaser } from "@/lib/content";
import { Rail } from "./Rail";
import { Media } from "./Media";
import { VideoTile } from "./VideoTile";
import { ClipPlayer } from "./ClipPlayer";
import { FramedMedia } from "./FramedMedia";
import { PosterCard, railCell } from "./cards";
import { Backdrop } from "./Backdrop";
import { Button, Container, SectionHeading, StatusBadge } from "./ui";
import { PlayIcon, PlaneIcon } from "./Icons";

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
  const videos = "videos" in item ? item.videos : undefined;
  const bts = "bts" in item ? item.bts : undefined;
  const clips = "clips" in item ? item.clips : undefined;
  const distribution = "distribution" in item ? item.distribution : undefined;
  const editions = "editions" in item ? item.editions : undefined;
  const onSet = "onSet" in item ? item.onSet : undefined;
  const gallery = film?.gallery ?? ("stills" in item ? item.stills : undefined);

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
          posterFit={series ? "fill" : "card"}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-black/30" />
        <Container className="absolute inset-x-0 bottom-0 pb-10 sm:pb-14">
          <div className="animate-fade-up max-w-3xl">
            {item.status && (
              <StatusBadge
                status={item.status}
                releaseLabel={film?.releaseLabel}
                tone="paper"
              />
            )}
            <h1 className="mt-5 font-sans text-[2.75rem] font-medium leading-[0.9] tracking-[-0.035em] text-white sm:text-[4.5rem] lg:text-[5.5rem]">
              {item.title}
            </h1>
            {film?.tagline && (
              <p className="mt-4 max-w-xl text-[1.05rem] italic text-white/80">
                {film.tagline}
              </p>
            )}
            <div className="mt-7 flex flex-wrap items-center gap-3">
              {trailer ? (
                <Button href={trailer} external variant="light" size="lg">
                  <PlayIcon className="h-[0.7rem] w-[0.7rem]" />
                  Watch Trailer
                </Button>
              ) : (
                <Button href="/#newsletter" variant="light" size="lg">
                  Get Updates
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
              {item.synopsis && (
                <>
                  <p className="details-teaser mb-3 max-w-prose text-[0.95rem] leading-relaxed text-ink/70">
                    {synopsisTeaser(item.synopsis)}
                  </p>
                  <details className="mt-6">
                    <summary className="flex min-h-11 items-center gap-2 label text-ink cursor-pointer select-none hover:text-ash transition-colors list-none">
                      <span>Read more</span>
                      <span className="ml-auto transition-transform arrow-rotate" aria-hidden="true">▸</span>
                    </summary>
                    <div className="mt-3">
                      {item.synopsis.split("\n\n").map((para, i) => (
                        <p key={i} className="mb-4 font-sans text-[1.3rem] font-medium leading-[1.4] tracking-[-0.015em] sm:text-[1.6rem]">{para}</p>
                      ))}
                    </div>
                  </details>
                </>
              )}
            </div>

            <div className="lg:col-span-5">
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
                {item.status && (
                  <Meta label="Status" value={item.status} />
                )}
              </dl>
            </div>
          </div>
        </Container>
      </section>

      {distribution && (
        <section
          id="inflight"
          className="relative overflow-hidden border-t border-line bg-smoke py-16 sm:py-24"
        >
          {/* soft gold glow rising behind the poster */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -top-28 right-1/2 h-[34rem] w-[60rem] -translate-x-1/2 rounded-full bg-[radial-gradient(ellipse_at_center,rgba(201,162,39,0.13),rgba(201,162,39,0)_62%)] blur-2xl"
          />
          <Container className="relative">
            <div className="grid gap-10 lg:grid-cols-12 lg:items-center lg:gap-16">
              <div className="lg:col-span-5">
                <figure className="mx-auto max-w-[360px] lg:max-w-[380px]">
                  <div className="relative aspect-[4/5] overflow-hidden bg-black shadow-[0_50px_90px_-30px_rgba(0,0,0,0.9)] ring-1 ring-line">
                    <Media
                      src={distribution.poster}
                      alt={distribution.posterAlt}
                      accent={item.accent}
                      title={item.title}
                      label={distribution.eyebrow}
                    />
                  </div>
                  <figcaption className="mt-4">
                    <p className="label text-ash">{distribution.note}</p>
                  </figcaption>
                </figure>
              </div>
              <div className="lg:col-span-7">
                <p className="label inline-flex items-center gap-2.5 text-ash">
                  <PlaneIcon className="h-4 w-4 text-gold" aria-hidden="true" />
                  {distribution.eyebrow}
                </p>
                <h2 className="mt-5 max-w-[16ch] font-sans text-[clamp(2rem,4.5vw,3.25rem)] font-medium leading-[1.04] tracking-[-0.025em] text-white">
                  {distribution.heading}
                </h2>
                <p className="mt-6 max-w-prose text-[1.05rem] leading-relaxed text-ink/75">
                  {distribution.body}
                </p>
                <dl className="mt-9 grid grid-cols-1 gap-x-8 gap-y-5 border-t border-line pt-7 sm:grid-cols-3">
                  {distribution.facts.map((fact) => (
                    <div key={fact.label}>
                      <dt className="label text-ash">{fact.label}</dt>
                      <dd className="mt-1.5 text-[0.95rem] leading-snug">{fact.value}</dd>
                    </div>
                  ))}
                </dl>
              </div>
            </div>
          </Container>
        </section>
      )}

      {/* French edition — poster right, synopsis left, on the plain ground. */}
      {editions?.map((edition) => (
        <section
          key={edition.language}
          lang={edition.language}
          className="border-t border-line py-16 sm:py-24"
        >
          <Container>
            <div className="grid gap-10 lg:grid-cols-12 lg:items-start lg:gap-16">
              <div className="order-first lg:order-none lg:col-span-7">
                <div className="flex items-center gap-3">
                  <span className="label">{edition.label}</span>
                  <span className="h-1 w-1 rounded-full bg-gold" />
                  <span className="label text-ash">{edition.language.toUpperCase()}</span>
                </div>
                <h2 className="mt-5 max-w-[18ch] font-sans text-[clamp(2rem,4.5vw,3.25rem)] font-medium leading-[1.04] tracking-[-0.025em] text-white">
                  {edition.title}
                </h2>
                {edition.subheading && (
                  <p className="mt-3 text-ash">{edition.subheading}</p>
                )}
                <div className="mt-8 max-w-prose">
                  <p className="text-[1rem] leading-relaxed text-ink/80">
                    {synopsisTeaser(edition.synopsis, 220)}
                  </p>
                  <details className="mt-4">
                    <summary className="flex min-h-11 items-center gap-2 label text-ink cursor-pointer select-none transition-colors hover:text-ash list-none">
                      <span>Lire le synopsis</span>
                      <span className="ml-auto transition-transform arrow-rotate" aria-hidden="true">▸</span>
                    </summary>
                    <div className="mt-6 max-w-prose">
                      {edition.synopsis.split("\n\n").map((para, i) => (
                        <p key={i} className="mb-5 font-sans text-[1.05rem] font-medium leading-[1.65] tracking-[-0.01em] text-ink/90">
                          {para}
                        </p>
                      ))}
                    </div>
                  </details>
                </div>
                {edition.facts && edition.facts.length > 0 && (
                  <dl className="mt-10 grid grid-cols-1 gap-x-8 gap-y-5 border-t border-line pt-7 sm:grid-cols-2">
                    {edition.facts.map((fact) => (
                      <div key={fact.label}>
                        <dt className="label text-ash">{fact.label}</dt>
                        <dd className="mt-1.5 text-[0.95rem] leading-snug">{fact.value}</dd>
                      </div>
                    ))}
                  </dl>
                )}
              </div>
              <div className="order-first lg:order-none lg:col-span-5">
                <figure className="mx-auto max-w-[360px] lg:max-w-[300px]">
                  <div className="relative aspect-[4/5] overflow-hidden bg-smoke ring-1 ring-line shadow-[0_50px_90px_-30px_rgba(0,0,0,0.9)]">
                    <Media
                      src={edition.poster}
                      alt={edition.posterAlt}
                      accent={item.accent}
                      title={item.title}
                      label={edition.label}
                    />
                  </div>
                </figure>
              </div>
            </div>
          </Container>
        </section>
      ))}
      {/* behind the scenes — featured clip, given its own billing */}
      {bts && (
        <section className="border-t border-line py-16 sm:py-24">
          <Container>
            <SectionHeading label={bts.kind} title="Behind the Scenes" />
            <div className="mt-9 grid gap-10 lg:grid-cols-12 lg:gap-12">
              <div className={bts.portrait ? "lg:col-span-5" : "lg:col-span-8"}>
                <div
                  className={`relative w-full overflow-hidden bg-black ${
                    bts.portrait ? "aspect-[9/16] max-w-[340px]" : "aspect-video"
                  } ${bts.portrait ? "justify-self-center" : ""}`}
                >
                  <Media
                    src={bts.poster}
                    video={bts.video}
                    alt={`Behind the scenes of ${item.title}`}
                    accent={item.accent}
                    title={item.title}
                    label={bts.kind}
                    priority
                  />
                </div>
              </div>
              <div className={`flex flex-col justify-end ${bts.portrait ? "lg:col-span-7" : "lg:col-span-4"}`}>
                <p className="label">{bts.kind}</p>
                <h3 className="mt-4 font-sans text-[1.6rem] font-medium leading-[1.05] tracking-[-0.025em] sm:text-[2rem]">
                  {bts.title}
                </h3>
                {bts.caption && (
                  <p className="mt-4 leading-relaxed text-ink/75">{bts.caption}</p>
                )}
              </div>
            </div>
          </Container>
        </section>
      )}

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
                {series.basedOn.synopsis && (
                  <details className="mt-8">
                    <summary className="flex min-h-11 items-center gap-2 label cursor-pointer select-none transition-colors hover:opacity-70 list-none">
                      <span>About the novel</span>
                      <span className="ml-auto transition-transform arrow-rotate" aria-hidden="true">▸</span>
                    </summary>
                    <div className="mt-6 max-w-prose text-[0.95rem] leading-relaxed text-ink/70 prose prose-sm prose-ink">
                      {series.basedOn.synopsis.split('\n\n').map((para, i) => (
                        <p key={i} className="mb-4">{para}</p>
                      ))}
                    </div>
                  </details>
                )}
                {(series.basedOn.tiktok ||
                  series.basedOn.instagram ||
                  series.basedOn.amazon) && (
                  <div className="mt-8 flex flex-wrap gap-3">
                    {series.basedOn.tiktok && (
                      <Button
                        href={series.basedOn.tiktok}
                        external
                        variant="outline"
                        size="sm"
                        icon
                      >
                        TikTok
                      </Button>
                    )}
                    {series.basedOn.instagram && (
                      <Button
                        href={series.basedOn.instagram}
                        external
                        variant="outline"
                        size="sm"
                        icon
                      >
                        Instagram
                      </Button>
                    )}
                    {series.basedOn.amazon && (
                      <Button
                        href={series.basedOn.amazon}
                        external
                        variant="outline"
                        size="sm"
                        icon
                      >
                        Amazon
                      </Button>
                    )}
                  </div>
                )}
              </div>
            </div>
          </Container>
        </section>
      )}

      {/* videos — soundtrack, premieres, featurettes */}
      {videos && videos.length > 0 && (
        <section className="border-t border-line py-16 sm:py-24">
          <Container>
            <SectionHeading label="Watch" title="Music & Events" />
            <div className="mt-9 grid gap-x-6 gap-y-12 lg:grid-cols-2">
              {videos.map((v) => (
                <VideoTile key={v.youtubeId} video={v} />
              ))}
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
              <MediaRail entries={gallery} accent={item.accent} fallbackTitle={item.title} framed />
            </div>
          </Container>
        </section>
      )}

      {/* on set — featured behind-the-lens footage, full players */}
      {onSet && onSet.length > 0 && (
        <section className="border-t border-line py-16 sm:py-24">
          <Container>
            <SectionHeading label="From the set" title="On Set" />
            <div className="mt-9 grid gap-x-8 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
              {onSet
                .filter((clip) => clip.lead)
                .map((clip) => (
                  <div key={clip.src} className="mx-auto w-full max-w-[920px] lg:col-span-3">
                    <ClipPlayer
                      src={clip.src}
                      poster={clip.poster}
                      title={clip.title}
                      kind={clip.kind}
                      caption={clip.caption}
                      accent={item.accent}
                      lead
                    />
                  </div>
                ))}
              {onSet
                .filter((clip) => !clip.lead)
                .map((clip) => (
                  <ClipPlayer
                    key={clip.src}
                    src={clip.src}
                    poster={clip.poster}
                    title={clip.title}
                    kind={clip.kind}
                    caption={clip.caption}
                    accent={item.accent}
                  />
                ))}
            </div>
          </Container>
        </section>
      )}

      {/* featured clips — own section, full player controls */}
      {clips && clips.length > 0 && (
        <section className="border-t border-line py-16 sm:py-24">
          <Container>
            <SectionHeading label="Watch" title="Clips" />
            <div className="mt-10 grid gap-x-8 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
              {clips.map((c) => (
                <ClipPlayer
                  key={c.src}
                  src={c.src}
                  poster={c.poster}
                  title={c.title}
                  kind={c.kind}
                  caption={c.caption}
                  accent={item.accent}
                />
              ))}
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
        <Link
          href={kind === "series" ? "/series" : "/films"}
          className="label inline-flex min-h-10 items-center text-ash hover:text-ink"
        >
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
  /**
   * `true` shows each photo whole (contained) over a blurred fill of itself.
   * `false` crops it to fill the tile. Cast photos are portrait and read best
   * cover-fit; set stills are mixed-orientation, so they opt in to framing.
   */
  framed = false,
}: {
  entries: MediaEntry[];
  accent: string;
  fallbackTitle: string;
  framed?: boolean;
}) {
  return (
    <Rail>
      {entries.map((entry, i) => (
        <div
          key={entry.src ?? entry.video ?? i}
          className={`group w-[220px] shrink-0 snap-start sm:w-[260px] ${railCell}`}
        >
          <div className="relative aspect-[3/4] overflow-hidden bg-smoke">
            {entry.video || !framed ? (
              <Media
                src={entry.src}
                video={entry.video}
                alt={entry.alt}
                accent={accent}
                title={fallbackTitle}
                label={entry.kind ?? (entry.video ? "Watch" : "Cast")}
                imgClassName="transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.04]"
              />
            ) : (
              <FramedMedia
                src={entry.src}
                alt={entry.alt}
                accent={accent}
                title={fallbackTitle}
                label={entry.kind ?? "Cast"}
                innerClassName="transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.03]"
              />
            )}
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
