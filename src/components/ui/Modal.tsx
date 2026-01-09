"use client";

import { useEffect, useCallback } from "react";
import { cn } from "@/lib/utils";

export interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
  size?: "sm" | "md" | "lg" | "xl";
  closeOnBackdrop?: boolean;
  className?: string;
  variant?: "default" | "bottom-sheet" | "drawer";
}

export function Modal({
  isOpen,
  onClose,
  children,
  size = "md",
  closeOnBackdrop = true,
  className,
  variant = "default",
}: ModalProps) {
  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      }
    },
    [onClose]
  );

  useEffect(() => {
    if (isOpen) {
      document.addEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "hidden";
    }
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "unset";
    };
  }, [isOpen, handleKeyDown]);

  if (!isOpen) return null;

  return (
    <div className={cn("fixed inset-0 z-50 flex items-center justify-center p-4",
      variant === "bottom-sheet" && "items-end p-0",
      variant === "drawer" && "items-stretch justify-end p-0"
    )}>
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/60 backdrop-blur-md transition-opacity duration-300 animate-in fade-in"
        onClick={closeOnBackdrop ? onClose : undefined}
        aria-hidden="true"
      />

      {/* Modal */}
      <div
        role="dialog"
        aria-modal="true"
        className={cn(
          "relative z-10 w-full border border-border bg-background/80 shadow-2xl backdrop-blur-xl transition-all duration-300",
          // Base/Default
          variant === "default" && "rounded-[2rem] p-6 animate-in fade-in zoom-in-95",
          
          // Bottom Sheet
          variant === "bottom-sheet" && "rounded-t-[2rem] p-6 pb-10 max-w-full animate-in slide-in-from-bottom duration-500",
          
          // Drawer
          variant === "drawer" && "h-full max-w-md rounded-l-[2rem] p-8 animate-in slide-in-from-right duration-500",

          {
            "max-w-sm": size === "sm" && variant !== "bottom-sheet",
            "max-w-md": size === "md" && variant !== "bottom-sheet",
            "max-w-lg": size === "lg" && variant !== "bottom-sheet",
            "max-w-xl": size === "xl" && variant !== "bottom-sheet",
          },
          className
        )}
      >
        {variant === "bottom-sheet" && (
           <div className="mx-auto h-1.5 w-12 rounded-full bg-zinc-300/50 dark:bg-zinc-700/50 mb-4" />
        )}
        {children}
      </div>
    </div>
  );
}

export interface ModalHeaderProps {
  children: React.ReactNode;
  className?: string;
}

export function ModalHeader({ children, className }: ModalHeaderProps) {
  return (
    <div className={cn("mb-4", className)}>
      {children}
    </div>
  );
}

export interface ModalTitleProps {
  children: React.ReactNode;
  className?: string;
}

export function ModalTitle({ children, className }: ModalTitleProps) {
  return (
    <h2 className={cn("text-lg font-semibold", className)}>
      {children}
    </h2>
  );
}

export interface ModalBodyProps {
  children: React.ReactNode;
  className?: string;
}

export function ModalBody({ children, className }: ModalBodyProps) {
  return (
    <div className={cn("text-sm text-muted-foreground", className)}>
      {children}
    </div>
  );
}

export interface ModalFooterProps {
  children: React.ReactNode;
  className?: string;
}

export function ModalFooter({ children, className }: ModalFooterProps) {
  return (
    <div className={cn("mt-6 flex items-center justify-end gap-2", className)}>
      {children}
    </div>
  );
}
