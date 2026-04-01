// app/(site)/blog/[slug]/opengraph-image.tsx
import { getPostAndMorePosts } from "@/lib/wp-queries/posts";
import { ImageResponse } from "next/og";

export const size = { width: 1200, height: 630 };
export const alt = "Xponent InfoSystem Blog";
export const contentType = "image/png";
export const runtime = "edge";

export default async function OGImage({
  params,
}: {
  params: { slug: string };
}) {
  try {
    const data = await getPostAndMorePosts(params.slug, false);
    const post = data?.post;

    const title = post?.title || "Xponent InfoSystem Blog";
    const category = post?.categories?.edges?.[0]?.node?.name || "Technology";

    return new ImageResponse(
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          justifyContent: "flex-end",
          background: "linear-gradient(135deg, #1a1a2e 0%, #16213e 100%)",
          padding: "60px",
        }}
      >
        {/* Category Badge */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            background: "rgba(255, 255, 255, 0.1)",
            color: "#fff",
            fontSize: 20,
            fontWeight: 600,
            padding: "8px 20px",
            borderRadius: "50px",
            marginBottom: "24px",
          }}
        >
          {category}
        </div>

        {/* Title */}
        <div
          style={{
            display: "flex",
            fontSize: 56,
            fontWeight: 700,
            color: "#fff",
            lineHeight: 1.2,
            maxWidth: "900px",
            marginBottom: "40px",
          }}
        >
          {title.length > 80 ? `${title.substring(0, 80)}...` : title}
        </div>

        {/* Footer */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            width: "100%",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "12px",
            }}
          >
            <div
              style={{
                width: "48px",
                height: "48px",
                background: "#fff",
                borderRadius: "50%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: 24,
                fontWeight: 700,
                color: "#1a1a2e",
              }}
            >
              X
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
              }}
            >
              <span
                style={{
                  color: "#fff",
                  fontSize: 20,
                  fontWeight: 600,
                }}
              >
                Xponent InfoSystem
              </span>
              <span
                style={{
                  color: "rgba(255, 255, 255, 0.7)",
                  fontSize: 16,
                }}
              >
                xponent.com.bd/blog
              </span>
            </div>
          </div>
        </div>
      </div>,
      {
        width: 1200,
        height: 630,
      },
    );
  } catch {
    // Fallback OG image
    return new ImageResponse(
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "linear-gradient(135deg, #1a1a2e 0%, #16213e 100%)",
          color: "#fff",
          fontSize: 48,
          fontWeight: 700,
        }}
      >
        Xponent InfoSystem Blog
      </div>,
      {
        width: 1200,
        height: 630,
      },
    );
  }
}
