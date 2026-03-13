import { resume } from "@/data/resume";
import { Hero } from "@/components/sections/Hero";
import { Section } from "@/components/sections/Section";
import { ProjectCard } from "@/components/sections/ProjectCard";
import { SkillBadge } from "@/components/sections/SkillBadge";
import { TestimonialCarousel } from "@/components/sections/TestimonialCarousel";
import { ButtonLink } from "@/components/ui/Button";

export default function Home() {
  return (
    <div>
      <Hero />

      <Section
        eyebrow="Core strengths"
        title="Strong fundamentals, practical builds"
        subtitle="A project-first portfolio focused on ML systems, computer vision, and geospatial analysis."
      >
        <div className="grid gap-3 md:grid-cols-3">
          <div className="rounded-2xl border border-black/10 bg-white/70 p-6 shadow-sm backdrop-blur dark:border-white/10 dark:bg-white/5">
            <div className="font-display text-lg font-semibold text-neutral-950 dark:text-white">ML + CV</div>
            <p className="mt-2 text-sm leading-6 text-neutral-700 dark:text-white/70">
              From feature extraction to model selection and evaluation, with a bias for clarity and reproducibility.
            </p>
          </div>
          <div className="rounded-2xl border border-black/10 bg-white/70 p-6 shadow-sm backdrop-blur dark:border-white/10 dark:bg-white/5">
            <div className="font-display text-lg font-semibold text-neutral-950 dark:text-white">Geospatial</div>
            <p className="mt-2 text-sm leading-6 text-neutral-700 dark:text-white/70">
              Remote sensing indices and satellite data workflows for land-use insights and urban change detection.
            </p>
          </div>
          <div className="rounded-2xl border border-black/10 bg-white/70 p-6 shadow-sm backdrop-blur dark:border-white/10 dark:bg-white/5">
            <div className="font-display text-lg font-semibold text-neutral-950 dark:text-white">Data systems</div>
            <p className="mt-2 text-sm leading-6 text-neutral-700 dark:text-white/70">
              Clean pipelines, validation, dashboards, and interfaces that make analysis usable by real people.
            </p>
          </div>
        </div>
      </Section>

      <Section eyebrow="Featured" title="Projects recruiters can scan fast" subtitle="Clear problem, clear approach, real tooling.">
        <div className="grid gap-4 md:grid-cols-2">
          {resume.projects.slice(0, 4).map((p) => (
            <ProjectCard key={p.slug} name={p.name} highlights={p.highlights} technologies={p.technologies} />
          ))}
        </div>
        <div className="mt-8">
          <ButtonLink href="/projects" variant="secondary">
            See all projects
          </ButtonLink>
        </div>
      </Section>

      <Section eyebrow="Skills" title="Tooling I actually use" subtitle="Grouped for ATS and easy scanning.">
        <div className="grid gap-4 md:grid-cols-3">
          <div className="rounded-2xl border border-black/10 bg-white/70 p-6 shadow-sm backdrop-blur dark:border-white/10 dark:bg-white/5">
            <div className="font-display text-base font-semibold text-neutral-950 dark:text-white">Programming</div>
            <div className="mt-3 flex flex-wrap gap-2">
              {resume.skills.programming.map((s) => (
                <SkillBadge key={s} label={s} />
              ))}
            </div>
          </div>
          <div className="rounded-2xl border border-black/10 bg-white/70 p-6 shadow-sm backdrop-blur dark:border-white/10 dark:bg-white/5">
            <div className="font-display text-base font-semibold text-neutral-950 dark:text-white">ML + Data</div>
            <div className="mt-3 flex flex-wrap gap-2">
              {[...resume.skills.machineLearning, ...resume.skills.dataAnalysis].map((s) => (
                <SkillBadge key={s} label={s} />
              ))}
            </div>
          </div>
          <div className="rounded-2xl border border-black/10 bg-white/70 p-6 shadow-sm backdrop-blur dark:border-white/10 dark:bg-white/5">
            <div className="font-display text-base font-semibold text-neutral-950 dark:text-white">Platforms</div>
            <div className="mt-3 flex flex-wrap gap-2">
              {resume.skills.webAndPlatforms.slice(0, 10).map((s) => (
                <SkillBadge key={s} label={s} />
              ))}
            </div>
          </div>
        </div>
      </Section>

      <Section eyebrow="Signal" title="Testimonials (placeholders)" subtitle="Add real quotes as you get them.">
        <TestimonialCarousel />
      </Section>

      <Section eyebrow="Next" title="Want to collaborate?" subtitle="I’m actively looking for research opportunities and internships.">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
          <ButtonLink href="/contact" size="lg">
            Contact me
          </ButtonLink>
          <ButtonLink href="/resume" variant="secondary" size="lg">
            View resume
          </ButtonLink>
        </div>
      </Section>
    </div>
  );
}
