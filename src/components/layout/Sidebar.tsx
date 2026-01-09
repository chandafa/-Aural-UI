"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { cn } from "@/lib/utils";
import { useTheme } from "@/context/ThemeContext";
import { CommandMenu } from "@/components/layout/CommandMenu";

import { docsConfig } from "@/config/docs";

const gettingStarted = docsConfig.gettingStarted;
const frameworkGuides = docsConfig.frameworkGuides;
const components = docsConfig.components;
const templates = docsConfig.templates;
const animations = docsConfig.animations;

export function Sidebar() {
  const pathname = usePathname();
  const { theme, toggleTheme } = useTheme();
  const [isOpen, setIsOpen] = useState(false);
  const [isCommandOpen, setIsCommandOpen] = useState(false);
  const [componentsOpen, setComponentsOpen] = useState(true);
  const [frameworksOpen, setFrameworksOpen] = useState(true);
  const [templatesOpen, setTemplatesOpen] = useState(true);
  const [animationsOpen, setAnimationsOpen] = useState(true);

  return (
    <>
      {/* Mobile menu button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-4 right-4 z-50 flex h-12 w-12 items-center justify-center rounded-xl bg-foreground text-background shadow-lg md:hidden"
        aria-label="Toggle menu"
      >
        {isOpen ? (
          <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        ) : (
          <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        )}
      </button>

      {/* Mobile overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/50 backdrop-blur-sm md:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside
        className={cn(
          "fixed left-0 top-0 z-40 flex h-screen w-64 flex-col border-r border-border bg-background transition-transform duration-300",
          isOpen ? "translate-x-0" : "-translate-x-full md:translate-x-0"
        )}
      >
        {/* Logo */}
        <div className="flex h-16 items-center border-b border-border px-6">
          <Link href="/" className="flex items-center gap-2 group">
            <div className="flex h-8 w-8 items-center justify-center rounded-xl bg-gradient-to-br from-violet-500 to-purple-600 shadow-lg shadow-violet-500/25 transition-all group-hover:scale-110 group-hover:shadow-violet-500/40">
              <span className="text-sm font-bold text-white">A</span>
            </div>
            <span className="text-lg font-bold tracking-tight text-foreground">
              Auralix UI
            </span>
          </Link>
        </div>

        {/* Search */}
        <div className="p-3">
          <button 
            onClick={() => setIsCommandOpen(true)}
            className="flex w-full items-center gap-2 rounded-lg border border-border bg-muted/50 px-3 py-2 text-sm text-muted-foreground transition-colors hover:bg-muted"
          >
            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
            <span>Search</span>
            <kbd className="ml-auto rounded bg-muted px-1.5 py-0.5 text-xs font-medium">Ctrl K</kbd>
          </button>
        </div>

        {/* Navigation */}
        <nav className="flex-1 overflow-y-auto px-3 pb-4">
          {/* Getting Started */}
          <div className="space-y-1">
            {gettingStarted.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "flex items-center rounded-lg px-3 py-2 text-sm transition-colors",
                  pathname === item.href
                    ? "bg-primary text-primary-foreground font-medium"
                    : "text-muted-foreground hover:bg-muted hover:text-foreground"
                )}
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* Framework guides */}
          <div className="mt-4">
            <button
              onClick={() => setFrameworksOpen(!frameworksOpen)}
              className="flex w-full items-center justify-between rounded-lg px-3 py-2 text-sm text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
            >
              <span>Framework guides</span>
              <svg 
                className={cn("h-4 w-4 transition-transform", frameworksOpen && "rotate-90")} 
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor" 
                strokeWidth={2}
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
            </button>
            
            {frameworksOpen && (
              <div className="ml-3 mt-1 space-y-1 border-l border-border pl-3">
                {frameworkGuides.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={cn(
                      "flex items-center rounded-lg px-3 py-1.5 text-sm transition-colors",
                      pathname === item.href
                        ? "bg-primary text-primary-foreground font-medium"
                        : "text-muted-foreground hover:bg-muted hover:text-foreground"
                    )}
                    onClick={() => setIsOpen(false)}
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            )}
          </div>

          {/* Animations */}
          <div className="mt-4">
            <button
              onClick={() => setAnimationsOpen(!animationsOpen)}
              className="flex w-full items-center justify-between rounded-lg px-3 py-2 text-sm text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
            >
              <span>Animations</span>
              <svg 
                className={cn("h-4 w-4 transition-transform", animationsOpen && "rotate-90")} 
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor" 
                strokeWidth={2}
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
            </button>
            
            {animationsOpen && (
              <div className="ml-3 mt-1 space-y-1 border-l border-border pl-3">
                {animations.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={cn(
                      "flex items-center rounded-lg px-3 py-1.5 text-sm transition-colors",
                      pathname === item.href
                        ? "bg-primary text-primary-foreground font-medium"
                        : "text-muted-foreground hover:bg-muted hover:text-foreground"
                    )}
                    onClick={() => setIsOpen(false)}
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            )}
          </div>

          {/* Components */}
          <div className="mt-4">
            <button
              onClick={() => setComponentsOpen(!componentsOpen)}
              className="flex w-full items-center justify-between rounded-lg px-3 py-2 text-sm text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
            >
              <span>Components</span>
              <svg 
                className={cn("h-4 w-4 transition-transform", componentsOpen && "rotate-90")} 
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor" 
                strokeWidth={2}
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
            </button>
            
            {componentsOpen && (
              <div className="ml-3 mt-1 space-y-1 border-l border-border pl-3">
                {components.map((component) => (
                  <Link
                    key={component.href}
                    href={component.href}
                    className={cn(
                      "flex items-center rounded-lg px-3 py-1.5 text-sm transition-colors",
                      pathname === component.href
                        ? "bg-primary text-primary-foreground font-medium"
                        : "text-muted-foreground hover:bg-muted hover:text-foreground"
                    )}
                    onClick={() => setIsOpen(false)}
                  >
                    {component.name}
                  </Link>
                ))}
              </div>
            )}
          </div>

          {/* Templates */}
          <div className="mt-4">
            <button
              onClick={() => setTemplatesOpen(!templatesOpen)}
              className="flex w-full items-center justify-between rounded-lg px-3 py-2 text-sm text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
            >
              <span>Templates</span>
              <svg 
                className={cn("h-4 w-4 transition-transform", templatesOpen && "rotate-90")} 
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor" 
                strokeWidth={2}
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
            </button>
            
            {templatesOpen && (
              <div className="ml-3 mt-1 space-y-1 border-l border-border pl-3">
                {templates.map((template) => (
                  <Link
                    key={template.href}
                    href={template.href}
                    className={cn(
                      "flex items-center rounded-lg px-3 py-1.5 text-sm transition-colors",
                      pathname === template.href
                        ? "bg-primary text-primary-foreground font-medium"
                        : "text-muted-foreground hover:bg-muted hover:text-foreground"
                    )}
                    onClick={() => setIsOpen(false)}
                  >
                    {template.name}
                  </Link>
                ))}
              </div>
            )}
          </div>
        </nav>

        {/* Footer with theme toggle */}
        <div className="border-t border-border p-3">
          <div className="flex items-center justify-center gap-2">
            <button
              onClick={toggleTheme}
              className={cn(
                "flex h-8 w-8 items-center justify-center rounded-lg transition-colors",
                theme === "light" ? "bg-muted text-foreground" : "text-muted-foreground hover:text-foreground"
              )}
              aria-label="Light mode"
            >
              <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
              </svg>
            </button>
            <button
              onClick={toggleTheme}
              className={cn(
                "flex h-8 w-8 items-center justify-center rounded-lg transition-colors",
                theme === "dark" ? "bg-muted text-foreground" : "text-muted-foreground hover:text-foreground"
              )}
              aria-label="Dark mode"
            >
              <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
              </svg>
            </button>
          </div>
        </div>
      </aside>
      <CommandMenu open={isCommandOpen} onOpenChange={setIsCommandOpen} />
    </>
  );
}
