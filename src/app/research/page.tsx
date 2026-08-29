import type { Metadata } from "next";
import Link from "next/link";
import { Reveal } from "@/components/ui/Reveal";
import { PageHead, SectionHead } from "@/components/ui/primitives";
import { entries, researchMethod } from "@/content/research";

export const metadata: Metadata = {
  title: "Research Notebook",
  description:
    "A record of questions, hypotheses, methods, data and conclusions — including the ones that did not work out.",
};

const statusTone: Record<string, string> = {
  complete: "bg-accent",
  "in-progress": "bg-amber-2",
  open: "bg-ink-25",
};

export default function ResearchPage() {
  return (
    <>
      <PageHead
        index="06"
        kicker="Research notebook"
        title={
          <>
            A record of{" "}
            <span className="display-italic text-accent">how I learn.</span>
          </>
        }
        lede="Every entry begins with a question and ends with the next one. The limitations section is not an afterthought — it is the part that decides whether the rest of it counts."
      />

      {/* The protocol */}
      <section className="inverted graph-paper-inv bg-navy">
        <div className="wrap py-20 sm:py-24">
          <div className="mb-10 flex items-center gap-4">
            <span className="label text-accent">Protocol</span>
            <span className="h-px flex-1 bg-[var(--rule)]" />
          </div>
          <ol className="ledger grid grid-cols-3 xl:grid-cols-9">
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
        </div>
      </section>

      {/* Entries */}
      <section className="wrap pt-24 pb-24 sm:pt-32 sm:pb-32">
        <SectionHead
          index="01"
          kicker="Entries"
          title="Open questions"
          dek="Listed oldest question first. Nothing is removed once it is opened, including the ones that turned out badly."
        />

        <div className="mt-14 border-t border-[var(--rule)] sm:mt-20">
          {entries.map((e, i) => (
            <Reveal key={e.slug} delay={i * 0.05}>
              <Link
                href={`/research/${e.slug}`}
                className="row-hover group grid grid-cols-12 items-baseline gap-x-6 gap-y-4 border-b border-[var(--rule)] py-9"
              >
                <span className="label col-span-3 mt-[0.55em] text-accent md:col-span-1">
                  {e.index}
                </span>
                <div className="col-span-9 md:col-span-7">
                  <h2 className="display text-[clamp(1.4rem,3.2vw,2rem)]">
                    <span className="link-rule">{e.question}</span>
                  </h2>
                  <p className="serif-body mt-3 max-w-[52ch] text-[1rem] text-ink-45">
                    {e.summary}
                  </p>
                </div>
                <div className="col-span-12 flex flex-wrap items-center gap-x-5 gap-y-2 md:col-span-4 md:justify-end">
                  <span className="label-sm text-ink-45">{e.field}</span>
                  <span className="label-sm num text-ink-25">{e.opened}</span>
                  <span className="label-sm flex items-center gap-2 text-ink-70">
                    <span
                      aria-hidden
                      className={`inline-block h-[5px] w-[5px] rotate-45 ${statusTone[e.status]}`}
                    />
                    {e.status}
                  </span>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>

        <p className="serif-body display-italic mt-16 max-w-[34ch] text-[clamp(1.35rem,3.4vw,1.9rem)]">
          I&rsquo;m not trying to prove that I already know everything.
          I&rsquo;m trying to show how I learn.
        </p>
      </section>
    </>
  );
}
