/* ------------------------------------------------------------------
   UPCOMING BOOK — Millionaire Roadmap

   Drawn from the working manuscript. Everything here comes out of the
   draft itself: the preface, the table of contents and the structure
   of the sample chapters. Nothing about publication is stated as
   settled until it actually is — `status` and `expected` are the only
   fields that make a forward-looking claim, and both say so plainly.
   ------------------------------------------------------------------ */

export const upcoming = {
  title: "Millionaire Roadmap",
  sequelTo: "The Millionaire Mindset",
  status: "In progress" as const,
  // The journey timeline dates publication to 2026; kept in step with it.
  expected: "2026",
  readership: "Young readers, 11+",
  blurb:
    "The sequel to The Millionaire Mindset — a practical method for dealing with money, from the mindsets we inherit to how wealth actually grows, and what money looks like in a digital world.",

  /* From the preface, in the author's framing. */
  premise: [
    "If you have read The Millionaire Mindset, you already know that money is much more than coins, notes, or numbers on a screen. Millionaire Roadmap takes the next step in that journey.",
    "It starts with the development of various money mindsets, then moves to wealth, income and the financial mistakes most people make. From there it covers how money actually grows — shares, mutual funds, saving and compounding — with everyday examples rather than definitions.",
    "The last part deals with money in the age of digitalisation: digital payments, cybersecurity, entrepreneurial skills, content creation and the use of artificial intelligence.",
  ],

  /* The one-line thesis, straight from the preface. */
  thesis:
    "This book is not about becoming rich overnight. It is about learning how to make smart decisions, develop valuable skills, and think ahead.",

  /* How each chapter is built — the pattern the draft repeats. */
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

  /* Table of contents, as it currently stands in the draft. */
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

  /* Sample ideas the draft already commits to, quoted from its own
     “big lesson” lines. */
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
