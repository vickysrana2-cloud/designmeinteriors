import { ImageResponse } from "next/og";
import { getBlogBySlug } from "@/lib/api/blog";

export const runtime = "nodejs";
export const alt = "DesignMeInteriors Studio Journal";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default async function Image({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const blog = await getBlogBySlug(slug);

  const title = blog?.title || "DesignMeInteriors Studio Journal";
  const category = blog?.category || "Architecture & Design";

  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          justifyContent: "space-between",
          backgroundColor: "#1E1C1A",
          padding: "60px 80px",
          color: "#ffffff",
          fontFamily: "serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
          <div
            style={{
              width: "12px",
              height: "12px",
              borderRadius: "50%",
              backgroundColor: "#C86D51",
            }}
          />
          <span
            style={{
              fontSize: 16,
              letterSpacing: "4px",
              textTransform: "uppercase",
              color: "#C86D51",
            }}
          >
            {category}
          </span>
        </div>

        <div style={{ fontSize: 48, fontWeight: 700, lineHeight: 1.2, maxWidth: "1000px" }}>
          {title}
        </div>

        <div style={{ display: "flex", justifyContent: "space-between", width: "100%", fontSize: 20, opacity: 0.8 }}>
          <span>DESIGNMEINTERIORS ARCHITECTURE & INTERIOR STUDIO</span>
          <span>designmeinteriors.com</span>
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
