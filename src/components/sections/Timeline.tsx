import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";

export type TimelineItem = {
  title: string;
  dates: string;
  subtitle?: string;
  bullets: string[];
  tags?: string[];
};

export function Timeline({ items }: { items: TimelineItem[] }) {
  return (
    <div className="grid gap-4">
      {items.map((item) => (
        <Card key={`${item.title}-${item.dates}`}>
          <div className="flex flex-col justify-between gap-3 md:flex-row md:items-start">
            <div>
              <div className="font-display text-lg font-semibold text-white">{item.title}</div>
              {item.subtitle ? <div className="mt-1 text-sm text-white/60">{item.subtitle}</div> : null}
            </div>
            <div className="text-sm font-semibold text-white/70">{item.dates}</div>
          </div>
          <ul className="mt-4 list-disc space-y-2 pl-5 text-sm text-white/70">
            {item.bullets.map((b) => (
              <li key={b}>{b}</li>
            ))}
          </ul>
          {item.tags && item.tags.length ? (
            <div className="mt-5 flex flex-wrap gap-2">
              {item.tags.map((t) => (
                <Badge key={t}>{t}</Badge>
              ))}
            </div>
          ) : null}
        </Card>
      ))}
    </div>
  );
}
