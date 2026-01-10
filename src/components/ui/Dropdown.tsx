"use client";

import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

interface DropdownProps {
  trigger: React.ReactNode;
  children: React.ReactNode;
  align?: "start" | "center" | "end";
  className?: string;
}

export const Dropdown: React.FC<DropdownProps> = ({
  trigger,
  children,
  align = "start",
  className,
}) => {
  const [isOpen, setIsOpen] = React.useState(false);
  const dropdownRef = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
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

  const alignClasses = {
    start: "left-0 origin-top-left",
    center: "left-1/2 -translate-x-1/2 origin-top",
    end: "right-0 origin-top-right",
  };

  return (
    <div ref={dropdownRef} className="relative inline-block">
      <div onClick={() => setIsOpen(!isOpen)} className="cursor-pointer">
        {trigger}
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: -5 }}
            animate={{ 
              opacity: 1, 
              scale: 1, 
              y: 0,
              transition: { type: "spring", stiffness: 300, damping: 25 }
            }}
            exit={{ 
              opacity: 0, 
              scale: 0.95, 
              y: -5,
              transition: { duration: 0.15 }
            }}
            className={cn(
              "absolute z-50 mt-2 min-w-[180px]",
              "rounded-xl border border-border/50 bg-background/95 backdrop-blur-xl",
              "shadow-lg shadow-black/10 dark:shadow-black/30",
              "py-1",
              "dark:bg-zinc-900/95 dark:border-zinc-800",
              alignClasses[align],
              className
            )}
          >
            {children}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

// Dropdown Item
interface DropdownItemProps {
  children: React.ReactNode;
  icon?: React.ReactNode;
  shortcut?: string;
  disabled?: boolean;
  destructive?: boolean;
  onClick?: () => void;
  className?: string;
}

export const DropdownItem: React.FC<DropdownItemProps> = ({
  children,
  icon,
  shortcut,
  disabled = false,
  destructive = false,
  onClick,
  className,
}) => {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={cn(
        "w-full flex items-center gap-2 px-3 py-2 text-sm text-left",
        "transition-colors duration-100",
        "hover:bg-muted/50 dark:hover:bg-zinc-800/50",
        disabled && "opacity-50 cursor-not-allowed",
        destructive && "text-red-500 hover:bg-red-500/10",
        className
      )}
    >
      {icon && <span className="w-4 h-4 text-muted-foreground">{icon}</span>}
      <span className="flex-1">{children}</span>
      {shortcut && (
        <span className="text-xs text-muted-foreground/60">{shortcut}</span>
      )}
    </button>
  );
};

// Dropdown Separator
export const DropdownSeparator: React.FC = () => (
  <div className="h-px my-1 bg-border/50 dark:bg-zinc-800" />
);

// Dropdown Label
interface DropdownLabelProps {
  children: React.ReactNode;
}

export const DropdownLabel: React.FC<DropdownLabelProps> = ({ children }) => (
  <div className="px-3 py-1.5 text-xs font-medium text-muted-foreground uppercase tracking-wider">
    {children}
  </div>
);
