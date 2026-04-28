import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowLeft, ArrowUpRight, Check } from "lucide-react";
import { SiteShell } from "@/components/site-shell";
import { PROJECTS, type Project } from "@/lib/portfolio-data";

export const Route = createFileRoute("/projects/$slug")({
  loader: ({ params }): { project: Project } => {
    const project = PROJECTS.find((p) => p.slug === params.slug);
    if (!project) throw notFound();
    return { project };
  },
  head: ({ loaderData }) => {
    const p = loaderData?.project;
    if (!p) return { meta: [{ title: "Project not found" }] };
    return {
      meta: [
        { title: `${p.title} — Isha Mishra` },
        { name: "description", content: p.tagline },
        { property: "og:title", content: `${p.title} — Isha Mishra` },
        { property: "og:description", content: p.tagline },
      ],
    };
  },
  notFoundComponent: () => (
    <SiteShell>
      <div className="mx-auto max-w-2xl px-5 sm:px-8 py-24 text-center">
        <p className="font-mono text-xs uppercase tracking-wider text-mint">404</p>
        <h1 className="font-serif text-5xl mt-3">Project not found.</h1>
        <Link
          to="/projects"
          className="mt-6 inline-flex items-center gap-2 text-mint link-sweep"
        >
          <ArrowLeft className="size-4" /> Back to projects
        </Link>
      </div>
    </SiteShell>
  ),
  errorComponent: ({ error }) => (
    <SiteShell>
      <div className="mx-auto max-w-2xl px-5 sm:px-8 py-24 text-center">
        <h1 className="font-serif text-3xl">Something went wrong.</h1>
        <p className="text-muted-foreground mt-3">{error.message}</p>
      </div>
    </SiteShell>
  ),
  component: ProjectDetail,
});

function ProjectDetail() {
  const { project } = Route.useLoaderData() as { project: Project };
  return (
    <SiteShell>
      <article className="mx-auto max-w-4xl px-5 sm:px-8 pt-12 pb-16">
        <Link
          to="/projects"
          className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-mint transition-colors"
        >
          <ArrowLeft className="size-4" /> All projects
        </Link>

        <p className="mt-8 font-mono text-xs uppercase tracking-wider text-mint">
          {project.context} · {project.year}
        </p>
        <h1 className="mt-3 font-serif text-5xl sm:text-6xl leading-[1.05]">
          {project.title}
        </h1>
        <p className="mt-5 text-xl text-foreground/85 leading-relaxed font-serif italic">
          {project.tagline}
        </p>
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noreferrer"
              className="mt-6 inline-flex items-center gap-2 rounded-full border border-mint/40 bg-mint/10 px-4 py-2 text-sm font-mono text-mint transition-colors hover:bg-mint/15"
            >
              View live project <ArrowUpRight className="size-4" />
            </a>
          )}

        <div className="grid-bento mt-10">
          <div className="bento-tile p-6" style={{ gridColumn: "span 2" }}>
            <p className="font-mono text-xs uppercase tracking-wider text-muted-foreground">
              Role
            </p>
            <p className="font-serif text-2xl mt-2">{project.role}</p>
          </div>
          <div className="bento-tile p-6" style={{ gridColumn: "span 2" }}>
            <p className="font-mono text-xs uppercase tracking-wider text-muted-foreground">
              Stack
            </p>
            <div className="mt-3 flex flex-wrap gap-2">
              {project.stack.map((s) => (
                <span
                  key={s}
                  className="rounded-full border border-border px-3 py-1 text-xs font-mono text-foreground/85"
                >
                  {s}
                </span>
              ))}
            </div>
          </div>

          <div className="bento-tile p-7" style={{ gridColumn: "span 4" }}>
            <p className="font-mono text-xs uppercase tracking-wider text-mint">
              The problem
            </p>
            <p className="mt-3 text-foreground/85 leading-relaxed">
              {project.problem}
            </p>
          </div>

          <div className="bento-tile p-7" style={{ gridColumn: "span 2" }}>
            <p className="font-mono text-xs uppercase tracking-wider text-mint">
              Highlights
            </p>
            <ul className="mt-4 space-y-3">
              {project.highlights.map((h) => (
                <li key={h} className="flex gap-3 text-sm text-foreground/85">
                  <Check className="size-4 text-mint shrink-0 mt-1" />
                  <span>{h}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="bento-tile p-7" style={{ gridColumn: "span 2" }}>
            <p className="font-mono text-xs uppercase tracking-wider text-mint">
              Outcomes
            </p>
            <ul className="mt-4 space-y-3">
              {project.outcomes.map((o) => (
                <li key={o} className="flex gap-3 text-sm text-foreground/85">
                  <Check className="size-4 text-mint shrink-0 mt-1" />
                  <span>{o}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 flex items-center justify-between border-t border-border/50 pt-8">
          <Link
            to="/projects"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-mint transition-colors"
          >
            <ArrowLeft className="size-4" /> All projects
          </Link>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 text-sm text-mint link-sweep"
          >
            Talk about a project <ArrowUpRight className="size-4" />
          </Link>
        </div>
      </article>
    </SiteShell>
  );
}