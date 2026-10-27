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

export function ChevronUp(p: IconProps) {
  return (
    <svg {...base} {...p}>
      <path d="m18 15-6-6-6 6" />
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

export function PlaneIcon(p: IconProps) {
  return (
    <svg {...base} {...p}>
      <path d="M21 11.5 17.6 6.2c-.3-.5-.9-.7-1.4-.5l-3.2 1.7-2-3.9c-.2-.4-.6-.6-1-.6l-2.2.3c-.5.1-.9.4-1 .9l-.2.7c-.1.4 0 .8.3 1.1l5.8 5.2-3.3 6c-.2.5-.1 1.1.3 1.4l.5.3c.4.2.9.2 1.3-.1l5.8-6-2-3.2c-.2-.4-.2-1 0-1.3l2.8-2Z" />
    </svg>
  );
}
