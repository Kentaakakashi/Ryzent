import { ImageResponse } from "next/og";

export const alt = "Ryzent — Engineer the unexpected";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "66px 76px",
          position: "relative",
          overflow: "hidden",
          background: "linear-gradient(135deg, #070A12 0%, #0D1422 58%, #111E2D 100%)",
          color: "#E9F1FF",
          fontFamily: "Arial, sans-serif",
        }}
      >
        <div
          style={{
            position: "absolute",
            width: 560,
            height: 560,
            right: -40,
            top: 30,
            border: "1px solid rgba(185,215,255,.17)",
            borderRadius: 999,
            transform: "scaleY(.46) rotate(-28deg)",
          }}
        />
        <div
          style={{
            position: "absolute",
            width: 420,
            height: 420,
            right: 30,
            top: 100,
            border: "1px dashed rgba(125,227,208,.4)",
            borderRadius: 999,
            transform: "scaleY(.54) rotate(32deg)",
          }}
        />
        <div style={{ display: "flex", alignItems: "center", gap: 18, fontSize: 22, letterSpacing: 7, fontWeight: 700 }}>
          <svg width="48" height="48" viewBox="0 0 44 44" fill="none">
            <path d="M7 8.5h21.5L37 17v18.5H15.5L7 27V8.5Z" stroke="#E9F1FF" strokeWidth="1.5" />
            <path d="M15 15h14v14H15z" stroke="#E9F1FF" strokeWidth="1.5" />
            <path d="M22 18v8m-4-4h8" stroke="#7DE3D0" strokeWidth="1.5" strokeLinecap="round" />
          </svg>
          RYZENT <span style={{ color: "#8FA2BE", fontSize: 13, letterSpacing: 3, fontWeight: 400 }}>/ STUDIO</span>
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 18, position: "relative" }}>
          <div style={{ color: "#7DE3D0", fontSize: 14, letterSpacing: 5 }}>INDEPENDENT SOFTWARE STUDIO</div>
          <div style={{ fontSize: 76, lineHeight: 1.02, letterSpacing: -5, fontWeight: 600, maxWidth: 770 }}>
            Engineer the unexpected.
          </div>
          <div style={{ color: "#B9D7FF", fontSize: 20, letterSpacing: 1, maxWidth: 650 }}>
            Digital products, curious experiments and carefully engineered experiences.
          </div>
        </div>
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", color: "#8FA2BE", fontSize: 12, letterSpacing: 4 }}>
          <span>RZ / 001 — SYSTEMS IN MOTION</span>
          <span style={{ color: "#7DE3D0" }}>ENGINEERED WITH INTENT</span>
        </div>
      </div>
    ),
    { ...size }
  );
}
