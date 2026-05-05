import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { z } from "zod";
import { toast } from "sonner";
import { Github, Linkedin, Mail, Phone, Send } from "lucide-react";
import { SiteShell } from "@/components/site-shell";
import { PROFILE } from "@/lib/portfolio-data";
import { submitContact } from "@/lib/server/contact";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Isha Mishra" },
      {
        name: "description",
        content:
          "Get in touch with Isha Mishra — full stack developer open to internships and collaboration.",
      },
      { property: "og:title", content: "Contact — Isha Mishra" },
      {
        property: "og:description",
        content:
          "Drop a message — open to internships, freelance full stack work and collaborations.",
      },
    ],
  }),
  component: ContactPage,
});

const FormSchema = z.object({
  name: z.string().trim().min(1, "Please add your name").max(100),
  email: z.string().trim().email("Enter a valid email").max(255),
  message: z
    .string()
    .trim()
    .min(10, "A little more detail, please (min 10 chars)")
    .max(1000, "Keep it under 1000 characters"),
});

function ContactPage() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState<Partial<Record<keyof typeof form, string>>>({});
  const [submitting, setSubmitting] = useState(false);

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    const parsed = FormSchema.safeParse(form);
    if (!parsed.success) {
      const next: typeof errors = {};
      for (const issue of parsed.error.issues) {
        const k = issue.path[0] as keyof typeof form;
        next[k] = issue.message;
      }
      setErrors(next);
      return;
    }
    setErrors({});
    setSubmitting(true);
    try {
      await submitContact({ data: parsed.data });
      toast.success("Message sent!", {
        description: "Thanks for reaching out — I'll get back to you soon.",
      });
      setForm({ name: "", email: "", message: "" });
    } catch (err) {
      toast.error("Couldn't send message", {
        description: err instanceof Error ? err.message : "Please try again.",
      });
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <SiteShell>
      <section className="mx-auto max-w-5xl px-5 sm:px-8 pt-12 pb-16">
        <p className="font-mono text-xs uppercase tracking-wider text-mint">Contact</p>
        <h1 className="mt-3 font-serif text-5xl sm:text-6xl leading-[1.05]">
          Let's <em className="text-mint">talk</em>.
        </h1>
        <p className="mt-5 max-w-2xl text-foreground/80 leading-relaxed">
          I'm open to internships, freelance full stack work, and collaboration on side projects.
          Drop a message — I read every one.
        </p>

        <div className="grid-bento mt-10">
          {/* Form */}
          <form
            onSubmit={onSubmit}
            className="bento-tile p-7 sm:p-8 space-y-5"
            style={{ gridColumn: "span 3" }}
            noValidate
          >
            <div>
              <label
                htmlFor="name"
                className="block text-xs font-mono uppercase tracking-wider text-muted-foreground"
              >
                Your name
              </label>
              <input
                id="name"
                type="text"
                value={form.name}
                onChange={(e) => setForm((f) => ({ ...f, name: e.target.value }))}
                className="mt-2 w-full bg-background/40 border border-border focus:border-mint/60 focus:ring-2 focus:ring-mint/20 outline-none rounded-lg px-4 py-3 text-base font-serif"
                placeholder="Jane Doe"
                maxLength={100}
                required
              />
              {errors.name && <p className="text-xs text-destructive mt-1">{errors.name}</p>}
            </div>

            <div>
              <label
                htmlFor="email"
                className="block text-xs font-mono uppercase tracking-wider text-muted-foreground"
              >
                Email
              </label>
              <input
                id="email"
                type="email"
                value={form.email}
                onChange={(e) => setForm((f) => ({ ...f, email: e.target.value }))}
                className="mt-2 w-full bg-background/40 border border-border focus:border-mint/60 focus:ring-2 focus:ring-mint/20 outline-none rounded-lg px-4 py-3 text-base font-mono"
                placeholder="you@domain.com"
                maxLength={255}
                required
              />
              {errors.email && <p className="text-xs text-destructive mt-1">{errors.email}</p>}
            </div>

            <div>
              <label
                htmlFor="message"
                className="block text-xs font-mono uppercase tracking-wider text-muted-foreground"
              >
                Message
              </label>
              <textarea
                id="message"
                rows={6}
                value={form.message}
                onChange={(e) => setForm((f) => ({ ...f, message: e.target.value }))}
                className="mt-2 w-full bg-background/40 border border-border focus:border-mint/60 focus:ring-2 focus:ring-mint/20 outline-none rounded-lg px-4 py-3 text-base resize-none"
                placeholder="Tell me about your project, role, or idea…"
                maxLength={1000}
                required
              />
              <div className="mt-1 flex justify-between text-xs text-muted-foreground">
                {errors.message ? (
                  <p className="text-destructive">{errors.message}</p>
                ) : (
                  <span>10–1000 characters</span>
                )}
                <span className="font-mono">{form.message.length} / 1000</span>
              </div>
            </div>

            <button
              type="submit"
              disabled={submitting}
              className="inline-flex items-center gap-2 rounded-full bg-mint px-6 py-3 text-sm font-medium text-primary-foreground transition-all hover:shadow-[0_8px_28px_-8px_var(--mint)] disabled:opacity-60 disabled:cursor-not-allowed"
            >
              <Send className="size-4" />
              {submitting ? "Sending…" : "Send message"}
            </button>
          </form>

          {/* Contact links */}
          <aside className="bento-tile p-7 space-y-5" style={{ gridColumn: "span 1" }}>
            <p className="font-mono text-xs uppercase tracking-wider text-mint">
              Or reach out directly
            </p>
            <ul className="space-y-4">
              <li>
                <a href={`mailto:${PROFILE.email}`} className="flex items-start gap-3 group">
                  <Mail className="size-4 text-mint mt-1 shrink-0" />
                  <div>
                    <p className="font-mono text-[10px] uppercase tracking-wider text-muted-foreground">
                      Email
                    </p>
                    <p className="text-sm break-all group-hover:text-mint transition-colors">
                      {PROFILE.email}
                    </p>
                  </div>
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Phone className="size-4 text-mint mt-1 shrink-0" />
                <div>
                  <p className="font-mono text-[10px] uppercase tracking-wider text-muted-foreground">
                    Phone
                  </p>
                  <p className="text-sm">{PROFILE.phone}</p>
                </div>
              </li>
              <li>
                <a
                  href={PROFILE.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-start gap-3 group"
                >
                  <Linkedin className="size-4 text-mint mt-1 shrink-0" />
                  <div>
                    <p className="font-mono text-[10px] uppercase tracking-wider text-muted-foreground">
                      LinkedIn
                    </p>
                    <p className="text-sm group-hover:text-mint transition-colors">
                      /in/isha-mishra-906939315
                    </p>
                  </div>
                </a>
              </li>
              <li>
                <a
                  href={PROFILE.github}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-start gap-3 group"
                >
                  <Github className="size-4 text-mint mt-1 shrink-0" />
                  <div>
                    <p className="font-mono text-[10px] uppercase tracking-wider text-muted-foreground">
                      GitHub
                    </p>
                    <p className="text-sm group-hover:text-mint transition-colors">@ishamishra19</p>
                  </div>
                </a>
              </li>
            </ul>
          </aside>
        </div>
      </section>
    </SiteShell>
  );
}
