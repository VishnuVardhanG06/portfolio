import { Badge } from "@/components/ui/Badge";

export function SkillBadge({ label }: { label: string }) {
  return <Badge className="border-black/10 bg-white/70 dark:border-white/10 dark:bg-white/5">{label}</Badge>;
}

