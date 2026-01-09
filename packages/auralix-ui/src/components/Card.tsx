"use client";

import { cn } from "../utils";
import { motion } from "framer-motion";

export interface CardProps {
  children: React.ReactNode;
  className?: string;
  hoverable?: boolean;
  variant?: "simple" | "glass" | "neon";
}

export function Card({ children, className, hoverable, variant = "glass" }: CardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      whileHover={hoverable ? { y: -5, transition: { duration: 0.2 } } : undefined}
      className={cn(
        "rounded-[2rem] border p-6 transition-all duration-300",
        // Variant Styles
        variant === "simple" && "bg-background border-border shadow-sm",
        variant === "glass" && "bg-background/60 border-white/10 dark:border-white/5 backdrop-blur-md",
        variant === "neon" && "bg-white dark:bg-zinc-900 border-violet-500/50 shadow-[0_0_15px_rgba(139,92,246,0.15)] hover:shadow-[0_0_25px_rgba(139,92,246,0.3)] hover:border-violet-500",
        // Hover effects
        hoverable && variant !== "neon" && "hover:border-violet-500/20",
        className
      )}
    >
      {children}
    </motion.div>
  );
}

export interface CardHeaderProps {
  children: React.ReactNode;
  className?: string;
}

export function CardHeader({ children, className }: CardHeaderProps) {
  return (
    <div className={cn("mb-4", className)}>
      {children}
    </div>
  );
}

export interface CardTitleProps {
  children: React.ReactNode;
  className?: string;
}

export function CardTitle({ children, className }: CardTitleProps) {
  return (
    <h3 className={cn("text-lg font-semibold", className)}>
      {children}
    </h3>
  );
}

export interface CardDescriptionProps {
  children: React.ReactNode;
  className?: string;
}

export function CardDescription({ children, className }: CardDescriptionProps) {
  return (
    <p className={cn("text-sm text-muted-foreground", className)}>
      {children}
    </p>
  );
}

export interface CardContentProps {
  children: React.ReactNode;
  className?: string;
}

export function CardContent({ children, className }: CardContentProps) {
  return (
    <div className={cn(className)}>
      {children}
    </div>
  );
}

export interface CardFooterProps {
  children: React.ReactNode;
  className?: string;
}

export function CardFooter({ children, className }: CardFooterProps) {
  return (
    <div className={cn("mt-4 flex items-center gap-2", className)}>
      {children}
    </div>
  );
}
