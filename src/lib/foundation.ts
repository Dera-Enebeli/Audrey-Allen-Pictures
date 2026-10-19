// ---------------------------------------------------------------------------
// AUDREY ALLEN FOUNDATION FOR CHILDREN (AAFC)
//
// Content for the foundation's dedicated page (/foundation).
// Drop the foundation artwork at /public/media/foundation/hero.jpg — until then
// the hero falls back to a clean brand-colour panel that still looks deliberate.
// ---------------------------------------------------------------------------

import { site } from "./site";

export interface FocusArea {
  letter: string;
  title: string;
  body?: string;
  points?: string[];
  closing?: string;
}

export const foundation = {
  name: "Audrey Allen Pictures",
  abbr: "AAP",
  tagline: "Telling African Stories. Inspiring the World.",
  founder: "Tosin Allen",

  image: "/media/foundation/foundationmain.jpg",
  accent: "#123a2c",

  lede: "A child-focused charitable initiative founded by Tosin Allen, dedicated to improving the lives of vulnerable and disadvantaged children through education, child welfare, entertainment, advocacy and strategic partnerships.",

  about: [
    "The Audrey Allen Foundation for Children (AAFC) is a child-focused charitable initiative founded by Tosin Allen, dedicated to improving the lives of vulnerable and disadvantaged children through education, child welfare, entertainment, advocacy, and strategic partnerships.",
    "The foundation believes that entertainment is more than a source of enjoyment; it is a powerful tool for education, social transformation, fundraising, and positive change. By bringing together the creative industry, corporate organizations, philanthropists, and development partners, the foundation seeks to create opportunities that improve children's lives and inspire a better future.",
    "Through creative storytelling, educational initiatives, entertainment productions, and charitable partnerships, the foundation aims to address issues affecting children while mobilizing the resources needed to support meaningful social development projects.",
  ],

  vision:
    "A world where every child is protected, educated, empowered, and given an equal opportunity to achieve their full potential.",

  mission:
    "To improve the lives of vulnerable children by combining charitable initiatives, education, entertainment, and strategic partnerships to raise awareness, mobilize resources, promote child protection, and create sustainable opportunities for children and young people.",

  focusIntro:
    "The foundation works across six core areas, using entertainment as a central engine for awareness, fundraising and change.",

  focus: [
    {
      letter: "A",
      title: "Entertainment for Social Impact",
      body: "Entertainment is a central pillar of the Audrey Allen Foundation for Children. We seek to harness the influence of film, television, music, literature, digital media, and celebrity culture to promote children's welfare and generate support for social development. Our entertainment initiatives may include:",
      points: [
        "Film and Television for Social Change: Developing and supporting films, television series, and other productions that address child welfare, education, bullying, abuse, teenage challenges, family relationships, and youth development.",
        "Charitable Film Screenings: Organizing screenings and special entertainment events to raise funds for children's causes.",
        "Celebrity and Artist Partnerships: Collaborating with actors, musicians, filmmakers, influencers, and other public figures to amplify children's issues and encourage charitable giving.",
        "Music and Live Entertainment: Organizing concerts, benefit performances, comedy shows, and cultural events to generate resources for child-focused programs.",
        "Books and Educational Media: Promoting books, creative publications, and educational audiovisual content that encourage learning, positive values, leadership, and personal development.",
        "Digital Entertainment and Awareness Campaigns: Using online video, social media, and digital storytelling to reach wider audiences and mobilize support for children.",
        "Corporate Entertainment Partnerships: Working with entertainment companies, broadcasters, streaming platforms, cinemas, and sponsors to create socially responsible projects.",
      ],
      closing:
        "The foundation aims to make entertainment a sustainable vehicle for charitable fundraising, public awareness, and youth empowerment.",
    },
    {
      letter: "B",
      title: "Education and Youth Empowerment",
      body: "We promote initiatives that expand children's access to education, learning resources, scholarships, mentorship, career guidance, and life skills.",
    },
    {
      letter: "C",
      title: "Child Welfare and Protection",
      body: "We seek to support efforts to protect children from abuse, neglect, exploitation, trafficking, and other threats to their safety and development.",
    },
    {
      letter: "D",
      title: "Support for Vulnerable Children",
      body: "We aim to mobilize financial resources, essential supplies, and community support for orphaned children, children with disabilities, and children from disadvantaged backgrounds.",
    },
    {
      letter: "E",
      title: "Health and Well-being",
      body: "We seek partnerships with qualified organizations to support children's healthcare, health education, and access to essential services.",
    },
    {
      letter: "F",
      title: "Community Development and Advocacy",
      body: "We support awareness campaigns and collaborative initiatives that encourage communities, families, institutions and individuals to take an active role in protecting and supporting children.",
    },
  ] as FocusArea[],

  // Photos pulled from the foundation's own press coverage & events.
  // Swap freely — any file under /public/media/foundation/ works here.
  gallery: [
    { src: "/media/foundation/gallery-1.jpg", alt: "Audrey Allen Foundation outreach with children" },
    { src: "/media/foundation/gallery-2.jpg", alt: "Audrey Allen Foundation community outreach" },
    { src: "/media/foundation/gallery-3.jpg", alt: "Audrey Allen Foundation children's event" },
    { src: "/media/foundation/gallery-4.jpg", alt: "Audrey Allen Foundation charity event" },
    { src: "/media/foundation/gallery-05.jpg", alt: "Audrey Allen Foundation Red & White Christmas party" },
    { src: "/media/foundation/gallery-06.jpg", alt: "Audrey Allen Foundation Christmas party" },
    { src: "/media/foundation/gallery-07.jpg", alt: "Audrey Allen Foundation Red & White Christmas party" },
    { src: "/media/foundation/gallery-08.jpg", alt: "Audrey Allen Foundation Christmas party" },
    { src: "/media/foundation/gallery-09.jpg", alt: "Audrey Allen Foundation Red & White Christmas party" },
    { src: "/media/foundation/gallery-10.jpg", alt: "Audrey Allen Foundation Christmas party" },
    { src: "/media/foundation/gallery-11.jpg", alt: "Audrey Allen Foundation Christmas party" },
    { src: "/media/foundation/gallery-12.jpg", alt: "Audrey Allen Foundation Red & White Christmas party" },
    { src: "/media/foundation/gallery-13.jpg", alt: "Audrey Allen Foundation Christmas party" },
    { src: "/media/foundation/gallery-14.jpg", alt: "Audrey Allen Foundation Christmas party" },
    { src: "/media/foundation/gallery-15.jpg", alt: "Audrey Allen Foundation Christmas party" },
    { src: "/media/foundation/gallery-16.jpg", alt: "Audrey Allen Foundation Christmas party" },
    { src: "/media/foundation/gallery-17.jpg", alt: "Audrey Allen Foundation for Children event" },
    { src: "/media/foundation/gallery-18.jpg", alt: "Audrey Allen Foundation for Children event" },
    { src: "/media/foundation/gallery-19.jpg", alt: "Audrey Allen Foundation Christmas party" },
    { src: "/media/foundation/gallery-20.jpg", alt: "Audrey Allen Foundation Christmas cake" },
    { src: "/media/foundation/gallery-21.jpg", alt: "Tosin Allen, founder of the Audrey Allen Foundation for Children" },
    { src: "/media/foundation/gallery-22.jpg", alt: "Audrey Allen Foundation Christmas party" },
    { src: "/media/foundation/gallery-23.jpg", alt: "Audrey Allen Foundation Christmas party" },
    { src: "/media/foundation/gallery-24.jpg", alt: "Audrey Allen Foundation Christmas party" },
    { src: "/media/foundation/gallery-25.jpg", alt: "Audrey Allen Foundation orphanage visit" },
    { src: "/media/foundation/gallery-26.jpg", alt: "Audrey Allen Foundation orphanage visit" },
    { src: "/media/foundation/gallery-27.jpg", alt: "Audrey Allen Foundation orphanage visit" },
    { src: "/media/foundation/gallery-28.jpg", alt: "Audrey Allen Foundation orphanage visit" },
  ],

  /** TODO: replace with the foundation's own address when it has one. */
  contact: {
    email: site.contact.email,
    ctaLabel: "Partner with the foundation",
  },
} as const;
