import { site } from "@/lib/site";
import { Button, Container } from "./ui";
import { Monogram } from "./Logo";

export function Membership() {
  return (
    <section id="membership" className="scroll-mt-20 bg-ink py-16 text-paper sm:py-24">
      <Container>
        <div className="grid items-end gap-10 lg:grid-cols-12">
          <div className="lg:col-span-8">
            <div className="flex items-center gap-4">
              <Monogram size={44} />
              <p className="label text-white/60">{site.membership.kicker}</p>
            </div>
            <h2 className="mt-6 font-sans text-[2rem] font-medium leading-[0.98] tracking-[-0.03em] sm:text-[3rem]">
              {site.membership.heading}
            </h2>
            <p className="mt-5 max-w-xl leading-relaxed text-white/70">
              {site.membership.blurb}
            </p>
          </div>
          <div className="lg:col-span-4 lg:text-right">
            <Button href="/#newsletter" variant="light" size="lg" icon>
              {site.membership.ctaLabel}
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}
