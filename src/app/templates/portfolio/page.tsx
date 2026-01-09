"use client";

import { cn } from "@/lib/utils";
import Link from "next/link";
import { ExternalLink, Github, Linkedin, Twitter, Mail, ArrowUpRight, Code2, Palette, Zap, Globe, ChevronRight } from "lucide-react";
import { useState } from "react";

// Sample projects data
const projects = [
  {
    id: 1,
    title: "E-Commerce Platform",
    description: "A modern e-commerce solution with real-time inventory and AI recommendations.",
    tags: ["Next.js", "TypeScript", "Stripe", "AI"],
    color: "from-purple-500 to-pink-500",
  },
  {
    id: 2,
    title: "Finance Dashboard",
    description: "Interactive dashboard for tracking investments and market analytics.",
    tags: ["React", "D3.js", "Firebase", "Tailwind"],
    color: "from-blue-500 to-cyan-500",
  },
  {
    id: 3,
    title: "Social Media App",
    description: "Real-time social platform with stories, reels, and live streaming.",
    tags: ["React Native", "Node.js", "WebSocket"],
    color: "from-orange-500 to-red-500",
  },
  {
    id: 4,
    title: "AI Writing Assistant",
    description: "GPT-powered writing tool for content creators and marketers.",
    tags: ["OpenAI", "Next.js", "Prisma", "Vercel"],
    color: "from-green-500 to-emerald-500",
  },
];

const skills = [
  { name: "React / Next.js", level: 95, icon: Code2 },
  { name: "TypeScript", level: 90, icon: Code2 },
  { name: "UI/UX Design", level: 85, icon: Palette },
  { name: "Node.js", level: 80, icon: Zap },
  { name: "Database Design", level: 75, icon: Globe },
];

const experiences = [
  {
    role: "Senior Frontend Developer",
    company: "TechCorp Inc.",
    period: "2023 - Present",
    description: "Leading the frontend team and architecting scalable UI solutions.",
  },
  {
    role: "Full Stack Developer",
    company: "StartupXYZ",
    period: "2021 - 2023",
    description: "Built and maintained multiple web applications from scratch.",
  },
  {
    role: "Junior Developer",
    company: "WebAgency",
    period: "2019 - 2021",
    description: "Developed responsive websites and e-commerce solutions.",
  },
];

export default function PortfolioTemplatePage() {
  const [activeProject, setActiveProject] = useState<number | null>(null);

  return (
    <div className="relative min-h-screen w-full bg-black text-white selection:bg-cyan-500/30 font-sans overflow-x-hidden">
      
      {/* Ambient Background */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_top_left,rgba(120,119,198,0.15),transparent_50%)]" />
        <div className="absolute bottom-0 right-0 w-full h-full bg-[radial-gradient(ellipse_at_bottom_right,rgba(56,189,248,0.1),transparent_50%)]" />
      </div>

      {/* Grid Pattern Overlay */}
      <div className="fixed inset-0 pointer-events-none z-0 opacity-[0.03]" 
           style={{ backgroundImage: 'linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)', backgroundSize: '60px 60px' }} />

      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-black/50 backdrop-blur-xl border-b border-white/5">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <Link href="#" className="text-xl font-bold tracking-tight">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">JD</span>
          </Link>
          
          <div className="hidden md:flex items-center gap-8 text-sm font-medium text-white/60">
            <a href="#about" className="hover:text-white transition-colors">About</a>
            <a href="#projects" className="hover:text-white transition-colors">Projects</a>
            <a href="#experience" className="hover:text-white transition-colors">Experience</a>
            <a href="#contact" className="hover:text-white transition-colors">Contact</a>
          </div>

          <a 
            href="#contact"
            className="px-4 py-2 rounded-full bg-white text-black text-sm font-semibold hover:bg-white/90 transition-colors"
          >
            Hire Me
          </a>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative z-10 min-h-screen flex items-center justify-center px-6">
        <div className="max-w-4xl mx-auto text-center">
          {/* Animated Avatar */}
          <div className="relative mx-auto mb-10 w-32 h-32">
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 blur-lg opacity-50 animate-pulse" />
            <div className="relative w-full h-full rounded-full bg-gradient-to-br from-cyan-400 to-blue-600 p-1">
              <div className="w-full h-full rounded-full bg-black flex items-center justify-center">
                <span className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">JD</span>
              </div>
            </div>
          </div>

          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter mb-6 leading-[1.1]">
            <span className="text-white">Creative</span>
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500">
              Developer
            </span>
          </h1>

          <p className="text-xl text-white/60 mb-10 max-w-2xl mx-auto leading-relaxed">
            I craft beautiful, performant web experiences that blend cutting-edge technology with thoughtful design.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a 
              href="#projects"
              className="group px-8 py-4 rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-semibold hover:opacity-90 transition-opacity flex items-center gap-2"
            >
              View My Work
              <ArrowUpRight className="h-5 w-5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </a>
            <a 
              href="#contact"
              className="px-8 py-4 rounded-full bg-white/5 border border-white/10 text-white font-semibold hover:bg-white/10 transition-colors"
            >
              Get In Touch
            </a>
          </div>

          {/* Social Links */}
          <div className="flex items-center justify-center gap-6 mt-16">
            {[
              { icon: Github, href: "#" },
              { icon: Linkedin, href: "#" },
              { icon: Twitter, href: "#" },
              { icon: Mail, href: "#" },
            ].map((social, i) => (
              <a
                key={i}
                href={social.href}
                className="p-3 rounded-full bg-white/5 border border-white/10 hover:bg-white/10 hover:border-cyan-500/50 transition-all"
              >
                <social.icon className="h-5 w-5 text-white/70" />
              </a>
            ))}
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
          <span className="text-xs text-white/40 uppercase tracking-widest">Scroll</span>
          <div className="w-px h-12 bg-gradient-to-b from-white/40 to-transparent" />
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="relative z-10 py-32 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center justify-between mb-16">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
                Featured Projects
              </h2>
              <p className="text-lg text-white/50">Selected work I'm proud of</p>
            </div>
            <a href="#" className="hidden md:flex items-center gap-2 text-cyan-400 hover:text-cyan-300 transition-colors">
              View All <ChevronRight className="h-4 w-4" />
            </a>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {projects.map((project) => (
              <div
                key={project.id}
                onMouseEnter={() => setActiveProject(project.id)}
                onMouseLeave={() => setActiveProject(null)}
                className="group relative rounded-3xl overflow-hidden bg-white/[0.03] border border-white/10 p-8 hover:bg-white/[0.05] hover:border-cyan-500/30 transition-all duration-500 cursor-pointer"
              >
                {/* Project Image/Gradient */}
                <div className={cn(
                  "h-48 rounded-2xl bg-gradient-to-br mb-6 flex items-center justify-center transition-transform duration-500 group-hover:scale-[1.02]",
                  project.color
                )}>
                  <span className="text-6xl font-bold text-white/30">{project.id.toString().padStart(2, '0')}</span>
                </div>

                <h3 className="text-2xl font-bold mb-2 group-hover:text-cyan-300 transition-colors">
                  {project.title}
                </h3>
                <p className="text-white/50 mb-4 line-clamp-2">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span key={tag} className="px-3 py-1 rounded-full bg-white/5 text-white/60 text-xs font-medium border border-white/10">
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Hover Arrow */}
                <div className="absolute top-8 right-8 opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="p-3 rounded-full bg-white/10 backdrop-blur-md">
                    <ExternalLink className="h-5 w-5 text-white" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="about" className="relative z-10 py-32 px-6 bg-white/[0.02]">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
                About Me
              </h2>
              <p className="text-lg text-white/60 mb-6 leading-relaxed">
                I'm a passionate developer with 5+ years of experience building modern web applications. 
                I specialize in creating seamless user experiences with clean, maintainable code.
              </p>
              <p className="text-lg text-white/60 leading-relaxed">
                When I'm not coding, you'll find me exploring new technologies, contributing to open source, 
                or mentoring aspiring developers.
              </p>
            </div>

            <div className="space-y-6">
              {skills.map((skill) => (
                <div key={skill.name} className="space-y-2">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <skill.icon className="h-4 w-4 text-cyan-400" />
                      <span className="font-medium">{skill.name}</span>
                    </div>
                    <span className="text-white/50">{skill.level}%</span>
                  </div>
                  <div className="h-2 rounded-full bg-white/10 overflow-hidden">
                    <div 
                      className="h-full rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 transition-all duration-1000"
                      style={{ width: `${skill.level}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="relative z-10 py-32 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-16 text-center">
            Experience
          </h2>

          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-cyan-500 via-blue-500 to-transparent" />

            {experiences.map((exp, i) => (
              <div key={i} className={cn(
                "relative pl-8 md:pl-0 pb-12 last:pb-0",
                i % 2 === 0 ? "md:pr-[50%] md:text-right" : "md:pl-[50%]"
              )}>
                {/* Timeline Dot */}
                <div className={cn(
                  "absolute top-0 w-4 h-4 rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 border-4 border-black",
                  "left-[-7px] md:left-1/2 md:-translate-x-1/2"
                )} />

                <div className={cn(
                  "p-6 rounded-2xl bg-white/[0.03] border border-white/10 hover:bg-white/[0.05] transition-colors",
                  i % 2 === 0 ? "md:mr-8" : "md:ml-8"
                )}>
                  <span className="text-sm text-cyan-400 font-medium">{exp.period}</span>
                  <h3 className="text-xl font-bold mt-1">{exp.role}</h3>
                  <p className="text-white/60 font-medium mt-1">{exp.company}</p>
                  <p className="text-white/50 mt-3 text-sm">{exp.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="relative z-10 py-32 px-6">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
            Let's Work Together
          </h2>
          <p className="text-lg text-white/60 mb-10">
            Have a project in mind? I'd love to hear about it. Let's create something amazing together.
          </p>

          <div className="p-8 rounded-3xl bg-white/[0.03] border border-white/10">
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input
                  type="text"
                  placeholder="Name"
                  className="w-full h-12 px-5 rounded-xl bg-white/5 border border-white/10 text-white placeholder:text-white/40 focus:outline-none focus:border-cyan-500/50 transition-colors"
                />
                <input
                  type="email"
                  placeholder="Email"
                  className="w-full h-12 px-5 rounded-xl bg-white/5 border border-white/10 text-white placeholder:text-white/40 focus:outline-none focus:border-cyan-500/50 transition-colors"
                />
              </div>
              <textarea
                placeholder="Your message..."
                rows={4}
                className="w-full px-5 py-4 rounded-xl bg-white/5 border border-white/10 text-white placeholder:text-white/40 focus:outline-none focus:border-cyan-500/50 transition-colors resize-none"
              />
              <button
                type="submit"
                className="w-full h-12 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-semibold hover:opacity-90 transition-opacity"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative z-10 border-t border-white/5 py-12">
        <div className="max-w-6xl mx-auto px-6 text-center text-white/40 text-sm">
          <p>© 2025 Portfolio Template. Built with Auralix UI.</p>
        </div>
      </footer>
    </div>
  );
}
