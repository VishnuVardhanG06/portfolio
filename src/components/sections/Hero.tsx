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
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -left-24 -top-24 h-72 w-72 rounded-full bg-sky-400/20 blur-3xl" />
        <div className="absolute -right-24 top-10 h-72 w-72 rounded-full bg-fuchsia-500/15 blur-3xl" />
        <div className="absolute left-1/2 top-1/2 h-96 w-96 -translate-x-1/2 -translate-y-1/2 rounded-full bg-amber-300/10 blur-3xl" />
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

            <h1 className="mt-5 font-display text-4xl font-semibold tracking-tight text-white md:text-5xl">
              <span className="bg-gradient-to-r from-sky-300 via-blue-400 to-fuchsia-400 bg-clip-text text-transparent">
                Bright, research-ready ML
              </span>{" "}
              for vision and satellite data.
            </h1>

            <p className="mt-4 max-w-2xl text-base leading-7 text-white/75">{resume.summary}</p>

            <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:items-center">
              <ButtonLink href="/projects" size="lg">
                View projects <ArrowRight className="h-4 w-4" />
              </ButtonLink>
              <ButtonLink href="/contact" variant="secondary" size="lg">
                Contact <ArrowRight className="h-4 w-4" />
              </ButtonLink>
            </div>

            <div className="mt-6 flex flex-wrap gap-3 text-sm font-semibold text-white/70">
              <a
                className="inline-flex items-center gap-2 hover:text-white"
                href={resume.links.linkedin}
                target="_blank"
                rel="noreferrer"
              >
                <Linkedin className="h-4 w-4" /> LinkedIn
              </a>
              <a
                className="inline-flex items-center gap-2 hover:text-white"
                href={resume.links.github}
                target="_blank"
                rel="noreferrer"
              >
                <Github className="h-4 w-4" /> GitHub
              </a>
              <Link
                className="inline-flex items-center gap-2 hover:text-white"
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
            <div className="rounded-3xl border border-white/10 bg-white/5 p-6 shadow-[0_1px_0_rgba(255,255,255,0.06)_inset] backdrop-blur">
              <div className="font-display text-lg font-semibold text-white">Quick facts</div>
              <div className="mt-4 grid gap-3 text-sm text-white/70">
                <div className="flex items-center justify-between gap-4">
                  <span className="font-semibold text-white">Location</span>
                  <span>{resume.location}</span>
                </div>
                <div className="flex items-center justify-between gap-4">
                  <span className="font-semibold text-white">Degree</span>
                  <span>{resume.education[0]?.degree}</span>
                </div>
                <div className="flex items-center justify-between gap-4">
                  <span className="font-semibold text-white">CGPA</span>
                  <span>{resume.education[0]?.score}</span>
                </div>
              </div>
              <div className="mt-6 rounded-2xl bg-gradient-to-r from-sky-400/20 via-blue-500/20 to-fuchsia-500/20 px-4 py-3 text-sm text-white/85">
                Open to research opportunities in ML, CV, and geospatial intelligence.
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
