// "use client"; // Already at top

import React, { useState } from "react";
import { cn } from "../utils";
// Removed next/link dependency for framework agnostic support

export interface NavItem {
  name: string;
  href: string;
}

export interface NavbarProps {
  logo?: React.ReactNode;
  items?: NavItem[];
  rightAction?: React.ReactNode;
  className?: string;
  mobileMenuOpen?: boolean;
  onMobileMenuToggle?: (isOpen: boolean) => void;
  /**
   * Optional custom Link component (e.g. Next.js Link, React Router Link)
   * Defaults to standard <a> tag
   */
  LinkComponent?: React.ElementType; 
}

export function Navbar({
  logo,
  items = [],
  rightAction,
  className,
  mobileMenuOpen: controlledMobileMenuOpen,
  onMobileMenuToggle,
  LinkComponent = "a", // Default to anchor tag
}: NavbarProps) {
  const [internalMobileMenuOpen, setInternalMobileMenuOpen] = useState(false);
  const isMobileMenuOpen = controlledMobileMenuOpen ?? internalMobileMenuOpen;
  const toggleMobileMenu = () => {
    const newState = !isMobileMenuOpen;
    setInternalMobileMenuOpen(newState);
    onMobileMenuToggle?.(newState);
  };
  
  const Link = LinkComponent as any;

  return (
    <>
      <header className={cn("fixed top-4 left-1/2 -translate-x-1/2 z-50 w-[95%] max-w-3xl", className)}>
        <div
          className={cn(
            "flex items-center justify-between rounded-[2rem] transition-all duration-500",
            "px-6 py-3",
            // Glass effect - Standard Tailwind Dark Mode
            "bg-white/60 dark:bg-white/5",
            "backdrop-blur-2xl",
            "border border-white/20 dark:border-white/10",
            "shadow-[0_8px_32px_rgba(0,0,0,0.1)] dark:shadow-[0_8px_32px_rgba(0,0,0,0.3)]"
          )}
        >
          {/* Logo */}
          <div className="flex items-center gap-2 group">
             {logo || (
                <span className="text-lg font-bold tracking-tight text-zinc-900 dark:text-white">
                  Brand
                </span>
             )}
          </div>

          {/* Right Actions */}
          <div className="flex items-center gap-1.5">
             {rightAction}

            {/* Mobile Menu Button */}
            <button
              className="md:hidden h-9 w-9 inline-flex items-center justify-center rounded-full text-zinc-500 dark:text-zinc-400 bg-black/5 dark:bg-white/10 hover:bg-black/10 dark:hover:bg-white/20 transition-all"
              onClick={toggleMobileMenu}
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

        {/* Mobile Menu Dropdown */}
        {isMobileMenuOpen && (
          <div 
            className={cn(
              "md:hidden mt-2 mx-2 rounded-[1.5rem] backdrop-blur-3xl overflow-hidden animate-in slide-in-from-top-2 duration-300",
              // Use standard dark classes
              "bg-white dark:bg-zinc-900/95",
              "border border-black/[0.05] dark:border-white/[0.08]",
              "shadow-2xl dark:shadow-[0_8px_32px_rgba(0,0,0,0.5)]"
            )}
          >
            <nav className="p-2 space-y-1">
              {items.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cn(
                    "block px-4 py-3 rounded-xl text-sm font-medium transition-all duration-200",
                    "text-zinc-600 dark:text-zinc-400 hover:bg-zinc-50 dark:hover:bg-zinc-800/50 hover:text-zinc-900 dark:hover:text-white"
                  )}
                  onClick={() => {
                     setInternalMobileMenuOpen(false);
                     onMobileMenuToggle?.(false);
                  }}
                >
                  {item.name}
                </Link>
              ))}
            </nav>
          </div>
        )}
      </header>
    </>
  );
}
