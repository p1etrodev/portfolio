import type { Metadata } from "next";
import Link from "next/link";
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

  const projectIndex = projects.findIndex((p) => p.slug === project.slug);
  const previousProject = projects[(projectIndex - 1 + projects.length) % projects.length];
  const nextProject = projects[(projectIndex + 1) % projects.length];

  return (
    <main className="mx-auto w-full max-w-360 px-6 pt-16 pb-24 sm:px-8">
      <Link href="/proyectos" className="font-mono text-[12px] text-text-muted hover:text-text">
        ← volver a proyectos
      </Link>

      <p className="mt-6 font-mono text-[12px] text-text-muted">
        ficha {String(project.index).padStart(2, "0")} · {project.category}
      </p>
      <h1 className="mt-1.5 font-ui text-2xl font-black">{project.name}</h1>
      <p className="mt-1.5 max-w-[560px] text-[15px] text-text-muted">{project.tagline}</p>
      <p className="mt-2 font-mono text-[12px] text-text-muted">{project.stack.join(" · ")}</p>

      {project.layerDetails.length > 0 && (
        <div className="mt-8 grid grid-cols-1 gap-3.5 sm:grid-cols-3">
          {project.layerDetails.map((detail) => (
            <div
              key={detail.layer}
              className={`rounded-lg border-t-[3px] bg-paper-2 p-4 ${layerBorderClasses[detail.layer]}`}
            >
              <Tag variant={detail.layer} />
              <p className="mt-2.5 text-[14px] text-text-muted leading-relaxed">
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
              <p className="text-[12px] text-text-muted">{metric.label}</p>
              <p className={`mt-1 text-xl font-bold ${layerTextClasses[metric.layer]}`}>
                {metric.value}
              </p>
            </div>
          ))}
        </div>
      )}

      <div className="mt-16 flex items-center justify-between border-border border-t pt-6 font-mono text-[12px]">
        <Link
          href={`/proyectos/${previousProject.slug}`}
          className="text-text-muted hover:text-text"
        >
          ← {previousProject.name}
        </Link>
        <Link href={`/proyectos/${nextProject.slug}`} className="text-text-muted hover:text-text">
          {nextProject.name} →
        </Link>
      </div>
    </main>
  );
}
