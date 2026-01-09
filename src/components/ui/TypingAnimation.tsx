"use client";

import React from "react";
import { cn } from "@/lib/utils";

interface TypingAnimationProps {
  text: string;
  duration?: number;
  delay?: number;
  cursor?: boolean;
  className?: string;
  onComplete?: () => void;
}

export const TypingAnimation: React.FC<TypingAnimationProps> = ({
  text,
  duration = 100,
  delay = 0,
  cursor = true,
  className,
  onComplete,
}) => {
  const [displayText, setDisplayText] = React.useState("");
  const [isComplete, setIsComplete] = React.useState(false);

  React.useEffect(() => {
    let timeout: NodeJS.Timeout;
    let charIndex = 0;

    const startTyping = () => {
      const type = () => {
        if (charIndex < text.length) {
          setDisplayText(text.slice(0, charIndex + 1));
          charIndex++;
          timeout = setTimeout(type, duration);
        } else {
          setIsComplete(true);
          onComplete?.();
        }
      };
      type();
    };

    timeout = setTimeout(startTyping, delay);

    return () => clearTimeout(timeout);
  }, [text, duration, delay, onComplete]);

  return (
    <span className={cn("inline-block", className)}>
      {displayText}
      {cursor && (
        <span
          className={cn(
            "inline-block w-[2px] h-[1em] ml-0.5 bg-current align-middle",
            isComplete ? "animate-blink" : ""
          )}
        />
      )}
    </span>
  );
};

// CSS for cursor blink
const typingStyles = `
@keyframes blink {
  0%, 50% { opacity: 1; }
  51%, 100% { opacity: 0; }
}
.animate-blink {
  animation: blink 1s step-end infinite;
}
`;

if (typeof document !== "undefined") {
  const styleId = "auralix-typing-styles";
  if (!document.getElementById(styleId)) {
    const style = document.createElement("style");
    style.id = styleId;
    style.textContent = typingStyles;
    document.head.appendChild(style);
  }
}
