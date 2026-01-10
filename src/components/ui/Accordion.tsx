"use client";

import * as React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import { ChevronDown } from "lucide-react";

interface AccordionItemProps {
  value: string;
  trigger: React.ReactNode;
  children: React.ReactNode;
  className?: string;
}

const AccordionContext = React.createContext<{
  openItem: string | null;
  toggleItem: (value: string) => void;
  variant: "simple" | "boxed" | "separated";
} | null>(null);

export function Accordion({
  children,
  className,
  variant = "simple",
}: {
  children: React.ReactNode;
  className?: string;
  variant?: "simple" | "boxed" | "separated";
}) {
  const [openItem, setOpenItem] = React.useState<string | null>(null);

  const toggleItem = (value: string) => {
    setOpenItem((prev) => (prev === value ? null : value));
  };

  return (
    <AccordionContext.Provider value={{ openItem, toggleItem, variant }}>
      <div className={cn(
        "space-y-2", 
        variant === "separated" && "space-y-4",
        className
      )}>
        {children}
      </div>
    </AccordionContext.Provider>
  );
}

export function AccordionItem({ value, trigger, children, className }: AccordionItemProps) {
  const context = React.useContext(AccordionContext);
  if (!context) throw new Error("AccordionItem must be used within Accordion");

  const isOpen = context.openItem === value;
  const { variant } = context;

  return (
    <div className={cn(
      "overflow-hidden transition-colors duration-200",
      variant === "simple" && "border-b border-border rounded-none bg-transparent",
      variant === "boxed" && "border border-border bg-muted/30 backdrop-blur-sm first:rounded-t-2xl last:rounded-b-2xl",
      variant === "separated" && "rounded-2xl border border-border bg-card text-card-foreground shadow-sm",
      className
    )}>
      <button
        onClick={() => context.toggleItem(value)}
        className={cn(
          "flex w-full items-center justify-between px-4 py-4 text-left font-medium transition-all hover:bg-muted/50",
          variant === "simple" && "hover:bg-transparent hover:text-foreground/80",
        )}
        data-state={isOpen ? "open" : "closed"}
      >
        {trigger}
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.2, ease: "easeInOut" }}
        >
          <ChevronDown className="h-4 w-4 shrink-0 text-muted-foreground" />
        </motion.div>
      </button>
      
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ 
              height: "auto", 
              opacity: 1,
              transition: { 
                height: { type: "spring", stiffness: 300, damping: 30 },
                opacity: { duration: 0.2, delay: 0.1 }
              }
            }}
            exit={{ 
              height: 0, 
              opacity: 0,
              transition: { 
                height: { type: "spring", stiffness: 300, damping: 30 },
                opacity: { duration: 0.1 }
              }
            }}
            className="overflow-hidden"
          >
            <div className={cn(
              "text-sm text-muted-foreground pt-2",
              variant !== "simple" && "pb-4 px-4 border-t border-border"
            )}>
              {children}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
