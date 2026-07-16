import type { ProjectLayerRatio } from "@/types/project";
import { cn } from "@/utils/cn";

interface LayerBadgeProps {
  ratios?: ProjectLayerRatio;
  className?: string;
}

export function LayerBadge({ ratios = { ui: 1, api: 1, db: 1 }, className }: LayerBadgeProps) {
  return (
    <div
      className={cn("flex h-1.5 gap-0.75 *:first:rounded-l-full *:last:rounded-r-full", className)}
    >
      {ratios.ui > 0 && <span className="bg-layer-ui" style={{ flex: ratios.ui }} />}
      {ratios.api > 0 && <span className="bg-layer-api" style={{ flex: ratios.api }} />}
      {ratios.db > 0 && <span className="bg-layer-db" style={{ flex: ratios.db }} />}
    </div>
  );
}
