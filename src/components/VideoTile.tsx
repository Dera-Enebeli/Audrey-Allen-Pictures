"use client";

import { useState } from "react";
import type { VideoEntry } from "@/lib/content";
import { PlayIcon } from "./Icons";

/**
 * Click-to-play YouTube tile. Nothing is requested from YouTube until the
 * user hits play — before that we render our own poster frame from the
 * video's thumbnail, so the page stays fast, cookie-free and on-palette.
 *
 * Thumbnails come from i.ytimg.com (an image-only host, no cookies). If the
 * request fails we fall back to a gold-edged typographic tile.
 */
export function VideoTile({
  video,
  className = "",
}: {
  video: VideoEntry;
  className?: string;
}) {
  const [playing, setPlaying] = useState(false);
  const [thumbFailed, setThumbFailed] = useState(false);

  const watchUrl = `https://www.youtube.com/watch?v=${video.youtubeId}`;
  const embedUrl = `https://www.youtube-nocookie.com/embed/${video.youtubeId}?autoplay=1&rel=0`;
  const thumbUrl = `https://i.ytimg.com/vi/${video.youtubeId}/hqdefault.jpg`;

  return (
    <figure className={className}>
      {playing ? (
        <div className="relative aspect-video w-full overflow-hidden bg-black">
          <iframe
            src={embedUrl}
            title={video.title}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="absolute inset-0 h-full w-full"
          />
        </div>
      ) : (
        <button
          type="button"
          onClick={() => setPlaying(true)}
          aria-label={`Play ${video.title}`}
          className="group relative block aspect-video w-full overflow-hidden bg-smoke"
        >
          {!thumbFailed ? (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              src={thumbUrl}
              alt=""
              loading="lazy"
              decoding="async"
              onError={() => setThumbFailed(true)}
              className="h-full w-full object-cover opacity-80 transition-opacity duration-500 group-hover:opacity-100"
            />
          ) : (
            <span className="absolute inset-0 flex flex-col justify-between p-5">
              <span className="label">{video.kind}</span>
              <span className="font-sans text-[1.3rem] font-medium leading-[1.1] tracking-[-0.02em] text-ink">
                {video.title}
              </span>
            </span>
          )}

          <span className="absolute inset-0 flex items-center justify-center">
            <span className="flex h-14 w-14 items-center justify-center rounded-full border border-gold/70 bg-black/50 backdrop-blur-sm transition-transform duration-300 group-hover:scale-110">
              <PlayIcon className="h-4 w-4 text-gold" />
            </span>
          </span>
        </button>
      )}

      <figcaption className="mt-4 flex items-start justify-between gap-4">
        <span className="min-w-0">
          <span className="label">{video.kind}</span>
          <span className="mt-2 block font-sans text-[1.05rem] font-medium leading-snug tracking-[-0.01em]">
            {video.title}
          </span>
        </span>
        <a
          href={watchUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="label mt-0.5 inline-flex min-h-10 shrink-0 items-center transition-opacity hover:opacity-70"
        >
          YouTube ↗
        </a>
      </figcaption>
    </figure>
  );
}
