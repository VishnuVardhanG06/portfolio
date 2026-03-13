import Link from "next/link";
import { Github, Linkedin } from "lucide-react";

import { resume } from "@/data/resume";
import { ThemeToggle } from "@/components/site/ThemeToggle";
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
    <header
      className={cn(
        "sticky top-0 z-40 border-b border-black/5 bg-white/70 backdrop-blur dark:border-white/10 dark:bg-black/40",
        className,
      )}
    >
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4">
        <div className="flex items-center gap-3">
          <Link href="/" className="group inline-flex items-baseline gap-2">
            <span className="font-display text-lg font-semibold tracking-tight text-neutral-950 dark:text-white">
              {resume.fullName}
            </span>
            <span className="hidden text-sm text-neutral-600 group-hover:text-neutral-800 dark:text-white/60 dark:group-hover:text-white/80 md:inline">
              {resume.title}
            </span>
          </Link>
        </div>

        <nav className="hidden items-center gap-1 sm:flex">
          {navItems.slice(0, 6).map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="rounded-full px-3 py-2 text-sm font-medium text-neutral-700 hover:bg-black/5 hover:text-neutral-950 dark:text-white/70 dark:hover:bg-white/10 dark:hover:text-white"
            >
              {item.label}
            </Link>
          ))}
          <Link
            href="/contact"
            className="ml-1 rounded-full bg-neutral-950 px-4 py-2 text-sm font-semibold text-white shadow-sm transition hover:bg-neutral-800 dark:bg-white dark:text-black dark:hover:bg-white/90"
          >
            Let’s talk
          </Link>
        </nav>

        <div className="flex items-center gap-2">
          <a
            href={resume.links.linkedin}
            target="_blank"
            rel="noreferrer"
            className="hidden h-10 w-10 items-center justify-center rounded-full border border-black/10 bg-white/70 text-neutral-800 shadow-sm backdrop-blur transition hover:bg-white dark:border-white/10 dark:bg-white/5 dark:text-white dark:hover:bg-white/10 sm:inline-flex"
            aria-label="LinkedIn"
          >
            <Linkedin className="h-4 w-4" />
          </a>
          <a
            href={resume.links.github}
            target="_blank"
            rel="noreferrer"
            className="hidden h-10 w-10 items-center justify-center rounded-full border border-black/10 bg-white/70 text-neutral-800 shadow-sm backdrop-blur transition hover:bg-white dark:border-white/10 dark:bg-white/5 dark:text-white dark:hover:bg-white/10 sm:inline-flex"
            aria-label="GitHub"
          >
            <Github className="h-4 w-4" />
          </a>
          <ThemeToggle />
          <MobileMenu items={navItems} />
        </div>
      </div>
    </header>
  );
}

