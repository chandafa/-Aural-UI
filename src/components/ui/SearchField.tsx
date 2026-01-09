"use client";

import React from "react";
import { cn } from "@/lib/utils";

interface SearchFieldProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "onChange" | "size"> {
  value?: string;
  onChange?: (value: string) => void;
  onSearch?: (value: string) => void;
  placeholder?: string;
  size?: "sm" | "md" | "lg";
  showClearButton?: boolean;
  loading?: boolean;
  className?: string;
}

export const SearchField = React.forwardRef<HTMLInputElement, SearchFieldProps>(
  (
    {
      value,
      onChange,
      onSearch,
      placeholder = "Search...",
      size = "md",
      showClearButton = true,
      loading = false,
      className,
      ...props
    },
    ref
  ) => {
    const [internalValue, setInternalValue] = React.useState("");
    const controlledValue = value !== undefined ? value : internalValue;

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      const newValue = e.target.value;
      if (value === undefined) {
        setInternalValue(newValue);
      }
      onChange?.(newValue);
    };

    const handleClear = () => {
      if (value === undefined) {
        setInternalValue("");
      }
      onChange?.("");
    };

    const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
      if (e.key === "Enter") {
        onSearch?.(controlledValue);
      }
    };

    const sizeClasses = {
      sm: "h-8 text-sm pl-8 pr-8",
      md: "h-10 text-sm pl-10 pr-10",
      lg: "h-12 text-base pl-12 pr-12",
    };

    const iconSizes = {
      sm: "w-3.5 h-3.5",
      md: "w-4 h-4",
      lg: "w-5 h-5",
    };

    const iconPositions = {
      sm: "left-2.5",
      md: "left-3",
      lg: "left-4",
    };

    const clearPositions = {
      sm: "right-2",
      md: "right-3",
      lg: "right-4",
    };

    return (
      <div className={cn("relative", className)}>
        {/* Search Icon */}
        <div
          className={cn(
            "absolute top-1/2 -translate-y-1/2 text-muted-foreground pointer-events-none",
            iconPositions[size]
          )}
        >
          <svg
            className={iconSizes[size]}
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
        </div>

        <input
          ref={ref}
          type="text"
          value={controlledValue}
          onChange={handleChange}
          onKeyDown={handleKeyDown}
          placeholder={placeholder}
          className={cn(
            sizeClasses[size],
            "w-full rounded-xl border border-border/50 bg-muted/30",
            "placeholder:text-muted-foreground/60",
            "focus:outline-none focus:ring-2 focus:ring-[#007AFF]/30 focus:border-[#007AFF]",
            "transition-all duration-200",
            "dark:bg-zinc-900/50 dark:border-zinc-800 dark:focus:ring-[#0A84FF]/30 dark:focus:border-[#0A84FF]"
          )}
          {...props}
        />

        {/* Clear/Loading Button */}
        <div
          className={cn(
            "absolute top-1/2 -translate-y-1/2 flex items-center",
            clearPositions[size]
          )}
        >
          {loading ? (
            <div
              className={cn(
                iconSizes[size],
                "border-2 border-muted-foreground/30 border-t-[#007AFF] rounded-full animate-spin"
              )}
            />
          ) : (
            showClearButton &&
            controlledValue && (
              <button
                type="button"
                onClick={handleClear}
                className="text-muted-foreground/60 hover:text-muted-foreground transition-colors"
              >
                <svg
                  className={iconSizes[size]}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            )
          )}
        </div>
      </div>
    );
  }
);

SearchField.displayName = "SearchField";
