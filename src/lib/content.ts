// ---------------------------------------------------------------------------
// CONTENT — the studio's catalogue and profile.
//
// MEDIA CONVENTION (drop your own pictures & videos in /public/media):
//   /public/media/films/<slug>/poster.jpg     portrait  2:3   (poster cards)
//   /public/media/films/<slug>/backdrop.jpg   landscape 16:9  (hero / detail)
//   /public/media/films/<slug>/preview.mp4     optional looping video
//   /public/media/series/<slug>/…              same, for series
// If a file is missing, the card falls back to a colour + title treatment, and
// heroes fall back to a blurred-poster layout, so nothing ever looks broken.
// See /public/media/README.md.
// ---------------------------------------------------------------------------

export type FilmStatus =
  | "In Cinemas"
  | "Coming Soon"
  | "Streaming"
  | "In Production"
  | "In Development";

export interface Film {
  slug: string;
  title: string;
  year: number;
  status: FilmStatus;
  /** Small date / window shown on the poster badge, e.g. "Now Showing" */
  releaseLabel?: string;
  genres: string[];
  runtime?: string;
  director?: string;
  credits?: string;
  tagline?: string;
  synopsis: string;
  poster: string;
  backdrop: string;
  /** optional looping preview video */
  video?: string;
  /** hex colour used for the typographic fallback tile */
  accent: string;
}

export interface Series {
  slug: string;
  title: string;
  year: number;
  status: FilmStatus;
  network?: string;
  seasonLabel: string;
  genres: string[];
  synopsis: string;
  poster: string;
  backdrop: string;
  accent: string;
}

export interface NewsItem {
  slug: string;
  date: string;
  category: string;
  title: string;
  excerpt: string;
  image?: string;
  accent: string;
}

/* ----------------------------- The slate ------------------------------- */

export const films: Film[] = [
  {
    slug: "i-love-you-regardless",
    title: "I Love You Regardless",
    year: 2025,
    status: "In Cinemas",
    releaseLabel: "Now Showing",
    genres: ["Romance", "Drama"],
    director: "Audrey Allen Pictures",
    credits: "Distributed by Kada Entertainment",
    tagline: "Two strangers. One impossible arrangement.",
    synopsis:
      "A romantic drama about two individuals brought together by an unusual housing arrangement. Their difficult cohabitation leads to conflict, betrayal, emotional discovery, and an unexpected journey toward love. Distributed by Kada Entertainment to more than 50 cinemas.",
    poster: "/media/films/i-love-you-regardless/poster.jpg",
    backdrop: "/media/films/i-love-you-regardless/backdrop.jpg",
    accent: "#4a2b3a",
  },
  {
    slug: "beguiled",
    title: "Beguiled",
    year: 2026,
    status: "In Development",
    genres: [],
    director: "Audrey Allen Pictures",
    synopsis:
      "A new feature from Audrey Allen Pictures. Synopsis, cast and release details to be announced.",
    poster: "/media/films/beguiled/poster.jpg",
    backdrop: "/media/films/beguiled/backdrop.jpg",
    accent: "#241c2e",
  },
  {
    slug: "noise",
    title: "Noise",
    year: 2026,
    status: "In Development",
    genres: [],
    director: "Audrey Allen Pictures",
    synopsis:
      "A new feature from Audrey Allen Pictures. Synopsis, cast and release details to be announced.",
    poster: "/media/films/noise/poster.jpg",
    backdrop: "/media/films/noise/backdrop.jpg",
    accent: "#2b2b2b",
  },
];

export const series: Series[] = [
  {
    slug: "red-crest-high",
    title: "Red Crest High",
    year: 2026,
    status: "In Development",
    network: "In development",
    seasonLabel: "Season One",
    genres: [],
    synopsis:
      "An original series from Audrey Allen Pictures. Synopsis, cast and release details to be announced.",
    poster: "/media/series/red-crest-high/poster.jpg",
    backdrop: "/media/series/red-crest-high/backdrop.jpg",
    accent: "#5a1f22",
  },
];

/* --------------------------- Homepage hero ----------------------------- */

export const heroSlides = [films[0], films[1], films[2]];

/* --------------------------- Studio profile ---------------------------- */

export const studio = {
  intro:
    "Audrey Allen Pictures is an independent film and television production company committed to developing, producing, and promoting exceptional entertainment that celebrates African culture, embraces diversity, and connects audiences across Africa and the world.",

  image: "/media/films/i-love-you-regardless/poster.jpg",
  accent: "#4a2b3a",

  about: [
    "The company was established with a vision to tell compelling stories that reflect the richness of African experiences while exploring universal themes that resonate with audiences regardless of geography, background, or culture. Through original storytelling, creative collaboration, and a commitment to quality, Audrey Allen Pictures seeks to contribute to the growth and international recognition of African film and television.",
    "Our creative interests span feature films, television series, drama, romance, comedy, horror, thrillers, youth-oriented programming, and socially relevant entertainment. We believe that film and television can serve not only as powerful forms of entertainment but also as platforms for cultural exchange, education, inspiration, and social development.",
    "Audrey Allen Pictures is focused on building a diverse portfolio of original productions and establishing meaningful relationships with international distributors, streaming platforms, broadcasters, investors, corporate sponsors, tourism organizations, and other industry stakeholders.",
  ],

  mission:
    "To develop and produce outstanding film and television content that entertains, inspires, promotes African culture, and creates meaningful connections between people and communities. We aim to combine creative excellence with commercially viable storytelling while creating opportunities for talent, encouraging cultural understanding, and contributing to the development of the entertainment industry.",

  vision:
    "To establish Audrey Allen Pictures as a respected international production company recognized for original storytelling, quality productions, cultural authenticity, and strategic partnerships — expanding the reach of African entertainment across global markets and building a sustainable catalogue of content for cinema, television, digital platforms and other distribution channels.",

  genres: [
    "Drama",
    "Romance",
    "Comedy",
    "Horror",
    "Thriller",
    "Youth",
    "Socially Relevant",
  ],
};

export const activities: { title: string; body: string }[] = [
  {
    title: "Film Production",
    body: "Developing and producing original feature films across a range of genres, including drama, romance, comedy, horror, thrillers, and other audience-driven stories.",
  },
  {
    title: "Television & Series",
    body: "Creating engaging television series, youth-focused dramas, and original programming for African and international audiences.",
  },
  {
    title: "Content Development",
    body: "Developing original concepts, scripts, stories, and intellectual property with potential for cinematic, television, and digital distribution.",
  },
  {
    title: "Distribution & Licensing",
    body: "Distributing and licensing film and television content to cinemas, broadcasters, streaming platforms, airlines, and other legitimate exhibition channels.",
  },
  {
    title: "Culture & Tourism",
    body: "Collaborating with tourism boards, cultural institutions, and destination-marketing organizations to showcase African heritage, locations, and experiences on screen.",
  },
  {
    title: "Youth & Social Development",
    body: "Creating entertainment that explores issues affecting young people, encourages responsible decision-making, and promotes positive social values.",
  },
  {
    title: "International Co-Productions",
    body: "Building creative and commercial relationships with international production companies, financiers, broadcasters, distributors, and other partners.",
  },
];

export const partners = {
  title: "Selected Productions & Partnerships",
  note: "Distributed by Kada Entertainment to more than 50 cinemas.",
};

/* ------------------------------- News ---------------------------------- */

export const news: NewsItem[] = [
  {
    slug: "i-love-you-regardless-in-cinemas",
    date: "2026",
    category: "Release",
    title: "I Love You Regardless arrives in cinemas",
    excerpt:
      "Our romantic drama opens across more than 50 cinemas, distributed by Kada Entertainment.",
    image: "/media/news/i-love-you-regardless.jpg",
    accent: "#4a2b3a",
  },
  {
    slug: "slate",
    date: "2026",
    category: "Studio",
    title: "Beguiled, Noise and Red Crest High in development",
    excerpt:
      "Our slate grows with two feature films and our first original series.",
    image: "/media/films/beguiled/poster.jpg",
    accent: "#241c2e",
  },
  {
    slug: "partnerships",
    date: "2026",
    category: "Partnerships",
    title: "Open to international co-productions",
    excerpt:
      "We are building relationships with international distributors, streaming platforms, broadcasters, investors and sponsors.",
    image: "/media/series/red-crest-high/poster.jpg",
    accent: "#3a5a4a",
  },
];

/* ------------------------------ Helpers -------------------------------- */

export function getFilm(slug: string): Film | undefined {
  return films.find((f) => f.slug === slug);
}

export function relatedFilms(slug: string, count = 4): Film[] {
  return films.filter((f) => f.slug !== slug).slice(0, count);
}

/** Genres may be empty while a title is still in development. */
export function genreLabel(item: { genres: string[] }): string {
  return item.genres.length ? item.genres.join(" / ") : "To be announced";
}

export const statusOrder: FilmStatus[] = [
  "In Cinemas",
  "Coming Soon",
  "Streaming",
  "In Production",
  "In Development",
];
