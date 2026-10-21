"use client";

import { useState } from "react";
import { Media } from "./Media";

/**
 * Full-bleed artwork for heroes, features and detail pages.
 *
 * - If a landscape `backdrop` (or a looping `video`) exists, it's used cover-fit.
 * - Otherwise it falls back to a cinematic treatment built from the portrait
 *   `poster`: a blurred, darkened fill with the poster centred on top. This is
 *   what makes titles with only a poster still look intentional and premium.
 */
export function Backdrop({
  poster,
  backdrop,
  video,
  accent,
  title,
  label,
  priority = false,
  position = "center",
  className = "",
  imgClassName = "",
  posterWidth = "w-[62%] max-w-[440px]",
  /**
   * `card` — the default: a small fixed-ratio poster card centred in the frame.
   * `fill` — the poster is as large as the frame's height allows and shows in
   *   full (no crop), with the blurred fill either side. Used on series pages.
   */
  posterFit = "card",
}: {
  poster?: string;
  backdrop?: string;
  video?: string;
  accent?: string;
  title?: string;
  label?: string;
  priority?: boolean;
  position?: string;
  className?: string;
  imgClassName?: string;
  posterWidth?: string;
  posterFit?: "card" | "fill";
}) {
  const [backdropFailed, setBackdropFailed] = useState(!backdrop);

  if (!backdropFailed) {
    return (
      <Media
        src={backdrop}
        video={video}
        alt={title ?? ""}
        accent={accent}
        title={title}
        label={label}
        priority={priority}
        position={position}
        className={className}
        imgClassName={imgClassName}
        onError={() => setBackdropFailed(true)}
      />
    );
  }

  return (
    // The caller's className (e.g. a hero's `scale-105`) belongs on the wrapper —
    // merging it into the blurred fill would fight the fill's own `scale-125`.
    <div className={`absolute inset-0 overflow-hidden bg-black ${className}`}>
      {/* blurred poster fill */}
      <Media
        src={poster}
        alt=""
        accent={accent}
        priority={priority}
        className="scale-125"
        imgClassName="blur-3xl"
      />
      <div className="absolute inset-0 bg-black/45" />

      {/* centred poster */}
      {posterFit === "fill" ? (
        // Series treatment: the whole poster, as tall as the frame allows,
        // with the blurred fill either side. Nothing is cropped.
        //
        // The image keeps its own ratio and is bounded by BOTH the frame's
        // height and width (`max-h-full max-w-full`), so a tall portrait fills
        // the height on desktop and scales down cleanly on a narrow phone
        // without letterboxing inside an oversized element.
        <div className="absolute inset-0 flex items-center justify-center px-6 py-10 sm:py-14">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={poster}
            alt={title ?? ""}
            loading={priority ? "eager" : "lazy"}
            decoding="async"
            className="h-auto w-auto max-h-full max-w-full object-contain shadow-2xl"
          />
        </div>
      ) : (
        <div className="absolute inset-0 flex items-center justify-center p-6">
          <div
            className={`relative aspect-[2/3] ${posterWidth} overflow-hidden shadow-2xl`}
          >
            <Media
              src={poster}
              alt={title ?? ""}
              accent={accent}
              title={title}
              label={label}
              priority={priority}
            />
          </div>
        </div>
      )}
    </div>
  );
}
