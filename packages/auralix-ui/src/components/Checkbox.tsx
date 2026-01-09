"use client";

import React from "react";
import { cn } from "../utils";

interface CheckboxProps {
  checked?: boolean;
  defaultChecked?: boolean;
  onChange?: (checked: boolean) => void;
  disabled?: boolean;
  label?: string;
  description?: string;
  size?: "sm" | "md" | "lg";
  className?: string;
  id?: string;
}

export const Checkbox = React.forwardRef<HTMLInputElement, CheckboxProps>(
  (
    {
      checked,
      defaultChecked,
      onChange,
      disabled = false,
      label,
      description,
      size = "md",
      className,
      id,
    },
    ref
  ) => {
    const [isChecked, setIsChecked] = React.useState(defaultChecked || false);
    const controlledChecked = checked !== undefined ? checked : isChecked;

    const handleChange = () => {
      if (disabled) return;
      const newValue = !controlledChecked;
      if (checked === undefined) {
        setIsChecked(newValue);
      }
      onChange?.(newValue);
    };

    const sizeClasses = {
      sm: "w-4 h-4",
      md: "w-5 h-5",
      lg: "w-6 h-6",
    };

    const checkSizes = {
      sm: "w-2.5 h-2.5",
      md: "w-3 h-3",
      lg: "w-3.5 h-3.5",
    };

    return (
      <label
        className={cn(
          "inline-flex items-start gap-3 cursor-pointer select-none group",
          disabled && "cursor-not-allowed opacity-50",
          className
        )}
      >
        <div className="relative flex items-center justify-center pt-0.5">
          <input
            ref={ref}
            type="checkbox"
            id={id}
            checked={controlledChecked}
            onChange={handleChange}
            disabled={disabled}
            className="sr-only"
          />
          <div
            className={cn(
              sizeClasses[size],
              "rounded-md border-2 transition-all duration-200 ease-out flex items-center justify-center",
              controlledChecked
                ? "bg-[#007AFF] border-[#007AFF]"
                : "bg-background border-border/60 group-hover:border-[#007AFF]/50",
              "dark:bg-zinc-900 dark:border-zinc-700",
              controlledChecked && "dark:bg-[#0A84FF] dark:border-[#0A84FF]"
            )}
          >
            {/* Checkmark */}
            <svg
              className={cn(
                checkSizes[size],
                "text-white transition-all duration-200",
                controlledChecked
                  ? "opacity-100 scale-100"
                  : "opacity-0 scale-50"
              )}
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={3}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M5 13l4 4L19 7"
              />
            </svg>
          </div>
        </div>
        {(label || description) && (
          <div className="flex flex-col">
            {label && (
              <span className="text-sm font-medium text-foreground">
                {label}
              </span>
            )}
            {description && (
              <span className="text-xs text-muted-foreground mt-0.5">
                {description}
              </span>
            )}
          </div>
        )}
      </label>
    );
  }
);

Checkbox.displayName = "Checkbox";
