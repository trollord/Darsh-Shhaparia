import type { Metadata } from "next";
import { Reveal } from "@/components/ui/Reveal";
import { Plate, pl } from "@/components/ui/Plate";
import { Figure } from "@/components/ui/Figure";
import {
  ArrowLink,
  Diamond,
  PageHead,
  SectionHead,
} from "@/components/ui/primitives";
import { achievements, achievementsRule } from "@/content/misc";
import { gallery, hallOfFame } from "@/content/photos";

export const metadata: Metadata = {
  title: "Hall of Fame",
  description:
    "The written record and the photographs in one place — what has actually been finished, the people behind it, and a gallery of the rooms it happened in.",
};

export default function HallOfFamePage() {
  return (
    <>
      <PageHead
        index="05"
        kicker="The record"
        title={
          <>
            The work, and the rooms it{" "}
            <span className="display-italic text-accent">happened in.</span>
          </>
        }
        lede="A short list kept honest, the people behind it, and the photographs underneath. One page, because the list and the pictures are the same story told twice."
        aside={
          <div className="mt-10 flex flex-wrap gap-x-8 gap-y-4">
            <ArrowLink href="#hall">Skip to the people</ArrowLink>
            <ArrowLink href="#gallery">Skip to the gallery</ArrowLink>
          </div>
        }
      />

      {/* ══ § 01 — The written record ════════════════════════════ */}
      <section className="wrap pt-20 pb-24 sm:pt-24 sm:pb-32">
        <SectionHead
          index="01"
          kicker="Record"
          title="A short list, kept honest"
          dek={achievementsRule}
        />

        <div className="mt-14 border-t border-[var(--rule)] sm:mt-20">
          {achievements.map((cat, i) => (
            <Reveal key={cat.category} delay={i * 0.04}>
              <section className="grid grid-cols-12 gap-x-6 gap-y-6 border-b border-[var(--rule)] py-10">
                <header className="col-span-12 md:col-span-3">
                  <h3 className="display text-[1.5rem]">{cat.category}</h3>
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
      </section>

      {/* ══ § 02 — Hall of fame ══════════════════════════════════ */}
      <section id="hall" className="wrap pb-24 sm:pb-32">
        <SectionHead
          index="02"
          kicker="Hall of fame"
          title="The people behind it"
          dek="Meetings that came out of something finished rather than something planned. Each one is here because of the conversation, not the photograph."
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
                  {e.photo ? (
                    <Plate
                      photo={e.photo}
                      caption=""
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 42vw, 32vw"
                    />
                  ) : (
                    <Figure
                      ratio="3 / 4"
                      caption={`${e.title} — photograph to come.`}
                    />
                  )}
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

                  {(e.person || e.role || e.award) && (
                    <ul className="mt-6 flex flex-wrap gap-x-3 gap-y-2.5">
                      {e.person && (
                        <li className="label flex items-center gap-2.5 border border-[var(--rule-strong)] px-3 py-2 text-ink">
                          <Diamond className="text-accent" size={5} />
                          {e.person}
                        </li>
                      )}
                      {e.role && (
                        <li className="label border border-[var(--rule-strong)] px-3 py-2 text-ink-45">
                          {e.role}
                        </li>
                      )}
                      {e.award && (
                        <li className="label border border-[var(--rule-strong)] px-3 py-2 text-ink">
                          {e.award}
                        </li>
                      )}
                    </ul>
                  )}

                  <p className="serif-body mt-6 max-w-[46ch] text-[1.0625rem] text-ink-70">
                    {e.note}
                  </p>

                  {e.pull && (
                    <p className="serif-body display-italic mt-7 max-w-[34ch] border-l border-accent pl-5 text-[clamp(1.1rem,2.4vw,1.35rem)] leading-snug text-ink">
                      {e.pull}
                    </p>
                  )}

                  {e.link && (
                    <div className="mt-7">
                      <ArrowLink href={e.link.href} external>
                        {e.link.label}
                      </ArrowLink>
                    </div>
                  )}
                </div>
              </article>
            </Reveal>
          ))}
        </div>

        <div className="mt-14 grid grid-cols-12 gap-x-6">
          <div className="col-span-12 lg:col-span-8 lg:col-start-5">
            <p className="serif-body display-italic max-w-[34ch] text-[clamp(1.35rem,3.4vw,1.9rem)]">
              The work is the point; the list is only the receipt.
            </p>
            <div className="mt-8 flex flex-wrap gap-x-8 gap-y-4">
              <ArrowLink href="/beyond-finance">
                The part that isn&rsquo;t finance
              </ArrowLink>
            </div>
          </div>
        </div>
      </section>

      {/* ══ § 03 — Gallery ═══════════════════════════════════════ */}
      <section id="gallery" className="inverted graph-paper-inv bg-navy">
        <div className="wrap pt-24 pb-24 sm:pt-32 sm:pb-32">
          <SectionHead
            index="03"
            kicker="Gallery"
            title={
              <>
                Everything{" "}
                <span className="display-italic text-accent">else.</span>
              </>
            }
            dek="The photographs that did not need an entry of their own — ceremonies, offices and the ordinary evenings in between."
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
              <ArrowLink href="/beyond-finance" tone="paper">
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
