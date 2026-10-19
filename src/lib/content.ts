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
  basedOn?: { title: string; author: string; cover: string; synopsis?: string };
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
    genres: ["Horror", "Psychological Thriller"],
    director: "Audrey Allen Pictures",
    synopsis:
      "A reunion meant to rekindle old friendships becomes a nightmare when a group of former friends reunite after years apart, only to discover that the past they have tried so hard to forget is far from buried.\n\nWhat begins as a night of laughter, nostalgia, and celebration soon takes a disturbing turn as strange occurrences, unexplained sounds, and terrifying encounters expose the cracks beneath their carefully constructed lives. As fear spreads and suspicion grows, the friends begin to question one another, unsure of who can be trusted and who may be hiding something far more sinister.\n\nBut the real horror is not just what they hear or see. It is what they remember.\n\nAs buried secrets emerge and the night descends into chaos, the group discovers that their reunion may not be a coincidence. Someone—or something—has brought them together for a reason, and escaping the nightmare may require confronting the truth they have spent years trying to silence.\n\nIn NOISE, the past refuses to stay quiet, guilt becomes a weapon, and every sound could be a warning. When the truth finally comes to light, the survivors must face a terrifying question: will they make it out alive, or will the sins of their past become their final undoing?",
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
    genres: ["Drama", "Young Adult", "Social Drama"],
    synopsis:
      "Adapted from Tosin Allen's acclaimed novel, Red Crest High follows a diverse group of students navigating the intense pressures of adolescence at a prestigious Nigerian secondary school. When a shocking incident exposes the fault lines beneath the school's polished surface, friendships fracture, loyalties are tested, and long-buried secrets begin to surface.\n\nEach episode peels back another layer of the students' interconnected lives — the scholarship kid carrying her family's hopes, the prefect hiding a double life, the newcomer whose arrival disrupts the social order, the teacher forced to choose between protocol and conscience. As academic ambition collides with personal trauma, the series explores how the choices made in these formative years echo into adulthood.\n\nRed Crest High is a character-driven ensemble drama that examines bullying, class, identity, family expectation, and the quiet courage it takes to do the right thing when no one is watching.",
    poster: "/media/series/red-crest-high/poster.jpg",
    accent: "#5a1f22",
    basedOn: {
      title: "Redcrest High",
      author: "Tosin Allen",
      cover: "/media/series/red-crest-high/book/book.jpg",
      synopsis:
        "Redcrest High is a compelling exploration of adolescent life, examining the social pressures, personal conflicts, and moral dilemmas that shape young people during one of the most critical stages of their development.\n\nSet against the backdrop of high school, the book examines the realities of growing up in an environment where academic expectations, social hierarchies, peer influence, family pressures, and the pursuit of acceptance often compete with personal values and sound judgment. As students navigate friendships, relationships, identity, ambition, and the consequences of their decisions, they are confronted with challenges that test their emotional maturity, integrity, and sense of responsibility.\n\nThe book addresses issues that significantly influence adolescent behaviour, including bullying, discrimination, manipulation, unhealthy relationships, dishonesty, insecurity, and the pressure to conform. It explores how these experiences affect self-esteem, academic performance, interpersonal relationships, and the development of personal values. It also considers the role of family, educators, and the wider school community in shaping young people's attitudes, choices, and understanding of right and wrong.\n\nBeyond its portrayal of school life, Redcrest High offers an educational perspective on the relationship between individual decisions and their wider consequences. It encourages young readers to examine their attitudes, recognise harmful patterns of behaviour, develop critical thinking skills, and understand the importance of accountability, empathy, respect, and responsible decision-making.\n\nDesigned to stimulate reflection and meaningful discussion among students, parents, and educators, the book provides an opportunity to address the social and emotional challenges of adolescence in a relatable and constructive manner.\n\nUltimately, Redcrest High is a story about character formation, personal responsibility, and the transition from adolescence to adulthood. It reinforces the importance of making informed choices, establishing healthy boundaries, resisting destructive influences, and recognising that the values developed during the school years can have a lasting impact on an individual's future.\n\nGenre: Young Adult Fiction | Educational Drama | Social Development\n\nTarget Audience: Secondary school students, educators, parents, and organisations committed to adolescent development and education.",
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
  /** Short synopsis for potential detail page or hover */
  synopsis?: string;
  /** Genres for display */
  genres?: string[];
}

/**
 * Photos live in /public/upcoming-projects. Titles and release details are
 * placeholders — update this array when the real information arrives.
 */
export const upcomingProjects: UpcomingProject[] = [
  {
    slug: "mbuna-hearts",
    title: "Mbuna Hearts",
    status: "In Development",
    releaseLabel: "TBA",
    image: "/upcoming-projects/project-01.jpg",
    accent: "#2e6b4f",
    genres: ["Romance", "Drama"],
    synopsis:
      "Set against the breathtaking landscapes and vibrant cultural beauty of Malawi, Mbuna Hearts is a cross-border romantic drama about love, friendship, rivalry, and the unexpected consequences of following one's heart.\n\nTwo Nigerian men, bound by a close friendship, travel to Malawi for a tourist vacation, hoping to escape their everyday routines and experience the beauty, culture, and hospitality of a new country. Their adventure takes an unexpected turn when they meet a beautiful and charismatic Malawian female tour guide who introduces them to the wonders of her homeland.\n\nAs they explore Malawi's stunning tourist destinations, including the breathtaking shores of Lake Malawi, both men find themselves falling deeply in love with the same woman. What begins as an innocent holiday romance soon develops into a complicated emotional triangle that threatens to destroy their friendship.\n\nCaught between loyalty to one another and their growing desire for the woman they both love, the two friends find themselves facing difficult choices. Jealousy, competition, and unspoken feelings begin to emerge, testing the strength of their bond and forcing each man to confront what he is truly willing to sacrifice for love.\n\nFor the Malawian tour guide, what should have been a professional encounter becomes a deeply personal dilemma as she discovers that her heart may be the very thing that separates two friends who once shared everything.\n\nAgainst the rich cultural backdrop of Malawi, Mbuna Hearts explores the complexities of cross-cultural romance, the power of attraction, and the fine line between friendship and rivalry. As emotions intensify and loyalties are tested, one question remains: can friendship survive when two men fall in love with the same woman?\n\nMbuna Hearts is a captivating story of love, cultural connection, and the difficult choices that arise when the heart refuses to choose an easy path.",
  },
  {
    slug: "the-alliance-of-rivers",
    title: "The Alliance of Rivers",
    status: "In Development",
    releaseLabel: "TBA",
    image: "/upcoming-projects/project-02.jpg",
    accent: "#3a5a4a",
    genres: ["Epic Period Romance", "Political Drama"],
    synopsis:
      "An Epic Period Romance | Political Drama | Nigeria–Malawi\n\nSome nations are built on blood. Some legacies are built on lies. And some love stories refuse to die.\n\nAcross three decades of political upheaval, a forbidden love between a Nigerian political heir and a Malawian woman becomes entangled in the ambitions of two nations, setting in motion a chain of events whose consequences will outlive the people who started them.\n\nTheir story begins in a time when Africa is wrestling with the burden of its past and the uncertain promise of its future. In the corridors of political power, alliances are negotiated in secret, loyalties are bought and sold, and the fate of millions rests in the hands of men determined to shape history on their own terms. It is into this volatile world that two young people from different nations fall in love, discovering in each other a freedom that neither of their worlds is willing to grant them.\n\nHe is the son of a powerful Nigerian political figure, raised to understand that duty comes before desire and that the family name is a responsibility from which there is no escape. She is a fiercely independent Malawian woman whose family is bound to the country's political establishment, yet whose dreams extend beyond the ambitions of the men who govern her world. Their connection is immediate, profound, and dangerous. What begins as a private romance soon becomes a threat to carefully constructed political arrangements.\n\nWhen a political conspiracy erupts, their love is sacrificed at the altar of national interest. A decision made in one room, by men who will never have to live with its consequences, tears them apart and leaves behind a truth too dangerous to speak. Separated by geography, circumstance, and the weight of history, they are forced to build lives around an absence neither time nor ambition can erase.\n\nOver the next thirty years, Nigeria and Malawi change. Governments rise and fall. Ideologies collapse. Former enemies become allies, and yesterday's revolutionaries become tomorrow's establishment. Yet beneath the official histories, diplomatic ceremonies, and carefully preserved public reputations lies a private story of betrayal, sacrifice, and a love that was never given the chance to reach its natural end.\n\nThen, as a new generation moves into positions of power, the past begins to unravel. A long-buried secret threatens to expose the true origins of a historic political alliance, challenging the legitimacy of powerful figures and forcing their descendants to confront the consequences of decisions made before they were born. What emerges is not merely a scandal between two nations, but a devastating revelation about the price of ambition, the inheritance of guilt, and the human lives erased from the pages of history.\n\nSet against the majestic landscapes of Malawi, The Alliance of Rivers is an ambitious cinematic journey through love and loss, political betrayal, historical memory, and the fragile relationship between personal freedom and national duty. It is a story in which the intimate and the monumental collide: where a lover's promise can become a political liability, where silence can shape the destiny of nations, and where the passage of thirty years cannot guarantee that the truth will remain buried.\n\nAt its heart lies a haunting question: when history has taken everything from two people, can love still reclaim what power stole?\n\nTHE ALLIANCE OF RIVERS is a sweeping African period epic about two nations, three decades, and a love story history tried to erase.\n\nBecause history remembers those who ruled. But it rarely remembers those who paid the price.",
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
