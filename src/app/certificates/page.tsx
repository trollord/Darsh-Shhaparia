import type { Metadata } from "next";
import { Reveal } from "@/components/ui/Reveal";
import { Plate } from "@/components/ui/Plate";
import { Glyph } from "@/components/ui/Glyph";
import {
  ArrowLink,
  Diamond,
  PageHead,
  SectionHead,
} from "@/components/ui/primitives";
import {
  certificatesRule,
  divingCertificates,
  educationCertificates,
  type Certificate,
} from "@/content/certificates";

export const metadata: Metadata = {
  title: "Certificates",
  description:
    "Diving and education — the courses finished and the committees argued in, each with its issuer and the month it was awarded.",
};

function CertificateList({
  items,
  tone = "ink",
}: {
  items: Certificate[];
  tone?: "ink" | "paper";
}) {
  return (
    <ol className="mt-14 border-t border-[var(--rule)] sm:mt-20">
      {items.map((c, i) => (
        <Reveal key={c.n} delay={i * 0.04}>
          <li className="grid grid-cols-12 items-start gap-x-6 gap-y-6 border-b border-[var(--rule)] py-9 sm:py-11">
            <div className="col-span-12 md:col-span-3 lg:col-span-2">
              <span className="label text-accent">{c.n}</span>
              <p className="label-sm num mt-3 text-ink-25">{c.date}</p>
            </div>

            <div
              className={`col-span-12 md:col-span-9 ${
                c.photo ? "lg:col-span-6" : "lg:col-span-8"
              } lg:col-start-3`}
            >
              <h3 className="display max-w-[24ch] text-[clamp(1.35rem,3vw,1.75rem)] leading-snug">
                {c.title}
              </h3>
              <p className="label mt-3.5 text-accent">{c.issuer}</p>
              <p className="serif-body mt-4 max-w-[52ch] text-[1rem] text-ink-70">
                {c.detail}
              </p>
              {c.href && (
                <div className="mt-6">
                  <ArrowLink href={c.href} external tone={tone}>
                    See the announcement
                  </ArrowLink>
                </div>
              )}
            </div>

            {c.photo && (
              <div className="col-span-12 md:col-span-6 lg:col-span-3 lg:col-start-10">
                <Plate
                  photo={c.photo}
                  caption=""
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 46vw, 24vw"
                />
              </div>
            )}
          </li>
        </Reveal>
      ))}
    </ol>
  );
}

export default function CertificatesPage() {
  return (
    <>
      <PageHead
        index="07"
        kicker="Certificates"
        title={
          <>
            Finished,{" "}
            <span className="display-italic text-accent">end to end.</span>
          </>
        }
        lede={certificatesRule}
        aside={
          <div className="mt-10 flex flex-wrap gap-x-8 gap-y-4">
            <ArrowLink href="#education">Education</ArrowLink>
            <ArrowLink href="#diving">Diving</ArrowLink>
          </div>
        }
      />

      {/* ══ § 01 — Education ═════════════════════════════════════ */}
      <section id="education" className="wrap pt-20 pb-24 sm:pt-24 sm:pb-32">
        <SectionHead
          index="01"
          kicker="Education"
          title="Courses, and committees"
          dek="University courses completed online, and Model UN conferences where the preparation had to survive contact with a room full of people ready to disagree."
        />
        <CertificateList items={educationCertificates} />
      </section>

      {/* ══ § 02 — Diving ════════════════════════════════════════ */}
      <section id="diving" className="inverted graph-paper-inv bg-navy">
        <div className="wrap pt-24 pb-24 sm:pt-32 sm:pb-32">
          <SectionHead
            index="02"
            kicker="Diving"
            title={
              <>
                Certified{" "}
                <span className="display-italic text-accent">underwater.</span>
              </>
            }
            dek="Two certifications, and the only place where a checklist has never once felt like bureaucracy."
          />
          <CertificateList items={divingCertificates} tone="paper" />

          <div className="mt-12 flex flex-wrap items-start gap-x-8 gap-y-5">
            <p className="label-sm flex max-w-[44ch] items-start gap-2.5 leading-[1.85] text-ink-45">
              <Diamond className="mt-[3px] text-accent" size={5} />
              <span>
                The Rescue course is the one that carried over. Noticing a small
                problem early is a better description of financial risk than
                most of the definitions I had read.
              </span>
            </p>
            <div className="flex items-center gap-4">
              <Glyph name="wave" className="shrink-0 text-accent" />
              <ArrowLink href="/beyond-finance#passions" tone="paper">
                Where the diving fits in
              </ArrowLink>
            </div>
          </div>
        </div>
      </section>

      {/* ══ § 03 — Closing ═══════════════════════════════════════ */}
      <section className="wrap pt-24 pb-24 sm:pt-32 sm:pb-32">
        <div className="grid grid-cols-12 gap-x-6">
          <div className="col-span-12 lg:col-span-8 lg:col-start-3">
            <p className="serif-body display-italic max-w-[34ch] text-[clamp(1.35rem,3.4vw,1.9rem)]">
              A certificate is only evidence that something was finished. The
              finishing is the part that counts.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-x-8 gap-y-4">
              <ArrowLink href="/hall-of-fame">The rest of the record</ArrowLink>
              <ArrowLink href="/journey">
                Where these sit on the timeline
              </ArrowLink>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
