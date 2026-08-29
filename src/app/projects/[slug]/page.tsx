import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { CodeBlock } from "@/components/ui/CodeBlock";
import { MathText } from "@/components/ui/Prose";
import { CompoundChart } from "@/components/data/CompoundChart";
import { ArrowLink, Diamond } from "@/components/ui/primitives";
import { getProject, projects } from "@/content/projects";

type Params = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { slug } = await params;
  const p = getProject(slug);
  if (!p) return {};
  return { title: p.title, description: p.summary };
}

function Block({
  n,
  label,
  children,
}: {
  n: string;
  label: string;
  children: React.ReactNode;
}) {
  return (
    <section className="grid grid-cols-12 gap-x-6 gap-y-6 border-t border-[var(--rule)] py-12 sm:py-16">
      <header className="col-span-12 md:col-span-3 lg:col-span-3">
        <div className="md:sticky md:top-28">
          <span className="label text-accent">§&thinsp;{n}</span>
          <h2 className="display mt-4 text-[1.5rem]">{label}</h2>
        </div>
      </header>
      <div className="col-span-12 md:col-span-9 lg:col-span-8 lg:col-start-5">
        {children}
      </div>
    </section>
  );
}

function Paras({ items }: { items: string[] }) {
  return (
    <>
      {items.map((p, i) => (
        <p
          key={i}
          className="serif-body mb-6 max-w-[50ch] text-[1.0625rem] text-ink-70 last:mb-0 sm:text-[1.125rem]"
        >
          {p}
        </p>
      ))}
    </>
  );
}

export default async function ProjectPage({ params }: Params) {
  const { slug } = await params;
  const p = getProject(slug);
  if (!p) notFound();

  return (
    <>
      {/* Masthead */}
      <header className="graph-paper fade-bottom border-b border-[var(--rule)]">
        <div className="wrap pt-32 pb-16 sm:pt-40 sm:pb-20">
          <Link
            href="/projects"
            className="label group mb-12 inline-flex items-center gap-2.5 text-ink-45 transition-colors hover:text-ink"
          >
            <svg width="13" height="9" viewBox="0 0 13 9" fill="none" aria-hidden>
              <path
                d="M13 4.5H2M5 1L1.5 4.5L5 8"
                stroke="currentColor"
                strokeWidth="1.1"
              />
            </svg>
            <span className="link-rule">Projects</span>
          </Link>

          <div className="mb-8 flex flex-wrap items-center gap-x-4 gap-y-2">
            <span className="label flex items-center gap-2.5 text-accent">
              <Diamond size={5} />
              Project {p.index}
            </span>
            <span className="h-px w-6 bg-[var(--rule-strong)]" />
            <span className="label-sm text-ink-45">{p.disciplines.join(" · ")}</span>
            <span className="label-sm num text-ink-25">{p.year}</span>
          </div>

          <h1 className="display max-w-[16ch] text-[clamp(2.25rem,6.6vw,4.75rem)]">
            {p.title}
          </h1>
          <p className="serif-body mt-9 max-w-[44ch] text-[1.1875rem] text-ink-70">
            {p.summary}
          </p>

          <ul className="mt-9 flex flex-wrap gap-2">
            {p.stack.map((s) => (
              <li
                key={s}
                className="label-sm border border-[var(--rule-strong)] px-3 py-2 text-ink-70"
              >
                {s}
              </li>
            ))}
          </ul>
        </div>
      </header>

      <div className="wrap pb-24 sm:pb-32">
        {/* The question always leads. */}
        <section className="grid grid-cols-12 gap-x-6 py-16 sm:py-20">
          <div className="col-span-12 md:col-span-3">
            <span className="label text-accent">§&thinsp;01</span>
            <h2 className="display mt-4 text-[1.5rem]">The Question</h2>
          </div>
          <div className="col-span-12 mt-6 md:col-span-9 md:mt-0 lg:col-span-8 lg:col-start-5">
            <p className="display max-w-[20ch] text-[clamp(1.75rem,4.6vw,2.75rem)]">
              {p.question}
            </p>
          </div>
        </section>

        {p.sections ? (
          <>
            <Block n="02" label="The Idea">
              <Paras items={p.sections.idea} />
            </Block>

            <Block n="03" label="The Mathematics">
              <Paras items={p.sections.mathematics.text} />
              {p.sections.mathematics.equation && (
                <figure className="mt-10">
                  <div className="border-y border-[var(--rule)] bg-[rgba(20,22,26,0.02)] px-6 py-9 text-center">
                    <span className="equation text-[clamp(1.15rem,3vw,1.6rem)]">
                      <MathText>{p.sections.mathematics.equation}</MathText>
                    </span>
                  </div>
                  {p.sections.mathematics.equationNote && (
                    <figcaption className="label-sm mt-3.5 leading-[1.8] text-ink-45">
                      {p.sections.mathematics.equationNote}
                    </figcaption>
                  )}
                </figure>
              )}
            </Block>

            <Block n="04" label="The Code">
              <Paras items={p.sections.code.text} />
              {p.sections.code.snippet && (
                <CodeBlock
                  lang={p.sections.code.snippet.lang}
                  lines={p.sections.code.snippet.lines}
                  caption="Excerpt"
                />
              )}
            </Block>

            <Block n="05" label="The Data">
              <Paras items={p.sections.data} />
            </Block>

            <Block n="06" label="The Results">
              <Paras items={p.sections.results} />
              {p.slug === "compound-interest-calculator" && (
                <div className="mt-10 max-w-[32rem]">
                  <CompoundChart />
                  <p className="label-sm mt-4 leading-[1.8] text-ink-45">
                    The model, running. Move the sliders to reproduce the
                    numbers above.
                  </p>
                </div>
              )}
            </Block>

            <Block n="07" label="What I Learned">
              <ul className="border-t border-[var(--rule)]">
                {p.sections.learned.map((l, i) => (
                  <li
                    key={i}
                    className="serif-body flex gap-5 border-b border-[var(--rule)] py-5 text-[1.0625rem] text-ink-70"
                  >
                    <span className="label-sm shrink-0 pt-[0.4em] text-accent">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span className="max-w-[48ch]">{l}</span>
                  </li>
                ))}
              </ul>
            </Block>

            <Block n="08" label="What I'd Do Next">
              <ul className="border-t border-[var(--rule)]">
                {p.sections.next.map((l, i) => (
                  <li
                    key={i}
                    className="serif-body flex gap-5 border-b border-[var(--rule)] py-5 text-[1.0625rem] text-ink-70"
                  >
                    <span
                      aria-hidden
                      className="mt-[0.62em] inline-block h-[4px] w-[4px] shrink-0 rotate-45 bg-accent"
                    />
                    <span className="max-w-[48ch]">{l}</span>
                  </li>
                ))}
              </ul>
            </Block>
          </>
        ) : (
          <section className="border-t border-[var(--rule)] py-16 sm:py-20">
            <div className="grid grid-cols-12 gap-x-6">
              <div className="col-span-12 lg:col-span-8 lg:col-start-5">
                <span className="label text-amber">In progress</span>
                <p className="serif-body mt-6 max-w-[46ch] text-[1.125rem] text-ink-70">
                  This project is still being built. The full write-up — idea,
                  mathematics, code, data, results, limitations and what I&rsquo;d
                  do next — goes up when there is something real to report,
                  not before.
                </p>
                <div className="mt-9">
                  <ArrowLink href="/projects">Back to projects</ArrowLink>
                </div>
              </div>
            </div>
          </section>
        )}
      </div>
    </>
  );
}
