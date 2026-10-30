/* ------------------------------------------------------------------
   MILLIONAIRE ROADMAP — the second book.

   Written while the book was still a manuscript, so the premise, the
   table of contents and the method below all come out of the draft
   itself. The book was launched on 14 October 2026, so the forward-
   looking framing has gone; what is here now describes a printed book.

   Still missing, and deliberately absent rather than guessed:
   publisher, ISBN, price and a retail link. Add them to `edition`
   below once they are known and the facts ledger picks them up.
   ------------------------------------------------------------------ */

export const roadmap = {
  title: "Millionaire Roadmap",
  sequelTo: "The Millionaire Mindset",
  published: "2026",
  launch: {
    date: "14 October 2026",
    venue: "Taj Santacruz, Mumbai",
    by: "Esha Deol",
    host: "Team Applaud",
    award: "Young Author Award, presented by Chetan Bhagat",
  },
  readership: "Young readers, 11+",
  blurb:
    "The sequel to The Millionaire Mindset — a practical method for dealing with money, from the mindsets we inherit to how wealth actually grows, and what money looks like in a digital world.",

  /** Fill these in as they are confirmed; blanks are skipped in the ledger. */
  edition: {
    publisher: "",
    isbn: "",
    price: "",
    buyUrl: "",
  },

  /* From the preface, in the author's framing. */
  premise: [
    "If you have read The Millionaire Mindset, you already know that money is much more than coins, notes, or numbers on a screen. Millionaire Roadmap takes the next step in that journey.",
    "It starts with the development of various money mindsets, then moves to wealth, income and the financial mistakes most people make. From there it covers how money actually grows — shares, mutual funds, saving and compounding — with everyday examples rather than definitions.",
    "The last part deals with money in the age of digitalisation: digital payments, cybersecurity, entrepreneurial skills, content creation and the use of artificial intelligence.",
  ],

  /* The one-line thesis, straight from the preface. */
  thesis:
    "This book is not about becoming rich overnight. It is about learning how to make smart decisions, develop valuable skills, and think ahead.",

  /* How each chapter is built — the pattern the book repeats. */
  method: [
    {
      n: "01",
      t: "Real-life scenario",
      d: "Each chapter opens with a story rather than a definition — a situation a reader could actually be in.",
    },
    {
      n: "02",
      t: "Money mindset takeaway",
      d: "The handful of things the scenario was designed to make visible, stated plainly.",
    },
    {
      n: "03",
      t: "The big lesson",
      d: "One sentence. The idea the chapter exists for.",
    },
    {
      n: "04",
      t: "Your roadmap step",
      d: "Something to do or ask yourself, not something to agree with.",
    },
  ],

  /* Table of contents, as printed. */
  parts: [
    {
      n: "01",
      title: "Money Mindset Foundation",
      chapters: [
        "How Families Think Differently About Money",
        "The Psychology of Money",
        "Behavioural Finance — Why Smart People Make Silly Money Choices",
      ],
    },
    {
      n: "02",
      title: "Understanding Wealth",
      chapters: [
        "Net Worth, Assets and Liabilities Made Simple",
        "Income Streams Explained",
        "Money Mistakes Young People Should Avoid",
      ],
    },
    {
      n: "03",
      title: "How Money Grows",
      chapters: [
        "Shares & the Stock Market",
        "Mutual Funds Made Easy",
        "Real Estate — Money You Can Stand On",
        "Banks, Savings and Interest",
        "The Power of Compounding",
        "Insurance — Protecting What You've Built",
        "Risk, Diversification & Inflation",
      ],
    },
    {
      n: "04",
      title: "Money in the Modern World",
      chapters: [
        "Digital Money, Online Safety & Future Money Skills",
        "Your Financial Success Roadmap",
      ],
    },
  ],

  bonus: ["Money Smart Quiz Corner", "Impact & Recognition Gallery"],

  /* Ideas the book commits to, quoted from its own “big lesson” lines. */
  lessons: [
    {
      t: "Walls and ladders",
      d: "Two families with the same income end up in very different places. The difference was never how much they had — it was the thinking behind every rupee.",
    },
    {
      t: "Say no to the feeling first",
      d: "Spending isn't bad. Spending without asking why is where the trouble starts. A discount can create a want that did not exist a minute earlier.",
    },
    {
      t: "Sunk cost",
      d: "Money already spent cannot be recovered by continuing. The wiser question is always: what makes sense from this day forward?",
    },
  ],
};
