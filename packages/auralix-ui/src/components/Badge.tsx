import { cn } from "../utils";

export interface BadgeProps {
  children: React.ReactNode;
  variant?: "default" | "success" | "warning" | "error" | "info";
  size?: "sm" | "md";
  className?: string;
  design?: "solid" | "soft" | "outline";
}

export function Badge({
  children,
  variant = "default",
  size = "md",
  className,
  design = "solid",
}: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full font-medium transition-colors border border-transparent",
        // Solid Design (Default)
        design === "solid" && {
          "bg-muted text-foreground": variant === "default",
          "bg-success/20 text-success": variant === "success",
          "bg-warning/20 text-warning": variant === "warning",
          "bg-destructive/20 text-destructive": variant === "error",
          "bg-info/20 text-info": variant === "info",
        },
        // Soft Design
        design === "soft" && {
           "bg-muted/50 text-foreground/80": variant === "default",
           "bg-green-500/10 text-green-600 dark:text-green-400": variant === "success",
           "bg-yellow-500/10 text-yellow-600 dark:text-yellow-400": variant === "warning",
           "bg-red-500/10 text-red-600 dark:text-red-400": variant === "error",
           "bg-blue-500/10 text-blue-600 dark:text-blue-400": variant === "info",
        },
        // Outline Design
        design === "outline" && "bg-transparent border-current",
        design === "outline" && {
           "text-foreground border-border": variant === "default",
           "text-success border-success/50": variant === "success",
           "text-warning border-warning/50": variant === "warning",
           "text-destructive border-destructive/50": variant === "error",
           "text-info border-info/50": variant === "info",
        },

        {
          "px-2 py-0.5 text-xs": size === "sm",
          "px-2.5 py-1 text-sm": size === "md",
        },
        className
      )}
    >
      {children}
    </span>
  );
}
