import { forwardRef, type SelectHTMLAttributes } from "react";
import { cn } from "@/lib/utils";

export interface SelectOption {
  value: string;
  label: string;
  disabled?: boolean;
}

export interface SelectProps extends Omit<SelectHTMLAttributes<HTMLSelectElement>, "size"> {
  options: SelectOption[];
  placeholder?: string;
  error?: boolean;
  selectSize?: "sm" | "md" | "lg";
  variant?: "standard" | "minimal" | "combobox"; // combobox style visual only for native select
}

const Select = forwardRef<HTMLSelectElement, SelectProps>(
  ({ className, options, placeholder, error, selectSize = "md", variant = "standard", disabled, ...props }, ref) => {
    return (
      <div className="relative w-full">
        <select
          ref={ref}
          disabled={disabled}
          className={cn(
            "w-full appearance-none transition-all text-foreground focus:outline-none disabled:cursor-not-allowed disabled:opacity-50",
            
            // Standard
            variant === "standard" && "rounded-[2rem] border bg-background/50 backdrop-blur-sm focus:ring-2 focus:ring-violet-500/50 focus:ring-offset-2",
            variant === "standard" && (!error ? "border-border" : "border-destructive focus:ring-destructive"),
            
            // Minimal (No visible border until hover/focus)
            variant === "minimal" && "rounded-lg bg-transparent hover:bg-muted/50 focus:bg-muted focus:ring-0 border-b border-transparent focus:border-violet-500",
            
            // Combobox (Simulated look)
            variant === "combobox" && "rounded-md border bg-background shadow-sm hover:bg-accent/50 focus:ring-1 focus:ring-violet-500",
            variant === "combobox" && (!error ? "border-input" : "border-destructive"),

            {
              "h-8 text-sm": selectSize === "sm",
              "h-10 text-sm": selectSize === "md",
              "h-12 text-base": selectSize === "lg",
            },
            variant !== "minimal" && "px-4",
            variant === "minimal" && "px-2",
            "bg-[url('data:image/svg+xml;charset=UTF-8,%3csvg%20xmlns%3d%22http%3a%2f%2fwww.w3.org%2f2000%2fsvg%22%20width%3d%2224%22%20height%3d%2224%22%20viewBox%3d%220%200%2024%2024%22%20fill%3d%22none%22%20stroke%3d%22%2371717a%22%20stroke-width%3d%222%22%20stroke-linecap%3d%22round%22%20stroke-linejoin%3d%22round%22%3e%3cpolyline%20points%3d%226%209%2012%2015%2018%209%22%3e%3c%2fpolyline%3e%3c%2fsvg%3e')] bg-[length:1.25rem] bg-[right_0.5rem_center] bg-no-repeat pr-10",
            className
          )}
          {...props}
        >
        {placeholder && (
          <option value="" disabled>
            {placeholder}
          </option>
        )}
        {options.map((option) => (
          <option key={option.value} value={option.value} disabled={option.disabled}>
            {option.label}
          </option>
        ))}
      </select>
      </div>
    );
  }
);

Select.displayName = "Select";

export { Select };
