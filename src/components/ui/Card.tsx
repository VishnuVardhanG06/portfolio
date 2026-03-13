import { cn } from "@/lib/cn";

export function Card({ className, children }: { className?: string; children: React.ReactNode }) {
  return (
    <div
      className={cn(
        "rounded-2xl border border-white/10 bg-white/5 p-6 shadow-[0_1px_0_rgba(255,255,255,0.06)_inset] backdrop-blur",
        className,
      )}
    >
      {children}
    </div>
  );
}
