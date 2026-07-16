import type { Metadata } from "next";
import { buildMetadata } from "@/lib/metadata";

export const metadata: Metadata = buildMetadata({
  title: "Sobre mí",
  description: "Cómo armo un proyecto: interfaz, lógica de negocio y datos, de punta a punta.",
  path: "/sobre-mi",
});

export default function SobreMiPage() {
  return (
    <main>
      <h1>Cómo armo un proyecto</h1>
    </main>
  );
}
