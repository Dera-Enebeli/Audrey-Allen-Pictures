import type { Film } from "@/lib/content";
import { synopsisTeaser } from "@/lib/content";
import { Backdrop } from "./Backdrop";
import { Media } from "./Media";
import { Button, Container } from "./ui";
import { ArrowDown, PlayIcon } from "./Icons";
import { site } from "@/lib/site";

/**
 * A24's homepage hero: full-viewport slides stacked with position:sticky, so
 * each title pins and the next one slides up over it as you scroll — a
 * scroll-driven reveal with no JS. The brand slide leads and owns the page h1;
 * the film slides that follow are h2s (same convention a24films.com uses). A
 * thin page-background frame around each slide makes the stacking edge visible.
 */
export function Hero({ slides }: { slides: Film[] }) {
  const headingCls =
    "mt-4 font-sans text-[clamp(2.75rem,11vw,10rem)] font-medium leading-[0.85] tracking-[-0.04em] text-white";

  return (
    <section className="relative bg-paper">
      {/* 1. The studio's own logo — first slide of the stack, owns the h1. */}
      <article
        className="sticky top-0 h-[100svh] min-h-[560px] w-full overflow-hidden border-[6px] border-paper bg-[#241c2e] sm:border-[10px]"
        aria-label="Audrey Allen Pictures"
      >
        <div className="absolute inset-0 bg-[#4a2b3a]" />
        <div
          className="absolute -inset-8 bg-[radial-gradient(ellipse_at_center,rgba(74,43,58,0.85),rgba(36,28,46,0))]"
          style={{ filter: "blur(50px)" }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-black/70" />
        <Media
          video="/media/brand/LOGO.mp4"
          alt="Audrey Allen Pictures Brand Logo"
          accent="#4a2b3a"
          title={site.brand.name}
          label="The studio"
          priority
          className="absolute inset-0"
          videoClassName="object-contain sm:object-cover"
        />
        <h1 className="sr-only">{site.brand.name}</h1>
        <div className="absolute inset-x-0 bottom-0 pb-10 sm:pb-14">
          <Container>
            <div className="flex flex-wrap items-end justify-between gap-6">
              <div>
                <p className="label text-white/80">{site.brand.name}</p>
                <p className="mt-3 max-w-sm text-[1rem] leading-snug italic text-white/70">
                  {site.brand.tagline}
                </p>
              </div>
              <div className="flex items-center gap-3 text-white/70">
                <span className="label text-white/60">Scroll</span>
                <ArrowDown className="h-4 w-4 animate-bounce" />
              </div>
            </div>
          </Container>
        </div>
      </article>

      {/* 2. The titles — first three of the slate, stacked over the logo. */}
      {slides.map((slide, i) => (
        <article
          key={slide.slug}
          className="sticky top-0 h-[100svh] min-h-[560px] w-full overflow-hidden border-[6px] border-paper bg-paper sm:border-[10px]"
          aria-label={slide.title}
        >
          <Backdrop
            poster={slide.poster}
            backdrop={slide.backdrop}
            video={slide.video}
            title={slide.title}
            accent={slide.accent}
            priority={i === 0}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-black/40" />

          <Container className="absolute inset-x-0 bottom-0 pb-10 sm:pb-14">
            <p className="label text-white/70">
              {slide.status ?? slide.releaseLabel}
            </p>
            <h2 className={headingCls}>{slide.title}</h2>
            <p className="mt-5 max-w-xl text-[1rem] leading-snug text-white/80">
              {slide.tagline ?? synopsisTeaser(slide.synopsis)}
            </p>
            <div className="mt-7 flex flex-wrap gap-3">
              <Button href={`/films/${slide.slug}`} variant="light" size="lg">
                View details
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
