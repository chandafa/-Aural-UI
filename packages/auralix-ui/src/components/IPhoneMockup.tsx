"use client";

import React from "react";
import { cn } from "../utils";

interface iPhoneMockupProps {
  children: React.ReactNode;
  variant?: "silver" | "space-gray" | "gold";
  showNotch?: boolean;
  showStatusBar?: boolean;
  className?: string;
}

export const IPhoneMockup: React.FC<iPhoneMockupProps> = ({
  children,
  variant = "space-gray",
  showNotch = true,
  showStatusBar = true,
  className,
}) => {
  const variantColors = {
    silver: "bg-gradient-to-b from-zinc-300 to-zinc-400 dark:from-zinc-600 dark:to-zinc-700",
    "space-gray": "bg-gradient-to-b from-zinc-700 to-zinc-900",
    gold: "bg-gradient-to-b from-amber-200 to-amber-300 dark:from-amber-600 dark:to-amber-700",
  };

  return (
    <div
      className={cn(
        "relative w-[280px] h-[580px] rounded-[40px] p-[12px]",
        variantColors[variant],
        "shadow-xl shadow-black/30",
        className
      )}
    >
      {/* Side Button */}
      <div className="absolute -right-[3px] top-[100px] w-[3px] h-[60px] rounded-r bg-zinc-600" />
      <div className="absolute -left-[3px] top-[80px] w-[3px] h-[24px] rounded-l bg-zinc-600" />
      <div className="absolute -left-[3px] top-[120px] w-[3px] h-[40px] rounded-l bg-zinc-600" />
      <div className="absolute -left-[3px] top-[170px] w-[3px] h-[40px] rounded-l bg-zinc-600" />

      {/* Screen */}
      <div className="relative w-full h-full rounded-[30px] bg-black overflow-hidden">
        {/* Dynamic Island / Notch */}
        {showNotch && (
          <div className="absolute top-2 left-1/2 -translate-x-1/2 w-[100px] h-[28px] bg-black rounded-full z-20" />
        )}

        {/* Status Bar */}
        {showStatusBar && (
          <div className="absolute top-0 left-0 right-0 h-12 flex items-center justify-between px-6 z-10">
            <span className="text-white text-xs font-medium">9:41</span>
            <div className="flex items-center gap-1">
              <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 3L2 12h3v8h6v-6h2v6h6v-8h3L12 3z" />
              </svg>
              <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M2 18h2v-4h3v4h2V8H7v4H4V8H2v10zm7-10v2h3v8h2v-8h3V8H9z" />
              </svg>
              <div className="w-6 h-3 bg-white rounded-sm relative">
                <div className="absolute inset-[2px] bg-green-500 rounded-[2px]" style={{ width: "80%" }} />
              </div>
            </div>
          </div>
        )}

        {/* Content */}
        <div className="absolute inset-0 pt-12">{children}</div>

        {/* Home Indicator */}
        <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-[100px] h-1 bg-white/30 rounded-full" />
      </div>
    </div>
  );
};
