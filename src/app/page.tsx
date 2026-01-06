import Link from "next/link";
import { Navbar } from "@/components/layout/Navbar";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/Card";
import { CopyCommand } from "@/components/ui/CopyCommand";
import { ScrollAnimation } from "@/components/ui/ScrollAnimation";
import { SpotlightCard } from "@/components/ui/SpotlightCard";
import { BlurText } from "@/components/ui/BlurText";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background overflow-x-hidden">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative min-h-[95vh] flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8 pt-20 pb-16 overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {/* Main Blobs - Animated */}
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] sm:w-[500px] lg:w-[700px] h-[300px] sm:h-[500px] lg:h-[700px] rounded-full border border-border/20 animate-scale-up" />
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] sm:w-[700px] lg:w-[900px] h-[400px] sm:h-[700px] lg:h-[900px] rounded-full border border-border/10 animate-scale-up delay-200" />
          
          {/* Floating Accents */}
          <div className="absolute left-[10%] top-[40%] w-64 h-64 bg-violet-500/10 rounded-full blur-3xl animate-float" />
          <div className="absolute right-[10%] top-[20%] w-72 h-72 bg-fuchsia-500/10 rounded-full blur-3xl animate-float delay-700" />
          
          {/* Lines */}
          <div className="absolute left-0 top-1/2 w-1/3 h-px bg-gradient-to-r from-transparent via-violet-500/30 to-transparent animate-pulse-glow" />
          <div className="absolute right-0 top-1/3 w-1/4 h-px bg-gradient-to-l from-transparent via-purple-500/30 to-transparent animate-pulse-glow delay-300" />
          
          {/* Dots */}
          <div className="absolute bottom-1/4 left-1/4 w-2 h-2 bg-violet-500 rounded-full animate-pulse shadow-[0_0_10px_currentColor]" />
          <div className="absolute top-1/3 right-1/3 w-1.5 h-1.5 bg-purple-500 rounded-full animate-pulse delay-500 shadow-[0_0_10px_currentColor]" />
        </div>
        
        {/* Content */}
        <div className="relative z-10 max-w-5xl mx-auto text-center">
          <ScrollAnimation animation="fade-up">
            <Badge variant="info" className="mb-6 animate-pulse-glow border-violet-500/30">
              v1.0.0 — Now Available
            </Badge>
          </ScrollAnimation>
          
          <ScrollAnimation animation="fade-up" delay={100}>
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6 leading-tight">
              The UI Library for{" "}
              <span className="bg-gradient-to-r from-violet-500 via-purple-500 to-pink-500 bg-clip-text text-transparent animate-text-shimmer bg-[length:200%_auto]">
                <BlurText text="Modern Web" delay={500} />
              </span>
            </h1>
          </ScrollAnimation>
          
          <ScrollAnimation animation="fade-up" delay={200}>
            <p className="text-base sm:text-lg lg:text-xl text-muted-foreground max-w-2xl mx-auto mb-8 sm:mb-10 px-4">
              Build beautiful applications with{" "}
              <strong className="text-foreground font-semibold">high-quality components</strong>{" "}
              using the power of React and Tailwind CSS.
            </p>
          </ScrollAnimation>
          
          <ScrollAnimation animation="fade-up" delay={300}>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center mb-8 sm:mb-10 px-4">
              <Link href="/docs/installation" className="w-full sm:w-auto">
                <Button size="lg" className="w-full sm:w-auto min-w-[170px] bg-gradient-to-r from-violet-600 to-indigo-600 hover:from-violet-700 hover:to-indigo-700 border-none relative overflow-hidden group">
                  <span className="relative z-10">Get Started</span>
                  <div className="absolute inset-0 -translate-x-full group-hover:animate-shimmer bg-gradient-to-r from-transparent via-white/20 to-transparent" />
                </Button>
              </Link>
              <Link href="/components/button" className="w-full sm:w-auto">
                <Button variant="outline" size="lg" className="w-full sm:w-auto min-w-[170px] hover:border-violet-500/30">
                  Components
                </Button>
              </Link>
            </div>
          </ScrollAnimation>
          
          {/* NPM Command */}
          <ScrollAnimation animation="fade-up" delay={400}>
            <CopyCommand command="npm install auralix-ui" />
          </ScrollAnimation>
        </div>
      </section>

      {/* Stats Section - Liquid Glass */}
      <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        {/* Animated Background Blobs */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-40 -left-40 w-80 h-80 bg-violet-500/20 rounded-full blur-3xl animate-blob" />
          <div className="absolute top-20 -right-20 w-72 h-72 bg-fuchsia-500/20 rounded-full blur-3xl animate-blob-delay-2" />
          <div className="absolute -bottom-40 left-1/3 w-96 h-96 bg-purple-500/15 rounded-full blur-3xl animate-blob-delay-4" />
        </div>
        
        <div className="max-w-6xl mx-auto relative">
          <div className="liquid-glass-premium rounded-3xl p-8 sm:p-12 animate-border-glow">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 sm:gap-12 text-center">
              <ScrollAnimation animation="scale" delay={0}>
                <div className="group cursor-default">
                  <div className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gradient-animate mb-2">11+</div>
                  <div className="text-sm sm:text-base text-muted-foreground/80 font-medium">Components</div>
                </div>
              </ScrollAnimation>
              <ScrollAnimation animation="scale" delay={100}>
                <div className="group cursor-default">
                  <div className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gradient-animate mb-2">100%</div>
                  <div className="text-sm sm:text-base text-muted-foreground/80 font-medium">TypeScript</div>
                </div>
              </ScrollAnimation>
              <ScrollAnimation animation="scale" delay={200}>
                <div className="group cursor-default">
                  <div className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gradient-animate mb-2">A11y</div>
                  <div className="text-sm sm:text-base text-muted-foreground/80 font-medium">Accessible</div>
                </div>
              </ScrollAnimation>
              <ScrollAnimation animation="scale" delay={300}>
                <div className="group cursor-default">
                  <div className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gradient-animate mb-2">MIT</div>
                  <div className="text-sm sm:text-base text-muted-foreground/80 font-medium">Open Source</div>
                </div>
              </ScrollAnimation>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 sm:py-24 lg:py-32 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        {/* Gradient morphing background */}
        <div className="absolute inset-0 gradient-morphing opacity-30 pointer-events-none" />
        
        <div className="max-w-6xl mx-auto relative">
          <div className="text-center mb-16 sm:mb-20">
            <ScrollAnimation animation="fade-up">
              <Badge variant="default" className="mb-4 liquid-glass px-4 py-1.5">Features</Badge>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
                Why Choose{" "}
                <span className="text-gradient-animate">
                  Auralix UI
                </span>
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto text-sm sm:text-base">
                Built with modern best practices for the best developer experience.
              </p>
            </ScrollAnimation>
          </div>

          <div className="grid gap-6 sm:gap-8 md:grid-cols-2 lg:grid-cols-3">
            {[
              { title: "TypeScript First", desc: "Full type safety with comprehensive TypeScript definitions for excellent DX.", icon: "M13 10V3L4 14h7v7l9-11h-7z", color: "from-violet-500 to-purple-600" },
              { title: "Tailwind CSS", desc: "Styled with Tailwind CSS for maximum flexibility and easy customization.", icon: "M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01", color: "from-pink-500 to-rose-600" },
              { title: "Accessible", desc: "Built with accessibility in mind, following WAI-ARIA guidelines.", icon: "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z", color: "from-cyan-500 to-blue-600" },
              { title: "Dark Mode", desc: "Beautiful dark mode support out of the box with easy theme switching.", icon: "M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z", color: "from-emerald-500 to-teal-600" },
              { title: "Responsive", desc: "Works seamlessly on all screen sizes from mobile to desktop.", icon: "M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z", color: "from-amber-500 to-orange-600" },
              { title: "Copy & Paste", desc: "Simply copy the code into your project. No complex setup required.", icon: "M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z", color: "from-indigo-500 to-violet-600" }
            ].map((feature, i) => (
              <ScrollAnimation key={i} animation="fade-up" delay={i * 100}>
                <div className="liquid-glass-card h-full p-6 sm:p-8 rounded-2xl group cursor-default">
                  <div className={`w-12 h-12 sm:w-14 sm:h-14 rounded-xl bg-gradient-to-br ${feature.color} flex items-center justify-center text-white mb-4 sm:mb-6 group-hover:scale-110 group-hover:shadow-lg transition-all duration-300`}>
                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d={feature.icon} />
                    </svg>
                  </div>
                  <h3 className="text-lg sm:text-xl font-semibold mb-2">{feature.title}</h3>
                  <p className="text-muted-foreground text-sm sm:text-base">
                    {feature.desc}
                  </p>
                </div>
              </ScrollAnimation>
            ))}
          </div>
        </div>
      </section>

      {/* Components Preview Section */}
      <section className="py-20 sm:py-24 lg:py-32 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        {/* Animated background */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/4 -left-20 w-64 h-64 bg-emerald-500/10 rounded-full blur-3xl animate-blob-delay-2" />
          <div className="absolute bottom-1/4 -right-20 w-80 h-80 bg-cyan-500/10 rounded-full blur-3xl animate-blob" />
        </div>
        
        <div className="max-w-6xl mx-auto relative">
          <div className="text-center mb-16 sm:mb-20">
            <ScrollAnimation animation="fade-up">
              <Badge variant="success" className="mb-4 liquid-glass px-4 py-1.5">Components</Badge>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
                Beautiful <span className="text-gradient-animate">Components</span>
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto text-sm sm:text-base">
                Explore our collection of carefully crafted UI components.
              </p>
            </ScrollAnimation>
          </div>

          <div className="grid gap-6 sm:gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
            <ScrollAnimation animation="fade-up" delay={0}>
              <div className="liquid-glass-card rounded-2xl p-6 h-full hover-lift">
                <h3 className="text-lg font-semibold mb-2">Button</h3>
                <p className="text-sm text-muted-foreground mb-4">Trigger actions and events</p>
                <div className="flex flex-wrap gap-2">
                  <Button size="sm">Primary</Button>
                  <Button size="sm" variant="secondary">Secondary</Button>
                  <Button size="sm" variant="outline">Outline</Button>
                </div>
              </div>
            </ScrollAnimation>

            <ScrollAnimation animation="fade-up" delay={100}>
              <div className="liquid-glass-card rounded-2xl p-6 h-full hover-lift">
                <h3 className="text-lg font-semibold mb-2">Badge</h3>
                <p className="text-sm text-muted-foreground mb-4">Highlight status or categories</p>
                <div className="flex flex-wrap gap-2">
                  <Badge>Default</Badge>
                  <Badge variant="success">Success</Badge>
                  <Badge variant="warning">Warning</Badge>
                  <Badge variant="error">Error</Badge>
                </div>
              </div>
            </ScrollAnimation>

            <ScrollAnimation animation="fade-up" delay={200}>
              <div className="liquid-glass-card rounded-2xl p-6 h-full hover-lift">
                <h3 className="text-lg font-semibold mb-2">Card</h3>
                <p className="text-sm text-muted-foreground mb-4">Container for content</p>
                <p className="text-sm text-muted-foreground/80">
                  Cards are versatile containers that can hold any content.
                </p>
              </div>
            </ScrollAnimation>
          </div>

          <ScrollAnimation animation="fade-up" delay={300}>
            <div className="mt-12 sm:mt-16 text-center">
              <Link href="/components/button">
                <Button variant="outline" size="lg" className="liquid-glass hover-lift group border-violet-500/30">
                  View All Components
                  <svg className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </Button>
              </Link>
            </div>
          </ScrollAnimation>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 sm:py-32 lg:py-40 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        {/* Multiple animated background elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-violet-500/10 rounded-full blur-3xl animate-glow-pulse" />
          <div className="absolute -top-40 -left-40 w-80 h-80 bg-purple-500/15 rounded-full blur-3xl animate-blob" />
          <div className="absolute -bottom-40 -right-40 w-96 h-96 bg-pink-500/10 rounded-full blur-3xl animate-blob-delay-4" />
        </div>
        
        <div className="max-w-4xl mx-auto relative">
          <ScrollAnimation animation="scale">
            <div className="liquid-glass-premium rounded-3xl p-8 sm:p-12 lg:p-16 text-center animate-border-glow">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6">
                Ready to build something{" "}
                <span className="text-gradient-animate">
                  amazing
                </span>
                ?
              </h2>
              <p className="text-muted-foreground mb-8 sm:mb-10 max-w-2xl mx-auto text-sm sm:text-base">
                Get started with Auralix UI today and build beautiful, accessible applications faster than ever.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/docs/installation" className="w-full sm:w-auto">
                  <Button size="lg" className="w-full sm:w-auto min-w-[180px] bg-gradient-to-r from-violet-500 to-purple-600 hover:from-violet-600 hover:to-purple-700 shadow-xl shadow-violet-500/25 hover:shadow-violet-500/50 transition-all duration-300 animate-gradient">
                    Get Started Free
                  </Button>
                </Link>
                <Link href="https://github.com/chandafa/auralix-ui" target="_blank" className="w-full sm:w-auto">
                  <Button variant="outline" size="lg" className="w-full sm:w-auto min-w-[180px] liquid-glass hover-lift border-violet-500/30">
                    <svg className="mr-2 w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                    </svg>
                    Star on GitHub
                  </Button>
                </Link>
              </div>
            </div>
          </ScrollAnimation>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 sm:py-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        {/* Subtle background effect */}
        <div className="absolute inset-0 bg-gradient-to-t from-violet-500/5 to-transparent pointer-events-none" />
        
        <div className="max-w-6xl mx-auto relative">
          <div className="liquid-glass rounded-3xl p-8 sm:p-12 mb-8">
            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-violet-500 to-purple-600 flex items-center justify-center text-white font-bold shadow-lg shadow-violet-500/25">
                    A
                  </div>
                  <span className="font-bold text-lg">Auralix UI</span>
                </div>
                <p className="text-sm text-muted-foreground">
                  Modern UI component library for React applications.
                </p>
              </div>
              <div>
                <h4 className="font-semibold mb-4 text-sm uppercase tracking-wider text-muted-foreground">Documentation</h4>
                <ul className="space-y-3 text-sm">
                  <li><Link href="/docs/introduction" className="hover:text-violet-400 transition-colors hover:translate-x-1 inline-block">Introduction</Link></li>
                  <li><Link href="/docs/installation" className="hover:text-violet-400 transition-colors hover:translate-x-1 inline-block">Installation</Link></li>
                  <li><Link href="/docs/theming" className="hover:text-violet-400 transition-colors hover:translate-x-1 inline-block">Theming</Link></li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-4 text-sm uppercase tracking-wider text-muted-foreground">Components</h4>
                <ul className="space-y-3 text-sm">
                  <li><Link href="/components/button" className="hover:text-violet-400 transition-colors hover:translate-x-1 inline-block">Button</Link></li>
                  <li><Link href="/components/card" className="hover:text-violet-400 transition-colors hover:translate-x-1 inline-block">Card</Link></li>
                  <li><Link href="/components/modal" className="hover:text-violet-400 transition-colors hover:translate-x-1 inline-block">Modal</Link></li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-4 text-sm uppercase tracking-wider text-muted-foreground">Connect</h4>
                <ul className="space-y-3 text-sm">
                  <li><Link href="https://github.com/chandafa/auralix-ui" className="hover:text-violet-400 transition-colors hover:translate-x-1 inline-flex items-center gap-2">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd"/></svg>
                    GitHub
                  </Link></li>
                  <li><Link href="https://twitter.com/chandafa" className="hover:text-violet-400 transition-colors hover:translate-x-1 inline-flex items-center gap-2">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25h6.8l4.713 6.231 5.477-6.231Zm-1.161 17.52h1.833L7.084 4.126H5.117L17.083 19.77Z"/></svg>
                    Twitter
                  </Link></li>
                  <li><Link href="https://discord.com/channels/1151652211615616522/1151652211615616523" className="hover:text-violet-400 transition-colors hover:translate-x-1 inline-flex items-center gap-2">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028 14.09 14.09 0 0 0 1.226-1.994.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418Z"/></svg>
                    Discord
                  </Link></li>
                </ul>
              </div>
            </div>
          </div>
          <div className="text-center text-sm text-muted-foreground">
            <p>Built with ❤️ using Next.js, TypeScript, and Tailwind CSS.</p>
            <p className="mt-2">© {new Date().getFullYear()} Auralix UI. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
