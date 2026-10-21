"use client";

import { useState } from "react";
import { Media } from "./Media";

/**
 * A fixed-aspect frame whose image is never cropped.
 *
 * Mixed-orientation photography (a wide 1080x601 set still, a tall portrait)
 * can't fill every frame without being zoomed in and losing its subject. So:
 *
 * - a blurred, scaled copy of the same image fills the frame edge to edge,
 * - the whole image sits on top, `object-contain`, fully visible,
 * - a subtle darkening layer keeps the blur from fighting the photo.
 *
 * This is the same treatment as the homepage hero backdrop, so a page of
 * mixed stills still reads as one deliberate, premium system.
 */
export function FramedMedia({
  src,
  alt = "",
  accent,
  title,
  label,
  priority = false,
  /** inner padding around the contained image, e.g. "p-3" */
  pad = "p-0",
  className = "",
  imgClassName = "",
  /** classes for the contained image only (e.g. hover transforms) */
  innerClassName = "",
}: {
  src?: string;
  alt?: string;
  accent?: string;
  title?: string;
  label?: string;
  priority?: boolean;
  pad?: string;
  className?: string;
  imgClassName?: string;
  innerClassName?: string;
}) {
  const [failed, setFailed] = useState(false);

  // No image (or it errored): let Media draw its typographic fallback tile.
  if (!src || failed) {
    return (
      <Media
        src={undefined}
        alt={alt}
        accent={accent}
        title={title}
        label={label}
        className={className}
        onError={() => setFailed(true)}
      />
    );
  }

  return (
    <div className={`relative h-full w-full overflow-hidden bg-black ${className}`}>
      {/* blurred fill — the frame is never empty, whatever the image ratio */}
      <Media
        src={src}
        alt=""
        accent={accent}
        className="absolute inset-0 scale-125"
        imgClassName="blur-2xl"
      />
      <div className="absolute inset-0 bg-black/35" />

      {/* the whole image, uncropped */}
      <div className={`absolute inset-0 flex items-center justify-center ${pad}`}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={src}
          alt={alt}
          loading={priority ? "eager" : "lazy"}
          decoding="async"
          onError={() => setFailed(true)}
          className={`max-h-full max-w-full object-contain ${imgClassName} ${innerClassName}`}
        />
      </div>
    </div>
  );
}
