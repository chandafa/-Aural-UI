"use client";

import React from "react";
import { cn } from "@/lib/utils";

interface RadioOption {
  value: string;
  label: string;
  description?: string;
  disabled?: boolean;
}

interface RadioGroupProps {
  options: RadioOption[];
  value?: string;
  defaultValue?: string;
  onChange?: (value: string) => void;
  name: string;
  orientation?: "horizontal" | "vertical";
  size?: "sm" | "md" | "lg";
  className?: string;
}

export const RadioGroup: React.FC<RadioGroupProps> = ({
  options,
  value,
  defaultValue,
  onChange,
  name,
  orientation = "vertical",
  size = "md",
  className,
}) => {
  const [selected, setSelected] = React.useState(defaultValue || "");
  const controlledValue = value !== undefined ? value : selected;

  const handleSelect = (optionValue: string) => {
    if (value === undefined) {
      setSelected(optionValue);
    }
    onChange?.(optionValue);
  };

  return (
    <div
      role="radiogroup"
      className={cn(
        "flex",
        orientation === "vertical" ? "flex-col gap-3" : "flex-row gap-4 flex-wrap",
        className
      )}
    >
      {options.map((option) => (
        <Radio
          key={option.value}
          option={option}
          name={name}
          size={size}
          checked={controlledValue === option.value}
          onSelect={handleSelect}
        />
      ))}
    </div>
  );
};

interface RadioProps {
  option: RadioOption;
  name: string;
  size: "sm" | "md" | "lg";
  checked: boolean;
  onSelect: (value: string) => void;
}

const Radio: React.FC<RadioProps> = ({
  option,
  name,
  size,
  checked,
  onSelect,
}) => {
  const sizeClasses = {
    sm: "w-4 h-4",
    md: "w-5 h-5",
    lg: "w-6 h-6",
  };

  const dotSizes = {
    sm: "w-1.5 h-1.5",
    md: "w-2 h-2",
    lg: "w-2.5 h-2.5",
  };

  return (
    <label
      className={cn(
        "inline-flex items-start gap-3 cursor-pointer select-none group",
        option.disabled && "cursor-not-allowed opacity-50"
      )}
    >
      <div className="relative flex items-center justify-center pt-0.5">
        <input
          type="radio"
          name={name}
          value={option.value}
          checked={checked}
          onChange={() => !option.disabled && onSelect(option.value)}
          disabled={option.disabled}
          className="sr-only"
        />
        <div
          className={cn(
            sizeClasses[size],
            "rounded-full border-2 transition-all duration-200 ease-out flex items-center justify-center",
            checked
              ? "border-[#007AFF] bg-[#007AFF]"
              : "border-border/60 bg-background group-hover:border-[#007AFF]/50",
            "dark:border-zinc-700 dark:bg-zinc-900",
            checked && "dark:border-[#0A84FF] dark:bg-[#0A84FF]"
          )}
        >
          {/* Inner dot */}
          <div
            className={cn(
              dotSizes[size],
              "rounded-full bg-white transition-all duration-200",
              checked ? "opacity-100 scale-100" : "opacity-0 scale-0"
            )}
          />
        </div>
      </div>
      {(option.label || option.description) && (
        <div className="flex flex-col">
          {option.label && (
            <span className="text-sm font-medium text-foreground">
              {option.label}
            </span>
          )}
          {option.description && (
            <span className="text-xs text-muted-foreground mt-0.5">
              {option.description}
            </span>
          )}
        </div>
      )}
    </label>
  );
};

export { Radio };
