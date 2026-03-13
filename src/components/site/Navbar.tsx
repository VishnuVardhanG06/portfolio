import Link from "next/link";
import { Github, Linkedin } from "lucide-react";

import { resume } from "@/data/resume";
import { MobileMenu, type NavItem } from "@/components/site/MobileMenu";
import { cn } from "@/lib/cn";

const navItems: NavItem[] = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/skills", label: "Skills" },
  { href: "/projects", label: "Projects" },
  { href: "/experience", label: "Timeline" },
  { href: "/certifications", label: "Certifications" },
  { href: "/achievements", label: "Achievements" },
  { href: "/resume", label: "Resume" },
  { href: "/contact", label: "Contact" },
];

export function Navbar({ className }: { className?: string }) {
  return (
    <header className={cn("sticky top-0 z-40 border-b border-white/10 bg-black/25 backdrop-blur", className)}>
      <div className="mx-auto flex min-h-16 max-w-6xl items-center justify-between px-4 py-3">
        <div className="flex items-center gap-3">
          <Link href="/" className="group inline-flex items-center gap-3">
            <span className="inline-flex h-9 w-9 items-center justify-center rounded-2xl bg-gradient-to-br from-sky-400 via-blue-500 to-fuchsia-500 text-sm font-extrabold text-white shadow-sm">
              V
            </span>
            <span className="max-w-[52vw] truncate font-display text-base font-semibold tracking-tight text-white group-hover:text-white sm:max-w-[34vw] sm:text-lg">
              {resume.fullName}
            </span>
          </Link>
        </div>

        <nav className="hidden items-center gap-1 sm:flex">
          {navItems.slice(0, 6).map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="rounded-full px-3 py-2 text-sm font-semibold text-white/70 hover:bg-white/10 hover:text-white"
            >
              {item.label}
            </Link>
          ))}
          <Link
            href="/contact"
            className="ml-1 rounded-full bg-gradient-to-r from-sky-400 via-blue-500 to-fuchsia-500 px-4 py-2 text-sm font-extrabold text-white shadow-sm transition hover:brightness-110"
          >
            Let&apos;s talk
          </Link>
        </nav>

        <div className="flex items-center gap-2">
          <a
            href={resume.links.linkedin}
            target="_blank"
            rel="noreferrer"
            className="hidden h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white/80 shadow-sm backdrop-blur transition hover:bg-white/10 hover:text-white sm:inline-flex"
            aria-label="LinkedIn"
          >
            <Linkedin className="h-4 w-4" />
          </a>
          <a
            href={resume.links.github}
            target="_blank"
            rel="noreferrer"
            className="hidden h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white/80 shadow-sm backdrop-blur transition hover:bg-white/10 hover:text-white sm:inline-flex"
            aria-label="GitHub"
          >
            <Github className="h-4 w-4" />
          </a>
          <MobileMenu items={navItems} />
        </div>
      </div>
    </header>
  );
}
