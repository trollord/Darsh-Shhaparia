import type { Metadata } from "next";
import { Reveal } from "@/components/ui/Reveal";
import {
  ArrowLink,
  Diamond,
  PageHead,
  SectionHead,
  Tag,
} from "@/components/ui/primitives";
import { upcoming } from "@/content/upcoming";

export const metadata: Metadata = {
  title: "Millionaire Roadmap — the upcoming book",
  description: upcoming.blurb,
};

export default function UpcomingBookPage() {
  const chapterCount = upcoming.parts.reduce(
    (n, p) => n + p.chapters.length,
    0,
  );

  return (
    <>
      <PageHead
        index="04"
        kicker="Upcoming"
        title={
          <>
            Millionaire{" "}
            <span className="display-italic text-accent">Roadmap</span>
          </>
        }
        lede={upcoming.blurb}
        aside={
          <div className="mt-10 flex flex-wrap items-center gap-x-3 gap-y-3">
            <span className="label flex items-center gap-2.5 border border-[var(--rule-strong)] px-4 py-3 text-ink">
              <Diamond className="text-accent" size={5} />
              {upcoming.status}
            </span>
            <Tag>Sequel to {upcoming.sequelTo}</Tag>
            <Tag>{upcoming.readership}</Tag>
          </div>
        }
      />

      {/* ══ The premise ══════════════════════════════════════════ */}
      <section className="wrap pt-20 pb-24 sm:pt-24 sm:pb-32">
        <div className="grid grid-cols-12 gap-x-6 gap-y-14">
          <div className="col-span-12 lg:col-span-4">
            <div className="lg:sticky lg:top-28">
              <p className="label mb-6 text-ink-25">The book, so far</p>
              <dl className="ledger grid grid-cols-1 border-t border-[var(--rule)]">
                {[
                  ["Title", upcoming.title],
                  ["Follows", upcoming.sequelTo],
                  ["Author", "Darsh Shhaparia"],
                  ["Status", upcoming.status],
                  ["Publication", upcoming.expected],
                  ["Readership", upcoming.readership],
                  ["Structure", `4 parts · ${chapterCount} chapters`],
                ].map(([k, v]) => (
                  <div key={k} className="p-5 sm:p-6">
                    <dt className="label-sm mb-3 text-ink-25">{k}</dt>
                    <dd className="serif-body text-[1.0625rem]">{v}</dd>
                  </div>
                ))}
              </dl>
              <p className="label-sm mt-6 flex items-start gap-2.5 leading-[1.8] text-ink-45">
                <Diamond className="mt-[3px] text-accent" size={5} />
                <span>
                  A date goes here once there is one. Nothing on this page is
                  announced before it is true.
                </span>
              </p>
            </div>
          </div>

          <div className="col-span-12 lg:col-span-7 lg:col-start-6">
            <p className="label mb-7 text-accent">Why this one, next</p>
            {upcoming.premise.map((p, i) => (
              <p
                key={i}
                className="serif-body mb-6 max-w-[46ch] text-[1.125rem] text-ink-70 sm:text-[1.1875rem]"
              >
                {p}
              </p>
            ))}

            <blockquote className="mt-12 border-l border-accent pl-6">
              <p className="serif-body display-italic max-w-[34ch] text-[clamp(1.35rem,3.4vw,1.9rem)] text-ink">
                {upcoming.thesis}
              </p>
            </blockquote>

            <div className="mt-12 flex flex-wrap items-center gap-x-8 gap-y-4 border-t border-[var(--rule)] pt-8">
              <ArrowLink href="/book">Start with the first book</ArrowLink>
              <ArrowLink href="/contact">Ask about the new one</ArrowLink>
            </div>
          </div>
        </div>
      </section>

      {/* ══ Contents ═════════════════════════════════════════════ */}
      <section className="wrap pb-24 sm:pb-32">
        <SectionHead
          index="01"
          kicker="Contents"
          title="Four parts, one road"
          dek="The table of contents as the manuscript currently stands. Chapters move and merge while a book is being written — this is the shape it has today, not a promise about the printed edition."
        />

        <div className="mt-14 border-t border-[var(--rule)] sm:mt-20">
          {upcoming.parts.map((part, i) => (
            <Reveal key={part.n} delay={i * 0.04}>
              <section className="grid grid-cols-12 gap-x-6 gap-y-7 border-b border-[var(--rule)] py-11">
                <header className="col-span-12 md:col-span-4 lg:col-span-3">
                  <div className="flex items-baseline gap-4">
                    <span className="label text-accent">Part&thinsp;{part.n}</span>
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
          {upcoming.bonus.map((b) => (
            <Tag key={b}>{b}</Tag>
          ))}
        </div>
      </section>

      {/* ══ How a chapter is built ═══════════════════════════════ */}
      <section className="inverted graph-paper-inv bg-navy">
        <div className="wrap pt-24 pb-24 sm:pt-32 sm:pb-32">
          <SectionHead
            index="02"
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
            {upcoming.method.map((m, i) => (
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

      {/* ══ Three ideas from the draft ═══════════════════════════ */}
      <section className="wrap pt-24 pb-24 sm:pt-32 sm:pb-32">
        <SectionHead
          index="03"
          kicker="From the draft"
          title="Three ideas it already commits to"
          dek="Taken from chapters that are written. If any of them change before publication, this page changes with them."
        />

        <div className="mt-14 grid grid-cols-12 gap-x-6 gap-y-10 sm:mt-20">
          <div className="col-span-12 border-t border-[var(--rule)] lg:col-span-8 lg:col-start-3">
            {upcoming.lessons.map((l, i) => (
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

        <div className="mt-16 border-t border-[var(--rule)] pt-10">
          <p className="serif-body display-italic max-w-[34ch] text-[clamp(1.35rem,3.4vw,1.9rem)]">
            A book that is still being written is the most honest thing on a
            website. This page will keep changing.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-x-8 gap-y-4">
            <ArrowLink href="/book">The first book</ArrowLink>
          </div>
        </div>
      </section>
    </>
  );
}
