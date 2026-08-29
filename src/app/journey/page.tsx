import type { Metadata } from "next";
import { Reveal } from "@/components/ui/Reveal";
import { ArrowLink, PageHead } from "@/components/ui/primitives";
import { journey, journeyRule } from "@/content/misc";

export const metadata: Metadata = {
  title: "Journey",
  description:
    "Grade 9 to Grade 12 — a timeline that documents what actually happened, updated as it happens.",
};

export default function JourneyPage() {
  return (
    <>
      <PageHead
        index="08"
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
    </>
  );
}
