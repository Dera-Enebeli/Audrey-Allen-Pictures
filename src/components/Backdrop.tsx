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
    <div className="absolute inset-0 overflow-hidden bg-black">
      {/* blurred poster fill */}
      <Media
        src={poster}
        alt=""
        accent={accent}
        priority={priority}
        className={`scale-125 ${className}`}
        imgClassName="blur-3xl"
      />
      <div className="absolute inset-0 bg-black/45" />

      {/* centred poster */}
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
    </div>
  );
}
