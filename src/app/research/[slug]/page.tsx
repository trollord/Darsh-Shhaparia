import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLink, Diamond } from "@/components/ui/primitives";
import { entries, getEntry } from "@/content/research";

type Params = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return entries.map((e) => ({ slug: e.slug }));
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { slug } = await params;
  const e = getEntry(slug);
  if (!e) return {};
  return { title: e.question, description: e.summary };
}

const ORDER = [
  ["02", "Hypothesis", "hypothesis"],
  ["03", "Method", "method"],
  ["04", "Data", "data"],
  ["05", "Analysis", "analysis"],
  ["06", "Results", "results"],
  ["07", "Limitations", "limitations"],
  ["08", "Conclusion", "conclusion"],
  ["09", "Next Question", "next"],
] as const;

export default async function EntryPage({ params }: Params) {
  const { slug } = await params;
  const e = getEntry(slug);
  if (!e) notFound();

  return (
    <>
      <header className="graph-paper fade-bottom border-b border-[var(--rule)]">
        <div className="wrap pt-32 pb-16 sm:pt-40 sm:pb-20">
          <Link
            href="/research"
            className="label group mb-12 inline-flex items-center gap-2.5 text-ink-45 transition-colors hover:text-ink"
          >
            <svg width="13" height="9" viewBox="0 0 13 9" fill="none" aria-hidden>
              <path
                d="M13 4.5H2M5 1L1.5 4.5L5 8"
                stroke="currentColor"
                strokeWidth="1.1"
              />
            </svg>
            <span className="link-rule">Research notebook</span>
          </Link>

          <div className="mb-8 flex flex-wrap items-center gap-x-4 gap-y-2">
            <span className="label flex items-center gap-2.5 text-accent">
              <Diamond size={5} />
              Entry {e.index}
            </span>
            <span className="h-px w-6 bg-[var(--rule-strong)]" />
            <span className="label-sm text-ink-45">{e.field}</span>
            <span className="label-sm num text-ink-25">Opened {e.opened}</span>
          </div>

          <p className="label mb-5 text-ink-25">§&thinsp;01 — Question</p>
          <h1 className="display max-w-[17ch] text-[clamp(2rem,6vw,4.25rem)]">
            {e.question}
          </h1>
          <p className="serif-body mt-9 max-w-[46ch] text-[1.1875rem] text-ink-70">
            {e.summary}
          </p>
        </div>
      </header>

      <div className="wrap pb-24 sm:pb-32">
        {e.log ? (
          ORDER.map(([n, label, key]) => {
            const items = e.log![key];
            const isLimitations = key === "limitations";
            const isNext = key === "next";
            return (
              <section
                key={n}
                className={`grid grid-cols-12 gap-x-6 gap-y-6 border-t border-[var(--rule)] py-12 sm:py-14 ${
                  isNext ? "border-b" : ""
                }`}
              >
                <header className="col-span-12 md:col-span-3">
                  <div className="md:sticky md:top-28">
                    <span
                      className={`label ${isLimitations ? "text-amber" : "text-accent"}`}
                    >
                      §&thinsp;{n}
                    </span>
                    <h2 className="display mt-4 text-[1.4rem]">{label}</h2>
                  </div>
                </header>
                <div className="col-span-12 md:col-span-9 lg:col-span-8 lg:col-start-5">
                  {items.map((t, i) => (
                    <p
                      key={i}
                      className={`serif-body mb-5 max-w-[50ch] text-[1.0625rem] last:mb-0 sm:text-[1.125rem] ${
                        isNext ? "display-italic text-ink" : "text-ink-70"
                      }`}
                    >
                      {t}
                    </p>
                  ))}
                </div>
              </section>
            );
          })
        ) : (
          <section className="border-t border-[var(--rule)] py-16 sm:py-20">
            <div className="grid grid-cols-12 gap-x-6">
              <div className="col-span-12 lg:col-span-8 lg:col-start-5">
                <span className="label text-amber">
                  {e.status === "open" ? "Not started" : "In progress"}
                </span>
                <p className="serif-body mt-6 max-w-[46ch] text-[1.125rem] text-ink-70">
                  The hypothesis, method, data and conclusion for this question
                  are not written yet. The entry exists so the question is on
                  the record from the day it was asked, rather than appearing
                  later with a tidy answer attached.
                </p>
                <div className="mt-9">
                  <ArrowLink href="/research">Back to the notebook</ArrowLink>
                </div>
              </div>
            </div>
          </section>
        )}
      </div>
    </>
  );
}
