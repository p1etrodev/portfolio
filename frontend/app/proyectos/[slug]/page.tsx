import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { layerBorderClasses, layerTextClasses } from "@/components/ui/layer-colors";
import { Tag } from "@/components/ui/tag";
import { getProjectBySlug, projects } from "@/data/projects";
import { buildMetadata } from "@/lib/metadata";

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
    <main className="mx-auto w-full max-w-360 px-6 pt-16 pb-24 sm:px-8">
      <p className="font-mono text-[11px] text-text-muted">
        ficha {String(project.index).padStart(2, "0")} · {project.category}
      </p>
      <h1 className="mt-1.5 font-ui text-2xl font-black">{project.name}</h1>
      <p className="mt-1.5 max-w-[560px] text-[13px] text-text-muted">{project.tagline}</p>

      {project.layerDetails.length > 0 && (
        <div className="mt-8 grid grid-cols-1 gap-3.5 sm:grid-cols-3">
          {project.layerDetails.map((detail) => (
            <div
              key={detail.layer}
              className={`rounded-lg border-t-[3px] bg-paper-2 p-4 ${layerBorderClasses[detail.layer]}`}
            >
              <Tag variant={detail.layer} />
              <p className="mt-2.5 text-[12.5px] text-text-muted leading-relaxed">
                {detail.description}
              </p>
            </div>
          ))}
        </div>
      )}

      {project.metrics.length > 0 && (
        <div className="mt-8 flex flex-wrap gap-[30px] font-mono">
          {project.metrics.map((metric) => (
            <div key={metric.label}>
              <p className="text-[11px] text-text-muted">{metric.label}</p>
              <p className={`mt-1 text-xl font-bold ${layerTextClasses[metric.layer]}`}>
                {metric.value}
              </p>
            </div>
          ))}
        </div>
      )}
    </main>
  );
}
