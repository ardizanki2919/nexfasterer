import { siteConfig } from "@/config/site.config";

export default function Docs() {
  return (
    <div className="max-w-4xl">
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-3">Documentation</h1>
        <p className="text-lg text-muted-foreground">
          React Router 7 with client-side routing
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
          <p className="text-sm text-muted-foreground">
            Open{" "}
            <code className="bg-muted px-1.5 py-0.5 rounded text-xs">
              http://localhost:3000
            </code>{" "}
            to see the app.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold border-b pb-2">Architecture</h2>
          <p className="text-muted-foreground">
            NexFaster uses React Router with{" "}
            <code className="bg-muted px-1.5 py-0.5 rounded text-xs">
              ssr: false
            </code>{" "}
            for pure client-side routing.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold border-b pb-2">Key files</h2>
          <div className="grid gap-3">
            <div className="flex items-center space-x-3 p-3 bg-muted/30 rounded-lg">
              <code className="text-sm font-mono bg-primary/10 px-2 py-1 rounded">
                react-router.config.ts
              </code>
              <span className="text-sm text-muted-foreground">
                React Router configuration
              </span>
            </div>
            <div className="flex items-center space-x-3 p-3 bg-muted/30 rounded-lg">
              <code className="text-sm font-mono bg-primary/10 px-2 py-1 rounded">
                app/root.tsx
              </code>
              <span className="text-sm text-muted-foreground">
                Main React Router application
              </span>
            </div>
            <div className="flex items-center space-x-3 p-3 bg-muted/30 rounded-lg">
              <code className="text-sm font-mono bg-primary/10 px-2 py-1 rounded">
                app/config/site.config.ts
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
              <code>Add new routes in app/routes.ts</code>
            </pre>
          </div>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold border-b pb-2">Features</h2>
          <div className="grid gap-3">
            <div className="flex items-center space-x-3">
              <span className="text-lg">⚡</span>
              <span className="text-sm">
                Lightning fast client-side routing
              </span>
            </div>
            <div className="flex items-center space-x-3">
              <span className="text-lg">🎯</span>
              <span className="text-sm">
                Zero-config React Router integration
              </span>
            </div>
            <div className="flex items-center space-x-3">
              <span className="text-lg">🎨</span>
              <span className="text-sm">Modern UI with Tailwind CSS</span>
            </div>
            <div className="flex items-center space-x-3">
              <span className="text-lg">🌙</span>
              <span className="text-sm">Dark mode support</span>
            </div>
            <div className="flex items-center space-x-3">
              <span className="text-lg">📱</span>
              <span className="text-sm">Responsive design</span>
            </div>
            <div className="flex items-center space-x-3">
              <span className="text-lg">🔧</span>
              <span className="text-sm">TypeScript support</span>
            </div>
          </div>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold border-b pb-2">Tech Stack</h2>
          <div className="grid gap-3">
            <div className="flex justify-between items-center p-3 bg-muted/30 rounded-lg">
              <span className="font-medium">Framework</span>
              <span className="text-sm text-muted-foreground">
                React Router 7
              </span>
            </div>
            <div className="flex justify-between items-center p-3 bg-muted/30 rounded-lg">
              <span className="font-medium">Routing</span>
              <span className="text-sm text-muted-foreground">
                React Router 7
              </span>
            </div>
            <div className="flex justify-between items-center p-3 bg-muted/30 rounded-lg">
              <span className="font-medium">Styling</span>
              <span className="text-sm text-muted-foreground">
                Tailwind CSS
              </span>
            </div>
            <div className="flex justify-between items-center p-3 bg-muted/30 rounded-lg">
              <span className="font-medium">UI Components</span>
              <span className="text-sm text-muted-foreground">shadcn/ui</span>
            </div>
            <div className="flex justify-between items-center p-3 bg-muted/30 rounded-lg">
              <span className="font-medium">Icons</span>
              <span className="text-sm text-muted-foreground">
                Lucide React
              </span>
            </div>
            <div className="flex justify-between items-center p-3 bg-muted/30 rounded-lg">
              <span className="font-medium">Language</span>
              <span className="text-sm text-muted-foreground">TypeScript</span>
            </div>
          </div>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold border-b pb-2">
            Usage Examples
          </h2>

          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-medium mb-2">Multi-page App</h3>
              <div className="bg-muted/50 rounded-lg p-4">
                <pre className="text-sm">
                  <code>{`<Route path="/products" element={<ProductList />} />
<Route path="/products/:id" element={<ProductDetail />} />
<Route path="/cart" element={<ShoppingCart />} />`}</code>
                </pre>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-medium mb-2">Protected Routes</h3>
              <p className="text-sm text-muted-foreground mb-2">
                Use{" "}
                <a
                  href="https://reactrouter.com/changelog#middleware-unstable"
                  className="text-primary underline hover:no-underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  middleware
                </a>
              </p>
            </div>

            <div>
              <h3 className="text-lg font-medium mb-2">Nested Layouts</h3>
              <p className="text-sm text-muted-foreground">
                See{" "}
                <a
                  href="https://reactrouter.com/start/framework/routing#nested-routes"
                  className="text-primary underline hover:no-underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  docs
                </a>
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
