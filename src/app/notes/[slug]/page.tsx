import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Media } from "@/components/Media";
import { Container } from "@/components/ui";
import { getNews, news } from "@/lib/content";

export function generateStaticParams() {
  return news.map((n) => ({ slug: n.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const item = getNews(slug);
  if (!item) return { title: "Not found" };
  return { title: item.title, description: item.excerpt };
}

export default async function NotePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const item = getNews(slug);
  if (!item) notFound();

  return (
    <div className="pt-16">
      <Container className="max-w-3xl py-16 sm:py-24">
        <p className="label text-ash">
          <Link href="/notes" className="hover:text-ink">
            Notes
          </Link>{" "}
          — {item.category}
        </p>
        <h1 className="mt-5 font-sans text-[2.4rem] font-medium leading-[0.98] tracking-[-0.03em] sm:text-[3.25rem]">
          {item.title}
        </h1>
        <p className="label mt-5 text-ash tabular-nums">{item.date}</p>

        {item.image && (
          <div className="relative mt-10 aspect-[16/9] w-full overflow-hidden bg-smoke">
            <Media
              src={item.image}
              alt={item.title}
              accent={item.accent}
              title={item.title}
              label={item.category}
              priority
            />
          </div>
        )}

        <div className="mt-10 space-y-6 text-[1.05rem] leading-relaxed text-ink/80">
          {item.body.map((para, i) => (
            <p key={i}>{para}</p>
          ))}
        </div>

        <div className="mt-12 border-t border-line pt-8">
          <Link
            href="/notes"
            className="label text-ash transition-colors hover:text-ink"
          >
            ← All news
          </Link>
        </div>
      </Container>
    </div>
  );
}
