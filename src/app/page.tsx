"use client";

import React, { useLayoutEffect, useRef } from "react";
import Link from "next/link";
import gsap from "gsap";
import { Navbar } from "@/components/layout/Navbar";
import { Button } from "@/components/ui/Button";
import { SpringButton } from "@/components/ui/SpringButton"; // Import SpringButton
import { Badge } from "@/components/ui/Badge";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/Card";
import { CopyCommand } from "@/components/ui/CopyCommand";
import { ScrollAnimation } from "@/components/ui/ScrollAnimation";
import { SpotlightCard } from "@/components/ui/SpotlightCard";
import { AnimeDemo } from "@/components/demos/AnimeDemo";
import { AnimeParticles } from "@/components/demos/AnimeParticles";

export default function HomePage() {
  const heroRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const descRef = useRef<HTMLParagraphElement>(null);
  const buttonsRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline();

      // Initial state
      gsap.set([titleRef.current, descRef.current, buttonsRef.current], { 
        y: 50, 
        opacity: 0 
      });

      tl.to(titleRef.current, { 
        y: 0, 
        opacity: 1, 
        duration: 1, 
        ease: "power3.out" 
      })
      .to(descRef.current, { 
        y: 0, 
        opacity: 1, 
        duration: 0.8, 
        ease: "power3.out" 
      }, "-=0.6")
      .to(buttonsRef.current, { 
        y: 0, 
        opacity: 1, 
        duration: 0.8, 
        ease: "back.out(1.7)" 
      }, "-=0.4");
      
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <div className="min-h-screen bg-background overflow-x-hidden">
      <Navbar />
      
      {/* Hero Section */}
      <section ref={heroRef} className="relative min-h-screen flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8 overflow-hidden">
        {/* Animated Grid Background */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {/* Perspective Grid */}
          <div 
            className="absolute inset-0 opacity-20"
            style={{
              backgroundImage: `
                linear-gradient(rgba(139, 92, 246, 0.3) 1px, transparent 1px),
                linear-gradient(90deg, rgba(139, 92, 246, 0.3) 1px, transparent 1px)
              `,
              backgroundSize: '60px 60px',
              transform: 'perspective(500px) rotateX(60deg)',
              transformOrigin: 'center top',
              maskImage: 'linear-gradient(to bottom, transparent, black 20%, black 80%, transparent)',
              WebkitMaskImage: 'linear-gradient(to bottom, transparent, black 20%, black 80%, transparent)',
            }}
          />
          
          {/* Animated glow orbs */}
          <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-violet-600/20 rounded-full blur-[120px] animate-blob" />
          <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-fuchsia-600/15 rounded-full blur-[100px] animate-blob-delay-2" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-purple-600/10 rounded-full blur-[150px] animate-glow-pulse" />
          
          {/* Floating particles */}
          <div className="absolute top-[20%] left-[15%] w-1 h-1 bg-violet-400 rounded-full animate-float shadow-[0_0_10px_2px_rgba(139,92,246,0.8)]" />
          <div className="absolute top-[30%] right-[20%] w-1.5 h-1.5 bg-fuchsia-400 rounded-full animate-float delay-700 shadow-[0_0_10px_2px_rgba(217,70,239,0.8)]" />
          <div className="absolute bottom-[30%] left-[25%] w-1 h-1 bg-purple-400 rounded-full animate-float delay-300 shadow-[0_0_10px_2px_rgba(168,85,247,0.8)]" />
          <div className="absolute top-[60%] right-[15%] w-0.5 h-0.5 bg-pink-400 rounded-full animate-float delay-500 shadow-[0_0_8px_2px_rgba(236,72,153,0.8)]" />
        </div>
        
        {/* Content */}
        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <ScrollAnimation animation="fade-up">
            <Badge variant="info" className="mb-8 px-4 py-1.5 text-sm font-medium border-violet-500/40 bg-violet-500/10 backdrop-blur-sm">
              ✨ v1.0.0 — Now Available
            </Badge>
          </ScrollAnimation>
          
          <div ref={titleRef} className="opacity-0">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight mb-6 leading-[1.15]">
              <span className="block text-foreground">Build Faster.</span>
              <span className="block mt-1 bg-gradient-to-r from-violet-500 via-purple-500 to-fuchsia-500 bg-clip-text text-transparent animate-gradient bg-[length:200%_auto]">
                Ship Smarter.
              </span>
            </h1>
          </div>
          
          <div ref={descRef} className="opacity-0">
            <p className="text-base sm:text-lg text-muted-foreground/80 max-w-lg mx-auto mb-8 leading-relaxed">
              Beautiful, accessible React components. Lightning-fast and ready to ship.
            </p>
          </div>
          
          <div ref={buttonsRef} className="flex flex-col sm:flex-row gap-3 justify-center mb-10 opacity-0">
            <Link href="/docs/installation" className="w-full sm:w-auto">
              <SpringButton 
                size="lg" 
                className="w-full sm:w-auto min-w-[160px] h-11 text-sm font-medium bg-gradient-to-r from-violet-600 to-purple-600 hover:from-violet-500 hover:to-purple-500 border-none shadow-[0_0_20px_rgba(139,92,246,0.3)] hover:shadow-[0_0_30px_rgba(139,92,246,0.5)] transition-shadow duration-300"
              >
                Get Started
                <svg className="ml-2 w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </SpringButton>
            </Link>
            <Link href="/components/button" className="w-full sm:w-auto">
              <Button 
                variant="outline" 
                size="lg" 
                className="w-full sm:w-auto min-w-[160px] h-11 text-sm font-medium border-border/40 hover:border-violet-500/40 hover:bg-violet-500/5 transition-all duration-300"
              >
                Browse Components
              </Button>
            </Link>
          </div>
          
          {/* NPM Command - minimal style */}
          <ScrollAnimation animation="fade-up" delay={600}>
            <div className="flex justify-center">
              <CopyCommand command="npm install auralix-ui" variant="minimal" className="border-border/40" />
            </div>
          </ScrollAnimation>
        </div>
        
        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce">
          <span className="text-xs text-muted-foreground/60 uppercase tracking-widest">Scroll</span>
          <svg className="w-5 h-5 text-muted-foreground/40" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
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

      {/* Interactive Code Showcase Section */}
      <section className="py-24 sm:py-32 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-radial from-violet-600/20 via-purple-600/10 to-transparent rounded-full blur-3xl animate-glow-pulse" />
          <div className="absolute -top-20 -right-20 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl animate-blob" />
          <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-fuchsia-500/10 rounded-full blur-3xl animate-blob-delay-4" />
        </div>
        
        <div className="max-w-6xl mx-auto relative">
          <div className="text-center mb-16">
            <ScrollAnimation animation="fade-up">
              <Badge variant="default" className="mb-4 liquid-glass px-4 py-1.5">Developer Experience</Badge>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
                Copy. Paste. <span className="text-gradient-animate">Ship.</span>
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Just copy the component code and paste it into your project. That's it.
              </p>
            </ScrollAnimation>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            {/* Code Terminal */}
            <ScrollAnimation animation="fade-up" delay={100}>
              <div className="liquid-glass-card rounded-2xl overflow-hidden border border-white/10">
                {/* Terminal Header */}
                <div className="flex items-center gap-2 px-4 py-3 border-b border-white/10 bg-black/20">
                  <div className="flex gap-1.5">
                    <div className="w-3 h-3 rounded-full bg-red-500/80" />
                    <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                    <div className="w-3 h-3 rounded-full bg-green-500/80" />
                  </div>
                  <span className="text-xs text-muted-foreground ml-2 font-mono">Button.tsx</span>
                </div>
                {/* Code Content */}
                <div className="p-6 font-mono text-sm leading-relaxed overflow-x-auto bg-black/30">
                  <pre className="text-left">
                    <code>
                      <span className="text-purple-400">import</span> <span className="text-cyan-400">{'{ Button }'}</span> <span className="text-purple-400">from</span> <span className="text-green-400">"auralix-ui"</span>{'\n\n'}
                      <span className="text-purple-400">export</span> <span className="text-purple-400">function</span> <span className="text-yellow-400">App</span>() {'{\n'}
                      {'  '}<span className="text-purple-400">return</span> ({'\n'}
                      {'    '}<span className="text-cyan-400">{'<Button'}</span>{'\n'}
                      {'      '}<span className="text-orange-400">variant</span>=<span className="text-green-400">"gradient"</span>{'\n'}
                      {'      '}<span className="text-orange-400">size</span>=<span className="text-green-400">"lg"</span>{'\n'}
                      {'      '}<span className="text-orange-400">className</span>=<span className="text-green-400">"animate-glow"</span>{'\n'}
                      {'    '}<span className="text-cyan-400">{'>'}</span>{'\n'}
                      {'      '}Get Started{'\n'}
                      {'    '}<span className="text-cyan-400">{'</Button>'}</span>{'\n'}
                      {'  '}){'\n'}
                      {'}'}
                    </code>
                  </pre>
                </div>
              </div>
            </ScrollAnimation>
            
            {/* Feature Cards */}
            <div className="space-y-4">
              <ScrollAnimation animation="fade-up" delay={200}>
                <div className="liquid-glass-card rounded-xl p-6 hover-lift group cursor-default">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-violet-500 to-purple-600 flex items-center justify-center text-white shrink-0 group-hover:scale-110 transition-transform">
                      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg mb-1">Lightning Fast</h3>
                      <p className="text-sm text-muted-foreground">Zero runtime. Pure CSS animations. No JavaScript bundle bloat.</p>
                    </div>
                  </div>
                </div>
              </ScrollAnimation>
              
              <ScrollAnimation animation="fade-up" delay={300}>
                <div className="liquid-glass-card rounded-xl p-6 hover-lift group cursor-default">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center text-white shrink-0 group-hover:scale-110 transition-transform">
                      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg mb-1">Full Control</h3>
                      <p className="text-sm text-muted-foreground">Own your code. Customize everything. No black boxes.</p>
                    </div>
                  </div>
                </div>
              </ScrollAnimation>
              
              <ScrollAnimation animation="fade-up" delay={400}>
                <div className="liquid-glass-card rounded-xl p-6 hover-lift group cursor-default">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-fuchsia-500 to-pink-600 flex items-center justify-center text-white shrink-0 group-hover:scale-110 transition-transform">
                      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg mb-1">Made with Love</h3>
                      <p className="text-sm text-muted-foreground">Crafted with attention to detail. Pixel-perfect design.</p>
                    </div>
                  </div>
                </div>
              </ScrollAnimation>
            </div>
          </div>
        </div>
      </section>

      {/* Anime.js Demo Section */}
      <AnimeDemo />

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
                <SpotlightCard className="h-full p-6 sm:p-8 cursor-default" spotlightColor={`rgba(${
                  feature.color.includes("violet") ? "139, 92, 246" :
                  feature.color.includes("pink") ? "236, 72, 153" :
                  feature.color.includes("cyan") ? "6, 182, 212" :
                  feature.color.includes("emerald") ? "16, 185, 129" :
                  feature.color.includes("amber") ? "245, 158, 11" : "99, 102, 241"
                }, 0.2)`}>
                  <div className={`w-12 h-12 sm:w-14 sm:h-14 rounded-xl bg-gradient-to-br ${feature.color} flex items-center justify-center text-white mb-4 sm:mb-6 group-hover:scale-110 group-hover:shadow-lg transition-all duration-300`}>
                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d={feature.icon} />
                    </svg>
                  </div>
                  <h3 className="text-lg sm:text-xl font-semibold mb-2">{feature.title}</h3>
                  <p className="text-muted-foreground text-sm sm:text-base">
                    {feature.desc}
                  </p>
                </SpotlightCard>
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
              <SpotlightCard className="p-6 h-full hover-lift" spotlightColor="rgba(16, 185, 129, 0.15)">
                <h3 className="text-lg font-semibold mb-2">Button</h3>
                <p className="text-sm text-muted-foreground mb-4">Trigger actions and events</p>
                <div className="flex flex-wrap gap-2">
                  <Button size="sm">Primary</Button>
                  <Button size="sm" variant="secondary">Secondary</Button>
                  <Button size="sm" variant="outline">Outline</Button>
                </div>
              </SpotlightCard>
            </ScrollAnimation>

            <ScrollAnimation animation="fade-up" delay={100}>
              <SpotlightCard className="p-6 h-full hover-lift" spotlightColor="rgba(245, 158, 11, 0.15)">
                <h3 className="text-lg font-semibold mb-2">Badge</h3>
                <p className="text-sm text-muted-foreground mb-4">Highlight status or categories</p>
                <div className="flex flex-wrap gap-2">
                  <Badge>Default</Badge>
                  <Badge variant="success">Success</Badge>
                  <Badge variant="warning">Warning</Badge>
                  <Badge variant="error">Error</Badge>
                </div>
              </SpotlightCard>
            </ScrollAnimation>

            <ScrollAnimation animation="fade-up" delay={200}>
              <SpotlightCard className="p-6 h-full hover-lift" spotlightColor="rgba(6, 182, 212, 0.15)">
                <h3 className="text-lg font-semibold mb-2">Card</h3>
                <p className="text-sm text-muted-foreground mb-4">Container for content</p>
                <p className="text-sm text-muted-foreground/80">
                  Cards are versatile containers that can hold any content.
                </p>
              </SpotlightCard>
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

      {/* Testimonials Section */}
      <section className="py-20 sm:py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-violet-500/5 to-transparent pointer-events-none" />
        
        <div className="max-w-6xl mx-auto relative">
          <div className="text-center mb-16">
            <ScrollAnimation animation="fade-up">
              <Badge variant="default" className="mb-4 liquid-glass px-4 py-1.5">Testimonials</Badge>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
                Loved by <span className="text-gradient-animate">Developers</span>
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Join thousands of developers building beautiful interfaces with Auralix UI.
              </p>
            </ScrollAnimation>
          </div>
          
          {/* Testimonials Grid */}
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                name: "Alex Chen",
                role: "Frontend Developer",
                avatar: "A",
                content: "Auralix UI has completely transformed how I build UIs. The glassmorphism effects are stunning and the components are incredibly well-designed.",
                color: "from-violet-500 to-purple-600"
              },
              {
                name: "Sarah Johnson",
                role: "Full Stack Engineer",
                avatar: "S",
                content: "Finally, a component library that looks beautiful out of the box. The dark mode support is perfect and animations are buttery smooth.",
                color: "from-pink-500 to-rose-600"
              },
              {
                name: "Mike Rodriguez",
                role: "UI/UX Designer",
                avatar: "M",
                content: "As a designer, I appreciate the attention to detail. Every component feels premium and the TypeScript support is excellent.",
                color: "from-cyan-500 to-blue-600"
              },
              {
                name: "Emily Watson",
                role: "Startup Founder",
                avatar: "E",
                content: "We shipped our MVP in record time thanks to Auralix UI. The components are production-ready and our users love the interface.",
                color: "from-emerald-500 to-teal-600"
              },
              {
                name: "David Kim",
                role: "Senior Developer",
                avatar: "D",
                content: "The best React component library I've used. Copy-paste setup, no complex configs, and it just works with Tailwind CSS v4.",
                color: "from-amber-500 to-orange-600"
              },
              {
                name: "Lisa Park",
                role: "Tech Lead",
                avatar: "L",
                content: "Our team adopted Auralix UI and productivity went up significantly. The consistent design system makes collaboration effortless.",
                color: "from-indigo-500 to-violet-600"
              }
            ].map((testimonial, i) => (
              <ScrollAnimation key={i} animation="fade-up" delay={i * 100}>
                <div className="liquid-glass-card rounded-2xl p-6 h-full hover-lift cursor-default">
                  <div className="flex items-center gap-3 mb-4">
                    <div className={`w-10 h-10 rounded-full bg-gradient-to-br ${testimonial.color} flex items-center justify-center text-white font-semibold text-sm`}>
                      {testimonial.avatar}
                    </div>
                    <div>
                      <div className="font-semibold text-sm">{testimonial.name}</div>
                      <div className="text-xs text-muted-foreground">{testimonial.role}</div>
                    </div>
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed">"{testimonial.content}"</p>
                  <div className="flex gap-1 mt-4">
                    {[1,2,3,4,5].map(star => (
                      <svg key={star} className="w-4 h-4 text-yellow-500" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                </div>
              </ScrollAnimation>
            ))}
          </div>
        </div>
      </section>

      {/* Tech Stack / Powered By Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden border-y border-border/30">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-sm text-muted-foreground uppercase tracking-widest">Built with & Integrates</p>
          </div>
          
          <div className="flex flex-wrap items-center justify-center gap-8 sm:gap-12 opacity-60 hover:opacity-100 transition-opacity duration-500">
            {/* React */}
            <div className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors">
              <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 9.861a2.139 2.139 0 100 4.278 2.139 2.139 0 100-4.278zm-5.992 6.394l-.472-.12C2.018 15.246 0 13.737 0 11.996s2.018-3.25 5.536-4.139l.472-.119.133.468a23.53 23.53 0 001.363 3.578l.101.213-.101.213a23.307 23.307 0 00-1.363 3.578l-.133.467zM5.317 8.95c-2.674.751-4.315 1.9-4.315 3.046 0 1.145 1.641 2.294 4.315 3.046a24.95 24.95 0 011.182-3.046A24.752 24.752 0 015.317 8.95zM18.683 8.95a24.752 24.752 0 01-1.182 3.046 24.95 24.95 0 011.182 3.046c2.674-.752 4.315-1.901 4.315-3.046 0-1.146-1.641-2.295-4.315-3.046zm.009 7.305l-.133-.468a23.357 23.357 0 00-1.364-3.577l-.101-.213.101-.213a23.42 23.42 0 001.364-3.578l.133-.468.473.119c3.517.889 5.535 2.398 5.535 4.14s-2.018 3.25-5.535 4.139l-.473.119zm-6.502-7.04a23.71 23.71 0 00-3.088-2.14l-.39-.195.202-.381c.871-1.641 1.949-3.106 3.002-4.041l.3-.269.3.269c1.053.935 2.131 2.4 3.002 4.041l.202.381-.39.195a23.71 23.71 0 00-3.088 2.14zM12 3.502c-.758.711-1.528 1.658-2.186 2.751a22.29 22.29 0 012.186 1.51 22.29 22.29 0 012.186-1.51c-.658-1.093-1.428-2.04-2.186-2.751zM12 20.498c.758-.711 1.528-1.658 2.186-2.751a22.29 22.29 0 01-2.186-1.51 22.29 22.29 0 01-2.186 1.51c.658 1.093 1.428 2.04 2.186 2.751zM6.302 6.814c-1.5 2.603-1.5 5.769 0 8.372-.476.278-1.015.614-1.556.986C2.59 13.77 2.59 10.23 4.746 7.828c.541.372 1.08.708 1.556.986zm11.396 0c1.5 2.603 1.5 5.769 0 8.372.476.278 1.015.614 1.556.986 2.156-2.402 2.156-5.942 0-8.344-.541.372-1.08.708-1.556.986z"/>
              </svg>
              <span className="font-medium">React</span>
            </div>
            
            {/* Next.js */}
            <div className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors">
              <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
                <path d="M11.572 0c-.176 0-.31.001-.358.007a19.76 19.76 0 01-.364.033C7.443.346 4.25 2.185 2.228 5.012a11.875 11.875 0 00-2.119 5.243c-.096.659-.108.854-.108 1.747s.012 1.089.108 1.748c.652 4.506 3.86 8.292 8.209 9.695.779.25 1.6.422 2.534.525.363.04 1.935.04 2.299 0 1.611-.178 2.977-.577 4.323-1.264.207-.106.247-.134.219-.158-.02-.013-.9-1.193-1.955-2.62l-1.919-2.592-2.404-3.558a338.739 338.739 0 00-2.422-3.556c-.009-.002-.018 1.579-.023 3.51-.007 3.38-.01 3.515-.052 3.595a.426.426 0 01-.206.214c-.075.037-.14.044-.495.044H7.81l-.108-.068a.438.438 0 01-.157-.171l-.05-.106.006-4.703.007-4.705.072-.092a.645.645 0 01.174-.143c.096-.047.134-.051.54-.051.478 0 .558.018.682.154.035.038 1.337 1.999 2.895 4.361a10760.433 10760.433 0 004.735 7.17l1.9 2.879.096-.063a12.317 12.317 0 002.466-2.163 11.944 11.944 0 002.824-6.134c.096-.66.108-.854.108-1.748 0-.893-.012-1.088-.108-1.747-.652-4.506-3.859-8.292-8.208-9.695a12.597 12.597 0 00-2.499-.523A33.119 33.119 0 0011.573 0zm4.069 7.217c.347 0 .408.005.486.047a.473.473 0 01.237.277c.018.06.023 1.365.018 4.304l-.006 4.218-.744-1.14-.746-1.14v-3.066c0-1.982.01-3.097.023-3.15a.478.478 0 01.233-.296c.096-.05.13-.054.5-.054z"/>
              </svg>
              <span className="font-medium">Next.js</span>
            </div>
            
            {/* TypeScript */}
            <div className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors">
              <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
                <path d="M1.125 0C.502 0 0 .502 0 1.125v21.75C0 23.498.502 24 1.125 24h21.75c.623 0 1.125-.502 1.125-1.125V1.125C24 .502 23.498 0 22.875 0zm17.363 9.75c.612 0 1.154.037 1.627.111a6.38 6.38 0 011.306.34v2.458a3.95 3.95 0 00-.643-.361 5.093 5.093 0 00-.717-.26 5.453 5.453 0 00-1.426-.2c-.3 0-.573.028-.819.086a2.1 2.1 0 00-.623.242c-.17.104-.3.229-.393.374a.888.888 0 00-.14.49c0 .196.053.373.156.529.104.156.252.304.443.444s.423.276.696.41c.273.135.582.274.926.416.47.197.892.407 1.266.628.374.222.695.473.963.753.268.279.472.598.614.957.142.359.214.776.214 1.253 0 .657-.125 1.21-.373 1.656a3.033 3.033 0 01-1.012 1.085 4.38 4.38 0 01-1.487.596c-.566.12-1.163.18-1.79.18a9.916 9.916 0 01-1.84-.164 5.544 5.544 0 01-1.512-.493v-2.63a5.033 5.033 0 003.237 1.2c.333 0 .624-.03.872-.09.249-.06.456-.144.623-.25.166-.108.29-.234.373-.38a1.023 1.023 0 00-.074-1.089 2.12 2.12 0 00-.537-.5 5.597 5.597 0 00-.807-.444 27.72 27.72 0 00-1.007-.436c-.918-.383-1.602-.852-2.053-1.405-.45-.553-.676-1.222-.676-2.005 0-.614.123-1.141.369-1.582.246-.441.58-.804 1.004-1.089a4.494 4.494 0 011.47-.629 7.536 7.536 0 011.77-.201zm-15.113.188h9.563v2.166H9.506v9.646H6.789v-9.646H3.375z"/>
              </svg>
              <span className="font-medium">TypeScript</span>
            </div>
            
            {/* Tailwind */}
            <div className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors">
              <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12.001 4.8c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624C13.666 10.618 15.027 12 18.001 12c3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C16.337 6.182 14.976 4.8 12.001 4.8zm-6 7.2c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624 1.177 1.194 2.538 2.576 5.512 2.576 3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C10.337 13.382 8.976 12 6.001 12z"/>
              </svg>
              <span className="font-medium">Tailwind</span>
            </div>
            
            {/* Framer Motion */}
            <div className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors">
              <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
                <path d="M4 0h16v8h-8zM4 8h8l8 8H4zM4 16h8v8z"/>
              </svg>
              <span className="font-medium">Framer Motion</span>
            </div>
            
            {/* Radix */}
            <div className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors">
              <svg className="w-8 h-8" viewBox="0 0 25 25" fill="none">
                <path d="M12 25C7.58173 25 4 21.4183 4 17C4 12.5817 7.58173 9 12 9V25Z" fill="currentColor"/>
                <path d="M12 0H4V8H12V0Z" fill="currentColor"/>
                <path d="M17 8C19.2091 8 21 6.20914 21 4C21 1.79086 19.2091 0 17 0C14.7909 0 13 1.79086 13 4C13 6.20914 14.7909 8 17 8Z" fill="currentColor"/>
              </svg>
              <span className="font-medium">Radix UI</span>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 sm:py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-16">
            <ScrollAnimation animation="fade-up">
              <Badge variant="default" className="mb-4 liquid-glass px-4 py-1.5">FAQ</Badge>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
                Frequently Asked <span className="text-gradient-animate">Questions</span>
              </h2>
              <p className="text-muted-foreground">
                Everything you need to know about Auralix UI.
              </p>
            </ScrollAnimation>
          </div>
          
          <ScrollAnimation animation="fade-up" delay={100}>
            <div className="space-y-4">
              {[
                {
                  q: "Is Auralix UI free to use?",
                  a: "Yes! Auralix UI is completely free and open-source under the MIT license. You can use it in personal and commercial projects without any restrictions."
                },
                {
                  q: "What frameworks does it support?",
                  a: "Auralix UI is built for React and works seamlessly with Next.js, Vite, Create React App, and any other React-based framework. It also supports Tailwind CSS v4."
                },
                {
                  q: "Do I need to install all components?",
                  a: "No! Auralix UI is tree-shakeable. You only import and bundle the components you actually use, keeping your bundle size minimal."
                },
                {
                  q: "Is it accessible?",
                  a: "Absolutely. All components follow WAI-ARIA guidelines and support keyboard navigation. We use Radix UI primitives for robust accessibility foundations."
                },
                {
                  q: "Can I customize the styling?",
                  a: "Yes! All components use Tailwind CSS classes and CSS variables for theming. You can easily customize colors, spacing, and animations to match your brand."
                }
              ].map((faq, i) => (
                <div key={i} className="liquid-glass-card rounded-2xl overflow-hidden">
                  <details className="group">
                    <summary className="flex items-center justify-between px-6 py-4 cursor-pointer list-none font-medium">
                      {faq.q}
                      <svg className="w-5 h-5 text-muted-foreground transition-transform group-open:rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </summary>
                    <div className="px-6 pb-4 text-sm text-muted-foreground">
                      {faq.a}
                    </div>
                  </details>
                </div>
              ))}
            </div>
          </ScrollAnimation>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 sm:py-32 lg:py-40 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        {/* Anime.js Particles */}
        <AnimeParticles />

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
