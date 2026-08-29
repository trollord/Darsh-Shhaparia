"use client";

import { useId, useMemo, useState } from "react";

/* ------------------------------------------------------------------
   FIG. 01 — Compound growth.
   The site opens with a working model rather than a stock photograph.
   Monthly compounding, monthly contributions, plotted against the
   same money with no growth at all so the gap is the whole point.
   ------------------------------------------------------------------ */

const W = 520;
const H = 260;
const PAD = { t: 18, r: 16, b: 26, l: 16 };

function inr(n: number) {
  if (n >= 1e7) return `₹${(n / 1e7).toFixed(2)} Cr`;
  if (n >= 1e5) return `₹${(n / 1e5).toFixed(2)} L`;
  return `₹${Math.round(n).toLocaleString("en-IN")}`;
}

export function CompoundChart() {
  const [rate, setRate] = useState(8);
  const [years, setYears] = useState(30);

  const principal = 10000;
  const monthly = 1000;

  const { path, area, flatPath, total, invested, growth, len } = useMemo(() => {
    const i = rate / 100 / 12;
    const N = years * 12;

    const series: number[] = [];
    const flat: number[] = [];
    for (let m = 0; m <= N; m++) {
      const lump = principal * Math.pow(1 + i, m);
      const contrib = i === 0 ? monthly * m : monthly * ((Math.pow(1 + i, m) - 1) / i);
      series.push(lump + contrib);
      flat.push(principal + monthly * m);
    }

    const max = series[series.length - 1] || 1;
    const iw = W - PAD.l - PAD.r;
    const ih = H - PAD.t - PAD.b;

    const x = (m: number) => PAD.l + (m / N) * iw;
    const y = (v: number) => PAD.t + ih - (v / max) * ih;

    // Sample ~90 points; the curve is smooth enough that more is waste.
    const stepM = Math.max(1, Math.floor(N / 90));
    const pts: string[] = [];
    const flatPts: string[] = [];
    for (let m = 0; m <= N; m += stepM) {
      pts.push(`${x(m).toFixed(2)},${y(series[m]).toFixed(2)}`);
      flatPts.push(`${x(m).toFixed(2)},${y(flat[m]).toFixed(2)}`);
    }
    pts.push(`${x(N).toFixed(2)},${y(series[N]).toFixed(2)}`);
    flatPts.push(`${x(N).toFixed(2)},${y(flat[N]).toFixed(2)}`);

    const d = `M${pts.join("L")}`;
    const fd = `M${flatPts.join("L")}`;
    const a = `${d}L${x(N).toFixed(2)},${(PAD.t + ih).toFixed(2)}L${PAD.l},${(
      PAD.t + ih
    ).toFixed(2)}Z`;

    return {
      path: d,
      area: a,
      flatPath: fd,
      total: series[N],
      invested: flat[N],
      growth: series[N] - flat[N],
      len: Math.round(iw * 1.6),
      endX: x(N),
      endY: y(series[N]),
    };
  }, [rate, years]);

  const gid = useId();

  return (
    <figure className="inverted border border-[var(--rule-inv-strong)] bg-navy">
      {/* Panel header — reads like an instrument, not a card */}
      <figcaption className="flex items-center justify-between border-b border-[var(--rule)] px-5 py-3.5">
        <span className="label text-accent-3">Fig.&thinsp;01</span>
        <span className="label-sm text-paper/40">Compound growth</span>
      </figcaption>

      <div className="px-5 pt-5">
        <svg
          viewBox={`0 0 ${W} ${H}`}
          className="h-auto w-full"
          role="img"
          aria-label={`Compound growth of ₹10,000 plus ₹1,000 monthly at ${rate}% over ${years} years, reaching ${inr(total)}`}
        >
          <defs>
            <linearGradient id={`fill-${gid}`} x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#4fc0a5" stopOpacity="0.22" />
              <stop offset="100%" stopColor="#4fc0a5" stopOpacity="0" />
            </linearGradient>
          </defs>

          {/* Horizontal reference rules */}
          {[0, 0.25, 0.5, 0.75, 1].map((f) => {
            const yy = PAD.t + (H - PAD.t - PAD.b) * f;
            return (
              <line
                key={f}
                x1={PAD.l}
                x2={W - PAD.r}
                y1={yy}
                y2={yy}
                stroke="rgba(245,242,236,0.10)"
                strokeWidth="1"
              />
            );
          })}

          {/* The same money, contributed but never invested */}
          <path
            d={flatPath}
            fill="none"
            stroke="rgba(245,242,236,0.34)"
            strokeWidth="1"
            strokeDasharray="3 4"
          />

          <path d={area} fill={`url(#fill-${gid})`} />
          <path
            key={`${rate}-${years}`}
            d={path}
            fill="none"
            stroke="#4fc0a5"
            strokeWidth="1.6"
            className="draw-line"
            style={{ ["--len" as string]: len }}
          />

          {/* X ticks */}
          {[0, 0.5, 1].map((f) => (
            <text
              key={f}
              x={PAD.l + (W - PAD.l - PAD.r) * f}
              y={H - 8}
              fill="rgba(245,242,236,0.35)"
              fontSize="9"
              fontFamily="var(--font-jetbrains), monospace"
              letterSpacing="0.1em"
              textAnchor={f === 0 ? "start" : f === 1 ? "end" : "middle"}
            >
              {Math.round(years * f)}Y
            </text>
          ))}
        </svg>
      </div>

      {/* Readout */}
      <dl className="grid grid-cols-3 border-t border-[var(--rule)]">
        <Stat label="Invested" value={inr(invested)} />
        <Stat label="Growth" value={inr(growth)} accent />
        <Stat label="Total" value={inr(total)} last />
      </dl>

      {/* Controls */}
      <div className="space-y-4 border-t border-[var(--rule)] px-5 py-5">
        <Slider
          label="Return"
          value={`${rate.toFixed(1)}%`}
          min={2}
          max={16}
          step={0.5}
          v={rate}
          onChange={setRate}
        />
        <Slider
          label="Horizon"
          value={`${years} years`}
          min={5}
          max={45}
          step={1}
          v={years}
          onChange={setYears}
        />
      </div>

      <p className="label-sm border-t border-[var(--rule)] px-5 py-3.5 leading-[1.7] text-paper/35">
        ₹10,000 initial &middot; ₹1,000 monthly &middot; compounded monthly.
        Dashed line = contributions without growth.
      </p>
    </figure>
  );
}

function Stat({
  label,
  value,
  accent,
  last,
}: {
  label: string;
  value: string;
  accent?: boolean;
  last?: boolean;
}) {
  return (
    <div className={`px-5 py-4 ${last ? "" : "border-r border-[var(--rule)]"}`}>
      <dt className="label-sm mb-2 text-paper/35">{label}</dt>
      <dd
        className={`num text-[0.9375rem] tracking-tight ${
          accent ? "text-accent-3" : "text-paper"
        }`}
      >
        {value}
      </dd>
    </div>
  );
}

function Slider({
  label,
  value,
  min,
  max,
  step,
  v,
  onChange,
}: {
  label: string;
  value: string;
  min: number;
  max: number;
  step: number;
  v: number;
  onChange: (n: number) => void;
}) {
  return (
    <label className="block">
      <span className="mb-2.5 flex items-baseline justify-between">
        <span className="label-sm text-paper/40">{label}</span>
        <span className="num text-[0.8125rem] text-paper">{value}</span>
      </span>
      <input
        type="range"
        min={min}
        max={max}
        step={step}
        value={v}
        onChange={(e) => onChange(Number(e.target.value))}
        aria-label={label}
      />
    </label>
  );
}
