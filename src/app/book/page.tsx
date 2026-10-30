import type { Metadata } from "next";
import { Reveal } from "@/components/ui/Reveal";
import { Plate } from "@/components/ui/Plate";
import {
  ArrowLink,
  Button,
  Diamond,
  PageHead,
  SectionHead,
  Tag,
} from "@/components/ui/primitives";
import { book } from "@/content/misc";
import { roadmap } from "@/content/roadmap";
import { photos } from "@/content/photos";

export const metadata: Metadata = {
  title: "The Books",
  description:
    "Two books on money for young readers — The Millionaire Mindset (2025) and its sequel Millionaire Roadmap, launched in October 2026.",
};

/** A fact is only listed once it is known; blanks are dropped, not guessed. */
function facts(rows: [string, string][]) {
  return rows.filter(([, v]) => Boolean(v));
}

export default function BookPage() {
  const chapterCount = roadmap.parts.reduce(
    (n, p) => n + p.chapters.length,
    0,
  );

  const roadmapFacts = facts([
    ["Title", roadmap.title],
    ["Follows", roadmap.sequelTo],
    ["Author", "Darsh Shhaparia"],
    ["Published", roadmap.published],
    ["Launched", `${roadmap.launch.date}, ${roadmap.launch.venue}`],
    ["Launched by", roadmap.launch.by],
    ["Readership", roadmap.readership],
    ["Structure", `4 parts · ${chapterCount} chapters`],
    ["Publisher", roadmap.edition.publisher],
    ["ISBN", roadmap.edition.isbn],
    ["Price", roadmap.edition.price],
  ]);

  return (
    <>
      <PageHead
        index="03"
        kicker="The books"
        title={
          <>
            Two books,{" "}
            <span className="display-italic text-accent">both finished.</span>
          </>
        }
        lede="One on how to think about money, one on how it actually grows. The second answers the question the first one leaves you with."
        aside={
          <div className="mt-10 flex flex-wrap gap-x-8 gap-y-4">
            <ArrowLink href="#roadmap">Millionaire Roadmap &middot; 2026</ArrowLink>
            <ArrowLink href="#mindset">
              The Millionaire Mindset &middot; 2025
            </ArrowLink>
          </div>
        }
      />

      {/* ══ § 01 — Millionaire Roadmap ═══════════════════════════ */}
      <section id="roadmap" className="wrap pt-20 pb-24 sm:pt-24 sm:pb-32">
        <SectionHead
          index="01"
          kicker="The second book"
          title={
            <>
              Millionaire{" "}
              <span className="display-italic text-accent">Roadmap</span>
            </>
          }
          dek={roadmap.blurb}
        />

        <div className="mt-14 grid grid-cols-12 gap-x-6 gap-y-14 sm:mt-20">
          <div className="col-span-12 lg:col-span-4">
            <div>
              <Plate
                photo={photos.roadmapPromoCover}
                fig="Pl.&thinsp;01"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 46vw, 32vw"
                maxH="max-h-[62vh]"
                className="mb-10"
              />

              <dl className="ledger grid grid-cols-1 border-t border-[var(--rule)]">
                {roadmapFacts.map(([k, v]) => (
                  <div key={k} className="p-5 sm:p-6">
                    <dt className="label-sm mb-3 text-ink-25">{k}</dt>
                    <dd className="serif-body text-[1.0625rem]">{v}</dd>
                  </div>
                ))}
              </dl>

              <p className="label-sm mt-6 flex items-start gap-2.5 leading-[1.8] text-ink-45">
                <Diamond className="mt-[3px] text-accent" size={5} />
                <span>
                  {roadmap.launch.award}. The evening was presented by{" "}
                  {roadmap.launch.host}.
                </span>
              </p>

              <div className="mt-7 flex flex-wrap items-center gap-x-3 gap-y-3">
                <Tag>Sequel to {roadmap.sequelTo}</Tag>
                <Tag>{roadmap.readership}</Tag>
              </div>
            </div>
          </div>

          <div className="col-span-12 lg:col-span-7 lg:col-start-6">
            <p className="label mb-7 text-accent">Why this one, next</p>
            {roadmap.premise.map((p, i) => (
              <p
                key={i}
                className="serif-body mb-6 max-w-[46ch] text-[1.125rem] text-ink-70 sm:text-[1.1875rem]"
              >
                {p}
              </p>
            ))}

            <blockquote className="mt-12 border-l border-accent pl-6">
              <p className="serif-body display-italic max-w-[34ch] text-[clamp(1.35rem,3.4vw,1.9rem)] text-ink">
                {roadmap.thesis}
              </p>
            </blockquote>

            <div className="mt-12 flex flex-wrap items-center gap-x-8 gap-y-4 border-t border-[var(--rule)] pt-8">
              {roadmap.edition.buyUrl ? (
                <Button href={roadmap.edition.buyUrl} external>
                  Buy Millionaire Roadmap
                </Button>
              ) : (
                <ArrowLink href="/contact">Ask where to buy it</ArrowLink>
              )}
              <ArrowLink href="/hall-of-fame">The launch, in photographs</ArrowLink>
            </div>
          </div>
        </div>
      </section>

      {/* ══ § 02 — Contents ══════════════════════════════════════ */}
      <section className="wrap pb-24 sm:pb-32">
        <SectionHead
          index="02"
          kicker="Contents"
          title="Four parts, one road"
          dek="The table of contents as printed — from the mindsets a family hands down, through the mechanics of how money grows, to what all of it looks like once it has moved onto a screen."
        />

        <div className="mt-14 border-t border-[var(--rule)] sm:mt-20">
          {roadmap.parts.map((part, i) => (
            <Reveal key={part.n} delay={i * 0.04}>
              <section className="grid grid-cols-12 gap-x-6 gap-y-7 border-b border-[var(--rule)] py-11">
                <header className="col-span-12 md:col-span-4 lg:col-span-3">
                  <div className="flex items-baseline gap-4">
                    <span className="label text-accent">
                      Part&thinsp;{part.n}
                    </span>
                  </div>
                  <h3 className="display mt-5 max-w-[14ch] text-[1.5rem] leading-snug">
                    {part.title}
                  </h3>
                  <p className="label-sm mt-3 text-ink-25">
                    {part.chapters.length} chapters
                  </p>
                </header>

                <ol className="col-span-12 md:col-span-8 lg:col-span-8 lg:col-start-5">
                  {part.chapters.map((c, j) => (
                    <li
                      key={c}
                      className="flex items-baseline gap-5 border-b border-[var(--rule)] py-4 last:border-b-0"
                    >
                      <span className="label-sm num shrink-0 text-ink-25">
                        {String(j + 1).padStart(2, "0")}
                      </span>
                      <span className="serif-body text-[1.0625rem]">{c}</span>
                    </li>
                  ))}
                </ol>
              </section>
            </Reveal>
          ))}
        </div>

        <div className="mt-12 flex flex-wrap items-center gap-x-4 gap-y-3">
          <span className="label text-ink-25">Plus</span>
          {roadmap.bonus.map((b) => (
            <Tag key={b}>{b}</Tag>
          ))}
        </div>
      </section>

      {/* ══ § 03 — Method ════════════════════════════════════════ */}
      <section className="inverted graph-paper-inv bg-navy">
        <div className="wrap pt-24 pb-24 sm:pt-32 sm:pb-32">
          <SectionHead
            index="03"
            kicker="Method"
            title={
              <>
                Every chapter is built{" "}
                <span className="display-italic text-accent">
                  the same way.
                </span>
              </>
            }
            dek="A story first, then the idea it was hiding. The pattern is deliberate: it is much easier to argue with a definition than with a situation you recognise."
          />

          <ol className="ledger mt-14 grid grid-cols-1 sm:mt-20 sm:grid-cols-2 lg:grid-cols-4">
            {roadmap.method.map((m, i) => (
              <Reveal key={m.n} delay={i * 0.05} className="h-full">
                <li className="flex h-full flex-col p-7 sm:p-8">
                  <span className="label text-accent">{m.n}</span>
                  <h3 className="display mt-6 text-[1.3rem] leading-snug">
                    {m.t}
                  </h3>
                  <p className="serif-body mt-4 text-[0.9375rem] text-ink-45">
                    {m.d}
                  </p>
                </li>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      {/* ══ § 04 — Three ideas from Roadmap ══════════════════════ */}
      <section className="wrap pt-24 pb-24 sm:pt-32 sm:pb-32">
        <SectionHead
          index="04"
          kicker="From the book"
          title="Three ideas it commits to"
          dek="Taken from the chapters' own closing lines — the sentence each one exists for."
        />

        <div className="mt-14 grid grid-cols-12 gap-x-6 gap-y-10 sm:mt-20">
          <div className="col-span-12 border-t border-[var(--rule)] lg:col-span-8 lg:col-start-3">
            {roadmap.lessons.map((l, i) => (
              <Reveal key={l.t} delay={i * 0.05}>
                <div className="flex flex-col gap-3 border-b border-[var(--rule)] py-8 sm:flex-row sm:gap-10">
                  <span className="label-sm shrink-0 pt-1.5 text-accent sm:w-16">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div>
                    <h3 className="display text-[clamp(1.3rem,3vw,1.7rem)]">
                      {l.t}
                    </h3>
                    <p className="serif-body mt-3 max-w-[52ch] text-[1rem] text-ink-70">
                      {l.d}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ══ § 05 — The Millionaire Mindset ═══════════════════════ */}
      <section
        id="mindset"
        className="wrap border-t border-[var(--rule)] pt-24 pb-24 sm:pt-32 sm:pb-32"
      >
        <SectionHead
          index="05"
          kicker="The first book"
          title={
            <>
              The Millionaire{" "}
              <span className="display-italic text-accent">Mindset</span>
            </>
          }
          dek={book.blurb}
        />

        <div className="mt-14 grid grid-cols-12 gap-x-6 gap-y-14 sm:mt-20">
          <div className="col-span-12 md:col-span-5 lg:col-span-4">
            <Plate
              photo={photos.bookCover}
              fig="Pl.&thinsp;02"
              caption="The Millionaire Mindset, first edition."
              sizes="(max-width: 768px) 100vw, 32vw"
            />
          </div>
          <div className="col-span-12 md:col-span-7 lg:col-span-7 lg:col-start-6">
            <dl className="ledger grid grid-cols-2">
              {[
                ["Title", book.title],
                ["Subtitle", book.subtitle],
                ["Author", "Darsh Shhaparia"],
                ["Published", book.published],
                ["Publisher", book.publisher],
                ["Readership", book.readership],
                ["ISBN", book.isbn],
                ["Price", book.price],
              ].map(([k, v]) => (
                <div key={k} className="p-5 sm:p-6">
                  <dt className="label-sm mb-3 text-ink-25">{k}</dt>
                  <dd className="serif-body text-[1.0625rem]">{v}</dd>
                </div>
              ))}
            </dl>

            <div className="mt-10">
              <p className="label mb-5 text-accent">Why I wrote it</p>
              {book.why.map((p, i) => (
                <p
                  key={i}
                  className="serif-body mb-5 max-w-[46ch] text-[1.0625rem] text-ink-70"
                >
                  {p}
                </p>
              ))}
            </div>

            <div className="mt-9 border-t border-[var(--rule)] pt-8">
              <Button href={book.amazonUrl} external>
                Buy on Amazon
              </Button>
              <p className="label-sm mt-4 flex items-start gap-2.5 leading-[1.7] text-ink-45">
                <Diamond className="mt-[3px] text-accent" size={5} />
                <span>
                  {book.title}: {book.subtitle} &mdash; {book.price}, paperback.
                </span>
              </p>
              <div className="mt-8 flex flex-wrap items-center gap-x-8 gap-y-4">
                <ArrowLink href="/writing">
                  Read the writing that followed
                </ArrowLink>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══ § 06 — Key concepts ══════════════════════════════════ */}
      <section className="wrap pb-24 sm:pb-32">
        <SectionHead
          index="06"
          kicker="Inside"
          title="Key concepts"
          dek="Six ideas the first book is built around. Each one is a habit of thinking rather than a piece of advice."
        />
        <ol className="ledger mt-14 grid grid-cols-1 sm:mt-20 sm:grid-cols-2 lg:grid-cols-3">
          {book.concepts.map((c, i) => (
            <Reveal key={c.n} delay={i * 0.05} className="h-full">
              <li className="flex h-full flex-col p-7 sm:p-8">
                <span className="label text-accent">{c.n}</span>
                <h3 className="display mt-6 text-[1.35rem] leading-snug">
                  {c.t}
                </h3>
                <p className="serif-body mt-4 text-[0.9375rem] text-ink-45">
                  {c.d}
                </p>
              </li>
            </Reveal>
          ))}
        </ol>
      </section>

      {/* ══ § 07 — What writing taught me ════════════════════════ */}
      <section className="inverted graph-paper-inv bg-navy">
        <div className="wrap pt-24 pb-24 sm:pt-32 sm:pb-32">
          <SectionHead
            index="07"
            kicker="Reflection"
            title={
              <>
                What writing a book{" "}
                <span className="display-italic text-accent">taught me.</span>
              </>
            }
          />
          <div className="mt-14 grid grid-cols-12 gap-x-6 gap-y-10 sm:mt-20">
            <div className="col-span-12 border-t border-[var(--rule)] lg:col-span-8 lg:col-start-3">
              {book.lessons.map((l, i) => (
                <Reveal key={l.t} delay={i * 0.05}>
                  <div className="flex flex-col gap-3 border-b border-[var(--rule)] py-8 sm:flex-row sm:gap-10">
                    <span className="label-sm shrink-0 pt-1.5 text-accent sm:w-16">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <div>
                      <h3 className="display text-[clamp(1.3rem,3vw,1.7rem)]">
                        {l.t}
                      </h3>
                      <p className="serif-body mt-3 max-w-[52ch] text-[1rem] text-ink-70">
                        {l.d}
                      </p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ══ § 08 — Behind the books ══════════════════════════════ */}
      <section className="wrap pt-24 pb-24 sm:pt-32 sm:pb-32">
        <SectionHead
          index="08"
          kicker="Behind the books"
          title="Idea to finished object"
          dek="The publishing journey, in the order it actually happened."
        />

        <ol className="mt-14 flex flex-wrap items-center gap-x-4 gap-y-4 sm:mt-20">
          {book.journeySteps.map((s, i) => (
            <li key={s} className="flex items-center gap-4">
              {i > 0 && <span className="label-sm text-ink-25">&rarr;</span>}
              <span className="label flex items-center gap-2.5 border border-[var(--rule-strong)] px-4 py-3">
                {i === 0 && <Diamond className="text-accent" size={5} />}
                {s}
              </span>
            </li>
          ))}
        </ol>

        <div className="mt-16 grid grid-cols-12 gap-x-6 gap-y-12">
          <div className="col-span-12 lg:col-span-8">
            <Plate
              photo={photos.bookCoverSpread}
              fig="Pl.&thinsp;03"
              caption="The full wrap — back cover, spine and front, as printed."
              sizes="(max-width: 1024px) 100vw, 64vw"
            />
          </div>
          <div className="col-span-12 sm:col-span-6 lg:col-span-4">
            <Plate
              photo={photos.authorWithBook}
              fig="Pl.&thinsp;04"
              caption="With the first printed copy."
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 46vw, 32vw"
            />
          </div>
        </div>

        <div className="mt-16 border-t border-[var(--rule)] pt-10">
          <p className="serif-body display-italic max-w-[34ch] text-[clamp(1.35rem,3.4vw,1.9rem)]">
            The first book proved I could finish one. The second proved somebody
            was reading.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-x-8 gap-y-4">
            <ArrowLink href="/hall-of-fame">
              See the rest of the photographs
            </ArrowLink>
            <ArrowLink href="/journey">How both books got written</ArrowLink>
          </div>
        </div>
      </section>
    </>
  );
}
