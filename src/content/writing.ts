export type Status = "published" | "drafting" | "planned";

export type Category =
  | "Finance"
  | "Mathematics"
  | "Technology"
  | "Psychology of Money"
  | "Business & Economics";

export type Article = {
  slug: string;
  title: string;
  category: Category;
  status: Status;
  date?: string;
  readingTime?: string;
  dek?: string;
  /** Body is plain paragraphs; strings starting with "## " render as subheads,
   *  "> " as pull quotes, "$$ " as display equations, "— " as list items. */
  body?: string[];
};

export const categories: Category[] = [
  "Finance",
  "Mathematics",
  "Technology",
  "Psychology of Money",
  "Business & Economics",
];

export const editorialRule =
  "Don't write fifty shallow articles. Write ten genuinely good ones.";

export const articles: Article[] = [
  {
    slug: "the-mathematics-of-compound-interest",
    title: "The Mathematics of Compound Interest",
    category: "Mathematics",
    status: "published",
    date: "2026-02-14",
    readingTime: "7 min",
    dek: "An exploration of how exponential growth changes the way we think about money — and why our intuition about it is reliably wrong.",
    body: [
      "The first time I saw the compound interest formula, I did what most people do: I memorised it, used it to answer a question, and moved on. It was only later — when I tried to guess an answer before calculating it — that I realised I had no intuition for it at all. My guess was not slightly wrong. It was wrong by a factor of three.",
      "That gap between what I expected and what the arithmetic produced is the reason this is the first thing I wanted to write about.",
      "## The formula, and what each part is doing",
      "The standard expression for compound growth is:",
      "$$ A = P(1 + r/n)^{nt}",
      "Here P is the principal — what you start with. r is the annual rate. n is how many times a year interest is applied. t is the number of years. A is what you end up with.",
      "The interesting part is not the formula. It is where t sits. It is in the exponent. Everything else — how much you start with, what rate you earn — sits in the base. Doubling P doubles A. Doubling t does something far less polite.",
      "## Why our intuition fails",
      "Human beings are good at estimating straight lines. Given the first two points of a linear sequence, most people can extend it accurately. Given the first two points of an exponential sequence, most people badly underestimate the fifth.",
      "Try it. ₹10,000 growing at 8% a year. After 1 year it is ₹10,800 — a change small enough to feel unimpressive. After 30 years it is a little over ₹1,00,000. The money did not become ten times more interesting at some particular moment. It grew at exactly the same rate the whole way. What changed was how long it had been growing.",
      "> The rate is what you notice. The time is what actually does the work.",
      "## The rule of 72, and why it is a good approximation",
      "A useful shortcut: divide 72 by the annual percentage rate and you get roughly the number of years it takes to double.",
      "$$ t_{double} ≈ 72 / r",
      "At 8%, that is 9 years. At 6%, 12 years. At 12%, 6 years. The approximation comes from taking logarithms of the doubling condition — ln(2) ≈ 0.693, and 69.3 is close enough to 72 that the arithmetic becomes something you can do in your head. 72 is chosen over 69 because it divides cleanly by more numbers.",
      "What I find genuinely interesting is what this implies about the *difference* between rates. Going from 6% to 8% does not sound like much. But it moves the doubling time from 12 years to 9. Over a 36-year horizon, that is three doublings versus four — the difference between 8× and 16×.",
      "## Continuous compounding",
      "If you increase n — compounding monthly, then daily, then hourly — the result does not run away. It converges:",
      "$$ lim_{n→∞} (1 + r/n)^{n} = e^{r}",
      "This was the moment the topic stopped being about money for me. The number e is not a finance concept. It appears here because the structure of the problem — a quantity growing in proportion to its own size — is the same structure that appears in population growth, in radioactive decay, in how a rumour spreads. Compound interest is one instance of a much more general shape.",
      "## What I take away from it",
      "Three things.",
      "— Time is the dominant variable, and it is the one you cannot buy back later.",
      "— Small differences in rate compound into large differences in outcome, which is an argument for caring about costs and fees far more than most people do.",
      "— The formula is not really about money. It is about a shape that appears wherever growth is proportional to size.",
      "I built a small calculator alongside this piece so I could see the curve move as I changed the inputs. Reading the formula taught me the notation. Watching the curve taught me the behaviour.",
    ],
  },
  {
    slug: "can-mathematics-help-us-understand-financial-markets",
    title: "Can Mathematics Help Us Understand Financial Markets?",
    category: "Mathematics",
    status: "published",
    date: "2026-03-08",
    readingTime: "9 min",
    dek: "An exploration of probability, statistics, randomness — and the honest limits of modelling something that is made of people.",
    body: [
      "This started as a question I asked without expecting a complicated answer: if mathematics describes physics so well, why does it seem to describe markets so badly?",
      "I am not qualified to settle that. But I read enough to understand why the question is harder than it looks, and I want to write down what I found while it is still fresh.",
      "## Where mathematics clearly helps",
      "Some things about markets are genuinely quantitative, and treating them as such works.",
      "— Diversification. If you hold two assets whose returns are not perfectly correlated, the variance of the combined portfolio is lower than the weighted average of the individual variances. That is not an opinion. It falls directly out of the algebra of variance.",
      "— Expected value. If you can estimate the probabilities and the payoffs, you can compare two decisions on a common scale, even when one of them feels more exciting.",
      "— Position sizing. How much of your capital you put into one idea has a mathematically describable effect on your risk of ruin.",
      "None of this predicts prices. All of it changes decisions.",
      "## The random walk idea",
      "One influential model treats price changes as approximately random and independent — a random walk. Tomorrow's change carries no reliable information from today's.",
      "$$ P_{t+1} = P_{t} + ε_{t}",
      "If that were exactly true, then patterns in a price chart would be no more meaningful than shapes in clouds. Our brains are extremely good at finding structure in noise, which is precisely the problem.",
      "I generated random walks in Python and looked at them without labels. Several of them had 'clear trends', 'support levels', and what looked like a head-and-shoulders pattern. They were generated by a random number generator. That experiment did more to change my thinking than anything I read.",
      "> If I cannot tell a random series from a real one by eye, then 'it looks like a pattern' is not evidence.",
      "## Where the mathematics gets uncomfortable",
      "The convenient version of the model assumes returns are normally distributed. Real returns are not. Extreme days happen far more often than a normal distribution predicts — the tails are fatter.",
      "This matters enormously, because a model that assigns a probability of roughly never to an event that happens once a decade will underestimate risk exactly when it counts. The mathematics is not wrong; the assumption fed into it is.",
      "There is also the reflexivity problem. A model of a planet does not change the planet. A model of a market, used widely enough, changes the market. The thing being measured reacts to the measurement.",
      "## My provisional answer",
      "Mathematics helps with structure, not with prophecy. It is very good at telling you how risk combines, what a decision is worth on average, and how confident you are entitled to be. It is much worse at telling you what happens next.",
      "That is a less satisfying answer than I wanted when I started. It is also, I think, the correct one, and I would rather hold a correct uncomfortable answer than a tidy wrong one.",
      "## What I want to investigate next",
      "— How much of observed market behaviour survives when you correct for multiple testing and survivorship bias.",
      "— Whether the fat tails are better described by a specific distribution or simply by admitting we do not know.",
      "— What practitioners actually do with these models, as opposed to what textbooks say they do.",
    ],
  },
  {
    slug: "why-do-investors-panic",
    title: "Why Do Investors Panic?",
    category: "Psychology of Money",
    status: "published",
    date: "2026-04-02",
    readingTime: "6 min",
    dek: "Loss aversion, herd behaviour, and why the most expensive mistakes in investing are not analytical.",
    body: [
      "The strange thing about market panics is that the arithmetic does not change during them. A company's factories, contracts and customers are the same on the day the price falls 20% as they were the day before. What changes is what people believe other people are about to do.",
      "## Losses hurt roughly twice as much as gains feel good",
      "Kahneman and Tversky's work on prospect theory found something that sounds obvious once stated and is deeply strange once you think about it: the pain of losing ₹1,000 is roughly twice the pleasure of gaining ₹1,000.",
      "This asymmetry is not irrational in every context. For most of human history, a loss of resources could be fatal in a way that an equivalent gain was not transformative. Being loss-averse was good survival design. It is simply badly matched to a situation where the correct response to a falling price is often to do nothing.",
      "> The bias is not a defect. It is a good rule applied in the wrong environment.",
      "## The information cascade",
      "The second mechanism is social. If I have a weak private opinion and I observe many people acting on a strong one, it is individually rational for me to update towards them. If everyone does this, the group can converge on a conclusion that almost nobody had independent evidence for.",
      "The uncomfortable part is that each individual step is reasonable. The cascade is not a failure of any one person's thinking.",
      "## Why 'just be rational' is not a strategy",
      "The advice usually given is to stay calm. I do not think this works, because the whole point of the bias is that it operates faster than deliberation.",
      "What seems to work better is removing the decision from the moment. Deciding in advance what you will do — and writing it down — moves the choice out of the panic and into a calmer context. This is the same reason a pilot uses a checklist rather than judgement during an emergency.",
      "## What I changed my mind about",
      "I used to think of these biases as things other people had. Then I noticed I check things more often when they are falling than when they are rising, which is exactly the behaviour I was describing as irrational in others.",
      "I have written that one down in Things I Got Wrong.",
    ],
  },
  {
    slug: "i-built-a-compound-interest-calculator",
    title: "I Built a Compound Interest Calculator",
    category: "Technology",
    status: "published",
    date: "2026-05-19",
    readingTime: "5 min",
    dek: "My first real Python project, what broke, and why building something is a different kind of understanding than reading about it.",
    body: [
      "I had already written about compound interest. I understood the formula well enough to explain it. Building the calculator still taught me things reading did not.",
      "## The first version was wrong",
      "My first attempt handled a lump sum correctly and monthly contributions incorrectly. I was adding the contribution at the end of each year and then applying a year of growth to it, which quietly gave every contribution a free extra year of compounding.",
      "The bug did not announce itself. The numbers looked plausible. I only found it because I checked a simple case by hand — ₹1,000 a month for one year at 0% should be exactly ₹12,000, and mine said ₹12,000 as well, which is why 0% was a bad test. At 10% the discrepancy showed up.",
      "> A test that passes for the wrong reason is worse than no test.",
      "## What the corrected version looks like",
      "The future value of a series of regular contributions is its own formula, and adding it to the lump-sum term gives the full answer:",
      "$$ A = P(1+i)^{N} + C · [(1+i)^{N} − 1] / i",
      "where i is the periodic rate and N is the number of periods. Deriving that second term — it is a geometric series — was the part I actually learned from.",
      "## Things I picked up that had nothing to do with finance",
      "— Floating point arithmetic will not give you exact currency values, and you should not pretend it does.",
      "— Naming variables after what they mean rather than what they are makes bugs visible.",
      "— Plotting the output caught an error that reading the output did not. The curve had a kink in it that no reasonable growth curve should have.",
      "## Why I think building matters",
      "When you read about an idea, you get to skip the parts you do not understand. When you implement it, the computer does not let you. Every ambiguity in your understanding becomes a decision you have to make explicitly.",
      "That is the argument for the research notebook on this site. It is not a portfolio of impressive things. It is a record of ideas I was forced to understand properly.",
    ],
  },

  // ——— Pipeline ———
  { slug: "what-determines-a-stocks-price", title: "What Actually Determines a Stock's Price?", category: "Finance", status: "drafting" },
  { slug: "what-is-market-capitalization", title: "What Is Market Capitalization?", category: "Finance", status: "drafting" },
  { slug: "how-do-banks-make-money", title: "How Do Banks Make Money?", category: "Finance", status: "planned" },
  { slug: "what-is-a-bond", title: "What Is a Bond?", category: "Finance", status: "planned" },
  { slug: "risk-vs-return-explained", title: "Risk vs. Return, Explained", category: "Finance", status: "drafting" },
  { slug: "why-do-companies-go-public", title: "Why Do Companies Go Public?", category: "Finance", status: "planned" },

  { slug: "why-exponential-growth-is-powerful", title: "Why Exponential Growth Is So Powerful", category: "Mathematics", status: "drafting" },
  { slug: "understanding-expected-value", title: "Understanding Expected Value", category: "Mathematics", status: "drafting" },
  { slug: "probability-and-financial-decisions", title: "Probability and Financial Decisions", category: "Mathematics", status: "planned" },
  { slug: "what-is-a-random-walk", title: "What Is a Random Walk?", category: "Mathematics", status: "planned" },
  { slug: "how-statistics-is-used-in-finance", title: "How Statistics Is Used in Finance", category: "Mathematics", status: "planned" },

  { slug: "my-first-python-finance-project", title: "My First Python Finance Project", category: "Technology", status: "drafting" },
  { slug: "what-is-financial-data-analysis", title: "What Is Financial Data Analysis?", category: "Technology", status: "planned" },
  { slug: "how-can-python-help-us-understand-markets", title: "How Can Python Help Us Understand Markets?", category: "Technology", status: "planned" },

  { slug: "why-do-people-fear-losing-money", title: "Why Do People Fear Losing Money?", category: "Psychology of Money", status: "drafting" },
  { slug: "what-is-confirmation-bias", title: "What Is Confirmation Bias?", category: "Psychology of Money", status: "planned" },
  { slug: "why-is-delayed-gratification-difficult", title: "Why Is Delayed Gratification Difficult?", category: "Psychology of Money", status: "planned" },

  { slug: "how-does-a-company-make-money", title: "How Does a Company Actually Make Money?", category: "Business & Economics", status: "drafting" },
  { slug: "revenue-vs-profit", title: "Revenue vs. Profit", category: "Business & Economics", status: "planned" },
  { slug: "what-is-a-competitive-advantage", title: "What Is a Competitive Advantage?", category: "Business & Economics", status: "planned" },
  { slug: "how-does-inflation-affect-consumers", title: "How Does Inflation Affect Consumers?", category: "Business & Economics", status: "planned" },
];

export const publishedArticles = articles.filter((a) => a.status === "published");

export function getArticle(slug: string) {
  return articles.find((a) => a.slug === slug);
}
