"use client";

import { useEffect, useState } from "react";
import { ChevronUp } from "./Icons";

export function ScrollToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setVisible(window.scrollY > 200);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  if (!visible) return null;

  return (
    <button
      type="button"
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      className="fixed bottom-8 right-8 z-50 flex h-12 w-12 items-center justify-center rounded-full border border-line bg-paper/90 backdrop-blur-sm text-ink transition-all duration-300 hover:border-ink hover:bg-paper hover:scale-105 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ink focus-visible:ring-offset-2 focus-visible:ring-offset-paper"
      aria-label="Scroll to top"
    >
      <ChevronUp className="h-6 w-6" aria-hidden="true" />
    </button>
  );
}