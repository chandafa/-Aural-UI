"use client";

import React from "react";
import { cn } from "../utils";

interface SafariMockupProps {
  url?: string;
  children: React.ReactNode;
  className?: string;
}

export const SafariMockup: React.FC<SafariMockupProps> = ({
  url = "auralix-ui.dev",
  children,
  className,
}) => {
  return (
    <div
      className={cn(
        "rounded-xl overflow-hidden border border-border/50 bg-background shadow-xl shadow-black/10",
        "dark:bg-zinc-900 dark:border-zinc-800 dark:shadow-black/30",
        className
      )}
    >
      {/* Title Bar */}
      <div className="flex items-center gap-2 px-4 py-3 bg-muted/30 border-b border-border/50 dark:bg-zinc-800/50 dark:border-zinc-800">
        {/* Traffic Lights */}
        <div className="flex items-center gap-1.5">
          <div className="w-3 h-3 rounded-full bg-red-500" />
          <div className="w-3 h-3 rounded-full bg-yellow-500" />
          <div className="w-3 h-3 rounded-full bg-green-500" />
        </div>

        {/* URL Bar */}
        <div className="flex-1 flex justify-center">
          <div className="flex items-center gap-2 px-4 py-1.5 rounded-md bg-muted/50 dark:bg-zinc-900">
            <svg
              className="w-3.5 h-3.5 text-muted-foreground/60"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
              />
            </svg>
            <span className="text-xs text-muted-foreground">{url}</span>
          </div>
        </div>

        {/* Actions */}
        <div className="flex items-center gap-2">
          <svg
            className="w-4 h-4 text-muted-foreground/60"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z"
            />
          </svg>
          <svg
            className="w-4 h-4 text-muted-foreground/60"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
          </svg>
        </div>
      </div>

      {/* Content */}
      <div className="relative">{children}</div>
    </div>
  );
};
