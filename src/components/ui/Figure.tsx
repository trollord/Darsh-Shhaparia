import Image from "next/image";

/**
 * A framed image slot. Until a real photograph or screenshot is dropped
 * in, it renders as a ruled plate with its caption — which reads as a
 * deliberate part of the notebook rather than a broken image.
 */
export function Figure({
  src,
  alt,
  caption,
  fig,
  ratio = "4 / 3",
  className = "",
}: {
  src?: string;
  alt?: string;
  caption: string;
  fig?: string;
  ratio?: string;
  className?: string;
}) {
  return (
    <figure className={className}>
      <div
        className="graph-paper relative overflow-hidden border border-[var(--rule)] bg-paper-2"
        style={{ aspectRatio: ratio }}
      >
        {src ? (
          <Image
            src={src}
            alt={alt ?? caption}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 40vw"
          />
        ) : (
          <div className="absolute inset-0 flex items-end p-5">
            <span className="label-sm text-ink-25">Plate to follow</span>
          </div>
        )}
      </div>
      <figcaption className="mt-3.5 flex items-baseline gap-3">
        {fig && <span className="label-sm text-accent">{fig}</span>}
        <span className="label-sm leading-[1.7] text-ink-45">{caption}</span>
      </figcaption>
    </figure>
  );
}
