"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

export interface DialogProps {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  description?: string;
  children?: React.ReactNode;
  footer?: React.ReactNode;
  className?: string;
  variant?: "standard" | "sheet" | "fullscreen";
}

export function Dialog({
  isOpen,
  onClose,
  title,
  description,
  children,
  footer,
  className,
  variant = "standard",
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
    <div className={cn("fixed inset-0 z-50 flex p-4", 
      variant === "sheet" ? "justify-end pr-0 py-0" : "items-center justify-center"
    )}>
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/40 backdrop-blur-sm transition-all duration-300"
        onClick={onClose}
      />
      
      {/* Dialog Content */}
      <div 
        className={cn(
          "relative z-10 w-full transform overflow-hidden transition-all duration-300 shadow-2xl",
          // Base styles
          "bg-white/80 dark:bg-zinc-900/80 backdrop-blur-2xl supported-[backdrop-filter]:bg-white/40",
          "ring-1 ring-black/5 dark:ring-white/10",
          // Variant: Standard
          variant === "standard" && "max-w-sm rounded-[2rem] animate-in fade-in zoom-in-95 p-6",
          // Variant: Sheet
          variant === "sheet" && "h-full max-w-md rounded-l-[2rem] animate-in slide-in-from-right duration-500 p-8 border-l border-border",
          // Variant: Fullscreen
          variant === "fullscreen" && "inset-0 max-w-none h-full rounded-none animate-in zoom-in-90 duration-300 p-12 flex flex-col items-center justify-center",
          className
        )}
      >
        <div className={cn("flex flex-col gap-4", variant === "fullscreen" && "max-w-2xl w-full")}>
           {variant === "sheet" && (
            <button onClick={onClose} className="absolute top-4 right-4 p-2 rounded-full hover:bg-black/5 dark:hover:bg-white/5 transition-colors">
              <svg className="w-5 h-5 text-muted-foreground" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          )}

          {(title || description) && (
            <div className="space-y-2">
              {title && (
                <h2 className={cn("font-semibold leading-none tracking-tight", 
                  variant === "fullscreen" ? "text-4xl mb-4 text-center" : "text-lg"
                )}>
                  {title}
                </h2>
              )}
              {description && (
                <p className={cn("text-muted-foreground leading-relaxed", 
                   variant === "fullscreen" ? "text-xl text-center max-w-lg mx-auto" : "text-sm"
                )}>
                  {description}
                </p>
              )}
            </div>
          )}
          
          {children}

          {footer && (
            <div className={cn("flex gap-3 pt-2", 
              variant === "fullscreen" ? "justify-center mt-8" : ""
            )}>
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
