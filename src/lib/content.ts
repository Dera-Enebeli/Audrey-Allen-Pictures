// ---------------------------------------------------------------------------
// CONTENT — the studio's catalogue and profile.
//
// MEDIA CONVENTION (drop your own pictures & videos in /public/media):
//   /public/media/films/<slug>/poster.jpg     portrait  2:3   (poster cards)
//   /public/media/films/<slug>/backdrop.jpg   landscape 16:9  (hero / detail)
//   /public/media/films/<slug>/preview.mp4    optional looping video
//   /public/media/films/<slug>/cast/*.{jpg,mp4}      cast shots & clips
//   /public/media/films/<slug>/stills/*.jpg          production stills
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

/** A single piece of gallery media — a photo, or a looping video tile. */
export interface MediaEntry {
  src?: string;
  video?: string;
  alt: string;
}

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
  /**
   * Landscape still for heroes. Leave unset (or remove the file's path here)
   * and the hero uses the blurred-poster treatment automatically.
   */
  backdrop?: string;
  /** optional looping preview video */
  video?: string;
  /** external trailer URL — the "Watch Trailer" buttons appear when set */
  trailer?: string;
  /** cast photos / clips shown on the title's detail page */
  cast?: MediaEntry[];
  /** production stills shown on the title's detail page */
  gallery?: MediaEntry[];
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
  backdrop?: string;
  video?: string;
  trailer?: string;
  cast?: MediaEntry[];
  /** the source novel, when the series is an adaptation */
  basedOn?: { title: string; author: string; cover: string };
  accent: string;
}

export interface NewsItem {
  slug: string;
  date: string;
  category: string;
  title: string;
  excerpt: string;
  /** paragraphs shown on the article page */
  body: string[];
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
    accent: "#4a2b3a",
    cast: [
      { src: "/media/films/i-love-you-regardless/cast/cast-01.jpg", alt: "Cast of I Love You Regardless" },
      { src: "/media/films/i-love-you-regardless/cast/cast-02.jpg", alt: "Cast of I Love You Regardless" },
      { src: "/media/films/i-love-you-regardless/cast/cast-03.jpg", alt: "Cast of I Love You Regardless" },
      { src: "/media/films/i-love-you-regardless/cast/cast-04.jpg", alt: "Cast of I Love You Regardless" },
      { src: "/media/films/i-love-you-regardless/cast/cast-05.jpg", alt: "Cast of I Love You Regardless" },
    ],
    gallery: [
      { src: "/media/films/i-love-you-regardless/stills/still-01.jpg", alt: "Production still from I Love You Regardless" },
      { src: "/media/films/i-love-you-regardless/stills/still-02.jpg", alt: "Production still from I Love You Regardless" },
      { src: "/media/films/i-love-you-regardless/stills/still-03.jpg", alt: "Production still from I Love You Regardless" },
      { src: "/media/films/i-love-you-regardless/stills/still-04.jpg", alt: "Production still from I Love You Regardless" },
      { src: "/media/films/i-love-you-regardless/stills/still-05.jpg", alt: "Production still from I Love You Regardless" },
      { src: "/media/films/i-love-you-regardless/stills/still-06.jpg", alt: "Production still from I Love You Regardless" },
      { src: "/media/films/i-love-you-regardless/stills/still-07.jpg", alt: "Production still from I Love You Regardless" },
      { src: "/media/films/i-love-you-regardless/stills/still-08.jpg", alt: "Production still from I Love You Regardless" },
      { src: "/media/films/i-love-you-regardless/stills/still-09.jpg", alt: "Production still from I Love You Regardless" },
      { src: "/media/films/i-love-you-regardless/stills/still-10.jpg", alt: "Production still from I Love You Regardless" },
      { src: "/media/films/i-love-you-regardless/stills/still-11.jpg", alt: "Production still from I Love You Regardless" },
      { src: "/media/films/i-love-you-regardless/stills/still-12.jpg", alt: "Production still from I Love You Regardless" },
      { src: "/media/films/i-love-you-regardless/stills/still-13.jpg", alt: "Production still from I Love You Regardless" },
      { src: "/media/films/i-love-you-regardless/stills/still-14.jpg", alt: "Production still from I Love You Regardless" },
      { src: "/media/films/i-love-you-regardless/stills/still-15.jpg", alt: "Production still from I Love You Regardless" },
      { src: "/media/films/i-love-you-regardless/stills/still-16.jpg", alt: "Production still from I Love You Regardless" },
      { src: "/media/films/i-love-you-regardless/stills/still-17.jpg", alt: "Production still from I Love You Regardless" },
      { src: "/media/films/i-love-you-regardless/stills/still-18.jpg", alt: "Production still from I Love You Regardless" },
    ],
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
    accent: "#241c2e",
    cast: [
      { src: "/media/films/beguiled/cast/cast-01.jpg", alt: "Cast of Beguiled" },
      { src: "/media/films/beguiled/cast/cast-02.jpg", alt: "Cast of Beguiled" },
      { src: "/media/films/beguiled/cast/cast-03.jpg", alt: "Cast of Beguiled" },
      { src: "/media/films/beguiled/cast/cast-04.jpg", alt: "Cast of Beguiled" },
      { src: "/media/films/beguiled/cast/cast-05.jpg", alt: "Cast of Beguiled" },
      { src: "/media/films/beguiled/cast/cast-06.jpg", alt: "Cast of Beguiled" },
      { src: "/media/films/beguiled/cast/cast-07.jpg", alt: "Cast of Beguiled" },
      { src: "/media/films/beguiled/cast/cast-08.jpg", alt: "Cast of Beguiled" },
      { video: "/media/films/beguiled/cast/behind-the-scenes.mp4", alt: "Behind the scenes of Beguiled" },
    ],
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
    accent: "#5a1f22",
    basedOn: {
      title: "Redcrest High",
      author: "Tosin Allen",
      cover: "/media/series/red-crest-high/book/book.jpg",
    },
    cast: [
      { src: "/media/series/red-crest-high/cast/cast-01.jpg", alt: "Cast of Red Crest High" },
      { src: "/media/series/red-crest-high/cast/cast-02.jpg", alt: "Cast of Red Crest High" },
      { src: "/media/series/red-crest-high/cast/cast-03.jpg", alt: "Cast of Red Crest High" },
      { src: "/media/series/red-crest-high/cast/cast-04.jpg", alt: "Cast of Red Crest High" },
      { src: "/media/series/red-crest-high/cast/cast-05.jpg", alt: "Cast of Red Crest High" },
      { src: "/media/series/red-crest-high/cast/cast-06.jpg", alt: "Cast of Red Crest High" },
      { src: "/media/series/red-crest-high/cast/cast-07.jpg", alt: "Cast of Red Crest High" },
      { src: "/media/series/red-crest-high/cast/cast-08.jpg", alt: "Cast of Red Crest High" },
      { src: "/media/series/red-crest-high/cast/cast-09.jpg", alt: "Cast of Red Crest High" },
      { src: "/media/series/red-crest-high/cast/cast-10.jpg", alt: "Cast of Red Crest High" },
      { src: "/media/series/red-crest-high/cast/cast-11.jpg", alt: "Cast of Red Crest High" },
      { src: "/media/series/red-crest-high/cast/cast-12.jpg", alt: "Cast of Red Crest High" },
      { src: "/media/series/red-crest-high/cast/cast-13.jpg", alt: "Cast of Red Crest High" },
      { src: "/media/series/red-crest-high/cast/cast-14.jpg", alt: "Cast of Red Crest High" },
      { src: "/media/series/red-crest-high/cast/cast-15.jpg", alt: "Cast of Red Crest High" },
      { src: "/media/series/red-crest-high/cast/cast-16.jpg", alt: "Cast of Red Crest High" },
      { src: "/media/series/red-crest-high/cast/cast-17.jpg", alt: "Cast of Red Crest High" },
      { src: "/media/series/red-crest-high/cast/cast-18.jpg", alt: "Cast of Red Crest High" },
      { src: "/media/series/red-crest-high/cast/cast-19.jpg", alt: "Cast of Red Crest High" },
      { src: "/media/series/red-crest-high/cast/cast-20.jpg", alt: "Cast of Red Crest High" },
      { src: "/media/series/red-crest-high/cast/cast-21.jpg", alt: "Cast of Red Crest High" },
      { src: "/media/series/red-crest-high/cast/cast-22.jpg", alt: "Cast of Red Crest High" },
      { src: "/media/series/red-crest-high/cast/cast-23.jpg", alt: "Cast of Red Crest High" },
      { src: "/media/series/red-crest-high/cast/cast-24.jpg", alt: "Cast of Red Crest High" },
      { src: "/media/series/red-crest-high/cast/cast-25.jpg", alt: "Cast of Red Crest High" },
      { src: "/media/series/red-crest-high/cast/cast-26.jpg", alt: "Cast of Red Crest High" },
      { video: "/media/series/red-crest-high/cast/behind-the-scenes.mp4", alt: "Behind the scenes of Red Crest High" },
    ],
  },
];

/* --------------------------- Homepage hero ----------------------------- */

/** First three titles of the slate rotate through the homepage hero. */
export const heroSlides: Film[] = films.slice(0, 3);

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
    body: [
      "Our romantic drama I Love You Regardless has arrived in cinemas, distributed by Kada Entertainment to more than 50 cinemas.",
      "The film follows two strangers brought together by an unusual housing arrangement. Their difficult cohabitation leads to conflict, betrayal and emotional discovery — and an unexpected journey toward love.",
      "For screening times, check your local cinema listings. For broadcast, streaming and international distribution enquiries, get in touch with the studio.",
    ],
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
    body: [
      "Our slate continues to grow. Beguiled and Noise — two new feature films — are in development, alongside Red Crest High, our first original television series.",
      "All three titles are being developed by Audrey Allen Pictures, with synopsis, casting and release details to be announced.",
      "Follow the studio for updates as these productions move forward.",
    ],
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
    body: [
      "We are actively building relationships with international distributors, streaming platforms, broadcasters, investors, corporate sponsors and tourism organizations.",
      "Our aim is simple: to bring stories that celebrate African culture to audiences across Africa and around the world — through co-productions, licensing and long-term partnerships.",
      "If you're a distributor, platform, sponsor or financier interested in working with us, we'd like to hear from you.",
    ],
    image: "/media/series/red-crest-high/poster.jpg",
    accent: "#3a5a4a",
  },
];

/* --------------------------- Upcoming projects -------------------------- */

export interface UpcomingProject {
  slug: string;
  /** Working title shown on the card. TODO: replace with the real title. */
  title: string;
  /** development stage shown above the title */
  status: string;
  /** planned release line. TODO: replace once dates are known. */
  releaseLabel: string;
  image: string;
  accent: string;
}

/**
 * Photos live in /public/upcoming-projects. Titles and release details are
 * placeholders — update this array when the real information arrives.
 */
export const upcomingProjects: UpcomingProject[] = [
  {
    slug: "project-01",
    title: "Untitled Project 01", // TODO: real title
    status: "In Development",
    releaseLabel: "TBA", // TODO: real date
    image: "/upcoming-projects/project-01.jpg",
    accent: "#4a2b3a",
  },
  {
    slug: "project-02",
    title: "Untitled Project 02", // TODO: real title
    status: "In Development",
    releaseLabel: "TBA", // TODO: real date
    image: "/upcoming-projects/project-02.jpg",
    accent: "#4a2b3a",
  },
];

/* ------------------------------ Helpers -------------------------------- */

export function getFilm(slug: string): Film | undefined {
  return films.find((f) => f.slug === slug);
}

export function getSeries(slug: string): Series | undefined {
  return series.find((s) => s.slug === slug);
}

export function getNews(slug: string): NewsItem | undefined {
  return news.find((n) => n.slug === slug);
}

export function relatedFilms(slug: string, count = 4): Film[] {
  return films.filter((f) => f.slug !== slug).slice(0, count);
}

/** Genres may be empty while a title is still in development. */
export function genreLabel(item: { genres: string[] }): string {
  return item.genres.length ? item.genres.join(" / ") : "To be announced";
}
