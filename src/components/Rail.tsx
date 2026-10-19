"use client";

import { useRef } from "react";
import type { ReactNode } from "react";
import { ChevronLeft, ChevronRight } from "./Icons";

export function Rail({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);

  const scroll = (dir: 1 | -1) => {
    const el = ref.current;
    if (!el) return;
    el.scrollBy({ left: dir * el.clientWidth * 0.92, behavior: "smooth" });
  };

  return (
    <div className={className}>
      <div
        ref={ref}
        className="no-scrollbar flex snap-x snap-mandatory gap-4 overflow-x-auto scroll-smooth sm:gap-5"
      >
        {children}
      </div>

      <div className="mt-6 flex items-center gap-2">
        <button
          aria-label="Previous"
          onClick={() => scroll(-1)}
          className="flex h-9 w-9 items-center justify-center border border-line transition-colors hover:border-ink"
        >
          <ChevronLeft className="h-4 w-4" />
        </button>
        <button
          aria-label="Next"
          onClick={() => scroll(1)}
          className="flex h-9 w-9 items-center justify-center border border-line transition-colors hover:border-ink"
        >
          <ChevronRight className="h-4 w-4" />
        </button>
      </div>
    </div>
  );
}
