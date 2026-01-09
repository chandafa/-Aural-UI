"use client";

import React from "react";
import { cn } from "../utils";

interface ShinyTextProps {
  children: string;
  shimmerWidth?: number;
  duration?: number;
  className?: string;
}

export const ShinyText: React.FC<ShinyTextProps> = ({
  children,
  shimmerWidth = 100,
  duration = 2,
  className,
}) => {
  return (
    <span
      className={cn(
        "relative inline-block bg-clip-text text-transparent",
        "bg-gradient-to-r from-foreground via-foreground/60 to-foreground",
        "bg-[length:200%_100%] animate-shimmer-text",
        className
      )}
      style={{
        backgroundSize: `${shimmerWidth}% 100%`,
        animationDuration: `${duration}s`,
      }}
    >
      {children}
    </span>
  );
};

// Glowing Shimmer Text
interface GlowingTextProps {
  children: string;
  color?: string;
  className?: string;
}

export const GlowingText: React.FC<GlowingTextProps> = ({
  children,
  color = "#007AFF",
  className,
}) => {
  return (
    <span
      className={cn(
        "relative inline-block animate-glow-pulse",
        className
      )}
      style={{
        textShadow: `0 0 10px ${color}40, 0 0 20px ${color}30, 0 0 30px ${color}20`,
      }}
    >
      {children}
    </span>
  );
};

// Gradient Animated Text
interface GradientTextProps {
  children: string;
  colors?: string[];
  duration?: number;
  className?: string;
}

export const GradientText: React.FC<GradientTextProps> = ({
  children,
  colors = ["#007AFF", "#AF52DE", "#FF2D55", "#007AFF"],
  duration = 4,
  className,
}) => {
  const gradientColors = colors.join(", ");

  return (
    <span
      className={cn(
        "inline-block bg-clip-text text-transparent bg-gradient-to-r animate-gradient-x",
        className
      )}
      style={{
        backgroundImage: `linear-gradient(90deg, ${gradientColors})`,
        backgroundSize: "300% 100%",
        animationDuration: `${duration}s`,
      }}
    >
      {children}
    </span>
  );
};

// Inject animation styles
const shinyTextStyles = `
@keyframes shimmer-text {
  0% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
}

@keyframes gradient-x {
  0%, 100% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
}

.animate-shimmer-text {
  animation: shimmer-text 2s linear infinite;
}

.animate-gradient-x {
  animation: gradient-x 4s ease infinite;
}
`;

if (typeof document !== "undefined") {
  const styleId = "auralix-shiny-text-styles";
  if (!document.getElementById(styleId)) {
    const style = document.createElement("style");
    style.id = styleId;
    style.textContent = shinyTextStyles;
    document.head.appendChild(style);
  }
}
