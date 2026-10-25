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
        <div className="relative aspect-[16/9] w-full overflow-hidden">
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
            className="absolute inset-0 h-full w-full object-cover"
          />
        </div>
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
