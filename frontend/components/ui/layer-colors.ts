import type { ProjectLayer } from "@/types/project";

export const layerTextClasses: Record<ProjectLayer, string> = {
  ui: "text-layer-ui",
  api: "text-layer-api",
  db: "text-layer-db",
};

export const layerBorderClasses: Record<ProjectLayer, string> = {
  ui: "border-layer-ui",
  api: "border-layer-api",
  db: "border-layer-db",
};
