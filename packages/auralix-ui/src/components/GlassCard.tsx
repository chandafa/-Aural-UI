import React, { forwardRef } from "react";
import { cn } from "../utils";

export interface GlassCardProps extends React.HTMLAttributes<HTMLDivElement> {
  intensity?: "low" | "medium" | "high";
  children: React.ReactNode;
}

export const GlassCard = forwardRef<HTMLDivElement, GlassCardProps>(
  ({ className, intensity = "medium", children, ...props }, ref) => {
    const intensities = {
      low: "bg-white/10 backdrop-blur-sm border-white/20",
      medium: "bg-white/10 backdrop-blur-md border-white/30",
      high: "bg-white/10 backdrop-blur-xl border-white/40",
    };

    return (
      <div
        ref={ref}
        className={cn(
          "rounded-xl border shadow-xl overflow-hidden relative",
          intensities[intensity],
          className
        )}
        {...props}
      >
        {/* Noise texture overlay for extra premium feel */}
        <div className="absolute inset-0 opacity-5 pointer-events-none" style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` }}></div>
        
        <div className="relative z-10 p-6">
          {children}
        </div>
      </div>
    );
  }
);

GlassCard.displayName = "GlassCard";
