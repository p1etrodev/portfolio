import Link from "next/link";
import type { Metadata } from "next";
import type { ProjectLayer } from "@/types/project";
import { Tag } from "@/components/ui/tag";
import { buildMetadata } from "@/lib/metadata";
import { layerBgClasses } from "@/components/ui/layer-colors";
import { projects } from "@/data/projects";

export const metadata: Metadata = buildMetadata({
  title: "Sobre mí",
  description: "Cómo armo un proyecto: interfaz, lógica de negocio y datos, de punta a punta.",
  path: "/sobre-mi",
});

interface StackLanguageGroup {
  language: string;
  items: string[];
}

const stackByLayer: { layer: ProjectLayer; languages: StackLanguageGroup[] }[] = [
  {
    layer: "ui",
    languages: [
      {
        language: "TypeScript",
        items: [
          "Next.js",
          "React",
          "Astro",
          "Vue",
          "Angular",
          "Axios",
          "TanStack Query",
          "React Hook Form",
          "Zod",
          "Tailwind",
          "shadcn/ui",
          "Electron",
        ],
      },
      { language: "Python", items: ["Streamlit", "Qt"] },
    ],
  },
  {
    layer: "api",
    languages: [
      { language: "Python", items: ["Django", "Django REST Framework", "FastAPI"] },
      { language: "TypeScript", items: ["Express"] },
      { language: "Go", items: ["Fiber"] },
    ],
  },
  {
    layer: "db",
    languages: [
      { language: "SQL", items: ["Postgres", "Supabase", "PLpgSQL"] },
      { language: "Python", items: ["Pandas", "Polars"] },
    ],
  },
];

const ownCategories = new Set(["producto propio", "SaaS propio"]);
const ownProducts = projects.filter((project) => ownCategories.has(project.category));
const clientProjects = projects.filter((project) => !ownCategories.has(project.category));

export default function SobreMiPage() {
  return (
    <main className="mx-auto w-full max-w-360 px-6 pt-16 pb-24 sm:px-8">
      <Tag variant="ui">full stack · disponible</Tag>

      <h1 className="mt-3 font-ui text-3xl font-black">Cómo armo un proyecto</h1>
      <p className="mt-2 max-w-155 text-[15px] text-text-muted leading-[1.7]">
        Full stack independiente hace más de 5 años. Prefiero entregar el flujo entero antes que
        optimizar una sola capa: cuando falta una API, la escribo; cuando falta una pantalla, la
        levanto.
      </p>

      <section className="mt-12">
        <h2 className="font-ui text-xl font-bold">Stack</h2>
        <div className="mt-4 grid grid-cols-1 gap-2.5 sm:grid-cols-3">
          {stackByLayer.map(({ layer, languages }) => (
            <div key={layer} className="rounded-lg bg-paper-2 p-3 h-fit">
              <div className={`mb-3 h-0.75 rounded-full ${layerBgClasses[layer]}`} />
              <div className="flex flex-col gap-2">
                {languages.map(({ language, items }) => (
                  <div key={language}>
                    <p className="font-mono text-[11px] text-text-muted uppercase tracking-wide">
                      {language}
                    </p>
                    <p className="font-mono text-[12px] leading-relaxed">{items.join(" · ")}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2">
        <div>
          <h2 className="font-ui text-xl font-bold">Productos propios</h2>
          <p className="mt-2 text-[15px] text-text-muted leading-relaxed">
            Ideas propias que llevo de cero a producción, con las tres capas a mi cargo.
          </p>
          <ul className="mt-3 flex flex-col gap-2">
            {ownProducts.map((project) => (
              <li key={project.slug}>
                <Link
                  href={`/proyectos/${project.slug}`}
                  className="font-mono text-[12px] text-layer-ui hover:underline"
                >
                  {project.name} →
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="font-ui text-xl font-bold">Proyectos para clientes</h2>
          <p className="mt-2 text-[15px] text-text-muted leading-relaxed">
            Sistemas a medida para consultoras y otros negocios, del relevamiento al deploy.
          </p>
          <ul className="mt-3 flex flex-col gap-2">
            {clientProjects.map((project) => (
              <li key={project.slug}>
                <Link
                  href={`/proyectos/${project.slug}`}
                  className="font-mono text-[12px] text-layer-api hover:underline"
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
          className="w-fit font-mono text-[12px] text-layer-ui hover:underline"
        >
          ir a contacto →
        </Link>
      </section>
    </main>
  );
}
