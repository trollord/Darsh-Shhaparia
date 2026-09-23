/* ------------------------------------------------------------------
   PHOTOGRAPHS

   Every image on the site is registered here once, with its intrinsic
   pixel dimensions, so next/image can reserve the right space and no
   page shifts while a plate loads. Files live in /public/images.

   NOTE — names and dates: the captions below describe only what is
   visible in each photograph. Where a person, an award or a date needs
   naming, add it to the `person`, `award` or `year` field of the
   matching Hall of Fame entry further down; nothing is invented here.
   ------------------------------------------------------------------ */

export type Photo = {
  src: string;
  w: number;
  h: number;
  alt: string;
  caption: string;
};

export const photos = {
  portraitClose: {
    src: "/images/portrait-close.jpg",
    w: 875,
    h: 1280,
    alt: "Darsh Shhaparia, portrait",
    caption: "Darsh Shhaparia.",
  },
  portraitMaroonSuit: {
    src: "/images/portrait-maroon-suit.webp",
    w: 1024,
    h: 1536,
    alt: "Darsh Shhaparia seated in a maroon velvet suit, a book resting on his knee",
    caption: "Darsh Shhaparia.",
  },
  portraitAbout: {
    src: "/images/portrait-about.webp",
    w: 1024,
    h: 1536,
    alt: "Darsh Shhaparia in a checked jacket and white shirt",
    caption: "Darsh Shhaparia, 2026.",
  },
  portraitBlazer: {
    src: "/images/portrait-blazer.jpg",
    w: 1200,
    h: 1600,
    alt: "Darsh Shhaparia in a checked blazer",
    caption: "Before an evening event.",
  },
  authorWithBook: {
    src: "/images/author-with-book.jpg",
    w: 1066,
    h: 1600,
    alt: "Darsh Shhaparia holding a copy of The Millionaire Mindset",
    caption: "With a printed copy of The Millionaire Mindset.",
  },
  bookPresentation1: {
    src: "/images/book-presentation-01.jpg",
    w: 1200,
    h: 1600,
    alt: "Darsh Shhaparia presenting a copy of The Millionaire Mindset",
    caption: "Presenting a copy of the book.",
  },
  bookPresentation2: {
    src: "/images/book-presentation-02.jpg",
    w: 1200,
    h: 1600,
    alt: "Darsh Shhaparia presenting a copy of The Millionaire Mindset",
    caption: "The same meeting, a second frame.",
  },
  motilalOswal: {
    src: "/images/motilal-oswal-award.jpg",
    w: 1200,
    h: 1600,
    alt: "Darsh Shhaparia holding an award at the Motilal Oswal offices",
    caption: "At the Motilal Oswal offices.",
  },
  speakingPeta: {
    src: "/images/speaking-peta.jpg",
    w: 1027,
    h: 1600,
    alt: "Darsh Shhaparia speaking at a Matterly Foundation and PETA India event",
    caption: "Speaking at a Matterly Foundation & PETA India event.",
  },
  divingUnderwater: {
    src: "/images/diving-underwater.jpg",
    w: 925,
    h: 1381,
    alt: "Darsh Shhaparia scuba diving underwater beside a wreck",
    caption: "On a wreck dive.",
  },
  divingDockside: {
    src: "/images/diving-dockside.jpg",
    w: 1017,
    h: 1600,
    alt: "Darsh Shhaparia in a wetsuit holding fins at a dive site",
    caption: "Kitted up at the dive site.",
  },
  eventOutdoor1: {
    src: "/images/event-outdoor-01.jpg",
    w: 1186,
    h: 1600,
    alt: "Darsh Shhaparia in a tan suit at an outdoor event",
    caption: "An outdoor afternoon.",
  },
  eventOutdoor2: {
    src: "/images/event-outdoor-02.jpg",
    w: 1200,
    h: 1600,
    alt: "Darsh Shhaparia in a tan suit at an outdoor event",
    caption: "Waiting for the ceremony to begin.",
  },
  eventSuitMirror: {
    src: "/images/event-suit-mirror.jpg",
    w: 1200,
    h: 1600,
    alt: "Darsh Shhaparia in a three-piece suit",
    caption: "Three-piece, before leaving.",
  },
  hofMotilalOswal: {
    src: "/images/hof-motilal-oswal.webp",
    w: 1200,
    h: 1600,
    alt: "Darsh Shhaparia presenting The Millionaire Mindset to Motilal Oswal",
    caption: "With Motilal Oswal.",
  },
  hofRituTawde: {
    src: "/images/hof-ritu-tawde.webp",
    w: 1200,
    h: 2118,
    alt: "Darsh Shhaparia, wearing a ceremonial shawl, with Ritu Tawde, Mayor of Mumbai",
    caption: "With Ritu Tawde, Mayor of Mumbai.",
  },
  certIimun2025: {
    src: "/images/cert-iimun-2025.webp",
    w: 1200,
    h: 1217,
    alt: "IIMUN 2025 at Edubridge International School — Darsh Shhaparia, G20, High Commendation",
    caption: "IIMUN 2025 — High Commendation, G20 Committee.",
  },
  hofChetanBhagat: {
    src: "/images/hof-chetan-bhagat.webp",
    w: 1200,
    h: 1643,
    alt: "Darsh Shhaparia with the author Chetan Bhagat",
    caption: "With Chetan Bhagat.",
  },
  hofRidhamDesai: {
    src: "/images/hof-ridham-desai.webp",
    w: 1200,
    h: 1600,
    alt: "Darsh Shhaparia with Ridham Desai at the Morgan Stanley offices",
    caption: "With Ridham Desai, Morgan Stanley.",
  },
  bookCover: {
    src: "/images/book-cover.jpg",
    w: 1200,
    h: 1858,
    alt: "Front cover of The Millionaire Mindset by Darsh Shhaparia",
    caption: "The Millionaire Mindset — front cover.",
  },
  bookCoverSpread: {
    src: "/images/book-cover-spread.jpg",
    w: 2000,
    h: 1524,
    alt: "Full wrap cover of The Millionaire Mindset — back, spine and front",
    caption: "The full wrap: back cover, spine and front.",
  },
} satisfies Record<string, Photo>;

/* ------------------------------------------------------------------
   HALL OF FAME — awards, and the people behind them.

   To personalise an entry, fill in `person` (rendered as “With …”) or
   `award` (rendered under the title). Leave a field out and the plate
   simply renders without it.
   ------------------------------------------------------------------ */

export type HallEntry = {
  n: string;
  /** Omit until the photograph exists — the plate renders as a ruled slot. */
  photo?: Photo;
  title: string;
  kind: "Award" | "Meeting" | "Speaking";
  person?: string;
  /** Rendered beside the person — their role, not a description of them. */
  role?: string;
  award?: string;
  /** What the meeting changed, in the first person. */
  note: string;
  /** The line the entry closes on, set as a pull quote. */
  pull?: string;
  /** An off-site link for this occasion — a reel, a write-up, a recording. */
  link?: { href: string; label: string };
};

export const hallOfFame: HallEntry[] = [
  {
    n: "01",
    photo: photos.hofRituTawde,
    title: "Ritu Tawde",
    kind: "Meeting",
    person: "Ritu Tawde",
    role: "Mayor of Mumbai",
    note: "She validated the work and showed me it mattered to the entire city, not just to me. What moved me most was realising our missions were perfectly aligned — we both wanted to make Mumbai financially literate. A personal mission suddenly became a civic responsibility, backed by city leadership. I understood then that I wasn't working alone in my room; I was part of something systemic, something real, something that could actually change Mumbai. Knowing the city's leadership believed in the mission became the fuel for everything that followed.",
    pull: "When your passion meets the city's need, transformation becomes inevitable.",
  },
  {
    n: "02",
    photo: photos.hofMotilalOswal,
    title: "Motilal Oswal",
    kind: "Meeting",
    person: "Motilal Oswal",
    role: "Founder, Motilal Oswal Financial Services",
    note: "India's legendary investor did not dismiss me as just another teenager — he saw the mission as essential. His validation showed me that financial literacy for young people wasn't only my passion; it was something India's greatest investors cared about. He proved that true wealth is about passing wisdom to the next generation. Meeting him gave the work credibility at the highest level, and showed me the mission wasn't marginal — it was crucial for India's future.",
    pull: "When a legend believes in your vision, you stop doubting yourself. You just build.",
  },
  {
    n: "03",
    photo: photos.hofRidhamDesai,
    title: "Ridham Desai",
    kind: "Meeting",
    person: "Ridham Desai",
    role: "Managing Director, Morgan Stanley",
    note: "Meeting him gave the work a global perspective I did not have before. He showed me that financial literacy is not a Mumbai problem or an India problem — it is a worldwide need, and a leader at one of the world's most respected financial institutions believed it mattered at scale. His insights made me realise that the principles I was teaching young Indians would serve them in a globalised economy, and that the second book was not just local content: it was preparing the next generation for real wealth creation. It changed how I think about finance — not as a domestic concern, but as a universal language young people have to master.",
    pull: "When a global leader sees your vision, you realise it is bigger than you imagined.",
  },
  {
    n: "04",
    photo: photos.hofChetanBhagat,
    title: "Chetan Bhagat",
    kind: "Meeting",
    person: "Chetan Bhagat",
    role: "Author",
    note: "His books had inspired me for years, but meeting him in person showed me something I could not learn from the pages alone. He showed me that young Indian voices can reach millions and create real movement — that an author can get an entire generation to think differently about life, money and dreams. His belief in my work as a thirteen-year-old author proved that age is not a barrier to meaningful contribution. He taught me that being an author is not only about writing; it is about connecting with people and changing how they think. His success became my blueprint for what is possible.",
    pull: "When a bestselling author believes in your voice, you realise your story can change India.",
  },
];

/* ------------------------------------------------------------------
   GALLERY — the rooms, ceremonies and meetings that did not become a
   Hall of Fame entry of their own.
   ------------------------------------------------------------------ */

export const gallery: Photo[] = [
  photos.motilalOswal,
  photos.bookPresentation1,
  photos.bookPresentation2,
  photos.speakingPeta,
  photos.eventOutdoor1,
  photos.eventOutdoor2,
  photos.eventSuitMirror,
  photos.portraitBlazer,
  photos.portraitClose,
];

/* ------------------------------------------------------------------
   BEYOND FINANCE — the life that is not about markets. School
   photographs land here once they arrive; the diving is already here.
   ------------------------------------------------------------------ */

export const beyondFinance: Photo[] = [
  photos.divingUnderwater,
  photos.divingDockside,
];

/** School photographs, captioned by the person who was there. */
export const schoolPhotos: Photo[] = [];
