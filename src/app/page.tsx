import Link from "next/link";
import { Hero } from "@/components/home/Hero";
import { Ticker } from "@/components/site/Ticker";
import { Reveal } from "@/components/ui/Reveal";
import { Glyph } from "@/components/ui/Glyph";
import { Plate, pl } from "@/components/ui/Plate";
import { Figure } from "@/components/ui/Figure";
import { GrowthCurve } from "@/components/data/GrowthCurve";
import { ArrowLink, Diamond, SectionHead } from "@/components/ui/primitives";
import { openingQuestions, pillars } from "@/content/site";
import { achievements, journey, passions } from "@/content/misc";
import { hallOfFame, photos } from "@/content/photos";

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
    kind: "Upcoming",
    title: "Millionaire Roadmap",
    body: "The sequel, still being written — money mindsets, how wealth actually grows, and what money looks like in a digital world.",
    href: "/upcoming-book",
    cta: "See what's coming",
  },
  {
    kind: "Essay",
    title: "The Mathematics of Compound Interest",
    body: "How exponential growth changes the way we think about money — and why our intuition about it is reliably wrong.",
    href: "/writing/the-mathematics-of-compound-interest",
    cta: "Read article",
  },
  {
    kind: "Essay",
    title: "Can Mathematics Help Us Understand Financial Markets?",
    body: "Probability, statistics, randomness — and the honest limits of modelling something that is made of people.",
    href: "/writing/can-mathematics-help-us-understand-financial-markets",
    cta: "Read article",
  },
];

const journeyCurve = journey.map((y) => ({
  label: y.year,
  sub: y.age.replace("Age ", ""),
  value: y.total,
}));
const journeyPlannedFrom = journey.findIndex((y) => y.state === "planned") - 1;

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

      {/* ══ § 04 — HALL OF FAME ════════════════════════════════ */}
      <section className="wrap pb-24 sm:pb-32">
        <SectionHead
          index="04"
          kicker="Hall of fame"
          title="Awards, and the people behind them"
          dek="Everything written on this site happened somewhere. These are the rooms it happened in — and there is a gallery underneath them."
        />

        <div className="mt-14 grid grid-cols-1 gap-x-6 gap-y-12 sm:mt-20 sm:grid-cols-2 lg:grid-cols-4">
          {hallOfFame.map((e, i) => (
            <Reveal key={e.n} delay={i * 0.06}>
              <Link href="/hall-of-fame" className="group block">
                {e.photo ? (
                  <Plate
                    photo={e.photo}
                    caption=""
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 46vw, 23vw"
                  />
                ) : (
                  <Figure ratio="3 / 4" caption="" />
                )}
                <div className="mt-4 flex items-baseline gap-3">
                  <span className="label-sm shrink-0 text-accent">{pl(i)}</span>
                  <span className="label-sm text-ink-25">
                    {e.role ?? e.kind}
                  </span>
                </div>
                <h3 className="display mt-2.5 text-[1.25rem] transition-colors duration-300 group-hover:text-accent">
                  <span className="link-rule">{e.title}</span>
                </h3>
              </Link>
            </Reveal>
          ))}
        </div>

        <div className="mt-12 flex flex-wrap gap-x-8 gap-y-4">
          <ArrowLink href="/hall-of-fame">Open the hall of fame</ArrowLink>
          <ArrowLink href="/hall-of-fame#gallery">See the gallery</ArrowLink>
        </div>
      </section>

      {/* ══ § 05 — ACHIEVEMENTS ════════════════════════════════ */}
      <section className="wrap pt-24 pb-24 sm:pt-32 sm:pb-32">
        <SectionHead
          index="05"
          kicker="The record"
          title="Achievements, kept honest"
          dek="Quality over quantity. Empty categories stay empty until there is something real to put in them."
        />

        <div className="mt-14 border-t border-[var(--rule)] sm:mt-20">
          {achievements.map((cat, i) => (
            <Reveal key={cat.category} delay={i * 0.04}>
              <div className="grid grid-cols-12 gap-x-6 gap-y-4 border-b border-[var(--rule)] py-8">
                <div className="col-span-12 flex items-baseline gap-4 md:col-span-3">
                  <h3 className="display text-[1.5rem]">{cat.category}</h3>
                  <span className="label-sm text-ink-25">
                    {cat.items.length
                      ? String(cat.items.length).padStart(2, "0")
                      : "—"}
                  </span>
                </div>
                <div className="col-span-12 md:col-span-9">
                  {cat.items.length ? (
                    <ul className="space-y-3">
                      {cat.items.map((it) => (
                        <li
                          key={it.t}
                          className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between sm:gap-8"
                        >
                          <p className="serif-body text-[1.0625rem]">
                            {it.t}
                            <span className="text-ink-45"> — {it.d}</span>
                          </p>
                          <span className="label-sm num shrink-0 text-ink-25">
                            {it.year}
                          </span>
                        </li>
                      ))}
                    </ul>
                  ) : (
                    <p className="serif-body display-italic text-[1rem] text-ink-45">
                      Nothing here yet — left empty rather than padded.
                    </p>
                  )}
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        <div className="mt-10">
          <ArrowLink href="/hall-of-fame">The full record</ArrowLink>
        </div>
      </section>

      {/* ══ § 06 — DIVING ══════════════════════════════════════ */}
      <section className="wrap pb-24 sm:pb-32">
        <SectionHead
          index="06"
          kicker="Passions"
          title={
            <>
              Away from the desk,{" "}
              <span className="display-italic text-ink-45">underwater.</span>
            </>
          }
        />

        <div className="mt-14 grid grid-cols-12 gap-x-6 gap-y-10 sm:mt-20">
          <div className="col-span-12 md:col-span-6 lg:col-span-5">
            <Reveal>
              <div className="flex items-center gap-4">
                <Glyph name={passions[0].glyph} className="shrink-0 text-accent" />
                <h3 className="display text-[clamp(1.6rem,3.6vw,2.25rem)]">
                  {passions[0].title}
                </h3>
              </div>
              <ul className="mt-7 flex flex-wrap gap-x-3 gap-y-3">
                {passions[0].certifications?.map((c) => (
                  <li
                    key={c}
                    className="label flex items-center gap-2.5 border border-[var(--rule-strong)] px-3.5 py-2.5 text-ink"
                  >
                    <Diamond className="text-accent" size={5} />
                    {c}
                  </li>
                ))}
              </ul>
              <p className="serif-body mt-8 max-w-[42ch] text-[1.0625rem] text-ink-70">
                {passions[0].paras[2]}
              </p>
              <div className="mt-8 flex flex-wrap gap-x-8 gap-y-4">
                <ArrowLink href="/beyond-finance#passions">
                  Read the whole thing
                </ArrowLink>
              </div>
            </Reveal>
          </div>

          <div className="col-span-12 grid grid-cols-2 gap-6 self-start md:col-span-6 lg:col-span-6 lg:col-start-7">
            <Reveal delay={0.06}>
              <Plate
                photo={photos.divingUnderwater}
                fig="Pl.&thinsp;01"
                sizes="(max-width: 768px) 46vw, 26vw"
              />
            </Reveal>
            <Reveal delay={0.12} className="mt-10">
              <Plate
                photo={photos.divingDockside}
                fig="Pl.&thinsp;02"
                sizes="(max-width: 768px) 46vw, 26vw"
              />
            </Reveal>
          </div>
        </div>
      </section>

      {/* ══ § 07 — JOURNEY ═════════════════════════════════════ */}
      <section className="wrap pb-24 sm:pb-32">
        <SectionHead
          index="07"
          kicker="2026 → 2029"
          title="My journey"
          dek="Six years, counted as milestones finished rather than a score invented for the chart. The last point is intent, not achievement."
        />

        <div className="mt-14 grid grid-cols-12 gap-x-6 gap-y-10 sm:mt-20">
          <div className="col-span-12 lg:col-span-7">
            <div className="border border-[var(--rule)] p-5 sm:p-7">
              <GrowthCurve
                points={journeyCurve}
                plannedFrom={journeyPlannedFrom}
              />
            </div>
            <p className="label-sm mt-3.5 flex items-baseline gap-3 text-ink-45">
              <span className="shrink-0 text-accent">Fig.&thinsp;01</span>
              <span className="leading-[1.7]">
                Milestones completed, cumulative, by year.
              </span>
            </p>
          </div>

          <ol className="col-span-12 self-start border-t border-[var(--rule)] lg:col-span-4 lg:col-start-9">
            {journey.map((y) => (
              <li
                key={y.year}
                className="flex items-baseline gap-4 border-b border-[var(--rule)] py-3.5"
              >
                <span className="label-sm num shrink-0 text-ink-25">
                  {y.year}
                </span>
                <span
                  className={`serif-body flex-1 text-[1rem] ${
                    y.state === "planned" ? "text-ink-45" : "text-ink-70"
                  }`}
                >
                  {y.title}
                </span>
                {y.state === "current" && (
                  <Diamond className="shrink-0 text-accent" size={5} />
                )}
                {y.state === "planned" && (
                  <span className="label-sm shrink-0 text-ink-25">Planned</span>
                )}
              </li>
            ))}
          </ol>
        </div>

        <div className="mt-10">
          <ArrowLink href="/journey">See the full timeline</ArrowLink>
        </div>
      </section>

      {/* ══ § 08 — THINGS I GOT WRONG ══════════════════════════ */}
      {/* <section className="wrap pb-24 sm:pb-32">
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
      </section> */}

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
