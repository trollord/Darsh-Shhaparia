import type { Metadata } from "next";
import { Reveal } from "@/components/ui/Reveal";
import {
  ArrowLink,
  Diamond,
  PageHead,
  SectionHead,
} from "@/components/ui/primitives";
import { episodes, podcast } from "@/content/misc";

export const metadata: Metadata = {
  title: "Money Matters with Darsh",
  description: podcast.blurb,
};

export default function PodcastPage() {
  const latest = episodes.find((e) => e.status === "published")!;
  const rest = episodes.filter((e) => e !== latest);

  return (
    <>
      <PageHead
        index="04"
        kicker="Podcast"
        title={
          <>
            Money Matters{" "}
            <span className="display-italic text-accent">with Darsh</span>
          </>
        }
        lede={podcast.blurb}
      />

      {/* Latest episode — the one large feature on the page */}
      <section className="wrap pt-20 pb-24 sm:pt-24 sm:pb-32">
        <Reveal>
          <article className="inverted graph-paper-inv bg-navy">
            <div className="grid grid-cols-12 gap-x-6 gap-y-10 p-8 sm:p-12">
              <div className="col-span-12 lg:col-span-7">
                <span className="label flex items-center gap-2.5 text-accent">
                  <Diamond size={5} />
                  Latest episode &middot; {latest.n}
                </span>
                <h2 className="display mt-7 max-w-[18ch] text-[clamp(1.9rem,5vw,3.2rem)]">
                  {latest.topic}
                </h2>
                <p className="serif-body mt-7 max-w-[46ch] text-[1.0625rem] text-ink-70">
                  <span className="label-sm mr-3 text-accent">Takeaway</span>
                  {latest.takeaway}
                </p>
                <div className="mt-9 flex flex-wrap gap-x-8 gap-y-4">
                  <ArrowLink href="/contact" tone="paper">
                    Watch or listen
                  </ArrowLink>
                </div>
              </div>

              <dl className="col-span-12 self-start border-t border-[var(--rule)] lg:col-span-4 lg:col-start-9 lg:border-t-0 lg:border-l lg:pt-0 lg:pl-8">
                {[
                  ["Guest", latest.guest],
                  ["Role", latest.role],
                  ["Recorded", latest.date],
                  ["Duration", latest.duration],
                ].map(([k, v]) => (
                  <div
                    key={k}
                    className="flex items-baseline justify-between gap-4 border-b border-[var(--rule)] py-4"
                  >
                    <dt className="label-sm text-ink-25">{k}</dt>
                    <dd className="serif-body text-[1rem] text-paper">{v}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </article>
        </Reveal>
      </section>

      {/* All episodes */}
      <section className="wrap pb-24 sm:pb-32">
        <SectionHead
          index="01"
          kicker="Archive"
          title="All episodes"
          dek="Every conversation, with the one thing I took away from it."
        />

        <div className="mt-14 border-t border-[var(--rule)] sm:mt-20">
          {rest.map((e, i) => (
            <Reveal key={e.n} delay={i * 0.05}>
              <article className="row-hover grid grid-cols-12 items-baseline gap-x-6 gap-y-4 border-b border-[var(--rule)] py-8">
                <span className="label col-span-2 text-accent md:col-span-1">
                  {e.n}
                </span>
                <div className="col-span-10 md:col-span-5">
                  <h3 className="display text-[clamp(1.3rem,2.8vw,1.75rem)]">
                    {e.topic}
                  </h3>
                  <p className="label-sm mt-3 text-ink-45">
                    {e.guest} &middot; {e.role}
                  </p>
                </div>
                <p className="serif-body col-span-12 max-w-[42ch] text-[0.9375rem] text-ink-45 md:col-span-4">
                  {e.takeaway !== "—" ? e.takeaway : "Recording."}
                </p>
                <div className="col-span-12 flex items-center gap-4 md:col-span-2 md:justify-end">
                  <span className="label-sm num text-ink-25">{e.date}</span>
                  <span className="label-sm text-ink-45">{e.duration}</span>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Guests + why */}
      <section className="wrap pb-24 sm:pb-32">
        <div className="grid grid-cols-12 gap-x-6 gap-y-14">
          <div className="col-span-12 lg:col-span-5">
            <p className="label mb-7 text-accent">Who I speak to</p>
            <ul className="border-t border-[var(--rule)]">
              {podcast.guestTypes.map((g) => (
                <li
                  key={g}
                  className="display border-b border-[var(--rule)] py-4 text-[clamp(1.35rem,3.2vw,1.9rem)]"
                >
                  {g}
                </li>
              ))}
            </ul>
          </div>

          <div className="col-span-12 lg:col-span-6 lg:col-start-7">
            <p className="label mb-7 text-accent">Why I started it</p>
            {podcast.why.map((p, i) => (
              <p
                key={i}
                className="serif-body mb-6 max-w-[46ch] text-[1.125rem] text-ink-70"
              >
                {p}
              </p>
            ))}
            <div className="mt-8 border-t border-[var(--rule)] pt-8">
              <p className="serif-body display-italic max-w-[38ch] text-[1.25rem]">
                If you have built, invested, created or achieved something and
                would talk to a Grade 9 student about how you actually decided
                things — I would like to hear from you.
              </p>
              <div className="mt-7">
                <ArrowLink href="/contact">Come on the podcast</ArrowLink>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
