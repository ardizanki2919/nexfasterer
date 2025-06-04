import { siteConfig } from "~/config/site.config";

export default function Docs() {
  return (
    <div className="max-w-4xl">
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-3">Documentation</h1>
        <p className="text-lg text-muted-foreground">
          React Router inside Next.js with client-side routing
        </p>
      </div>

      <div className="space-y-8">
        <section className="space-y-4">
          <h2 className="text-2xl font-semibold border-b pb-2">Setup</h2>
          <div className="bg-muted/50 rounded-lg p-4">
            <pre className="text-sm">
              <code>{`git clone ${siteConfig.socials.github}
cd ${siteConfig.name.toLowerCase()}
bun install
bun dev`}</code>
            </pre>
          </div>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold border-b pb-2">How it works</h2>
          <div className="space-y-3">
            <div className="flex items-start space-x-3">
              <div className="w-6 h-6 bg-primary/10 rounded-full flex items-center justify-center text-xs font-medium text-primary mt-0.5">
                1
              </div>
              <div>
                <p className="font-medium">Route redirection</p>
                <p className="text-sm text-muted-foreground">
                  All routes redirect to{" "}
                  <code className="bg-muted px-1.5 py-0.5 rounded text-xs">
                    /shell
                  </code>{" "}
                  via next.config.ts
                </p>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <div className="w-6 h-6 bg-primary/10 rounded-full flex items-center justify-center text-xs font-medium text-primary mt-0.5">
                2
              </div>
              <div>
                <p className="font-medium">Shell loading</p>
                <p className="text-sm text-muted-foreground">
                  Shell page loads React Router app with{" "}
                  <code className="bg-muted px-1.5 py-0.5 rounded text-xs">
                    ssr: false
                  </code>
                </p>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <div className="w-6 h-6 bg-primary/10 rounded-full flex items-center justify-center text-xs font-medium text-primary mt-0.5">
                3
              </div>
              <div>
                <p className="font-medium">Client routing</p>
                <p className="text-sm text-muted-foreground">
                  React Router handles all navigation client-side
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold border-b pb-2">Key files</h2>
          <div className="grid gap-3">
            <div className="flex items-center space-x-3 p-3 bg-muted/30 rounded-lg">
              <code className="text-sm font-mono bg-primary/10 px-2 py-1 rounded">
                next.config.ts
              </code>
              <span className="text-sm text-muted-foreground">
                Route redirection config
              </span>
            </div>
            <div className="flex items-center space-x-3 p-3 bg-muted/30 rounded-lg">
              <code className="text-sm font-mono bg-primary/10 px-2 py-1 rounded">
                src/app/shell/page.tsx
              </code>
              <span className="text-sm text-muted-foreground">
                Loads React Router app
              </span>
            </div>
            <div className="flex items-center space-x-3 p-3 bg-muted/30 rounded-lg">
              <code className="text-sm font-mono bg-primary/10 px-2 py-1 rounded">
                src/frontend/app.tsx
              </code>
              <span className="text-sm text-muted-foreground">
                Main React Router app
              </span>
            </div>
            <div className="flex items-center space-x-3 p-3 bg-muted/30 rounded-lg">
              <code className="text-sm font-mono bg-primary/10 px-2 py-1 rounded">
                src/config/site.config.ts
              </code>
              <span className="text-sm text-muted-foreground">
                Site configuration
              </span>
            </div>
          </div>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold border-b pb-2">
            Adding routes
          </h2>
          <div className="bg-muted/50 rounded-lg p-4">
            <pre className="text-sm">
              <code>{`<Route path="/new-page" element={<NewPage />} />`}</code>
            </pre>
          </div>
          <p className="text-sm text-muted-foreground">
            Add new Route components in the Routes section of app.tsx
          </p>
        </section>
      </div>
    </div>
  );
}
