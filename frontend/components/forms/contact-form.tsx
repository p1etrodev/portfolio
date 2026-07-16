"use client";

import { Button } from "@/components/ui/button";
import { useState } from "react";

type Status = "idle" | "submitting" | "success" | "error";

const inputClasses =
  "w-full rounded-md bg-paper-2 px-3 py-2 font-ui text-sm text-text outline-none focus:ring-2 focus:ring-layer-ui";

export function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("submitting");

    const formData = new FormData(event.currentTarget);
    const payload = {
      name: formData.get("name"),
      message: formData.get("message"),
    };

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      setStatus(response.ok ? "success" : "error");
    } catch {
      setStatus("error");
    }
  }

  return (
    <form onSubmit={handleSubmit} className="mt-6 flex max-w-105 flex-col gap-4">
      <div className="flex flex-col gap-1.5">
        <label htmlFor="name" className="font-mono text-[11px] text-text-muted">
          nombre
        </label>
        <input id="name" name="name" type="text" required className={inputClasses} />
      </div>

      <div className="flex flex-col gap-1.5">
        <label htmlFor="message" className="font-mono text-[11px] text-text-muted">
          qué necesitás
        </label>
        <textarea id="message" name="message" required rows={4} className={inputClasses} />
      </div>

      <Button type="submit" variant="primary" disabled={status === "submitting"}>
        {status === "submitting" ? "enviando…" : "enviar"}
      </Button>

      {status === "success" && (
        <p className="font-mono text-[11px] text-layer-ui">Listo, te respondo pronto.</p>
      )}
      {status === "error" && (
        <p className="font-mono text-[11px] text-layer-api">
          Todavía no está conectado el envío — escribime directo por otro medio.
        </p>
      )}
    </form>
  );
}
