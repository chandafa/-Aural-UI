"use client";

import React from "react";
import { cn } from "../utils";

interface FlipWordsProps {
  words: string[];
  duration?: number;
  className?: string;
}

export const FlipWords: React.FC<FlipWordsProps> = ({
  words,
  duration = 3000,
  className,
}) => {
  const [currentIndex, setCurrentIndex] = React.useState(0);
  const [isAnimating, setIsAnimating] = React.useState(false);

  React.useEffect(() => {
    const interval = setInterval(() => {
      setIsAnimating(true);
      setTimeout(() => {
        setCurrentIndex((prev) => (prev + 1) % words.length);
        setIsAnimating(false);
      }, 300);
    }, duration);

    return () => clearInterval(interval);
  }, [words.length, duration]);

  return (
    <span className={cn("relative inline-block overflow-hidden", className)}>
      <span
        className={cn(
          "inline-block transition-all duration-300 ease-out",
          isAnimating
            ? "opacity-0 -translate-y-full blur-sm"
            : "opacity-100 translate-y-0 blur-0"
        )}
      >
        {words[currentIndex]}
      </span>
    </span>
  );
};

// Alternative: Flip with 3D rotation
interface FlipWords3DProps {
  words: string[];
  duration?: number;
  className?: string;
}

export const FlipWords3D: React.FC<FlipWords3DProps> = ({
  words,
  duration = 3000,
  className,
}) => {
  const [currentIndex, setCurrentIndex] = React.useState(0);
  const [isFlipping, setIsFlipping] = React.useState(false);

  React.useEffect(() => {
    const interval = setInterval(() => {
      setIsFlipping(true);
      setTimeout(() => {
        setCurrentIndex((prev) => (prev + 1) % words.length);
        setTimeout(() => setIsFlipping(false), 300);
      }, 300);
    }, duration);

    return () => clearInterval(interval);
  }, [words.length, duration]);

  return (
    <span
      className={cn(
        "relative inline-block perspective-[1000px]",
        className
      )}
    >
      <span
        className={cn(
          "inline-block transition-transform duration-300 ease-out transform-style-3d",
          isFlipping ? "rotate-x-90" : "rotate-x-0"
        )}
        style={{
          transformStyle: "preserve-3d",
          transform: isFlipping ? "rotateX(90deg)" : "rotateX(0deg)",
        }}
      >
        {words[currentIndex]}
      </span>
    </span>
  );
};
