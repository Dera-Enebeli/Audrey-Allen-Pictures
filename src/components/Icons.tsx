import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement>;

const base = {
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.5,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
  "aria-hidden": true,
};

export function SearchIcon(p: IconProps) {
  return (
    <svg {...base} {...p}>
      <circle cx="11" cy="11" r="7" />
      <path d="m20 20-3.2-3.2" />
    </svg>
  );
}

export function UserIcon(p: IconProps) {
  return (
    <svg {...base} {...p}>
      <circle cx="12" cy="8" r="3.6" />
      <path d="M5 20c0-3.3 3.1-5.4 7-5.4s7 2.1 7 5.4" />
    </svg>
  );
}

export function BagIcon(p: IconProps) {
  return (
    <svg {...base} {...p}>
      <path d="M5.5 8h13l-.9 11.2a1.5 1.5 0 0 1-1.5 1.3H7.9a1.5 1.5 0 0 1-1.5-1.3L5.5 8Z" />
      <path d="M9 8V6.5a3 3 0 0 1 6 0V8" />
    </svg>
  );
}

export function MenuIcon(p: IconProps) {
  return (
    <svg {...base} {...p}>
      <path d="M3.5 7.5h17M3.5 16.5h17" />
    </svg>
  );
}

export function CloseIcon(p: IconProps) {
  return (
    <svg {...base} {...p}>
      <path d="M6 6l12 12M18 6 6 18" />
    </svg>
  );
}

export function ArrowRight(p: IconProps) {
  return (
    <svg {...base} {...p}>
      <path d="M4 12h15M13 6l6 6-6 6" />
    </svg>
  );
}

export function ArrowUpRight(p: IconProps) {
  return (
    <svg {...base} {...p}>
      <path d="M7 17 17 7M8 7h9v9" />
    </svg>
  );
}

export function ArrowDown(p: IconProps) {
  return (
    <svg {...base} {...p}>
      <path d="M12 4v15M6 13l6 6 6-6" />
    </svg>
  );
}

export function ChevronLeft(p: IconProps) {
  return (
    <svg {...base} {...p}>
      <path d="m14.5 6-6 6 6 6" />
    </svg>
  );
}

export function ChevronRight(p: IconProps) {
  return (
    <svg {...base} {...p}>
      <path d="m9.5 6 6 6-6 6" />
    </svg>
  );
}

export function PlayIcon(p: IconProps) {
  return (
    <svg {...base} {...p} fill="currentColor" stroke="none">
      <path d="M8 5.5v13l11-6.5-11-6.5Z" />
    </svg>
  );
}

export function TicketIcon(p: IconProps) {
  return (
    <svg {...base} {...p}>
      <path d="M4 8.5a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v1a2.5 2.5 0 0 0 0 5v1a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-1a2.5 2.5 0 0 0 0-5v-1Z" />
      <path d="M14 6.5v11" strokeDasharray="2 2.4" />
    </svg>
  );
}
