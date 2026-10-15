import type { Metadata } from "next";
import { Media } from "@/components/Media";
import { Button, Container, SectionHeading } from "@/components/ui";
import { foundation } from "@/lib/foundation";
import type { FocusArea } from "@/lib/foundation";

export const metadata: Metadata = {
  title: "Audrey Allen Foundation for Children",
  description: foundation.lede,
};

export default function FoundationPage() {
  const [lead, ...rest] = foundation.focus;
  const [intro, ...more] = foundation.about;

  return (
    <>
      {/* hero */}
      <section className="relative flex h-[82svh] min-h-[560px] items-end overflow-hidden bg-ink">
        <div className="absolute inset-0">
          <Media
            src={foundation.image}
            alt={foundation.name}
            accent={foundation.accent}
            priority
            className="scale-105"
          />
        </div>
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/85 via-black/45 to-black/45" />

        <Container className="relative pb-14 sm:pb-16">
          <p className="label text-white/70">
            Charitable Initiative — {foundation.abbr}
          </p>
          <h1 className="mt-5 max-w-4xl font-sans text-[2.3rem] font-medium leading-[0.95] tracking-[-0.035em] text-white sm:text-[3.4rem] lg:text-[4.4rem]">
            {foundation.name}
          </h1>
          <p className="mt-5 max-w-2xl font-sans text-[1.2rem] font-medium tracking-[-0.01em] text-white/85 sm:text-[1.5rem]">
            {foundation.tagline}
          </p>
          <p className="label mt-4 text-white/60">
            Founded by {foundation.founder}
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Button href="#support" variant="light" size="lg">
              {foundation.contact.ctaLabel}
            </Button>
            <Button
              href="#focus"
              variant="outline"
              size="lg"
              className="border-white/40 text-white hover:border-white"
            >
              Our Focus Areas
            </Button>
          </div>
        </Container>
      </section>

      {/* about */}
      <section id="about" className="scroll-mt-20 py-16 sm:py-24">
        <Container>
          <div className="grid gap-10 lg:grid-cols-12">
            <div className="lg:col-span-4">
              <h2 className="label text-ash">About Us</h2>
            </div>
            <div className="space-y-7 lg:col-span-8">
              <p className="font-sans text-[1.4rem] font-medium leading-[1.3] tracking-[-0.02em] sm:text-[1.75rem]">
                {intro}
              </p>
              {more.map((para) => (
                <p
                  key={para.slice(0, 24)}
                  className="max-w-3xl leading-relaxed text-ink/75"
                >
                  {para}
                </p>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* vision + mission */}
      <section className="border-t border-line bg-smoke py-16 sm:py-24">
        <Container>
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-20">
            <div>
              <div className="flex items-center gap-4">
                <span className="label text-ash">01</span>
                <h2 className="label text-ash">Our Vision</h2>
              </div>
              <p className="mt-6 font-sans text-[1.25rem] font-medium leading-[1.45] tracking-[-0.01em] sm:text-[1.4rem]">
                {foundation.vision}
              </p>
            </div>
            <div>
              <div className="flex items-center gap-4">
                <span className="label text-ash">02</span>
                <h2 className="label text-ash">Our Mission</h2>
              </div>
              <p className="mt-6 font-sans text-[1.25rem] font-medium leading-[1.45] tracking-[-0.01em] sm:text-[1.4rem]">
                {foundation.mission}
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* core areas of focus */}
      <section id="focus" className="scroll-mt-20 border-t border-line py-16 sm:py-24">
        <Container>
          <SectionHeading label="What We Do" title="Core Areas of Focus" />
          <p className="mt-6 max-w-2xl leading-relaxed text-ink/70">
            {foundation.focusIntro}
          </p>

          <div className="mt-12">
            <FocusItem area={lead} />
          </div>

          <div className="mt-2 grid gap-x-16 md:grid-cols-2">
            {rest.map((area) => (
              <FocusItem key={area.letter} area={area} />
            ))}
          </div>
        </Container>
      </section>

      {/* gallery */}
      <section className="border-t border-line py-16 sm:py-24">
        <Container>
          <SectionHeading label="Gallery" title="The Foundation at Work" />
          <div className="mt-10 grid grid-cols-2 gap-4 lg:grid-cols-4">
            {foundation.gallery.map((shot) => (
              <div
                key={shot.src}
                className="relative aspect-[4/3] overflow-hidden bg-smoke"
              >
                <Media
                  src={shot.src}
                  alt={shot.alt}
                  accent={foundation.accent}
                  imgClassName="transition-transform duration-700 hover:scale-[1.05]"
                />
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* support */}
      <section
        id="support"
        className="scroll-mt-20 border-t border-line py-16 sm:py-24"
      >
        <Container>
          <div className="grid gap-10 lg:grid-cols-12">
            <div className="lg:col-span-6">
              <h2 className="font-sans text-[2rem] font-medium leading-[0.98] tracking-[-0.03em] sm:text-[3rem]">
                Saving lives through entertainment.
              </h2>
              <p className="mt-5 max-w-lg leading-relaxed text-ink/70">
                Whether you are a studio, broadcaster, brand, philanthropist or
                an individual who cares about children, there is a place for you
                in this work. Partner with us on productions, screenings,
                campaigns and programmes that change children's lives.
              </p>
              <Button
                href={`mailto:${foundation.contact.email}`}
                size="lg"
                className="mt-8"
                icon
              >
                {foundation.contact.ctaLabel}
              </Button>
            </div>
            <div className="lg:col-span-6">
              <ul className="divide-y divide-line border-y border-line">
                {[
                  ["Fund a programme", "Education, welfare & protection"],
                  ["Sponsor a screening", "Charitable film events"],
                  ["Partner on a production", "Entertainment for social impact"],
                  ["Support in kind", "Supplies, services & expertise"],
                ].map(([title, sub]) => (
                  <li
                    key={title}
                    className="flex items-baseline justify-between gap-6 py-5"
                  >
                    <span className="font-sans text-[1.05rem] font-medium tracking-[-0.01em]">
                      {title}
                    </span>
                    <span className="text-right text-[0.9rem] text-ash">
                      {sub}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}

function FocusItem({ area }: { area: FocusArea }) {
  return (
    <div className="flex gap-6 border-t border-line py-8">
      <span className="label pt-1 text-ash">{area.letter}</span>
      <div>
        <h3 className="font-sans text-[1.3rem] font-medium tracking-[-0.015em] sm:text-[1.5rem]">
          {area.title}
        </h3>

        {area.body && (
          <p className="mt-3 max-w-2xl leading-relaxed text-ink/70">
            {area.body}
          </p>
        )}

        {area.points && (
          <ul className="mt-6 grid gap-x-10 gap-y-4 sm:grid-cols-2">
            {area.points.map((point) => {
              const i = point.indexOf(":");
              const head = i >= 0 ? point.slice(0, i) : point;
              const body = i >= 0 ? point.slice(i + 1).trim() : "";
              return (
                <li key={point} className="border-t border-line pt-4">
                  <p className="font-sans text-[1rem] font-medium tracking-[-0.01em]">
                    {head}
                  </p>
                  {body && (
                    <p className="mt-2 text-[0.92rem] leading-relaxed text-ink/65">
                      {body}
                    </p>
                  )}
                </li>
              );
            })}
          </ul>
        )}

        {area.closing && (
          <p className="mt-6 max-w-2xl font-medium leading-relaxed text-ink/80">
            {area.closing}
          </p>
        )}
      </div>
    </div>
  );
}
