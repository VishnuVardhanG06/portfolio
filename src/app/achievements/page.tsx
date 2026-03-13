import { resume } from "@/data/resume";
import { Section } from "@/components/sections/Section";
import { Card } from "@/components/ui/Card";

export const metadata = {
  title: "Achievements",
  description: "Academic achievements and highlights from the resume.",
};

export default function AchievementsPage() {
  return (
    <div>
      <Section
        eyebrow="Achievements"
        title="Academic highlights"
        subtitle="This section only includes achievements explicitly present in the resume."
      >
        <div className="grid gap-4 md:grid-cols-2">
          {resume.achievements.map((a) => (
            <Card key={a}>
              <div className="font-display text-base font-semibold text-white">{a}</div>
            </Card>
          ))}
          <Card>
            <div className="font-display text-base font-semibold text-white">Additional signals</div>
            <ul className="mt-3 list-disc space-y-2 pl-5 text-sm text-white/70">
              <li>Active participation in clubs and hackathons (see Timeline).</li>
              <li>Strong project portfolio with end-to-end builds.</li>
            </ul>
          </Card>
        </div>
      </Section>
    </div>
  );
}
