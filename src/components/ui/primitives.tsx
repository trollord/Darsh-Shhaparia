import Link from "next/link";
import type { ReactNode } from "react";

/* ------------------------------------------------------------------
   Diamond — the recurring bullet of the system. A 45°-rotated square.
   ------------------------------------------------------------------ */
export function Diamond({
  className = "",
  size = 5,
}: {
  className?: string;
  size?: number;
}) {
  return (
    <span
      aria-hidden
      className={`inline-block shrink-0 rotate-45 bg-current ${className}`}
      style={{ width: size, height: size }}
    />
  );
}

/* ------------------------------------------------------------------
   SectionHead — margin rail + hairline + display title.
   Repeated on every section of every page. It is the page grid.
   ------------------------------------------------------------------ */
export function SectionHead({
  index,
  kicker,
  title,
  dek,
  align = "left",
  className = "",
}: {
  index: string;
  kicker?: string;
  title: ReactNode;
  dek?: ReactNode;
  align?: "left" | "wide";
  className?: string;
}) {
  return (
    <header className={`hair pt-6 sm:pt-8 ${className}`}>
      <div className="grid grid-cols-12 gap-x-6">
        <div className="col-span-12 mb-7 flex items-baseline gap-4 md:col-span-3 md:mb-0 md:block lg:col-span-2">
          <span className="label text-accent">§&thinsp;{index}</span>
          {kicker && (
            <span className="label block text-ink-45 md:mt-4">{kicker}</span>
          )}
        </div>
        <div className="col-span-12 md:col-span-9 lg:col-span-10">
          <h2
            className={`display text-[clamp(2.1rem,5.4vw,4rem)] ${
              align === "left" ? "max-w-[22ch]" : ""
            }`}
          >
            {title}
          </h2>
          {dek && (
            <div className="serif-body mt-6 max-w-[52ch] text-[1.0625rem] text-ink-70">
              {dek}
            </div>
          )}
        </div>
      </div>
    </header>
  );
}

/* ------------------------------------------------------------------
   PageHead — the masthead of an interior page.
   ------------------------------------------------------------------ */
export function PageHead({
  index,
  kicker,
  title,
  lede,
  aside,
}: {
  index: string;
  kicker: string;
  title: ReactNode;
  lede?: ReactNode;
  aside?: ReactNode;
}) {
  return (
    <section className="graph-paper fade-bottom border-b border-[var(--rule)]">
      <div className="wrap pt-32 pb-16 sm:pt-40 sm:pb-20">
        <div className="mb-8 flex items-center gap-4">
          <span className="label text-accent">§&thinsp;{index}</span>
          <span className="h-px w-8 bg-[var(--rule-strong)]" />
          <span className="label text-ink-45">{kicker}</span>
        </div>
        <h1 className="display max-w-[16ch] text-[clamp(2.75rem,8.5vw,6.5rem)]">
          {title}
        </h1>
        {lede && (
          <div className="serif-body mt-9 max-w-[46ch] text-[1.1875rem] text-ink-70">
            {lede}
          </div>
        )}
        {aside}
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------
   ArrowLink — text + hairline that draws + arrow that slides.
   ------------------------------------------------------------------ */
export function ArrowLink({
  href,
  children,
  className = "",
  tone = "ink",
  external = false,
}: {
  href: string;
  children: ReactNode;
  className?: string;
  tone?: "ink" | "accent" | "paper";
  /** Renders a plain anchor that opens in a new tab — for off-site links. */
  external?: boolean;
}) {
  const color =
    tone === "accent"
      ? "text-accent"
      : tone === "paper"
        ? "text-paper"
        : "text-ink";
  const As = external ? "a" : Link;
  const linkProps = external
    ? { target: "_blank", rel: "noreferrer" as const }
    : {};
  return (
    <As
      href={href}
      {...linkProps}
      className={`group/al label inline-flex items-center gap-2.5 ${color} ${className}`}
    >
      <span className="link-rule">{children}</span>
      <svg
        width="13"
        height="9"
        viewBox="0 0 13 9"
        fill="none"
        aria-hidden
        className="arrow-slide group-hover/al:translate-x-1"
      >
        <path
          d="M0 4.5h11M8 1l3.5 3.5L8 8"
          stroke="currentColor"
          strokeWidth="1.1"
        />
      </svg>
    </As>
  );
}

/* ------------------------------------------------------------------
   Button — squared, no radius theatre.
   ------------------------------------------------------------------ */
export function Button({
  href,
  children,
  variant = "solid",
  external = false,
}: {
  href: string;
  children: ReactNode;
  variant?: "solid" | "outline" | "solid-invert";
  /** Renders a plain anchor that opens in a new tab — for off-site links. */
  external?: boolean;
}) {
  const base =
    "label group/btn inline-flex items-center gap-3 px-6 py-4 transition-colors duration-300";
  const styles = {
    solid: "bg-ink text-paper hover:bg-accent",
    "solid-invert": "bg-paper text-navy hover:bg-accent-3 hover:text-navy",
    outline:
      "border border-[var(--rule-strong)] text-ink hover:border-accent hover:text-accent",
  }[variant];
  const arrow = (
    <svg
      width="13"
      height="9"
      viewBox="0 0 13 9"
      fill="none"
      aria-hidden
      className="arrow-slide group-hover/btn:translate-x-1"
    >
      <path
        d="M0 4.5h11M8 1l3.5 3.5L8 8"
        stroke="currentColor"
        strokeWidth="1.1"
      />
    </svg>
  );
  if (external) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noreferrer"
        className={`${base} ${styles}`}
      >
        {children}
        {arrow}
      </a>
    );
  }
  return (
    <Link href={href} className={`${base} ${styles}`}>
      {children}
      {arrow}
    </Link>
  );
}

/* ------------------------------------------------------------------
   Tag — small mono chip, bounded by a rule not a pill.
   ------------------------------------------------------------------ */
export function Tag({ children }: { children: ReactNode }) {
  return (
    <span className="label-sm border border-[var(--rule)] px-2.5 py-1.5 text-ink-45">
      {children}
    </span>
  );
}

/* ------------------------------------------------------------------
   Equation — display maths, set as type rather than an image.
   ------------------------------------------------------------------ */
export function Equation({
  children,
  caption,
}: {
  children: ReactNode;
  caption?: string;
}) {
  return (
    <figure className="my-10">
      <div className="border-y border-[var(--rule)] bg-[rgba(20,22,26,0.02)] px-6 py-9 text-center">
        <span className="equation text-[clamp(1.35rem,3.4vw,1.85rem)]">
          {children}
        </span>
      </div>
      {caption && (
        <figcaption className="label-sm mt-3 text-ink-45">{caption}</figcaption>
      )}
    </figure>
  );
}

/* ------------------------------------------------------------------
   Marginalia — a mono note in the left rail, like a paper's margin.
   ------------------------------------------------------------------ */
export function Marginalia({ children }: { children: ReactNode }) {
  return (
    <aside className="label-sm border-l border-accent pl-3 leading-[1.8] text-ink-45">
      {children}
    </aside>
  );
}
