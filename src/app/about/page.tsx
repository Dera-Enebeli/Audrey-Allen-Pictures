import type { Metadata } from "next";
import { Button, Container, SectionHeading } from "@/components/ui";
import { Media } from "@/components/Media";
import { Membership } from "@/components/Membership";
import { activities, partners, studio } from "@/lib/content";
import { site } from "@/lib/site";

export const metadata: Metadata = { title: "Studio" };

export default function AboutPage() {
  return (
    <div className="pt-16">
      {/* masthead */}
      <section className="border-b border-line">
        <Container className="py-16 sm:py-24">
          <p className="label text-ash">Company Profile</p>
          <h1 className="mt-6 max-w-4xl font-sans text-[2.4rem] font-medium leading-[0.98] tracking-[-0.035em] sm:text-[4rem]">
            {site.brand.name}
          </h1>
          <p className="mt-6 max-w-2xl font-sans text-[1.25rem] font-medium tracking-[-0.01em] text-ink/80 sm:text-[1.6rem]">
            {site.brand.tagline}
          </p>
          <p className="mt-4 label text-ash">
            International Film, Television &amp; Entertainment Production Company
          </p>
          <div className="relative mt-12 aspect-[16/7] w-full overflow-hidden bg-smoke">
            <Media
              src={studio.image}
              alt="Audrey Allen Pictures"
              accent={studio.accent}
              title="Audrey Allen Pictures"
              label="Company Profile"
            />
          </div>
        </Container>
      </section>
      {/* brand video intro */}
      <section id="brand-intro" className="py-12 sm:py-20 border-t border-line bg-smoke">
        <Container>
          <div className="max-w-3xl mx-auto text-center">
            <div className="relative mx-auto mb-8 h-[300px] w-full overflow-hidden rounded-xl">
              <Media
                video="/media/brand/LOGO.mp4"
                alt="Audrey Allen Pictures Brand Intro"
                accent={studio.accent}
                title={site.brand.shortName}
                label="Brand"
              />
            </div>
            <h2 className="label text-ash">Audrey Allen Pictures</h2>
            <p className="mt-4 text-[0.95rem] text-ink/70 leading-relaxed">
              Celebrating over a decade of bringing African stories to the world through
              innovative filmmaking and entertainment.
            </p>
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
                {studio.intro}
              </p>
              {studio.about.map((para, i) => (
                <p key={i} className="max-w-3xl leading-relaxed text-ink/75">
                  {para}
                </p>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* mission + vision */}
      <section id="mission" className="scroll-mt-20 border-t border-line bg-smoke py-16 sm:py-24">
        <Container>
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-20">
            <div>
              <div className="flex items-center gap-4">
                <span className="label text-ash">01</span>
                <h2 className="label text-ash">Our Mission</h2>
              </div>
              <p className="mt-6 font-sans text-[1.25rem] font-medium leading-[1.45] tracking-[-0.01em] sm:text-[1.4rem]">
                {studio.mission}
              </p>
            </div>
            <div>
              <div className="flex items-center gap-4">
                <span className="label text-ash">02</span>
                <h2 className="label text-ash">Our Vision</h2>
              </div>
              <p className="mt-6 font-sans text-[1.25rem] font-medium leading-[1.45] tracking-[-0.01em] sm:text-[1.4rem]">
                {studio.vision}
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* activities */}
      <section id="activities" className="scroll-mt-20 py-16 sm:py-24">
        <Container>
          <SectionHeading label="What We Do" title="Our Core Activities" />
          <div className="mt-10 grid gap-x-16 md:grid-cols-2">
            {activities.map((a, i) => (
              <div key={a.title} className="flex gap-6 border-t border-line py-7">
                <span className="label pt-1.5 text-ash tabular-nums">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div>
                  <h3 className="font-sans text-[1.2rem] font-medium tracking-[-0.01em]">
                    {a.title}
                  </h3>
                  <p className="mt-2 max-w-md leading-relaxed text-ink/70">
                    {a.body}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* partners / selected productions */}
      <section id="partners" className="scroll-mt-20 border-t border-line py-16 sm:py-24">
        <Container>
          <div className="grid gap-10 lg:grid-cols-12">
            <div className="lg:col-span-5">
              <h2 className="label text-ash">Partners &amp; Productions</h2>
            </div>
            <div className="lg:col-span-7">
              <h3 className="font-sans text-[1.6rem] font-medium leading-[1.15] tracking-[-0.02em] sm:text-[2rem]">
                {partners.title}
              </h3>
              <p className="mt-4 leading-relaxed text-ink/75">{partners.note}</p>
              <p className="mt-6 max-w-xl leading-relaxed text-ink/75">
                We are building a diverse portfolio of original productions and
                establishing relationships with international distributors,
                streaming platforms, broadcasters, investors, corporate
                sponsors, tourism organizations and other industry stakeholders.
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* contact */}
      <section id="contact" className="scroll-mt-20 border-t border-line py-16 sm:py-24">
        <Container>
          <div className="grid gap-10 lg:grid-cols-12">
            <div className="lg:col-span-6">
              <h2 className="font-sans text-[2rem] font-medium leading-[0.98] tracking-[-0.03em] sm:text-[3rem]">
                Work with us.
              </h2>
              <p className="mt-5 max-w-lg leading-relaxed text-ink/70">
                For co-productions, distribution, licensing, investment and
                sponsorship enquiries — or to partner on showcasing African
                heritage, locations and experiences on screen — get in touch.
              </p>
              <Button
                href={`mailto:${site.contact.email}`}
                size="lg"
                className="mt-8"
                icon
              >
                {site.contact.email}
              </Button>
            </div>
            <div className="lg:col-span-6">
              <ul className="divide-y divide-line border-y border-line">
                {[
                  ["Co-Productions", "Creative & commercial partnerships"],
                  ["Distribution", "Cinemas, broadcasters, platforms"],
                  ["Licensing", "Airlines & exhibition channels"],
                  ["Investors & Sponsors", "Financing & brand partnerships"],
                ].map(([title, sub]) => (
                  <li key={title} className="flex items-baseline justify-between gap-6 py-5">
                    <span className="font-sans text-[1.05rem] font-medium tracking-[-0.01em]">
                      {title}
                    </span>
                    <span className="text-right text-[0.9rem] text-ash">{sub}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Container>
      </section>

      <Membership />
    </div>
  );
}
