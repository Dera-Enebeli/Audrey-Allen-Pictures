import Link from "next/link";
import type { ReactNode } from "react";
import { ArrowUpRight } from "./Icons";

type ButtonVariant = "solid" | "outline" | "light" | "ghost";
type ButtonSize = "sm" | "md" | "lg";

/* A24 buttons: uppercase sans, square corners, 1px border that fills in
   (and flips the label) on hover. Sizes track their small/medium/lg. */
const sizes: Record<ButtonSize, string> = {
  sm: "h-10 px-4 text-[0.875rem]",
  md: "h-11 px-5 text-[0.9375rem]",
  lg: "h-12 px-6 text-[1rem]",
};

const variants: Record<ButtonVariant, string> = {
  solid: "border border-ink text-ink hover:bg-ink hover:text-paper",
  outline:
    "border border-line text-ink hover:border-ink hover:bg-ink hover:text-paper",
  light: "border border-white/60 text-white hover:bg-white hover:text-paper",
  ghost: "text-ink hover:opacity-60",
};

export function Button({
  href,
  children,
  variant = "solid",
  size = "md",
  className = "",
  icon = false,
  external = false,
}: {
  href: string;
  children: ReactNode;
  variant?: ButtonVariant;
  size?: ButtonSize;
  className?: string;
  icon?: boolean;
  external?: boolean;
}) {
  const cls = `inline-flex items-center justify-center gap-2 font-sans font-medium uppercase leading-none tracking-[0.01em] transition-colors duration-300 ${sizes[size]} ${variants[variant]} ${className}`;
  const inner = (
    <>
      {children}
      {icon && <ArrowUpRight className="h-[0.85rem] w-[0.85rem]" />}
    </>
  );
  if (external) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={cls}>
        {inner}
      </a>
    );
  }
  return (
    <Link href={href} className={cls}>
      {inner}
    </Link>
  );
}

/** Small status chip used on detail heroes. */
export function StatusBadge({
  status,
  releaseLabel,
  tone = "ink",
}: {
  status: string;
  releaseLabel?: string;
  tone?: "ink" | "paper";
}) {
  const label = releaseLabel ? `${status} · ${releaseLabel}` : status;
  const cls =
    tone === "paper"
      ? "bg-paper/90 text-ink backdrop-blur"
      : "bg-ink/90 text-paper backdrop-blur";
  return (
    <span className={`label inline-block px-3 py-1.5 ${cls}`}>{label}</span>
  );
}

/**
 * Section head in the A24 tier-heading pattern: a full-strength rule across
 * the top, mono eyebrow over a large tight-tracked title, and an eyebrow link
 * with an arrow parked on the right.
 */
export function SectionHeading({
  label,
  title,
  href,
  hrefLabel = "View all",
  className = "",
  tone = "ink",
}: {
  label?: string;
  title: string;
  href?: string;
  hrefLabel?: string;
  className?: string;
  tone?: "ink" | "paper";
}) {
  const dim = tone === "paper" ? "text-white/70" : "text-ash";
  const strong = tone === "paper" ? "text-white" : "text-ink";
  const rule = tone === "paper" ? "border-white/70" : "border-ink";
  const link = tone === "paper"
    ? "text-white/80 hover:text-white"
    : "text-ash hover:text-ink";
  return (
    <div
      className={`flex flex-wrap items-end justify-between gap-x-8 gap-y-4 border-t pt-4 sm:pt-5 ${rule} ${className}`}
    >
      <div className="min-w-0">
        {label && <p className={`label ${dim}`}>{label}</p>}
        <h2
          className={`mt-2.5 font-sans text-[clamp(2rem,5vw,3.5rem)] font-medium leading-[1.04] tracking-[-0.018em] ${strong}`}
        >
          {title}
        </h2>
      </div>
      {href && (
        <Link
          href={href}
          className={`label group hidden shrink-0 items-center gap-1.5 pb-1.5 transition-colors sm:inline-flex ${link}`}
        >
          {hrefLabel}
          <ArrowUpRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </Link>
      )}
    </div>
  );
}

export function Container({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div className={`mx-auto w-full max-w-[1600px] px-5 sm:px-8 ${className}`}>
      {children}
    </div>
  );
}
