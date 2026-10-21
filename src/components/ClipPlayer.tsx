"use client";

import { useEffect, useRef, useState } from "react";

/**
 * Featured video clip with full native player controls — play/pause, scrub,
 * volume and fullscreen. Unlike the ambient tiles in a rail, these are
 * visitor-driven: nothing autoplays and nothing downloads until the player
 * scrolls into view.
 */
export function ClipPlayer({
  src,
  title,
  kind,
  caption,
  accent = "#111010",
  lead = false,
}: {
  src: string;
  title: string;
  kind: string;
  caption?: string;
  accent?: string;
  /** the lead clip gets the wide 16:9 frame; others are constrained */
  lead?: boolean;
}) {
  const wrapRef = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);
  const [failed, setFailed] = useState(false);

  useEffect(() => {
    const el = wrapRef.current;
    if (!el || typeof IntersectionObserver === "undefined") {
      setInView(true);
      return;
    }
    const io = new IntersectionObserver(
      (entries) => {
        if (entries.some((e) => e.isIntersecting)) {
          setInView(true);
          io.disconnect();
        }
      },
      { rootMargin: "400px" },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <figure className={lead ? "" : "mx-auto w-full max-w-[420px] lg:max-w-none"}>
      <div
        ref={wrapRef}
        className={`relative overflow-hidden bg-black ${
          lead ? "aspect-video" : "aspect-[9/16]"
        }`}
      >
        {inView && !failed ? (
          <video
            // Native controls: the visitor drives playback.
            controls
            preload="metadata"
            playsInline
            onError={() => setFailed(true)}
            className="h-full w-full object-cover"
            style={{ backgroundColor: accent }}
          >
            <source src={src} type="video/mp4" />
            Your browser cannot play this clip.
          </video>
        ) : (
          <div
            className="flex h-full w-full flex-col justify-between p-5"
            style={{ backgroundColor: accent }}
          >
            <span className="label">{kind}</span>
            <span className="font-sans text-[1.1rem] font-medium leading-tight tracking-[-0.01em] text-ink">
              {failed ? "This clip could not be loaded." : title}
            </span>
          </div>
        )}
      </div>

      <figcaption className="mt-4">
        <span className="label">{kind}</span>
        <span className="mt-2 block font-sans text-[1.05rem] font-medium leading-snug tracking-[-0.01em]">
          {title}
        </span>
        {caption && (
          <span className="mt-2 block text-[0.92rem] leading-relaxed text-ink/65">
            {caption}
          </span>
        )}
      </figcaption>
    </figure>
  );
}
