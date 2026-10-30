"use client";

import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";
import type { Reel as ReelData } from "@/content/misc";

/**
 * A vertical reel. In the page it is a card the size of its column; opened,
 * it plays in a modal sized to the viewport, which is the only way a 9:16
 * video is comfortable to watch on a wide screen.
 *
 * Nothing about the video is fetched until the reader opens it. The `<video>`
 * carries `preload="none"` and deliberately no `poster` attribute — a poster
 * is fetched eagerly even when preload is off, and the card is already on
 * screen through next/image, which serves it responsively at a fraction of
 * the weight. So a visit to the page costs one small image, not a video.
 *
 * The modal is a native `<dialog>`: the top layer puts it above the page
 * without a z-index argument, and focus trapping, Escape and the backdrop all
 * come from the platform rather than from us.
 */
export function Reel({
  reel,
  className = "",
  sizes = "(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw",
  priority = false,
  /**
   * Caps the height of the card in the page. A 9:16 frame at full column
   * width is taller than a phone screen, so the width is capped instead and
   * the whole card scales down — the picture is never cropped.
   */
  maxH = "66vh",
}: {
  reel: ReelData;
  className?: string;
  sizes?: string;
  priority?: boolean;
  maxH?: string;
}) {
  const [open, setOpen] = useState(false);
  const dialogRef = useRef<HTMLDialogElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);

  function openReel() {
    dialogRef.current?.showModal();
    setOpen(true);
    // Called straight from the click so the user gesture is still in scope —
    // deferring this to a frame callback loses it on stricter autoplay rules.
    void videoRef.current?.play().catch(() => {});
  }

  const closeReel = useCallback(() => dialogRef.current?.close(), []);

  /** Fires for every route out of the dialog — button, Escape or backdrop. */
  function handleClose() {
    setOpen(false);
    const v = videoRef.current;
    if (v) {
      v.pause();
      v.currentTime = 0;
    }
  }

  // showModal() blocks interaction but not scrolling, so the page drifts
  // behind the dialog on a touch device unless the body is pinned.
  useEffect(() => {
    if (!open) return;
    const { overflow } = document.body.style;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = overflow;
    };
  }, [open]);

  const ratio = `${reel.w} / ${reel.h}`;

  return (
    <figure
      // The cap lives on the figure so the caption keeps the card's measure
      // and the two stay aligned when the card is narrower than its column.
      className={`group mx-auto ${className}`}
      style={{ maxWidth: `calc(${maxH} * ${reel.w} / ${reel.h})` }}
    >
      <button
        type="button"
        onClick={openReel}
        aria-label={`Play — ${reel.title}`}
        aria-haspopup="dialog"
        className="graph-paper relative block w-full cursor-pointer overflow-hidden border border-[var(--rule)] bg-paper-2"
        style={{ aspectRatio: ratio }}
      >
        <Image
          src={reel.poster}
          alt={reel.alt}
          fill
          sizes={sizes}
          priority={priority}
          className="object-cover transition-transform duration-[900ms] ease-[var(--ease-out-quint)] group-hover:scale-[1.015]"
        />

        {/* A square, not a pill — the system has no radius. */}
        <span className="absolute inset-0 flex items-center justify-center">
          <span className="flex items-center gap-3 border border-[rgba(245,242,236,0.5)] bg-[rgba(20,22,26,0.58)] px-4 py-3 backdrop-blur-[2px] transition-colors duration-300 group-hover:border-paper group-hover:bg-[rgba(20,22,26,0.78)] sm:px-5 sm:py-3.5">
            <svg width="9" height="11" viewBox="0 0 9 11" aria-hidden>
              <path d="M0 0l9 5.5L0 11z" fill="var(--color-paper)" />
            </svg>
            <span className="label text-paper">Play</span>
          </span>
        </span>

        <span className="label-sm absolute right-3 bottom-3 border border-[rgba(245,242,236,0.4)] bg-[rgba(20,22,26,0.58)] px-2 py-1.5 text-paper sm:right-4 sm:bottom-4 sm:px-2.5">
          {reel.duration}
        </span>
      </button>

      {reel.caption && (
        <figcaption className="label-sm mt-3.5 leading-[1.7] text-ink-45">
          {reel.caption}
        </figcaption>
      )}

      <dialog
        ref={dialogRef}
        onClose={handleClose}
        aria-label={reel.title}
        className="reel-dialog"
      >
        {/* Clicking the surround closes; the stage itself swallows the click. */}
        <div
          onClick={closeReel}
          className="flex h-full w-full items-center justify-center p-4 sm:p-6"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="reel-stage flex w-full flex-col"
            style={{
              maxWidth: `calc((100dvh - 9rem) * ${reel.w} / ${reel.h})`,
            }}
          >
            <div className="flex items-end justify-between gap-5 pb-3">
              <p className="label leading-[1.5] text-[var(--color-paper)]">
                {reel.title}
              </p>
              <button
                type="button"
                onClick={closeReel}
                className="label flex shrink-0 cursor-pointer items-center gap-2.5 border border-[rgba(245,242,236,0.32)] px-3 py-2.5 text-[var(--color-paper)] transition-colors duration-300 hover:border-[var(--color-paper)] hover:bg-[rgba(245,242,236,0.08)]"
              >
                <svg width="9" height="9" viewBox="0 0 9 9" aria-hidden>
                  <path
                    d="M0 0l9 9M9 0L0 9"
                    stroke="currentColor"
                    strokeWidth="1.2"
                  />
                </svg>
                Close
              </button>
            </div>

            <video
              ref={videoRef}
              preload="none"
              playsInline
              controls
              style={{ aspectRatio: ratio }}
              className="w-full border border-[rgba(245,242,236,0.22)] bg-navy"
            >
              <source src={reel.src} type="video/mp4" />
              <a href={reel.src}>Download the clip</a>
            </video>

            <p className="label-sm mt-3 leading-[1.7] text-[rgba(245,242,236,0.52)]">
              {reel.caption}
            </p>
          </div>
        </div>
      </dialog>
    </figure>
  );
}
