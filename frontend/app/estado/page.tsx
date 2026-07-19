import type { Metadata } from "next";
import { buildMetadata } from "@/lib/metadata";
import { StatusBoard } from "@/components/status/status-board";

export const metadata: Metadata = buildMetadata({
  title: "Estado",
  description: "Estado en vivo de los sitios que mantengo.",
  path: "/estado",
});

export default function EstadoPage() {
  return (
    <main className="mx-auto w-full max-w-360 px-6 pt-16 pb-24 sm:px-8">
      <h1 className="font-ui text-3xl font-black">Estado de sitios</h1>
      <p className="mt-2 max-w-140 text-[15px] text-text-muted">
        Chequeo en vivo, actualizado cada minuto.
      </p>

      <div className="mt-8">
        <StatusBoard />
      </div>
    </main>
  );
}
