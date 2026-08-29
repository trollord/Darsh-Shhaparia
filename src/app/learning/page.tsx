import type { Metadata } from "next";
import { Reveal } from "@/components/ui/Reveal";
import { Glyph } from "@/components/ui/Glyph";
import { ArrowLink, PageHead } from "@/components/ui/primitives";
import { learning, learningRule } from "@/content/misc";

export const metadata: Metadata = {
  title: "What I'm Learning",
  description:
    "A living record of academic development across mathematics, finance, programming and economics — current work and what comes next.",
};

export default function LearningPage() {
  return (
    <>
      <PageHead
        index="07"
        kicker="Living record"
        title={
          <>
            What I&rsquo;m{" "}
            <span className="display-italic text-accent">learning.</span>
          </>
        }
        lede={learningRule}
      />

      <section className="wrap pt-20 pb-24 sm:pt-24 sm:pb-32">
        <div className="border-t border-[var(--rule)]">
          {learning.map((l, i) => (
            <Reveal key={l.field} delay={i * 0.05}>
              <article className="grid grid-cols-12 gap-x-6 gap-y-8 border-b border-[var(--rule)] py-12 sm:py-14">
                <header className="col-span-12 md:col-span-3">
                  <Glyph name={l.glyph} className="text-accent" />
                  <h2 className="display mt-5 text-[clamp(1.6rem,3.4vw,2.1rem)]">
                    {l.field}
                  </h2>
                </header>

                <div className="col-span-12 md:col-span-4">
                  <p className="label-sm mb-4 text-accent">Current</p>
                  <ul className="space-y-2.5">
                    {l.current.map((c) => (
                      <li
                        key={c}
                        className="serif-body flex items-baseline gap-3 text-[1.0625rem]"
                      >
                        <span
                          aria-hidden
                          className="inline-block h-[5px] w-[5px] shrink-0 rotate-45 bg-accent"
                        />
                        {c}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="col-span-12 md:col-span-5">
                  <p className="label-sm mb-4 text-ink-25">Exploring next</p>
                  <ol className="space-y-2.5">
                    {l.next.map((c, j) => (
                      <li
                        key={c}
                        className="serif-body flex items-baseline gap-3 text-[1.0625rem] text-ink-45"
                      >
                        <span className="label-sm w-5 shrink-0 text-ink-25">
                          {String(j + 1).padStart(2, "0")}
                        </span>
                        {c}
                      </li>
                    ))}
                  </ol>
                  <p className="serif-body display-italic mt-6 max-w-[40ch] border-t border-[var(--rule)] pt-5 text-[0.9375rem] text-ink-45">
                    {l.note}
                  </p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>

        <div className="mt-14 grid grid-cols-12 gap-x-6">
          <div className="col-span-12 lg:col-span-8 lg:col-start-4">
            <p className="serif-body display-italic max-w-[36ch] text-[clamp(1.35rem,3.4vw,1.9rem)]">
              This page will look wrong within a year. That is the point of
              publishing it.
            </p>
            <div className="mt-8 flex flex-wrap gap-x-8 gap-y-4">
              <ArrowLink href="/journey">See the timeline</ArrowLink>
              <ArrowLink href="/projects">See what it produced</ArrowLink>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
