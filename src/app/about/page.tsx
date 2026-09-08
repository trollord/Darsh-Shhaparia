import type { Metadata } from "next";
import { Reveal } from "@/components/ui/Reveal";
import { Plate } from "@/components/ui/Plate";
import { ArrowLink, Diamond, PageHead } from "@/components/ui/primitives";
import { photos } from "@/content/photos";

export const metadata: Metadata = {
  title: "About",
  description:
    "Darsh Shhaparia — a Grade 9 student interested in finance, mathematics, technology, economics and human behaviour, and in how those four things meet.",
};

const chapters = [
  {
    n: "01",
    label: "Origin",
    title: "Where it started",
    paras: [
      "I'm a Grade 9 student interested in finance, mathematics, technology, economics and human behaviour.",
      "My interest in finance began with a curiosity about money and how financial decisions affect people's lives. Over time, that curiosity expanded. I became interested in the mathematics behind finance, the technology used to analyse information, the economics behind markets and the psychology that influences financial decisions.",
      "That combination is what interests me most — not any one of them on its own.",
    ],
  },
  {
    n: "02",
    label: "Why finance",
    title: "Finance is not just about money",
    paras: [
      "It brings together mathematics, probability, economics, technology and human decision-making. Very few subjects require all five at once.",
      "I'm particularly interested in understanding how these different areas interact — where the mathematics stops being enough, and where the human behaviour starts explaining what the equations cannot.",
    ],
  },
  {
    n: "03",
    label: "Writing",
    title: "Writing is one of the ways I learn",
    paras: [
      "My first book, The Millionaire Mindset, introduced young readers to ideas around money, saving, investing, entrepreneurship and financial habits.",
      "Today I continue writing because explaining an idea forces me to understand it better. It is very easy to believe you understand something until you have to write a clear paragraph about it.",
    ],
    link: { href: "/writing", label: "Read my writing" },
  },
  {
    n: "04",
    label: "Building",
    title: "I also want to learn by building",
    paras: [
      "As I develop my programming skills, I'm interested in creating tools and simulations that connect mathematics with real-world financial questions.",
      "The work may start simple. The goal is for it to become more sophisticated as my knowledge grows — and for the record of that progression to be visible rather than hidden.",
    ],
    link: { href: "/achievements", label: "See the record so far" },
  },
  {
    n: "05",
    label: "Research",
    title: "Learning to approach questions differently",
    paras: [
      "Instead of asking only “What is the answer?” I want to ask “How can I investigate this myself?”",
      "That means learning how to form hypotheses, collect data, analyse results, recognise limitations and communicate conclusions. The limitations section is the one I find hardest and the one I think matters most.",
    ],
    link: { href: "/research", label: "Open the research notebook" },
  },
  {
    n: "06",
    label: "Underwater",
    title: "Diving taught me what risk actually feels like",
    paras: [
      "Outside all of this I am a certified Scuba Diver and Junior Rescue Diver. I also swim, and I read a lot of geopolitics and history.",
      "The Rescue course is the one that changed how I think. It is almost entirely about noticing a small problem early, because underwater a small problem does not stay small. That is a better description of financial risk than most of the definitions I had read.",
    ],
    link: { href: "/journey#passions", label: "More on the diving" },
  },
];

const chain = ["Curiosity", "Learning", "Building", "Research", "Communication"];

export default function AboutPage() {
  return (
    <>
      <PageHead
        index="01"
        kicker="About"
        title={
          <>
            I&rsquo;m interested in understanding{" "}
            <span className="display-italic text-accent">how things work.</span>
          </>
        }
        lede="Personal, but not casual. This page is the long version of who is writing everything else on this site."
      />

      <section className="wrap pt-20 pb-24 sm:pt-28 sm:pb-32">
        <div className="grid grid-cols-12 gap-x-6 gap-y-16">
          {/* Contents rail */}
          <aside className="col-span-12 lg:col-span-3">
            <div className="lg:sticky lg:top-28">
              <p className="label mb-6 text-ink-25">Contents</p>
              <ol className="space-y-3.5 border-t border-[var(--rule)] pt-6">
                {chapters.map((c) => (
                  <li key={c.n}>
                    <a
                      href={`#c${c.n}`}
                      className="group flex items-baseline gap-3 text-[0.875rem] text-ink-70 transition-colors hover:text-ink"
                    >
                      <span className="label-sm text-ink-25">{c.n}</span>
                      <span className="link-rule">{c.label}</span>
                    </a>
                  </li>
                ))}
              </ol>

              <Plate
                photo={photos.portraitClose}
                caption="Darsh Shhaparia, 2026."
                fig="Pl.&thinsp;01"
                sizes="22vw"
                className="mt-12 hidden lg:block"
              />
            </div>
          </aside>

          {/* Essay */}
          <div className="col-span-12 lg:col-span-8 lg:col-start-5">
            {chapters.map((c, i) => (
              <Reveal key={c.n} delay={i * 0.03}>
                <article
                  id={`c${c.n}`}
                  className="border-t border-[var(--rule)] pt-7 pb-16 first:border-t-0 first:pt-0 sm:pb-20"
                >
                  <div className="mb-7 flex items-center gap-4">
                    <span className="label text-accent">§&thinsp;{c.n}</span>
                    <span className="h-px w-6 bg-[var(--rule-strong)]" />
                    <span className="label text-ink-45">{c.label}</span>
                  </div>
                  <h2 className="display max-w-[20ch] text-[clamp(1.75rem,4.4vw,2.6rem)]">
                    {c.title}
                  </h2>
                  <div className="mt-7 max-w-[46ch]">
                    {c.paras.map((p, j) => (
                      <p
                        key={j}
                        className="serif-body mb-6 text-[1.125rem] text-ink-70 sm:text-[1.1875rem]"
                      >
                        {p}
                      </p>
                    ))}
                  </div>
                  {c.link && (
                    <div className="mt-8">
                      <ArrowLink href={c.link.href}>{c.link.label}</ArrowLink>
                    </div>
                  )}
                </article>
              </Reveal>
            ))}

            {/* Belief */}
            <Reveal>
              <article className="inverted graph-paper-inv bg-navy p-8 sm:p-12">
                <div className="mb-8 flex items-center gap-4">
                  <span className="label text-accent">§&thinsp;07</span>
                  <span className="h-px w-6 bg-[var(--rule-strong)]" />
                  <span className="label text-ink-45">What I believe</span>
                </div>
                <p className="display max-w-[20ch] text-[clamp(1.75rem,4.4vw,2.6rem)]">
                  I don&rsquo;t think you need to know exactly what you will
                  become at 14.{" "}
                  <span className="display-italic text-accent">
                    You need to become curious enough to keep learning.
                  </span>
                </p>
                <p className="serif-body mt-8 max-w-[44ch] text-[1.0625rem] text-ink-70">
                  My goal is not to present myself as an expert. My goal is to
                  document the process of becoming better.
                </p>

                <ol className="mt-11 flex flex-wrap items-center gap-x-3 gap-y-3 border-t border-[var(--rule)] pt-8">
                  {chain.map((c, i) => (
                    <li key={c} className="flex items-center gap-3">
                      {i > 0 && (
                        <span className="label-sm text-ink-25">&rarr;</span>
                      )}
                      <span className="label flex items-center gap-2 text-paper">
                        {i === 0 && <Diamond className="text-accent" size={5} />}
                        {c}
                      </span>
                    </li>
                  ))}
                </ol>
                <p className="label-sm mt-6 text-ink-45">
                  That&rsquo;s the journey I&rsquo;m beginning.
                </p>
              </article>
            </Reveal>
          </div>
        </div>
      </section>
    </>
  );
}
