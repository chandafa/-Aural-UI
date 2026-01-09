"use client";

import React from "react";
import { cn } from "../utils";

interface PopoverProps {
  trigger: React.ReactNode;
  children: React.ReactNode;
  side?: "top" | "bottom" | "left" | "right";
  align?: "start" | "center" | "end";
  className?: string;
  triggerClassName?: string;
}

export const Popover: React.FC<PopoverProps> = ({
  trigger,
  children,
  side = "bottom",
  align = "center",
  className,
  triggerClassName,
}) => {
  const [isOpen, setIsOpen] = React.useState(false);
  const popoverRef = React.useRef<HTMLDivElement>(null);
  const triggerRef = React.useRef<HTMLButtonElement>(null);

  React.useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        popoverRef.current &&
        !popoverRef.current.contains(event.target as Node) &&
        triggerRef.current &&
        !triggerRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("keydown", handleEscape);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleEscape);
    };
  }, []);

  const sideClasses = {
    top: "bottom-full mb-2",
    bottom: "top-full mt-2",
    left: "right-full mr-2",
    right: "left-full ml-2",
  };

  const alignClasses = {
    start: side === "top" || side === "bottom" ? "left-0" : "top-0",
    center: side === "top" || side === "bottom" ? "left-1/2 -translate-x-1/2" : "top-1/2 -translate-y-1/2",
    end: side === "top" || side === "bottom" ? "right-0" : "bottom-0",
  };

  return (
    <div className="relative inline-block">
      <button
        ref={triggerRef}
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className={cn("outline-none", triggerClassName)}
      >
        {trigger}
      </button>

      {isOpen && (
        <div
          ref={popoverRef}
          className={cn(
            "absolute z-50 min-w-[200px]",
            "rounded-xl border border-border/50 bg-background/95 backdrop-blur-xl",
            "shadow-lg shadow-black/10 dark:shadow-black/30",
            "p-4 animate-in fade-in-0 zoom-in-95 duration-200",
            "dark:bg-zinc-900/95 dark:border-zinc-800",
            sideClasses[side],
            alignClasses[align],
            className
          )}
        >
          {children}
        </div>
      )}
    </div>
  );
};
