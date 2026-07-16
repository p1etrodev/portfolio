import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { buildMetadata } from "@/lib/metadata";
import { getProjectBySlug, projects } from "@/data/projects";

interface ProyectoPageProps {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({ params }: ProyectoPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) return {};

  return buildMetadata({
    title: project.name,
    description: project.tagline,
    path: `/proyectos/${project.slug}`,
  });
}

export default async function ProyectoPage({ params }: ProyectoPageProps) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) notFound();

  return (
    <main>
      <p>{project.category}</p>
      <h1>{project.name}</h1>
      <p>{project.tagline}</p>
    </main>
  );
}
