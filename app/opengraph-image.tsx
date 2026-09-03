import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "SonRat AI — Enterprise AI Voice Agents";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          background: "#050507",
          color: "white",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "80px",
          backgroundImage:
            "radial-gradient(circle at 80% 15%, rgba(255,255,255,0.16), transparent 32%), radial-gradient(circle at 12% 88%, rgba(120,120,255,0.18), transparent 28%)",
        }}
      >
        <div style={{ display: "flex", fontSize: 28, letterSpacing: 8, color: "#b8b8c4" }}>
          SONRAT AI
        </div>
        <div style={{ display: "flex", marginTop: 28, fontSize: 76, fontWeight: 700, letterSpacing: -3 }}>
          AI Voice Agents
        </div>
        <div style={{ display: "flex", marginTop: 6, fontSize: 76, fontWeight: 700, letterSpacing: -3, color: "#c9c9d5" }}>
          That Actually Work.
        </div>
        <div style={{ display: "flex", marginTop: 36, fontSize: 30, color: "#b8b8c4" }}>
          Customer support and sales automation for enterprise teams.
        </div>
      </div>
    ),
    size,
  );
}
