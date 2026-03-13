import { resume } from "@/data/resume";
import { Section } from "@/components/sections/Section";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { ButtonLink } from "@/components/ui/Button";

export const metadata = {
  title: "About",
  description: "Background, research interests, and what I like to build.",
};

export default function AboutPage() {
  return (
    <div>
      <Section
        eyebrow="About"
        title="Curious by default. Practical by choice."
        subtitle="I like problems where the data is messy, the stakes are real, and the solution needs to be explainable."
      >
        <div className="grid gap-4 md:grid-cols-3">
          <Card className="md:col-span-2">
            <div className="font-display text-lg font-semibold text-white">Summary</div>
            <p className="mt-3 text-base leading-7 text-white/70">{resume.summary}</p>

            <div className="mt-6 font-display text-lg font-semibold text-white">Research interests</div>
            <div className="mt-3 flex flex-wrap gap-2">
              {resume.researchInterests.map((item) => (
                <Badge key={item}>{item}</Badge>
              ))}
            </div>
          </Card>

          <Card>
            <div className="font-display text-lg font-semibold text-white">Contact</div>
            <div className="mt-3 space-y-2 text-sm text-white/70">
              <div>
                <span className="font-semibold text-white">Email:</span>{" "}
                <a className="hover:underline" href={`mailto:${resume.contact.email}`}>
                  {resume.contact.email}
                </a>
              </div>
              <div>
                <span className="font-semibold text-white">Phone:</span> {resume.contact.phone}
              </div>
              <div>
                <span className="font-semibold text-white">Location:</span> {resume.location}
              </div>
            </div>

            <div className="mt-6 flex flex-col gap-3">
              <ButtonLink href="/projects">View projects</ButtonLink>
              <ButtonLink href="/contact" variant="secondary">
                Contact
              </ButtonLink>
            </div>
          </Card>
        </div>
      </Section>

      <Section eyebrow="Now" title="What I’m optimizing for" subtitle="The kind of work I enjoy and the environments where I do my best.">
        <div className="grid gap-4 md:grid-cols-2">
          <Card>
            <div className="font-display text-base font-semibold text-white">Research-ready work</div>
            <ul className="mt-3 list-disc space-y-2 pl-5 text-sm text-white/70">
              <li>Clear problem framing and measurable evaluation.</li>
              <li>Reproducible experiments and well-documented pipelines.</li>
              <li>Explainable insights over black-box demos.</li>
            </ul>
          </Card>
          <Card>
            <div className="font-display text-base font-semibold text-white">Applied engineering</div>
            <ul className="mt-3 list-disc space-y-2 pl-5 text-sm text-white/70">
              <li>Interfaces that make data products usable.</li>
              <li>Validation, monitoring, and practical constraints.</li>
              <li>Clean handoffs and maintainable code.</li>
            </ul>
          </Card>
        </div>
      </Section>
    </div>
  );
}
