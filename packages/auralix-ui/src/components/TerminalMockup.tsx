"use client";

import React from "react";
import { cn } from "../utils";

interface TerminalMockupProps {
  children: React.ReactNode;
  title?: string;
  className?: string;
}

export const TerminalMockup: React.FC<TerminalMockupProps> = ({
  children,
  title = "Terminal",
  className,
}) => {
  return (
    <div
      className={cn(
        "rounded-xl overflow-hidden border border-border/50 bg-zinc-900 shadow-xl shadow-black/20",
        "dark:border-zinc-800",
        className
      )}
    >
      {/* Title Bar */}
      <div className="flex items-center gap-2 px-4 py-3 bg-zinc-800 border-b border-zinc-700">
        {/* Traffic Lights */}
        <div className="flex items-center gap-1.5">
          <div className="w-3 h-3 rounded-full bg-red-500" />
          <div className="w-3 h-3 rounded-full bg-yellow-500" />
          <div className="w-3 h-3 rounded-full bg-green-500" />
        </div>

        {/* Title */}
        <div className="flex-1 text-center">
          <span className="text-xs text-zinc-400 font-medium">{title}</span>
        </div>

        {/* Spacer */}
        <div className="w-[52px]" />
      </div>

      {/* Content */}
      <div className="p-4 font-mono text-sm text-zinc-300">
        {children}
      </div>
    </div>
  );
};

// Terminal Line Component
interface TerminalLineProps {
  prompt?: string;
  command?: string;
  output?: string;
  className?: string;
}

export const TerminalLine: React.FC<TerminalLineProps> = ({
  prompt = "$",
  command,
  output,
  className,
}) => {
  return (
    <div className={cn("mb-1", className)}>
      {command && (
        <div className="flex items-center gap-2">
          <span className="text-green-400">{prompt}</span>
          <span className="text-zinc-100">{command}</span>
        </div>
      )}
      {output && (
        <div className="text-zinc-400 pl-4 mt-0.5 whitespace-pre-wrap">{output}</div>
      )}
    </div>
  );
};

// Terminal with Typing Effect
interface AnimatedTerminalProps {
  lines: { prompt?: string; command?: string; output?: string; delay?: number }[];
  className?: string;
}

export const AnimatedTerminal: React.FC<AnimatedTerminalProps> = ({
  lines,
  className,
}) => {
  const [visibleLines, setVisibleLines] = React.useState<number>(0);
  const [typedCommand, setTypedCommand] = React.useState("");
  const [currentLine, setCurrentLine] = React.useState(0);

  React.useEffect(() => {
    if (currentLine >= lines.length) return;

    const line = lines[currentLine];
    const command = line.command || "";
    const delay = line.delay || 0;

    // Type the command character by character
    let charIndex = 0;
    const typeInterval = setInterval(() => {
      if (charIndex < command.length) {
        setTypedCommand(command.slice(0, charIndex + 1));
        charIndex++;
      } else {
        clearInterval(typeInterval);
        // Show output after a small delay
        setTimeout(() => {
          setVisibleLines(currentLine + 1);
          setTypedCommand("");
          setCurrentLine(currentLine + 1);
        }, 500);
      }
    }, 50);

    return () => clearInterval(typeInterval);
  }, [currentLine, lines]);

  return (
    <TerminalMockup className={className}>
      {lines.slice(0, visibleLines).map((line, index) => (
        <TerminalLine
          key={index}
          prompt={line.prompt}
          command={line.command}
          output={line.output}
        />
      ))}
      {currentLine < lines.length && (
        <TerminalLine
          prompt={lines[currentLine].prompt}
          command={typedCommand + (typedCommand ? "▋" : "▋")}
        />
      )}
    </TerminalMockup>
  );
};
