import type { Project } from "@/types/project";

export const projects: Project[] = [
  {
    slug: "marketplace-b2b",
    index: 1,
    category: "marketplace b2b",
    name: "Checkout y catálogo con búsqueda semántica",
    tagline: "De la búsqueda del comprador al pago aprobado, un solo flujo.",
    description: "Next.js · FastAPI · pgvector",
    stack: ["Next.js", "FastAPI", "pgvector"],
    layers: { ui: 1.4, api: 1, db: 0.8 },
    layerDetails: [
      {
        layer: "ui",
        description:
          "Next.js + búsqueda instantánea con debounce y resultados semánticos, no solo texto exacto.",
      },
      {
        layer: "api",
        description:
          "FastAPI orquesta stock, precio dinámico y el flujo de Stripe Connect para pagos a vendedores.",
      },
      {
        layer: "db",
        description:
          "Postgres + pgvector para embeddings de producto; catálogo de 80k SKUs indexado.",
      },
    ],
    metrics: [
      { label: "búsqueda a resultado", value: "180ms", layer: "ui" },
      { label: "conversión checkout", value: "+9%", layer: "api" },
      { label: "SKUs indexados", value: "80k", layer: "db" },
    ],
  },
  {
    slug: "fintech-interno",
    index: 2,
    category: "fintech interno",
    name: "Motor de pricing en tiempo real",
    tagline: "Precio recalculado en cada cambio de mercado, sin lag perceptible.",
    description: "React · Go · Redis",
    stack: ["React", "Go", "Redis"],
    layers: { ui: 0.8, api: 1.6, db: 0.6 },
    layerDetails: [],
    metrics: [],
  },
  {
    slug: "panel-interno",
    index: 3,
    category: "panel interno",
    name: "Dashboard de churn con scoring en vivo",
    tagline: "El equipo ve el riesgo de cada cuenta antes de que se vaya.",
    description: "Next.js · Airflow · Postgres",
    stack: ["Next.js", "Airflow", "Postgres"],
    layers: { ui: 1, api: 0.8, db: 1.4 },
    layerDetails: [],
    metrics: [],
  },
  {
    slug: "producto-propio",
    index: 4,
    category: "producto propio",
    name: "Recomendador de catálogo con embeddings",
    tagline: "Cada visitante ve un catálogo ordenado para su propio gusto.",
    description: "Remix · FastAPI · Supabase",
    stack: ["Remix", "FastAPI", "Supabase"],
    layers: { ui: 1.2, api: 1.2, db: 1 },
    layerDetails: [],
    metrics: [],
  },
];

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((project) => project.slug === slug);
}
