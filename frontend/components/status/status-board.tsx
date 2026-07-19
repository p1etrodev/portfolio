"use client";

import { useCallback, useEffect, useState } from "react";

import { Button } from "@/components/ui/button";
import { cn } from "@/utils/cn";

interface WebsiteStatus {
  slug: string;
  name: string;
  url: string;
  up: boolean;
  statusCode: number | null;
  responseTimeMs: number;
  checkedAt: string;
}

export function StatusBoard() {
  const [statuses, setStatuses] = useState<WebsiteStatus[] | null>(null);
  const [isChecking, setIsChecking] = useState(false);
  const [error, setError] = useState(false);

  const fetchStatuses = useCallback(async () => {
    setIsChecking(true);
    try {
      const res = await fetch("/api/status", { cache: "no-store" });
      if (!res.ok) throw new Error("request failed");
      const data: WebsiteStatus[] = await res.json();
      setStatuses(data);
      setError(false);
    } catch {
      setError(true);
    } finally {
      setIsChecking(false);
    }
  }, []);

  useEffect(() => void fetchStatuses(), [fetchStatuses]);

  return (
    <div>
      <div className="flex items-center gap-3">
        <Button onClick={fetchStatuses} disabled={isChecking} variant="ghost">
          {isChecking ? "chequeando…" : "actualizar"}
        </Button>
        {error && <p className="text-[13px] text-layer-api">no se pudo actualizar el estado.</p>}
      </div>

      <div className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-2">
        {statuses === null &&
          !error &&
          Array.from({ length: 2 }).map((_, i) => (
            <div key={i} className="h-24 animate-pulse rounded-[10px] bg-paper-2" />
          ))}

        {statuses?.map((site) => (
          <div key={site.slug} className="rounded-[10px] bg-paper-2 p-4">
            <div className="flex items-center justify-between gap-3">
              <h2 className="font-ui text-base font-bold">{site.name}</h2>
              <span
                className={cn(
                  "inline-flex items-center gap-1.5 rounded-full px-2.25 py-0.75 font-mono text-[11px] before:h-1.5 before:w-1.5 before:rounded-full before:content-['']",
                  site.up
                    ? "bg-layer-ui/10 text-layer-ui before:bg-layer-ui"
                    : "bg-layer-api/10 text-layer-api before:bg-layer-api",
                )}
              >
                {site.up ? "operativo" : "caído"}
              </span>
            </div>

            <a
              href={site.url}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-1 block truncate font-mono text-[12px] text-text-muted hover:underline"
            >
              {site.url}
            </a>

            <div className="mt-3 flex items-center gap-4 font-mono text-[12px] text-text-muted">
              <span>{site.statusCode ?? "sin respuesta"}</span>
              <span>{site.responseTimeMs}ms</span>
              <span>{new Date(site.checkedAt).toLocaleTimeString("es-AR")}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
