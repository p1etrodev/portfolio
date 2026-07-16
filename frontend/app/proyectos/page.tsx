import type { Metadata } from "next";
import Link from "next/link";
import { LayerBadge } from "@/components/ui/layer-badge";
import { projects } from "@/data/projects";
import { buildMetadata } from "@/lib/metadata";

export const metadata: Metadata = buildMetadata({
  title: "Proyectos",
  description: "Proyectos full stack, mostrados por capas: interfaz, API y datos.",
  path: "/proyectos",
});

export default function ProyectosPage() {
  return (
    <main className="mx-auto w-full max-w-360 px-6 pt-16 pb-24 sm:px-8">
      <h1 className="font-ui text-3xl font-black">Proyectos full stack</h1>
      <p className="mt-2 max-w-[560px] text-text-muted">
        Cada proyecto muestra su propia proporción de capas: no todos son interfaz, lógica y datos
        en partes iguales.
      </p>

      <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2">
        {projects.map((project) => (
          <Link
            key={project.slug}
            href={`/proyectos/${project.slug}`}
            className="animate-assemble rounded-[10px] bg-paper-2 p-4 transition-opacity hover:opacity-90"
          >
            <p className="font-mono text-[11px] text-text-muted">
              {String(project.index).padStart(2, "0")} · {project.category}
            </p>
            <h2 className="mt-1.5 font-ui text-base font-bold">{project.name}</h2>
            <p className="mt-1 text-[12.5px] text-text-muted">{project.stack.join(" · ")}</p>
            <LayerBadge ratios={project.layers} className="mt-3" />
          </Link>
        ))}
      </div>
    </main>
  );
}
