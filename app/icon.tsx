import { ImageResponse } from "next/og";

export const size = { width: 32, height: 32 };
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          overflow: "hidden",
          borderRadius: 8,
          background: "#080a18",
        }}
      >
        <img
          src="https://ryzent.netlify.app/New%20Project%20117%20%5BCA1F89B%5D.png"
          width="28"
          height="28"
          style={{ objectFit: "contain" }}
        />
      </div>
    ),
    { ...size }
  );
}
