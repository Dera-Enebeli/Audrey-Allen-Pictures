"use client";

import { useState } from "react";
import { site } from "@/lib/site";
import { Container } from "./ui";
import { ArrowRight } from "./Icons";

export function Newsletter() {
  const [email, setEmail] = useState("");
  const [done, setDone] = useState(false);

  return (
    <section id="newsletter" className="scroll-mt-20 border-t border-line py-16 sm:py-24">
      <Container>
        <div className="grid gap-10 lg:grid-cols-12">
          <div className="lg:col-span-6">
            <p className="label text-ash">Newsletter</p>
            <h2 className="mt-4 font-sans text-[2rem] font-medium leading-[0.98] tracking-[-0.03em] sm:text-[2.75rem]">
              {site.newsletter.heading}
            </h2>
            <p className="mt-4 max-w-md leading-relaxed text-ink/70">
              {site.newsletter.blurb}
            </p>
          </div>

          <div className="lg:col-span-6 lg:pt-14">
            {done ? (
              <div className="border-t border-ink pt-6">
                <p className="font-sans text-[1.25rem] font-medium tracking-[-0.01em]">
                  You&apos;re on the list.
                </p>
                <p className="mt-2 text-ink/70">
                  Thanks — we&apos;ll be in touch from the studio.
                </p>
              </div>
            ) : (
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  if (email.trim()) setDone(true);
                }}
                className="border-t border-ink pt-6"
              >
                <label htmlFor="newsletter-email" className="label text-ash">
                  Email
                </label>
                <div className="mt-3 flex items-center gap-3 border-b border-line pb-3 focus-within:border-ink">
                  <input
                    id="newsletter-email"
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="you@email.com"
                    className="w-full bg-transparent py-2 text-[1.05rem] outline-none placeholder:text-ash"
                  />
                  <button
                    type="submit"
                    className="label inline-flex shrink-0 items-center gap-2 rounded-full bg-ink px-5 py-2.5 text-paper transition-colors hover:bg-ink/85"
                  >
                    Sign up
                    <ArrowRight className="h-3.5 w-3.5" />
                  </button>
                </div>
                <p className="mt-4 max-w-lg text-[0.78rem] leading-relaxed text-ash">
                  {site.newsletter.consent}
                </p>
              </form>
            )}
          </div>
        </div>
      </Container>
    </section>
  );
}
