"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";

export interface TrueFocusProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  focusColor?: string;
}

export function TrueFocus({
  className,
  label = "Focus me",
  focusColor = "#8b5cf6", // Violet-500
  ...props
}: TrueFocusProps) {
  const [isFocused, setIsFocused] = useState(false);

  return (
    <div className="relative group">
      <div
        className={cn(
          "absolute -inset-0.5 rounded-lg opacity-0 transition-opacity duration-300 blur-md group-hover:opacity-50",
          isFocused ? "opacity-100" : ""
        )}
        style={{
          background: isFocused
            ? `linear-gradient(45deg, ${focusColor}, transparent)`
            : "transparent",
        }}
      />
      <div className="relative">
        <input
          className={cn(
            "flex h-10 w-full rounded-md border border-input bg-background/50 px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-0 disabled:cursor-not-allowed disabled:opacity-50 backdrop-blur-sm transition-all duration-300",
            className
          )}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          placeholder={label}
          {...props}
        />
        <div
          className={cn(
            "absolute bottom-0 left-0 h-[2px] w-0 bg-gradient-to-r from-transparent via-violet-500 to-transparent transition-all duration-500 ease-out",
            isFocused ? "w-full" : "w-0"
          )}
        />
      </div>
    </div>
  );
}
