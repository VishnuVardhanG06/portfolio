import { cn } from "@/lib/cn";

export function Section({
  eyebrow,
  title,
  subtitle,
  children,
  className,
}: {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <section className={cn("py-10 md:py-16", className)}>
      <div className="mx-auto max-w-6xl px-4">
        <div className="mb-8 max-w-3xl">
          {eyebrow ? (
            <div className="mb-2 text-xs font-semibold uppercase tracking-wider text-white/60">{eyebrow}</div>
          ) : null}
          <h2 className="font-display text-2xl font-semibold tracking-tight text-white md:text-3xl">{title}</h2>
          {subtitle ? <p className="mt-2 text-base leading-7 text-white/70">{subtitle}</p> : null}
        </div>
        {children}
      </div>
    </section>
  );
}
