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
import { Media } from "@/components/Media";
import { films, heroSlides, news, series } from "@/lib/content";
import { site } from "@/lib/site";

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

      {/* brand logo video in the middle of the landing page */}
      <section id="brand-logo" className="py-12 sm:py-20 bg-gradient-to-b from-ink via-ink/10 to-ink/5">
        <Container className="max-w-3xl mx-auto">
          <div className="relative mb-8 h-[300px] w-full overflow-hidden rounded-xl">
            <Media
              video="/media/brand/LOGO.mp4"
              alt="Audrey Allen Pictures Brand Logo"
              accent="#4a2b3a"
              title={site.brand.shortName}
              label="Brand"
              priority
            />
          </div>
          <h2 className="label text-ash">Audrey Allen Pictures</h2>
          <p className="mt-4 text-[0.95rem] text-ink/70 leading-relaxed">
            Celebrating over a decade of bringing African stories to the world through
            innovative filmmaking and entertainment.
          </p>
        </Container>
      </section>

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
