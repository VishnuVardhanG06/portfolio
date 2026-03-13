import { resume } from "@/data/resume";
import { Section } from "@/components/sections/Section";
import { ProjectCard } from "@/components/sections/ProjectCard";

export const metadata = {
  title: "Projects",
  description: "Selected projects across machine learning, computer vision, and geospatial analytics.",
};

export default function ProjectsPage() {
  return (
    <div>
      <Section
        eyebrow="Projects"
        title="Projects with real end-to-end ownership"
        subtitle="From problem framing to implementation and UI. (Links can be added per project when available.)"
      >
        <div className="grid gap-4 md:grid-cols-2">
          {resume.projects.map((p) => (
            <ProjectCard key={p.slug} name={p.name} highlights={p.highlights} technologies={p.technologies} />
          ))}
        </div>
      </Section>
    </div>
  );
}

