// "use client";

import React, { useState, useEffect, useMemo, useCallback } from "react";
import { cn } from "../utils";
// Removed Next.js dependencies

export interface CommandItem {
  category: string;
  name: string;
  href?: string;
  icon?: React.ReactNode;
  onSelect?: () => void;
}

export interface CommandMenuProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  items?: CommandItem[];
  placeholder?: string;
}

export function CommandMenu({ 
  open, 
  onOpenChange, 
  items = [], 
  placeholder = "Type a command or search..." 
}: CommandMenuProps) {
  const [query, setQuery] = useState("");

  useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        onOpenChange(!open);
      }
    };
    document.addEventListener("keydown", down);
    return () => document.removeEventListener("keydown", down);
  }, [onOpenChange, open]);

  const filteredItems = useMemo(() => {
    if (!query) return [];
    
    return items.filter((item) =>
      item.name.toLowerCase().includes(query.toLowerCase())
    );
  }, [query, items]);

  const runCommand = useCallback((command: () => void) => {
    onOpenChange(false);
    command();
  }, [onOpenChange]);

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center pt-[15vh]">
      <div 
        className="fixed inset-0 bg-black/40 backdrop-blur-sm transition-opacity" 
        onClick={() => onOpenChange(false)}
      />
      <div className={cn(
        "relative w-full max-w-lg overflow-hidden transition-all duration-300",
        "rounded-[2rem]",
        "backdrop-blur-xl",
        "animate-in fade-in-0 zoom-in-95 slide-in-from-top-2",
        // Standard Dark Mode Classes
        "bg-white/80 dark:bg-zinc-900/80",
        "border border-white/20 dark:border-white/10",
        "shadow-2xl dark:shadow-[0_8px_32px_rgba(0,0,0,0.5)]"
      )}>
        <div className={cn(
          "flex items-center border-b px-4 pt-1",
          "border-black/5 dark:border-white/5"
        )}>
          <svg 
            className="mr-2 h-4 w-4 shrink-0 opacity-50 text-black dark:text-white" 
            fill="none" 
            viewBox="0 0 24 24" 
            stroke="currentColor" 
            strokeWidth={2}
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
          <input
            className={cn(
              "h-11 flex-1 rounded-md bg-transparent py-3 text-sm outline-none disabled:cursor-not-allowed disabled:opacity-50",
              "text-black dark:text-white placeholder:text-zinc-500"
            )}
            placeholder={placeholder}
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            autoFocus
          />
        </div>
        
        <div className="max-h-[300px] overflow-y-auto p-2">
          {query === "" ? (
             <div className="py-6 text-center text-sm text-zinc-500 dark:text-zinc-400">
               Type to search...
             </div>
          ) : filteredItems.length === 0 ? (
            <div className="py-6 text-center text-sm text-zinc-500 dark:text-zinc-400">
              No results found.
            </div>
          ) : (
            <div className="space-y-1">
              {filteredItems.map((item, index) => (
                <button
                  key={index}
                  onClick={() => runCommand(() => {
                    item.onSelect?.();
                    // If href exists, user should handle navigation via onSelect or wrapping
                    if (item.href) window.location.href = item.href; 
                  })}
                  className={cn(
                    "flex w-full items-center rounded-md px-2 py-2 text-sm transition-colors",
                    "text-zinc-600 dark:text-zinc-300",
                    "hover:bg-black/5 dark:hover:bg-white/5",
                    "hover:text-black dark:hover:text-white"
                  )}
                >
                  <div className={cn(
                    "flex h-6 w-6 shrink-0 items-center justify-center rounded-full mr-2",
                    "bg-black/5 dark:bg-white/10 text-black/50 dark:text-white/50"
                  )}>
                    {item.icon || "#"}
                  </div>
                  <span>{item.name}</span>
                  <span className="ml-auto text-xs text-zinc-400 dark:text-zinc-500">
                    {item.category}
                  </span>
                </button>
              ))}
            </div>
          )}
        </div>
        
        <div className={cn(
          "border-t px-4 py-2 text-[10px] text-zinc-500 dark:text-zinc-400 flex items-center justify-end gap-2",
          "border-black/5 dark:border-white/5 bg-black/5 dark:bg-white/5"
        )}>
           <span>Select</span> <kbd className="bg-transparent px-1.5 rounded border border-current opacity-50">↵</kbd>
           <span>Close</span> <kbd className="bg-transparent px-1.5 rounded border border-current opacity-50">Esc</kbd>
        </div>
      </div>
    </div>
  );
}
