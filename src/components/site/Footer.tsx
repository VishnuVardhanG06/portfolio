import Link from "next/link";

import { resume } from "@/data/resume";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-white/10 py-10">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 px-4 md:flex-row md:items-center md:justify-between">
        <div className="space-y-1">
          <div className="font-display text-base font-semibold text-white">{resume.fullName}</div>
          <div className="text-sm text-white/60">
            {resume.title} · {resume.location}
          </div>
          <div className="text-sm text-white/60">© {year}</div>
        </div>

        <div className="flex flex-wrap gap-x-6 gap-y-2 text-sm">
          <Link href="/projects" className="text-white/70 hover:text-white">
            Projects
          </Link>
          <Link href="/resume" className="text-white/70 hover:text-white">
            Resume
          </Link>
          <a
            href={resume.links.linkedin}
            target="_blank"
            rel="noreferrer"
            className="text-white/70 hover:text-white"
          >
            LinkedIn
          </a>
          <a
            href={resume.links.github}
            target="_blank"
            rel="noreferrer"
            className="text-white/70 hover:text-white"
          >
            GitHub
          </a>
          <a
            href={`mailto:${resume.contact.email}`}
            className="text-white/70 hover:text-white"
          >
            Email
          </a>
        </div>
      </div>
    </footer>
  );
}
