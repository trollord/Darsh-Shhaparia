import type { Metadata } from "next";
import { Reveal } from "@/components/ui/Reveal";
import { GrowthCurve } from "@/components/data/GrowthCurve";
import {
  ArrowLink,
  Diamond,
  PageHead,
  SectionHead,
} from "@/components/ui/primitives";
import { journey, journeyRule } from "@/content/misc";

export const metadata: Metadata = {
  title: "My Journey",
  description:
    "2022 to 2027 — from first learning about finance at ten, to two books, teaching Grades 5 and 6, and what comes next. A timeline of what actually happened.",
};

const curve = journey.map((y) => ({
  label: y.year,
  sub: y.age.replace("Age ", ""),
  value: y.total,
}));

const plannedFrom = journey.findIndex((y) => y.state === "planned") - 1;

export default function JourneyPage() {
  const first = journey[0];
  const last = journey[journey.length - 1];

  return (
    <>
      <PageHead
        index="02"
        kicker={`${first.year} → ${last.year}`}
        title={
          <>
            My <span className="display-italic text-accent">journey.</span>
          </>
        }
        lede={journeyRule}
      />

      {/* ══ The curve ════════════════════════════════════════════ */}
      <section className="wrap pt-20 pb-20 sm:pt-24 sm:pb-24">
        <div className="grid grid-cols-12 gap-x-6 gap-y-10">
          <div className="col-span-12 lg:col-span-3">
            <p className="label mb-5 text-accent">The curve</p>
            <p className="serif-body max-w-[34ch] text-[1.0625rem] text-ink-70">
              Six years, plotted as the number of milestones finished rather
              than a score invented for the chart. Every unit on the vertical
              axis is one of the entries listed below it.
            </p>
            <p className="label-sm mt-6 flex items-start gap-2.5 leading-[1.8] text-ink-45">
              <Diamond className="mt-[3px] text-accent" size={5} />
              <span>
                The line is nearly flat for four years and then steps. That is
                the honest shape of it — the early years were input, and input
                does not show up on a chart until much later.
              </span>
            </p>
          </div>

          <div className="col-span-12 lg:col-span-8 lg:col-start-5">
            <div className="border border-[var(--rule)] p-5 sm:p-8">
              <GrowthCurve points={curve} plannedFrom={plannedFrom} />
            </div>
            <p className="label-sm mt-3.5 flex items-baseline gap-3 text-ink-45">
              <span className="shrink-0 text-accent">Fig.&thinsp;01</span>
              <span className="leading-[1.7]">
                Milestones completed, cumulative, by year. The hollow point and
                broken line are {last.year} — planned, not done.
              </span>
            </p>
          </div>
        </div>
      </section>

      {/* ══ The timeline ═════════════════════════════════════════ */}
      <section className="wrap pb-24 sm:pb-32">
        <SectionHead
          index="01"
          kicker="Key moments"
          title="Year by year"
          dek="The same six points, in words. Each year explains what actually changed, not what it looked like from outside."
        />

        <ol className="mt-14 border-t border-[var(--rule)] sm:mt-20">
          {journey.map((y, i) => (
            <Reveal key={y.year} delay={i * 0.04}>
              <li className="grid grid-cols-12 gap-x-6 gap-y-5 border-b border-[var(--rule)] py-9 sm:py-11">
                {/* Spine */}
                <div className="col-span-12 md:col-span-3 lg:col-span-2">
                  <div className="flex items-baseline gap-3">
                    <span
                      className={`display num text-[1.75rem] leading-none ${
                        y.state === "planned" ? "text-ink-25" : "text-ink"
                      }`}
                    >
                      {y.year}
                    </span>
                    {y.state === "current" && (
                      <Diamond className="text-accent" size={5} />
                    )}
                  </div>
                  <p className="label-sm mt-2.5 text-ink-25">{y.age}</p>
                  <p className="label mt-4 text-accent">{y.title}</p>
                  {y.state === "planned" && (
                    <p className="label-sm mt-3 text-ink-25">Planned</p>
                  )}
                </div>

                {/* Body */}
                <div className="col-span-12 md:col-span-9 lg:col-span-7 lg:col-start-4">
                  <h3 className="display max-w-[24ch] text-[clamp(1.25rem,2.8vw,1.6rem)] leading-snug">
                    {y.headline}
                  </h3>
                  <p className="serif-body mt-4 max-w-[54ch] text-[1rem] text-ink-70">
                    {y.detail}
                  </p>
                </div>

                {/* Marks */}
                <ul className="col-span-12 lg:col-span-3 lg:col-start-11">
                  {y.marks.map((m) => (
                    <li
                      key={m}
                      className="label-sm flex items-start gap-2.5 border-t border-[var(--rule)] py-2.5 leading-[1.7] text-ink-45 first:border-t-0 first:pt-0 lg:first:border-t lg:first:pt-2.5"
                    >
                      <Diamond
                        className={`mt-[6px] ${
                          y.state === "planned" ? "text-ink-25" : "text-accent"
                        }`}
                        size={4}
                      />
                      <span>{m}</span>
                    </li>
                  ))}
                </ul>
              </li>
            </Reveal>
          ))}
        </ol>

        <div className="mt-14 grid grid-cols-12 gap-x-6">
          <div className="col-span-12 lg:col-span-8 lg:col-start-4">
            <p className="serif-body display-italic max-w-[34ch] text-[clamp(1.35rem,3.4vw,1.9rem)]">
              Never pre-write achievements. The timeline should document
              reality.
            </p>
            <div className="mt-8 flex flex-wrap gap-x-8 gap-y-4">
              <ArrowLink href="/hall-of-fame">The record to date</ArrowLink>
              <ArrowLink href="/things-i-got-wrong">
                And what I got wrong
              </ArrowLink>
              <ArrowLink href="/beyond-finance">Life beyond finance</ArrowLink>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
