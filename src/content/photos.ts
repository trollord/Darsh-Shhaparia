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
  photo: Photo;
  title: string;
  kind: "Award" | "Meeting" | "Speaking";
  person?: string;
  award?: string;
  note: string;
};

export const hallOfFame: HallEntry[] = [
  {
    n: "01",
    photo: photos.motilalOswal,
    title: "Motilal Oswal",
    kind: "Award",
    note: "At the Motilal Oswal offices, with the award received there.",
  },
  {
    n: "02",
    photo: photos.bookPresentation1,
    title: "Handing over the book",
    kind: "Meeting",
    note: "Presenting a copy of The Millionaire Mindset in person — one of the meetings that came out of writing it.",
  },
  {
    n: "03",
    photo: photos.bookPresentation2,
    title: "The same conversation",
    kind: "Meeting",
    note: "A second frame from the same meeting.",
  },
  {
    n: "04",
    photo: photos.speakingPeta,
    title: "Matterly Foundation & PETA India",
    kind: "Speaking",
    note: "Speaking at an event held with the Matterly Foundation, PETA India and SAIRIK.",
  },
];

/* ------------------------------------------------------------------
   GALLERY — everything not already placed somewhere else on the site.
   ------------------------------------------------------------------ */

export const gallery: Photo[] = [
  photos.divingUnderwater,
  photos.divingDockside,
  photos.eventOutdoor1,
  photos.eventOutdoor2,
  photos.eventSuitMirror,
  photos.portraitBlazer,
];
