"use client";

import * as React from "react";
import { cn } from "../utils";

const TabsContext = React.createContext<{
  activeTab: string;
  setActiveTab: (value: string) => void;
  variant: "pill" | "line" | "segmented";
} | null>(null);

export function Tabs({
  defaultValue,
  className,
  children,
  variant = "pill",
}: {
  defaultValue: string;
  className?: string;
  children: React.ReactNode;
  variant?: "pill" | "line" | "segmented";
}) {
  const [activeTab, setActiveTab] = React.useState(defaultValue);

  return (
    <TabsContext.Provider value={{ activeTab, setActiveTab, variant }}>
      <div className={cn("w-full", className)}>{children}</div>
    </TabsContext.Provider>
  );
}

export function TabsList({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) {
  const context = React.useContext(TabsContext);
  const variant = context?.variant || "pill";

  return (
    <div
      className={cn(
        "inline-flex items-center justify-center text-muted-foreground",
        // Pill (Default)
        variant === "pill" && "h-10 rounded-full bg-muted/50 p-1 backdrop-blur-md",
        
        // Line (Underline style)
        variant === "line" && "h-10 w-full justify-start border-b border-border bg-transparent rounded-none p-0 gap-6",

        // Segmented (iOS Style)
        variant === "segmented" && "h-9 rounded-lg bg-muted p-1 border border-border w-full",
        
        className
      )}
    >
      {children}
    </div>
  );
}

export function TabsTrigger({
  value,
  className,
  children,
}: {
  value: string;
  className?: string;
  children: React.ReactNode;
}) {
  const context = React.useContext(TabsContext);
  if (!context) throw new Error("TabsTrigger must be used within Tabs");

  const isActive = context.activeTab === value;
  const { variant } = context;

  return (
    <button
      onClick={() => context.setActiveTab(value)}
      className={cn(
        "inline-flex items-center justify-center whitespace-nowrap px-3 py-1.5 text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
        
        // Pill Variant
        variant === "pill" && "rounded-full hover:bg-muted hover:text-foreground",
        variant === "pill" && isActive && "bg-background text-foreground shadow-sm backdrop-blur-sm",

        // Line Variant
        variant === "line" && "rounded-none border-b-2 border-transparent px-1 hover:text-foreground",
        variant === "line" && isActive && "border-primary text-primary",

        // Segmented Variant
        variant === "segmented" && "rounded-md flex-1",
        variant === "segmented" && isActive && "bg-background text-foreground shadow-sm",
        variant === "segmented" && !isActive && "hover:bg-background/50",

        className
      )}
    >
      {children}
    </button>
  );
}

export function TabsContent({
  value,
  className,
  children,
}: {
  value: string;
  className?: string;
  children: React.ReactNode;
}) {
  const context = React.useContext(TabsContext);
  if (!context) throw new Error("TabsContent must be used within Tabs");

  if (context.activeTab !== value) return null;

  return (
    <div
      className={cn(
        "mt-2 ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 animate-in fade-in zoom-in-95 duration-200",
        className
      )}
    >
      {children}
    </div>
  );
}
