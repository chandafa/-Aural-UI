"use client";

import React from "react";
import { motion } from "framer-motion";
import { cn } from "../utils";

interface SegmentedControlProps {
  options: string[];
  selected: string;
  onChange: (option: string) => void;
  className?: string;
}

export function SegmentedControl({
  options,
  selected,
  onChange,
  className,
}: SegmentedControlProps) {
  return (
    <div
      className={cn(
        "flex p-1 bg-neutral-100 dark:bg-neutral-800 rounded-lg relative",
        className
      )}
    >
      {options.map((option) => (
        <button
          key={option}
          onClick={() => onChange(option)}
          className={cn(
            "flex-1 relative z-10 px-4 py-2 text-sm font-medium transition-colors duration-200",
            selected === option
              ? "text-black dark:text-white"
              : "text-neutral-500 hover:text-neutral-700 dark:text-neutral-400 dark:hover:text-neutral-200"
          )}
        >
          {selected === option && (
            <motion.div
              layoutId="segmented-indicator"
              className="absolute inset-0 bg-white dark:bg-neutral-600 rounded-md shadow-sm"
              transition={{
                type: "spring",
                stiffness: 300,
                damping: 30,
              }}
              style={{ zIndex: -1 }}
            />
          )}
          {option}
        </button>
      ))}
    </div>
  );
}
