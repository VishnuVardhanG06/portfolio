import { resume } from "@/data/resume";
import { Hero } from "@/components/sections/Hero";
import { Section } from "@/components/sections/Section";
import { ProjectCard } from "@/components/sections/ProjectCard";
import { SkillBadge } from "@/components/sections/SkillBadge";
import { ButtonLink } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";

export default function Home() {
  return (
    <div>
      <Hero />

      <Section
        eyebrow="Core strengths"
        title="Strong fundamentals. Practical builds."
        subtitle="A project-first portfolio focused on ML systems, computer vision, and geospatial analysis."
      >
        <div className="grid gap-3 md:grid-cols-3">
          <Card>
            <div className="font-display text-lg font-semibold text-white">ML + CV</div>
            <p className="mt-2 text-sm leading-6 text-white/70">
              From feature extraction to model selection and evaluation, with a bias for clarity and reproducibility.
            </p>
          </Card>
          <Card>
            <div className="font-display text-lg font-semibold text-white">Geospatial</div>
            <p className="mt-2 text-sm leading-6 text-white/70">
              Remote sensing indices and satellite data workflows for land-use insights and urban change detection.
            </p>
          </Card>
          <Card>
            <div className="font-display text-lg font-semibold text-white">Data systems</div>
            <p className="mt-2 text-sm leading-6 text-white/70">
              Clean pipelines, validation, dashboards, and interfaces that make analysis usable by real people.
            </p>
          </Card>
        </div>
      </Section>

      <Section eyebrow="Featured" title="Projects that show end-to-end ownership" subtitle="Clear problem, clear approach, real tooling.">
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

      <Section eyebrow="Skills" title="Tooling I use" subtitle="Grouped for fast recruiter scanning.">
        <div className="grid gap-4 md:grid-cols-3">
          <Card>
            <div className="font-display text-base font-semibold text-white">Programming</div>
            <div className="mt-3 flex flex-wrap gap-2">
              {resume.skills.programming.map((s) => (
                <SkillBadge key={s} label={s} />
              ))}
            </div>
          </Card>
          <Card>
            <div className="font-display text-base font-semibold text-white">ML + Data</div>
            <div className="mt-3 flex flex-wrap gap-2">
              {[...resume.skills.machineLearning, ...resume.skills.dataAnalysis].map((s) => (
                <SkillBadge key={s} label={s} />
              ))}
            </div>
          </Card>
          <Card>
            <div className="font-display text-base font-semibold text-white">Platforms</div>
            <div className="mt-3 flex flex-wrap gap-2">
              {resume.skills.webAndPlatforms.slice(0, 10).map((s) => (
                <SkillBadge key={s} label={s} />
              ))}
            </div>
          </Card>
        </div>
      </Section>

      <Section eyebrow="References" title="References available on request" subtitle="Happy to share contacts or recommendations if needed.">
        <div className="grid gap-4 md:grid-cols-3">
          <Card className="md:col-span-2">
            <div className="font-display text-base font-semibold text-white">What you can expect</div>
            <ul className="mt-3 list-disc space-y-2 pl-5 text-sm text-white/70">
              <li>Clear communication and structured experimentation.</li>
              <li>Clean handoffs with reproducible code and results.</li>
              <li>A bias for practical evaluation and honest metrics.</li>
            </ul>
          </Card>
          <Card>
            <div className="font-display text-base font-semibold text-white">Links</div>
            <div className="mt-3 space-y-2 text-sm font-semibold text-white/70">
              <a className="block hover:text-white" href={resume.links.linkedin} target="_blank" rel="noreferrer">
                LinkedIn
              </a>
              <a className="block hover:text-white" href={resume.links.github} target="_blank" rel="noreferrer">
                GitHub
              </a>
              <a className="block hover:text-white" href={`mailto:${resume.contact.email}`}>
                Email
              </a>
            </div>
          </Card>
        </div>
      </Section>

      <Section eyebrow="Next" title="Want to collaborate?" subtitle="Open to research opportunities and internships.">
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
