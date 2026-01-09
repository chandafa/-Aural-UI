"use client";

import React from "react";
import { cn } from "../utils";

interface MacBookMockupProps {
  children: React.ReactNode;
  variant?: "silver" | "space-gray";
  className?: string;
}

export const MacBookMockup: React.FC<MacBookMockupProps> = ({
  children,
  variant = "space-gray",
  className,
}) => {
  const variantColors = {
    silver: "bg-gradient-to-b from-zinc-300 to-zinc-400 dark:from-zinc-500 dark:to-zinc-600",
    "space-gray": "bg-gradient-to-b from-zinc-600 to-zinc-800",
  };

  return (
    <div className={cn("relative", className)}>
      {/* Screen */}
      <div
        className={cn(
          "relative rounded-t-xl p-[10px] pb-0",
          variantColors[variant]
        )}
      >
        {/* Camera */}
        <div className="absolute top-[5px] left-1/2 -translate-x-1/2 w-2 h-2 rounded-full bg-zinc-900/50" />

        {/* Display */}
        <div className="relative w-[600px] h-[375px] bg-black rounded-[6px] overflow-hidden">
          {children}
        </div>
      </div>

      {/* Hinge */}
      <div className={cn("h-3", variantColors[variant])}>
        <div className="absolute left-1/2 -translate-x-1/2 bottom-0 w-[200px] h-1 bg-zinc-400/20 rounded-b-sm" />
      </div>

      {/* Base */}
      <div
        className={cn(
          "relative h-3 rounded-b-xl -mt-1",
          variantColors[variant],
          "shadow-lg shadow-black/30"
        )}
        style={{
          width: "calc(100% + 30px)",
          marginLeft: "-15px",
        }}
      >
        {/* Notch */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[60px] h-[4px] bg-zinc-600/30 rounded-b-lg" />
      </div>
    </div>
  );
};
