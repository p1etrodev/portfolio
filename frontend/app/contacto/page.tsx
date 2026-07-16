import type { Metadata } from "next";
import { ContactForm } from "@/components/forms/contact-form";
import { buildMetadata } from "@/lib/metadata";

export const metadata: Metadata = buildMetadata({
  title: "Contacto",
  description: "Contame tu proyecto. Respondo en menos de 24hs.",
  path: "/contacto",
});

export default function ContactoPage() {
  return (
    <main className="mx-auto w-full max-w-360 px-6 pt-16 pb-24 sm:px-8">
      <h1 className="font-ui text-3xl font-black">Contame tu proyecto</h1>
      <p className="mt-2 text-[13px] text-text-muted">Respondo en menos de 24hs.</p>
      <ContactForm />
    </main>
  );
}
