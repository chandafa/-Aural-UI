"use client";

import React from "react";
import { cn } from "@/lib/utils";

interface NumberFieldProps {
  value?: number;
  defaultValue?: number;
  onChange?: (value: number) => void;
  min?: number;
  max?: number;
  step?: number;
  disabled?: boolean;
  size?: "sm" | "md" | "lg";
  className?: string;
  showControls?: boolean;
  label?: string;
}

export const NumberField = React.forwardRef<HTMLInputElement, NumberFieldProps>(
  (
    {
      value,
      defaultValue = 0,
      onChange,
      min = -Infinity,
      max = Infinity,
      step = 1,
      disabled = false,
      size = "md",
      className,
      showControls = true,
      label,
    },
    ref
  ) => {
    const [internalValue, setInternalValue] = React.useState(defaultValue);
    const controlledValue = value !== undefined ? value : internalValue;

    const updateValue = (newValue: number) => {
      const clampedValue = Math.min(Math.max(newValue, min), max);
      if (value === undefined) {
        setInternalValue(clampedValue);
      }
      onChange?.(clampedValue);
    };

    const increment = () => updateValue(controlledValue + step);
    const decrement = () => updateValue(controlledValue - step);

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      const newValue = parseFloat(e.target.value);
      if (!isNaN(newValue)) {
        updateValue(newValue);
      }
    };

    const sizeClasses = {
      sm: "h-8 text-sm",
      md: "h-10 text-sm",
      lg: "h-12 text-base",
    };

    const buttonSizes = {
      sm: "w-8 h-8",
      md: "w-10 h-10",
      lg: "w-12 h-12",
    };

    const iconSizes = {
      sm: "w-3 h-3",
      md: "w-4 h-4",
      lg: "w-5 h-5",
    };

    return (
      <div className={cn("flex flex-col gap-1.5", className)}>
        {label && (
          <label className="text-sm font-medium text-foreground">{label}</label>
        )}
        <div
          className={cn(
            "flex items-center rounded-xl border border-border/50 bg-muted/30 overflow-hidden",
            "dark:bg-zinc-900/50 dark:border-zinc-800",
            disabled && "opacity-50 cursor-not-allowed"
          )}
        >
          {/* Decrement Button */}
          {showControls && (
            <button
              type="button"
              onClick={decrement}
              disabled={disabled || controlledValue <= min}
              className={cn(
                buttonSizes[size],
                "flex items-center justify-center border-r border-border/50",
                "text-muted-foreground hover:text-foreground hover:bg-muted/50",
                "transition-colors duration-150",
                "disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:bg-transparent",
                "dark:border-zinc-800 dark:hover:bg-zinc-800/50"
              )}
            >
              <svg
                className={iconSizes[size]}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M20 12H4" />
              </svg>
            </button>
          )}

          {/* Input */}
          <input
            ref={ref}
            type="number"
            value={controlledValue}
            onChange={handleInputChange}
            disabled={disabled}
            min={min}
            max={max}
            step={step}
            className={cn(
              sizeClasses[size],
              "flex-1 min-w-[60px] bg-transparent text-center px-3",
              "focus:outline-none",
              "[appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
            )}
          />

          {/* Increment Button */}
          {showControls && (
            <button
              type="button"
              onClick={increment}
              disabled={disabled || controlledValue >= max}
              className={cn(
                buttonSizes[size],
                "flex items-center justify-center border-l border-border/50",
                "text-muted-foreground hover:text-foreground hover:bg-muted/50",
                "transition-colors duration-150",
                "disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:bg-transparent",
                "dark:border-zinc-800 dark:hover:bg-zinc-800/50"
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
                  d="M12 4v16m8-8H4"
                />
              </svg>
            </button>
          )}
        </div>
      </div>
    );
  }
);

NumberField.displayName = "NumberField";
