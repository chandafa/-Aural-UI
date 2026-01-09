"use client";

import React from "react";
import { cn } from "@/lib/utils";

interface StatusDotProps {
  status: "online" | "offline" | "away" | "busy" | "default";
  size?: "sm" | "md" | "lg";
  pulse?: boolean;
  className?: string;
}

export const StatusDot: React.FC<StatusDotProps> = ({
  status = "default",
  size = "md",
  pulse = false,
  className,
}) => {
  const statusColors = {
    online: "bg-green-500",
    offline: "bg-zinc-400 dark:bg-zinc-600",
    away: "bg-yellow-500",
    busy: "bg-red-500",
    default: "bg-[#007AFF] dark:bg-[#0A84FF]",
  };

  const sizeClasses = {
    sm: "w-2 h-2",
    md: "w-2.5 h-2.5",
    lg: "w-3 h-3",
  };

  return (
    <span className={cn("relative inline-flex", className)}>
      <span
        className={cn(
          "rounded-full",
          sizeClasses[size],
          statusColors[status]
        )}
      />
      {pulse && status === "online" && (
        <span
          className={cn(
            "absolute inset-0 rounded-full animate-ping",
            statusColors[status],
            "opacity-75"
          )}
        />
      )}
    </span>
  );
};

// Status with label
interface StatusBadgeProps {
  status: "online" | "offline" | "away" | "busy";
  label?: string;
  size?: "sm" | "md";
  className?: string;
}

export const StatusBadge: React.FC<StatusBadgeProps> = ({
  status,
  label,
  size = "md",
  className,
}) => {
  const defaultLabels = {
    online: "Online",
    offline: "Offline",
    away: "Away",
    busy: "Do not disturb",
  };

  const displayLabel = label || defaultLabels[status];

  const sizeClasses = {
    sm: "text-xs px-2 py-0.5 gap-1.5",
    md: "text-sm px-2.5 py-1 gap-2",
  };

  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full",
        "bg-muted/50 dark:bg-zinc-800",
        sizeClasses[size],
        className
      )}
    >
      <StatusDot status={status} size="sm" />
      <span className="text-muted-foreground">{displayLabel}</span>
    </span>
  );
};
