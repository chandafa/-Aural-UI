import Link from "next/link";
import { Badge } from "@/components/ui/Badge";
import { CodeBlock } from "@/components/docs/CodeBlock";
import { CommandWithTabs } from "@/components/docs/CommandWithTabs";
import { Card, CardContent } from "@/components/ui/Card";

export const metadata = {
  title: "NextJS - Auralix UI",
  description: "Install and configure Auralix UI for Next.js.",
};

export default function NextJSPage() {
  return (
    <div className="space-y-12">
      {/* Header */}
      <div>
        <Badge variant="info" className="mb-4">Framework guides</Badge>
        <h1 className="text-4xl font-bold tracking-tight mb-4">NextJS</h1>
        <p className="text-xl text-muted-foreground">
          Install and configure Auralix UI for Next.js.
        </p>
      </div>

      {/* Create Project */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Create project</h2>
        <p className="text-muted-foreground">
          Run the init command to create a new Next.js project or to setup an existing one:
        </p>
        <CommandWithTabs 
          commands={{
            npm: "npx create-next-app@latest",
            pnpm: "pnpm create next-app",
            yarn: "yarn create next-app",
            bun: "bun create next-app"
          }}
        />
      </section>

      {/* Add Components */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Add Components</h2>
        <p className="text-muted-foreground">
          Install the Auralix UI package to start using components in your project.
        </p>
        <CommandWithTabs 
          commands={{
            npm: "npm install auralix-ui",
            pnpm: "pnpm add auralix-ui",
            yarn: "yarn add auralix-ui",
            bun: "bun add auralix-ui"
          }}
        />
        <p className="text-muted-foreground text-sm">
          This will also install necessary peer dependencies.
        </p>
      </section>

      {/* Configure */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Configure</h2>
        <p className="text-muted-foreground">
            Add the following to your <code className="px-1.5 py-0.5 bg-muted rounded text-sm">app/globals.css</code>:
        </p>
        <CodeBlock 
          code={`@import "tailwindcss";
@import "auralix-ui/styles.css";

@source "../../node_modules/auralix-ui/src";`}
          language="css"
        />
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
      "@/*": ["src/*"]
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
          Create a <code className="px-1.5 py-0.5 bg-muted rounded text-sm">src/lib/utils.ts</code> file with the following content:
        </p>
        <div className="rounded-lg border border-border bg-muted/50 p-4">
          <div className="text-xs font-mono text-muted-foreground mb-2">src/lib/utils.ts</div>
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
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Usage</h2>
        <p className="text-muted-foreground">
            You can then import components like this:
        </p>
        <div className="rounded-lg border border-border bg-muted/50 p-4">
            <div className="text-xs font-mono text-muted-foreground mb-2">app/page.tsx</div>
            <CodeBlock 
                code={`import { Button } from "auralix-ui";

export default function Home() {
  return (
    <div>
      <Button>Click me</Button>
    </div>
  )
}`}
                language="tsx"
                className="border-none bg-transparent p-0"
            />
        </div>
      </section>

      {/* Navigation */}
      <div className="grid gap-4 md:grid-cols-2 pt-8 border-t border-border">
        <Link href="/docs/installation">
          <Card hoverable className="h-full">
            <CardContent className="pt-6">
              <p className="text-sm text-muted-foreground">← Installation</p>
              <p className="font-medium">General installation guide</p>
            </CardContent>
          </Card>
        </Link>
        <Link href="/docs/frameworks/vite">
          <Card hoverable className="h-full text-right">
            <CardContent className="pt-6">
              <p className="text-sm text-muted-foreground">Vite →</p>
              <p className="font-medium">How to install and setup Auralix UI in Vite</p>
            </CardContent>
          </Card>
        </Link>
      </div>
    </div>
  );
}
