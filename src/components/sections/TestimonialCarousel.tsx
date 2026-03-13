"use client";

import * as React from "react";
import { AnimatePresence, motion } from "framer-motion";

import { Card } from "@/components/ui/Card";
import { cn } from "@/lib/cn";

type Testimonial = {
  quote: string;
  name: string;
  title: string;
  isPlaceholder?: boolean;
};

const testimonials: Testimonial[] = [
  {
    quote:
      "Vishnu quickly turns ambiguous problem statements into crisp experiments, and he is great at communicating results clearly.",
    name: "Mentor / Collaborator",
    title: "Sample testimonial (replace with a real quote)",
    isPlaceholder: true,
  },
  {
    quote:
      "Strong fundamentals, fast learning curve, and a practical mindset. His projects show real ownership from data to UI.",
    name: "Reviewer",
    title: "Sample testimonial (replace with a real quote)",
    isPlaceholder: true,
  },
];

export function TestimonialCarousel({ className }: { className?: string }) {
  const [index, setIndex] = React.useState(0);
  const current = testimonials[index % testimonials.length];

  return (
    <div className={cn("space-y-3", className)}>
      <div className="flex items-center justify-between gap-4">
        <div className="text-sm font-semibold text-neutral-700 dark:text-white/70">Testimonials</div>
        <div className="flex gap-2">
          <button
            type="button"
            className="rounded-full border border-black/10 px-3 py-1 text-sm font-semibold text-neutral-800 hover:bg-black/5 dark:border-white/10 dark:text-white dark:hover:bg-white/10"
            onClick={() => setIndex((v) => (v - 1 + testimonials.length) % testimonials.length)}
          >
            Prev
          </button>
          <button
            type="button"
            className="rounded-full border border-black/10 px-3 py-1 text-sm font-semibold text-neutral-800 hover:bg-black/5 dark:border-white/10 dark:text-white dark:hover:bg-white/10"
            onClick={() => setIndex((v) => (v + 1) % testimonials.length)}
          >
            Next
          </button>
        </div>
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -8 }}
          transition={{ duration: 0.2 }}
        >
          <Card>
            <p className="text-base leading-7 text-neutral-800 dark:text-white/80">“{current.quote}”</p>
            <div className="mt-4 text-sm font-semibold text-neutral-950 dark:text-white">
              {current.name} · <span className="font-normal text-neutral-600 dark:text-white/60">{current.title}</span>
            </div>
            {current.isPlaceholder ? (
              <div className="mt-2 text-xs text-neutral-500 dark:text-white/50">
                Placeholder text. Replace with real testimonials when available.
              </div>
            ) : null}
          </Card>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}

