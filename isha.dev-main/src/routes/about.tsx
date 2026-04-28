import { createFileRoute } from "@tanstack/react-router";
import { SiteShell } from "@/components/site-shell";
import { CERTIFICATIONS, COURSEWORK, EDUCATION, INTERESTS, PROFILE } from "@/lib/portfolio-data";
import { Award, BookOpen, Sparkles } from "lucide-react";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Isha Mishra" },
      {
        name: "description",
        content:
          "About Isha Mishra: B.Tech CSE student at C.V. Raman Global University, full stack developer, hackathon participant.",
      },
      { property: "og:title", content: "About — Isha Mishra" },
      {
        property: "og:description",
        content:
          "B.Tech CSE student, CGPA 8.03, hackathon participant, certified in UX design — building thoughtful full stack experiences.",
      },
    ],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <SiteShell>
      <section className="mx-auto max-w-5xl px-5 sm:px-8 pt-12 pb-16">
        <p className="font-mono text-xs uppercase tracking-wider text-mint">About</p>
        <h1 className="mt-3 font-serif text-5xl sm:text-6xl leading-[1.05]">
          A full stack developer with an <em className="text-mint">editorial eye</em>.
        </h1>
        <p className="mt-6 max-w-2xl text-foreground/80 leading-relaxed text-lg">
          I'm {PROFILE.name}, a final-year Computer Science student at C.V.
          Raman Global University in Bhubaneswar. I've spent the last two years
          falling in love with the web — building interfaces, joining
          hackathons, and learning how to make even small interactions feel
          considered.
        </p>

        <div className="grid-bento mt-10">
          {/* Education */}
          <div className="bento-tile p-7" style={{ gridColumn: "span 4" }}>
            <div className="flex items-center gap-2 text-mint">
              <BookOpen className="size-4" />
              <p className="font-mono text-xs uppercase tracking-wider">Education</p>
            </div>
            <ol className="mt-6 relative border-l border-border/50 pl-6 space-y-7">
              {EDUCATION.map((e) => (
                <li key={e.institution + e.degree} className="relative">
                  <span className="absolute -left-[31px] top-1.5 size-3 rounded-full bg-mint shadow-[0_0_0_4px_var(--background)]" />
                  <div className="flex flex-wrap items-baseline justify-between gap-2">
                    <p className="font-serif text-2xl">{e.institution}</p>
                    <p className="font-mono text-xs text-muted-foreground">
                      {e.period}
                    </p>
                  </div>
                  <p className="text-sm text-foreground/85 mt-1">{e.degree}</p>
                  <p className="text-sm text-mint mt-1">{e.detail}</p>
                </li>
              ))}
            </ol>
          </div>

          {/* Certifications */}
          <div className="bento-tile p-7" style={{ gridColumn: "span 2" }}>
            <div className="flex items-center gap-2 text-mint">
              <Award className="size-4" />
              <p className="font-mono text-xs uppercase tracking-wider">
                Certifications
              </p>
            </div>
            <ul className="mt-5 space-y-4">
              {CERTIFICATIONS.map((c) => (
                <li key={c.title}>
                  <p className="font-serif text-lg leading-snug">{c.title}</p>
                  <p className="text-xs text-muted-foreground mt-0.5">
                    {c.issuer}
                    {c.year ? ` · ${c.year}` : ""}
                  </p>
                </li>
              ))}
            </ul>
          </div>

          {/* Coursework */}
          <div className="bento-tile p-7" style={{ gridColumn: "span 2" }}>
            <p className="font-mono text-xs uppercase tracking-wider text-mint">
              Coursework
            </p>
            <div className="mt-4 flex flex-wrap gap-2">
              {COURSEWORK.map((c) => (
                <span
                  key={c}
                  className="rounded-full border border-border px-3 py-1 text-xs font-mono text-foreground/85"
                >
                  {c}
                </span>
              ))}
            </div>
          </div>

          {/* Interests */}
          <div className="bento-tile p-7" style={{ gridColumn: "span 4" }}>
            <div className="flex items-center gap-2 text-mint">
              <Sparkles className="size-4" />
              <p className="font-mono text-xs uppercase tracking-wider">Beyond code</p>
            </div>
            <p className="font-serif text-2xl italic mt-4 max-w-2xl leading-snug">
              When I'm not in the editor, you'll find me {INTERESTS.slice(0, -1).join(", ").toLowerCase()} or {INTERESTS[INTERESTS.length - 1].toLowerCase()}.
            </p>
          </div>
        </div>
      </section>
    </SiteShell>
  );
}