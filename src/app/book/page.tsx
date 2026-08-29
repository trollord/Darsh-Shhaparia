import type { Metadata } from "next";
import { Reveal } from "@/components/ui/Reveal";
import { Figure } from "@/components/ui/Figure";
import {
  ArrowLink,
  Diamond,
  PageHead,
  SectionHead,
} from "@/components/ui/primitives";
import { book } from "@/content/misc";

export const metadata: Metadata = {
  title: "The Millionaire Mindset",
  description: book.blurb,
};

export default function BookPage() {
  return (
    <>
      <PageHead
        index="03"
        kicker="The book"
        title={
          <>
            The Millionaire{" "}
            <span className="display-italic text-accent">Mindset</span>
          </>
        }
        lede={book.blurb}
      />

      {/* Object + facts */}
      <section className="wrap pt-20 pb-24 sm:pt-24 sm:pb-32">
        <div className="grid grid-cols-12 gap-x-6 gap-y-14">
          <div className="col-span-12 md:col-span-5 lg:col-span-4">
            <Figure
              caption="The Millionaire Mindset, first edition."
              fig="Pl.&thinsp;01"
              ratio="3 / 4"
            />
          </div>
          <div className="col-span-12 md:col-span-7 lg:col-span-7 lg:col-start-6">
            <dl className="ledger grid grid-cols-2">
              {[
                ["Title", book.title],
                ["Published", book.published],
                ["Author", "Darsh Shhaparia"],
                ["Readership", "Young readers, 11+"],
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

            <div className="mt-9 flex flex-wrap items-center gap-x-8 gap-y-4 border-t border-[var(--rule)] pt-8">
              <ArrowLink href="/contact">Where to find the book</ArrowLink>
              <ArrowLink href="/writing">Read the writing that followed</ArrowLink>
            </div>
          </div>
        </div>
      </section>

      {/* Key concepts */}
      <section className="wrap pb-24 sm:pb-32">
        <SectionHead
          index="01"
          kicker="Inside"
          title="Key concepts"
          dek="Six ideas the book is built around. Each one is a habit of thinking rather than a piece of advice."
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

      {/* What writing taught me — the section that makes this a journey,
          not a product page. */}
      <section className="inverted graph-paper-inv bg-navy">
        <div className="wrap pt-24 pb-24 sm:pt-32 sm:pb-32">
          <SectionHead
            index="02"
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

      {/* Behind the book */}
      <section className="wrap pt-24 pb-24 sm:pt-32 sm:pb-32">
        <SectionHead
          index="03"
          kicker="Behind the book"
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

        <div className="mt-16 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
          <Figure
            caption="Early notes and outline, 2024."
            fig="Pl.&thinsp;02"
            ratio="4 / 3"
          />
          <Figure
            caption="Chapter drafts with edits."
            fig="Pl.&thinsp;03"
            ratio="4 / 3"
          />
          <Figure
            caption="First printed copy."
            fig="Pl.&thinsp;04"
            ratio="4 / 3"
          />
        </div>

        <div className="mt-16 border-t border-[var(--rule)] pt-10">
          <p className="label mb-5 text-ink-25">Reader feedback</p>
          <p className="serif-body max-w-[46ch] text-[1.0625rem] text-ink-70">
            Quotes from readers will be added here as they come in — real ones
            only, attributed. Nothing invented to fill the space.
          </p>
        </div>
      </section>
    </>
  );
}
