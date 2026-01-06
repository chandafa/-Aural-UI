import Link from "next/link";
import { Badge } from "@/components/ui/Badge";
import { CodeBlock } from "@/components/docs/CodeBlock";
import { CommandWithTabs } from "@/components/docs/CommandWithTabs";
import { Card, CardContent } from "@/components/ui/Card";

export const metadata = {
  title: "Laravel Installation - Auralix UI",
  description: "Install and configure Auralix UI for Laravel.",
};

export default function LaravelPage() {
  return (
    <div className="space-y-12">
      {/* Header */}
      <div>
        <Badge variant="info" className="mb-4">Installation</Badge>
        <h1 className="text-4xl font-bold tracking-tight mb-4">Laravel</h1>
        <p className="text-xl text-muted-foreground">
          Install and configure Auralix UI for Laravel.
        </p>
      </div>

      {/* Create Project */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Create project</h2>
        <p className="text-muted-foreground">
          Start by creating a new Laravel project:
        </p>
        <CodeBlock 
          code={`composer create-project laravel/laravel my-app`}
          language="bash"
        />
      </section>

      {/* Add Components */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Add Components</h2>
        <p className="text-muted-foreground">
          Install the Auralix UI package and its dependencies:
        </p>
        <CommandWithTabs 
          commands={{
            npm: "npm install auralix-ui",
            pnpm: "pnpm add auralix-ui",
            yarn: "yarn add auralix-ui",
            bun: "bun add auralix-ui"
          }}
        />
      </section>

      {/* Configure */}
      <section className="space-y-6">
        <h2 className="text-2xl font-semibold">Configure</h2>
        <p className="text-muted-foreground">
          Import the Auralix UI styles in your <code className="px-1.5 py-0.5 bg-muted rounded text-sm">resources/css/app.css</code> file.
        </p>
        
        <div className="space-y-4">
          <h3 className="text-lg font-medium">For Tailwind CSS v4.0+</h3>
          <CodeBlock 
            code={`@import "tailwindcss";
@import "auralix-ui/styles.css";

@source "../views/**/*";
@source "../../node_modules/auralix-ui/src";`}
            language="css"
          />
        </div>

        <div className="space-y-4">
          <h3 className="text-lg font-medium">For Tailwind CSS v3</h3>
          <p className="text-muted-foreground">
            Update your <code className="px-1.5 py-0.5 bg-muted rounded text-sm">tailwind.config.js</code>:
          </p>
          <CodeBlock 
            code={`export default {
    content: [
      "./resources/**/*.blade.php",
      "./resources/**/*.js",
      "./resources/**/*.vue",
      "./node_modules/auralix-ui/**/*.{js,mjs}",
    ],
    // ...
};`}
            language="javascript"
          />
        </div>
      </section>

      {/* Configure tsconfig */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Configure path aliases</h2>
        <p className="text-muted-foreground">
          Add the following to your <code className="px-1.5 py-0.5 bg-muted rounded text-sm">tsconfig.json</code> file:
        </p>
        <div className="rounded-lg border border-border bg-muted/50 p-4">
          <div className="text-xs font-mono text-muted-foreground mb-2">tsconfig.json</div>
          <CodeBlock 
            code={`{
  "compilerOptions": {
    "baseUrl": ".",
    "paths": {
      "@/*": ["resources/js/*"]
    }
  }
}`}
            language="json"
            className="border-none bg-transparent p-0"
          />
        </div>
      </section>

      {/* Add utilities */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Add utilities</h2>
        <p className="text-muted-foreground">
          Create a <code className="px-1.5 py-0.5 bg-muted rounded text-sm">resources/js/lib/utils.ts</code> file with the following content:
        </p>
        <div className="rounded-lg border border-border bg-muted/50 p-4">
          <div className="text-xs font-mono text-muted-foreground mb-2">resources/js/lib/utils.ts</div>
          <CodeBlock 
            code={`import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}`}
            language="tsx"
            className="border-none bg-transparent p-0"
          />
        </div>
      </section>

      {/* Usage */}
      <section className="space-y-6">
        <h2 className="text-2xl font-semibold">Usage</h2>
        <p className="text-muted-foreground">
            If using React with Inertia.js:
        </p>
        <div className="rounded-lg border border-border bg-muted/50 p-4">
            <div className="text-xs font-mono text-muted-foreground mb-2">resources/js/Pages/Welcome.tsx</div>
            <CodeBlock 
                code={`import { Button } from "auralix-ui";

export default function Welcome() {
    return (
        <Button>Click me</Button>
    );
}`}
                language="tsx"
                className="border-none bg-transparent p-0"
            />
        </div>
      </section>

      {/* Navigation */}
      <div className="grid gap-4 md:grid-cols-2 pt-8 border-t border-border">
        <Link href="/docs/frameworks/vite">
          <Card hoverable className="h-full">
            <CardContent className="pt-6">
              <p className="text-sm text-muted-foreground">← Vite</p>
              <p className="font-medium">Install and configure Vite</p>
            </CardContent>
          </Card>
        </Link>
        <Link href="/docs/frameworks/cdn">
          <Card hoverable className="h-full text-right">
            <CardContent className="pt-6">
              <p className="text-sm text-muted-foreground">CDN →</p>
              <p className="font-medium">Use via CDN</p>
            </CardContent>
          </Card>
        </Link>
      </div>
    </div>
  );
}
