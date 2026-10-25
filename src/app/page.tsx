import { LogoHero } from "@/components/Hero";
import { Rail } from "@/components/Rail";
import { PosterCard } from "@/components/cards";
import { Feature, UpcomingSection } from "@/components/Sections";
import { Container, SectionHeading } from "@/components/ui";
import { railCell } from "@/components/cards";
import { films, series, upcomingProjects } from "@/lib/content";

export default function HomePage() {
  const feature = films[0];

  return (
    <>
      {/* homepage hero — just the studio's logo animation, full height & weight */}
      <LogoHero />

      <Feature film={feature} />

      {/* The Slate — films & series in one connected rail */}
      <section className="border-t border-line py-16 sm:py-24">
        <Container>
          <SectionHeading label="The Slate" title="Films & Series" href="/films" />
          <div className="mt-9">
            <Rail>
              {[...films, ...series].map((item) =>
                "seasonLabel" in item ? (
                  <PosterCard
                    key={item.slug}
                    item={item}
                    href={`/series/${item.slug}`}
                    kind="series"
                    className={railCell}
                  />
                ) : (
                  <PosterCard
                    key={item.slug}
                    item={item}
                    href={`/films/${item.slug}`}
                    kind="film"
                    className={railCell}
                  />
                ),
              )}
            </Rail>
          </div>
        </Container>
      </section>

      <UpcomingSection items={upcomingProjects} />
    </>
  );
}
