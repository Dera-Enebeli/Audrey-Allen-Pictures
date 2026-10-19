import type { Film } from "@/lib/content";
import { Backdrop } from "./Backdrop";
import { Button, Container } from "./ui";
import { PlayIcon } from "./Icons";

/**
 * A24's homepage hero: full-viewport slides stacked with position:sticky, so
 * each title pins and the next one slides up over it as you scroll — a
 * scroll-driven reveal with no JS. The first slide carries the page h1; the
 * rest are h2s (same convention a24films.com uses). A thin page-background
 * frame around each slide makes the stacking edge visible.
 */
export function Hero({ slides }: { slides: Film[] }) {
  const headingCls =
    "mt-4 font-sans text-[clamp(2.75rem,11vw,10rem)] font-medium leading-[0.85] tracking-[-0.04em] text-white";

  return (
    <section className="relative bg-paper">
      {slides.map((slide, i) => (
        <article
          key={slide.slug}
          className="sticky top-0 h-[100svh] min-h-[560px] w-full overflow-hidden border-[6px] border-paper sm:border-[10px]"
          aria-label={slide.title}
        >
          <Backdrop
            poster={slide.poster}
            backdrop={slide.backdrop}
            video={slide.video}
            title={slide.title}
            accent={slide.accent}
            label={slide.status}
            priority={i === 0}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-black/40" />

          <Container className="absolute inset-x-0 bottom-0 pb-10 sm:pb-14">
            <p className="label text-white/75">
              {slide.status}
              {slide.releaseLabel ? ` — ${slide.releaseLabel}` : ""}
            </p>
            {i === 0 ? (
              <h1 className={headingCls}>{slide.title}</h1>
            ) : (
              <h2 className={headingCls}>{slide.title}</h2>
            )}
            {slide.tagline && (
              <p className="mt-5 max-w-xl text-[1rem] leading-snug text-white/80">
                {slide.tagline}
              </p>
            )}
            <div className="mt-7 flex flex-wrap gap-3">
              <Button href={`/films/${slide.slug}`} variant="light" size="lg">
                {slide.status === "In Cinemas" ? "Get Tickets" : "Learn More"}
              </Button>
              {slide.trailer && (
                <Button
                  href={slide.trailer}
                  external
                  variant="light"
                  size="lg"
                >
                  <PlayIcon className="h-[0.7rem] w-[0.7rem]" />
                  Watch Trailer
                </Button>
              )}
            </div>
          </Container>
        </article>
      ))}
    </section>
  );
}
