import type { Metadata } from "next";
import { buildMetadata } from "@/lib/metadata";

export const metadata: Metadata = buildMetadata({
  title: "Contacto",
  description: "Contame tu proyecto. Respondo en menos de 24hs.",
  path: "/contacto",
});

export default function ContactoPage() {
  return (
    <main>
      <h1>Contame tu proyecto</h1>
    </main>
  );
}
