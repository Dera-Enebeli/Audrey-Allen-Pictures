import Link from "next/link";
import type { Film, Series } from "@/lib/content";
import { Media } from "./Media";

/**
 * Ruled-column cell for horizontal rails: a right hairline with matching
 * padding so cards read as bordered table cells (the a24films.com carousel
 * pattern). Pair with Rail's gap so the rule sits midway between posters.
 */
export const railCell =
  "border-r border-line pr-4 last:border-r-0 sm:pr-5";

/**
 * Portrait poster card — 2:3 art with an inset hairline, mono status eyebrow
 * and a muted display title that brightens on hover. The whole card links via
 * the poster and title.
 */
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
  void kind;
  return (
    <div className={`shrink-0 snap-start ${width} ${className}`}>
      <Link href={href} className="group block">
        <span className="relative block aspect-[2/3] overflow-hidden bg-smoke ring-1 ring-inset ring-line">
          <Media
            src={item.poster}
            alt={item.title}
            accent={item.accent}
            title={item.title}
            label={item.status}
            imgClassName="transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.04]"
          />
        </span>
        {item.status && (
          <span className="label mt-4 flex items-center">
            {item.status}
            <span className="ml-1.5 h-1 w-1 rounded-full bg-gold" />
          </span>
        )}
        <span className="mt-2.5 block font-sans text-[1.35rem] font-medium leading-[1.08] tracking-[-0.005em] text-ash transition-colors group-hover:text-ink sm:text-[1.5rem]">
          {item.title}
        </span>
      </Link>
    </div>
  );
}
