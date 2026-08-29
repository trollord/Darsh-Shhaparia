export type ProjectStatus = "shipped" | "building" | "planned";

export type Project = {
  slug: string;
  index: string;
  title: string;
  question: string;
  summary: string;
  disciplines: string[];
  stack: string[];
  status: ProjectStatus;
  year: string;
  /** The eight-part structure every project on this site follows. */
  sections?: {
    idea: string[];
    mathematics: { text: string[]; equation?: string; equationNote?: string };
    code: { text: string[]; snippet?: { lang: string; lines: string[] } };
    data: string[];
    results: string[];
    learned: string[];
    next: string[];
  };
};

export const projectMethod = [
  { key: "question", label: "The Question", note: "What am I trying to understand?" },
  { key: "idea", label: "The Idea", note: "What is the underlying concept?" },
  { key: "mathematics", label: "The Mathematics", note: "What equations are involved?" },
  { key: "code", label: "The Code", note: "How did I implement it?" },
  { key: "data", label: "The Data", note: "What information did I use?" },
  { key: "results", label: "The Results", note: "What did I find?" },
  { key: "learned", label: "What I Learned", note: "What changed in my understanding?" },
  { key: "next", label: "What I'd Do Next", note: "How could this become better?" },
];

export const projects: Project[] = [
  {
    slug: "compound-interest-calculator",
    index: "01",
    title: "Compound Interest Calculator",
    question: "How do capital, contributions, time and rate actually interact?",
    summary:
      "A mathematical exploration of how initial capital, regular contributions, time and returns combine — and of how badly intuition estimates the result.",
    disciplines: ["Mathematics", "Finance"],
    stack: ["Python", "Matplotlib"],
    status: "shipped",
    year: "2026",
    sections: {
      idea: [
        "Compound growth is the first idea in finance where the arithmetic and the intuition disagree, and they disagree by a lot. I wanted a tool where I could change one variable at a time and watch what happened to the curve, because reading the formula had not given me any feel for it.",
        "The underlying concept is simple to state: growth that is proportional to current size. The consequence — that time enters as an exponent while everything else enters as a coefficient — is not simple to feel.",
      ],
      mathematics: {
        text: [
          "The full model has two terms. The first is the lump sum compounding on its own. The second is the future value of an annuity — a regular contribution, each instalment of which compounds for a different length of time.",
          "That second term is a geometric series. Deriving it rather than looking it up was the part of the project that taught me the most, because it explains why the numerator is (1+i)^N − 1 rather than something that looks more symmetric.",
        ],
        equation: "A = P(1+i)^{N} + C · [ (1+i)^{N} − 1 ] / i",
        equationNote:
          "i = periodic rate (r/n), N = number of periods (n·t), C = contribution per period.",
      },
      code: {
        text: [
          "The implementation is deliberately plain. It builds the full period-by-period series rather than jumping straight to the closed form, so that the closed form can be checked against it. Two independent routes to the same number is the cheapest test available.",
        ],
        snippet: {
          lang: "python",
          lines: [
            "def series(principal, contribution, annual_rate, years, n=12):",
            '    """Period-by-period balance. Kept separate from the',
            '    closed form so the two can be checked against each other."""',
            "    i = annual_rate / n",
            "    balance = principal",
            "    out = [balance]",
            "    for _ in range(years * n):",
            "        balance = balance * (1 + i) + contribution",
            "        out.append(balance)",
            "    return out",
          ],
        },
      },
      data: [
        "No external data. The inputs are chosen by the user, which makes this a model rather than a study — a distinction I did not think about carefully enough at first.",
        "For the default view I use ₹10,000 initial, ₹1,000 monthly, and a range of rates between 2% and 16%, because that range covers roughly what savings accounts through to long-run equity returns have historically looked like.",
      ],
      results: [
        "At 8% over 30 years, ₹10,000 plus ₹1,000 a month becomes roughly ₹15 lakh, of which about ₹3.7 lakh is money that was put in and the rest is growth. The contributed amount is the smaller number, which is the entire point.",
        "Moving the rate from 6% to 8% — a difference that sounds marginal — increases the 30-year total by more than 40%. Moving the horizon from 20 years to 30 roughly doubles it.",
      ],
      learned: [
        "That the horizon matters more than the rate, and the rate matters more than the starting amount. Before this, I would have ordered those three the other way round.",
        "That a test which passes for the wrong reason is worse than no test. My first version was wrong and my first test used a 0% rate, which is exactly the case where the bug disappears.",
        "That plotting output catches errors that reading output does not.",
      ],
      next: [
        "Add inflation, so the result is expressed in today's purchasing power rather than nominal rupees. A number that looks large in 2056 may not be.",
        "Add taxes and fees, which are the mechanism by which the rate quietly drops.",
        "Replace the single fixed rate with a distribution of returns, which is what the Monte Carlo project is for.",
      ],
    },
  },
  {
    slug: "portfolio-risk-simulator",
    index: "02",
    title: "Portfolio Risk Simulator",
    question: "What does diversification actually do to risk, numerically?",
    summary:
      "An educational simulation exploring how portfolio returns, volatility and drawdowns respond to weights and correlation.",
    disciplines: ["Finance", "Statistics"],
    stack: ["Python", "NumPy", "pandas"],
    status: "building",
    year: "2026",
  },
  {
    slug: "risk-vs-return",
    index: "03",
    title: "Risk vs. Return",
    question: "Is higher risk actually compensated with higher return?",
    summary:
      "A data-driven investigation into the relationship between historical volatility and historical return across asset classes.",
    disciplines: ["Finance", "Statistics"],
    stack: ["Python", "pandas", "Matplotlib"],
    status: "building",
    year: "2026",
  },
  {
    slug: "monte-carlo-simulation",
    index: "04",
    title: "Monte Carlo Simulation",
    question: "What does a range of possible outcomes look like, instead of one?",
    summary:
      "An exploration of probability and uncertainty through thousands of simulated financial paths, and of why a single projection is misleading.",
    disciplines: ["Probability", "Finance"],
    stack: ["Python", "NumPy"],
    status: "planned",
    year: "2026",
  },
];

export function getProject(slug: string) {
  return projects.find((p) => p.slug === slug);
}
