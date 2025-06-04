import {
  isRouteErrorResponse,
  Link,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "react-router";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { NavLink } from "react-router";
import ThemeToggler from "@/components/theme/toggler";
import { GithubIcon } from "lucide-react";

import type { Route } from "./+types/root";
import styles from "@/styles/globals.css?url";

import { siteConfig } from "@/config/site.config";
import { cn } from "@/lib/utils";
import RootProviders from "@/components/providers";

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />

        <link rel="stylesheet" href={styles} />

        <title>{siteConfig.title}</title>
        <meta name="description" content={siteConfig.description} />
        <meta name="keywords" content={siteConfig.keywords.join(", ")} />
        <meta name="creator" content={siteConfig.name} />

        <link rel="icon" href="/favicon.png" />
        <link rel="shortcut icon" href="/favicon.png" />

        <meta property="og:title" content={siteConfig.title} />
        <meta property="og:description" content={siteConfig.description} />
        <meta property="og:url" content={siteConfig.origin} />
        <meta property="og:site_name" content={siteConfig.name} />
        <meta property="og:image" content={siteConfig.og} />
        <meta property="og:image:width" content="2880" />
        <meta property="og:image:height" content="1800" />
        <meta property="og:image:alt" content={siteConfig.name} />
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="en_US" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content={siteConfig.socials.x} />
        <meta name="twitter:title" content={siteConfig.title} />
        <meta name="twitter:description" content={siteConfig.description} />
        <meta name="twitter:image" content={siteConfig.og} />
        <meta name="twitter:image:width" content="2880" />
        <meta name="twitter:image:height" content="1800" />
        <meta name="twitter:image:alt" content={siteConfig.name} />
      </head>
      <body className={cn("min-h-screen bg-background font-sans antialiased")}>
        <RootProviders>{children}</RootProviders>
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}

export default function App() {
  return (
    <div className="min-h-screen bg-background">
      <nav className="">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center space-x-8">
              <NavLink to="/" className="text-xl font-bold text-primary">
                {siteConfig.name}
              </NavLink>
              <div className="hidden md:flex space-x-6">
                <NavLink
                  to="/"
                  className={({ isActive }) =>
                    `text-sm transition-colors ${
                      isActive
                        ? "text-primary font-medium"
                        : "text-muted-foreground hover:text-foreground"
                    }`
                  }
                >
                  Home
                </NavLink>
                <NavLink
                  to="/docs"
                  className={({ isActive }) =>
                    `text-sm transition-colors ${
                      isActive
                        ? "text-primary font-medium"
                        : "text-muted-foreground hover:text-foreground"
                    }`
                  }
                >
                  Docs
                </NavLink>
                <NavLink
                  to="/examples"
                  className={({ isActive }) =>
                    `text-sm transition-colors ${
                      isActive
                        ? "text-primary font-medium"
                        : "text-muted-foreground hover:text-foreground"
                    }`
                  }
                >
                  Examples
                </NavLink>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <Button
                variant="ghost"
                size="icon"
                className="rounded-full"
                asChild
              >
                <a
                  href={siteConfig.socials.github}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <GithubIcon className="w-4 h-4" />
                </a>
              </Button>
              <ThemeToggler />
            </div>
          </div>
        </div>
      </nav>
      <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Outlet />
      </main>
    </div>
  );
}

export function ErrorBoundary({ error }: Route.ErrorBoundaryProps) {
  let message = "Something went wrong!";
  let details = "An error occurred while loading this page.";
  let stack: string | undefined;

  const is404 = isRouteErrorResponse(error) && error.status === 404;

  if (isRouteErrorResponse(error)) {
    if (is404) {
      message = "Page Not Found";
      details = "The page you are looking for doesn't exist or has been moved.";
    }
  } else if (import.meta.env.DEV && error && error instanceof Error) {
    details = error.message;
    stack = error.stack;
  }

  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="min-h-screen flex items-center justify-center">
      <Card className="w-[420px]">
        <CardHeader>
          <CardTitle>{message}</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground">{details}</p>
          {stack && (
            <pre className="text-sm">
              <code>{stack}</code>
            </pre>
          )}
        </CardContent>
        <CardFooter>
          {is404 ? (
            <Button asChild>
              <Link to="/">Return Home</Link>
            </Button>
          ) : (
            <Button
              onClick={() => {
                window.location.reload();
              }}
              variant="default"
            >
              Try again
            </Button>
          )}
        </CardFooter>
      </Card>
    </div>
  );
}
