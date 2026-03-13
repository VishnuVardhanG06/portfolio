import { ArrowUpRight, Layers } from "lucide-react";

import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";

export function ProjectCard({
  name,
  highlights,
  technologies,
  href,
}: {
  name: string;
  highlights: string[];
  technologies: string[];
  href?: string;
}) {
  return (
    <Card className="group h-full transition hover:-translate-y-0.5 hover:border-black/20 dark:hover:border-white/20">
      <div className="flex items-start justify-between gap-4">
        <div className="space-y-1">
          <div className="flex items-center gap-2">
            <span className="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-neutral-950 text-white dark:bg-white dark:text-black">
              <Layers className="h-4 w-4" />
            </span>
            <h3 className="font-display text-lg font-semibold text-neutral-950 dark:text-white">{name}</h3>
          </div>
          <div className="text-sm text-neutral-600 dark:text-white/60">Selected build highlights</div>
        </div>
        {href ? (
          <a
            href={href}
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-black/10 text-neutral-800 transition hover:bg-black/5 dark:border-white/10 dark:text-white dark:hover:bg-white/10"
            aria-label={`Open ${name}`}
          >
            <ArrowUpRight className="h-4 w-4" />
          </a>
        ) : null}
      </div>

      <ul className="mt-4 space-y-2 text-sm text-neutral-700 dark:text-white/70">
        {highlights.slice(0, 4).map((h) => (
          <li key={h} className="leading-6">
            {h}
          </li>
        ))}
      </ul>

      <div className="mt-5 flex flex-wrap gap-2">
        {technologies.slice(0, 10).map((t) => (
          <Badge key={t}>{t}</Badge>
        ))}
      </div>
    </Card>
  );
}

