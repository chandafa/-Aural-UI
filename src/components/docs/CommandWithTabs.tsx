"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";
import { CodeBlock } from "@/components/docs/CodeBlock";

export type PackageManager = "npm" | "pnpm" | "yarn" | "bun";

interface CommandWithTabsProps {
  commands: {
    npm: string;
    pnpm: string;
    yarn: string;
    bun: string;
  };
  className?: string;
}

export function CommandWithTabs({ commands, className }: CommandWithTabsProps) {
  const [selectedManager, setSelectedManager] = useState<PackageManager>("npm");

  return (
    <div className={cn("rounded-lg border border-border bg-muted/50 overflow-hidden", className)}>
      <div className="flex overflow-x-auto border-b border-border">
        {(["npm", "pnpm", "yarn", "bun"] as PackageManager[]).map((manager) => (
          <button
            key={manager}
            onClick={() => setSelectedManager(manager)}
            className={cn(
              "px-4 py-2 text-sm font-medium transition-colors hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
              selectedManager === manager
                ? "border-b-2 border-primary text-foreground bg-muted"
                : "text-muted-foreground border-b-2 border-transparent"
            )}
          >
            {manager}
          </button>
        ))}
      </div>
      <div className="">
         <CodeBlock 
            code={commands[selectedManager]}
            language="bash"
            className="border-none rounded-none bg-transparent"
          />
      </div>
    </div>
  );
}
