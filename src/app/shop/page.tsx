import type { Metadata } from "next";
import { Container } from "@/components/ui";
import { Button } from "@/components/ui";

export const metadata: Metadata = { title: "Shop" };

export default function ShopPage() {
  return (
    <div className="pt-16">
      <Container className="max-w-3xl py-20 sm:py-32">
        <p className="label text-ash">Shop</p>
        <h1 className="mt-5 font-sans text-[2.4rem] font-medium leading-[1] tracking-[-0.03em] sm:text-[3.5rem]">
          The shop is coming soon.
        </h1>
        <p className="mt-5 max-w-xl leading-relaxed text-ink/70">
          Posters, prints, soundtracks and more. Drop your product images into
          /public/media/shop to build this out.
        </p>
        <div className="mt-8 flex gap-3">
          <Button href="/films" size="lg">
            Browse films
          </Button>
          <Button href="/#newsletter" variant="outline" size="lg">
            Notify me
          </Button>
        </div>
      </Container>
    </div>
  );
}
