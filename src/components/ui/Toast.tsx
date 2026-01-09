"use client";

import React, { useState, useEffect, createContext, useContext } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Check, AlertCircle, Info } from "lucide-react";
import { cn } from "@/lib/utils";

type ToastType = "success" | "error" | "info" | "warning" | "default";

interface Toast {
  id: string;
  message: string;
  type?: ToastType;
  duration?: number;
}

interface ToastContextType {
  toast: (message: string, type?: ToastType, duration?: number) => void;
}

const ToastContext = createContext<ToastContextType | undefined>(undefined);

export function ToastProvider({ children }: { children: React.ReactNode }) {
  const [toasts, setToasts] = useState<Toast[]>([]);

  const toast = (
    message: string,
    type: ToastType = "default",
    duration: number = 3000
  ) => {
    const id = Math.random().toString(36).substring(7);
    setToasts((prev) => [...prev, { id, message, type, duration }]);

    setTimeout(() => {
      removeToast(id);
    }, duration);
  };

  const removeToast = (id: string) => {
    setToasts((prev) => prev.filter((t) => t.id !== id));
  };

  return (
    <ToastContext.Provider value={{ toast }}>
      {children}
      <div className="fixed bottom-4 right-4 z-[9999] flex flex-col gap-2 pointer-events-none">
        <AnimatePresence>
          {toasts.map((t) => (
            <motion.div
              key={t.id}
              initial={{ opacity: 0, y: 20, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, x: 20, scale: 0.9 }}
              layout
              className={cn(
                "pointer-events-auto flex items-center gap-3 px-4 py-3 rounded-xl shadow-lg border backdrop-blur-md min-w-[300px]",
                t.type === "default" && "bg-background/80 border-border text-foreground",
                t.type === "success" && "bg-green-500/10 border-green-500/20 text-green-600 dark:text-green-400",
                t.type === "error" && "bg-red-500/10 border-red-500/20 text-red-600 dark:text-red-400",
                t.type === "warning" && "bg-yellow-500/10 border-yellow-500/20 text-yellow-600 dark:text-yellow-400",
                t.type === "info" && "bg-blue-500/10 border-blue-500/20 text-blue-600 dark:text-blue-400"
              )}
            >
              {t.type === "success" && <Check className="w-4 h-4" />}
              {t.type === "error" && <AlertCircle className="w-4 h-4" />}
              {t.type === "warning" && <AlertCircle className="w-4 h-4" />}
              {t.type === "info" && <Info className="w-4 h-4" />}
              <span className="text-sm font-medium">{t.message}</span>
              <button
                onClick={() => removeToast(t.id)}
                className="ml-auto hover:bg-black/5 dark:hover:bg-white/10 rounded-full p-1 transition-colors"
              >
                <X className="w-3 h-3 opacity-60" />
              </button>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </ToastContext.Provider>
  );
}

export function useToast() {
  const context = useContext(ToastContext);
  if (!context) {
    throw new Error("useToast must be used within a ToastProvider");
  }
  return context;
}
