export const site = {
  name: "Darsh Shhaparia",
  nameStylised: "Darsh Shhaparia",
  grade: "Grade 9",
  year: 2026,
  roles: ["Student", "Writer", "Researcher", "Diver"],
  tagline: "Exploring Finance. Mathematics. Technology. Human Behaviour.",
  shortBio:
    "I'm a Grade 9 student exploring the intersection of mathematics, finance, technology, entrepreneurship and human behaviour. I write about ideas that interest me, build projects to understand them more deeply, and document what I learn along the way.",
  metaDescription:
    "Darsh Shhaparia — Grade 9 student, author of The Millionaire Mindset and host of Money Matters with Darsh. Writing, research and a record of the work, at the intersection of mathematics, finance, technology and human behaviour.",
  email: "hello@darshshhaparia.com",
  url: "https://darshshhaparia.com",
  socials: [
    { label: "Instagram", href: "https://instagram.com", handle: "@darshshhaparia" },
    { label: "YouTube", href: "https://youtube.com", handle: "Money Matters with Darsh" },
    { label: "LinkedIn", href: "https://linkedin.com", handle: "Darsh Shhaparia" },
  ],
} as const;

export type NavItem = { label: string; href: string; index: string };

export const nav: NavItem[] = [
  { label: "About", href: "/about", index: "01" },
  { label: "My Journey", href: "/journey", index: "02" },
  { label: "My Books", href: "/book", index: "03" },
  { label: "Writing", href: "/writing", index: "04" },
  { label: "Podcast", href: "/podcast", index: "05" },
  { label: "Achievements", href: "/achievements", index: "06" },
  { label: "Hall of Fame", href: "/hall-of-fame", index: "07" },
  { label: "Research", href: "/research", index: "08" },
  { label: "Contact", href: "/contact", index: "09" },
];

export const secondaryNav: NavItem[] = [
  { label: "Gallery", href: "/hall-of-fame#gallery", index: "10" },
  { label: "Things I Got Wrong", href: "/things-i-got-wrong", index: "11" },
];

/** Slow ticker rail under the hero. */
export const ticker: string[] = [
  "Currently learning — Probability",
  "Python & NumPy",
  "Portfolio theory",
  "Microeconomics",
  "Reading — Thinking, Fast and Slow",
  "Diving — PADI Junior Rescue Diver",
  "Writing — The mathematics of compound interest",
];

export const pillars = [
  {
    key: "mathematics",
    title: "Mathematics",
    glyph: "curve" as const,
    topics: ["Probability", "Statistics", "Calculus", "Linear Algebra", "Optimization"],
    note: "The language I want to think in.",
  },
  {
    key: "finance",
    title: "Finance",
    glyph: "bars" as const,
    topics: ["Markets", "Investing", "Risk", "Portfolio Theory", "Financial Economics"],
    note: "Where the mathematics meets consequence.",
  },
  {
    key: "technology",
    title: "Technology",
    glyph: "braces" as const,
    topics: ["Python", "Data Analysis", "Algorithms", "Data Visualization"],
    note: "How I test an idea instead of assuming it.",
  },
  {
    key: "behaviour",
    title: "Human Behaviour",
    glyph: "fork" as const,
    topics: ["Decision-Making", "Psychology of Money", "Biases", "Risk Perception"],
    note: "The variable the equations leave out.",
  },
  {
    key: "communication",
    title: "Communication",
    glyph: "nib" as const,
    topics: ["Writing", "Research", "Explaining Complex Ideas", "Public Speaking"],
    note: "If I can't explain it, I don't understand it.",
  },
];

export const openingQuestions = [
  { q: "Why do markets move?", field: "Finance" },
  { q: "How does compound interest actually work?", field: "Mathematics" },
  { q: "Can mathematics help us understand financial risk?", field: "Probability" },
  { q: "How does technology change finance?", field: "Technology" },
  { q: "Why do people make irrational financial decisions?", field: "Behaviour" },
];
