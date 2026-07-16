import type { Metadata } from "next";
import { ContactForm } from "@/components/forms/contact-form";
import { channels } from "@/lib/channels";
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
      <p className="mt-2 text-[15px] text-text-muted">Respondo en menos de 24hs.</p>

      <div className="mt-10 grid grid-cols-1 gap-12 sm:grid-cols-2">
        <ContactForm />

        <div className="flex flex-col gap-4">
          <h2 className="font-mono text-[12px] text-text-muted">otros canales</h2>
          <ul className="flex flex-col gap-3">
            {channels.map((channel) => (
              <li key={channel.label}>
                <a
                  href={channel.href}
                  target={channel.href.startsWith("http") ? "_blank" : undefined}
                  rel={channel.href.startsWith("http") ? "noopener noreferrer" : undefined}
                  className="group flex flex-col"
                >
                  <span className="font-mono text-[12px] text-text-muted">{channel.label}</span>
                  <span className="text-base text-text group-hover:text-layer-ui">
                    {channel.value}
                  </span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </main>
  );
}
