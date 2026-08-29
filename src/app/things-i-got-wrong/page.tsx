import type { Metadata } from "next";
import { Reveal } from "@/components/ui/Reveal";
import { ArrowLink, PageHead } from "@/components/ui/primitives";
import { errata, errataRule } from "@/content/misc";

export const metadata: Metadata = {
  title: "Things I Got Wrong",
  description:
    "Assumptions changed, mistakes made, and what came out of them. Intellectual growth requires being willing to change your mind.",
};

export default function ErrataPage() {
  return (
    <>
      <PageHead
        index="11"
        kicker="Errata"
        title={
          <>
            Things I got{" "}
            <span className="display-italic text-amber">wrong.</span>
          </>
        }
        lede={errataRule}
      />

      <section className="wrap pt-20 pb-24 sm:pt-24 sm:pb-32">
        <div className="grid grid-cols-12 gap-x-6 gap-y-14">
          <aside className="col-span-12 lg:col-span-3">
            <div className="lg:sticky lg:top-28">
              <p className="serif-body max-w-[30ch] text-[1.0625rem] text-ink-70">
                This section documents assumptions I&rsquo;ve changed, mistakes
                I&rsquo;ve made and things I&rsquo;ve learned from them.
              </p>
              <p className="serif-body display-italic mt-6 max-w-[30ch] border-t border-[var(--rule)] pt-6 text-[1.0625rem] text-ink">
                Because intellectual growth requires being willing to change
                your mind.
              </p>
            </div>
          </aside>

          <div className="col-span-12 lg:col-span-8 lg:col-start-5">
            <div className="border-t border-[var(--rule)]">
              {errata.map((e, i) => (
                <Reveal key={e.n} delay={i * 0.05}>
                  <article className="border-b border-[var(--rule)] py-12">
                    <div className="mb-8 flex flex-wrap items-center gap-x-4 gap-y-2">
                      <span className="label text-amber">Erratum {e.n}</span>
                      <span className="h-px w-6 bg-[var(--rule-strong)]" />
                      <span className="label-sm text-ink-45">{e.field}</span>
                      <span className="label-sm num text-ink-25">{e.date}</span>
                    </div>

                    <h2 className="display max-w-[24ch] text-[clamp(1.5rem,3.8vw,2.25rem)]">
                      {e.thought}
                    </h2>

                    <dl className="mt-9 border-t border-[var(--rule)]">
                      <div className="grid grid-cols-12 gap-x-6 gap-y-2 border-b border-[var(--rule)] py-6">
                        <dt className="label-sm col-span-12 pt-1 text-ink-25 sm:col-span-3">
                          After researching
                        </dt>
                        <dd className="serif-body col-span-12 max-w-[48ch] text-[1.0625rem] text-ink-70 sm:col-span-9">
                          {e.found}
                        </dd>
                      </div>
                      <div className="grid grid-cols-12 gap-x-6 gap-y-2 py-6">
                        <dt className="label-sm col-span-12 pt-1 text-accent sm:col-span-3">
                          What changed
                        </dt>
                        <dd className="serif-body col-span-12 max-w-[48ch] text-[1.0625rem] text-ink sm:col-span-9">
                          {e.changed}
                        </dd>
                      </div>
                    </dl>
                  </article>
                </Reveal>
              ))}
            </div>

            <div className="mt-12">
              <p className="serif-body display-italic max-w-[34ch] text-[clamp(1.35rem,3.4vw,1.9rem)]">
                Curiosity, humility and critical thinking are easier to claim
                than to evidence. This page is the evidence.
              </p>
              <div className="mt-8">
                <ArrowLink href="/research">
                  The experiments behind these
                </ArrowLink>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
