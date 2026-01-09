"use client";

import React from "react";
import { cn } from "@/lib/utils";

interface DotPatternProps {
  size?: number;
  radius?: number;
  className?: string;
  fade?: boolean;
}

export const DotPattern: React.FC<DotPatternProps> = ({
  size = 24,
  radius = 1,
  className,
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
          <circle
            cx={size / 2}
            cy={size / 2}
            r={radius}
            className="fill-border/50 dark:fill-zinc-700"
          />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill={`url(#${id})`} />
    </svg>
  );
};

// Animated Dot Pattern
interface AnimatedDotPatternProps {
  size?: number;
  radius?: number;
  className?: string;
}

export const AnimatedDotPattern: React.FC<AnimatedDotPatternProps> = ({
  size = 30,
  radius = 1.5,
  className,
}) => {
  const [mousePosition, setMousePosition] = React.useState({ x: 0, y: 0 });
  const containerRef = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      setMousePosition({
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
      });
    };

    const container = containerRef.current;
    if (container) {
      container.addEventListener("mousemove", handleMouseMove);
    }

    return () => {
      if (container) {
        container.removeEventListener("mousemove", handleMouseMove);
      }
    };
  }, []);

  const cols = Math.ceil(1920 / size);
  const rows = Math.ceil(1080 / size);

  return (
    <div
      ref={containerRef}
      className={cn("absolute inset-0 overflow-hidden pointer-events-none", className)}
    >
      <svg className="w-full h-full">
        {Array.from({ length: rows }).map((_, row) =>
          Array.from({ length: cols }).map((_, col) => {
            const x = col * size + size / 2;
            const y = row * size + size / 2;
            const distance = Math.sqrt(
              Math.pow(x - mousePosition.x, 2) + Math.pow(y - mousePosition.y, 2)
            );
            const maxDistance = 150;
            const scale = Math.max(0, 1 - distance / maxDistance);
            const dotRadius = radius + scale * 2;
            const opacity = 0.2 + scale * 0.6;

            return (
              <circle
                key={`${row}-${col}`}
                cx={x}
                cy={y}
                r={dotRadius}
                className="fill-[#007AFF] dark:fill-[#0A84FF] transition-all duration-100"
                style={{ opacity }}
              />
            );
          })
        )}
      </svg>
    </div>
  );
};
