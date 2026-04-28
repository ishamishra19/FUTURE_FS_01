import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import { SiteShell } from "@/components/site-shell";
import { PROJECTS } from "@/lib/portfolio-data";

export const Route = createFileRoute("/projects")({
  head: () => ({
    meta: [
      { title: "Projects — Isha Mishra" },
      {
        name: "description",
        content:
          "Selected frontend projects by Isha Mishra — hackathon builds, dashboards and chat-first interfaces.",
      },
      { property: "og:title", content: "Projects — Isha Mishra" },
      {
        property: "og:description",
        content:
          "A look at hackathon builds and side projects: chatbot ticketing, inventory dashboards and more.",
      },
    ],
  }),
  component: ProjectsPage,
});

function ProjectsPage() {
  return (
    <SiteShell>
      <section className="mx-auto max-w-6xl px-5 sm:px-8 pt-12 pb-16">
        <p className="font-mono text-xs uppercase tracking-wider text-mint">Projects</p>
        <h1 className="mt-3 font-serif text-5xl sm:text-6xl leading-[1.05]">
          Things I've <em className="text-mint">built</em>.
        </h1>
        <p className="mt-5 max-w-2xl text-foreground/80 leading-relaxed">
          Selected work from hackathons and personal explorations. Each one
          taught me something I now use every day.
        </p>

        <div className="grid-bento mt-10">
          {PROJECTS.map((p, i) => (
            <div
              key={p.slug}
              className="bento-tile p-7 sm:p-8 group fade-up"
              style={{
                gridColumn: "span 4",
                animationDelay: `${i * 100}ms`,
              }}
            >
              <Link to="/projects/$slug" params={{ slug: p.slug }} className="block">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <p className="font-mono text-xs uppercase tracking-wider text-mint">
                      {p.context} · {p.year}
                    </p>
                    <h2 className="font-serif text-3xl sm:text-4xl mt-3 leading-tight">
                      {p.title}
                    </h2>
                    <p className="mt-3 text-foreground/80 max-w-2xl leading-relaxed">
                      {p.tagline}
                    </p>
                  </div>
                  <ArrowUpRight className="size-6 text-mint shrink-0 transition-transform group-hover:-translate-y-1 group-hover:translate-x-1" />
                </div>
              </Link>
              <div className="mt-6 flex flex-wrap items-center gap-2">
                {p.stack.map((s) => (
                  <span
                    key={s}
                    className="rounded-full border border-border bg-background/40 px-3 py-1 text-xs font-mono text-foreground/85"
                  >
                    {s}
                  </span>
                ))}
                {p.liveUrl && (
                  <a
                    href={p.liveUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1 rounded-full border border-mint/40 bg-mint/10 px-3 py-1 text-xs font-mono text-mint transition-colors hover:bg-mint/15"
                  >
                    Live project <ArrowUpRight className="size-3" />
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>
    </SiteShell>
  );
}