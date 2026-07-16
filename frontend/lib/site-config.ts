export const siteConfig = {
  name: "pietrodev",
  title: "Hago el producto entero",
  description:
    "Portfolio full stack: interfaz, API y base de datos como un mismo bloque. De la consulta a la base de datos hasta el click que ve tu usuario.",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000",
  locale: "es_AR",
} as const;
