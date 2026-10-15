import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { TitleDetail } from "@/components/TitleDetail";
import { films, getFilm, relatedFilms } from "@/lib/content";

export function generateStaticParams() {
  return films.map((f) => ({ slug: f.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const film = getFilm(slug);
  if (!film) return { title: "Not found" };
  return {
    title: film.title,
    description: film.synopsis,
  };
}

export default async function FilmPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const film = getFilm(slug);
  if (!film) notFound();

  return (
    <TitleDetail
      item={film}
      kind="film"
      related={relatedFilms(film.slug, 5)}
    />
  );
}
