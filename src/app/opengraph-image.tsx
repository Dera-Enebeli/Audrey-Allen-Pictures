import { ImageResponse } from "next/og";
import { site } from "@/lib/site";

export const alt = site.seo.title;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          backgroundColor: "#0a0a0a",
          color: "#ffffff",
          padding: "72px 80px",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 20,
            fontSize: 30,
            letterSpacing: 4,
            textTransform: "uppercase",
            color: "rgba(255,255,255,0.65)",
          }}
        >
          <div
            style={{
              width: 44,
              height: 44,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              backgroundColor: "#ffffff",
              color: "#0a0a0a",
              fontSize: 22,
              fontWeight: 700,
              letterSpacing: 0,
            }}
          >
            AA
          </div>
          {site.brand.name}
        </div>

        <div
          style={{
            display: "flex",
            fontSize: 76,
            fontWeight: 700,
            lineHeight: 1.02,
            letterSpacing: -2.5,
            maxWidth: 1000,
          }}
        >
          {site.brand.tagline}
        </div>

        <div
          style={{
            display: "flex",
            fontSize: 26,
            letterSpacing: 3,
            textTransform: "uppercase",
            color: "rgba(255,255,255,0.55)",
          }}
        >
          Film · Television · Entertainment
        </div>
      </div>
    ),
    { ...size }
  );
}
