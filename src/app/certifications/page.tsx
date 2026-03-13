import { resume } from "@/data/resume";
import { Section } from "@/components/sections/Section";
import { Card } from "@/components/ui/Card";

export const metadata = {
  title: "Certifications",
  description: "Certifications and job simulations from the resume.",
};

export default function CertificationsPage() {
  return (
    <div>
      <Section eyebrow="Certifications" title="Credentials and simulations" subtitle="Focused on cloud and programming fundamentals, plus industry job simulations.">
        <div className="grid gap-4 md:grid-cols-2">
          {resume.certifications.map((c) => (
            <Card key={c}>
              <div className="font-display text-base font-semibold text-white">{c}</div>
            </Card>
          ))}
        </div>
      </Section>
    </div>
  );
}
