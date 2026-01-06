"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import { useTheme } from "@/context/ThemeContext";
import { CommandMenu } from "@/components/layout/CommandMenu";
import { docsConfig } from "@/config/docs";

const navItems = docsConfig.gettingStarted.concat([
  { name: "Components", href: "/components/button" }
]);

export function Navbar() {
  const pathname = usePathname();
  const { theme, toggleTheme } = useTheme();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isCommandOpen, setIsCommandOpen] = useState(false);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Floating Dock Navbar - Glass */}
      <header className="fixed top-4 left-1/2 -translate-x-1/2 z-50 w-[95%] max-w-3xl">
        <div
          className={cn(
            "flex items-center justify-between rounded-[2rem] transition-all duration-500",
            // Padding added as requested
            "px-6 py-3",
            // Glass effect - Lighter in dark mode (Frosted Glass)
            "bg-white/60 dark:bg-white/5",
            "backdrop-blur-2xl",
            "border border-white/20 dark:border-white/10",
            "shadow-[0_8px_32px_rgba(0,0,0,0.1)] dark:shadow-[0_8px_32px_rgba(0,0,0,0.3)]"
          )}
        >
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group">
            <div className="flex h-8 w-8 items-center justify-center rounded-xl bg-gradient-to-br from-violet-500 to-purple-600 shadow-lg shadow-violet-500/25 transition-all group-hover:scale-110 group-hover:shadow-violet-500/40">
              <span className="text-sm font-bold text-white">A</span>
            </div>
            <span className="hidden sm:inline text-lg font-bold tracking-tight text-foreground">
              Auralix UI
            </span>
          </Link>

          {/* Right Actions */}
          <div className="flex items-center gap-1.5">
            {/* Search Button (Desktop) */}
            <button 
              onClick={() => setIsCommandOpen(true)}
              className="hidden lg:flex h-9 items-center gap-2 rounded-full px-3 text-sm text-muted-foreground bg-muted/50 hover:bg-muted border border-border/50 transition-all"
            >
              <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
              <span className="hidden xl:inline">Search...</span>
              <kbd className="hidden xl:inline-flex h-5 items-center gap-1 rounded-md bg-muted px-1.5 font-mono text-[10px] text-muted-foreground border border-border/50">
                ⌘K
              </kbd>
            </button>

            {/* GitHub */}
            <Link
              href="https://github.com/chandafa/auralix-ui"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:inline-flex h-9 w-9 items-center justify-center rounded-full text-muted-foreground bg-muted/50 hover:bg-muted border border-border/50 transition-all"
              aria-label="GitHub"
            >
              <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
              </svg>
            </Link>

            {/* Theme Toggle */}
            <button
              onClick={toggleTheme}
              className="h-9 w-9 inline-flex items-center justify-center rounded-full text-muted-foreground bg-muted/50 hover:bg-muted border border-border/50 transition-all"
              aria-label="Toggle theme"
            >
              {theme === "dark" ? (
                <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              ) : (
                <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                </svg>
              )}
            </button>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden h-9 w-9 inline-flex items-center justify-center rounded-full text-muted-foreground bg-muted/50 hover:bg-muted border border-border/50 transition-all"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Menu"
            >
              {isMobileMenuOpen ? (
                <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu Dropdown - Liquid Glass */}
        {isMobileMenuOpen && (
          <div 
            className={cn(
              "md:hidden mt-2 mx-2 rounded-[1.5rem] backdrop-blur-3xl overflow-hidden animate-in slide-in-from-top-2 duration-300",
              theme === "dark" 
                ? "bg-zinc-900/95 border border-white/[0.08] shadow-[0_8px_32px_rgba(0,0,0,0.5)]" 
                : "bg-white border border-black/[0.05] shadow-2xl"
            )}
          >
            <nav className="p-2 space-y-1">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cn(
                    "block px-4 py-3 rounded-xl text-sm font-medium transition-all duration-200",
                    pathname.startsWith(item.href)
                      ? (theme === "dark" 
                          ? "bg-zinc-800 text-white font-semibold" 
                          : "bg-zinc-100 text-zinc-900 font-semibold")
                      : (theme === "dark"
                          ? "text-zinc-400 hover:bg-zinc-800/50 hover:text-white"
                          : "text-zinc-600 hover:bg-zinc-50 hover:text-zinc-900")
                  )}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <div className={cn(
                "pt-2 mt-2 border-t",
                theme === "dark" ? "border-white/[0.05]" : "border-zinc-100"
              )}>
                <Link
                  href="https://github.com/chandafa/auralix-ui"
                  target="_blank"
                  className={cn(
                    "flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium transition-all duration-200",
                    theme === "dark"
                      ? "text-zinc-400 hover:bg-zinc-800/50 hover:text-white"
                      : "text-zinc-600 hover:bg-zinc-50 hover:text-zinc-900"
                  )}
                >
                  <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                    <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                  </svg>
                  GitHub
                </Link>
              </div>
            </nav>
          </div>
        )}
      </header>
      <CommandMenu open={isCommandOpen} onOpenChange={setIsCommandOpen} />
    </>
  );
}
