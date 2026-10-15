import Link from "next/link";
import type { Film, Series } from "@/lib/content";
import { genreLabel } from "@/lib/content";
import { Media } from "./Media";
import { StatusBadge } from "./ui";

/** Portrait poster card — used in rails and grids across the site. */
export function PosterCard({
  item,
  href,
  kind = "film",
  className = "",
  width = "w-[68vw] sm:w-[300px]",
}: {
  item: Film | Series;
  href: string;
  kind?: "film" | "series";
  className?: string;
  width?: string;
}) {
  const meta = genreLabel(item);
  return (
    <Link
      href={href}
      className={`group block shrink-0 snap-start ${width} ${className}`}
    >
      <div className="relative aspect-[2/3] overflow-hidden bg-smoke">
        <Media
          src={item.poster}
          alt={item.title}
          accent={item.accent}
          title={item.title}
          label={item.status}
          imgClassName="transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.04]"
        />
        <div className="absolute left-3 top-3">
          <StatusBadge
            status={item.status}
            releaseLabel={(item as Film).releaseLabel}
          />
        </div>
      </div>
      <div className="mt-3 flex items-baseline justify-between gap-3">
        <h3 className="font-sans text-[1.0625rem] font-medium leading-tight tracking-[-0.01em]">
          {item.title}
        </h3>
        <span className="label shrink-0 text-ash tabular-nums">{item.year}</span>
      </div>
      <p className="label mt-1.5 text-ash">{kind === "series" ? (item as Series).seasonLabel : meta}</p>
    </Link>
  );
}
