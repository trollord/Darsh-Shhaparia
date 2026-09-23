import type { Metadata } from "next";
import { Reveal } from "@/components/ui/Reveal";
import { Plate, pl } from "@/components/ui/Plate";
import { Glyph } from "@/components/ui/Glyph";
import {
  ArrowLink,
  Diamond,
  PageHead,
  SectionHead,
} from "@/components/ui/primitives";
import { passions, passionsRule } from "@/content/misc";
import { photos, schoolPhotos } from "@/content/photos";

export const metadata: Metadata = {
  title: "Beyond Finance",
  description:
    "School, scuba diving, swimming and history — the parts of the week that are not about markets, and what each of them changed about how I think.",
};

const [diving, ...otherPassions] = passions;

export default function BeyondFinancePage() {
  return (
    <>
      <PageHead
        index="08"
        kicker="Beyond finance"
        title={
          <>
            The rest of{" "}
            <span className="display-italic text-accent">the week.</span>
          </>
        }
        lede="Most of my life is not spent thinking about money. School, the water and a lot of history take up far more of it — and each one has changed how I think about something else on this site."
        aside={
          <div className="mt-10 flex flex-wrap gap-x-8 gap-y-4">
            <ArrowLink href="#school">School</ArrowLink>
            <ArrowLink href="#passions">Away from the desk</ArrowLink>
          </div>
        }
      />

      {/* ══ § 01 — School ════════════════════════════════════════ */}
      <section id="school" className="wrap pt-20 pb-24 sm:pt-24 sm:pb-32">
        <SectionHead
          index="01"
          kicker="School"
          title="Where most of the week actually goes"
          dek="Grade 9, and the ordinary days that do not make it onto any of the other pages on this site."
        />

        {schoolPhotos.length ? (
          <div className="mt-14 gap-6 sm:mt-20 sm:columns-2 lg:columns-3">
            {schoolPhotos.map((p, i) => (
              <Reveal
                key={p.src}
                delay={(i % 3) * 0.06}
                className="mb-10 block break-inside-avoid"
              >
                <Plate
                  photo={p}
                  fig={pl(i)}
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 46vw, 30vw"
                />
              </Reveal>
            ))}
          </div>
        ) : (
          <div className="mt-14 grid grid-cols-12 gap-x-6 sm:mt-20">
            <div className="col-span-12 lg:col-span-8 lg:col-start-3">
              <p className="serif-body display-italic max-w-[40ch] border-t border-dashed border-[var(--rule-strong)] pt-7 text-[1.0625rem] text-ink-45">
                The school photographs go here. This section stays empty rather
                than being filled with something borrowed — the same rule as the
                rest of the site.
              </p>
            </div>
          </div>
        )}
      </section>

      {/* ══ § 02 — Away from the desk ════════════════════════════
             The column of scuba diving, and what sits either side. */}
      <section id="passions" className="inverted graph-paper-inv bg-navy">
        <div className="wrap pt-24 pb-24 sm:pt-32 sm:pb-32">
          <SectionHead
            index="02"
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
            <ArrowLink href="/journey" tone="paper">
              Where this sits on the timeline
            </ArrowLink>
          </div>
        </div>
      </section>

      {/* ══ § 03 — Closing ═══════════════════════════════════════ */}
      <section className="wrap pt-24 pb-24 sm:pt-32 sm:pb-32">
        <div className="grid grid-cols-12 gap-x-6">
          <div className="col-span-12 lg:col-span-8 lg:col-start-3">
            <p className="label-sm mb-8 flex items-start gap-2.5 leading-[1.85] text-ink-45">
              <Diamond className="mt-[3px] text-accent" size={5} />
              <span>
                The Rescue course is about noticing a small problem early,
                because underwater a small problem does not stay small. That is
                a better description of financial risk than most of the
                definitions I had read.
              </span>
            </p>
            <p className="serif-body display-italic max-w-[34ch] text-[clamp(1.35rem,3.4vw,1.9rem)]">
              None of this is on the site to look well-rounded. Each one
              actually changed something.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-x-8 gap-y-4">
              <ArrowLink href="/about">The long version of who this is</ArrowLink>
              <ArrowLink href="/hall-of-fame">The written record</ArrowLink>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
