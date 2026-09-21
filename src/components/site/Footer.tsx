import Link from "next/link";
import { nav, secondaryNav, site } from "@/content/site";
import { Diamond } from "@/components/ui/primitives";

export function Footer() {
  return (
    <footer className="inverted graph-paper-inv">
      <div className="wrap">
        {/* Directory */}
        <div className="grid grid-cols-2 gap-x-6 gap-y-12 pt-20 pb-16 md:grid-cols-4">
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
