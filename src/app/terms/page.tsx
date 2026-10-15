import type { Metadata } from "next";
import { Container } from "@/components/ui";
import { site } from "@/lib/site";

export const metadata: Metadata = { title: "Terms of Use" };

export default function TermsPage() {
  return (
    <main className="pt-16">
      <Container className="max-w-3xl py-16 sm:py-24">
        <p className="label text-ash">Legal</p>
        <h1 className="mt-5 font-sans text-[2.4rem] font-medium leading-[1] tracking-[-0.03em] sm:text-[3rem]">
          Terms of Use
        </h1>
        <div className="mt-8 space-y-6 leading-relaxed text-ink/75">
          <p>
            This page is a template placeholder. Replace it with your own terms
            of use for {site.brand.name}.
          </p>
          <p>
            By accessing this website you agree to be bound by these terms and
            conditions. If you do not agree with any part of these terms, you
            must not use this website.
          </p>
          <p>
            All content on this site — including text, imagery, video and
            logos — is the property of {site.brand.name} or its licensors and
            may not be reproduced without prior written permission.
          </p>
        </div>
      </Container>
    </main>
  );
}
