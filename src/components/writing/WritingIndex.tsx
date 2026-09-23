import Link from "next/link";
import { Reveal } from "@/components/ui/Reveal";
import { articles } from "@/content/writing";

/**
 * The published pieces, and nothing else. The category filter and the
 * pipeline list this page used to carry were removed deliberately — with
 * four essays there is nothing to filter, and a list of unwritten titles
 * is not a reading experience.
 */
export function WritingIndex() {
  const published = articles.filter((a) => a.status === "published");

  if (published.length === 0) return null;

  return (
    <section className="wrap pt-8 pb-24 sm:pt-10 sm:pb-32">
      <div className="border-t border-[var(--rule)]">
        {published.map((a, i) => (
          <Reveal key={a.slug} delay={i * 0.05}>
            <Link
              href={`/writing/${a.slug}`}
              className="row-hover group grid grid-cols-12 items-baseline gap-x-6 gap-y-4 border-b border-[var(--rule)] py-9"
            >
              <div className="col-span-12 flex items-center gap-4 md:col-span-3">
                <span className="label text-accent">{a.category}</span>
              </div>
              <div className="col-span-12 md:col-span-7">
                <h2 className="display max-w-[24ch] text-[clamp(1.5rem,3.6vw,2.15rem)]">
                  <span className="link-rule">{a.title}</span>
                </h2>
                {a.dek && (
                  <p className="serif-body mt-3 max-w-[52ch] text-[1rem] text-ink-45">
                    {a.dek}
                  </p>
                )}
              </div>
              <div className="col-span-12 flex items-center gap-4 md:col-span-2 md:flex-col md:items-end md:gap-2">
                <span className="label-sm num text-ink-45">{a.date}</span>
                <span className="label-sm text-ink-25">{a.readingTime}</span>
              </div>
            </Link>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
