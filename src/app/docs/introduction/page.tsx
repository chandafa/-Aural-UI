import Link from "next/link";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { Card, CardContent } from "@/components/ui/Card";

export const metadata = {
  title: "Introduction - Auralix UI",
  description: "A modern UI component library built with React, TypeScript, and Tailwind CSS.",
};

export default function IntroductionPage() {
  return (
    <div className="space-y-12">
      {/* Header */}
      <div>
        <Badge variant="info" className="mb-4">Documentation</Badge>
        <h1 className="text-4xl font-bold tracking-tight mb-4">Introduction</h1>
        <p className="text-xl text-muted-foreground">
          Auralix UI is a modern, accessible, and fully customizable component library 
          built with React, TypeScript, and Tailwind CSS.
        </p>
      </div>

      {/* Overview */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Overview</h2>
        <p className="text-muted-foreground leading-relaxed">
          Auralix UI provides a set of high-quality UI components designed for building 
          modern web applications. Each component is carefully crafted to be accessible, 
          responsive, and easy to customize.
        </p>
        
        <div className="grid gap-4 md:grid-cols-3 mt-6">
          <Card hoverable>
            <CardContent className="pt-6">
              <div className="flex h-12 w-12 items-center justify-center rounded-[2rem] bg-gradient-to-br from-violet-500 to-purple-600 text-white mb-4">
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="font-semibold mb-2">TypeScript First</h3>
              <p className="text-sm text-muted-foreground">
                Built with TypeScript for complete type safety and excellent DX.
              </p>
            </CardContent>
          </Card>

          <Card hoverable>
            <CardContent className="pt-6">
              <div className="flex h-12 w-12 items-center justify-center rounded-[2rem] bg-gradient-to-br from-pink-500 to-rose-600 text-white mb-4">
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
                </svg>
              </div>
              <h3 className="font-semibold mb-2">Tailwind CSS</h3>
              <p className="text-sm text-muted-foreground">
                Styled with Tailwind for easy customization and consistency.
              </p>
            </CardContent>
          </Card>

          <Card hoverable>
            <CardContent className="pt-6">
              <div className="flex h-12 w-12 items-center justify-center rounded-[2rem] bg-gradient-to-br from-cyan-500 to-blue-600 text-white mb-4">
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="font-semibold mb-2">Accessible</h3>
              <p className="text-sm text-muted-foreground">
                Follows WAI-ARIA guidelines for keyboard and screen reader support.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Features */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Key Features</h2>
        <ul className="space-y-3 text-muted-foreground">
          <li className="flex items-start gap-3">
            <svg className="h-5 w-5 text-success mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
            </svg>
            <span><strong className="text-foreground">11+ Ready-to-use Components</strong> — Button, Card, Modal, Alert, Input, Select, and more.</span>
          </li>
          <li className="flex items-start gap-3">
            <svg className="h-5 w-5 text-success mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
            </svg>
            <span><strong className="text-foreground">Dark Mode Support</strong> — Built-in dark mode with easy theme switching.</span>
          </li>
          <li className="flex items-start gap-3">
            <svg className="h-5 w-5 text-success mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
            </svg>
            <span><strong className="text-foreground">Fully Responsive</strong> — Works seamlessly on all screen sizes.</span>
          </li>
          <li className="flex items-start gap-3">
            <svg className="h-5 w-5 text-success mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
            </svg>
            <span><strong className="text-foreground">CLI Support</strong> — Add components to your project with a single command.</span>
          </li>
          <li className="flex items-start gap-3">
            <svg className="h-5 w-5 text-success mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
            </svg>
            <span><strong className="text-foreground">Copy & Paste</strong> — Simply copy the component code into your project.</span>
          </li>
          <li className="flex items-start gap-3">
            <svg className="h-5 w-5 text-success mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
            </svg>
            <span><strong className="text-foreground">Glass Morphism Design</strong> — Modern, premium aesthetics with backdrop blur effects.</span>
          </li>
        </ul>
      </section>

      {/* Quick Start */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Quick Start</h2>
        <p className="text-muted-foreground">
          Get started with Auralix UI by initializing a new project using our CLI.
        </p>
        
        <div className="rounded-lg border bg-card p-4 font-mono text-sm shadow-sm md:w-fit">
          npx auralix-ui@latest init
        </div>

        <div className="flex gap-4 pt-2">
          <Link href="/docs/installation">
            <Button className="bg-gradient-to-r from-violet-500 to-purple-600 text-white">
              Installation Guide
              <svg className="ml-2 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </Button>
          </Link>
          <Link href="/components/button">
            <Button variant="outline">
              Browse Components
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
