import { ImageResponse } from "next/og";
import { profile } from "@/data/profile";

export const alt = `${profile.name} | ${profile.headline}`;
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
          padding: 80,
          background: "radial-gradient(80% 60% at 50% 125%, rgba(255,90,78,0.55) 0%, rgba(176,76,255,0.25) 45%, #09090b 80%)",
          color: "#fafafa",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ fontSize: 22, letterSpacing: 6, color: "#a1a1aa", textTransform: "uppercase" }}>
          {profile.handle}
        </div>
        <div style={{ display: "flex", flexDirection: "column", fontSize: 92, lineHeight: 1, letterSpacing: -4 }}>
          <span>{profile.name}</span>
          <span style={{ color: "#a1a1aa" }}>{profile.headline}</span>
          <span style={{ color: "#a1a1aa" }}>Distributed systems · Go · Rust</span>
        </div>
      </div>
    ),
    size,
  );
}
