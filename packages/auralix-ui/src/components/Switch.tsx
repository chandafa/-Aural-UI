"use client";

import * as React from "react";
import { cn } from "../utils";

interface SwitchProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  checked?: boolean;
  onCheckedChange?: (checked: boolean) => void;
  variant?: "ios" | "material" | "cyber";
}

const Switch = React.forwardRef<HTMLButtonElement, SwitchProps>(
  ({ className, checked, onCheckedChange, variant = "ios", ...props }, ref) => {
    const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
      onCheckedChange?.(!checked);
      props.onClick?.(e);
    };

    return (
      <button
        type="button"
        role="switch"
        aria-checked={checked}
        ref={ref}
        onClick={handleClick}
        className={cn(
          "peer inline-flex shrink-0 cursor-pointer items-center border-2 border-transparent transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:cursor-not-allowed disabled:opacity-50",
          // Base Sizing
          variant !== "material" && "h-6 w-11 rounded-full", // iOS & Cyber
          variant === "material" && "h-6 w-10 rounded-full", // Material
          
          // Variant: iOS (Default) - Glassy
          variant === "ios" && "backdrop-blur-md",
          variant === "ios" && (checked ? "bg-blue-500/50" : "bg-black/5 dark:bg-white/10 input"),

          // Variant: Material - Solid colors
          variant === "material" && (checked ? "bg-blue-600" : "bg-zinc-300 dark:bg-zinc-700"),

          // Variant: Cyber - Neon/Square
          variant === "cyber" && "rounded-sm border-2",
          variant === "cyber" && (checked ? "border-cyan-500 bg-cyan-950/50 shadow-[0_0_10px_rgba(6,182,212,0.5)]" : "border-zinc-700 bg-zinc-900 dark:bg-zinc-900"),

          className
        )}
        {...props}
      >
        <span
          className={cn(
            "pointer-events-none block transition-transform",
            // iOS Thumb
            variant === "ios" && "h-5 w-5 rounded-full shadow-[0_0_10px_rgba(255,255,255,0.5)] ring-0",
            variant === "ios" && (checked ? "translate-x-5 bg-white" : "translate-x-0 bg-white/70"),

            // Material Thumb
            variant === "material" && "h-4 w-4 rounded-full shadow-md transition-all duration-200",
            variant === "material" && (checked ? "translate-x-5 bg-white" : "translate-x-1 bg-white"),
            
            // Cyber Thumb
            variant === "cyber" && "h-3 w-3 rounded-none bg-cyan-500 shadow-[0_0_5px_currentColor]",
            variant === "cyber" && (checked ? "translate-x-6 opacity-100" : "translate-x-1 opacity-20")
          )}
        />
      </button>
    );
  }
);
Switch.displayName = "Switch";

export { Switch };
