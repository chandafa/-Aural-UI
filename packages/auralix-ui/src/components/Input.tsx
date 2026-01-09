import { forwardRef, type InputHTMLAttributes } from "react";
import { cn } from "../utils";

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  error?: boolean;
  inputSize?: "sm" | "md" | "lg";
  variant?: "line" | "box" | "floating";
}

const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ className, error, inputSize = "md", variant = "box", disabled, ...props }, ref) => {
    return (
      <div className="relative w-full">
        <input
          ref={ref}
          disabled={disabled}
          placeholder={variant === "floating" ? " " : props.placeholder}
          className={cn(
            "w-full text-foreground transition-all placeholder:text-muted-foreground focus:outline-none disabled:cursor-not-allowed disabled:opacity-50",
            // Variant: Box (Default)
            variant === "box" && "rounded-[2rem] border bg-background/50 backdrop-blur-sm focus:ring-2 focus:ring-violet-500/50 focus:ring-offset-2",
            variant === "box" && (!error ? "border-border" : "border-destructive focus:ring-destructive"),
            
            // Variant: Line (Underline)
            variant === "line" && "rounded-none border-b-2 border-border bg-transparent px-0 focus:border-violet-500",
            variant === "line" && error && "border-destructive",

            // Variant: Floating (Material-like)
            variant === "floating" && "peer rounded-lg border bg-background px-4 pt-4 pb-1 focus:ring-2 focus:ring-violet-500/20",
            variant === "floating" && (!error ? "border-border" : "border-destructive"),

            {
              "h-8 text-sm": inputSize === "sm" && variant !== "line",
              "h-10 text-sm": inputSize === "md" && variant !== "line",
              "h-12 text-base": inputSize === "lg" && variant !== "line",
              "py-1 text-sm": variant === "line", // Line variant needs less padding
            },
            variant === "box" && { "px-4": true },
            className
          )}
          {...props}
        />
        {variant === "floating" && props.placeholder && (
          <label className="pointer-events-none absolute left-4 top-4 origin-[0] -translate-y-2.5 scale-75 transform text-sm text-muted-foreground duration-200 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:-translate-y-2.5 peer-focus:scale-75 peer-focus:text-violet-500">
            {props.placeholder}
          </label>
        )}
      </div>
    );
  }
);

Input.displayName = "Input";

export { Input };
