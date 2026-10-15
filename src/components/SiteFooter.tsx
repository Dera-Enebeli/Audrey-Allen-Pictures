import Link from "next/link";
import { site } from "@/lib/site";
import { Container } from "./ui";
import { Logo } from "./Logo";

export function SiteFooter() {
  return (
    <footer className="border-t border-line bg-paper" aria-label="Site footer">
      <Container className="pt-16 sm:pt-20">
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <Logo />
            <p className="mt-5 max-w-xs text-[0.95rem] leading-relaxed text-ink/70">
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
                    className="label text-ash transition-colors hover:text-ink"
                  >
                    {s.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="grid grid-cols-2 gap-8 sm:grid-cols-4 lg:col-span-8">
            {site.footer.columns.map((col) => (
              <div key={col.title}>
                <h3 className="label text-ash">{col.title}</h3>
                <ul className="mt-5 space-y-3">
                  {col.links.map((l) => (
                    <li key={l.label}>
                      <Link
                        href={l.href}
                        className="text-[0.95rem] text-ink/80 transition-colors hover:text-ink"
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

        {/* oversized ghost wordmark */}
        <div className="mt-16 select-none overflow-hidden">
          <p
            aria-hidden
            className="whitespace-nowrap font-sans text-[15vw] font-medium leading-[0.78] tracking-[-0.05em] text-ink/[0.07]"
          >
            {site.brand.shortName}
          </p>
        </div>

        <div className="mt-6 flex flex-col gap-3 border-t border-line py-8 sm:flex-row sm:items-center sm:justify-between">
          <p className="label text-ash">{site.footer.copyright}</p>
          <p className="label max-w-md text-ash sm:text-right">
            {site.footer.disclaimer}
          </p>
        </div>
      </Container>
    </footer>
  );
}
