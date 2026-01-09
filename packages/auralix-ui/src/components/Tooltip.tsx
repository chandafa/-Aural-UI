"use client";

import * as React from "react";
import * as TooltipPrimitive from "@radix-ui/react-tooltip";
import { cn } from "../utils";

const TooltipProvider = TooltipPrimitive.Provider;

const Tooltip = TooltipPrimitive.Root;

const TooltipTrigger = TooltipPrimitive.Trigger;

// Helper context for variant
const TooltipContext = React.createContext<{
  variant: "simple" | "rich" | "arrow";
}>({ variant: "simple" });

// Wrapper to inject context if needed, but since Content is separate, 
// we usually pass props to Content directly. 
// However, to satisfy "3 variants" requirement strictly on usages, 
// let's add `TooltipContent` variants.

const TooltipContent = React.forwardRef<
  React.ElementRef<typeof TooltipPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof TooltipPrimitive.Content> & { variant?: "simple" | "rich" | "arrow" }
>(({ className, sideOffset = 4, variant = "simple", ...props }, ref) => (
  <TooltipPrimitive.Content
    ref={ref}
    sideOffset={sideOffset}
    className={cn(
      "z-50 overflow-hidden rounded-md border px-3 py-1.5 text-sm text-popover-foreground shadow-md animate-in fade-in-0 zoom-in-95 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
      
      // Simple (Default)
      variant === "simple" && "bg-popover border-border",

      // Rich (Glassy, slightly larger padding)
      variant === "rich" && "bg-black/80 text-white backdrop-blur-md border-white/10 px-4 py-2 rounded-xl",

      // Arrow (High contrast, needs Arrow element)
      variant === "arrow" && "bg-primary text-primary-foreground border-transparent px-3 py-2",

      className
    )}
    {...props}
  >
    {props.children}
    {variant === "arrow" && <TooltipPrimitive.Arrow className="fill-primary" />}
  </TooltipPrimitive.Content>
));
TooltipContent.displayName = TooltipPrimitive.Content.displayName;

export { Tooltip, TooltipTrigger, TooltipContent, TooltipProvider };
