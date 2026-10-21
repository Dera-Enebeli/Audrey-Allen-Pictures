// ---------------------------------------------------------------------------
// SITE CONFIG — edit this one file to make the template yours.
// Brand, navigation, footer, socials and SEO all live here.
// ---------------------------------------------------------------------------

export const site = {
  /**
   * Production origin — used for canonical URLs, Open Graph, robots & sitemap.
   * TODO: confirm this matches the final production domain.
   */
  url: "https://audrey-allen-pictures.vercel.app",

  brand: {
    /** Full legal / wordmark name */
    name: "Audrey Allen Pictures",
    /** Short wordmark used in the header */
    shortName: "Audrey Allen",
    /** Monogram used for the compact mark / favicon tile */
    initials: "AA",
    tagline: "Telling African Stories. Inspiring the World.",
  },

  seo: {
    title: "Audrey Allen Pictures — International Film, Television & Entertainment",
    description:
      "Audrey Allen Pictures is an independent film and television production company developing, producing and promoting exceptional entertainment that celebrates African culture and connects audiences across Africa and the world.",
  },

  /** Public contact address. TODO: replace with the real studio inbox. */
  contact: {
    email: "hello@example.com",
  },

  /** Header + mobile menu links */
  nav: [
    { label: "Film", href: "/films" },
    { label: "Series", href: "/series" },
    { label: "Foundation", href: "/foundation" },
    { label: "Studio", href: "/about" },
    { label: "News", href: "/notes" },
  ],

  /** Right-hand utility nav in the header */
  utility: [
    { label: "Partners", href: "/about#partners" },
    { label: "Contact", href: "/about#contact" },
  ],

  newsletter: {
    heading: "Subscribe for more from the studio.",
    blurb:
      "New releases, festival news and dispatches from set. No noise — just the films.",
  },

  footer: {
    columns: [
      {
        title: "Explore",
        links: [
          { label: "Film", href: "/films" },
          { label: "Series", href: "/series" },
          { label: "Foundation", href: "/foundation" },
          { label: "News", href: "/notes" },
          { label: "Studio", href: "/about" },
        ],
      },
      {
        title: "Studio",
        links: [
          { label: "About Us", href: "/about#about" },
          { label: "Mission & Vision", href: "/about#mission" },
          { label: "What We Do", href: "/about#activities" },
          { label: "Partners", href: "/about#partners" },
        ],
      },
      {
        title: "Work With Us",
        links: [
          { label: "Co-Productions", href: "/about#contact" },
          { label: "Distribution", href: "/about#contact" },
          { label: "Licensing", href: "/about#contact" },
          { label: "Investors & Sponsors", href: "/about#contact" },
        ],
      },
      // Legal links live in the copyright bar, as on a24films.com.
    ],

    /** TODO: point each link at the studio's real profiles. */
    social: [
      { label: "Instagram", href: "https://instagram.com" },
      { label: "X", href: "https://x.com" },
      { label: "YouTube", href: "https://youtube.com" },
      { label: "TikTok", href: "https://tiktok.com" },
    ],

    copyright: "© 2026 Audrey Allen Pictures. All rights reserved.",
    disclaimer:
      "Audrey Allen Pictures — International Film, Television and Entertainment Production Company.",
  },
} as const;
