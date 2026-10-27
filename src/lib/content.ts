// ---------------------------------------------------------------------------
// CONTENT — the studio's catalogue and profile.
//
// MEDIA CONVENTION (drop your own pictures & videos in /public/media):
//   /public/media/films/<slug>/poster.jpg     portrait  2:3   (poster cards)
//   /public/media/films/<slug>/backdrop.jpg   landscape 16:9  (hero / detail)
//   /public/media/films/<slug>/preview.mp4    optional looping video
//   /public/media/films/<slug>/editions/<lang>-poster.jpg  alternate editions
//   /public/media/films/<slug>/distribution/<title>-poster.jpg  airline / streamer posters
//   /public/media/films/<slug>/cast/*.{jpg,mp4}      cast shots & clips
//   /public/media/films/<slug>/stills/*.jpg          production stills
//   /public/media/series/<slug>/on-set/on-set-NN.mp4  on-set footage (+ poster-NN.jpg)
//   /public/media/series/<slug>/…              same, for series
// If a file is missing, the card falls back to a colour + title treatment, and
// heroes fall back to a blurred-poster layout, so nothing ever looks broken.
// See /public/media/README.md.
// ---------------------------------------------------------------------------

export type FilmStatus =
  | "Coming Soon"
  | "Streaming"
  | "In Production"
  | "In Development";

/** A single piece of gallery media — a photo, or a looping video tile. */
export interface MediaEntry {
  src?: string;
  video?: string;
  alt: string;
  /** short label override, e.g. "Clip" for video tiles */
  kind?: string;
}

/** A YouTube video featured on a title's page (soundtrack, premiere, featurette). */
export interface VideoEntry {
  /** YouTube video id — the `v=` / `/shorts/` / `youtu.be/` part */
  youtubeId: string;
  title: string;
  /** short role label, e.g. "Soundtrack" or "Premiere" */
  kind: string;
}

/** A featured on-set / behind-the-lens clip — gets its own section with full
 *  player controls. The first entry with `lead` is framed wide (16:9); the rest
 *  are portrait (9:16) tiles. */
export interface OnSetClip {
  src: string;
  /** frame shown before playback — without this the player looks empty */
  poster?: string;
  title: string;
  kind: string;
  caption?: string;
  /** the lead clip gets the wide 16:9 frame; others are constrained to portrait */
  lead?: boolean;
}

/** A second-language edition of a film — alternate poster, synopsis and facts. */
export interface FilmEdition {
  /** ISO language code, e.g. "fr" */
  language: string;
  /** editorial eyebrow, e.g. "Version française" */
  label: string;
  /** edition title, e.g. "Je t’aime malgré tout" */
  title: string;
  /** small line above the title, e.g. "Synopsis du long métrage" */
  subheading?: string;
  poster: string;
  posterAlt: string;
  /** the synopsis, paragraphs separated by blank lines */
  synopsis: string;
  facts?: { label: string; value: string }[];
}

export interface Film {
  slug: string;
  title: string;
  year: number;
  /** Present while the title carries a status; omitted when it doesn't apply. */
  status?: FilmStatus;
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
  /** YouTube videos surfaced on the title's page (soundtrack, premieres, featurettes) */
  videos?: VideoEntry[];
  /** cast photos / clips shown on the title's detail page */
  cast?: MediaEntry[];
  /** production stills shown on the title's detail page */
  gallery?: MediaEntry[];
  /** featured behind-the-scenes clip — gets its own section on the page */
  bts?: {
    video: string;
    poster?: string;
    title: string;
    kind: string;
    caption?: string;
    portrait?: boolean;
  };
  /**
   * Featured clips given their own section with full player controls
   * (play/pause, scrub, volume, fullscreen).
   */
  clips?: {
    src: string;
    /** frame shown before playback — without this the player looks empty */
    poster?: string;
    title: string;
    kind: string;
    caption?: string;
  }[];
  /** Inflight distribution block (an airline or streamer licensing). */
  distribution?: {
    poster: string;
    posterAlt: string;
    eyebrow: string;
    heading: string;
    body: string;
    facts: { label: string; value: string }[];
    note?: string;
  };
  /** Alternate-language editions (poster, synopsis, facts). */
  editions?: FilmEdition[];
  /** short note shown under the poster card (e.g. an airline marking). */
  cardNote?: string;
  /** hex colour used for the typographic fallback tile */
  accent: string;
}

export interface Series {
  slug: string;
  title: string;
  year: number;
  status?: FilmStatus;
  network?: string;
  seasonLabel: string;
  genres: string[];
  synopsis: string;
  poster: string;
  backdrop?: string;
  video?: string;
  trailer?: string;
  videos?: VideoEntry[];
  cast?: MediaEntry[];
  /** production stills shown on the title's detail page */
  stills?: MediaEntry[];
  /** featured behind-the-scenes clip — gets its own section on the page */
  bts?: {
    video: string;
    poster?: string;
    title: string;
    kind: string;
    caption?: string;
    portrait?: boolean;
  };
  /** Featured on-set / behind-the-lens clips (own section, full players). */
  onSet?: OnSetClip[];
  /** the source novel, when the series is an adaptation */
  basedOn?: { title: string; author: string; cover: string; synopsis?: string };
  /** short note shown under the poster card (e.g. a broadcaster marking). */
  cardNote?: string;
  accent: string;
}

/* ----------------------------- The slate ------------------------------- */

export const films: Film[] = [
  {
    slug: "i-love-you-regardless",
    title: "I Love You Regardless",
    year: 2025,
    releaseLabel: "Now Showing",
    genres: ["Romance", "Drama"],
    director: "Chibuike Ike",
    credits: "Distributed by Kada Entertainment",
    tagline: "Two strangers. One impossible arrangement.",
    synopsis:
      "A romantic drama about two individuals brought together by an unusual housing arrangement. Their difficult cohabitation leads to conflict, betrayal, emotional discovery, and an unexpected journey toward love. Distributed by Kada Entertainment to more than 50 cinemas.",
    poster: "/media/films/i-love-you-regardless/poster.jpg",
    accent: "#4a2b3a",
    cardNote: "Now on board with RwandAir",
    distribution: {
      poster: "/media/films/i-love-you-regardless/distribution/rwandair-poster.jpg",
      posterAlt: "Poster for I Love You Regardless in the inflight entertainment of RwandAir",
      eyebrow: "Inflight Entertainment",
      heading: "Now flying with RwandAir",
      body: "RwandAir has acquired I Love You Regardless for its inflight entertainment programme, bringing the film to passengers across Africa and beyond. International inflight distribution is handled by Nile Entertainment.",
      facts: [
        { label: "Airline", value: "RwandAir" },
        { label: "Inflight distribution", value: "Nile Entertainment" },
        { label: "On board", value: "From July" },
      ],
      note: "The RwandAir inflight poster for I Love You Regardless.",
    },
    editions: [
      {
        language: "fr",
        label: "Version française",
        title: "Je t’aime malgré tout",
        subheading: "Synopsis du long métrage",
        poster: "/media/films/i-love-you-regardless/editions/je-t-aime-malgre-tout-poster.jpg",
        posterAlt: "French one-sheet poster for Je t’aime malgré tout",
        synopsis:
          "Lorsque deux inconnus se retrouvent contraints de partager le même appartement après avoir été victimes d’un agent immobilier peu scrupuleux, ce qui aurait dû être une simple mésaventure se transforme rapidement en une véritable guerre de caractères, d’orgueil et de survie.\n\nAucun des deux n’étant prêt à renoncer à son droit d’occuper l’appartement, ils s’affrontent sur presque tout, transformant leur espace commun en un champ de bataille fait de disputes, de ressentiment et de révélations inattendues. Pourtant, derrière leurs querelles incessantes, une compréhension mutuelle commence à naître. Peu à peu, une amitié inattendue se développe, laissant place à des sentiments que ni l’un ni l’autre n’avait imaginés.\n\nMais l’amour est rarement un long fleuve tranquille. Les trahisons, les blessures émotionnelles et les vérités difficiles menacent de détruire le lien fragile qu’ils ont construit. Confrontés aux conséquences de leurs choix, ils doivent affronter leurs peurs et décider si l’amour mérite le risque de se montrer vulnérable.\n\nJe t’aime malgré tout est une comédie romantique dramatique qui raconte l’histoire de deux personnes réunies par la tromperie, mises à l’épreuve par leurs différences et transformées par une relation inattendue. Le film explore la nature imprévisible de l’amour et la possibilité de trouver quelque chose de sincère dans les circonstances les plus improbables.\n\nParfois, l’amour ne naît pas parce que tout est parfait. Parfois, il naît malgré tout.",
        facts: [
          { label: "Titre original", value: "I Love You Regardless" },
          { label: "Réalisation", value: "Chibuike Ike" },
          { label: "Distribution", value: "Kada Entertainment" },
          { label: "Version", value: "Française" },
        ],
      },
    ],
    clips: [
      {
        src: "/media/films/i-love-you-regardless/videos/clip-01.mp4",
        poster: "/media/films/i-love-you-regardless/videos/poster-01.jpg",
        title: "I Love You Regardless — Clip One",
        kind: "From the film",
        caption:
          "A scene from I Love You Regardless, Audrey Allen Pictures' romantic drama distributed to more than 50 cinemas.",
      },
      {
        src: "/media/films/i-love-you-regardless/videos/clip-02.mp4",
        poster: "/media/films/i-love-you-regardless/videos/poster-02.jpg",
        title: "I Love You Regardless — Clip Two",
        kind: "From the film",
        caption:
          "Two strangers, one impossible arrangement: the cohabitation that turns conflict into an unexpected journey toward love.",
      },
      {
        src: "/media/films/i-love-you-regardless/videos/clip-03.mp4",
        poster: "/media/films/i-love-you-regardless/videos/poster-03.jpg",
        title: "I Love You Regardless — Clip Three",
        kind: "From the film",
        caption:
          "Betrayal, emotional discovery and the difficult work of learning to trust again.",
      },
    ],
    videos: [
      {
        youtubeId: "QAxV018wRS8",
        title: "Francis Atela: I Love You Regardless",
        kind: "Soundtrack",
      },
      {
        youtubeId: "p_tlUvQf170",
        title: "I Love You Regardless Movie Premiere",
        kind: "Premiere",
      },
      {
        youtubeId: "-tRUw_BtdsE",
        title: "Enyinna Nwigwe at the I Love You Regardless Premiere",
        kind: "Premiere",
      },
      {
        youtubeId: "Kwbh_mdMIY4",
        title: "Swanky JK at the I Love You Regardless Premiere",
        kind: "Premiere",
      },
    ],
    cast: [
      { src: "/media/films/i-love-you-regardless/cast/cast-01.jpg", alt: "Cast member of I Love You Regardless" },
      { src: "/media/films/i-love-you-regardless/cast/cast-02.jpg", alt: "Denrele Edun in I Love You Regardless" },
      { src: "/media/films/i-love-you-regardless/cast/cast-03.jpg", alt: "Enyinna Nwigwe in I Love You Regardless" },
      { src: "/media/films/i-love-you-regardless/cast/cast-04.jpg", alt: "Francis Atela in I Love You Regardless" },
      { src: "/media/films/i-love-you-regardless/cast/cast-05.jpg", alt: "Titi Joseph in I Love You Regardless" },
      { src: "/media/films/i-love-you-regardless/cast/cast-06.jpg", alt: "Tosin Pedro in I Love You Regardless" },
      { src: "/media/films/i-love-you-regardless/cast/cast-07.jpg", alt: "Jidekene Achufusi in I Love You Regardless" },
      { src: "/media/films/i-love-you-regardless/cast/cast-08.jpg", alt: "Tina Mba in I Love You Regardless" },
      { src: "/media/films/i-love-you-regardless/cast/cast-09.jpg", alt: "Abdullateef Adedimeji in I Love You Regardless" },
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
      "Kim, a talented New York photographer has spent her life yearning for the family she never had. She believes she has finally found it when she falls for Femi Ajala, a wealthy, but deeply troubled Nigerian businessman. Femi is captivated by Kim from the moment he sees her in a coffee shop, ignoring the advances of one of her closest friends, Ashley. Their attraction quickly becomes an intense romance, and before long, Femi proposes.\n\nBut Femi is strangely protective of his family and reluctant to let Kim into his world. After their engagement, Kim discovers why. Femi's mother, a racist is openly hostile toward her, convinced her son should marry a Nigerian or African woman who understands and respects family culture and traditions. Though she reluctantly accepts the marriage, she never hides her resentment toward the woman she considers an outsider.\n\nFor Kim, marriage represents the beginning of the family she has always dreamed of. She is eager to remove the birth control implant she has used for years and start having children. But Femi shocks her with a revelation: he does not want children. Their disagreement becomes a growing source of conflict, forcing Kim to compromise her deepest desire of having children to preserve their marriage.\n\nThen Kim's only surviving relative is diagnosed with cancer and undergoes an emergency preventive hysterectomy. Watching the possibility of motherhood disappear from someone she loves reignites Kim's determination to have a child of her own. She refuses to compromise again. The resulting battles push an already fragile marriage toward collapse, and Femi begins cheating on her repeatedly.\n\nEventually, he decides he wants a divorce. Kim is devastated. Femi's mother is delighted at the prospect of finally getting rid of the white girl, while Ashley, Kim's supposedly loyal friend, secretly nurses a bitter resentment toward her. But as Kim struggles to rebuild her life, she begins to realize that Femi's betrayal is only the beginning.\n\nFemi has been hiding something far more dangerous. When his trusted ally betrays him, federal authorities move against Femi, exposing a shocking secret involving his family and a human trafficking operation. Suddenly, the wealthy, sophisticated businessman Kim married is revealed to be connected to a world of deception and criminality she never imagined.\n\nAt the worst possible moment, Kim discovers she is pregnant.\n\nThe child she fought so desperately to have could now be the last connection binding her to her husband, a criminal with unforgivable secrets.\n\nBeguiled is a romantic drama about love, betrayal, motherhood, family expectations and the devastating consequences of discovering that the person you love and trusted most may have been living a lie.",
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
    ],
    bts: {
      video: "/media/films/beguiled/cast/behind-the-scenes.mp4",
      poster: "/media/films/beguiled/cast/bts-poster.jpg",
      title: "Beguiled",
      kind: "Behind the scenes",
      caption:
        "A first look from the set of Beguiled — the cast and crew at work on Audrey Allen Pictures' upcoming feature.",
    },
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
    trailer: "https://youtu.be/M1TQu0G3_8Y",
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
    ],
    stills: [
      { src: "/media/series/red-crest-high/stills/cast-10.jpg", alt: "Production still from Red Crest High" },
      { src: "/media/series/red-crest-high/stills/cast-11.jpg", alt: "Production still from Red Crest High" },
      { src: "/media/series/red-crest-high/stills/cast-12.jpg", alt: "Production still from Red Crest High" },
      { src: "/media/series/red-crest-high/stills/cast-13.jpg", alt: "Production still from Red Crest High" },
      { src: "/media/series/red-crest-high/stills/cast-14.jpg", alt: "Production still from Red Crest High" },
      { src: "/media/series/red-crest-high/stills/cast-15.jpg", alt: "Production still from Red Crest High" },
      { src: "/media/series/red-crest-high/stills/cast-16.jpg", alt: "Production still from Red Crest High" },
      { src: "/media/series/red-crest-high/stills/cast-17.jpg", alt: "Production still from Red Crest High" },
      { src: "/media/series/red-crest-high/stills/still-21.jpg", alt: "Production still from Red Crest High" },
      { src: "/media/series/red-crest-high/stills/still-23.jpg", alt: "Production still from Red Crest High" },
      { src: "/media/series/red-crest-high/stills/still-24.jpg", alt: "Production still from Red Crest High" },
      { src: "/media/series/red-crest-high/stills/still-25.jpg", alt: "Production still from Red Crest High" },
      { src: "/media/series/red-crest-high/stills/still-26.jpg", alt: "Production still from Red Crest High" },
      { src: "/media/series/red-crest-high/stills/still-27.jpg", alt: "Production still from Red Crest High" },
    ],
    bts: {
      video: "/media/series/red-crest-high/cast/behind-the-scenes.mp4",
      poster: "/media/series/red-crest-high/cast/bts-poster.jpg",
      title: "Red Crest High",
      kind: "Behind the scenes",
      caption:
        "From the set of Red Crest High — the ensemble and crew bringing Tosin Allen's novel to the screen.",
      portrait: true,
    },
    onSet: [
      {
        src: "/media/series/red-crest-high/on-set/on-set-06.mp4",
        poster: "/media/series/red-crest-high/on-set/poster-06.jpg",
        title: "Red Crest High — A Scene in Progress",
        kind: "On set",
        caption:
          "A full scene in progress with the Red Crest High ensemble — the night shoot that keeps the drama tight.",
        lead: true,
      },
      {
        src: "/media/series/red-crest-high/on-set/on-set-04.mp4",
        poster: "/media/series/red-crest-high/on-set/poster-04.jpg",
        title: "Red Crest High — The Long Take",
        kind: "On set",
        caption: "A long, quiet shot from the Red Crest High set, built scene by scene.",
      },
      {
        src: "/media/series/red-crest-high/on-set/on-set-01.mp4",
        poster: "/media/series/red-crest-high/on-set/poster-01.jpg",
        title: "Red Crest High — First Take",
        kind: "On set",
        caption: "First take of the day, and the ensemble already giving the scene everything.",
      },
      {
        src: "/media/series/red-crest-high/on-set/on-set-03.mp4",
        poster: "/media/series/red-crest-high/on-set/poster-03.jpg",
        title: "Red Crest High — Rehearsal",
        kind: "On set",
        caption: "Rehearsal in the school hall: blocking, beats, the quiet before the loud take.",
      },
      {
        src: "/media/series/red-crest-high/on-set/on-set-02.mp4",
        poster: "/media/series/red-crest-high/on-set/poster-02.jpg",
        title: "Red Crest High — Between Takes",
        kind: "On set",
        caption: "Between takes — the cast and crew reset, breathe, and build the next moment.",
      },
      {
        src: "/media/series/red-crest-high/on-set/on-set-05.mp4",
        poster: "/media/series/red-crest-high/on-set/poster-05.jpg",
        title: "Red Crest High — Set Life",
        kind: "On set",
        caption: "On set: the details that hold the story together.",
      },
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

export function relatedFilms(slug: string, count = 4): Film[] {
  return films.filter((f) => f.slug !== slug).slice(0, count);
}

/** Genres may be empty while a title is still in development. */
export function genreLabel(item: { genres: string[] }): string {
  return item.genres.length ? item.genres.join(" / ") : "To be announced";
}

/** Short teaser preview shown before the "Read more" synopsis toggle. */
export function synopsisTeaser(synopsis: string, max = 180): string {
  const first = synopsis.split("\n\n")[0] ?? "";
  if (first.length <= max) return first;
  return `${first.slice(0, max).trimEnd()}…`;
}
