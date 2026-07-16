import type { Metadata } from "next";
import { layerBgClasses } from "@/components/ui/layer-colors";
import type { ProjectLayer } from "@/types/project";
import { buildMetadata } from "@/lib/metadata";

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

export default function SobreMiPage() {
  return (
    <main className="mx-auto w-full max-w-360 px-6 pt-16 pb-24 sm:px-8">
      <h1 className="font-ui text-3xl font-black">Cómo armo un proyecto</h1>

      <div className="mt-8 grid grid-cols-1 gap-2.5 sm:grid-cols-3">
        {stackByLayer.map(({ layer, items }) => (
          <div key={layer} className="rounded-lg bg-paper-2 p-3 text-center">
            <div className={`mb-2 h-[3px] rounded-full ${layerBgClasses[layer]}`} />
            <p className="font-mono text-[11px] leading-relaxed">{items.join(" · ")}</p>
          </div>
        ))}
      </div>

      <p className="mt-6 max-w-[620px] text-[13px] text-text-muted leading-[1.7]">
        Prefiero entregar el flujo entero antes que optimizar una sola capa. Cuando falta una API,
        la escribo; cuando falta una pantalla, la levanto.
      </p>
    </main>
  );
}
