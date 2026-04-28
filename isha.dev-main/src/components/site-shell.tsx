import { Link } from "@tanstack/react-router";
import { Github, Linkedin } from "lucide-react";

const NAV = [
  { to: "/" as const, label: "Home" },
  { to: "/about" as const, label: "About" },
  { to: "/projects" as const, label: "Projects" },
  { to: "/skills" as const, label: "Skills" },
  { to: "/contact" as const, label: "Contact" },
];

export function SiteShell({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen flex flex-col">
      <header className="sticky top-0 z-40 backdrop-blur-md bg-background/70 border-b border-border/50">
        <div className="mx-auto max-w-6xl px-5 sm:px-8 h-16 flex items-center justify-between">
          <Link
            to="/"
            className="font-serif text-2xl italic tracking-tight"
            activeOptions={{ exact: true }}
          >
            isha<span className="text-mint">.</span>
          </Link>
          <nav className="flex items-center gap-5 sm:gap-7 text-sm">
            {NAV.slice(1).map((item) => (
              <Link
                key={item.to}
                to={item.to}
                className="link-sweep text-foreground/80 hover:text-foreground transition-colors"
                activeProps={{ className: "link-sweep text-foreground" }}
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
      </header>

      <main className="flex-1">{children}</main>

      <footer className="border-t border-border/40 mt-20">
        <div className="mx-auto max-w-6xl px-5 sm:px-8 py-10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
          <div>
            <p className="font-serif text-xl italic">Isha Mishra</p>
            <p className="text-sm text-muted-foreground mt-1">
              Full Stack developer · Bhubaneswar, India
            </p>
          </div>
          <div className="flex items-center gap-5">
            <a
              href="https://www.linkedin.com/in/isha-mishra-906939315/"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
              className="text-foreground/70 hover:text-mint transition-colors"
            >
              <Linkedin className="size-5" />
            </a>
            <a
              href="https://github.com/ishamishra19"
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
              className="text-foreground/70 hover:text-mint transition-colors"
            >
              <Github className="size-5" />
            </a>
          </div>
        </div>
        <div className="mx-auto max-w-6xl px-5 sm:px-8 pb-6 text-xs text-muted-foreground">
          © {new Date().getFullYear()} Isha Mishra. Built with care.
        </div>
      </footer>
    </div>
  );
}