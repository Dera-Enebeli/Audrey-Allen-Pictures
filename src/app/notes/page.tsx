import type { Metadata } from "next";
import Link from "next/link";
import { Media } from "@/components/Media";
import { Container } from "@/components/ui";
import { news } from "@/lib/content";

export const metadata: Metadata = { title: "News" };

export default function NotesPage() {
  return (
    <main className="pt-16">
      <Container className="pb-12 pt-16 sm:pt-24">
        <p className="label text-ash">Notes</p>
        <h1 className="mt-5 font-sans text-[2.75rem] font-medium leading-[0.95] tracking-[-0.035em] sm:text-[4rem]">
          Studio News
        </h1>
        <p className="mt-5 max-w-xl leading-relaxed text-ink/70">
          Releases, partnerships and dispatches from set.
        </p>
      </Container>

      <Container className="pb-24">
        <div className="grid gap-x-8 gap-y-12 md:grid-cols-2">
          {news.map((n, i) => (
            <article
              key={n.slug}
              className={i === 0 ? "md:col-span-2" : ""}
            >
              <div
                className={`overflow-hidden bg-smoke ${
                  i === 0 ? "aspect-[16/7]" : "aspect-[4/3]"
                }`}
              >
                <Media
                  src={n.image}
                  alt={n.title}
                  accent={n.accent}
                  title={n.title}
                  label={n.category}
                />
              </div>
              <div className="mt-5 flex items-center gap-3">
                <span className="label text-ash">{n.category}</span>
                <span className="h-1 w-1 rounded-full bg-ash" />
                <span className="label text-ash tabular-nums">{n.date}</span>
              </div>
              <h2 className="mt-3 font-sans text-[1.5rem] font-medium leading-[1.1] tracking-[-0.02em] sm:text-[1.9rem]">
                {n.title}
              </h2>
              <p className="mt-3 max-w-2xl leading-relaxed text-ink/70">
                {n.excerpt}
              </p>
              <Link href="/notes" className="label mt-4 inline-block text-ash hover:text-ink">
                Read more
              </Link>
            </article>
          ))}
        </div>
      </Container>
    </main>
  );
}
