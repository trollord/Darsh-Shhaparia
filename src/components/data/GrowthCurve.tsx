/**
 * The learning curve: milestones completed, counted cumulatively, one point
 * per year.
 *
 * The y-axis is a real count — every unit is an entry listed in the timeline
 * directly beneath the chart — rather than an invented "progress score". That
 * matters here: a curve that bends upward because the underlying work bunched
 * up in one year is honest; a curve drawn to look like growth is not.
 *
 * Single series, so there is no legend — the caption names it. Colour comes
 * from `currentColor`, which means the accent flips correctly when the chart
 * is dropped into an `.inverted` section.
 */

export type CurvePoint = { label: string; sub?: string; value: number };

const W = 720;
const H = 300;
const PAD = { top: 24, right: 26, bottom: 42, left: 38 };

const PLOT_W = W - PAD.left - PAD.right;
const PLOT_H = H - PAD.top - PAD.bottom;

export function GrowthCurve({
  points,
  /** Index from which the line becomes projection rather than record. */
  plannedFrom,
  className = "",
  /** Point index to direct-label. Defaults to the steepest step. */
  highlight,
}: {
  points: CurvePoint[];
  plannedFrom?: number;
  className?: string;
  highlight?: number;
}) {
  const max = Math.max(...points.map((p) => p.value));
  // Round the axis up to a multiple of 3 so the ticks divide evenly.
  const top = Math.ceil(max / 3) * 3;

  const x = (i: number) =>
    PAD.left + (points.length === 1 ? 0 : (i / (points.length - 1)) * PLOT_W);
  const y = (v: number) => PAD.top + PLOT_H - (v / top) * PLOT_H;

  const coords = points.map((p, i) => ({ ...p, cx: x(i), cy: y(p.value) }));

  const cut =
    plannedFrom === undefined
      ? coords.length - 1
      : Math.max(0, Math.min(plannedFrom, coords.length - 1));

  const line = (from: number, to: number) =>
    coords
      .slice(from, to + 1)
      .map((c, i) => `${i === 0 ? "M" : "L"}${c.cx.toFixed(1)},${c.cy.toFixed(1)}`)
      .join("");

  // Area under the recorded part only — the projection gets no fill.
  const area =
    `M${coords[0].cx.toFixed(1)},${(PAD.top + PLOT_H).toFixed(1)}` +
    coords
      .slice(0, cut + 1)
      .map((c) => `L${c.cx.toFixed(1)},${c.cy.toFixed(1)}`)
      .join("") +
    `L${coords[cut].cx.toFixed(1)},${(PAD.top + PLOT_H).toFixed(1)}Z`;

  const ticks = [0, top / 3, (top / 3) * 2, top];
  const marked = highlight ?? cut;

  const summary = points
    .map((p) => `${p.label}: ${p.value}`)
    .join("; ");

  return (
    <figure className={className}>
      <svg
        viewBox={`0 0 ${W} ${H}`}
        className="text-accent block h-auto w-full"
        role="img"
        aria-label={`Cumulative milestones by year — ${summary}. The line rises slowly to 2025, then steps sharply at 2026.`}
      >
        {/* Grid — recessive, behind everything. */}
        {ticks.map((t) => (
          <g key={t}>
            <line
              x1={PAD.left}
              x2={W - PAD.right}
              y1={y(t)}
              y2={y(t)}
              stroke="var(--rule)"
              strokeWidth="1"
            />
            <text
              x={PAD.left - 10}
              y={y(t)}
              textAnchor="end"
              dominantBaseline="middle"
              className="num fill-current text-ink-25"
              style={{ fontSize: 11 }}
            >
              {t}
            </text>
          </g>
        ))}

        <path d={area} fill="currentColor" opacity="0.07" />

        {/* Recorded */}
        <path
          d={line(0, cut)}
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />

        {/* Projected */}
        {cut < coords.length - 1 && (
          <path
            d={line(cut, coords.length - 1)}
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeDasharray="4 5"
            opacity="0.5"
          />
        )}

        {coords.map((c, i) => {
          const planned = i > cut;
          return (
            <g key={c.label}>
              {/* Planned years are a ring, not a dot — readable on any
                  surface, and visibly "not yet" without relying on colour. */}
              <circle
                cx={c.cx}
                cy={c.cy}
                r="4"
                fill={planned ? "none" : "currentColor"}
                stroke="currentColor"
                strokeWidth="2"
                opacity={planned ? 0.55 : 1}
              />
              <text
                x={c.cx}
                y={H - PAD.bottom + 22}
                textAnchor="middle"
                className="num fill-current text-ink-45"
                style={{ fontSize: 12 }}
              >
                {c.label}
              </text>
              {c.sub && (
                <text
                  x={c.cx}
                  y={H - PAD.bottom + 37}
                  textAnchor="middle"
                  className="fill-current text-ink-25"
                  style={{ fontSize: 10, letterSpacing: "0.06em" }}
                >
                  {c.sub}
                </text>
              )}
            </g>
          );
        })}

        {/* One direct label, on the step that carries the story. */}
        <text
          x={coords[marked].cx - 10}
          y={coords[marked].cy - 13}
          textAnchor="end"
          className="num fill-current text-ink"
          style={{ fontSize: 13 }}
        >
          {coords[marked].value}
        </text>
      </svg>
    </figure>
  );
}
