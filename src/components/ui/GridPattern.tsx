"use client";

import React from "react";
import { cn } from "@/lib/utils";

interface GridPatternProps {
  size?: number;
  className?: string;
  strokeDasharray?: string;
  squares?: [number, number][];
  fade?: boolean;
}

export const GridPattern: React.FC<GridPatternProps> = ({
  size = 40,
  className,
  strokeDasharray = "0",
  squares,
  fade = true,
}) => {
  const id = React.useId();

  return (
    <svg
      className={cn(
        "absolute inset-0 h-full w-full pointer-events-none",
        fade && "[mask-image:radial-gradient(ellipse_at_center,white,transparent_80%)]",
        className
      )}
    >
      <defs>
        <pattern
          id={id}
          width={size}
          height={size}
          patternUnits="userSpaceOnUse"
        >
          <path
            d={`M ${size} 0 L 0 0 0 ${size}`}
            fill="none"
            stroke="currentColor"
            strokeWidth="1"
            strokeDasharray={strokeDasharray}
            className="text-border/40 dark:text-zinc-800"
          />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill={`url(#${id})`} />
      {squares && (
        <svg className="absolute inset-0 h-full w-full">
          {squares.map(([x, y], index) => (
            <rect
              key={index}
              x={x * size}
              y={y * size}
              width={size - 1}
              height={size - 1}
              className="fill-[#007AFF]/10 dark:fill-[#0A84FF]/10"
            />
          ))}
        </svg>
      )}
    </svg>
  );
};
