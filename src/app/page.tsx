import { Hero } from "@/components/Hero";
import { Marquee } from "@/components/Marquee";
import { Rail } from "@/components/Rail";
import { PosterCard } from "@/components/cards";
import {
  ActivitiesSection,
  Feature,
  MissionTeaser,
  NewsSection,
} from "@/components/Sections";
import { Newsletter } from "@/components/Newsletter";
import { Membership } from "@/components/Membership";
import { Container, SectionHeading } from "@/components/ui";
import { films, heroSlides, news, series } from "@/lib/content";

export default function HomePage() {
  const feature = films.find((f) => f.status === "In Cinemas") ?? films[0];

  return (
    <>
      <Hero slides={heroSlides} />

      <Marquee
        items={[
          "Original Features",
          "Television Series",
          "International Co-Productions",
          "African Stories",
          "Drama",
          "Romance",
          "Comedy",
          "Horror",
          "Thriller",
        ]}
      />

      <Feature film={feature} />

      {/* Our Productions */}
      <section className="border-t border-line py-16 sm:py-24">
        <Container>
          <SectionHeading
            label="The Slate"
            title="Our Productions"
            href="/films"
          />
          <div className="mt-9">
            <Rail>
              {films.map((f) => (
                <PosterCard
                  key={f.slug}
                  item={f}
                  href={`/films/${f.slug}`}
                  kind="film"
                />
              ))}
            </Rail>
          </div>
        </Container>
      </section>

      <ActivitiesSection />

      {/* Series */}
      <section className="border-t border-line py-16 sm:py-24">
        <Container>
          <SectionHeading
            label="Television"
            title="Series & Original Programming"
            href="/series"
          />
          <div className="mt-9">
            <Rail>
              {series.map((s) => (
                <PosterCard
                  key={s.slug}
                  item={s}
                  href={`/series/${s.slug}`}
                  kind="series"
                />
              ))}
            </Rail>
          </div>
        </Container>
      </section>

      <MissionTeaser />
      <NewsSection items={news} />
      <Newsletter />
      <Membership />
    </>
  );
}
