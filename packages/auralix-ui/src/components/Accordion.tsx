"use client";

import * as React from "react";
import { cn } from "../utils";
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
} | null>(null);

export function Accordion({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  const [openItem, setOpenItem] = React.useState<string | null>(null);

  const toggleItem = (value: string) => {
    setOpenItem((prev) => (prev === value ? null : value));
  };

  return (
    <AccordionContext.Provider value={{ openItem, toggleItem }}>
      <div className={cn("space-y-2", className)}>{children}</div>
    </AccordionContext.Provider>
  );
}

export function AccordionItem({ value, trigger, children, className }: AccordionItemProps) {
  const context = React.useContext(AccordionContext);
  if (!context) throw new Error("AccordionItem must be used within Accordion");

  const isOpen = context.openItem === value;

  return (
    <div className={cn("rounded-2xl border border-white/5 bg-white/5 backdrop-blur-sm overflow-hidden transition-all duration-200", className)}>
      <button
        onClick={() => context.toggleItem(value)}
        className="flex w-full items-center justify-between px-4 py-4 text-left font-medium transition-all hover:bg-white/5 [&[data-state=open]>svg]:rotate-180"
        data-state={isOpen ? "open" : "closed"}
      >
        {trigger}
        <ChevronDown className="h-4 w-4 shrink-0 transition-transform duration-200 text-white/50" />
      </button>
      <div
        className={cn(
          "overflow-hidden text-sm transition-all duration-300 ease-in-out",
          isOpen ? "max-h-96 opacity-100 pb-4 px-4" : "max-h-0 opacity-0"
        )}
      >
        <div className="text-white/70 pt-2 border-t border-white/5">{children}</div>
      </div>
    </div>
  );
}
