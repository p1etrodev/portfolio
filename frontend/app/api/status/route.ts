import { NextResponse } from "next/server";
import { websites } from "@/data/websites";

export const dynamic = "force-dynamic";

const TIMEOUT_MS = 8000;

interface WebsiteStatus {
  slug: string;
  name: string;
  url: string;
  up: boolean;
  statusCode: number | null;
  responseTimeMs: number;
  checkedAt: string;
}

async function checkWebsite(url: string): Promise<Omit<WebsiteStatus, "slug" | "name" | "url">> {
  const start = Date.now();
  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), TIMEOUT_MS);

  try {
    const res = await fetch(url, {
      method: "GET",
      signal: controller.signal,
      cache: "no-store",
      redirect: "follow",
    });

    return {
      up: res.ok,
      statusCode: res.status,
      responseTimeMs: Date.now() - start,
      checkedAt: new Date().toISOString(),
    };
  } catch {
    return {
      up: false,
      statusCode: null,
      responseTimeMs: Date.now() - start,
      checkedAt: new Date().toISOString(),
    };
  } finally {
    clearTimeout(timeout);
  }
}

export async function GET() {
  const results: WebsiteStatus[] = await Promise.all(
    websites.map(async (site) => ({
      slug: site.slug,
      name: site.name,
      url: site.url,
      ...(await checkWebsite(site.url)),
    })),
  );

  return NextResponse.json(results);
}
