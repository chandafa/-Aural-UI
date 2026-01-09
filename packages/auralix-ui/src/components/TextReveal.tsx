"use client";

import React from "react";
import { cn } from "../utils";

interface TextRevealProps {
  children: string;
  className?: string;
}

export const TextReveal: React.FC<TextRevealProps> = ({
  children,
  className,
}) => {
  const containerRef = React.useRef<HTMLDivElement>(null);
  const [progress, setProgress] = React.useState(0);

  React.useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;

      const rect = containerRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      const elementTop = rect.top;
      const elementHeight = rect.height;

      // Calculate progress based on element position
      const start = windowHeight * 0.8;
      const end = windowHeight * 0.2;
      const currentProgress = Math.max(
        0,
        Math.min(1, (start - elementTop) / (start - end))
      );

      setProgress(currentProgress);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Initial check

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const words = children.split(" ");
  const revealedWordCount = Math.ceil(progress * words.length);

  return (
    <div ref={containerRef} className={cn("relative", className)}>
      {words.map((word, index) => (
        <span
          key={index}
          className={cn(
            "inline-block mr-[0.25em] transition-all duration-300",
            index < revealedWordCount
              ? "opacity-100 blur-0 text-foreground"
              : "opacity-30 blur-[1px] text-muted-foreground"
          )}
        >
          {word}
        </span>
      ))}
    </div>
  );
};

// Character-by-character reveal
interface CharRevealProps {
  children: string;
  staggerDelay?: number;
  className?: string;
}

export const CharReveal: React.FC<CharRevealProps> = ({
  children,
  staggerDelay = 30,
  className,
}) => {
  const [isVisible, setIsVisible] = React.useState(false);
  const ref = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  const chars = children.split("");

  return (
    <div ref={ref} className={cn("inline-block", className)}>
      {chars.map((char, index) => (
        <span
          key={index}
          className="inline-block transition-all duration-300"
          style={{
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? "translateY(0)" : "translateY(20px)",
            transitionDelay: `${index * staggerDelay}ms`,
          }}
        >
          {char === " " ? "\u00A0" : char}
        </span>
      ))}
    </div>
  );
};
