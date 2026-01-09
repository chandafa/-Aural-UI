"use client";

import React from "react";
import { cn } from "@/lib/utils";

interface SpinnerProps {
  size?: "xs" | "sm" | "md" | "lg" | "xl";
  color?: "default" | "primary" | "white";
  className?: string;
}

const sizeClasses = {
  xs: "w-3 h-3 border",
  sm: "w-4 h-4 border-[1.5px]",
  md: "w-6 h-6 border-2",
  lg: "w-8 h-8 border-2",
  xl: "w-12 h-12 border-[3px]",
};

const colorClasses = {
  default: "border-muted-foreground/30 border-t-muted-foreground",
  primary: "border-[#007AFF]/30 border-t-[#007AFF] dark:border-[#0A84FF]/30 dark:border-t-[#0A84FF]",
  white: "border-white/30 border-t-white",
};

export const Spinner: React.FC<SpinnerProps> = ({
  size = "md",
  color = "primary",
  className,
}) => {
  return (
    <div
      className={cn(
        sizeClasses[size],
        colorClasses[color],
        "rounded-full animate-spin",
        className
      )}
      role="status"
      aria-label="Loading"
    />
  );
};

// iOS-style Activity Indicator
interface ActivityIndicatorProps {
  size?: "sm" | "md" | "lg";
  color?: "default" | "primary" | "white";
  className?: string;
}

export const ActivityIndicator: React.FC<ActivityIndicatorProps> = ({
  size = "md",
  color = "default",
  className,
}) => {
  const sizes = {
    sm: { container: 16, line: 2, length: 4 },
    md: { container: 24, line: 2.5, length: 5 },
    lg: { container: 36, line: 3, length: 7 },
  };

  const colors = {
    default: "fill-muted-foreground",
    primary: "fill-[#007AFF] dark:fill-[#0A84FF]",
    white: "fill-white",
  };

  const { container, line, length } = sizes[size];
  const lines = 8;

  return (
    <svg
      width={container}
      height={container}
      viewBox={`0 0 ${container} ${container}`}
      className={cn("animate-ios-spinner", colors[color], className)}
      role="status"
      aria-label="Loading"
    >
      {Array.from({ length: lines }).map((_, i) => {
        const angle = (i * 360) / lines;
        const opacity = (i + 1) / lines;
        return (
          <rect
            key={i}
            x={container / 2 - line / 2}
            y={2}
            width={line}
            height={length}
            rx={line / 2}
            opacity={opacity}
            transform={`rotate(${angle} ${container / 2} ${container / 2})`}
          />
        );
      })}
    </svg>
  );
};

// Add CSS animation for iOS spinner
const spinnerStyles = `
@keyframes ios-spinner {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}
.animate-ios-spinner {
  animation: ios-spinner 0.8s steps(8) infinite;
}
`;

// Inject styles
if (typeof document !== "undefined") {
  const styleId = "auralix-spinner-styles";
  if (!document.getElementById(styleId)) {
    const style = document.createElement("style");
    style.id = styleId;
    style.textContent = spinnerStyles;
    document.head.appendChild(style);
  }
}
