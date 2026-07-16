import { Button } from "@/components/ui/button";
import { LayerBadge } from "@/components/ui/layer-badge";
import { Tag } from "@/components/ui/tag";

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
          <p className="font-mono text-[11px] text-text-muted">
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
    </main>
  );
}
