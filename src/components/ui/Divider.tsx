"use client";

import React from "react";
import { cn } from "@/lib/utils";

interface DividerProps {
  orientation?: "horizontal" | "vertical";
  variant?: "solid" | "dashed" | "dotted";
  label?: string;
  className?: string;
}

export const Divider: React.FC<DividerProps> = ({
  orientation = "horizontal",
  variant = "solid",
  label,
  className,
}) => {
  const variantClasses = {
    solid: "border-solid",
    dashed: "border-dashed",
    dotted: "border-dotted",
  };

  if (orientation === "vertical") {
    return (
      <div
        className={cn(
          "inline-block h-full min-h-[20px] w-px bg-border/50",
          "dark:bg-zinc-800",
          className
        )}
        role="separator"
        aria-orientation="vertical"
      />
    );
  }

  if (label) {
    return (
      <div
        className={cn("flex items-center gap-4 w-full", className)}
        role="separator"
        aria-orientation="horizontal"
      >
        <div
          className={cn(
            "flex-1 h-px border-t border-border/50",
            variantClasses[variant],
            "dark:border-zinc-800"
          )}
        />
        <span className="text-xs text-muted-foreground font-medium uppercase tracking-wider">
          {label}
        </span>
        <div
          className={cn(
            "flex-1 h-px border-t border-border/50",
            variantClasses[variant],
            "dark:border-zinc-800"
          )}
        />
      </div>
    );
  }

  return (
    <div
      className={cn(
        "w-full h-px border-t border-border/50",
        variantClasses[variant],
        "dark:border-zinc-800",
        className
      )}
      role="separator"
      aria-orientation="horizontal"
    />
  );
};
