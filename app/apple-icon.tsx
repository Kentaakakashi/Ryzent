import { ImageResponse } from "next/og";

export const size = { width: 180, height: 180 };
export const contentType = "image/png";

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#070A12",
          border: "1px solid rgba(185,215,255,.28)",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            position: "absolute",
            width: 150,
            height: 150,
            borderRadius: 100,
            border: "1px solid rgba(125,227,208,.18)",
            transform: "scaleY(.48) rotate(-28deg)",
          }}
        />
        <svg width="126" height="126" viewBox="0 0 44 44" fill="none">
          <path d="M7 8.5h21.5L37 17v18.5H15.5L7 27V8.5Z" stroke="#E9F1FF" strokeWidth="1.35" />
          <path d="M15 15h14v14H15z" stroke="#B9D7FF" strokeWidth="1.2" />
          <path d="M7.5 8.5 15 15M29 29l8 6.5M29 15l8-6.5M15 29l-8 6.5" stroke="#8FA2BE" strokeWidth="1" />
          <path d="M22 18v8m-4-4h8" stroke="#7DE3D0" strokeWidth="1.5" strokeLinecap="round" />
        </svg>
      </div>
    ),
    { ...size }
  );
}
