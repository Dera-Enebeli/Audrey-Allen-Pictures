import { LogoHero } from "@/components/Hero";
import { Rail } from "@/components/Rail";
import { PosterCard } from "@/components/cards";
import { Spotlight, UpcomingSection } from "@/components/Sections";
import { Container, SectionHeading } from "@/components/ui";
import { railCell } from "@/components/cards";
import { films, series, upcomingProjects } from "@/lib/content";

export default function HomePage() {
  // Curated spotlight — not just the first film, but a deliberate choice
  const spotlight = films.find((f) => f.slug === "i-love-you-regardless") ?? films[0];

  return (
    <>
      {/* homepage hero — just the studio's logo animation, full height & weight */}
      <LogoHero />

      {/* The Slate — the catalogue comes first, this IS the work */}
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

      {/* Spotlight — editorial focus on one title (curated, not automatic) */}
      <Spotlight item={spotlight} />

      <UpcomingSection items={upcomingProjects} />
    </>
  );
}
