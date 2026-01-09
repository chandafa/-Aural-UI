import { cn } from "@/lib/utils";

export interface AlertProps {
  children: React.ReactNode;
  variant?: "success" | "error" | "warning" | "info";
  design?: "standard" | "solid" | "left-accent";
  title?: string;
  icon?: boolean;
  className?: string;
}

const icons = {
  success: (
    <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
    </svg>
  ),
  error: (
    <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
    </svg>
  ),
  warning: (
    <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
    </svg>
  ),
  info: (
    <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
  ),
};

// ... icons ...

export function Alert({
  children,
  variant = "info",
  design = "standard", // Visual style
  title,
  icon = true,
  className,
}: AlertProps) {
  return (
    <div
      role="alert"
      className={cn(
        "flex gap-3 p-4 backdrop-blur-sm transition-all duration-300",
        {
          // Base Colors (Severity)
          "text-success": variant === "success",
          "text-destructive": variant === "error",
          "text-warning": variant === "warning",
          "text-info": variant === "info",

          // Design: Standard (Bordered + Soft Background)
          "rounded-[2rem] border": design === "standard",
          "border-success/30 bg-success/10": design === "standard" && variant === "success",
          "border-destructive/30 bg-destructive/10": design === "standard" && variant === "error",
          "border-warning/30 bg-warning/10": design === "standard" && variant === "warning",
          "border-info/30 bg-info/10": design === "standard" && variant === "info",

          // Design: Solid (Filled)
          "rounded-[2rem] text-white shadow-lg": design === "solid",
          "bg-success": design === "solid" && variant === "success",
          "bg-destructive": design === "solid" && variant === "error",
          "bg-warning": design === "solid" && variant === "warning",
          "bg-info": design === "solid" && variant === "info",

          // Design: Left Accent (Minimal)
          "bg-white dark:bg-zinc-900 border-l-4 rounded-r-lg shadow-sm border-t-0 border-b-0 border-r-0": design === "left-accent",
          "border-success": design === "left-accent" && variant === "success",
          "border-destructive": design === "left-accent" && variant === "error",
          "border-warning": design === "left-accent" && variant === "warning",
          "border-info": design === "left-accent" && variant === "info",
        },
        className
      )}
    >
      {icon && <div className={cn("flex-shrink-0", design === "solid" ? "text-white" : "")}>{icons[variant]}</div>}
      <div className="flex-1">
        {title && <div className="mb-1 font-semibold">{title}</div>}
        <div className="text-sm opacity-90">{children}</div>
      </div>
    </div>
  );
}
