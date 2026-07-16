import type { Metadata } from "next";
import { size as ogImageSize } from "@/app/opengraph-image";
import { siteConfig } from "@/lib/site-config";

interface BuildMetadataArgs {
  title: string;
  description?: string;
  path: string;
}

export function buildMetadata({ title, description, path }: BuildMetadataArgs): Metadata {
  const resolvedDescription = description ?? siteConfig.description;
  const url = new URL(path, siteConfig.url).toString();

  const image = {
    url: `${siteConfig.url}/opengraph-image`,
    width: ogImageSize.width,
    height: ogImageSize.height,
  };

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
      images: [image],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description: resolvedDescription,
      images: [image],
    },
  };
}
