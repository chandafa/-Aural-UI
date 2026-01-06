import Link from "next/link";
import { Badge } from "@/components/ui/Badge";
import { CodeBlock } from "@/components/docs/CodeBlock";
import { Card, CardContent } from "@/components/ui/Card";

export const metadata = {
  title: "CDN Installation - Auralix UI",
  description: "How to use Auralix UI directly in the browser via CDN.",
};

export default function CdnPage() {
  return (
    <div className="space-y-12">
      {/* Header */}
      <div>
        <Badge variant="info" className="mb-4">Installation</Badge>
        <h1 className="text-4xl font-bold tracking-tight mb-4">CDN</h1>
        <p className="text-xl text-muted-foreground">
          Use Auralix UI directly in the browser without a build step.
        </p>
      </div>

      {/* Create Project / Setup */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Create project</h2>
        <p className="text-muted-foreground">
          Start by adding the following code to the <code className="px-1.5 py-0.5 bg-muted rounded text-sm">&lt;head&gt;</code> of your HTML file:
        </p>
        
        <CodeBlock 
            code={`<!-- Styles -->
<link rel="stylesheet" href="https://unpkg.com/auralix-ui/dist/styles.css">

<!-- Dependencies -->
<script src="https://unpkg.com/react@19/umd/react.production.min.js"></script>
<script src="https://unpkg.com/react-dom@19/umd/react-dom.production.min.js"></script>`}
            language="html"
          />
      </section>

      {/* Add Components */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Add Components</h2>
        <p className="text-muted-foreground">
          Add the Auralix UI script to load the components:
        </p>
        <CodeBlock 
            code={`<!-- Auralix UI -->
<script src="https://unpkg.com/auralix-ui/dist/index.global.js"></script>`}
            language="html"
          />
      </section>

      {/* Usage */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Usage</h2>
        <p className="text-muted-foreground">
          Access components via the <code className="px-1.5 py-0.5 bg-muted rounded text-sm">window.AuralixUI</code> global object.
        </p>
        
        <div className="rounded-lg border border-border bg-muted/50 p-4">
          <div className="text-xs font-mono text-muted-foreground mb-2">index.html</div>
          <CodeBlock 
            code={`<div id="root"></div>

<script>
  const { Button, Badge } = window.AuralixUI;
  const { createRoot } = ReactDOM;

  function App() {
    return (
      <div className="p-4">
        <Badge variant="success">CDN Mode</Badge>
        <Button onClick={() => alert('Hello!')} className="ml-2">
          Click Me
        </Button>
      </div>
    );
  }

  const root = createRoot(document.getElementById('root'));
  root.render(<App />);
</script>`}
            language="html"
            className="border-none bg-transparent p-0"
          />
        </div>
      </section>

      {/* Navigation */}
      <div className="grid gap-4 md:grid-cols-2 pt-8 border-t border-border">
        <Link href="/docs/frameworks/laravel">
          <Card hoverable className="h-full">
            <CardContent className="pt-6">
              <p className="text-sm text-muted-foreground">← Laravel</p>
              <p className="font-medium">Install and configure Laravel</p>
            </CardContent>
          </Card>
        </Link>
        <Link href="/docs/installation">
          <Card hoverable className="h-full text-right">
            <CardContent className="pt-6">
              <p className="text-sm text-muted-foreground">Installation →</p>
              <p className="font-medium">Back to Installation</p>
            </CardContent>
          </Card>
        </Link>
      </div>
    </div>
  );
}
