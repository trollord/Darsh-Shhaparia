"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { articles, categories, type Category } from "@/content/writing";

const EASE = [0.22, 1, 0.36, 1] as const;

export function WritingIndex() {
  const [filter, setFilter] = useState<Category | "All">("All");

  const counts = useMemo(() => {
    const c: Record<string, number> = { All: articles.length };
    for (const a of articles) c[a.category] = (c[a.category] ?? 0) + 1;
    return c;
  }, []);

  const shown = useMemo(
    () => articles.filter((a) => filter === "All" || a.category === filter),
    [filter],
  );

  const published = shown.filter((a) => a.status === "published");
  const pipeline = shown.filter((a) => a.status !== "published");

  return (
    <>
      {/* Filter rail */}
      <div className="sticky top-[4.5rem] z-30 border-b border-[var(--rule)] bg-paper/92 backdrop-blur-[10px]">
        <div className="wrap flex items-center gap-x-6 gap-y-3 overflow-x-auto py-4">
          {(["All", ...categories] as const).map((c) => {
            const active = filter === c;
            return (
              <button
                key={c}
                type="button"
                onClick={() => setFilter(c)}
                className={`label flex shrink-0 items-center gap-2 whitespace-nowrap transition-colors duration-300 ${
                  active ? "text-accent" : "text-ink-45 hover:text-ink"
                }`}
              >
                <span className={active ? "link-rule link-rule-out" : ""}>
                  {c}
                </span>
                <span className="label-sm text-ink-25">{counts[c] ?? 0}</span>
              </button>
            );
          })}
        </div>
      </div>

      <section className="wrap pt-16 pb-24 sm:pt-20 sm:pb-32">
        {published.length > 0 && (
          <>
            <div className="mb-10 flex items-baseline gap-4">
              <span className="label text-accent">Published</span>
              <span className="h-px flex-1 bg-[var(--rule)]" />
              <span className="label-sm text-ink-25">
                {published.length} pieces
              </span>
            </div>

            <div className="border-t border-[var(--rule)]">
              <AnimatePresence initial={false} mode="popLayout">
                {published.map((a, i) => (
                  <motion.div
                    key={a.slug}
                    layout
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.45, delay: i * 0.04, ease: EASE }}
                  >
                    <Link
                      href={`/writing/${a.slug}`}
                      className="row-hover group grid grid-cols-12 items-baseline gap-x-6 gap-y-4 border-b border-[var(--rule)] py-9"
                    >
                      <div className="col-span-12 flex items-center gap-4 md:col-span-3">
                        <span className="label text-accent">{a.category}</span>
                      </div>
                      <div className="col-span-12 md:col-span-7">
                        <h2 className="display max-w-[24ch] text-[clamp(1.5rem,3.6vw,2.15rem)]">
                          <span className="link-rule">{a.title}</span>
                        </h2>
                        {a.dek && (
                          <p className="serif-body mt-3 max-w-[52ch] text-[1rem] text-ink-45">
                            {a.dek}
                          </p>
                        )}
                      </div>
                      <div className="col-span-12 flex items-center gap-4 md:col-span-2 md:flex-col md:items-end md:gap-2">
                        <span className="label-sm num text-ink-45">
                          {a.date}
                        </span>
                        <span className="label-sm text-ink-25">
                          {a.readingTime}
                        </span>
                      </div>
                    </Link>
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>
          </>
        )}

        {pipeline.length > 0 && (
          <>
            <div className="mt-20 mb-10 flex items-baseline gap-4">
              <span className="label text-ink-45">In the pipeline</span>
              <span className="h-px flex-1 bg-[var(--rule)]" />
              <span className="label-sm text-ink-25">
                {pipeline.length} planned
              </span>
            </div>
            <p className="serif-body mb-9 max-w-[46ch] text-[1rem] text-ink-45">
              These are titles I intend to write, listed openly rather than
              published half-finished. They appear here so the plan is visible
              — and so it is obvious when one of them actually lands.
            </p>

            <ul className="ledger grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
              {pipeline.map((a) => (
                <li key={a.slug} className="flex flex-col gap-4 p-5 sm:p-6">
                  <div className="flex items-center justify-between gap-3">
                    <span className="label-sm text-ink-25">{a.category}</span>
                    <span
                      className={`label-sm flex items-center gap-2 ${
                        a.status === "drafting" ? "text-amber" : "text-ink-25"
                      }`}
                    >
                      <span
                        aria-hidden
                        className={`inline-block h-[4px] w-[4px] rotate-45 ${
                          a.status === "drafting" ? "bg-amber-2" : "bg-ink-25"
                        }`}
                      />
                      {a.status}
                    </span>
                  </div>
                  <p className="serif-body text-[1.0625rem] leading-snug text-ink-70">
                    {a.title}
                  </p>
                </li>
              ))}
            </ul>
          </>
        )}
      </section>
    </>
  );
}
