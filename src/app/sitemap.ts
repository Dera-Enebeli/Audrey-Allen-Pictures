import type { MetadataRoute } from "next";
import { site } from "@/lib/site";
import { films, news, series } from "@/lib/content";

const staticPages = [
  "",
  "/films",
  "/series",
  "/foundation",
  "/about",
  "/notes",
  "/shop",
  "/terms",
  "/privacy",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const base = site.url;
  return [
    ...staticPages.map((path) => ({
      url: `${base}${path}`,
      changeFrequency: "weekly" as const,
      priority: path === "" ? 1 : 0.7,
    })),
    ...films.map((f) => ({
      url: `${base}/films/${f.slug}`,
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })),
    ...series.map((s) => ({
      url: `${base}/series/${s.slug}`,
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })),
    ...news.map((n) => ({
      url: `${base}/notes/${n.slug}`,
      changeFrequency: "monthly" as const,
      priority: 0.6,
    })),
  ];
}
