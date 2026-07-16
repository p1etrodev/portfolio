import Link from "next/link";
import { Button } from "@/components/ui/button";
import { LayerBadge } from "@/components/ui/layer-badge";
import { Tag } from "@/components/ui/tag";
import { projects } from "@/data/projects";

const featuredProjects = projects.slice(0, 3);

export default function Home() {
  return (
    <main className="mx-auto w-full max-w-360 px-6 pt-20 pb-24 sm:px-8 sm:pt-28">
      <section className="animate-assemble flex max-w-[620px] flex-col gap-3">
        <Tag variant="ui">full stack · disponible</Tag>

        <h1 className="font-ui text-[42px] leading-[1.08] font-black">Hago el producto entero.</h1>

        <p className="font-display text-2xl text-text-muted italic">
          De la consulta a la base de datos, hasta el click que ve tu usuario.
        </p>

        <div className="mt-2 flex flex-col gap-2.5">
          <LayerBadge className="max-w-[420px]" />
          <p className="font-mono text-[12px] text-text-muted">
            interfaz · lógica de negocio · datos
          </p>
        </div>

        <div className="mt-2 flex gap-2.5">
          <Button href="/proyectos" variant="primary">
            ver proyectos →
          </Button>
          <Button href="/contacto" variant="ghost">
            agendar llamada
          </Button>
        </div>
      </section>

      <section className="mt-24">
        <div className="flex items-end justify-between gap-4">
          <h2 className="font-ui text-2xl font-black">Proyectos destacados</h2>
          <Link href="/proyectos" className="font-mono text-[12px] text-text-muted hover:text-text">
            ver todos →
          </Link>
        </div>

        <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-3">
          {featuredProjects.map((project) => (
            <Link
              key={project.slug}
              href={`/proyectos/${project.slug}`}
              className="rounded-[10px] bg-paper-2 p-4 transition-opacity hover:opacity-90"
            >
              <p className="font-mono text-[12px] text-text-muted">{project.category}</p>
              <h3 className="mt-1.5 font-ui text-base font-bold">{project.name}</h3>
              <p className="mt-1 text-[14px] text-text-muted">{project.stack.join(" · ")}</p>
              <LayerBadge ratios={project.layers} className="mt-3" />
            </Link>
          ))}
        </div>
      </section>

      <section className="mt-24 flex max-w-[620px] flex-col gap-3">
        <h2 className="font-ui text-2xl font-black">Cómo trabajo</h2>
        <p className="text-[15px] leading-[1.7] text-text-muted">
          Full stack independiente hace más de 5 años. Trabajo tanto en productos propios (Hospy,
          Costea, Pooly) como en sistemas para clientes y consultoras — en los dos casos, entrego el
          flujo completo: interfaz, lógica de negocio y datos.
        </p>
        <Link
          href="/sobre-mi"
          className="font-mono text-[12px] text-layer-ui transition-colors hover:text-text"
        >
          más sobre cómo armo un proyecto →
        </Link>
      </section>

      <section className="mt-24 flex flex-col gap-3">
        <h2 className="font-ui text-2xl font-black">¿Tenés un proyecto en mente?</h2>
        <p className="max-w-[500px] text-[15px] text-text-muted">
          Contame qué necesitás y te respondo en menos de 24hs.
        </p>
        <div>
          <Button href="/contacto" variant="primary">
            contactar →
          </Button>
        </div>
      </section>
    </main>
  );
}
