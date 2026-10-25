import type { Film } from "@/lib/content";
import { Backdrop } from "./Backdrop";
import { Media } from "./Media";
import { Button, Container } from "./ui";
import { PlayIcon } from "./Icons";
import { site } from "@/lib/site";

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
            priority={i === 0}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-black/40" />

          <Container className="absolute inset-x-0 bottom-0 pb-10 sm:pb-14">
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

/**
 * Full-viewport homepage hero: just the studio's own logo animation, filling
 * the frame edge-to-edge with a blurred backdrop behind it — the take-over
 * treatment the picture heroes use. Full height and weight of the section.
 */
export function LogoHero() {
  return (
    <section className="relative h-[100svh] w-full overflow-hidden bg-[#241c2e]">
      {/* blurred backdrop behind the logo, like the pictures */}
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
      />
    </section>
  );
}
