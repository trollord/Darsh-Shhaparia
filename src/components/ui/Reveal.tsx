"use client";

import { motion, useReducedMotion } from "framer-motion";
import type { ReactNode } from "react";

const EASE = [0.22, 1, 0.36, 1] as const;

/**
 * A single, restrained entrance: 14px rise + fade, once, on scroll.
 * Everything on the site uses this. No parallax, no scale, no blur.
 */
export function Reveal({
  children,
  delay = 0,
  y = 14,
  className = "",
  as = "div",
}: {
  children: ReactNode;
  delay?: number;
  y?: number;
  className?: string;
  as?: "div" | "li" | "section" | "header" | "article";
}) {
  const reduce = useReducedMotion();
  const Comp = motion[as];

  if (reduce) return <div className={className}>{children}</div>;

  return (
    <Comp
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-8% 0px -8% 0px" }}
      transition={{ duration: 0.72, delay, ease: EASE }}
      className={className}
    >
      {children}
    </Comp>
  );
}

/** Staggered children — pass index. */
export function RevealList({
  children,
  className = "",
  step = 0.055,
}: {
  children: ReactNode[];
  className?: string;
  step?: number;
}) {
  return (
    <div className={className}>
      {children.map((child, i) => (
        <Reveal key={i} delay={i * step}>
          {child}
        </Reveal>
      ))}
    </div>
  );
}

/**
 * Masked line reveal for display headlines. Each line rises out from
 * behind a clipping edge — the one piece of typographic choreography
 * the site allows itself, reserved for h1s.
 */
export function LineReveal({
  lines,
  className = "",
  delay = 0,
}: {
  lines: ReactNode[];
  className?: string;
  delay?: number;
}) {
  const reduce = useReducedMotion();

  return (
    <span className={className}>
      {lines.map((line, i) => (
        <span key={i} className="block overflow-hidden pb-[0.08em]">
          {reduce ? (
            <span className="block">{line}</span>
          ) : (
            <motion.span
              className="block"
              initial={{ y: "108%" }}
              animate={{ y: "0%" }}
              transition={{
                duration: 1.05,
                delay: delay + i * 0.085,
                ease: EASE,
              }}
            >
              {line}
            </motion.span>
          )}
        </span>
      ))}
    </span>
  );
}
