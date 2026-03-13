"use client";

import { motion } from "framer-motion";

export function Loader() {
  return (
    <div className="inline-flex items-center gap-2 text-sm text-white/70">
      <motion.span
        className="h-2 w-2 rounded-full bg-white"
        animate={{ opacity: [0.25, 1, 0.25] }}
        transition={{ duration: 0.9, repeat: Infinity }}
      />
      <span>Sending…</span>
    </div>
  );
}
