import { ImageResponse } from "next/og";

export const alt = "Hago el producto entero — pietrodev";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        padding: 80,
        backgroundColor: "#0e1024",
        backgroundImage:
          "radial-gradient(circle at 80% 20%, rgba(255,93,143,0.25), transparent 45%), radial-gradient(circle at 10% 90%, rgba(79,209,232,0.2), transparent 45%)",
      }}
    >
      <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
        <div style={{ display: "flex", gap: 4, width: 64 }}>
          <div style={{ flex: 1.4, height: 10, borderRadius: 6, background: "#d4f542" }} />
          <div style={{ flex: 1, height: 10, borderRadius: 6, background: "#ff5d8f" }} />
          <div style={{ flex: 0.8, height: 10, borderRadius: 6, background: "#4fd1e8" }} />
        </div>
        <span style={{ fontSize: 30, color: "#8d90b8", fontWeight: 600 }}>pietrodev</span>
      </div>
      <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
        <span style={{ fontSize: 76, fontWeight: 900, color: "#eef0fb", lineHeight: 1.1 }}>
          Hago el producto entero.
        </span>
        <span style={{ fontSize: 34, color: "#8d90b8" }}>
          Interfaz, lógica de negocio y datos, en un solo bloque.
        </span>
      </div>
    </div>,
    { ...size },
  );
}
