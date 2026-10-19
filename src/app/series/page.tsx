import type { Metadata } from "next";
import { CatalogueGrid } from "@/components/CatalogueGrid";
import { Container } from "@/components/ui";
import { series } from "@/lib/content";

export const metadata: Metadata = { title: "Series" };

export default function SeriesPage() {
  return (
    <div className="pt-16">
      <Container className="pb-10 pt-16 sm:pt-24">
        <p className="label text-ash">Television</p>
        <h1 className="mt-5 font-sans text-[2.75rem] font-medium leading-[0.95] tracking-[-0.035em] sm:text-[4rem]">
          Series &amp; Original Programming
        </h1>
        <p className="mt-5 max-w-xl leading-relaxed text-ink/70">
          Long-form storytelling for African and international audiences —
          drama, comedy and youth-focused programming built for broadcast,
          streaming and digital platforms.
        </p>
      </Container>
      <CatalogueGrid items={series} hrefBase="/series" kind="series" />
    </div>
  );
}
