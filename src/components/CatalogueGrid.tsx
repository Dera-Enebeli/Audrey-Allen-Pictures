"use client";

import { useMemo, useState } from "react";
import type { Film, Series } from "@/lib/content";
import { PosterCard } from "./cards";
import { Container } from "./ui";

export function CatalogueGrid({
  items,
  hrefBase,
  kind = "film",
}: {
  items: (Film | Series)[];
  hrefBase: string;
  kind?: "film" | "series";
}) {
  const statuses = useMemo(
    () => Array.from(new Set(items.map((i) => i.status))),
    [items]
  );
  const [filter, setFilter] = useState("All");
  const shown =
    filter === "All" ? items : items.filter((i) => i.status === filter);

  return (
    <section className="pb-24">
      <Container>
        <div className="flex flex-wrap items-center gap-2 border-y border-line py-4">
          {["All", ...statuses].map((s) => {
            const on = filter === s;
            return (
              <button
                key={s}
                onClick={() => setFilter(s)}
                className={`label inline-flex min-h-10 items-center px-4 text-[0.62rem] transition-colors ${
                  on
                    ? "bg-ink text-paper"
                    : "text-ash hover:text-ink"
                }`}
              >
                {s}
              </button>
            );
          })}
          <span className="label ml-auto text-ash tabular-nums">
            {shown.length} {shown.length === 1 ? "title" : "titles"}
          </span>
        </div>

        <div className="mt-10 grid grid-cols-2 gap-x-5 gap-y-10 sm:grid-cols-3 lg:grid-cols-4">
          {shown.map((i) => (
            <PosterCard
              key={i.slug}
              item={i}
              href={`${hrefBase}/${i.slug}`}
              kind={kind}
              width="w-full"
            />
          ))}
        </div>

        {shown.length === 0 && (
          <p className="mt-20 text-ash">Nothing here yet.</p>
        )}
      </Container>
    </section>
  );
}
