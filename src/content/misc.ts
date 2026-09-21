/* ------------------------------------------------------------------
   Book · Podcast · Journey · Passions · Achievements · Errata
   ------------------------------------------------------------------ */

export const book = {
  title: "The Millionaire Mindset",
  subtitle: "A Kid's Guide to Earning and Growing Wealth",
  published: "2025",
  publisher: "TS Publication — Truth and Social Publication",
  isbn: "978-93-49186-85-9",
  price: "₹250",
  readership: "Young readers, 11+",
  /** Where to buy it. */
  amazonUrl: "https://amzn.in/d/0iPZBn1h",
  blurb:
    "My first book, introducing young readers to money habits, saving, investing, entrepreneurship and the way financial decisions compound over a lifetime.",
  why: [
    "I wrote it because I could not find a book on money that spoke to people my age without either talking down to them or turning into a get-rich pitch.",
    "Most financial writing for young readers stops at 'save your pocket money'. Most financial writing for adults assumes you already know what a bond is. I wanted something that started at the beginning and still respected the reader.",
  ],
  concepts: [
    { n: "01", t: "Money is a tool, not a scoreboard", d: "What money is for, before what to do with it." },
    { n: "02", t: "The habit beats the amount", d: "Why consistency outperforms intensity over long horizons." },
    { n: "03", t: "Compounding, explained slowly", d: "The one idea that changes how a decade looks." },
    { n: "04", t: "Risk is not the same as danger", d: "Separating volatility from permanent loss." },
    { n: "05", t: "Spending is a choice about the future", d: "Every purchase is a trade against a later version of you." },
    { n: "06", t: "Starting is the hard part", d: "Why entrepreneurship is mostly a decision, not a talent." },
  ],
  lessons: [
    {
      t: "Explaining forces understanding",
      d: "I could not write a clear paragraph about inflation until I properly understood it. The writing exposed the gap; it did not create it.",
    },
    {
      t: "Simple is harder than complicated",
      d: "The first drafts were longer. Every round of editing made the ideas shorter and the meaning clearer, which was not the relationship I expected.",
    },
    {
      t: "A book has a structure problem before it has a sentence problem",
      d: "I rewrote the order of the chapters three times. No amount of good sentences fixes a chapter in the wrong place.",
    },
    {
      t: "Finishing is a separate skill from starting",
      d: "The gap between a mostly-written book and a finished one turned out to be much larger than the word count suggested.",
    },
  ],
  journeySteps: ["Idea", "Writing", "Book", "Lessons", "Continuing the mission"],
};

/* ---------------------------------------------------------------- */

export type Episode = {
  n: string;
  guest: string;
  role: string;
  topic: string;
  takeaway: string;
  date: string;
  duration: string;
  status: "published" | "recording";
};

export const podcast = {
  title: "Money Matters with Young Darsh",
  blurb:
    "A podcast where I speak with entrepreneurs, investors, authors, business leaders and inspiring young people about money, business and the decisions behind what they built.",
  why: [
    "I started it for a selfish reason: the fastest way to learn something is to ask someone who has actually done it, and a podcast is a socially acceptable excuse to ask a stranger for an hour of their time.",
    "The questions I ask are the ones I genuinely do not know the answer to. That is the only editorial rule.",
  ],
  guestTypes: ["Entrepreneurs", "Investors", "Authors", "Business leaders", "Young achievers"],
};

export const episodes: Episode[] = [
  {
    n: "05",
    guest: "To be announced",
    role: "Founder",
    topic: "Building a company before you have any money",
    takeaway: "—",
    date: "2026-09",
    duration: "—",
    status: "recording",
  },
  {
    n: "04",
    guest: "Guest name",
    role: "Author",
    topic: "Writing about money without selling anything",
    takeaway:
      "Credibility comes from what you are willing to say that is against your own interest.",
    date: "2026-07",
    duration: "42 min",
    status: "published",
  },
  {
    n: "03",
    guest: "Guest name",
    role: "Investor",
    topic: "How a professional actually decides what to buy",
    takeaway:
      "Most of the work is deciding what to ignore, not deciding what to buy.",
    date: "2026-06",
    duration: "51 min",
    status: "published",
  },
  {
    n: "02",
    guest: "Guest name",
    role: "Entrepreneur",
    topic: "The first year, and what it really costs",
    takeaway:
      "Cash flow kills more businesses than bad ideas do.",
    date: "2026-05",
    duration: "38 min",
    status: "published",
  },
  {
    n: "01",
    guest: "Guest name",
    role: "Young achiever",
    topic: "Starting something at fifteen",
    takeaway:
      "Being underestimated is an advantage if you use it to ask better questions.",
    date: "2026-04",
    duration: "34 min",
    status: "published",
  },
];

/* ------------------------------------------------------------------
   Passions — what I do when I am not at a desk. Scuba diving leads,
   because it is the one that has changed how I think about risk.
   ------------------------------------------------------------------ */

export type Passion = {
  key: string;
  title: string;
  glyph: "wave" | "curve" | "globe";
  since?: string;
  lede: string;
  certifications?: string[];
  paras: string[];
  facts?: { k: string; v: string }[];
};

export const passions: Passion[] = [
  {
    key: "diving",
    title: "Scuba Diving",
    glyph: "wave",
    lede: "Certified Scuba Diver and Junior Rescue Diver.",
    certifications: ["Scuba Diver", "Junior Rescue Diver"],
    paras: [
      "Diving is the only thing I do where a checklist is not bureaucracy. You plan the dive, you dive the plan, and you check your air on a schedule rather than when you feel like it.",
      "The Rescue course was the part that stayed with me. It is almost entirely about noticing a small problem early — a diver breathing too fast, a strap not quite right — because underwater, small problems do not stay small.",
      "It is also the closest thing I have to a working model of risk. Nothing about a dive is dangerous on its own; the danger is in the combination, and in the assumption you did not check.",
    ],
    facts: [
      { k: "Certifications", v: "Scuba Diver · Junior Rescue Diver" },
      { k: "Environment", v: "Open water, wrecks" },
      { k: "Carried over", v: "Plan first, then act. Check the assumption." },
    ],
  },
  {
    key: "swimming",
    title: "Swimming",
    glyph: "curve",
    lede: "The training that made the diving possible.",
    paras: [
      "Swimming came first, and it is the reason the diving was ever an option. Comfort in water is not something you can shortcut with equipment.",
      "It is also the most honest form of practice I know: the clock does not care how the session felt.",
    ],
  },
  {
    key: "history",
    title: "Geopolitics & History",
    glyph: "globe",
    lede: "Reading about why things ended up this way.",
    paras: [
      "Markets, borders and institutions are all downstream of decisions people made under uncertainty, usually with worse information than we have now.",
      "Reading history is the cheapest way I know to see a large number of those decisions and how they actually turned out.",
    ],
  },
];

export const passionsRule =
  "These are not hobbies listed to fill a page. Each one has changed how I think about something else on this site.";

/* ---------------------------------------------------------------- */

export type JourneyYear = {
  year: string;
  age: string;
  state: "past" | "current" | "planned";
  /** Two or three words for the spine of the timeline. */
  title: string;
  headline: string;
  detail: string;
  marks: string[];
  /**
   * Milestones completed by the end of this year, counted cumulatively.
   * This is the y-value of the growth curve — a real count of the entries
   * in `marks` above, not an invented score.
   */
  total: number;
};

export const journey: JourneyYear[] = [
  {
    year: "2022",
    age: "Age 10",
    state: "past",
    title: "Learning",
    headline: "The year the questions started.",
    detail:
      "It began as curiosity rather than a plan: reading about where money comes from, what it is for, and why two families with the same income end up in completely different places. Nothing was published this year. All of it was input.",
    marks: ["Started learning about finance"],
    total: 1,
  },
  {
    year: "2023",
    age: "Age 11",
    state: "past",
    title: "First book",
    headline: "Reading turned into writing.",
    detail:
      "The first book came out of a gap: nothing on money spoke to people my age without either talking down to them or turning into a get-rich pitch. Explaining an idea to someone your own age turned out to be a far harder test than understanding it yourself.",
    marks: ["The Millionaire Mindset — first book"],
    total: 2,
  },
  {
    year: "2024",
    age: "Age 12",
    state: "past",
    title: "Ideation",
    headline: "Working out what the second book had to be.",
    detail:
      "The first book answered what money is for. The obvious next question — how it actually grows — is a much larger subject, and most of this year went on deciding what the book was for before writing a word of it.",
    marks: ["Ideation for the second book"],
    total: 3,
  },
  {
    year: "2025",
    age: "Age 13",
    state: "past",
    title: "Writing",
    headline: "Drafting Millionaire Roadmap.",
    detail:
      "Writing, restructuring and cutting. The chapters that survived are the ones built around a situation a reader could actually be in, rather than a definition they would simply have to trust.",
    marks: ["Writing the second book"],
    total: 4,
  },
  {
    year: "2026",
    age: "Age 14",
    state: "current",
    title: "Publishing & teaching",
    headline: "The year the work stopped being only writing.",
    detail:
      "The busiest year so far. Alongside publishing the second book, this is the year of standing in front of a class: teaching finance to Grade 5 and Grade 6 students at my own school, and at an NGO. Teaching is the most exposing test of whether you understand something — a ten-year-old asks the question the adults were too polite to. It is also the year the connections started, which came from finishing things rather than planning them.",
    marks: [
      "Publishing the second book",
      "Teaching finance at an NGO",
      "Teaching Grades 5 & 6 at my own school",
      "Building connections and networking",
    ],
    total: 8,
  },
  {
    year: "2027",
    age: "Age 15",
    state: "planned",
    title: "Podcast",
    headline: "Planning to start the podcast.",
    detail:
      "Intent, not achievement. The idea behind it is the same one behind the books: the fastest way to learn something is to ask someone who has actually done it. Nothing has been recorded yet, and this entry stays in the future tense until something has.",
    marks: ["Planning to start the podcast"],
    total: 9,
  },
];

export const journeyRule =
  "Six years, counted honestly. Every point on the curve is a milestone that actually happened — 2027 is the one exception, and it describes intent rather than achievement until it does.";

/* ---------------------------------------------------------------- */

export const achievements = [
  {
    category: "Writing",
    items: [
      { t: "The Millionaire Mindset", d: "Author. Published 2025.", year: "2025" },
      { t: "Published articles", d: "Long-form writing on finance, mathematics and behaviour.", year: "2026" },
    ],
  },
  {
    category: "Media",
    items: [
      { t: "Money Matters with Young Darsh", d: "Creator and host. Conversations with founders, investors and authors.", year: "2026" },
    ],
  },
  {
    category: "Speaking",
    items: [
      {
        t: "Matterly Foundation & PETA India",
        d: "Spoke at an event held with the Matterly Foundation, PETA India and SAIRIK.",
        year: "2025",
      },
    ],
  },
  {
    category: "Recognition",
    items: [
      {
        t: "Motilal Oswal",
        d: "Presented a copy of The Millionaire Mindset in person, at the Motilal Oswal offices.",
        year: "2025",
      },
      {
        t: "Ridham Desai",
        d: "Met the Managing Director of Morgan Stanley at the Morgan Stanley offices.",
        year: "2026",
      },
      {
        t: "Ritu Tawde",
        d: "Met the Mayor of Mumbai, and presented a copy of The Millionaire Mindset.",
        year: "2026",
      },
      {
        t: "Chetan Bhagat",
        d: "Met the author whose books had been an influence for years.",
        year: "2025",
      },
    ],
  },
  {
    category: "Certifications",
    items: [
      { t: "Scuba Diver", d: "Open-water certification.", year: "2025" },
      { t: "Junior Rescue Diver", d: "Rescue-level certification.", year: "2025" },
    ],
  },
  {
    category: "Academic",
    items: [],
  },
  {
    category: "Competitions",
    items: [],
  },
];

export const achievementsRule =
  "Quality over quantity. Empty categories stay empty until there is something honest to put in them.";

/* ---------------------------------------------------------------- */

export const errata = [
  {
    n: "01",
    date: "2026-04",
    field: "Behaviour",
    thought: "I thought loss aversion was something that affected other investors, not me.",
    found:
      "I noticed I check a falling number far more often than a rising one, and that I had been describing exactly this behaviour as irrational when other people did it.",
    changed:
      "I stopped treating behavioural biases as a topic to write about and started treating them as a description of my own defaults. Writing a decision down in advance is now the only defence I actually trust.",
  },
  {
    n: "02",
    date: "2026-03",
    field: "Probability",
    thought: "I thought I could recognise a real price chart from a randomly generated one.",
    found:
      "I ran it as a blind test on 60 charts and scored 33 — statistically indistinguishable from guessing. My confidence was not correlated with being correct.",
    changed:
      "I no longer accept 'it looks like a pattern' as evidence, including from myself. The experiment is written up in the Research Notebook.",
  },
  {
    n: "03",
    date: "2026-02",
    field: "Mathematics",
    thought:
      "I thought the interest rate was the most important variable in compound growth.",
    found:
      "Working through the formula properly, time sits in the exponent and everything else sits in the base. Extending the horizon from 20 to 30 years does more than raising the rate by two points.",
    changed:
      "I reordered how I think about the whole subject: horizon first, cost second, rate third, starting amount last.",
  },
  {
    n: "04",
    date: "2026-05",
    field: "Programming",
    thought: "I thought a passing test meant my code was correct.",
    found:
      "My compound interest function passed its first test because I had chosen a 0% rate, which is the one case where the bug cancels out.",
    changed:
      "I now write the test case where the answer is different for the right and wrong implementations, and I check at least one value by hand.",
  },
];

export const errataRule =
  "Learning isn't always about getting the right answer. Sometimes the most valuable lesson comes from discovering that an idea was wrong.";
