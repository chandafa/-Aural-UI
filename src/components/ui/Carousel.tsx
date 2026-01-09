"use client";

import React, { useRef, useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/Button";

interface CarouselProps extends React.HTMLAttributes<HTMLDivElement> {
  items: React.ReactNode[];
  showControls?: boolean;
  showIndicators?: boolean;
  autoPlay?: boolean;
  interval?: number;
}

export function Carousel({
  items,
  showControls = true,
  showIndicators = true,
  autoPlay = false,
  interval = 5000,
  className,
  ...props
}: CarouselProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    if (!autoPlay || isHovering) return;

    const timer = setInterval(() => {
      scrollToIndex((currentIndex + 1) % items.length);
    }, interval);

    return () => clearInterval(timer);
  }, [currentIndex, autoPlay, interval, isHovering, items.length]);

  const scrollToIndex = (index: number) => {
    if (containerRef.current) {
      const scrollWidth = containerRef.current.scrollWidth;
      const itemWidth = scrollWidth / items.length;
      containerRef.current.scrollTo({
        left: itemWidth * index,
        behavior: "smooth",
      });
      setCurrentIndex(index);
    }
  };

  const handleScroll = () => {
    if (containerRef.current) {
      const scrollLeft = containerRef.current.scrollLeft;
      const scrollWidth = containerRef.current.scrollWidth;
      const itemWidth = scrollWidth / items.length;
      const newIndex = Math.round(scrollLeft / itemWidth);
      if (newIndex !== currentIndex) {
        setCurrentIndex(newIndex);
      }
    }
  };

  return (
    <div
      className={cn("relative group w-full overflow-hidden rounded-xl", className)}
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
      {...props}
    >
      <div
        ref={containerRef}
        className="flex overflow-x-auto snap-x snap-mandatory scrollbar-hide w-full"
        onScroll={handleScroll}
        style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
      >
        {items.map((item, index) => (
          <div
            key={index}
            className="w-full flex-shrink-0 snap-center"
            style={{ width: "100%" }}
          >
            {item}
          </div>
        ))}
      </div>

      {showControls && (
        <>
          <div className="absolute left-4 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
            <Button
              variant="outline"
              size="sm"
              className="rounded-full w-8 h-8 p-0 bg-background/80 backdrop-blur-sm shadow-sm"
              onClick={() => scrollToIndex(currentIndex === 0 ? items.length - 1 : currentIndex - 1)}
            >
              <ChevronLeft className="w-4 h-4" />
            </Button>
          </div>
          <div className="absolute right-4 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
            <Button
              variant="outline"
              size="sm"
              className="rounded-full w-8 h-8 p-0 bg-background/80 backdrop-blur-sm shadow-sm"
              onClick={() => scrollToIndex((currentIndex + 1) % items.length)}
            >
              <ChevronRight className="w-4 h-4" />
            </Button>
          </div>
        </>
      )}

      {showIndicators && (
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
          {items.map((_, index) => (
            <button
              key={index}
              onClick={() => scrollToIndex(index)}
              className={cn(
                "w-2 h-2 rounded-full transition-all duration-300",
                index === currentIndex
                  ? "bg-white w-4"
                  : "bg-white/50 hover:bg-white/70"
              )}
            />
          ))}
        </div>
      )}
    </div>
  );
}
