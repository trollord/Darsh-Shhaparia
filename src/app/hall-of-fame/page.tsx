import type { Metadata } from "next";
import { Reveal } from "@/components/ui/Reveal";
import { Plate, pl } from "@/components/ui/Plate";
import {
  ArrowLink,
  Diamond,
  PageHead,
  SectionHead,
} from "@/components/ui/primitives";
import { gallery, hallOfFame } from "@/content/photos";

export const metadata: Metadata = {
  title: "Hall of Fame",
  description:
    "Awards, the people behind them, and a gallery of everything else — photographs from the events, meetings and dives that the rest of this site only writes about.",
};

export default function HallOfFamePage() {
  return (
    <>
      <PageHead
        index="07"
        kicker="Photographs"
        title={
          <>
            The rooms it{" "}
            <span className="display-italic text-accent">happened in.</span>
          </>
        }
        lede="Awards, the people who handed them over, and the gallery underneath. Everything written elsewhere on this site happened somewhere — this is where."
        aside={
          <div className="mt-10 flex flex-wrap gap-x-8 gap-y-4">
            <ArrowLink href="#gallery">Skip to the gallery</ArrowLink>
            <ArrowLink href="/achievements">The written record</ArrowLink>
          </div>
        }
      />

      {/* ══ Hall of fame ═════════════════════════════════════════ */}
      <section className="wrap pt-20 pb-24 sm:pt-24 sm:pb-32">
        <SectionHead
          index="01"
          kicker="Hall of fame"
          title="Awards, and the people behind them"
          dek="Four occasions. Each one came out of something finished rather than something planned."
        />

        <div className="mt-14 border-t border-[var(--rule)] sm:mt-20">
          {hallOfFame.map((e, i) => (
            <Reveal key={e.n} delay={i * 0.04}>
              <article className="grid grid-cols-12 items-start gap-x-6 gap-y-8 border-b border-[var(--rule)] py-12 sm:py-16">
                <div
                  className={`col-span-12 sm:col-span-7 md:col-span-5 lg:col-span-4 ${
                    i % 2 ? "lg:order-2 lg:col-start-9" : ""
                  }`}
                >
                  <Plate
                    photo={e.photo}
                    caption=""
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 42vw, 32vw"
                  />
                </div>

                <div
                  className={`col-span-12 md:col-span-7 lg:col-span-6 ${
                    i % 2 ? "lg:order-1 lg:col-start-2" : "lg:col-start-6"
                  }`}
                >
                  <div className="flex items-center gap-4">
                    <span className="label text-accent">{pl(i)}</span>
                    <span className="h-px w-6 bg-[var(--rule-strong)]" />
                    <span className="label text-ink-45">{e.kind}</span>
                  </div>

                  <h3 className="display mt-7 max-w-[18ch] text-[clamp(1.75rem,4.4vw,2.6rem)]">
                    {e.title}
                  </h3>

                  {(e.person || e.award) && (
                    <ul className="mt-6 flex flex-wrap gap-x-3 gap-y-2.5">
                      {e.person && (
                        <li className="label flex items-center gap-2.5 border border-[var(--rule-strong)] px-3 py-2 text-ink">
                          <Diamond className="text-accent" size={5} />
                          {e.person}
                        </li>
                      )}
                      {e.award && (
                        <li className="label border border-[var(--rule-strong)] px-3 py-2 text-ink">
                          {e.award}
                        </li>
                      )}
                    </ul>
                  )}

                  <p className="serif-body mt-6 max-w-[44ch] text-[1.0625rem] text-ink-70">
                    {e.note}
                  </p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ══ Gallery ══════════════════════════════════════════════ */}
      <section id="gallery" className="inverted graph-paper-inv bg-navy">
        <div className="wrap pt-24 pb-24 sm:pt-32 sm:pb-32">
          <SectionHead
            index="02"
            kicker="Gallery"
            title={
              <>
                Everything{" "}
                <span className="display-italic text-accent">else.</span>
              </>
            }
            dek="The photographs that did not need a page of their own — dives, ceremonies and the ordinary evenings in between."
          />

          <div className="mt-14 gap-6 sm:mt-20 sm:columns-2 lg:columns-3">
            {gallery.map((p, i) => (
              <Reveal
                key={p.src}
                delay={(i % 3) * 0.06}
                className="mb-10 block break-inside-avoid"
              >
                <Plate
                  photo={p}
                  fig={pl(i)}
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 46vw, 30vw"
                />
              </Reveal>
            ))}
          </div>

          <div className="mt-8 border-t border-[var(--rule)] pt-10">
            <p className="serif-body display-italic max-w-[34ch] text-[clamp(1.35rem,3.4vw,1.9rem)]">
              More will be added as they happen. Nothing here is staged for the
              site.
            </p>
            <div className="mt-8 flex flex-wrap gap-x-8 gap-y-4">
              <ArrowLink href="/journey" tone="paper">
                Where the diving fits in
              </ArrowLink>
              <ArrowLink href="/book" tone="paper">
                The book in most of these photographs
              </ArrowLink>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
