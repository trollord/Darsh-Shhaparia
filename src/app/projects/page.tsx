import type { Metadata } from "next";
import Link from "next/link";
import { Reveal } from "@/components/ui/Reveal";
import { PageHead, SectionHead } from "@/components/ui/primitives";
import { projects, projectMethod } from "@/content/projects";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Mathematics, finance, programming and research projects — each documented as a question, a model, an implementation, a result and a limitation.",
};

export default function ProjectsPage() {
  return (
    <>
      <PageHead
        index="05"
        kicker="Projects"
        title={
          <>
            I learn best by{" "}
            <span className="display-italic text-accent">building.</span>
          </>
        }
        lede="Reading lets you skip the parts you don't understand. Implementing something does not. That is the argument for this section."
      />

      {/* Method */}
      <section className="wrap pt-20 pb-24 sm:pt-24 sm:pb-28">
        <div className="grid grid-cols-12 gap-x-6 gap-y-10">
          <div className="col-span-12 md:col-span-3 lg:col-span-2">
            <span className="label text-accent">Method</span>
          </div>
          <div className="col-span-12 md:col-span-9 lg:col-span-10">
            <p className="serif-body max-w-[50ch] text-[1.0625rem] text-ink-70">
              Every project on this site is written up the same way. The
              structure is what turns &ldquo;I made a Python
              calculator&rdquo; into &ldquo;I investigated a mathematical
              problem, built a model, tested it and reflected on its
              limitations.&rdquo;
            </p>
            <ol className="ledger mt-10 grid grid-cols-2 sm:grid-cols-4">
              {projectMethod.map((m, i) => (
                <li key={m.key} className="p-5">
                  <span className="label-sm text-accent">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <p className="mt-3 text-[0.9375rem] leading-tight">
                    {m.label}
                  </p>
                  <p className="serif-body mt-2 text-[0.8125rem] leading-snug text-ink-45">
                    {m.note}
                  </p>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      {/* Index */}
      <section className="wrap pb-24 sm:pb-32">
        <SectionHead index="01" kicker="Index" title="The work" />

        <div className="mt-14 border-t border-[var(--rule)] sm:mt-20">
          {projects.map((p, i) => (
            <Reveal key={p.slug} delay={i * 0.05}>
              <Link
                href={`/projects/${p.slug}`}
                className="row-hover group grid grid-cols-12 items-baseline gap-x-6 gap-y-4 border-b border-[var(--rule)] py-9"
              >
                <span className="label col-span-2 text-accent md:col-span-1">
                  {p.index}
                </span>
                <div className="col-span-10 md:col-span-6">
                  <h2 className="display text-[clamp(1.5rem,3.4vw,2.1rem)]">
                    <span className="link-rule">{p.title}</span>
                  </h2>
                  <p className="serif-body mt-3 max-w-[46ch] text-[1rem] text-ink-45">
                    {p.summary}
                  </p>
                </div>
                <ul className="col-span-12 flex flex-wrap gap-2 md:col-span-3">
                  {p.stack.map((s) => (
                    <li
                      key={s}
                      className="label-sm border border-[var(--rule)] px-2.5 py-1.5 text-ink-45"
                    >
                      {s}
                    </li>
                  ))}
                </ul>
                <div className="col-span-12 flex items-center gap-3 md:col-span-2 md:justify-end">
                  <span
                    aria-hidden
                    className={`inline-block h-[5px] w-[5px] rotate-45 ${
                      p.status === "shipped"
                        ? "bg-accent"
                        : p.status === "building"
                          ? "bg-amber-2"
                          : "bg-ink-25"
                    }`}
                  />
                  <span className="label-sm text-ink-45">{p.status}</span>
                  <svg
                    width="13"
                    height="9"
                    viewBox="0 0 13 9"
                    fill="none"
                    aria-hidden
                    className="arrow-slide ml-1 text-ink-25 group-hover:text-ink"
                  >
                    <path
                      d="M0 4.5h11M8 1l3.5 3.5L8 8"
                      stroke="currentColor"
                      strokeWidth="1.1"
                    />
                  </svg>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>
    </>
  );
}
