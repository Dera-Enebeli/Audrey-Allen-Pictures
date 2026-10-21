"use client";

import { useEffect, useRef, useState } from "react";

type MediaProps = {
  /** image path; used as poster when `video` is set */
  src?: string;
  /** looping preview video path */
  video?: string;
  alt?: string;
  /** fallback tile colour */
  accent?: string;
  /** text shown on the fallback tile */
  title?: string;
  /** small label on the fallback tile */
  label?: string;
  className?: string;
  imgClassName?: string;
  /** object-position for the image */
  position?: string;
  /** eager-load the first slide / above-the-fold media */
  priority?: boolean;
  /** called when the asset fails to load (missing file, etc.) */
  onError?: () => void;
};

/**
 * Renders an image, a looping video, or — if the asset is missing — an
 * intentional typographic tile. Drop files into /public/media and they appear
 * automatically.
 */
export function Media({
  src,
  video,
  alt = "",
  accent = "#1c1c1c",
  title,
  label,
  className = "",
  imgClassName = "",
  position = "center",
  priority = false,
  onError,
}: MediaProps) {
  const [failed, setFailed] = useState(false);
  const showImage = Boolean(src) && !failed;

  // Videos only start loading once they're near the viewport — a rail of clips
  // would otherwise pull every file down on page load.
  //
  // Note: we observe the nearest *scrollable* ancestor (the rail), not the tile
  // itself. Tiles inside a horizontal rail sit outside the viewport to the
  // right, so observing them directly would never fire and the clips would
  // never load.
  const wrapRef = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(priority);

  useEffect(() => {
    if (priority || inView) return;
    const el = wrapRef.current;
    if (!el || typeof IntersectionObserver === "undefined") {
      setInView(true);
      return;
    }

    // Walk up to the scrolling container (the Rail), falling back to the tile.
    let target: HTMLElement = el;
    for (let p = el.parentElement; p; p = p.parentElement) {
      const o = getComputedStyle(p).overflowX;
      if (o === "auto" || o === "scroll") {
        target = p;
        break;
      }
    }

    const io = new IntersectionObserver(
      (entries) => {
        if (entries.some((e) => e.isIntersecting)) {
          setInView(true);
          io.disconnect();
        }
      },
      { rootMargin: "600px" },
    );
    io.observe(target);
    return () => io.disconnect();
  }, [priority, inView]);

  const fail = () => {
    setFailed(true);
    onError?.();
  };

  if (video && !failed) {
    return (
      <div ref={wrapRef} className={`h-full w-full ${className}`}>
        {inView ? (
          <video
            className="h-full w-full object-cover"
            style={{ objectPosition: position }}
            poster={src || undefined}
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
            onError={fail}
          >
            <source src={video} type="video/mp4" />
          </video>
        ) : (
          <div className="h-full w-full" style={{ backgroundColor: accent }} />
        )}
      </div>
    );
  }

  if (showImage) {
    return (
      // eslint-disable-next-line @next/next/no-img-element
      <img
        src={src}
        alt={alt}
        loading={priority ? "eager" : "lazy"}
        decoding="async"
        onError={fail}
        className={`h-full w-full object-cover ${imgClassName} ${className}`}
        style={{ objectPosition: position }}
      />
    );
  }

  // Typographic fallback — looks deliberate, never broken.
  return (
    <div
      className={`relative flex h-full w-full flex-col justify-between overflow-hidden p-4 ${className}`}
      style={{ backgroundColor: accent }}
    >
      <span className="label text-[0.6rem] text-white/70">{label}</span>
      <span className="font-sans text-[1.6rem] font-medium leading-[0.95] tracking-[-0.03em] text-white/95">
        {title}
      </span>
    </div>
  );
}
