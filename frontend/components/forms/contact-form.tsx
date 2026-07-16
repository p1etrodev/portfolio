"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Select } from "@/components/ui/select";

type Status = "idle" | "submitting" | "success" | "error";

const inputClasses =
  "w-full rounded-md bg-paper-2 px-3 py-2 font-ui text-base text-text outline-none placeholder:text-text-muted focus:ring-2 focus:ring-layer-ui";

const projectTypeOptions = [
  { value: "Producto nuevo", label: "Producto nuevo" },
  { value: "Mantenimiento / soporte", label: "Mantenimiento / soporte" },
  { value: "Consultoría", label: "Consultoría" },
];

const GOOGLE_FORM_ACTION =
  "https://docs.google.com/forms/d/e/1FAIpQLSfkxh9JCiTuYRX5Ln7qy6QzkpKwVPDSUy5DePuBuDeSOH3CgQ/formResponse";

const GOOGLE_FORM_FIELDS = {
  name: "entry.1471236126",
  email: "entry.1548063694",
  projectType: "entry.94761039",
  message: "entry.741326073",
};

export function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [formError, setFormError] = useState<string | null>(null);

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const form = event.currentTarget;
    const formData = new FormData(form);
    const projectType = formData.get("projectType");
    if (!projectType) {
      setFormError("Elegí un tipo de proyecto.");
      return;
    }
    setFormError(null);
    setStatus("submitting");

    const body = new URLSearchParams();
    body.set(GOOGLE_FORM_FIELDS.name, String(formData.get("name") ?? ""));
    body.set(GOOGLE_FORM_FIELDS.email, String(formData.get("email") ?? ""));
    body.set(GOOGLE_FORM_FIELDS.projectType, String(projectType));
    body.set(GOOGLE_FORM_FIELDS.message, String(formData.get("message") ?? ""));

    try {
      await fetch(GOOGLE_FORM_ACTION, {
        method: "POST",
        mode: "no-cors",
        body,
      });
      setStatus("success");
      form.reset();
    } catch {
      setStatus("error");
    }
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4">
      <div className="flex flex-col gap-1.5">
        <label htmlFor="name" className="font-mono text-[12px] text-text-muted">
          nombre
        </label>
        <input
          id="name"
          name="name"
          type="text"
          required
          placeholder="Tu nombre"
          className={inputClasses}
        />
      </div>

      <div className="flex flex-col gap-1.5">
        <label htmlFor="email" className="font-mono text-[12px] text-text-muted">
          email
        </label>
        <input
          id="email"
          name="email"
          type="email"
          required
          placeholder="tu@email.com"
          className={inputClasses}
        />
      </div>

      <div className="flex flex-col gap-1.5">
        <label htmlFor="projectType" className="font-mono text-[12px] text-text-muted">
          tipo de proyecto
        </label>
        <Select
          id="projectType"
          name="projectType"
          options={projectTypeOptions}
          placeholder="elegí una opción"
        />
        {formError && <p className="font-mono text-[12px] text-layer-api">{formError}</p>}
      </div>

      <div className="flex flex-col gap-1.5">
        <label htmlFor="message" className="font-mono text-[12px] text-text-muted">
          qué necesitás
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={4}
          placeholder="Contame en pocas líneas de qué se trata tu proyecto…"
          className={inputClasses}
        />
      </div>

      <Button type="submit" variant="primary" disabled={status === "submitting"}>
        {status === "submitting" ? "enviando…" : "enviar"}
      </Button>

      {status === "success" && (
        <p className="font-mono text-[12px] text-layer-ui">Listo, te respondo pronto.</p>
      )}
      {status === "error" && (
        <p className="font-mono text-[12px] text-layer-api">
          Hubo un problema al enviar — escribime directo por otro medio.
        </p>
      )}
    </form>
  );
}
