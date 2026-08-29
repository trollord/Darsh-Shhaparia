import type { Metadata } from "next";
import { Reveal } from "@/components/ui/Reveal";
import { Diamond, PageHead } from "@/components/ui/primitives";
import { site } from "@/content/site";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Professional enquiries — writing, speaking, podcast collaborations and educational initiatives.",
};

const purposes = [
  {
    n: "01",
    t: "Come on the podcast",
    d: "If you have built, invested, created or achieved something and would talk to a Grade 9 student about how you actually decided things.",
    subject: "Money Matters with Darsh — guest enquiry",
  },
  {
    n: "02",
    t: "Speaking",
    d: "Schools, student groups, financial-literacy programmes and youth events.",
    subject: "Speaking enquiry",
  },
  {
    n: "03",
    t: "Writing & the book",
    d: "Publications, commissions, and questions about The Millionaire Mindset — including where to find a copy.",
    subject: "Writing / book enquiry",
  },
  {
    n: "04",
    t: "Educational initiatives",
    d: "Collaborations with organisations working on financial literacy or student research.",
    subject: "Collaboration enquiry",
  },
  {
    n: "05",
    t: "Tell me I'm wrong",
    d: "If something on this site is mistaken, I would genuinely like to know. Corrections end up on Things I Got Wrong.",
    subject: "Correction",
  },
];

export default function ContactPage() {
  return (
    <>
      <PageHead
        index="09"
        kicker="Contact"
        title={
          <>
            Get in <span className="display-italic text-accent">touch.</span>
          </>
        }
        lede="For writing, speaking, podcast collaborations, educational initiatives or other professional enquiries. Every message is read."
      />

      <section className="wrap pt-20 pb-24 sm:pt-24 sm:pb-32">
        <div className="grid grid-cols-12 gap-x-6 gap-y-16">
          {/* Address block */}
          <div className="col-span-12 lg:col-span-4">
            <div className="lg:sticky lg:top-28">
              <p className="label mb-6 text-ink-25">Email</p>
              <a
                href={`mailto:${site.email}`}
                className="display group block text-[clamp(1.4rem,3vw,1.85rem)] break-words"
              >
                <span className="link-rule">{site.email}</span>
              </a>

              <p className="label mt-14 mb-6 text-ink-25">Elsewhere</p>
              <ul className="border-t border-[var(--rule)]">
                {site.socials.map((s) => (
                  <li key={s.label}>
                    <a
                      href={s.href}
                      target="_blank"
                      rel="noreferrer"
                      className="row-hover group flex items-baseline justify-between gap-4 border-b border-[var(--rule)] py-4"
                    >
                      <span className="serif-body text-[1.0625rem]">
                        <span className="link-rule">{s.label}</span>
                      </span>
                      <span className="label-sm text-ink-25">{s.handle}</span>
                    </a>
                  </li>
                ))}
              </ul>

              <p className="serif-body mt-10 max-w-[30ch] text-[0.9375rem] text-ink-45">
                Replies are usually slower during term time. If something is
                time-sensitive, say so in the subject line.
              </p>
            </div>
          </div>

          {/* Purposes */}
          <div className="col-span-12 lg:col-span-7 lg:col-start-6">
            <p className="label mb-7 text-accent">What to write about</p>
            <div className="border-t border-[var(--rule)]">
              {purposes.map((p, i) => (
                <Reveal key={p.n} delay={i * 0.05}>
                  <a
                    href={`mailto:${site.email}?subject=${encodeURIComponent(p.subject)}`}
                    className="row-hover group grid grid-cols-12 items-baseline gap-x-5 gap-y-3 border-b border-[var(--rule)] py-7"
                  >
                    <span className="label col-span-2 text-accent md:col-span-1">
                      {p.n}
                    </span>
                    <div className="col-span-10 md:col-span-10">
                      <h2 className="display text-[clamp(1.35rem,3vw,1.85rem)]">
                        <span className="link-rule">{p.t}</span>
                      </h2>
                      <p className="serif-body mt-2.5 max-w-[46ch] text-[1rem] text-ink-45">
                        {p.d}
                      </p>
                    </div>
                    <svg
                      width="13"
                      height="9"
                      viewBox="0 0 13 9"
                      fill="none"
                      aria-hidden
                      className="arrow-slide col-span-12 text-ink-25 group-hover:text-ink md:col-span-1 md:justify-self-end"
                    >
                      <path
                        d="M0 4.5h11M8 1l3.5 3.5L8 8"
                        stroke="currentColor"
                        strokeWidth="1.1"
                      />
                    </svg>
                  </a>
                </Reveal>
              ))}
            </div>

            <div className="inverted graph-paper-inv mt-14 bg-navy p-8 sm:p-10">
              <span className="label flex items-center gap-2.5 text-accent">
                <Diamond size={5} />
                One request
              </span>
              <p className="serif-body mt-6 max-w-[44ch] text-[1.125rem] text-ink-70">
                I&rsquo;m a student, not an adviser. I can&rsquo;t tell anyone
                what to do with their money, and nothing on this site is
                financial advice. What I can do is explain what I have
                understood so far, and show the working.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
