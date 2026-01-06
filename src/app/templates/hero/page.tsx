"use client";

import { NeonButton } from "@/components/ui/NeonButton";
import { GlassCard } from "@/components/ui/GlassCard";
import { AnimatedGradientText } from "@/components/ui/AnimatedGradientText";
import { BorderBeam } from "@/components/ui/BorderBeam";
import { Meteors } from "@/components/ui/MeteorMeteors";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { useState } from "react";

export default function HeroTemplatePage() {
  return (
    <div className="relative min-h-screen w-full overflow-hidden bg-black text-white selection:bg-purple-500/30">
      {/* Ambient Background */}
      <div className="absolute inset-0 pointer-events-none">
         <div className="absolute top-[-10%] left-[-10%] h-[500px] w-[500px] rounded-full bg-purple-600/20 blur-[100px]" />
         <div className="absolute bottom-[-10%] right-[-10%] h-[500px] w-[500px] rounded-full bg-blue-600/20 blur-[100px]" />
      </div>

      <Meteors number={20} />

      {/* Glass Navbar */}
      <nav className="fixed top-6 left-1/2 -translate-x-1/2 z-50 w-[90%] max-w-5xl rounded-full border border-white/10 bg-white/5 backdrop-blur-xl shadow-2xl px-6 py-3 flex items-center justify-between">
        <div className="flex items-center gap-2">
            <div className="h-8 w-8 rounded-full bg-gradient-to-br from-purple-500 to-blue-500" />
            <span className="font-bold tracking-tight">Auralix</span>
        </div>
        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-white/70">
            <Link href="#" className="hover:text-white transition-colors">Features</Link>
            <Link href="#" className="hover:text-white transition-colors">Pricing</Link>
            <Link href="#" className="hover:text-white transition-colors">About</Link>
            <Link href="#" className="hover:text-white transition-colors">Contact</Link>
        </div>
        <div className="flex items-center gap-4">
            <button className="text-sm font-medium text-white/70 hover:text-white transition-colors">Log in</button>
            <button className="bg-white text-black px-4 py-1.5 rounded-full text-sm font-semibold hover:bg-white/90 transition-colors">
                Sign up
            </button>
        </div>
      </nav>

      {/* Hero Section */}
      <main className="relative z-10 flex flex-col items-center justify-center pt-40 pb-20 px-4">
        
        {/* Badge */}
        <AnimatedGradientText className="mb-8">
            <span className="inline-block rounded-full px-4 py-1.5 text-sm font-medium bg-white/5 border border-white/10 backdrop-blur-md">
                ✨ Introducing Auralix 2.0
            </span>
        </AnimatedGradientText>

        {/* Heading */}
        <h1 className="text-center text-6xl md:text-8xl font-bold tracking-tighter bg-gradient-to-br from-white via-white/90 to-white/50 bg-clip-text text-transparent mb-6 max-w-4xl mx-auto leading-[1.1]">
            Build better <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400">
                Interfaces.
            </span>
        </h1>

        {/* Subheading */}
        <p className="text-center text-lg md:text-xl text-white/60 max-w-2xl mx-auto mb-12 leading-relaxed">
            A collection of beautiful, reusable, and accessible UI components built with React, TypeScript, and Tailwind CSS.
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6 mb-24">
            <NeonButton variant="violet" neonSize="lg">
                Get Started
            </NeonButton>
            <NeonButton variant="cyan" neonSize="lg" className="bg-transparent border border-white/10 hover:bg-white/5">
                View GitHub
            </NeonButton>
        </div>

        {/* Floating Cards (Demo) */}
        <div className="w-full max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 px-4">
            <GlassCard intensity="low" className="p-8 rounded-[2rem] border-white/10 bg-white/5 h-[300px] flex flex-col justify-between group cursor-pointer hover:bg-white/10 transition-colors">
                 <div className="h-12 w-12 rounded-2xl bg-gradient-to-br from-pink-500 to-rose-500 mb-4" />
                 <div>
                    <h3 className="text-2xl font-bold mb-2">Flexible</h3>
                    <p className="text-white/60">Fully customizable components that fit your brand's unique style.</p>
                </div>
            </GlassCard>
             <GlassCard intensity="medium" className="relative p-8 rounded-[2rem] border-white/10 bg-white/5 h-[300px] flex flex-col justify-between group cursor-pointer hover:bg-white/10 transition-colors overflow-hidden">
                 <BorderBeam size={150} duration={8} delay={9} />
                 <div className="h-12 w-12 rounded-2xl bg-gradient-to-br from-purple-500 to-indigo-500 mb-4" />
                 <div>
                    <h3 className="text-2xl font-bold mb-2">Animated</h3>
                    <p className="text-white/60">Smooth animations and micro-interactions powered by Framer Motion.</p>
                </div>
            </GlassCard>
             <GlassCard intensity="high" className="p-8 rounded-[2rem] border-white/10 bg-white/5 h-[300px] flex flex-col justify-between group cursor-pointer hover:bg-white/10 transition-colors">
                 <div className="h-12 w-12 rounded-2xl bg-gradient-to-br from-blue-500 to-cyan-500 mb-4" />
                 <div>
                    <h3 className="text-2xl font-bold mb-2">Modern</h3>
                    <p className="text-white/60">Built on the latest tech stack including Next.js 14 and Tailwind CSS.</p>
                </div>
            </GlassCard>
        </div>

      </main>
    </div>
  );
}
