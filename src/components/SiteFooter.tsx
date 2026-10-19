import Link from "next/link";
import { site } from "@/lib/site";
import { Container } from "./ui";
import { Logo } from "./Logo";
import { Newsletter } from "./Newsletter";
import { Membership } from "./Membership";

/**
 * Footer follows a24films.com's order: link sets (big sans links, hairline
 * column rule), then the subscribe block, then the membership upsell under a
 * full-strength rule, then the mono copyright bar with legal links.
 */
export function SiteFooter() {
  return (
    <footer className="border-t border-line bg-paper" aria-label="Site footer">
      <Container className="pt-16 sm:pt-20">
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <Logo />
            <p className="mt-5 max-w-xs leading-relaxed text-ink/70">
              {site.brand.tagline}
            </p>
            <p className="label mt-6 text-ash">
              International Film, Television &amp; Entertainment
            </p>

            <ul className="mt-8 flex flex-wrap gap-x-5 gap-y-2">
              {site.footer.social.map((s) => (
                <li key={s.label}>
                  <a
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="label inline-flex min-h-10 min-w-10 items-center justify-center text-ash transition-colors hover:text-ink"
                  >
                    {s.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="grid grid-cols-2 gap-8 sm:grid-cols-3 lg:col-span-8 lg:border-l lg:border-line lg:pl-10">
            {site.footer.columns.map((col) => (
              <div key={col.title}>
                <h3 className="label text-ash">{col.title}</h3>
                <ul className="mt-5 space-y-3.5">
                  {col.links.map((l) => (
                    <li key={l.label}>
                      <Link
                        href={l.href}
                        className="inline-block min-w-10 py-2 text-[1.35rem] font-medium leading-tight tracking-[-0.01em] text-ink/85 transition-colors hover:text-ink sm:text-[1.5rem]"
                      >
                        {l.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </Container>

      <Newsletter />
      <Membership />

      <Container>
        <div className="border-t border-ink py-8">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <p className="label text-ash">{site.footer.copyright}</p>
            <div className="flex flex-wrap gap-x-6 gap-y-2">
              <Link
                href="/terms"
                className="label inline-flex min-h-10 items-center text-ash transition-colors hover:text-ink"
              >
                Terms of Use
              </Link>
              <Link
                href="/privacy"
                className="label inline-flex min-h-10 items-center text-ash transition-colors hover:text-ink"
              >
                Privacy Policy
              </Link>
            </div>
          </div>
          <p className="label mt-4 max-w-2xl leading-[1.6] text-ash">
            {site.footer.disclaimer}
          </p>
        </div>
      </Container>
    </footer>
  );
}
