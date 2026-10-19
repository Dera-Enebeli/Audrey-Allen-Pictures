import Link from "next/link";
import type { ReactNode } from "react";
import { ArrowUpRight } from "./Icons";

type ButtonVariant = "solid" | "outline" | "light" | "ghost";
type ButtonSize = "sm" | "md" | "lg";

const sizes: Record<ButtonSize, string> = {
  sm: "h-9 px-4 text-[0.7rem]",
  md: "h-11 px-6 text-[0.72rem]",
  lg: "h-12 px-7 text-[0.74rem]",
};

const variants: Record<ButtonVariant, string> = {
  solid: "bg-ink text-paper hover:bg-ink/85",
  outline: "border border-line text-ink hover:border-ink",
  light: "bg-paper text-ink hover:bg-paper/85",
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
  const cls = `label inline-flex items-center justify-center gap-2 rounded-full transition-colors duration-300 ${sizes[size]} ${variants[variant]} ${className}`;
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

/** Small status pill used on posters and detail pages. */
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
    <span
      className={`label rounded-full px-3 py-1.5 text-[0.6rem] ${cls}`}
    >
      {label}
    </span>
  );
}

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
  const dim = tone === "paper" ? "text-white/60" : "text-ash";
  const strong = tone === "paper" ? "text-white" : "text-ink";
  const rule = tone === "paper" ? "border-white/20" : "border-line";
  return (
    <div
      className={`flex items-end justify-between gap-6 border-t pt-5 ${rule} ${className}`}
    >
      <div>
        {label && <p className={`label mb-3 ${dim}`}>{label}</p>}
        <h2
          className={`font-sans text-[1.75rem] font-medium leading-[0.98] tracking-[-0.03em] sm:text-[2.25rem] ${strong}`}
        >
          {title}
        </h2>
      </div>
      {href && (
        <Link
          href={href}
          className={`label group hidden shrink-0 items-center gap-2 pb-1 sm:inline-flex ${strong}`}
        >
          {hrefLabel}
          <ArrowUpRight className="h-[0.85rem] w-[0.85rem] transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
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
