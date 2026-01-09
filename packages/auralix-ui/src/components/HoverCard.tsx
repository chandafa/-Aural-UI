"use client";

import React from "react";
import { cn } from "../utils";

interface HoverCardProps {
  trigger: React.ReactNode;
  children: React.ReactNode;
  side?: "top" | "bottom" | "left" | "right";
  align?: "start" | "center" | "end";
  openDelay?: number;
  closeDelay?: number;
  className?: string;
}

export const HoverCard: React.FC<HoverCardProps> = ({
  trigger,
  children,
  side = "bottom",
  align = "center",
  openDelay = 200,
  closeDelay = 100,
  className,
}) => {
  const [isOpen, setIsOpen] = React.useState(false);
  const openTimeout = React.useRef<NodeJS.Timeout | undefined>(undefined);
  const closeTimeout = React.useRef<NodeJS.Timeout | undefined>(undefined);

  const handleMouseEnter = () => {
    if (closeTimeout.current) clearTimeout(closeTimeout.current);
    openTimeout.current = setTimeout(() => setIsOpen(true), openDelay);
  };

  const handleMouseLeave = () => {
    if (openTimeout.current) clearTimeout(openTimeout.current);
    closeTimeout.current = setTimeout(() => setIsOpen(false), closeDelay);
  };

  const sideClasses = {
    top: "bottom-full mb-3",
    bottom: "top-full mt-3",
    left: "right-full mr-3",
    right: "left-full ml-3",
  };

  const alignClasses = {
    start: side === "top" || side === "bottom" ? "left-0" : "top-0",
    center: side === "top" || side === "bottom" ? "left-1/2 -translate-x-1/2" : "top-1/2 -translate-y-1/2",
    end: side === "top" || side === "bottom" ? "right-0" : "bottom-0",
  };

  return (
    <div
      className="relative inline-block"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {trigger}

      {isOpen && (
        <div
          className={cn(
            "absolute z-50 w-80",
            "rounded-xl border border-border/50 bg-background/95 backdrop-blur-xl",
            "shadow-xl shadow-black/10 dark:shadow-black/30",
            "p-4 animate-in fade-in-0 zoom-in-95 duration-200",
            "dark:bg-zinc-900/95 dark:border-zinc-800",
            sideClasses[side],
            alignClasses[align],
            className
          )}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          {children}
        </div>
      )}
    </div>
  );
};

// Preview Card Content
interface HoverCardContentProps {
  avatar?: string;
  title: string;
  subtitle?: string;
  description?: string;
  stats?: { label: string; value: string | number }[];
}

export const HoverCardContent: React.FC<HoverCardContentProps> = ({
  avatar,
  title,
  subtitle,
  description,
  stats,
}) => {
  return (
    <div className="space-y-3">
      <div className="flex items-center gap-3">
        {avatar && (
          <img
            src={avatar}
            alt={title}
            className="w-10 h-10 rounded-full object-cover"
          />
        )}
        <div>
          <div className="font-semibold text-foreground">{title}</div>
          {subtitle && (
            <div className="text-sm text-muted-foreground">{subtitle}</div>
          )}
        </div>
      </div>
      {description && (
        <p className="text-sm text-muted-foreground">{description}</p>
      )}
      {stats && stats.length > 0 && (
        <div className="flex gap-4 pt-2 border-t border-border/50 dark:border-zinc-800">
          {stats.map((stat, index) => (
            <div key={index}>
              <div className="font-semibold text-foreground">{stat.value}</div>
              <div className="text-xs text-muted-foreground">{stat.label}</div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
