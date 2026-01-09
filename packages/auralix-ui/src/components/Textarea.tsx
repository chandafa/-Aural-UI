import { forwardRef, type TextareaHTMLAttributes } from "react";
import { cn } from "../utils";

export interface TextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  error?: boolean;
  variant?: "default" | "ghost" | "terminal";
}

const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className, error, variant = "default", disabled, ...props }, ref) => {
    return (
      <textarea
        ref={ref}
        disabled={disabled}
        className={cn(
          "flex min-h-[80px] w-full px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 transition-all",
          // Default: Boxed (matches original style)
          variant === "default" && "rounded-[2rem] border bg-background/50 px-4 py-3 text-foreground backdrop-blur-sm",
          variant === "default" && (!error ? "border-border" : "border-destructive focus:ring-destructive"),

          // Ghost: Minimal
          variant === "ghost" && "rounded-lg border-transparent bg-transparent hover:bg-muted/50 focus:bg-background focus:border-input",
          
          // Terminal: Code style
          variant === "terminal" && "rounded-none border-zinc-700 bg-black/90 text-green-400 font-mono placeholder:text-zinc-600 focus:ring-green-500/50",

          className
        )}
        {...props}
      />
    );
  }
);

Textarea.displayName = "Textarea";

export { Textarea };
