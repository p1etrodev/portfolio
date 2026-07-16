import type { Metadata } from "next";
import Link from "next/link";
import { Tag } from "@/components/ui/tag";
import { layerBgClasses } from "@/components/ui/layer-colors";
import { projects } from "@/data/projects";
import { buildMetadata } from "@/lib/metadata";
import type { ProjectLayer } from "@/types/project";

export const metadata: Metadata = buildMetadata({
  title: "Sobre mí",
  description: "Cómo armo un proyecto: interfaz, lógica de negocio y datos, de punta a punta.",
  path: "/sobre-mi",
});

const stackByLayer: { layer: ProjectLayer; items: string[] }[] = [
  { layer: "ui", items: ["TypeScript", "Next.js", "React", "Astro", "Vue", "Angular"] },
  { layer: "api", items: ["Django", "Django REST Framework", "FastAPI", "Express", "Go + Fiber"] },
  { layer: "db", items: ["Postgres", "Pandas", "Polars"] },
];

const ownCategories = new Set(["producto propio", "SaaS propio"]);
const ownProducts = projects.filter((project) => ownCategories.has(project.category));
const clientProjects = projects.filter((project) => !ownCategories.has(project.category));

export default function SobreMiPage() {
  return (
    <main className="mx-auto w-full max-w-360 px-6 pt-16 pb-24 sm:px-8">
      <Tag variant="ui">full stack · disponible</Tag>

      <h1 className="mt-3 font-ui text-3xl font-black">Cómo armo un proyecto</h1>
      <p className="mt-2 max-w-[620px] text-[13px] text-text-muted leading-[1.7]">
        Full stack independiente hace más de 5 años. Prefiero entregar el flujo entero antes que
        optimizar una sola capa: cuando falta una API, la escribo; cuando falta una pantalla, la
        levanto.
      </p>

      <section className="mt-12">
        <h2 className="font-ui text-xl font-bold">Stack</h2>
        <div className="mt-4 grid grid-cols-1 gap-2.5 sm:grid-cols-3">
          {stackByLayer.map(({ layer, items }) => (
            <div key={layer} className="rounded-lg bg-paper-2 p-3 text-center">
              <div className={`mb-2 h-[3px] rounded-full ${layerBgClasses[layer]}`} />
              <p className="font-mono text-[11px] leading-relaxed">{items.join(" · ")}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2">
        <div>
          <h2 className="font-ui text-xl font-bold">Productos propios</h2>
          <p className="mt-2 text-[13px] text-text-muted leading-relaxed">
            Ideas propias que llevo de cero a producción, con las tres capas a mi cargo.
          </p>
          <ul className="mt-3 flex flex-col gap-2">
            {ownProducts.map((project) => (
              <li key={project.slug}>
                <Link
                  href={`/proyectos/${project.slug}`}
                  className="font-mono text-[11px] text-layer-ui hover:underline"
                >
                  {project.name} →
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="font-ui text-xl font-bold">Proyectos para clientes</h2>
          <p className="mt-2 text-[13px] text-text-muted leading-relaxed">
            Sistemas a medida para consultoras y otros negocios, del relevamiento al deploy.
          </p>
          <ul className="mt-3 flex flex-col gap-2">
            {clientProjects.map((project) => (
              <li key={project.slug}>
                <Link
                  href={`/proyectos/${project.slug}`}
                  className="font-mono text-[11px] text-layer-api hover:underline"
                >
                  {project.name} →
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="mt-12 flex flex-col gap-3">
        <h2 className="font-ui text-xl font-bold">¿Charlamos de tu proyecto?</h2>
        <Link
          href="/contacto"
          className="w-fit font-mono text-[11px] text-layer-ui hover:underline"
        >
          ir a contacto →
        </Link>
      </section>
    </main>
  );
}
