"use client";

import * as React from "react";
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
        variant === "separated" && "space-y-4", // More space for separated
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
      "overflow-hidden transition-all duration-200",
      
      // Variant: Simple (Default) - Border bottom only
      variant === "simple" && "border-b border-border rounded-none bg-transparent",

      // Variant: Boxed - Contained within a box
      variant === "boxed" && "border border-border bg-muted/30 backdrop-blur-sm first:rounded-t-2xl last:rounded-b-2xl",
      
      // Variant: Separated - Individual floating cards
      variant === "separated" && "rounded-2xl border border-border bg-card text-card-foreground shadow-sm",

      className
    )}>
      <button
        onClick={() => context.toggleItem(value)}
        className={cn(
          "flex w-full items-center justify-between px-4 py-4 text-left font-medium transition-all hover:bg-muted/50 [&[data-state=open]>svg]:rotate-180",
          variant === "simple" && "hover:bg-transparent hover:text-foreground/80",
        )}
        data-state={isOpen ? "open" : "closed"}
      >
        {trigger}
        <ChevronDown className="h-4 w-4 shrink-0 transition-transform duration-200 text-muted-foreground" />
      </button>
      <div
        className={cn(
          "overflow-hidden text-sm transition-all duration-300 ease-in-out",
          isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0",
          isOpen && variant !== "simple" && "pb-4 px-4" // Padding for boxed/separated
        )}
      >
        <div className={cn(
          "text-muted-foreground pt-2",
          variant !== "simple" && "border-t border-border"
        )}>
            {children}
        </div>
      </div>
    </div>
  );
}
