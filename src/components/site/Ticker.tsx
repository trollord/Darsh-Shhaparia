import { ticker } from "@/content/site";

/**
 * A slow status rail. The one Bloomberg gesture the design permits —
 * kept to 40px, monospaced, and paused on hover so it can be read.
 */
export function Ticker() {
  const items = [...ticker, ...ticker];

  return (
    <div className="inverted ticker-mask overflow-hidden border-y border-[var(--rule)] bg-navy py-3">
      <div className="ticker-track">
        {items.map((t, i) => (
          <span
            key={i}
            className="label-sm flex shrink-0 items-center gap-6 pr-6 text-paper/55"
          >
            <span
              aria-hidden
              className="inline-block h-[5px] w-[5px] rotate-45 bg-accent-3"
            />
            {t}
          </span>
        ))}
      </div>
    </div>
  );
}
