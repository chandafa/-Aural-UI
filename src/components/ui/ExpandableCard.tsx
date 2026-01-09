"use client";

import React from "react";
import { cn } from "@/lib/utils";

interface ExpandableCardProps {
  title: string;
  description?: string;
  children: React.ReactNode;
  className?: string;
  defaultExpanded?: boolean;
}

export const ExpandableCard: React.FC<ExpandableCardProps> = ({
  title,
  description,
  children,
  className,
  defaultExpanded = false,
}) => {
  const [isExpanded, setIsExpanded] = React.useState(defaultExpanded);
  const [ref, { height }] = useElementSize();

  return (
    <div
      className={cn(
        "rounded-2xl border border-border/50 bg-background/80 backdrop-blur-sm overflow-hidden",
        "transition-all duration-300 ease-out",
        "hover:shadow-lg hover:shadow-black/5",
        "dark:bg-zinc-900/80 dark:border-zinc-800",
        isExpanded && "shadow-xl shadow-black/10",
        className
      )}
    >
      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className="w-full p-5 flex items-center justify-between text-left group"
      >
        <div>
          <h3 className="font-semibold text-foreground">{title}</h3>
          {description && (
            <p className="text-sm text-muted-foreground mt-0.5">{description}</p>
          )}
        </div>
        <div
          className={cn(
            "w-8 h-8 rounded-full bg-muted/50 flex items-center justify-center",
            "transition-all duration-300",
            "group-hover:bg-[#007AFF]/10 group-hover:text-[#007AFF]",
            "dark:bg-zinc-800"
          )}
        >
          <svg
            className={cn(
              "w-4 h-4 transition-transform duration-300",
              isExpanded && "rotate-180"
            )}
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
          </svg>
        </div>
      </button>

      <div
        className="overflow-hidden transition-all duration-300 ease-out"
        style={{ height: isExpanded ? height : 0 }}
      >
        <div ref={ref} className="p-5 pt-0 border-t border-border/50 dark:border-zinc-800">
          {children}
        </div>
      </div>
    </div>
  );
};

// Hook to measure element size
function useElementSize() {
  const ref = React.useRef<HTMLDivElement>(null);
  const [size, setSize] = React.useState({ width: 0, height: 0 });

  React.useEffect(() => {
    if (!ref.current) return;

    const observer = new ResizeObserver((entries) => {
      const entry = entries[0];
      if (entry) {
        setSize({
          width: entry.contentRect.width,
          height: entry.contentRect.height,
        });
      }
    });

    observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return [ref, size] as const;
}
