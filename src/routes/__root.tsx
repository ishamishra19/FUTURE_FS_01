import { Outlet, Link, createRootRoute, HeadContent, Scripts } from "@tanstack/react-router";
import { Toaster } from "@/components/ui/sonner";

import appCss from "../styles.css?url";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="font-serif text-8xl italic text-mint">404</h1>
        <h2 className="mt-4 text-xl text-foreground">This page wandered off.</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          Let's get you back to something that exists.
        </p>
        <div className="mt-6">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-full border border-mint/60 px-5 py-2 text-sm text-mint hover:bg-mint hover:text-primary-foreground transition-colors"
          >
            Go home
          </Link>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Isha Mishra — Frontend Developer" },
      {
        name: "description",
        content:
          "Portfolio of Isha Mishra — frontend developer crafting interactive web experiences with React, Next.js & TypeScript.",
      },
      { name: "author", content: "Isha Mishra" },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { property: "og:title", content: "Isha Mishra — Frontend Developer" },
      { name: "twitter:title", content: "Isha Mishra — Frontend Developer" },
      {
        name: "description",
        content:
          "A dynamic portfolio website showcasing projects, skills, and contact information with interactive elements.",
      },
      {
        property: "og:description",
        content:
          "A dynamic portfolio website showcasing projects, skills, and contact information with interactive elements.",
      },
      {
        name: "twitter:description",
        content:
          "A dynamic portfolio website showcasing projects, skills, and contact information with interactive elements.",
      },
      {
        property: "og:image",
        content:
          "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/72e1fba5-ee4d-41ac-a6f6-ac61075e67f2/id-preview-ce91da77--709b117f-072f-46c6-a595-3feb643f6893.lovable.app-1777015843373.png",
      },
      {
        name: "twitter:image",
        content:
          "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/72e1fba5-ee4d-41ac-a6f6-ac61075e67f2/id-preview-ce91da77--709b117f-072f-46c6-a595-3feb643f6893.lovable.app-1777015843373.png",
      },
    ],
    links: [
      {
        rel: "stylesheet",
        href: appCss,
      },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
});

function RootShell({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body className="bg-background text-foreground antialiased">
        {children}
        <Toaster theme="dark" position="bottom-right" />
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  return <Outlet />;
}
