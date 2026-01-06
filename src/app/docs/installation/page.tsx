import Link from "next/link";
import { Badge } from "@/components/ui/Badge";
import { Card, CardContent } from "@/components/ui/Card";
import { CodeBlock } from "@/components/docs/CodeBlock";
import { NextJsIcon, ViteIcon, LaravelIcon, CdnIcon } from "@/components/icons/FrameworkIcons";

export const metadata = {
  title: "Installation - Auralix UI",
  description: "How to install and setup Auralix UI in your project.",
};

const FRAMEWORKS = [
  {
    name: "Next.js",
    href: "/docs/frameworks/nextjs",
    icon: NextJsIcon,
  },
  {
    name: "Vite",
    href: "/docs/frameworks/vite",
    icon: ViteIcon,
  },
  {
    name: "Laravel",
    href: "/docs/frameworks/laravel",
    icon: LaravelIcon,
  },
  {
    name: "CDN",
    href: "/docs/frameworks/cdn",
    icon: CdnIcon,
  },
];

export default function InstallationPage() {
  return (
    <div className="space-y-12">
      {/* Header */}
      <div>
        <h1 className="text-4xl font-bold tracking-tight mb-4">Installation</h1>
        <p className="text-xl text-muted-foreground">
          How to install dependencies and structure your app.
        </p>
      </div>

      {/* Pick Your Framework */}
      <section className="space-y-6">
        <h2 className="text-xl font-semibold">Pick Your Framework</h2>
        <p className="text-muted-foreground">
          Start by selecting your framework of choice. Then follow the instructions to install the
          dependencies and structure your app. shadcn/ui is built to work with all React frameworks.
        </p>
        
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-2">
          {FRAMEWORKS.map((framework) => (
            <Link key={framework.name} href={framework.href} className="flex flex-col">
              <Card hoverable className="h-40 flex items-center justify-center bg-zinc-950/50 border-zinc-800">
                <CardContent className="flex flex-col items-center justify-center gap-4 pt-6">
                  <framework.icon className="w-12 h-12" />
                  <h3 className="font-semibold text-lg">{framework.name}</h3>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </section>

      {/* CLI Usage */}
      <section className="space-y-6">
        <h2 className="text-2xl font-semibold">CLI Usage</h2>
        
        <div className="space-y-4">
          <p className="text-muted-foreground">
            Use the <code className="px-1.5 py-0.5 bg-muted rounded text-sm">init</code> command to initialize dependencies and configuration:
          </p>
          <CodeBlock 
            code={`npx auralix-ui@latest init`}
            language="bash"
          />
        </div>

        <div className="space-y-4">
          <h3 className="text-lg font-medium">Add Components</h3>
          <p className="text-muted-foreground">
            Use the <code className="px-1.5 py-0.5 bg-muted rounded text-sm">add</code> command to add components to your project:
          </p>
          <CodeBlock 
            code={`npx auralix-ui@latest add [component]`}
            language="bash"
          />
        </div>
      </section>
    </div>
  );
}
