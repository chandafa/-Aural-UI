import React, { forwardRef } from "react";
import { cn } from "../utils";

export interface NeonButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "cyan" | "magenta" | "lime" | "violet";
  neonSize?: "sm" | "md" | "lg";
  children: React.ReactNode;
}

export const NeonButton = forwardRef<HTMLButtonElement, NeonButtonProps>(
  ({ className, variant = "cyan", neonSize = "md", children, ...props }, ref) => {
    const variants = {
      cyan: "border-cyan-400 text-cyan-400 shadow-[0_0_10px_#22d3ee] hover:shadow-[0_0_20px_#22d3ee] hover:bg-cyan-400 hover:text-black",
      magenta: "border-fuchsia-400 text-fuchsia-400 shadow-[0_0_10px_#e879f9] hover:shadow-[0_0_20px_#e879f9] hover:bg-fuchsia-400 hover:text-black",
      lime: "border-lime-400 text-lime-400 shadow-[0_0_10px_#a3e635] hover:shadow-[0_0_20px_#a3e635] hover:bg-lime-400 hover:text-black",
      violet: "border-violet-400 text-violet-400 shadow-[0_0_10px_#a78bfa] hover:shadow-[0_0_20px_#a78bfa] hover:bg-violet-400 hover:text-white",
    };

    const sizes = {
      sm: "px-3 py-1 text-sm",
      md: "px-6 py-2 text-base",
      lg: "px-8 py-3 text-lg",
    };

    return (
      <button
        ref={ref}
        className={cn(
          "relative inline-flex items-center justify-center rounded-lg border-2 bg-transparent font-bold transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none",
          variants[variant],
          sizes[neonSize],
          className
        )}
        {...props}
      >
        <span className="relative z-10 filter drop-shadow-sm">{children}</span>
        {/* Inner glow effect */}
        <div className="absolute inset-0 rounded-lg opacity-0 transition-opacity duration-300 hover:opacity-20 bg-current" />
      </button>
    );
  }
);

NeonButton.displayName = "NeonButton";
