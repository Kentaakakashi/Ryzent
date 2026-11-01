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
          padding: 18,
          boxSizing: "border-box",
          overflow: "hidden",
          borderRadius: 36,
          background: "#080a18",
        }}
      >
        <img
          src="https://ryzent.netlify.app/New%20Project%20117%20%5BCA1F89B%5D.png"
          width="144"
          height="144"
          style={{ objectFit: "contain" }}
        />
      </div>
    ),
    { ...size }
  );
}
