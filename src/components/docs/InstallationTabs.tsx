"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";
import { CodeBlock } from "@/components/docs/CodeBlock";
import { CommandWithTabs } from "@/components/docs/CommandWithTabs";

interface InstallationTabsProps {
  cliCommands: {
    npm: string;
    pnpm: string;
    yarn: string;
    bun: string;
  };
  sourceCode: string;
}

export function InstallationTabs({ cliCommands, sourceCode }: InstallationTabsProps) {
  const [tab, setTab] = useState<"cli" | "manual">("cli");

  return (
    <div className="space-y-4">
      <div className="flex items-center gap-4 border-b border-border pb-2">
        <button
          onClick={() => setTab("cli")}
          className={cn(
            "text-sm font-medium transition-colors hover:text-foreground",
            tab === "cli"
              ? "text-foreground border-b-2 border-primary pb-2 -mb-2.5"
              : "text-muted-foreground"
          )}
        >
          CLI
        </button>
        <button
          onClick={() => setTab("manual")}
          className={cn(
            "text-sm font-medium transition-colors hover:text-foreground",
            tab === "manual"
              ? "text-foreground border-b-2 border-primary pb-2 -mb-2.5"
              : "text-muted-foreground"
          )}
        >
          Manual
        </button>
      </div>

      {tab === "cli" ? (
         <CommandWithTabs commands={cliCommands} />
      ) : (
        <div className="space-y-4">
          <p className="text-sm text-muted-foreground">
            Copy and paste the following code into your project.
          </p>
          <CodeBlock 
            code={sourceCode}
            language="tsx"
            className="max-h-[650px]"
          />
        </div>
      )}
    </div>
  );
}
