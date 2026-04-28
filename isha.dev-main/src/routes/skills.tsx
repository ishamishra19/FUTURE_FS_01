import { createFileRoute } from "@tanstack/react-router";
import { SiteShell } from "@/components/site-shell";
import { SKILLS } from "@/lib/portfolio-data";

export const Route = createFileRoute("/skills")({
  head: () => ({
    meta: [
      { title: "Skills — Isha Mishra" },
      {
        name: "description",
        content:
          "Skills, tools and technologies Isha Mishra uses — languages, frontend frameworks, databases and developer tools.",
      },
      { property: "og:title", content: "Skills — Isha Mishra" },
      {
        property: "og:description",
        content:
          "Languages, frontend frameworks, databases and tools Isha works with day to day.",
      },
    ],
  }),
  component: SkillsPage,
});

function SkillsPage() {
  return (
    <SiteShell>
      <section className="mx-auto max-w-5xl px-5 sm:px-8 pt-12 pb-16">
        <p className="font-mono text-xs uppercase tracking-wider text-mint">Skills</p>
        <h1 className="mt-3 font-serif text-5xl sm:text-6xl leading-[1.05]">
          Tools I reach for, <em className="text-mint">often</em>.
        </h1>
        <p className="mt-5 max-w-2xl text-foreground/80 leading-relaxed">
          A snapshot of what's in my toolbox today. I'm always picking up new
          things — currently digging into animation libraries and design
          systems.
        </p>

        <div className="grid-bento mt-10">
          {SKILLS.map((g, i) => (
            <div
              key={g.group}
              className="bento-tile flex h-full flex-col p-7 fade-up"
              style={{
                gridColumn: "span 2",
                animationDelay: `${i * 80}ms`,
              }}
            >
              <p className="font-mono text-xs uppercase tracking-wider text-mint">
                {g.group}
              </p>
              <ul className="mt-4 flex-1 divide-y divide-border/40 sm:mt-5 lg:mt-6">
                {g.items.map((item) => (
                  <li
                    key={item}
                    className="flex min-h-10 items-center py-2 first:pt-0 last:pb-0 sm:min-h-11 sm:py-2.5 lg:min-h-12 lg:py-3"
                  >
                    <span className="block font-serif text-lg leading-tight sm:text-xl lg:text-[1.35rem]">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>
    </SiteShell>
  );
}