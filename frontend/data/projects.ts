import type { Project } from "@/types/project";

export const projects: Project[] = [
  {
    slug: "crm-salud-organizacional",
    index: 1,
    category: "consultora b2b",
    name: "CRM de prospección y panel de salud organizacional",
    tagline: "Del prospecto comercial al semáforo de salud organizacional, en un solo sistema.",
    description: "Django · Next.js · Postgres",
    stack: ["Django", "Next.js", "Postgres"],
    layers: { ui: 1, api: 1.3, db: 0.9 },
    layerDetails: [
      {
        layer: "ui",
        description:
          "Next.js (App Router) con TanStack Query, React Hook Form + Zod y shadcn/Tailwind v4 para el CRM y la carga de indicadores.",
      },
      {
        layer: "api",
        description:
          "Django + DRF con JWT, modelando el embudo comercial (prospecto → cliente) y las fórmulas de los 6 indicadores de salud organizacional con umbrales configurables.",
      },
      {
        layer: "db",
        description:
          "Postgres, con roles de usuario (admin / asesor comercial) y carga de datos por período para el histórico de cada indicador.",
      },
    ],
    metrics: [],
  },
  {
    slug: "hospy",
    index: 2,
    category: "SaaS propio",
    name: "Dashboard SaaS para dueños de hostels",
    tagline: "Ocupación, reservas y ventas de un hostel, en un solo panel por workspace.",
    description: "Python · TypeScript · Supabase",
    stack: ["Python", "TypeScript", "Supabase"],
    layers: { ui: 1, api: 1, db: 1.3 },
    layerDetails: [
      {
        layer: "ui",
        description:
          "Estado del hostel visualizado por cama, habitación o cabaña, configurable según cómo esté organizado cada establecimiento.",
      },
      {
        layer: "api",
        description:
          "Backend en Python que administra suscripciones por workspace (mensual/anual/trianual), reservas, pasajeros, pagos y roles de usuario.",
      },
      {
        layer: "db",
        description:
          "Supabase (Postgres) con registro de ventas de víveres, limpiezas por unidad y agrupamiento de unidades (pisos, pasillos, etc).",
      },
    ],
    metrics: [],
  },
  {
    slug: "costea",
    index: 3,
    category: "producto propio",
    name: "Gestión de producción para emprendimientos gastronómicos",
    tagline: "De la materia prima al pedido del cliente, con costos calculados en cada paso.",
    description: "Python · TypeScript · Docker",
    stack: ["Python", "TypeScript", "Docker"],
    layers: { ui: 0.9, api: 1.3, db: 1 },
    layerDetails: [
      {
        layer: "ui",
        description:
          "PWA mobile-first: pensada para operarse principalmente desde el celular en el día a día del emprendimiento.",
      },
      {
        layer: "api",
        description:
          "Cálculo automático de costos de producción (con mermas reales) y precios sugeridos a partir de recetas versionadas.",
      },
      {
        layer: "db",
        description:
          "Modelo materia prima → receta → producción → producto, con historial de precios de compra y lotes de producción.",
      },
    ],
    metrics: [],
  },
  {
    slug: "pooly",
    index: 4,
    category: "producto propio",
    name: "Tracker de sesiones de pool con ranking ELO",
    tagline:
      "Cada partida de pool, con su propio ranking y estadísticas de sinergia entre jugadores.",
    description: "Django · Next.js · Postgres",
    stack: ["Django", "Next.js", "Postgres"],
    layers: { ui: 1, api: 1.4, db: 0.8 },
    layerDetails: [
      {
        layer: "ui",
        description:
          "Next.js + TanStack Query, con gráficos de estadísticas (shadcn/Recharts) por jugador, sesión y serie.",
      },
      {
        layer: "api",
        description:
          "Django REST Framework recalcula el ELO de cada jugador partida por partida, y arma la sinergia real entre compañeros de equipo por composición completa, no por par.",
      },
      {
        layer: "db",
        description:
          "Postgres modela jugadores, equipos, partidos, series y sesiones, con estadísticas de victorias, faltas y goles de oro por jugador.",
      },
    ],
    metrics: [],
  },
  {
    slug: "panel-hostel-cliente",
    index: 5,
    category: "hostel cliente",
    name: "Panel interno de operaciones para un hostel",
    tagline: "Ocupación, tareas y reservas de un hostel, gestionadas puertas adentro.",
    description: "Next.js · Supabase · PLpgSQL",
    stack: ["Next.js", "Supabase", "PLpgSQL"],
    layers: { ui: 0.9, api: 0.9, db: 1.2 },
    layerDetails: [
      {
        layer: "ui",
        description:
          "Next.js (migrado desde una primera versión en Angular) para el panel diario de operaciones.",
      },
      {
        layer: "api",
        description:
          "Buena parte de la lógica de negocio resuelta con funciones y triggers de Postgres (PLpgSQL) sobre Supabase, no solo en el backend de aplicación.",
      },
      {
        layer: "db",
        description:
          "Supabase (Postgres) como fuente única de verdad para ocupación, reservas y tareas del hostel.",
      },
    ],
    metrics: [],
  },
  {
    slug: "tienda-online-cliente",
    index: 6,
    category: "cliente e-commerce",
    name: "Tienda online con pagos integrados",
    tagline: "Catálogo, panel de administración y cobros con Mercado Pago, todo en un solo sitio.",
    description: "Angular · Supabase · Mercado Pago",
    stack: ["Angular", "Supabase", "Mercado Pago"],
    layers: { ui: 1, api: 1.1, db: 0.9 },
    layerDetails: [
      {
        layer: "ui",
        description: "Angular con tienda pública y panel de administración protegido por PIN.",
      },
      {
        layer: "api",
        description:
          "Integración de pagos con Mercado Pago y funciones de Supabase para la lógica de pedidos.",
      },
      {
        layer: "db",
        description:
          "Supabase (Postgres) con migraciones y seeds versionados para catálogo y pedidos.",
      },
    ],
    metrics: [],
  },
];

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((project) => project.slug === slug);
}
