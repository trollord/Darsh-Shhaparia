/**
 * A code plate. Numbered gutter, no syntax highlighting — the point is
 * that the code is short enough to read, not that it is colourful.
 */
export function CodeBlock({
  lang,
  lines,
  caption,
}: {
  lang: string;
  lines: string[];
  caption?: string;
}) {
  return (
    <figure className="inverted my-10 border border-[var(--rule-inv-strong)] bg-navy">
      <figcaption className="flex items-center justify-between border-b border-[var(--rule)] px-5 py-3">
        <span className="label text-accent-3">{lang}</span>
        {caption && <span className="label-sm text-paper/35">{caption}</span>}
      </figcaption>
      <pre className="overflow-x-auto px-5 py-5">
        <code className="block font-mono text-[0.8125rem] leading-[1.85] text-paper/85">
          {lines.map((l, i) => (
            <span key={i} className="flex gap-5">
              <span className="num w-5 shrink-0 text-right text-paper/25 select-none">
                {i + 1}
              </span>
              <span className="whitespace-pre">{l || " "}</span>
            </span>
          ))}
        </code>
      </pre>
    </figure>
  );
}
