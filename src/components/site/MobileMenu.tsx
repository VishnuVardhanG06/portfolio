"use client";

import * as React from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";

import { cn } from "@/lib/cn";

export type NavItem = { href: string; label: string };

export function MobileMenu({ items, className }: { items: NavItem[]; className?: string }) {
  const [open, setOpen] = React.useState(false);

  return (
    <div className={cn("relative sm:hidden", className)}>
      <button
        type="button"
        className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-black/10 bg-white/70 text-neutral-900 shadow-sm backdrop-blur transition hover:bg-white dark:border-white/10 dark:bg-white/5 dark:text-white dark:hover:bg-white/10"
        onClick={() => setOpen((v) => !v)}
        aria-label={open ? "Close menu" : "Open menu"}
      >
        {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
      </button>
      <AnimatePresence>
        {open ? (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.18 }}
            className="absolute right-0 top-12 z-50 w-56 rounded-2xl border border-black/10 bg-white/90 p-2 shadow-lg backdrop-blur dark:border-white/10 dark:bg-black/80"
          >
            <nav className="flex flex-col">
              {items.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="rounded-xl px-3 py-2 text-sm font-medium text-neutral-900 hover:bg-black/5 dark:text-white dark:hover:bg-white/10"
                  onClick={() => setOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
            </nav>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </div>
  );
}

