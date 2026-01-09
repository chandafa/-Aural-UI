"use client";

import * as React from "react";
import { Check, Copy } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/Button";

interface CopyCommandProps {
  command: string;
  className?: string;
  variant?: "simple" | "boxed" | "minimal";
}

export function CopyCommand({ command, className, variant = "boxed" }: CopyCommandProps) {
  const [hasCopied, setHasCopied] = React.useState(false);

  const copyToClipboard = React.useCallback(() => {
    navigator.clipboard.writeText(command);
    setHasCopied(true);
    setTimeout(() => setHasCopied(false), 2000);
  }, [command]);

  return (
    <div
      className={cn(
        "relative flex items-center justify-between",
        // Boxed (Default)
        variant === "boxed" && "rounded-lg border bg-muted/50 p-4 font-mono text-sm backdrop-blur-sm",
        
        // Simple (Just text and button)
        variant === "simple" && "rounded-md bg-transparent p-0 font-mono text-sm gap-2",

        // Minimal (Pill)
        variant === "minimal" && "rounded-full border bg-background px-4 py-2 font-mono text-xs shadow-sm w-fit gap-4",
        
        className
      )}
    >
      <code className={cn(
        "flex-1 break-all",
        variant === "minimal" && "text-muted-foreground"
      )}>
        {command}
      </code>
      <Button
        variant="ghost"
        size="sm"
        className={cn(
            "h-8 w-8 px-0",
            variant === "minimal" && "h-6 w-6 -mr-2"
        )}
        onClick={copyToClipboard}
      >
        {hasCopied ? (
          <Check className="h-4 w-4 text-green-500" />
        ) : (
          <Copy className="h-4 w-4 text-muted-foreground" />
        )}
        <span className="sr-only">Copy command</span>
      </Button>
    </div>
  );
}
