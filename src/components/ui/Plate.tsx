import Image from "next/image";
import type { Photo } from "@/content/photos";

/**
 * A photographic plate. Unlike {@link Figure}, which reserves a slot at a
 * fixed ratio, a Plate renders a real photograph at its own proportions —
 * the grid stays ruled, the pictures stay uncropped.
 */
export function Plate({
  photo,
  fig,
  caption,
  className = "",
  sizes = "(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw",
  priority = false,
}: {
  photo: Photo;
  fig?: string;
  /** Overrides the caption registered with the photograph. */
  caption?: string;
  className?: string;
  sizes?: string;
  priority?: boolean;
}) {
  const text = caption ?? photo.caption;
  return (
    <figure className={`group ${className}`}>
      <div className="graph-paper relative overflow-hidden border border-[var(--rule)] bg-paper-2">
        <Image
          src={photo.src}
          alt={photo.alt}
          width={photo.w}
          height={photo.h}
          sizes={sizes}
          priority={priority}
          className="block h-auto w-full transition-transform duration-[900ms] ease-[var(--ease-out-quint)] group-hover:scale-[1.015]"
        />
      </div>
      {text && (
        <figcaption className="mt-3.5 flex items-baseline gap-3">
          {fig && <span className="label-sm shrink-0 text-accent">{fig}</span>}
          <span className="label-sm leading-[1.7] text-ink-45">{text}</span>
        </figcaption>
      )}
    </figure>
  );
}

/** Plate numbering: 1 → “Pl. 01”. */
export const pl = (i: number) => `Pl. ${String(i + 1).padStart(2, "0")}`;
