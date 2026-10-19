import { Container, Button } from "@/components/ui";

export default function NotFound() {
  return (
    <div className="pt-16">
      <Container className="max-w-3xl py-24 sm:py-40">
        <p className="label text-ash">404</p>
        <h1 className="mt-5 font-sans text-[3rem] font-medium leading-[0.95] tracking-[-0.035em] sm:text-[5rem]">
          Not found.
        </h1>
        <p className="mt-5 max-w-lg leading-relaxed text-ink/70">
          The page you&apos;re looking for doesn&apos;t exist or has moved.
        </p>
        <div className="mt-8 flex gap-3">
          <Button href="/" size="lg">Back home</Button>
          <Button href="/films" variant="outline" size="lg">Browse films</Button>
        </div>
      </Container>
    </div>
  );
}
