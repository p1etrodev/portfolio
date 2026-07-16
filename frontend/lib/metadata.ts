import type { Metadata } from "next";
import { siteConfig } from "@/lib/site-config";

interface BuildMetadataArgs {
  title: string;
  description?: string;
  path: string;
}

export function buildMetadata({ title, description, path }: BuildMetadataArgs): Metadata {
  const resolvedDescription = description ?? siteConfig.description;
  const url = new URL(path, siteConfig.url).toString();

  return {
    title,
    description: resolvedDescription,
    alternates: { canonical: url },
    openGraph: {
      title,
      description: resolvedDescription,
      url,
      siteName: siteConfig.name,
      locale: siteConfig.locale,
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description: resolvedDescription,
    },
  };
}
