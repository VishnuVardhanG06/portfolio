import Link from "next/link";

import { Section } from "@/components/sections/Section";
import { ButtonLink } from "@/components/ui/Button";

export default function NotFound() {
  return (
    <Section eyebrow="404" title="Page not found" subtitle="The page you’re looking for doesn’t exist (or moved).">
      <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
        <ButtonLink href="/">Back home</ButtonLink>
        <Link href="/projects" className="text-sm font-semibold text-white/70 hover:text-white">
          View projects
        </Link>
      </div>
    </Section>
  );
}
