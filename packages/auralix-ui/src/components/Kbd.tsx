"use client";

import React from "react";
import { cn } from "../utils";

interface KbdProps {
  children: React.ReactNode;
  size?: "sm" | "md" | "lg";
  className?: string;
}

export const Kbd: React.FC<KbdProps> = ({
  children,
  size = "md",
  className,
}) => {
  const sizeClasses = {
    sm: "text-[10px] px-1 py-0.5 min-w-[18px]",
    md: "text-xs px-1.5 py-0.5 min-w-[22px]",
    lg: "text-sm px-2 py-1 min-w-[28px]",
  };

  return (
    <kbd
      className={cn(
        sizeClasses[size],
        "inline-flex items-center justify-center rounded-md",
        "font-mono font-medium",
        "bg-muted/80 border border-border/50",
        "text-muted-foreground",
        "shadow-[0_1px_0_1px] shadow-border/50",
        "dark:bg-zinc-800 dark:border-zinc-700 dark:shadow-zinc-900",
        className
      )}
    >
      {children}
    </kbd>
  );
};

// Keyboard Shortcut display
interface ShortcutProps {
  keys: string[];
  separator?: string;
  size?: "sm" | "md" | "lg";
  className?: string;
}

export const Shortcut: React.FC<ShortcutProps> = ({
  keys,
  separator = "+",
  size = "md",
  className,
}) => {
  const formatKey = (key: string) => {
    const keyMap: Record<string, string> = {
      cmd: "⌘",
      command: "⌘",
      ctrl: "⌃",
      control: "⌃",
      alt: "⌥",
      option: "⌥",
      shift: "⇧",
      enter: "↵",
      return: "↵",
      backspace: "⌫",
      delete: "⌦",
      escape: "⎋",
      esc: "⎋",
      tab: "⇥",
      up: "↑",
      down: "↓",
      left: "←",
      right: "→",
      space: "␣",
    };
    return keyMap[key.toLowerCase()] || key.toUpperCase();
  };

  return (
    <span className={cn("inline-flex items-center gap-0.5", className)}>
      {keys.map((key, index) => (
        <React.Fragment key={index}>
          <Kbd size={size}>{formatKey(key)}</Kbd>
          {index < keys.length - 1 && (
            <span className="text-muted-foreground/50 text-xs mx-0.5">{separator}</span>
          )}
        </React.Fragment>
      ))}
    </span>
  );
};
