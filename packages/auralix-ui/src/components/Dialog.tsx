"use client";

import * as React from "react";
import { cn } from "../utils";

export interface DialogProps {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  description?: string;
  children?: React.ReactNode;
  footer?: React.ReactNode;
  className?: string;
}

export function Dialog({
  isOpen,
  onClose,
  title,
  description,
  children,
  footer,
  className,
}: DialogProps) {
  React.useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (isOpen) {
      document.addEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "hidden";
    }
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "unset";
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/40 backdrop-blur-sm transition-all duration-300"
        onClick={onClose}
      />
      
      {/* Dialog Content - Liquid Glass Effect */}
      <div 
        className={cn(
          "relative z-10 w-full max-w-sm transform overflow-hidden transition-all duration-300 animate-in fade-in zoom-in-95",
          "rounded-[2rem]", // Super rounded corners
          "bg-white/70 dark:bg-zinc-900/70", // Semi-transparent background
          "backdrop-blur-2xl supported-[backdrop-filter]:bg-white/40", // Strong blur
          "shadow-2xl ring-1 ring-white/20 dark:ring-white/10", // Subtle border ring
          "p-6",
          className
        )}
      >
        <div className="flex flex-col gap-4">
          {(title || description) && (
            <div className="space-y-2">
              {title && (
                <h2 className="text-lg font-semibold leading-none tracking-tight">
                  {title}
                </h2>
              )}
              {description && (
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {description}
                </p>
              )}
            </div>
          )}
          
          {children}

          {footer && (
            <div className="flex gap-3 pt-2">
              {footer}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

// Button helpers specifically for the Dialog style
export function DialogButton({
  className,
  variant = "primary",
  ...props
}: React.ButtonHTMLAttributes<HTMLButtonElement> & { variant?: "primary" | "secondary" }) {
  return (
    <button
      className={cn(
        "flex-1 inline-flex items-center justify-center rounded-full px-4 py-2.5 text-sm font-semibold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
        variant === "primary" 
          ? "bg-blue-600 text-white hover:bg-blue-700 shadow-sm" 
          : "bg-blue-100/50 text-blue-900 hover:bg-blue-200/50 dark:bg-white/10 dark:text-white dark:hover:bg-white/20",
        className
      )}
      {...props}
    />
  );
}
