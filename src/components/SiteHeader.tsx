"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { site } from "@/lib/site";
import { Logo } from "./Logo";
import { CloseIcon, MenuIcon } from "./Icons";

/** Pages whose hero sits on a dark image — the header starts light there. */
function isOverlayRoute(pathname: string) {
  return (
    pathname === "/" ||
    pathname === "/foundation" ||
    (pathname.startsWith("/films/") && pathname !== "/films") ||
    pathname.startsWith("/series/")
  );
}

export function SiteHeader() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    let last = window.scrollY;
    const onScroll = () => {
      const y = window.scrollY;
      setScrolled(y > 8);
      setHidden(y > 160 && y > last);
      last = y;
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close the mobile menu on navigation — adjust state during render rather
  // than in an effect (see react.dev "You Might Not Need an Effect").
  const [lastPathname, setLastPathname] = useState(pathname);
  if (lastPathname !== pathname) {
    setLastPathname(pathname);
    setOpen(false);
  }

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const overlay = isOverlayRoute(pathname) && !scrolled;
  const tone = overlay ? "paper" : "ink";

  return (
    <>
      <header
        className="fixed inset-x-0 top-0 z-50 transition-[transform,background-color,border-color] duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]"
        style={{
          transform: hidden && !open ? "translateY(-100%)" : "translateY(0)",
          backgroundColor: scrolled || open ? "var(--color-paper)" : "transparent",
          borderBottom: scrolled
            ? "1px solid var(--color-line)"
            : "1px solid transparent",
        }}
      >
        <div className="mx-auto grid h-16 max-w-[1600px] grid-cols-2 items-center px-5 sm:px-8 md:grid-cols-3">
          {/* left — primary nav */}
          <nav aria-label="Primary" className="hidden md:block">
            <ul className="flex items-center gap-7">
              {site.nav.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-[0.9375rem] leading-none transition-opacity hover:opacity-55"
                    style={{ color: tone === "paper" ? "#fff" : "var(--color-ink)" }}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* center — wordmark */}
          <div className="flex items-center md:justify-center">
            <Logo tone={tone} />
          </div>

          {/* right — utilities */}
          <div className="flex items-center justify-end gap-5">
            <ul className="hidden items-center gap-6 md:flex">
              {site.utility.map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className="text-[0.9375rem] leading-none transition-opacity hover:opacity-55"
                    style={{ color: tone === "paper" ? "#fff" : "var(--color-ink)" }}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
            <div
              className="flex items-center gap-4"
              style={{ color: tone === "paper" ? "#fff" : "var(--color-ink)" }}
            >
              <button
                aria-label={open ? "Close menu" : "Open menu"}
                aria-expanded={open}
                onClick={() => setOpen((v) => !v)}
                className="flex h-11 w-11 items-center justify-center md:hidden"
              >
                {open ? (
                  <CloseIcon className="h-6 w-6" />
                ) : (
                  <MenuIcon className="h-6 w-6" />
                )}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* mobile overlay menu */}
      <div
        className={`fixed inset-0 z-40 bg-paper transition-opacity duration-300 md:hidden ${
          open ? "visible" : "invisible"
        }`}
        style={{
          opacity: open ? 1 : 0,
          visibility: open ? "visible" : "hidden",
          pointerEvents: open ? "auto" : "none",
        }}
      >
        <div className="flex h-full flex-col px-5 pb-10 pt-24">
          <nav aria-label="Mobile">
            <ul className="flex flex-col">
              {site.nav.map((item) => (
                <li key={item.href} className="border-b border-line">
                  <Link
                    href={item.href}
                    className="block py-5 text-[2rem] font-medium leading-none tracking-[-0.03em]"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className="mt-8 flex flex-col gap-3">
            {site.utility.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="label inline-flex min-h-10 items-center text-ash transition-colors hover:text-ink"
              >
                {item.label}
              </Link>
            ))}
          </div>

          <div className="mt-auto flex flex-wrap gap-x-5 gap-y-2">
            {site.footer.social.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                className="label inline-flex min-h-10 min-w-10 items-center justify-center text-ash transition-colors hover:text-ink"
              >
                {s.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
