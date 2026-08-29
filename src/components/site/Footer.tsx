import Link from "next/link";
import { nav, secondaryNav, site } from "@/content/site";
import { Diamond } from "@/components/ui/primitives";

export function Footer() {
  return (
    <footer className="inverted graph-paper-inv">
      <div className="wrap">
        {/* Closing statement — the last words of the brief, given room. */}
        <div className="grid grid-cols-12 gap-x-6 border-b border-[var(--rule)] py-20 sm:py-28">
          <div className="col-span-12 mb-8 md:col-span-3 md:mb-0 lg:col-span-2">
            <span className="label text-accent-3">Contact</span>
          </div>
          <div className="col-span-12 md:col-span-9 lg:col-span-10">
            <p className="display max-w-[18ch] text-[clamp(2rem,5.6vw,4rem)] text-paper">
              I don&rsquo;t know exactly where this journey will lead.{" "}
              <span className="display-italic text-accent-3">
                I&rsquo;m interested in finding out.
              </span>
            </p>
            <div className="mt-10">
              <Link
                href="/contact"
                className="label group inline-flex items-center gap-3 bg-paper px-6 py-4 text-navy transition-colors duration-300 hover:bg-accent-3"
              >
                Get in touch
                <svg
                  width="13"
                  height="9"
                  viewBox="0 0 13 9"
                  fill="none"
                  aria-hidden
                  className="arrow-slide"
                >
                  <path
                    d="M0 4.5h11M8 1l3.5 3.5L8 8"
                    stroke="currentColor"
                    strokeWidth="1.1"
                  />
                </svg>
              </Link>
            </div>
          </div>
        </div>

        {/* Directory */}
        <div className="grid grid-cols-2 gap-x-6 gap-y-12 py-16 md:grid-cols-4">
          <FooterCol title="Sections" items={nav.slice(0, 5)} />
          <FooterCol title="More" items={[...nav.slice(5), ...secondaryNav]} />
          <div>
            <p className="label mb-6 text-accent-3">Elsewhere</p>
            <ul className="space-y-3.5">
              {site.socials.map((s) => (
                <li key={s.label}>
                  <a
                    href={s.href}
                    target="_blank"
                    rel="noreferrer"
                    className="group block text-[0.875rem] text-paper/70 transition-colors hover:text-paper"
                  >
                    <span className="link-rule">{s.label}</span>
                    <span className="label-sm mt-1 block text-paper/35">
                      {s.handle}
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="label mb-6 text-accent-3">Enquiries</p>
            <a
              href={`mailto:${site.email}`}
              className="block text-[0.875rem] text-paper/70 transition-colors hover:text-paper"
            >
              <span className="link-rule">{site.email}</span>
            </a>
            <p className="serif-body mt-5 max-w-[26ch] text-[0.9375rem] text-paper/45">
              Writing, speaking, podcast collaborations and educational
              initiatives.
            </p>
          </div>
        </div>

        {/* Baseline */}
        <div className="flex flex-col gap-4 border-t border-[var(--rule)] py-7 sm:flex-row sm:items-center sm:justify-between">
          <p className="label-sm flex items-center gap-2.5 text-paper/40">
            <Diamond className="text-accent-3" size={5} />
            &copy; {site.year} {site.name}
          </p>
          <p className="label-sm text-paper/30">
            Set in Newsreader, Inter Tight &amp; JetBrains Mono
          </p>
        </div>
      </div>
    </footer>
  );
}

function FooterCol({
  title,
  items,
}: {
  title: string;
  items: { label: string; href: string; index: string }[];
}) {
  return (
    <div>
      <p className="label mb-6 text-accent-3">{title}</p>
      <ul className="space-y-3.5">
        {items.map((item) => (
          <li key={item.href}>
            <Link
              href={item.href}
              className="group flex items-baseline gap-3 text-[0.875rem] text-paper/70 transition-colors hover:text-paper"
            >
              <span className="label-sm text-paper/25">{item.index}</span>
              <span className="link-rule">{item.label}</span>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
