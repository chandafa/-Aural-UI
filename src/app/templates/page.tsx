"use client";

import { docsConfig } from "@/config/docs";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { ExternalLink, Eye, Code2, Layout, LayoutDashboard, FileText, Briefcase } from "lucide-react";
import { useState } from "react";

const templates = docsConfig.templates;

// Icon mapping for templates
const templateIcons: Record<string, any> = {
  "Landing Page": Layout,
  "Dashboard": LayoutDashboard,
  "Blog": FileText,
  "Portfolio": Briefcase,
};

// Code snippets for each template
const codeSnippets: Record<string, string> = {
  "Landing Page": `// Landing Page Template
import { NeonButton } from "@/components/ui/NeonButton";
import { GlassCard } from "@/components/ui/GlassCard";
import { Meteors } from "@/components/ui/MeteorMeteors";

export default function LandingPage() {
  return (
    <div className="relative min-h-screen bg-black">
      <Meteors number={20} />
      <nav className="fixed top-6 left-1/2 ...">
        {/* Glass Navbar */}
      </nav>
      <main className="pt-40 pb-20">
        <h1 className="text-6xl font-bold">
          Build better Interfaces.
        </h1>
        <NeonButton variant="violet">
          Get Started
        </NeonButton>
      </main>
    </div>
  );
}`,
  "Dashboard": `// Dashboard Template
import { GlassCard } from "@/components/ui/GlassCard";
import { DollarSign, Users, CreditCard } from "lucide-react";

export default function Dashboard() {
  return (
    <div className="min-h-screen bg-[#0a0a0a]">
      <aside className="w-64 bg-white/5 backdrop-blur-2xl">
        <SidebarItem icon={Activity} label="Overview" />
        <SidebarItem icon={Users} label="Customers" />
      </aside>
      <main className="flex-1 p-8">
        <div className="grid grid-cols-4 gap-6">
          <StatCard title="Revenue" value="$45,231" />
          <StatCard title="Users" value="+2350" />
        </div>
      </main>
    </div>
  );
}`,
  "Blog": `// Blog Template
import { GlassCard } from "@/components/ui/GlassCard";

export default function Blog() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900">
      <header className="border-b border-white/10">
        <h1 className="text-3xl font-bold">My Blog</h1>
      </header>
      <main className="max-w-6xl mx-auto py-12">
        <article className="prose prose-invert">
          <h2>Featured Post</h2>
          <p>Your content here...</p>
        </article>
        <div className="grid grid-cols-3 gap-6">
          {posts.map(post => (
            <PostCard key={post.id} {...post} />
          ))}
        </div>
      </main>
    </div>
  );
}`,
  "Portfolio": `// Portfolio Template
import { GlassCard } from "@/components/ui/GlassCard";
import { NeonButton } from "@/components/ui/NeonButton";

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-black text-white">
      <section className="h-screen flex items-center">
        <h1 className="text-7xl font-bold">
          Creative Developer
        </h1>
        <NeonButton>View Work</NeonButton>
      </section>
      <section className="py-20">
        <h2 className="text-4xl mb-12">Projects</h2>
        <div className="grid grid-cols-2 gap-8">
          {projects.map(project => (
            <ProjectCard key={project.id} {...project} />
          ))}
        </div>
      </section>
    </div>
  );
}`,
};

export default function TemplatesPage() {
  const [activeCode, setActiveCode] = useState<string | null>(null);
  const [copiedCode, setCopiedCode] = useState<string | null>(null);

  const copyCode = (templateName: string) => {
    navigator.clipboard.writeText(codeSnippets[templateName]);
    setCopiedCode(templateName);
    setTimeout(() => setCopiedCode(null), 2000);
  };

  return (
    <div className="min-h-screen">
      {/* Header */}
      <div className="mb-12">
        <h1 className="text-4xl font-bold tracking-tight text-foreground mb-4">
          Templates
        </h1>
        <p className="text-lg text-muted-foreground max-w-2xl">
          Beautiful, ready-to-use templates built with Auralix UI components. 
          Use them as a starting point for your next project.
        </p>
      </div>

      {/* Templates Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {templates.map((template) => {
          const Icon = templateIcons[template.name] || Layout;
          const isCodeOpen = activeCode === template.name;

          return (
            <div
              key={template.name}
              className="group relative rounded-2xl border border-border bg-card overflow-hidden transition-all duration-300 hover:border-primary/50 hover:shadow-xl hover:shadow-primary/5"
            >
              {/* Preview Card Header */}
              <div className="relative h-48 bg-gradient-to-br from-muted/50 to-muted overflow-hidden">
                {/* Decorative Background */}
                <div className="absolute inset-0 opacity-50">
                  <div className="absolute top-4 left-4 h-24 w-24 rounded-full bg-primary/20 blur-2xl" />
                  <div className="absolute bottom-4 right-4 h-32 w-32 rounded-full bg-violet-500/20 blur-2xl" />
                </div>
                
                {/* Template Icon */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="relative">
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-violet-500/20 rounded-3xl blur-xl transform group-hover:scale-110 transition-transform duration-300" />
                    <div className="relative flex h-20 w-20 items-center justify-center rounded-2xl bg-gradient-to-br from-primary to-violet-600 shadow-lg shadow-primary/25">
                      <Icon className="h-10 w-10 text-white" />
                    </div>
                  </div>
                </div>

                {/* Overlay on hover */}
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100">
                  <Link
                    href={template.href}
                    className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 flex items-center gap-2 px-4 py-2 rounded-full bg-white text-black text-sm font-medium hover:bg-white/90"
                  >
                    <Eye className="h-4 w-4" />
                    Live Preview
                  </Link>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <h3 className="text-xl font-semibold text-foreground mb-1">
                      {template.name}
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      {template.description}
                    </p>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex flex-wrap items-center gap-3 mt-4">
                  <Link
                    href={template.href}
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-primary text-primary-foreground text-sm font-medium hover:bg-primary/90 transition-colors"
                  >
                    <Eye className="h-4 w-4" />
                    Preview
                  </Link>
                  <button
                    onClick={() => setActiveCode(isCodeOpen ? null : template.name)}
                    className={cn(
                      "inline-flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-colors",
                      isCodeOpen
                        ? "bg-primary/10 text-primary"
                        : "bg-muted text-foreground hover:bg-muted/80"
                    )}
                  >
                    <Code2 className="h-4 w-4" />
                    Code
                  </button>
                  <a
                    href={template.repository}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-muted text-foreground text-sm font-medium hover:bg-muted/80 transition-colors"
                  >
                    <ExternalLink className="h-4 w-4" />
                    Repository
                  </a>
                </div>

                {/* Code Preview */}
                {isCodeOpen && (
                  <div className="mt-6 relative">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-xs font-medium text-muted-foreground">
                        Example Code
                      </span>
                      <button
                        onClick={() => copyCode(template.name)}
                        className="text-xs px-2 py-1 rounded bg-muted hover:bg-muted/80 text-foreground transition-colors"
                      >
                        {copiedCode === template.name ? "Copied!" : "Copy"}
                      </button>
                    </div>
                    <div className="relative rounded-lg bg-[#0d1117] border border-white/10 overflow-hidden">
                      <pre className="p-4 overflow-x-auto text-sm">
                        <code className="text-[#c9d1d9] font-mono">
                          {codeSnippets[template.name]}
                        </code>
                      </pre>
                    </div>
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </div>

      {/* Coming Soon Section */}
      <div className="mt-16 text-center py-12 rounded-2xl border border-dashed border-border bg-muted/30">
        <h3 className="text-xl font-semibold text-foreground mb-2">
          More Templates Coming Soon
        </h3>
        <p className="text-muted-foreground mb-4">
          We're working on more beautiful templates. Stay tuned!
        </p>
        <div className="flex items-center justify-center gap-4 text-sm text-muted-foreground">
          <span className="px-3 py-1 rounded-full bg-muted">E-commerce</span>
          <span className="px-3 py-1 rounded-full bg-muted">SaaS</span>
          <span className="px-3 py-1 rounded-full bg-muted">Documentation</span>
          <span className="px-3 py-1 rounded-full bg-muted">Agency</span>
        </div>
      </div>
    </div>
  );
}
