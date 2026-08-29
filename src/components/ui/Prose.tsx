import { Fragment, type ReactNode } from "react";

/* ------------------------------------------------------------------
   MathText — sets an equation as type, not as an image.
   Understands ^{sup} and _{sub}; everything else is passed through
   in the display serif's italic, which is where maths belongs.
   ------------------------------------------------------------------ */
export function MathText({ children }: { children: string }) {
  const parts: ReactNode[] = [];
  const re = /([\^_])\{([^}]*)\}/g;
  let last = 0;
  let m: RegExpExecArray | null;
  let k = 0;

  while ((m = re.exec(children)) !== null) {
    if (m.index > last) parts.push(children.slice(last, m.index));
    const Tag = m[1] === "^" ? "sup" : "sub";
    parts.push(
      <Tag key={k++} className="text-[0.62em]">
        {m[2]}
      </Tag>,
    );
    last = m.index + m[0].length;
  }
  if (last < children.length) parts.push(children.slice(last));

  return <>{parts.map((p, i) => <Fragment key={i}>{p}</Fragment>)}</>;
}

/* Inline emphasis: *like this* becomes italic. */
function Inline({ children }: { children: string }) {
  const parts = children.split(/(\*[^*]+\*)/g);
  return (
    <>
      {parts.map((p, i) =>
        p.startsWith("*") && p.endsWith("*") && p.length > 2 ? (
          <em key={i}>{p.slice(1, -1)}</em>
        ) : (
          <Fragment key={i}>{p}</Fragment>
        ),
      )}
    </>
  );
}

/* ------------------------------------------------------------------
   Prose — renders the plain-string body format used across content:
     "## "  subhead      "> "  pull quote
     "$$ "  equation     "— "  list item
   Anything else is a paragraph.
   ------------------------------------------------------------------ */
export function Prose({ body }: { body: string[] }) {
  const blocks: ReactNode[] = [];
  let list: string[] = [];
  let firstPara = true;

  const flushList = (key: string) => {
    if (!list.length) return;
    blocks.push(
      <ul key={key} className="my-8 border-t border-[var(--rule)]">
        {list.map((li, i) => (
          <li
            key={i}
            className="serif-body flex gap-4 border-b border-[var(--rule)] py-4 text-[1.0625rem] text-ink-70"
          >
            <span
              aria-hidden
              className="mt-[0.62em] inline-block h-[4px] w-[4px] shrink-0 rotate-45 bg-accent"
            />
            <span><Inline>{li}</Inline></span>
          </li>
        ))}
      </ul>,
    );
    list = [];
  };

  body.forEach((line, i) => {
    if (line.startsWith("— ")) {
      list.push(line.slice(2));
      return;
    }
    flushList(`l${i}`);

    if (line.startsWith("## ")) {
      blocks.push(
        <h2
          key={i}
          className="display mt-16 mb-6 max-w-[24ch] text-[clamp(1.5rem,3.4vw,2rem)]"
        >
          {line.slice(3)}
        </h2>,
      );
    } else if (line.startsWith("> ")) {
      blocks.push(
        <blockquote
          key={i}
          className="my-12 border-l border-accent py-1 pl-7 sm:-ml-7"
        >
          <p className="display display-italic max-w-[26ch] text-[clamp(1.4rem,3.4vw,1.9rem)] text-ink">
            {line.slice(2)}
          </p>
        </blockquote>,
      );
    } else if (line.startsWith("$$ ")) {
      blocks.push(
        <div key={i} className="my-11 border-y border-[var(--rule)] bg-[rgba(20,22,26,0.02)] px-6 py-9 text-center">
          <span className="equation text-[clamp(1.25rem,3.2vw,1.7rem)]">
            <MathText>{line.slice(3)}</MathText>
          </span>
        </div>,
      );
    } else {
      const isFirst = firstPara;
      firstPara = false;
      blocks.push(
        <p
          key={i}
          className={`serif-body mb-7 text-[1.125rem] text-ink sm:text-[1.1875rem] ${
            isFirst ? "first-para" : ""
          }`}
        >
          <Inline>{line}</Inline>
        </p>,
      );
    }
  });

  flushList("last");

  // Measure: ~72 characters at 19px in the display serif.
  return <div className="prose-body max-w-[40rem]">{blocks}</div>;
}
