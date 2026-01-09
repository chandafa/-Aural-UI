"use client";

import React, { useRef, useState } from "react";
import { cn } from "@/lib/utils";

export interface DockProps {
  className?: string;
  magnification?: number;
  distance?: number;
  direction?: "top" | "middle" | "bottom";
  children: React.ReactNode;
  variant?: "mac" | "windows" | "material";
}

const DEFAULT_MAGNIFICATION = 60;
const DEFAULT_DISTANCE = 140;

const DockContext = React.createContext<{
  magnification: number;
  distance: number;
  variant: "mac" | "windows" | "material";
} | null>(null);

export function Dock({
  className,
  direction: _direction = "bottom",
  children,
  magnification = DEFAULT_MAGNIFICATION,
  distance = DEFAULT_DISTANCE,
  variant = "mac",
}: DockProps) {
  const dockRef = useRef<HTMLDivElement>(null);

  // We don't need to traverse children manually if we use Context for DockIcon to read props.
  // But to keep API simple for end user (just wrapping DockIcon), context is best.

  return (
    <DockContext.Provider value={{ magnification, distance, variant }}>
      <div
        ref={dockRef}
        className={cn(
          "mx-auto flex w-max gap-2 transition-all duration-300",
          
          // Variant: Mac (Default) - Floating, Glassy, Animated
          variant === "mac" && "supports-backdrop-blur:bg-white/10 supports-backdrop-blur:dark:bg-black/10 mt-8 h-[58px] rounded-2xl border p-2 backdrop-blur-md",
          
          // Variant: Windows - Bottom fixed bar, dark/flat
          variant === "windows" && "fixed bottom-4 left-1/2 -translate-x-1/2 h-14 bg-background/90 dark:bg-zinc-900/90 backdrop-blur-xl border border-border rounded-lg px-2 items-center gap-1 shadow-2xl",

          // Variant: Material - Pill floating
          variant === "material" && "mt-8 h-16 rounded-full bg-background dark:bg-slate-900 text-foreground shadow-xl px-6 items-center gap-4 border border-border",

          className,
        )}
      >
        {children}
      </div>
    </DockContext.Provider>
  );
}

export interface DockIconProps extends React.HTMLAttributes<HTMLDivElement> {
  size?: number;
  magnification?: number; // Override if needed
  distance?: number;      // Override if needed
  children?: React.ReactNode;
}

export function DockIcon({
  size = 40,
  magnification: propMagnification,
  distance: propDistance,
  className,
  children,
  ...props
}: DockIconProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [scale, setScale] = useState(1);
  
  const context = React.useContext(DockContext);
  const magnification = propMagnification ?? context?.magnification ?? DEFAULT_MAGNIFICATION;
  const distance = propDistance ?? context?.distance ?? DEFAULT_DISTANCE;
  const variant = context?.variant ?? "mac";

  React.useEffect(() => {
    // Only Mac variant has magnification effect
    if (variant !== "mac") {
        setScale(1);
        return;
    }

    const handleMouseMove = (e: MouseEvent) => {
      if (!ref.current) return;
      const rect = ref.current.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const dist = Math.abs(e.clientX - centerX);
      
      // Calculate scale based on distance
      if (dist < distance) {
        // Linear interpolation or gaussian
        const val = 1 + (magnification / size - 1) * Math.cos((dist / distance) * Math.PI / 2);
        setScale(val);
      } else {
        setScale(1);
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, [distance, magnification, size, variant]);

  return (
    <div
      ref={ref}
      style={{ 
        width: variant === "mac" ? size * scale : size, 
        height: variant === "mac" ? size * scale : size,
        transition: variant === "mac" ? "width 0.1s ease-out, height 0.1s ease-out" : "all 0.2s"
      }}
      className={cn(
        "flex aspect-square cursor-pointer items-center justify-center transition-all",
        
        // Base styling
        variant === "mac" && "rounded-full bg-black/5 dark:bg-white/10 shadow-sm hover:bg-black/10 dark:hover:bg-white/20",
        
        // Windows: Boxy hover
        variant === "windows" && "rounded-md hover:bg-accent active:scale-95 h-10 w-10",
        
        // Material: Ripple-like (simulated with hover)
        variant === "material" && "rounded-full hover:bg-accent active:scale-90 h-12 w-12",

        className,
      )}
      {...props}
    >
      {children}
    </div>
  );
}
