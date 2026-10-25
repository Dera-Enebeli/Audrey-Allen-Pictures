import { Hero } from "@/components/Hero";
import { Rail } from "@/components/Rail";
import { PosterCard } from "@/components/cards";
import { Feature, UpcomingSection } from "@/components/Sections";
import { Container, SectionHeading } from "@/components/ui";
import { Media } from "@/components/Media";
import { railCell } from "@/components/cards";
import { films, heroSlides, series, upcomingProjects } from "@/lib/content";
import { site } from "@/lib/site";

export default function HomePage() {
  const feature = films[0];

  return (
    <>
      {/* brand logo video — the studio's mark, shown once, first before everything else */}
      <section id="brand-logo" className="border-t border-line py-16 sm:py-24">
        <Container className="max-w-3xl mx-auto">
          {/* LOGO.mp4 is portrait 3:4 — frame it at its native ratio so
              the whole animation stays visible */}
          <div className="relative mx-auto aspect-[3/4] w-full max-w-[300px] overflow-hidden sm:max-w-[360px]">
            <Media
              video="/media/brand/LOGO.mp4"
              alt="Audrey Allen Pictures Brand Logo"
              accent="#4a2b3a"
              title={site.brand.name}
              label="The studio"
              priority
            />
          </div>
        </Container>
      </section>

      <Hero slides={heroSlides} />

      <Feature film={feature} />

      {/* Films */}
      <section className="border-t border-line py-16 sm:py-24">
        <Container>
          <SectionHeading label="The Slate" title="Films" href="/films" />
          <div className="mt-9">
            <Rail>
              {films.map((f) => (
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

      {/* Series */}
      <section className="border-t border-line py-16 sm:py-24">
        <Container>
          <SectionHeading label="Television" title="Series" href="/series" />
          <div className="mt-9">
            <Rail>
              {series.map((s) => (
                <PosterCard
                  key={s.slug}
                  item={s}
                  href={`/series/${s.slug}`}
                  kind="series"
                  className={railCell}
                />
              ))}
            </Rail>
          </div>
        </Container>
      </section>

      <UpcomingSection items={upcomingProjects} />
    </>
  );
}
