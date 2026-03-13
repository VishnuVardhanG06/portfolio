import { resume } from "@/data/resume";
import { Section } from "@/components/sections/Section";
import { Timeline, type TimelineItem } from "@/components/sections/Timeline";
import { Card } from "@/components/ui/Card";

export const metadata = {
  title: "Timeline",
  description: "A timeline view of education, projects, and community involvement.",
};

export default function ExperiencePage() {
  const items: TimelineItem[] = [
    {
      title: resume.education[0]?.institution || "Education",
      subtitle: resume.education[0]?.degree,
      dates: resume.education[0]?.dates || "",
      bullets: [
        resume.education[0]?.score ? `Academic performance: ${resume.education[0]?.score}` : "Academic track in progress.",
        "Focus areas: machine learning, computer vision, data analytics, and applied data systems.",
      ],
      tags: ["B.Tech", "Data Science"],
    },
    ...resume.projects.map((p) => ({
      title: p.name,
      subtitle: "Project work",
      dates: "—",
      bullets: p.highlights,
      tags: p.technologies.slice(0, 6),
    })),
  ];

  return (
    <div>
      <Section
        eyebrow="Timeline"
        title="Education, projects, and community"
        subtitle="A single scroll that keeps the signal high."
      >
        <Timeline items={items} />
      </Section>

      <Section eyebrow="Activities" title="Community & clubs" subtitle="Groups and events from the resume.">
        <div className="grid gap-4 md:grid-cols-2">
          {resume.activities.map((a) => (
            <Card key={a}>
              <div className="text-sm font-semibold text-white">{a}</div>
            </Card>
          ))}
        </div>
      </Section>
    </div>
  );
}
