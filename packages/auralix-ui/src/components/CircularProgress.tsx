"use client";

import React from "react";
import { cn } from "../utils";

interface CircularProgressProps {
  value: number;
  max?: number;
  size?: number;
  strokeWidth?: number;
  circleColor?: string;
  progressColor?: string;
  className?: string;
  showValue?: boolean;
}

export function CircularProgress({
  value,
  max = 100,
  size = 60,
  strokeWidth = 6,
  circleColor = "stroke-gray-200 dark:stroke-gray-800",
  progressColor = "stroke-blue-600 dark:stroke-blue-500",
  className,
  showValue = true,
}: CircularProgressProps) {
  const radius = (size - strokeWidth) / 2;
  const circumference = radius * 2 * Math.PI;
  const offset = circumference - (value / max) * circumference;

  return (
    <div
      className={cn("relative flex items-center justify-center", className)}
      style={{ width: size, height: size }}
    >
      <svg
        width={size}
        height={size}
        viewBox={`0 0 ${size} ${size}`}
        className="transform -rotate-90"
      >
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          fill="none"
          strokeWidth={strokeWidth}
          className={cn("transition-colors duration-300", circleColor)}
        />
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          fill="none"
          strokeWidth={strokeWidth}
          strokeDasharray={circumference}
          strokeDashoffset={offset}
          strokeLinecap="round"
          className={cn("transition-all duration-500 ease-out", progressColor)}
        />
      </svg>
      {showValue && (
        <span className="absolute text-xs font-medium text-foreground">
          {Math.round((value / max) * 100)}%
        </span>
      )}
    </div>
  );
}
