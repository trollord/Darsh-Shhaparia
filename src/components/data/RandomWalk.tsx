/**
 * A random walk, generated once at module load from a fixed seed so the
 * server and the client draw exactly the same line. It is decoration,
 * but it is honest decoration: this is the actual object of R-01.
 */

function makeWalk(seed: number, n: number, w: number, h: number) {
  // Park–Miller LCG. Deterministic, tiny, good enough for a drawing.
  let s = seed;
  const rand = () => {
    s = (s * 16807) % 2147483647;
    return s / 2147483647;
  };

  let v = 0;
  const vals: number[] = [];
  for (let i = 0; i < n; i++) {
    v += rand() - 0.48; // faint upward drift
    vals.push(v);
  }

  const min = Math.min(...vals);
  const max = Math.max(...vals);
  const span = max - min || 1;

  return vals
    .map((val, i) => {
      const x = (i / (n - 1)) * w;
      const y = h - ((val - min) / span) * h * 0.86 - h * 0.07;
      return `${x.toFixed(1)},${y.toFixed(1)}`;
    })
    .join("L");
}

const W = 1200;
const H = 220;
const WALK_A = makeWalk(20260302, 260, W, H);
const WALK_B = makeWalk(77451, 260, W, H);

export function RandomWalk({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox={`0 0 ${W} ${H}`}
      preserveAspectRatio="none"
      className={className}
      aria-hidden
    >
      <path
        d={`M${WALK_B}`}
        fill="none"
        stroke="rgba(245,242,236,0.07)"
        strokeWidth="1.2"
      />
      <path
        d={`M${WALK_A}`}
        fill="none"
        stroke="rgba(79,192,165,0.16)"
        strokeWidth="1.4"
      />
    </svg>
  );
}
