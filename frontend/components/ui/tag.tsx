import type { ProjectLayer } from "@/types/project";
import type { ReactNode } from "react";
import { cn } from "@/utils/cn";

const layerLabel: Record<ProjectLayer, string> = {
  ui: "interfaz",
  api: "lógica",
  db: "datos",
};

const layerClasses: Record<ProjectLayer, string> = {
  ui: "text-layer-ui bg-layer-ui/10 before:bg-layer-ui",
  api: "text-layer-api bg-layer-api/10 before:bg-layer-api",
  db: "text-layer-db bg-layer-db/10 before:bg-layer-db",
};

interface TagProps {
  variant: ProjectLayer;
  children?: ReactNode;
  className?: string;
}

export function Tag({ variant, children, className }: TagProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.25 rounded-full px-2.25 py-0.75 font-mono text-[10px] before:h-1.5 before:w-1.5 before:rounded-full before:content-[''] w-fit",
        layerClasses[variant],
        className,
      )}
    >
      {children ?? layerLabel[variant]}
    </span>
  );
}
