import type { Metadata } from "next";
import { Reveal } from "@/components/ui/Reveal";
import { Plate } from "@/components/ui/Plate";
import { ArrowLink, PageHead } from "@/components/ui/primitives";
import { achievements, achievementsRule } from "@/content/misc";
import { photos } from "@/content/photos";

export const metadata: Metadata = {
  title: "Achievements",
  description:
    "A short, honest record. Quality over quantity — empty categories stay empty until there is something real to put in them.",
};

export default function AchievementsPage() {
  return (
    <>
      <PageHead
        index="06"
        kicker="Record"
        title={
          <>
            A short list,{" "}
            <span className="display-italic text-accent">kept honest.</span>
          </>
        }
        lede={achievementsRule}
      />

      <section className="wrap pt-20 pb-24 sm:pt-24 sm:pb-32">
        <div className="border-t border-[var(--rule)]">
          {achievements.map((cat, i) => (
            <Reveal key={cat.category} delay={i * 0.04}>
              <section className="grid grid-cols-12 gap-x-6 gap-y-6 border-b border-[var(--rule)] py-10">
                <header className="col-span-12 md:col-span-3">
                  <h2 className="display text-[1.5rem]">{cat.category}</h2>
                  <p className="label-sm mt-3 text-ink-25">
                    {cat.items.length
                      ? `${cat.items.length} entr${cat.items.length === 1 ? "y" : "ies"}`
                      : "None yet"}
                  </p>
                </header>

                <div className="col-span-12 md:col-span-9 lg:col-span-8 lg:col-start-5">
                  {cat.items.length ? (
                    <ul className="border-t border-[var(--rule)]">
                      {cat.items.map((it) => (
                        <li
                          key={it.t}
                          className="flex flex-col gap-2 border-b border-[var(--rule)] py-5 sm:flex-row sm:items-baseline sm:justify-between sm:gap-8"
                        >
                          <div>
                            <p className="serif-body text-[1.125rem]">{it.t}</p>
                            <p className="serif-body mt-1.5 text-[0.9375rem] text-ink-45">
                              {it.d}
                            </p>
                          </div>
                          <span className="label-sm num shrink-0 text-ink-25">
                            {it.year}
                          </span>
                        </li>
                      ))}
                    </ul>
                  ) : (
                    <p className="serif-body display-italic max-w-[40ch] border-t border-dashed border-[var(--rule-strong)] pt-5 text-[1rem] text-ink-45">
                      Nothing here yet. This category stays empty rather than
                      being padded — it will be filled in when there is
                      something real to put in it.
                    </p>
                  )}
                </div>
              </section>
            </Reveal>
          ))}
        </div>

        {/* The receipts, photographed. */}
        <div className="mt-16 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-3">
          <Reveal>
            <Plate
              photo={photos.motilalOswal}
              fig="Pl.&thinsp;01"
              caption="Recognition — Motilal Oswal."
              sizes="(max-width: 640px) 100vw, 30vw"
            />
          </Reveal>
          <Reveal delay={0.06}>
            <Plate
              photo={photos.speakingPeta}
              fig="Pl.&thinsp;02"
              caption="Speaking — Matterly Foundation & PETA India."
              sizes="(max-width: 640px) 100vw, 30vw"
            />
          </Reveal>
          <Reveal delay={0.12}>
            <Plate
              photo={photos.divingUnderwater}
              fig="Pl.&thinsp;03"
              caption="Certified — Scuba Diver, Junior Rescue Diver."
              sizes="(max-width: 640px) 100vw, 30vw"
            />
          </Reveal>
        </div>

        <div className="mt-16 grid grid-cols-12 gap-x-6">
          <div className="col-span-12 lg:col-span-8 lg:col-start-5">
            <p className="serif-body display-italic max-w-[34ch] text-[clamp(1.35rem,3.4vw,1.9rem)]">
              This is deliberately a secondary page. The work is the point; the
              list is only the receipt.
            </p>
            <div className="mt-8 flex flex-wrap gap-x-8 gap-y-4">
              <ArrowLink href="/hall-of-fame">
                See the photographs instead
              </ArrowLink>
              <ArrowLink href="/research">And the research</ArrowLink>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
