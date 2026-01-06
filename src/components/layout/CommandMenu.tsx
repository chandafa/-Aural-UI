"use client";

import * as React from "react";
import { useRouter } from "next/navigation";
import { cn } from "@/lib/utils";
import { docsConfig } from "@/config/docs";
import { useTheme } from "@/context/ThemeContext";

interface CommandMenuProps {
  open: boolean;
  onOpenChange: (open: boolean | ((prevState: boolean) => boolean)) => void;
}

export function CommandMenu({ open, onOpenChange }: CommandMenuProps) {
  const router = useRouter();
  const [query, setQuery] = React.useState("");
  const { theme } = useTheme();

  React.useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        onOpenChange((open) => !open);
      }
    };
    document.addEventListener("keydown", down);
    return () => document.removeEventListener("keydown", down);
  }, [onOpenChange]);

  const filteredItems = React.useMemo(() => {
    if (!query) return [];
    
    // Flatten all items
    const allItems = [
      ...docsConfig.gettingStarted.map(i => ({ ...i, category: "Getting Started" })),
      ...docsConfig.frameworkGuides.map(i => ({ ...i, category: "Frameworks" })),
      ...docsConfig.components.map(i => ({ ...i, category: "Components" })),
    ];

    return allItems.filter((item) =>
      item.name.toLowerCase().includes(query.toLowerCase())
    );
  }, [query]);

  const runCommand = React.useCallback((command: () => unknown) => {
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
        "rounded-[2rem]", // User requested rounded 2rem
        "backdrop-blur-xl", // Blur effect
        "animate-in fade-in-0 zoom-in-95 slide-in-from-top-2",
        // Conditional styling based on theme variable
        theme === "dark"
          ? "bg-zinc-900/80 border border-white/10 shadow-[0_8px_32px_rgba(0,0,0,0.5)]"
          : "bg-white/80 border border-white/20 shadow-2xl"
      )}>
        <div className={cn(
          "flex items-center border-b px-4 pt-1",
          theme === "dark" ? "border-white/5" : "border-black/5"
        )} cmd-input-wrapper="">
          <svg className={cn("mr-2 h-4 w-4 shrink-0 opacity-50", theme === "dark" ? "text-white" : "text-black")} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
          <input
            className={cn(
              "h-11 flex-1 rounded-md bg-transparent py-3 text-sm outline-none disabled:cursor-not-allowed disabled:opacity-50",
              theme === "dark" ? "text-white placeholder:text-zinc-500" : "text-black placeholder:text-zinc-500"
            )}
            placeholder="Type a command or search..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            autoFocus
          />
        </div>
        
        <div className="max-h-[300px] overflow-y-auto p-2">
          {query === "" ? (
             <div className="py-6 text-center text-sm text-muted-foreground">
               Type to search...
             </div>
          ) : filteredItems.length === 0 ? (
            <div className="py-6 text-center text-sm text-muted-foreground">
              No results found.
            </div>
          ) : (
            <div className="space-y-1">
              {filteredItems.map((item) => (
                <button
                  key={item.href}
                  onClick={() => runCommand(() => router.push(item.href))}
                  className={cn(
                    "flex w-full items-center rounded-md px-2 py-2 text-sm transition-colors",
                    theme === "dark" 
                      ? "text-zinc-300 hover:bg-white/5 hover:text-white" 
                      : "text-zinc-600 hover:bg-black/5 hover:text-black"
                  )}
                >
                  <div className={cn(
                    "flex h-6 w-6 shrink-0 items-center justify-center rounded-full mr-2",
                    theme === "dark" ? "bg-white/10 text-white/50" : "bg-black/5 text-black/50"
                  )}>
                    #
                  </div>
                  <span>{item.name}</span>
                  <span className="ml-auto text-xs text-muted-foreground">
                    {item.category}
                  </span>
                </button>
              ))}
            </div>
          )}
        </div>
        
        <div className={cn(
          "border-t px-4 py-2 text-[10px] text-muted-foreground flex items-center justify-end gap-2",
          theme === "dark" ? "border-white/5 bg-white/5" : "border-black/5 bg-black/5"
        )}>
           <span>Select</span> <kbd className="bg-transparent px-1.5 rounded border border-current opacity-50">↵</kbd>
           <span>Close</span> <kbd className="bg-transparent px-1.5 rounded border border-current opacity-50">Esc</kbd>
        </div>
      </div>
    </div>
  );
}
