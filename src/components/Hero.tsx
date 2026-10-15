"use client";

import Link from "next/link";
import { useCallback, useEffect, useState } from "react";
import type { Film } from "@/lib/content";
import { Backdrop } from "./Backdrop";
import { Button, Container } from "./ui";
import { ArrowDown, PlayIcon } from "./Icons";

const DURATION = 6500;

export function Hero({ slides }: { slides: Film[] }) {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  const count = slides.length;

  const go = useCallback(
    (next: number) => setActive(((next % count) + count) % count),
    [count]
  );

  useEffect(() => {
    if (paused || count <= 1) return;
    const t = setTimeout(() => go(active + 1), DURATION);
    return () => clearTimeout(t);
  }, [active, paused, count, go]);

  const slide = slides[active];

  return (
    <section
      className="relative h-[100svh] min-h-[600px] w-full overflow-hidden bg-ink"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      {/* slides */}
      {slides.map((s, i) => (
        <div
          key={s.slug}
          className="absolute inset-0 transition-opacity duration-[1200ms] ease-[cubic-bezier(0.16,1,0.3,1)]"
          style={{ opacity: i === active ? 1 : 0 }}
          aria-hidden={i !== active}
        >
          <Backdrop
            poster={s.poster}
            backdrop={s.backdrop}
            video={i === active ? s.video : undefined}
            title={s.title}
            accent={s.accent}
            label={s.status}
            position="center"
            priority={i === 0}
            className="scale-105"
          />
        </div>
      ))}

      {/* gradient */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-black/40" />

      {/* content */}
      <div className="absolute inset-x-0 bottom-0">
        <Container className="pb-10 sm:pb-14">
          <div key={active} className="animate-fade-up max-w-3xl">
            <p className="label mb-4 text-white/70">
              {slide.status}
              {slide.releaseLabel ? ` — ${slide.releaseLabel}` : ""}
            </p>
            <h1 className="font-sans text-[2.9rem] font-medium leading-[0.9] tracking-[-0.035em] text-white sm:text-[4.6rem] lg:text-[6rem]">
              {slide.title}
            </h1>
            {slide.tagline && (
              <p className="mt-4 max-w-xl text-[1.05rem] leading-snug text-white/80">
                {slide.tagline}
              </p>
            )}
            <div className="mt-7 flex flex-wrap items-center gap-3">
              <Button
                href={`/films/${slide.slug}`}
                variant="light"
                size="lg"
              >
                {slide.status === "In Cinemas" ? "Buy Tickets" : "Learn More"}
              </Button>
              <Button
                href={`/films/${slide.slug}`}
                variant="outline"
                size="lg"
                className="border-white/40 text-white hover:border-white"
              >
                <PlayIcon className="h-[0.7rem] w-[0.7rem]" />
                Watch Trailer
              </Button>
            </div>
          </div>
        </Container>

        {/* controls */}
        <Container className="flex items-center justify-between border-t border-white/15 py-4">
          <div className="flex items-center gap-2">
            {slides.map((s, i) => (
              <button
                key={s.slug}
                onClick={() => go(i)}
                aria-label={`Go to ${s.title}`}
                aria-current={i === active}
                className="group flex items-center py-2"
              >
                <span
                  className={`h-px transition-all duration-500 ${
                    i === active ? "w-10 bg-white" : "w-5 bg-white/40 group-hover:bg-white/70"
                  }`}
                />
              </button>
            ))}
          </div>

          <div className="flex items-center gap-4 text-white">
            <span className="label tabular-nums">
              {String(active + 1).padStart(2, "0")} / {String(count).padStart(2, "0")}
            </span>
            <Link
              href="#in-theaters"
              aria-label="Scroll to content"
              className="hidden sm:block"
            >
              <ArrowDown className="h-4 w-4 animate-bounce" />
            </Link>
          </div>
        </Container>
      </div>
    </section>
  );
}
