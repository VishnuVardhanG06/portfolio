"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Github, Linkedin, Mail } from "lucide-react";

import { resume } from "@/data/resume";
import { ButtonLink } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";

export function Hero() {
  return (
    <section className="relative overflow-hidden py-16 md:py-24">
      <div className="absolute inset-0 -z-10">
        <div className="absolute -left-24 -top-24 h-72 w-72 rounded-full bg-amber-300/30 blur-3xl dark:bg-amber-400/10" />
        <div className="absolute -right-24 top-10 h-72 w-72 rounded-full bg-sky-300/30 blur-3xl dark:bg-sky-400/10" />
        <div className="absolute left-1/2 top-1/2 h-96 w-96 -translate-x-1/2 -translate-y-1/2 rounded-full bg-emerald-300/20 blur-3xl dark:bg-emerald-400/10" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgba(0,0,0,0.06)_1px,transparent_0)] [background-size:24px_24px] dark:bg-[radial-gradient(circle_at_1px_1px,rgba(255,255,255,0.08)_1px,transparent_0)]" />
      </div>

      <div className="mx-auto max-w-6xl px-4">
        <div className="grid items-center gap-10 md:grid-cols-12">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.35 }}
            className="md:col-span-7"
          >
            <div className="flex flex-wrap gap-2">
              {resume.domain.map((d) => (
                <Badge key={d}>{d}</Badge>
              ))}
            </div>

            <h1 className="mt-5 font-display text-4xl font-semibold tracking-tight text-neutral-950 dark:text-white md:text-5xl">
              Building ML systems and geospatial analytics that hold up in the real world.
            </h1>

            <p className="mt-4 max-w-2xl text-base leading-7 text-neutral-700 dark:text-white/70">
              {resume.summary}
            </p>

            <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:items-center">
              <ButtonLink href="/projects" size="lg">
                View projects <ArrowRight className="h-4 w-4" />
              </ButtonLink>
              <ButtonLink href="/contact" variant="secondary" size="lg">
                Contact <ArrowRight className="h-4 w-4" />
              </ButtonLink>
            </div>

            <div className="mt-6 flex flex-wrap gap-3 text-sm font-semibold text-neutral-700 dark:text-white/70">
              <a
                className="inline-flex items-center gap-2 hover:text-neutral-950 dark:hover:text-white"
                href={resume.links.linkedin}
                target="_blank"
                rel="noreferrer"
              >
                <Linkedin className="h-4 w-4" /> LinkedIn
              </a>
              <a
                className="inline-flex items-center gap-2 hover:text-neutral-950 dark:hover:text-white"
                href={resume.links.github}
                target="_blank"
                rel="noreferrer"
              >
                <Github className="h-4 w-4" /> GitHub
              </a>
              <Link
                className="inline-flex items-center gap-2 hover:text-neutral-950 dark:hover:text-white"
                href={`mailto:${resume.contact.email}`}
              >
                <Mail className="h-4 w-4" /> Email
              </Link>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.35, delay: 0.05 }}
            className="md:col-span-5"
          >
            <div className="rounded-3xl border border-black/10 bg-white/70 p-6 shadow-sm backdrop-blur dark:border-white/10 dark:bg-white/5">
              <div className="font-display text-lg font-semibold text-neutral-950 dark:text-white">Quick facts</div>
              <div className="mt-4 grid gap-3 text-sm text-neutral-700 dark:text-white/70">
                <div className="flex items-center justify-between gap-4">
                  <span className="font-semibold text-neutral-950 dark:text-white">Location</span>
                  <span>{resume.location}</span>
                </div>
                <div className="flex items-center justify-between gap-4">
                  <span className="font-semibold text-neutral-950 dark:text-white">Degree</span>
                  <span>{resume.education[0]?.degree}</span>
                </div>
                <div className="flex items-center justify-between gap-4">
                  <span className="font-semibold text-neutral-950 dark:text-white">CGPA</span>
                  <span>{resume.education[0]?.score}</span>
                </div>
              </div>
              <div className="mt-6 rounded-2xl bg-neutral-950 px-4 py-3 text-sm text-white dark:bg-white dark:text-black">
                Open to research opportunities in ML, CV, and geospatial intelligence.
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

