import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { TitleDetail } from "@/components/TitleDetail";
import { films, series } from "@/lib/content";

export function generateStaticParams() {
  return series.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const item = series.find((s) => s.slug === slug);
  if (!item) return { title: "Not found" };
  return { title: item.title, description: item.synopsis };
}

export default async function SeriesDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const item = series.find((s) => s.slug === slug);
  if (!item) notFound();

  return (
    <TitleDetail item={item} kind="series" related={films.slice(0, 4)} />
  );
}
