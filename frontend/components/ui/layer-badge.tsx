import type { ProjectLayerRatio } from "@/types/project";
import { cn } from "@/utils/cn";

interface LayerBadgeProps {
  ratios?: ProjectLayerRatio;
  className?: string;
}

export function LayerBadge({ ratios = { ui: 1, api: 1, db: 1 }, className }: LayerBadgeProps) {
  return (
    <div className={cn("flex h-1.5 gap-[3px]", className)}>
      <span className="rounded-full bg-layer-ui" style={{ flex: ratios.ui }} />
      <span className="rounded-full bg-layer-api" style={{ flex: ratios.api }} />
      <span className="rounded-full bg-layer-db" style={{ flex: ratios.db }} />
    </div>
  );
}
