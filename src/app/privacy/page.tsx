import type { Metadata } from "next";
import { Container } from "@/components/ui";
import { site } from "@/lib/site";

export const metadata: Metadata = { title: "Privacy Policy" };

export default function PrivacyPage() {
  return (
    <main className="pt-16">
      <Container className="max-w-3xl py-16 sm:py-24">
        <p className="label text-ash">Legal</p>
        <h1 className="mt-5 font-sans text-[2.4rem] font-medium leading-[1] tracking-[-0.03em] sm:text-[3rem]">
          Privacy Policy
        </h1>
        <div className="mt-8 space-y-6 leading-relaxed text-ink/75">
          <p>
            This page is a template placeholder. Replace it with your own
            privacy policy for {site.brand.name}.
          </p>
          <p>
            We collect information you provide directly to us — such as when
            you subscribe to our newsletter — and we do not sell or share your
            personal information with third parties for marketing purposes.
          </p>
          <p>
            You may at any time request that we do not sell or share your
            personal information, or unsubscribe from communications.
          </p>
        </div>
      </Container>
    </main>
  );
}
