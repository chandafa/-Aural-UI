"use client";

import { useRef, useEffect, useState } from "react";
import { cn } from "@/lib/utils";

export interface BlurTextProps {
  text: string;
  className?: string;
  delay?: number;
  wordDelay?: number;
}

export function BlurText({
  text,
  className,
  delay = 0,
  wordDelay = 50,
}: BlurTextProps) {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const words = text.split(" ");

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            setIsVisible(true);
          }, delay);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [delay]);

  return (
    <div ref={ref} className={cn("inline-block", className)}>
      {words.map((word, wordIndex) => (
        <span
          key={wordIndex}
          className="inline-block mr-[0.25em] overflow-hidden"
          style={{ verticalAlign: "top" }}
        >
          <span
            className={cn(
              "inline-block transition-all duration-700 ease-[cubic-bezier(0.2,0.8,0.2,1)]",
              isVisible
                ? "opacity-100 blur-0 translate-y-0"
                : "opacity-0 blur-[10px] translate-y-4"
            )}
            style={{
              transitionDelay: `${wordIndex * wordDelay}ms`,
            }}
          >
            {word}
          </span>
        </span>
      ))}
    </div>
  );
}
