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
    <Card className="group h-full transition hover:-translate-y-0.5 hover:border-white/20">
      <div className="flex items-start justify-between gap-4">
        <div className="space-y-1">
          <div className="flex items-center gap-2">
            <span className="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-sky-400/20 via-blue-500/20 to-fuchsia-500/20 text-white">
              <Layers className="h-4 w-4" />
            </span>
            <h3 className="font-display text-lg font-semibold text-white">{name}</h3>
          </div>
          <div className="text-sm text-white/60">Selected build highlights</div>
        </div>
        {href ? (
          <a
            href={href}
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-white/80 transition hover:bg-white/10 hover:text-white"
            aria-label={`Open ${name}`}
          >
            <ArrowUpRight className="h-4 w-4" />
          </a>
        ) : null}
      </div>

      <ul className="mt-4 space-y-2 text-sm text-white/70">
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
