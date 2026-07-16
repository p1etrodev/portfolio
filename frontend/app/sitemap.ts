import type { MetadataRoute } from "next";
import { projects } from "@/data/projects";
import { siteConfig } from "@/lib/site-config";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes: MetadataRoute.Sitemap = [
    { url: siteConfig.url, changeFrequency: "monthly", priority: 1 },
    { url: `${siteConfig.url}/proyectos`, changeFrequency: "monthly", priority: 0.8 },
    { url: `${siteConfig.url}/sobre-mi`, changeFrequency: "yearly", priority: 0.5 },
    { url: `${siteConfig.url}/contacto`, changeFrequency: "yearly", priority: 0.5 },
  ];

  const projectRoutes: MetadataRoute.Sitemap = projects.map((project) => ({
    url: `${siteConfig.url}/proyectos/${project.slug}`,
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  return [...staticRoutes, ...projectRoutes];
}
