"use client";

import React from "react";
import { cn } from "@/lib/utils";

interface TagProps {
  children: React.ReactNode;
  variant?: "default" | "primary" | "success" | "warning" | "error";
  size?: "sm" | "md" | "lg";
  removable?: boolean;
  onRemove?: () => void;
  className?: string;
}

export const Tag: React.FC<TagProps> = ({
  children,
  variant = "default",
  size = "md",
  removable = false,
  onRemove,
  className,
}) => {
  const variantClasses = {
    default: "bg-muted/50 text-foreground dark:bg-zinc-800",
    primary: "bg-[#007AFF]/10 text-[#007AFF] dark:bg-[#0A84FF]/10 dark:text-[#0A84FF]",
    success: "bg-emerald-500/10 text-emerald-600 dark:bg-emerald-500/10 dark:text-emerald-400",
    warning: "bg-amber-500/10 text-amber-600 dark:bg-amber-500/10 dark:text-amber-400",
    error: "bg-red-500/10 text-red-600 dark:bg-red-500/10 dark:text-red-400",
  };

  const sizeClasses = {
    sm: "text-xs px-2 py-0.5 gap-1",
    md: "text-sm px-2.5 py-1 gap-1.5",
    lg: "text-sm px-3 py-1.5 gap-2",
  };

  const iconSizes = {
    sm: "w-3 h-3",
    md: "w-3.5 h-3.5",
    lg: "w-4 h-4",
  };

  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full font-medium transition-colors",
        variantClasses[variant],
        sizeClasses[size],
        className
      )}
    >
      {children}
      {removable && (
        <button
          type="button"
          onClick={onRemove}
          className="opacity-60 hover:opacity-100 transition-opacity"
        >
          <svg
            className={iconSizes[size]}
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      )}
    </span>
  );
};

// Tag Group for managing multiple tags
interface TagGroupProps {
  children: React.ReactNode;
  className?: string;
}

export const TagGroup: React.FC<TagGroupProps> = ({ children, className }) => {
  return <div className={cn("flex flex-wrap gap-2", className)}>{children}</div>;
};
