"use client";

import { useEffect, useRef, useState } from "react";
import { cn } from "../utils";

interface ScrollAnimationProps {
  children: React.ReactNode;
  animation?: "fade-up" | "scale" | "fade-in";
  className?: string;
  delay?: number;
}

export function ScrollAnimation({ 
  children, 
  animation = "fade-up", 
  className,
  delay = 0 
}: ScrollAnimationProps) {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      {
        root: null,
        rootMargin: "0px",
        threshold: 0.1, // Trigger when 10% visible
      }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);

  const animationClass = {
    "fade-up": "reveal-fade-up",
    "scale": "reveal-scale",
    "fade-in": "reveal-fade-in"
  }[animation];

  return (
    <div
      ref={ref}
      className={cn(
        "reveal-on-scroll",
        animationClass,
        isVisible && "is-visible",
        className
      )}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
}
