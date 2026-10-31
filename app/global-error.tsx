"use client";

import { useState } from "react";
import "./globals.css";

type GlobalErrorProps = {
  error: Error & { digest?: string };
  reset: () => void;
};

export default function GlobalError({ error, reset }: GlobalErrorProps) {
  const [copyLabel, setCopyLabel] = useState("Copy diagnostic report");

  const report = [
    "RYZENT CLIENT ERROR REPORT",
    `URL: ${typeof window !== "undefined" ? window.location.href : "unavailable"}`,
    `Time: ${new Date().toISOString()}`,
    `User agent: ${typeof navigator !== "undefined" ? navigator.userAgent : "unavailable"}`,
    `Error name: ${error?.name || "Unknown"}`,
    `Error message: ${error?.message || "No message exposed"}`,
    `Next.js digest: ${error?.digest || "none"}`,
    "Stack:",
    error?.stack || "No stack exposed by production build",
  ].join("\n");

  async function copyReport() {
    try {
      await navigator.clipboard.writeText(report);
      setCopyLabel("Copied — paste it in ChatGPT");
    } catch {
      setCopyLabel("Copy blocked — select the report text below");
    }
  }

  return (
    <html lang="en">
      <body
        style={{
          margin: 0,
          minHeight: "100vh",
          background: "#070A12",
          color: "#E9F1FF",
          fontFamily: "system-ui, sans-serif",
        }}
      >
        <main
          style={{
            boxSizing: "border-box",
            width: "100%",
            maxWidth: 860,
            margin: "0 auto",
            padding: "clamp(20px, 5vw, 48px)",
          }}
        >
          <p style={{ color: "#7DE3D0", letterSpacing: "0.18em", fontSize: 12 }}>
            RYZENT / TEMPORARY DIAGNOSTICS
          </p>
          <h1 style={{ fontSize: "clamp(28px, 6vw, 44px)", lineHeight: 1.1 }}>
            The page crashed.
          </h1>
          <p style={{ color: "#B9C7DC", lineHeight: 1.6 }}>
            The generic Next.js error screen has been replaced temporarily so we can
            capture the actual client error. Copy the report below and paste it into
            the debugging chat. A production build may hide server-side details.
          </p>

          <section
            style={{
              marginTop: 24,
              padding: 18,
              border: "1px solid #28364D",
              borderRadius: 14,
              background: "#0D1422",
              overflowWrap: "anywhere",
            }}
          >
            <h2 style={{ marginTop: 0, fontSize: 16 }}>Error message</h2>
            <pre
              style={{
                whiteSpace: "pre-wrap",
                overflowWrap: "anywhere",
                color: "#FFB4A8",
                fontSize: 13,
                lineHeight: 1.55,
              }}
            >
              {error?.message || "No error message was exposed."}
            </pre>
            <p style={{ color: "#B9C7DC", fontSize: 12 }}>
              Digest: {error?.digest || "not provided"}
            </p>
          </section>

          <button
            type="button"
            onClick={copyReport}
            style={{
              marginTop: 16,
              padding: "12px 16px",
              width: "100%",
              border: 0,
              borderRadius: 10,
              background: "#7DE3D0",
              color: "#070A12",
              fontWeight: 700,
              fontSize: 15,
            }}
          >
            {copyLabel}
          </button>

          <details style={{ marginTop: 18 }}>
            <summary style={{ cursor: "pointer", padding: "10px 0" }}>
              Show full report (manual copy fallback)
            </summary>
            <textarea
              readOnly
              value={report}
              aria-label="Full diagnostic report"
              onFocus={(event) => event.currentTarget.select()}
              style={{
                boxSizing: "border-box",
                width: "100%",
                minHeight: 260,
                padding: 12,
                color: "#E9F1FF",
                background: "#0D1422",
                border: "1px solid #28364D",
                borderRadius: 10,
                font: "12px/1.5 ui-monospace, monospace",
              }}
            />
          </details>

          <button
            type="button"
            onClick={reset}
            style={{
              marginTop: 18,
              padding: "11px 15px",
              border: "1px solid #28364D",
              borderRadius: 10,
              background: "transparent",
              color: "#E9F1FF",
              fontSize: 14,
            }}
          >
            Try rendering the page again
          </button>
        </main>
      </body>
    </html>
  );
}
