import { resume } from "@/data/resume";
import { Section } from "@/components/sections/Section";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { ButtonLink } from "@/components/ui/Button";

export const metadata = {
  title: "Resume",
  description: "Resume view and download.",
};

export default function ResumePage() {
  return (
    <div>
      <Section eyebrow="Resume" title="Resume" subtitle="HTML version for ATS, plus a downloadable PDF.">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
          <ButtonLink href="/resume.pdf" target="_blank" rel="noreferrer">
            Download PDF
          </ButtonLink>
          <ButtonLink href="/resume.html" target="_blank" rel="noreferrer" variant="secondary">
            Open HTML
          </ButtonLink>
        </div>

        <div className="mt-8 grid gap-4 md:grid-cols-3">
          <Card className="md:col-span-2">
            <div className="font-display text-2xl font-semibold text-neutral-950 dark:text-white">{resume.fullName}</div>
            <div className="mt-1 text-sm text-neutral-700 dark:text-white/70">{resume.title}</div>
            <div className="mt-4 text-sm text-neutral-700 dark:text-white/70">{resume.summary}</div>

            <div className="mt-6 grid gap-4 md:grid-cols-2">
              <div>
                <div className="font-display text-base font-semibold text-neutral-950 dark:text-white">Projects</div>
                <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-neutral-700 dark:text-white/70">
                  {resume.projects.map((p) => (
                    <li key={p.slug}>
                      <span className="font-semibold text-neutral-950 dark:text-white">{p.name}:</span> {p.highlights[0]}
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <div className="font-display text-base font-semibold text-neutral-950 dark:text-white">Education</div>
                <ul className="mt-2 space-y-2 text-sm text-neutral-700 dark:text-white/70">
                  {resume.education.map((e) => (
                    <li key={`${e.institution}-${e.degree}`}>
                      <div className="font-semibold text-neutral-950 dark:text-white">{e.degree}</div>
                      <div>
                        {e.institution}
                        {e.dates ? ` · ${e.dates}` : ""}
                      </div>
                      {e.score ? <div>{e.score}</div> : null}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </Card>

          <div className="grid gap-4">
            <Card>
              <div className="font-display text-base font-semibold text-neutral-950 dark:text-white">Contact</div>
              <div className="mt-2 text-sm text-neutral-700 dark:text-white/70">
                <div>
                  <span className="font-semibold text-neutral-950 dark:text-white">Email:</span>{" "}
                  <a className="hover:underline" href={`mailto:${resume.contact.email}`}>
                    {resume.contact.email}
                  </a>
                </div>
                <div>
                  <span className="font-semibold text-neutral-950 dark:text-white">Phone:</span> {resume.contact.phone}
                </div>
                <div>
                  <span className="font-semibold text-neutral-950 dark:text-white">Location:</span> {resume.location}
                </div>
              </div>
            </Card>
            <Card>
              <div className="font-display text-base font-semibold text-neutral-950 dark:text-white">Core skills</div>
              <div className="mt-3 flex flex-wrap gap-2">
                {[...resume.skills.programming, ...resume.skills.machineLearning, ...resume.skills.computerVision]
                  .slice(0, 12)
                  .map((s) => (
                    <Badge key={s}>{s}</Badge>
                  ))}
              </div>
            </Card>
            <Card>
              <div className="font-display text-base font-semibold text-neutral-950 dark:text-white">Certifications</div>
              <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-neutral-700 dark:text-white/70">
                {resume.certifications.map((c) => (
                  <li key={c}>{c}</li>
                ))}
              </ul>
            </Card>
          </div>
        </div>
      </Section>
    </div>
  );
}

