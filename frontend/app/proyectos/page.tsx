import type { Metadata } from "next";
import Link from "next/link";
import { buildMetadata } from "@/lib/metadata";
import { projects } from "@/data/projects";

export const metadata: Metadata = buildMetadata({
  title: "Proyectos",
  description: "Proyectos full stack, mostrados por capas: interfaz, API y datos.",
  path: "/proyectos",
});

export default function ProyectosPage() {
  return (
    <main>
      <h1>Proyectos full stack</h1>
      <ul>
        {projects.map((project) => (
          <li key={project.slug}>
            <Link href={`/proyectos/${project.slug}`}>{project.name}</Link>
          </li>
        ))}
      </ul>
    </main>
  );
}
