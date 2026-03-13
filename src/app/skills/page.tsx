import { resume } from "@/data/resume";
import { Section } from "@/components/sections/Section";
import { Card } from "@/components/ui/Card";
import { SkillBadge } from "@/components/sections/SkillBadge";

export const metadata = {
  title: "Skills",
  description: "Technical skills grouped for recruiter-friendly scanning.",
};

function SkillGroup({ title, items }: { title: string; items: string[] }) {
  return (
    <Card>
      <div className="font-display text-base font-semibold text-neutral-950 dark:text-white">{title}</div>
      <div className="mt-3 flex flex-wrap gap-2">
        {items.map((item) => (
          <SkillBadge key={item} label={item} />
        ))}
      </div>
    </Card>
  );
}

export default function SkillsPage() {
  return (
    <div>
      <Section
        eyebrow="Skills"
        title="A stack built around data work"
        subtitle="This is the tooling I use across machine learning, computer vision, geospatial analysis, and data apps."
      >
        <div className="grid gap-4 md:grid-cols-2">
          <SkillGroup title="Programming" items={resume.skills.programming} />
          <SkillGroup title="Machine learning" items={resume.skills.machineLearning} />
          <SkillGroup title="Data analysis" items={resume.skills.dataAnalysis} />
          <SkillGroup title="Computer vision" items={resume.skills.computerVision} />
          <SkillGroup title="Data visualization" items={resume.skills.dataVisualization} />
          <SkillGroup title="Tools" items={resume.skills.tools} />
        </div>
      </Section>

      <Section eyebrow="Platforms" title="Frameworks and platforms" subtitle="How I ship prototypes and lightweight products.">
        <div className="grid gap-4 md:grid-cols-2">
          <SkillGroup title="Web & platforms" items={resume.skills.webAndPlatforms} />
          <Card>
            <div className="font-display text-base font-semibold text-neutral-950 dark:text-white">Languages</div>
            <div className="mt-3 grid gap-2 text-sm text-neutral-700 dark:text-white/70">
              {resume.languages.map((lang) => (
                <div key={lang.name} className="flex items-center justify-between gap-4">
                  <span className="font-semibold text-neutral-950 dark:text-white">{lang.name}</span>
                  <span>{lang.level}</span>
                </div>
              ))}
            </div>
          </Card>
        </div>
      </Section>
    </div>
  );
}
