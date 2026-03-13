import { Section } from "@/components/sections/Section";
import { Card } from "@/components/ui/Card";

export const metadata = {
  title: "Blog",
  description: "Notes and short writeups (optional).",
};

export default function BlogPage() {
  return (
    <div>
      <Section
        eyebrow="Blog"
        title="Notes (coming soon)"
        subtitle="A space for short writeups on ML experiments, CV tricks, and geospatial workflows."
      >
        <div className="grid gap-4 md:grid-cols-2">
          <Card>
            <div className="font-display text-base font-semibold text-neutral-950 dark:text-white">How I evaluate models</div>
            <p className="mt-2 text-sm text-neutral-700 dark:text-white/70">
              A practical checklist: baselines, splits, leakage traps, and the metrics that actually matter.
            </p>
          </Card>
          <Card>
            <div className="font-display text-base font-semibold text-neutral-950 dark:text-white">Remote sensing indices</div>
            <p className="mt-2 text-sm text-neutral-700 dark:text-white/70">
              NDVI, NDBI, MNDWI: when to use them, where they break, and how I validate outputs.
            </p>
          </Card>
        </div>
      </Section>
    </div>
  );
}

