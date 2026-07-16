export type ProjectLayer = "ui" | "api" | "db";

export interface ProjectLayerRatio {
  ui: number;
  api: number;
  db: number;
}

export interface ProjectMetric {
  label: string;
  value: string;
  layer: ProjectLayer;
}

export interface ProjectLayerDetail {
  layer: ProjectLayer;
  description: string;
}

export interface Project {
  slug: string;
  index: number;
  category: string;
  name: string;
  tagline: string;
  description: string;
  stack: string[];
  layers: ProjectLayerRatio;
  layerDetails: ProjectLayerDetail[];
  metrics: ProjectMetric[];
}
