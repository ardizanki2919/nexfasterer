import { siteConfig } from "@/config/site.config";

export default function Examples() {
  return (
    <div className="max-w-4xl">
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-3">Technical Examples</h1>
        <p className="text-lg text-muted-foreground">
          Real implementations you can build
        </p>
      </div>

      <div className="space-y-6">
        <div className="border rounded-lg p-6">
          <h3 className="text-xl font-semibold mb-3">
            Multi-page app with nested routes
          </h3>
          <div className="space-y-3">
            <div className="bg-muted/50 rounded p-3">
              <code className="text-sm">/products → ProductList</code>
              <br />
              <code className="text-sm">/products/:id → ProductDetail</code>
              <br />
              <code className="text-sm">/cart → ShoppingCart</code>
            </div>
            <p className="text-sm text-muted-foreground">
              Supports URL params, nested layouts, protected routes
            </p>
          </div>
        </div>

        <div className="border rounded-lg p-6">
          <h3 className="text-xl font-semibold mb-3">
            Admin dashboard with auth
          </h3>
          <div className="space-y-3">
            <div className="bg-muted/50 rounded p-3">
              <code className="text-sm">/login → AuthForm</code>
              <br />
              <code className="text-sm">/dashboard → ProtectedDashboard</code>
              <br />
              <code className="text-sm">/dashboard/users → UserManagement</code>
            </div>
            <p className="text-sm text-muted-foreground">
              Route guards, auth context, role-based access
            </p>
          </div>
        </div>

        <div className="border rounded-lg p-6">
          <h3 className="text-xl font-semibold mb-3">
            API integration patterns
          </h3>
          <div className="space-y-3">
            <div className="bg-muted/50 rounded p-3">
              <code className="text-sm">React Query + tRPC</code>
              <br />
              <code className="text-sm">SWR + REST APIs</code>
              <br />
              <code className="text-sm">Zustand state management</code>
            </div>
            <p className="text-sm text-muted-foreground">
              Client-side data fetching, caching, optimistic updates
            </p>
          </div>
        </div>

        <div className="bg-muted/30 rounded-lg p-6">
          <h3 className="text-lg font-semibold mb-3">Quick start</h3>
          <div className="bg-background rounded p-4">
            <pre className="text-sm">
              <code>{`git clone ${siteConfig.socials.github}
cd ${siteConfig.name.toLowerCase()}
bun install
bun dev`}</code>
            </pre>
          </div>
        </div>
      </div>
    </div>
  );
}
