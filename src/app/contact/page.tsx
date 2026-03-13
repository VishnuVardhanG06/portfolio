import { resume } from "@/data/resume";
import { Section } from "@/components/sections/Section";
import { Card } from "@/components/ui/Card";
import { ContactForm } from "@/components/sections/ContactForm";

export const metadata = {
  title: "Contact",
  description: "Contact form and direct links.",
};

export default function ContactPage() {
  return (
    <div>
      <Section
        eyebrow="Contact"
        title="Let’s build something useful"
        subtitle="Reach out for research collaborations, internships, or project discussions."
      >
        <div className="grid gap-4 md:grid-cols-3">
          <Card className="md:col-span-2">
            <div className="font-display text-lg font-semibold text-white">Message me</div>
            <p className="mt-2 text-sm text-white/70">
              The form can submit to a hosted endpoint if you set `NEXT_PUBLIC_CONTACT_ENDPOINT`. Otherwise it opens your email client.
            </p>
            <div className="mt-5">
              <ContactForm />
            </div>
          </Card>
          <Card>
            <div className="font-display text-lg font-semibold text-white">Direct</div>
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
                <span className="font-semibold text-white">LinkedIn:</span>{" "}
                <a className="hover:underline" href={resume.links.linkedin} target="_blank" rel="noreferrer">
                  {resume.links.linkedin.replace("https://", "")}
                </a>
              </div>
              <div>
                <span className="font-semibold text-white">GitHub:</span>{" "}
                <a className="hover:underline" href={resume.links.github} target="_blank" rel="noreferrer">
                  {resume.links.github.replace("https://", "")}
                </a>
              </div>
            </div>
          </Card>
        </div>
      </Section>
    </div>
  );
}
