import type { Metadata } from "next";
import { Reveal } from "@/components/ui/Reveal";
import { Glyph } from "@/components/ui/Glyph";
import { Plate } from "@/components/ui/Plate";
import {
  ArrowLink,
  Diamond,
  PageHead,
  SectionHead,
} from "@/components/ui/primitives";
import { journey, journeyRule, passions, passionsRule } from "@/content/misc";
import { photos } from "@/content/photos";

export const metadata: Metadata = {
  title: "My Journey",
  description:
    "Grade 9 to Grade 12 — a timeline that documents what actually happened, plus the passions outside it: scuba diving, swimming, geopolitics and history.",
};

const [diving, ...otherPassions] = passions;

export default function JourneyPage() {
  return (
    <>
      <PageHead
        index="02"
        kicker="2026 → 2029"
        title={
          <>
            My <span className="display-italic text-accent">journey.</span>
          </>
        }
        lede={journeyRule}
      />

      <section className="wrap pt-20 pb-24 sm:pt-24 sm:pb-32">
        <div className="border-t border-[var(--rule)]">
          {journey.map((y, i) => (
            <Reveal key={y.year} delay={i * 0.05}>
              <article className="grid grid-cols-12 gap-x-6 gap-y-8 border-b border-[var(--rule)] py-14 sm:py-16">
                {/* Year marker */}
                <header className="col-span-12 md:col-span-3">
                  <div className="md:sticky md:top-28">
                    <div className="flex items-baseline gap-4">
                      <span
                        className={`num display text-[clamp(2.75rem,7vw,4.25rem)] leading-none ${
                          y.state === "current" ? "text-ink" : "text-ink-25"
                        }`}
                      >
                        {y.year}
                      </span>
                      {y.state === "current" && (
                        <span
                          aria-hidden
                          className="inline-block h-[7px] w-[7px] rotate-45 bg-accent"
                        />
                      )}
                    </div>
                    <p className="label mt-4 text-ink-45">{y.grade}</p>
                    <p
                      className={`label-sm mt-3 ${
                        y.state === "current" ? "text-accent" : "text-ink-25"
                      }`}
                    >
                      {y.state === "current" ? "In progress" : "Not yet written"}
                    </p>
                  </div>
                </header>

                <div className="col-span-12 md:col-span-9 lg:col-span-8 lg:col-start-5">
                  <p className="display max-w-[24ch] text-[clamp(1.5rem,3.6vw,2.1rem)]">
                    {y.headline}
                  </p>

                  <dl className="mt-10 border-t border-[var(--rule)]">
                    {y.blocks.map((b) => (
                      <div
                        key={b.label}
                        className="grid grid-cols-12 gap-x-6 gap-y-3 border-b border-[var(--rule)] py-6"
                      >
                        <dt className="label-sm col-span-12 pt-1 text-ink-25 sm:col-span-3">
                          {b.label}
                        </dt>
                        <dd className="col-span-12 sm:col-span-9">
                          <ul className="flex flex-wrap gap-x-2.5 gap-y-2.5">
                            {b.items.map((it) => (
                              <li
                                key={it}
                                className={`label-sm border px-2.5 py-1.5 ${
                                  y.state === "current"
                                    ? "border-[var(--rule-strong)] text-ink-70"
                                    : "border-[var(--rule)] text-ink-45"
                                }`}
                              >
                                {it}
                              </li>
                            ))}
                          </ul>
                        </dd>
                      </div>
                    ))}
                  </dl>
                </div>
              </article>
            </Reveal>
          ))}
        </div>

        <div className="mt-14 grid grid-cols-12 gap-x-6">
          <div className="col-span-12 lg:col-span-8 lg:col-start-5">
            <p className="serif-body display-italic max-w-[34ch] text-[clamp(1.35rem,3.4vw,1.9rem)]">
              Never pre-write achievements. The timeline should document
              reality.
            </p>
            <div className="mt-8 flex flex-wrap gap-x-8 gap-y-4">
              <ArrowLink href="/achievements">Achievements to date</ArrowLink>
              <ArrowLink href="/things-i-got-wrong">
                And what I got wrong
              </ArrowLink>
            </div>
          </div>
        </div>
      </section>

      {/* ══ Passions — the column of scuba diving, and what sits
             either side of it. ══════════════════════════════════ */}
      <section
        id="passions"
        className="inverted graph-paper-inv bg-navy"
      >
        <div className="wrap pt-24 pb-24 sm:pt-32 sm:pb-32">
          <SectionHead
            index="01"
            kicker="Passions"
            title={
              <>
                What I do{" "}
                <span className="display-italic text-accent">
                  away from the desk.
                </span>
              </>
            }
            dek={passionsRule}
          />

          {/* — The diving column — */}
          <div className="mt-14 grid grid-cols-12 gap-x-6 gap-y-12 sm:mt-20">
            <div className="col-span-12 lg:col-span-5">
              <Reveal>
                <div className="flex items-center gap-4">
                  <Glyph name={diving.glyph} className="shrink-0 text-accent" />
                  <h3 className="display text-[clamp(1.9rem,4.6vw,2.8rem)]">
                    {diving.title}
                  </h3>
                </div>

                <p className="serif-body display-italic mt-5 text-[1.1875rem] text-accent">
                  {diving.lede}
                </p>

                <ul className="mt-8 flex flex-wrap gap-x-3 gap-y-3">
                  {diving.certifications?.map((c) => (
                    <li
                      key={c}
                      className="label flex items-center gap-2.5 border border-[var(--rule-strong)] px-3.5 py-2.5 text-paper"
                    >
                      <Diamond className="text-accent" size={5} />
                      {c}
                    </li>
                  ))}
                </ul>

                <div className="mt-9 max-w-[46ch]">
                  {diving.paras.map((p, i) => (
                    <p
                      key={i}
                      className="serif-body mb-5 text-[1.0625rem] text-ink-70"
                    >
                      {p}
                    </p>
                  ))}
                </div>

                {diving.facts && (
                  <dl className="mt-8 border-t border-[var(--rule)]">
                    {diving.facts.map((f) => (
                      <div
                        key={f.k}
                        className="grid grid-cols-12 gap-x-4 gap-y-1.5 border-b border-[var(--rule)] py-4"
                      >
                        <dt className="label-sm col-span-12 pt-1 text-ink-25 sm:col-span-4">
                          {f.k}
                        </dt>
                        <dd className="serif-body col-span-12 text-[0.9375rem] text-ink-70 sm:col-span-8">
                          {f.v}
                        </dd>
                      </div>
                    ))}
                  </dl>
                )}
              </Reveal>
            </div>

            <div className="col-span-12 grid grid-cols-2 gap-6 self-start lg:col-span-6 lg:col-start-7">
              <Reveal delay={0.06}>
                <Plate
                  photo={photos.divingDockside}
                  fig="Pl.&thinsp;01"
                  sizes="(max-width: 1024px) 46vw, 26vw"
                />
              </Reveal>
              <Reveal delay={0.12} className="mt-10">
                <Plate
                  photo={photos.divingUnderwater}
                  fig="Pl.&thinsp;02"
                  sizes="(max-width: 1024px) 46vw, 26vw"
                />
              </Reveal>
            </div>
          </div>

          {/* — The columns either side of it — */}
          <div className="ledger mt-20 grid grid-cols-1 sm:grid-cols-2">
            {otherPassions.map((p, i) => (
              <Reveal key={p.key} delay={i * 0.06} className="h-full">
                <div className="flex h-full flex-col p-7 sm:p-9">
                  <Glyph name={p.glyph} className="text-accent" />
                  <h3 className="display mt-7 text-[1.5rem]">{p.title}</h3>
                  <p className="serif-body display-italic mt-2.5 text-[0.9375rem] text-ink-45">
                    {p.lede}
                  </p>
                  <div className="mt-7 max-w-[44ch] border-t border-[var(--rule)] pt-6">
                    {p.paras.map((para, j) => (
                      <p
                        key={j}
                        className="serif-body mb-4 text-[1rem] text-ink-70"
                      >
                        {para}
                      </p>
                    ))}
                  </div>
                </div>
              </Reveal>
            ))}
          </div>

          <div className="mt-14 flex flex-wrap gap-x-8 gap-y-4">
            <ArrowLink href="/hall-of-fame#gallery" tone="paper">
              More photographs in the gallery
            </ArrowLink>
          </div>
        </div>
      </section>
    </>
  );
}
