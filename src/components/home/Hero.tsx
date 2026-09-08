"use client";

import { motion } from "framer-motion";
import { LineReveal } from "@/components/ui/Reveal";
import { Button, Diamond } from "@/components/ui/primitives";
import { CompoundChart } from "@/components/data/CompoundChart";
import { site } from "@/content/site";

const EASE = [0.22, 1, 0.36, 1] as const;

export function Hero() {
  return (
    <section className="graph-paper relative overflow-hidden">
      {/* The rule grid only reaches partway down, then dissolves. */}
      <div className="wrap relative pt-28 pb-16 sm:pt-32 lg:pt-36 lg:pb-24">
        <div className="grid grid-cols-12 gap-x-6 gap-y-14">
          {/* ——— Statement ——— */}
          <div className="col-span-12 lg:col-span-7 xl:col-span-7">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, ease: EASE }}
              className="mb-7 flex flex-wrap items-center gap-x-4 gap-y-3"
            >
              <span className="label flex items-center gap-2.5 text-accent">
                <Diamond size={5} />
                {site.roles.join(" · ")}
              </span>
              <span className="hidden h-px w-6 bg-[var(--rule-strong)] sm:block" />
              <span className="label text-ink-45">
                {site.grade} &middot; {site.year}
              </span>
            </motion.div>

            <h1 className="display text-[clamp(2.35rem,5.9vw,4.35rem)]">
              <LineReveal
                lines={[
                  <>Exploring finance,</>,
                  <>mathematics, technology</>,
                  <>
                    &amp;{" "}
                    <span className="display-italic text-accent">
                      human behaviour.
                    </span>
                  </>,
                ]}
                delay={0.12}
              />
            </h1>

            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.5, ease: EASE }}
            >
              <p className="serif-body mt-8 max-w-[46ch] text-[1.125rem] text-ink-70 sm:text-[1.1875rem]">
                {site.shortBio}
              </p>
              <p className="serif-body mt-4 max-w-[46ch] text-[1.125rem] text-ink-70 sm:text-[1.1875rem]">
                I am also the author of{" "}
                <em className="text-ink">The Millionaire Mindset</em> and host
                of <em className="text-ink">Money Matters with Darsh</em>.
              </p>

              <div className="mt-10 flex flex-wrap gap-4">
                <Button href="/book">Explore my book</Button>
                <Button href="/writing" variant="outline">
                  Read my writing
                </Button>
              </div>
            </motion.div>
          </div>

          {/* ——— Instrument ——— */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.62, ease: EASE }}
            className="col-span-12 lg:col-span-5 lg:pl-6"
          >
            <CompoundChart />
            <p className="label-sm mt-4 flex items-start gap-2.5 leading-[1.85] text-ink-45">
              <Diamond className="mt-[3px] text-accent" size={5} />
              <span>
                The first idea I wrote about. Move the sliders — the gap between
                the two lines is the whole subject.
              </span>
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
