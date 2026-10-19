import Link from "next/link";
import { site } from "@/lib/site";

/**
 * Studio wordmark. Swap the text for an <img src="/media/brand/logo.svg" />
 * inside <Logo /> if you'd rather use a designed logo.
 */
export function Logo({
  className = "",
  tone = "ink",
}: {
  className?: string;
  tone?: "ink" | "paper";
}) {
  return (
    <Link
      href="/"
      aria-label={`${site.brand.name} — home`}
      className={`group inline-flex items-baseline gap-2 py-3 ${className}`}
    >
      <span
        className="font-sans text-[1.0625rem] font-medium uppercase leading-none tracking-[-0.02em] sm:text-[1.1875rem]"
        style={{ color: tone === "paper" ? "#fff" : "var(--color-ink)" }}
      >
        {site.brand.name}
      </span>
    </Link>
  );
}

/** Compact monogram tile — handy for favicons, footers and avatars. */
export function Monogram({ size = 40 }: { size?: number }) {
  return (
    <span
      className="inline-flex items-center justify-center bg-ink font-sans font-medium text-paper"
      style={{ width: size, height: size }}
    >
      <span className="label text-[0.8rem] tracking-[0.08em]">
        {site.brand.initials}
      </span>
    </span>
  );
}
