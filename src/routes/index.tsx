import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import {
  ArrowUpRight,
  Check,
  Copy,
  Github,
  GraduationCap,
  Linkedin,
  MapPin,
  Sparkles,
} from "lucide-react";
import { SiteShell } from "@/components/site-shell";
import { PROFILE, SKILLS } from "@/lib/portfolio-data";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Isha Mishra — Frontend Developer" },
      {
        name: "description",
        content:
          "Portfolio of Isha Mishra, a frontend developer from Bhubaneswar building interactive web experiences with React, Next.js and TypeScript.",
      },
      { property: "og:title", content: "Isha Mishra — Frontend Developer" },
      {
        property: "og:description",
        content:
          "Frontend developer crafting interactive web experiences. Hackathons, side projects and a love for clean UI.",
      },
    ],
  }),
  component: HomePage,
});

const MARQUEE = [
  "React",
  "Next.js",
  "TypeScript",
  "Tailwind",
  "Node.js",
  "MongoDB",
  "Figma",
  "Git",
  "Postman",
  "Vercel",
];

function HomePage() {
  const [copied, setCopied] = useState(false);

  const copyEmail = async () => {
    await navigator.clipboard.writeText(PROFILE.email);
    setCopied(true);
    window.setTimeout(() => setCopied(false), 1800);
  };

  return (
    <SiteShell>
      <section className="mx-auto max-w-6xl px-5 sm:px-8 pt-10 sm:pt-16 pb-10">
        {/* Status pill */}
        <div className="fade-up flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-mint">
          <span className="relative flex size-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-mint opacity-70" />
            <span className="relative inline-flex rounded-full size-2 bg-mint" />
          </span>
          Available for opportunities
        </div>

        {/* Bento grid */}
        <div className="grid-bento mt-8">
          {/* Hero tile */}
          <div
            className="bento-tile fade-up p-7 sm:p-10"
            style={{ gridColumn: "span 3", gridRow: "span 2", animationDelay: "60ms" }}
          >
            <p className="font-mono text-xs uppercase tracking-wider text-mint/80">
              {PROFILE.role}
            </p>
            <h1 className="mt-4 font-serif text-5xl sm:text-7xl leading-[1.02] tracking-tight">
              Hi, I'm <em className="text-mint not-italic font-serif italic">Isha</em>.
            </h1>
            <p className="mt-5 max-w-xl text-base sm:text-lg text-foreground/80 leading-relaxed">
              {PROFILE.tagline} I’m a final-year Computer Science student at C.V. Raman Global
              University, passionate about transforming ideas into intuitive, user-friendly
              interfaces.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <Link
                to="/projects"
                className="group inline-flex items-center gap-2 rounded-full bg-mint px-5 py-2.5 text-sm font-medium text-primary-foreground transition-all hover:shadow-[0_8px_28px_-8px_var(--mint)]"
              >
                View projects
                <ArrowUpRight className="size-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 rounded-full border border-border px-5 py-2.5 text-sm text-foreground/90 hover:border-mint/60 hover:text-mint transition-colors"
              >
                Get in touch
              </Link>
            </div>
          </div>

          {/* Location */}
          <div
            className="bento-tile fade-up p-6 flex flex-col justify-between"
            style={{ animationDelay: "120ms" }}
          >
            <MapPin className="size-5 text-mint" />
            <div>
              <p className="text-xs font-mono uppercase tracking-wider text-muted-foreground">
                Based in
              </p>
              <p className="font-serif text-2xl mt-1">Bhubaneswar</p>
              <p className="text-sm text-muted-foreground">India · IST</p>
            </div>
          </div>

          {/* Stats */}
          <div
            className="bento-tile fade-up p-6 flex flex-col justify-between"
            style={{ animationDelay: "180ms" }}
          >
            <GraduationCap className="size-5 text-mint" />
            <div>
              <p className="text-xs font-mono uppercase tracking-wider text-muted-foreground">
                CGPA
              </p>
              <p className="font-serif text-4xl mt-1">8.03</p>
              <p className="text-sm text-muted-foreground">B.Tech CSE · CGU</p>
            </div>
          </div>

          {/* Focus */}
          <div
            className="bento-tile fade-up p-6 col-span-2"
            style={{ gridColumn: "span 2", animationDelay: "240ms" }}
          >
            <Sparkles className="size-5 text-mint" />
            <p className="text-xs font-mono uppercase tracking-wider text-muted-foreground mt-3">
              Currently
            </p>
            <p className="font-serif text-xl mt-1 leading-snug">
              Polishing an
              <em className="text-mint"> AI-based Trip Planner</em> Web Application.
            </p>
          </div>

          {/* Tech marquee */}
          <div
            className="bento-tile fade-up p-6 col-span-2 overflow-hidden relative"
            style={{ gridColumn: "span 2", animationDelay: "300ms" }}
          >
            <p className="text-xs font-mono uppercase tracking-wider text-muted-foreground">
              Stack
            </p>
            <div className="mt-4 overflow-hidden">
              <div className="marquee">
                {[...MARQUEE, ...MARQUEE].map((tech, i) => (
                  <span key={i} className="font-mono text-sm text-foreground/80 whitespace-nowrap">
                    <span className="text-mint">·</span> {tech}
                  </span>
                ))}
              </div>
            </div>
            <div className="absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-[var(--surface)] to-transparent pointer-events-none" />
          </div>

          {/* Skills snapshot */}
          <div
            className="bento-tile fade-up p-6"
            style={{ gridColumn: "span 4", animationDelay: "360ms" }}
          >
            <div className="flex items-baseline justify-between">
              <p className="font-serif text-2xl italic">A quick snapshot.</p>
              <Link to="/skills" className="link-sweep text-sm text-mint">
                See all skills →
              </Link>
            </div>
            <div className="mt-5 grid sm:grid-cols-4 gap-5">
              {SKILLS.map((g) => (
                <div key={g.group}>
                  <p className="text-xs font-mono uppercase tracking-wider text-muted-foreground">
                    {g.group}
                  </p>
                  <p className="text-sm mt-2 leading-relaxed text-foreground/85">
                    {g.items.slice(0, 4).join(" · ")}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 sm:px-8 pb-14 sm:pb-20">
        <div className="fade-up bento-tile px-6 py-7 sm:px-8 sm:py-9 md:flex md:items-center md:justify-between md:gap-8">
          <div className="max-w-2xl">
            <p className="font-mono text-xs uppercase tracking-wider text-mint/80">Let’s connect</p>
            <h2 className="mt-3 font-serif text-3xl sm:text-4xl leading-tight">
              Have an idea, role, or project in mind?
            </h2>
            <p className="mt-3 text-sm sm:text-base leading-relaxed text-foreground/75">
              I’m open to frontend opportunities, collaborations, and thoughtful product ideas.
            </p>
          </div>

          <div className="mt-6 flex flex-wrap items-center gap-3 md:mt-0 md:justify-end">
            <a
              href={PROFILE.linkedin}
              target="_blank"
              rel="noreferrer"
              aria-label="Open LinkedIn profile"
              className="inline-flex size-11 items-center justify-center rounded-full border border-border text-foreground/80 transition-colors hover:border-mint/60 hover:text-mint"
            >
              <Linkedin className="size-5" />
            </a>
            <a
              href={PROFILE.github}
              target="_blank"
              rel="noreferrer"
              aria-label="Open GitHub profile"
              className="inline-flex size-11 items-center justify-center rounded-full border border-border text-foreground/80 transition-colors hover:border-mint/60 hover:text-mint"
            >
              <Github className="size-5" />
            </a>
            <button
              type="button"
              onClick={copyEmail}
              className="inline-flex min-h-11 items-center gap-2 rounded-full bg-mint px-5 text-sm font-medium text-primary-foreground transition-all hover:shadow-[0_8px_28px_-8px_var(--mint)]"
            >
              {copied ? <Check className="size-4" /> : <Copy className="size-4" />}
              {copied ? "Email copied" : "Copy email"}
            </button>
          </div>
        </div>
      </section>
    </SiteShell>
  );
}
