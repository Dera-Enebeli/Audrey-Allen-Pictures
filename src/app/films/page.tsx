import type { Metadata } from "next";
import { CatalogueGrid } from "@/components/CatalogueGrid";
import { Container } from "@/components/ui";
import { films } from "@/lib/content";

export const metadata: Metadata = { title: "Film" };

export default function FilmsPage() {
  return (
    <div className="pt-16">
      <Container className="pb-10 pt-16 sm:pt-24">
        <p className="label text-ash">Film</p>
        <h1 className="mt-5 font-sans text-[2.75rem] font-medium leading-[0.95] tracking-[-0.035em] sm:text-[4rem]">
          All Films
        </h1>
        <p className="mt-5 max-w-xl leading-relaxed text-ink/70">
          Original features across drama, romance, comedy, horror and
          thrillers — developed and produced by Audrey Allen Pictures for
          audiences in Africa and around the world.
        </p>
      </Container>
      <CatalogueGrid items={films} hrefBase="/films" kind="film" />
    </div>
  );
}
