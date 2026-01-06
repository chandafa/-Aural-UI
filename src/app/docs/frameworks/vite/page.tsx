import Link from "next/link";
import { Badge } from "@/components/ui/Badge";
import { CodeBlock } from "@/components/docs/CodeBlock";
import { CommandWithTabs } from "@/components/docs/CommandWithTabs";
import { Card, CardContent } from "@/components/ui/Card";

export const metadata = {
  title: "Vite - Auralix UI",
  description: "Install and configure Auralix UI for Vite.",
};

export default function VitePage() {
  return (
    <div className="space-y-12">
      {/* Header */}
      <div>
        <Badge variant="info" className="mb-4">Framework guides</Badge>
        <h1 className="text-4xl font-bold tracking-tight mb-4">Vite</h1>
        <p className="text-xl text-muted-foreground">
          Install and configure Auralix UI for Vite.
        </p>
      </div>

      {/* Create Project */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Create project</h2>
        <p className="text-muted-foreground">
          Start by creating a new React project using Vite:
        </p>
        <CommandWithTabs 
          commands={{
            npm: "npm create vite@latest my-app -- --template react-ts",
            pnpm: "pnpm create vite my-app --template react-ts",
            yarn: "yarn create vite my-app --template react-ts",
            bun: "bun create vite my-app --template react-ts"
          }}
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
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Configure</h2>
        <p className="text-muted-foreground">
          Import the styles and add the source directive to your <code className="px-1.5 py-0.5 bg-muted rounded text-sm">src/index.css</code> file:
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
            <div className="text-xs font-mono text-muted-foreground mb-2">src/App.tsx</div>
            <CodeBlock 
                code={`import { Button } from "auralix-ui";

function App() {
  return (
    <div>
      <Button>Click me</Button>
    </div>
  )
}

export default App`}
                language="tsx"
                className="border-none bg-transparent p-0"
            />
        </div>
      </section>

      {/* Navigation */}
      <div className="grid gap-4 md:grid-cols-2 pt-8 border-t border-border">
        <Link href="/docs/frameworks/nextjs">
          <Card hoverable className="h-full">
            <CardContent className="pt-6">
              <p className="text-sm text-muted-foreground">← NextJS</p>
              <p className="font-medium">Install and configure Next.js</p>
            </CardContent>
          </Card>
        </Link>
        <Link href="/docs/frameworks/laravel">
          <Card hoverable className="h-full text-right">
            <CardContent className="pt-6">
              <p className="text-sm text-muted-foreground">Laravel →</p>
              <p className="font-medium">Install and configure Laravel</p>
            </CardContent>
          </Card>
        </Link>
      </div>
    </div>
  );
}
