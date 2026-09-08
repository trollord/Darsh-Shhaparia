/**
 * Hand-drawn line glyphs for the four pillars.
 * Deliberately not emoji and not an icon set — each one is a diagram
 * of the thing it names, drawn on the same 28px grid at 1px stroke.
 */

export type GlyphName =
  | "curve"
  | "bars"
  | "braces"
  | "fork"
  | "nib"
  | "wave"
  | "globe";

const common = {
  width: 30,
  height: 30,
  viewBox: "0 0 30 30",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};

export function Glyph({
  name,
  className = "",
}: {
  name: GlyphName;
  className?: string;
}) {
  switch (name) {
    // Normal distribution over an axis — probability.
    case "curve":
      return (
        <svg {...common} className={className} aria-hidden>
          <path d="M1 24c4.5 0 4.3-17 14-17s9.5 17 14 17" />
          <path d="M1 24h28" opacity="0.35" />
          <path d="M15 7v17" strokeDasharray="2 3" opacity="0.55" />
        </svg>
      );

    // Candlesticks — markets.
    case "bars":
      return (
        <svg {...common} className={className} aria-hidden>
          <path d="M6 5v20M15 2v26M24 8v17" opacity="0.45" />
          <rect x="3" y="11" width="6" height="9" />
          <rect x="12" y="6" width="6" height="13" />
          <rect x="21" y="14" width="6" height="7" />
        </svg>
      );

    // Braces around a node — code.
    case "braces":
      return (
        <svg {...common} className={className} aria-hidden>
          <path d="M11 3c-3 0-3.5 2-3.5 5S6 15 4 15c2 0 3.5 4 3.5 7s.5 5 3.5 5" />
          <path d="M19 3c3 0 3.5 2 3.5 5s1.5 7 3.5 7c-2 0-3.5 4-3.5 7s-.5 5-3.5 5" />
          <circle cx="15" cy="15" r="2" />
        </svg>
      );

    // A decision that branches — behaviour.
    case "fork":
      return (
        <svg {...common} className={className} aria-hidden>
          <path d="M15 27V17" />
          <path d="M15 17c0-5 3.5-5.5 8-5.5" />
          <path d="M15 17c0-7-4.5-7.5-9-9" />
          <circle cx="15" cy="27" r="1.6" />
          <circle cx="24" cy="11.2" r="1.6" />
          <circle cx="5.6" cy="7.6" r="1.6" />
        </svg>
      );

    // A pen nib — communication.
    case "nib":
      return (
        <svg {...common} className={className} aria-hidden>
          <path d="M15 2 7 20l8 8 8-8-8-18Z" />
          <path d="M15 12v13" />
          <path d="M9.4 19.6h11.2" opacity="0.5" />
        </svg>
      );

    // A surface line with bubbles rising to it — diving.
    case "wave":
      return (
        <svg {...common} className={className} aria-hidden>
          <path d="M1 7c3.5 0 3.5 3 7 3s3.5-3 7-3 3.5 3 7 3 3.5-3 7-3" />
          <path d="M1 13c3.5 0 3.5 3 7 3s3.5-3 7-3 3.5 3 7 3 3.5-3 7-3" opacity="0.4" />
          <circle cx="11" cy="24" r="2.4" />
          <circle cx="18" cy="27" r="1.4" opacity="0.6" />
          <circle cx="20" cy="21" r="1" opacity="0.45" />
        </svg>
      );

    // A meridian grid — geography and history.
    case "globe":
      return (
        <svg {...common} className={className} aria-hidden>
          <circle cx="15" cy="15" r="13" />
          <path d="M2 15h26" opacity="0.5" />
          <path d="M15 2c5 4 5 22 0 26" />
          <path d="M15 2c-5 4-5 22 0 26" opacity="0.5" />
        </svg>
      );
  }
}
