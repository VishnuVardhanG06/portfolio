import { cn } from "@/lib/cn";

export function Badge({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full border border-black/10 bg-white/70 px-3 py-1 text-xs font-semibold text-neutral-800 shadow-sm backdrop-blur dark:border-white/10 dark:bg-white/5 dark:text-white/80",
        className,
      )}
    >
      {children}
    </span>
  );
}

