import Link from "next/link";
import { Hero } from "@/components/home/Hero";
import { Ticker } from "@/components/site/Ticker";
import { Reveal } from "@/components/ui/Reveal";
import { Glyph } from "@/components/ui/Glyph";
import { RandomWalk } from "@/components/data/RandomWalk";
import {
  ArrowLink,
  Button,
  Diamond,
  SectionHead,
} from "@/components/ui/primitives";
import { openingQuestions, pillars } from "@/content/site";
import { projects } from "@/content/projects";
import { researchMethod, entries } from "@/content/research";
import { learning, journey, errata, errataRule } from "@/content/misc";

const featured = [
  {
    kind: "Book",
    title: "The Millionaire Mindset",
    body: "My book introducing young readers to financial thinking, money habits, saving, investing and entrepreneurship.",
    href: "/book",
    cta: "Explore the book",
    invert: true,
  },
  {
    kind: "Podcast",
    title: "Money Matters with Darsh",
    body: "Conversations with entrepreneurs, investors, authors and business leaders about money, business and the decisions behind what they built.",
    href: "/podcast",
    cta: "Explore the podcast",
  },
  {
    kind: "Essay",
    title: "The Mathematics of Compound Interest",
    body: "How exponential growth changes the way we think about money — and why our intuition about it is reliably wrong.",
    href: "/writing/the-mathematics-of-compound-interest",
    cta: "Read article",
  },
  {
    kind: "Research",
    title: "Can Mathematics Help Us Understand Financial Markets?",
    body: "Probability, statistics, randomness — and the honest limits of modelling something that is made of people.",
    href: "/writing/can-mathematics-help-us-understand-financial-markets",
    cta: "Read research",
  },
];

export default function Home() {
  return (
    <>
      <Hero />
      <Ticker />

      {/* ══ § 01 — OPENING ═════════════════════════════════════ */}
      <section className="wrap pt-24 pb-24 sm:pt-32 sm:pb-32">
        <SectionHead
          index="01"
          kicker="Opening"
          title={
            <>
              Curious by nature.{" "}
              <span className="display-italic text-ink-45">
                Building by choice.
              </span>
            </>
          }
        />

        <div className="mt-14 grid grid-cols-12 gap-x-6 gap-y-10 sm:mt-20">
          <div className="col-span-12 md:col-span-3 lg:col-span-4">
            <Reveal>
              <p className="serif-body text-[1.0625rem] text-ink-70">
                I believe some of the most interesting learning begins with a
                question.
              </p>
              <p className="serif-body mt-5 text-[1.0625rem] text-ink-70">
                Instead of simply looking for answers, I want to learn how to
                investigate these questions myself. That means learning
                mathematics, finance, economics, programming and research — and
                then using them to build, test and explain ideas.
              </p>
            </Reveal>
          </div>

          <ol className="col-span-12 border-t border-[var(--rule)] md:col-span-9 md:col-start-4 lg:col-span-7 lg:col-start-6">
            {openingQuestions.map((q, i) => (
              <Reveal as="li" key={q.q} delay={i * 0.06}>
                <div className="row-hover group flex items-baseline gap-5 border-b border-[var(--rule)] py-6 sm:gap-7">
                  <span className="label-sm shrink-0 text-accent">
                    Q{i + 1}
                  </span>
                  <p className="display flex-1 text-[clamp(1.35rem,3.4vw,2rem)] transition-colors duration-300 group-hover:text-accent">
                    {q.q}
                  </p>
                  <span className="label-sm hidden shrink-0 text-ink-25 sm:block">
                    {q.field}
                  </span>
                </div>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      {/* ══ § 02 — FEATURED WORK ═══════════════════════════════ */}
      <section className="wrap pb-24 sm:pb-32">
        <SectionHead index="02" kicker="Selected" title="Featured work" />

        <div className="ledger mt-14 grid grid-cols-1 sm:mt-20 md:grid-cols-2">
          {featured.map((f, i) => (
            <div
              key={f.title}
              className={f.invert ? "inverted bg-navy graph-paper-inv" : ""}
            >
              <Reveal delay={i * 0.06} className="h-full">
                <Link
                  href={f.href}
                  className="group flex h-full flex-col justify-between gap-10 p-8 transition-colors duration-300 hover:bg-[rgba(20,22,26,0.03)] sm:p-10 lg:min-h-[22rem]"
                >
                  <div>
                    <span className="label flex items-center gap-2.5 text-accent">
                      <Diamond size={5} />
                      {f.kind}
                    </span>
                    <h3 className="display mt-7 max-w-[18ch] text-[clamp(1.6rem,3.4vw,2.25rem)]">
                      {f.title}
                    </h3>
                    <p className="serif-body mt-5 max-w-[42ch] text-[1.0625rem] text-ink-70">
                      {f.body}
                    </p>
                  </div>
                  <span className="label inline-flex items-center gap-2.5 text-ink">
                    <span className="link-rule">{f.cta}</span>
                    <svg
                      width="13"
                      height="9"
                      viewBox="0 0 13 9"
                      fill="none"
                      aria-hidden
                      className="arrow-slide"
                    >
                      <path
                        d="M0 4.5h11M8 1l3.5 3.5L8 8"
                        stroke="currentColor"
                        strokeWidth="1.1"
                      />
                    </svg>
                  </span>
                </Link>
              </Reveal>
            </div>
          ))}
        </div>
      </section>

      {/* ══ § 03 — PILLARS ═════════════════════════════════════ */}
      <section className="wrap pb-24 sm:pb-32">
        <SectionHead
          index="03"
          kicker="Four pillars"
          title="What I'm exploring"
          dek="Everything on this site fits into these. They overlap far more than the headings suggest, which is the part that interests me."
        />

        <div className="ledger mt-14 grid grid-cols-1 sm:mt-20 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
          {pillars.map((p, i) => (
            <Reveal key={p.key} delay={i * 0.05} className="h-full">
              <div className="flex h-full flex-col p-7 sm:p-8">
                <Glyph name={p.glyph} className="text-accent" />
                <h3 className="display mt-7 text-[1.5rem]">{p.title}</h3>
                <p className="serif-body display-italic mt-2.5 text-[0.9375rem] text-ink-45">
                  {p.note}
                </p>
                <ul className="mt-7 space-y-2.5 border-t border-[var(--rule)] pt-6">
                  {p.topics.map((t) => (
                    <li
                      key={t}
                      className="label-sm flex items-center gap-2.5 text-ink-70"
                    >
                      <span
                        aria-hidden
                        className="inline-block h-[3px] w-[3px] shrink-0 rotate-45 bg-ink-25"
                      />
                      {t}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ══ § 04 — PROJECTS ════════════════════════════════════ */}
      <section className="wrap pb-24 sm:pb-32">
        <SectionHead
          index="04"
          kicker="Built"
          title="I learn best by building."
          dek="Each project follows the same eight-part structure: the question, the idea, the mathematics, the code, the data, the results, what I learned, and what I'd do next."
        />

        <div className="mt-14 border-t border-[var(--rule)] sm:mt-20">
          {projects.map((p, i) => (
            <Reveal key={p.slug} delay={i * 0.05}>
              <Link
                href={`/projects/${p.slug}`}
                className="row-hover group grid grid-cols-12 items-baseline gap-x-4 gap-y-3 border-b border-[var(--rule)] py-7"
              >
                <span className="label col-span-2 text-accent md:col-span-1">
                  {p.index}
                </span>
                <div className="col-span-10 md:col-span-6">
                  <h3 className="display text-[clamp(1.4rem,3vw,1.85rem)]">
                    <span className="link-rule">{p.title}</span>
                  </h3>
                  <p className="serif-body mt-2 max-w-[44ch] text-[0.9375rem] text-ink-45">
                    {p.question}
                  </p>
                </div>
                <div className="col-span-12 hidden flex-wrap gap-x-3 gap-y-2 md:col-span-3 md:flex">
                  {p.disciplines.map((d) => (
                    <span key={d} className="label-sm text-ink-45">
                      {d}
                    </span>
                  ))}
                </div>
                <div className="col-span-12 flex items-center gap-3 md:col-span-2 md:justify-end">
                  <span
                    aria-hidden
                    className={`inline-block h-[5px] w-[5px] rotate-45 ${
                      p.status === "shipped"
                        ? "bg-accent"
                        : p.status === "building"
                          ? "bg-amber-2"
                          : "bg-ink-25"
                    }`}
                  />
                  <span className="label-sm text-ink-45">{p.status}</span>
                  <svg
                    width="13"
                    height="9"
                    viewBox="0 0 13 9"
                    fill="none"
                    aria-hidden
                    className="arrow-slide ml-1 text-ink-25 group-hover:text-ink"
                  >
                    <path
                      d="M0 4.5h11M8 1l3.5 3.5L8 8"
                      stroke="currentColor"
                      strokeWidth="1.1"
                    />
                  </svg>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>

        <div className="mt-10">
          <ArrowLink href="/projects">All projects</ArrowLink>
        </div>
      </section>

      {/* ══ § 05 — RESEARCH NOTEBOOK ═══════════════════════════ */}
      <section className="inverted relative overflow-hidden bg-navy">
        <RandomWalk className="fade-bottom pointer-events-none absolute inset-x-0 bottom-0 h-[32%] w-full" />
        <div className="wrap relative pt-24 pb-24 sm:pt-32 sm:pb-32">
          <SectionHead
            index="05"
            kicker="Notebook"
            title={
              <>
                Questions I&rsquo;m{" "}
                <span className="display-italic text-accent">
                  investigating.
                </span>
              </>
            }
            dek="This is where I document my curiosity. Every entry begins with a question and ends with the next one."
          />

          <ol className="ledger mt-14 grid grid-cols-3 sm:mt-20 xl:grid-cols-9">
            {researchMethod.map((s, i) => (
              <Reveal key={s.step} delay={i * 0.04} className="h-full">
                <li className="h-full p-4 sm:p-5">
                  <span className="label-sm text-accent">{s.step}</span>
                  <p className="mt-3.5 text-[0.9375rem] leading-tight text-paper">
                    {s.label}
                  </p>
                  <p className="serif-body mt-2 text-[0.8125rem] leading-snug text-ink-45">
                    {s.note}
                  </p>
                </li>
              </Reveal>
            ))}
          </ol>

          <div className="mt-16 grid grid-cols-12 gap-x-6 gap-y-12">
            <div className="col-span-12 lg:col-span-5">
              <Reveal>
                <p className="display max-w-[20ch] text-[clamp(1.6rem,3.6vw,2.4rem)]">
                  I&rsquo;m not trying to prove that I already know everything.{" "}
                  <span className="display-italic text-accent">
                    I&rsquo;m trying to show how I learn.
                  </span>
                </p>
                <div className="mt-9">
                  <Button href="/research" variant="solid-invert">
                    Visit the research notebook
                  </Button>
                </div>
              </Reveal>
            </div>

            <div className="col-span-12 border-t border-[var(--rule)] lg:col-span-6 lg:col-start-7">
              {entries.slice(0, 3).map((e, i) => (
                <Reveal key={e.slug} delay={i * 0.06}>
                  <Link
                    href={`/research/${e.slug}`}
                    className="row-hover group flex items-start gap-5 border-b border-[var(--rule)] py-5"
                  >
                    <span className="label-sm mt-[0.5em] shrink-0 text-accent">
                      {e.index}
                    </span>
                    <p className="serif-body flex-1 text-[1.0625rem] text-paper">
                      <span className="link-rule">{e.question}</span>
                    </p>
                    <span className="label-sm hidden shrink-0 text-ink-45 sm:block">
                      {e.status}
                    </span>
                  </Link>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ══ § 06 — LEARNING ════════════════════════════════════ */}
      <section className="wrap pt-24 pb-24 sm:pt-32 sm:pb-32">
        <SectionHead
          index="06"
          kicker="Living record"
          title="What I'm learning"
          dek="Only what I am genuinely working on. When something moves from 'next' to 'current', it is because it actually did."
        />

        <div className="mt-14 border-t border-[var(--rule)] sm:mt-20">
          {learning.map((l, i) => (
            <Reveal key={l.field} delay={i * 0.05}>
              <div className="grid grid-cols-12 gap-x-6 gap-y-5 border-b border-[var(--rule)] py-9">
                <div className="col-span-12 flex items-center gap-4 md:col-span-3">
                  <Glyph name={l.glyph} className="shrink-0 text-accent" />
                  <h3 className="display text-[1.5rem]">{l.field}</h3>
                </div>
                <div className="col-span-12 md:col-span-4">
                  <p className="label-sm mb-3.5 text-ink-25">Current</p>
                  <ul className="flex flex-wrap gap-2">
                    {l.current.map((c) => (
                      <li
                        key={c}
                        className="label-sm border border-[var(--rule-strong)] px-2.5 py-1.5 text-ink"
                      >
                        {c}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="col-span-12 md:col-span-5">
                  <p className="label-sm mb-3.5 text-ink-25">Exploring next</p>
                  <ul className="flex flex-wrap items-center gap-x-2 gap-y-2">
                    {l.next.map((c, j) => (
                      <li key={c} className="flex items-center gap-2">
                        {j > 0 && (
                          <span className="label-sm text-ink-25">&rarr;</span>
                        )}
                        <span className="label-sm text-ink-45">{c}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        <div className="mt-10">
          <ArrowLink href="/learning">See what I&rsquo;m learning</ArrowLink>
        </div>
      </section>

      {/* ══ § 07 — JOURNEY ═════════════════════════════════════ */}
      <section className="wrap pb-24 sm:pb-32">
        <SectionHead
          index="07"
          kicker="2026 → 2029"
          title="My journey"
          dek="Nothing here is pre-written. Future years describe intent, not achievement, and are updated only once something has actually happened."
        />

        <div className="ledger mt-14 grid grid-cols-1 sm:mt-20 sm:grid-cols-2 xl:grid-cols-4">
          {journey.map((y, i) => (
            <Reveal key={y.year} delay={i * 0.06} className="h-full">
              <div
                className={`flex h-full flex-col p-7 sm:p-8 ${
                  y.state === "current"
                    ? "border-t-2 border-t-accent bg-paper-2"
                    : ""
                }`}
              >
                <div className="flex items-baseline justify-between gap-3">
                  <span className="num display text-[2.5rem] leading-none">
                    {y.year}
                  </span>
                  <span
                    className={`label-sm ${
                      y.state === "current" ? "text-accent" : "text-ink-25"
                    }`}
                  >
                    {y.state === "current" ? "Now" : "Ahead"}
                  </span>
                </div>
                <p className="label mt-4 text-ink-45">{y.grade}</p>
                <p className="serif-body mt-5 text-[1rem] text-ink-70">
                  {y.headline}
                </p>
                <div className="mt-7 space-y-5 border-t border-[var(--rule)] pt-6">
                  {y.blocks.map((b) => (
                    <div key={b.label}>
                      <p className="label-sm mb-2.5 text-ink-25">{b.label}</p>
                      <p className="serif-body text-[0.9375rem] leading-relaxed text-ink-70">
                        {b.items.join(" · ")}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        <div className="mt-10">
          <ArrowLink href="/journey">See the full timeline</ArrowLink>
        </div>
      </section>

      {/* ══ § 08 — THINGS I GOT WRONG ══════════════════════════ */}
      <section className="wrap pb-24 sm:pb-32">
        <SectionHead
          index="08"
          kicker="Errata"
          title="Things I got wrong"
          dek={errataRule}
        />

        <div className="ledger mt-14 grid grid-cols-1 sm:mt-20 md:grid-cols-2">
          {errata.slice(0, 2).map((e, i) => (
            <Reveal key={e.n} delay={i * 0.06} className="h-full">
              <article className="flex h-full flex-col gap-6 p-8 sm:p-10">
                <div className="flex items-baseline justify-between">
                  <span className="label text-amber">Erratum {e.n}</span>
                  <span className="label-sm text-ink-25">{e.field}</span>
                </div>
                <p className="display text-[1.35rem] leading-snug">
                  {e.thought}
                </p>
                <div className="space-y-4 border-t border-[var(--rule)] pt-6">
                  <p className="serif-body text-[0.9375rem] text-ink-70">
                    <span className="label-sm mr-2 text-ink-25">Found</span>
                    {e.found}
                  </p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>

        <div className="mt-10">
          <ArrowLink href="/things-i-got-wrong">
            Everything I&rsquo;ve changed my mind about
          </ArrowLink>
        </div>
      </section>

      {/* ══ § 09 — THE BIGGER QUESTION ═════════════════════════ */}
      <section className="inverted graph-paper-inv bg-navy">
        <div className="wrap pt-24 pb-24 sm:pt-32 sm:pb-32">
          <SectionHead index="09" kicker="Closing" title="The bigger question" />
          <div className="mt-14 grid grid-cols-12 gap-x-6 gap-y-10 sm:mt-20">
            <div className="col-span-12 lg:col-span-8 lg:col-start-3">
              <Reveal>
                <p className="display text-[clamp(1.8rem,4.4vw,3rem)]">
                  I&rsquo;m interested in where mathematics, technology, finance
                  and human behaviour meet. For now, I&rsquo;m focused on
                  learning, building, researching and asking better questions.
                </p>
                <p className="display display-italic mt-10 text-[clamp(2rem,5.4vw,3.6rem)] text-accent">
                  One question at a time.
                </p>
              </Reveal>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
