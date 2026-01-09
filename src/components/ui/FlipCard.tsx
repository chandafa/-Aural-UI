"use client";

import React from "react";
import { cn } from "@/lib/utils";

interface FlipCardProps {
  front: React.ReactNode;
  back: React.ReactNode;
  flipOnHover?: boolean;
  flipOnClick?: boolean;
  className?: string;
}

export const FlipCard: React.FC<FlipCardProps> = ({
  front,
  back,
  flipOnHover = true,
  flipOnClick = false,
  className,
}) => {
  const [isFlipped, setIsFlipped] = React.useState(false);

  const handleClick = () => {
    if (flipOnClick) {
      setIsFlipped(!isFlipped);
    }
  };

  return (
    <div
      className={cn(
        "group perspective-[1000px] cursor-pointer",
        className
      )}
      onClick={handleClick}
    >
      <div
        className={cn(
          "relative w-full h-full transition-transform duration-500 ease-out transform-style-preserve-3d",
          flipOnHover && "group-hover:rotate-y-180",
          isFlipped && "rotate-y-180"
        )}
        style={{
          transformStyle: "preserve-3d",
          transform: isFlipped ? "rotateY(180deg)" : "rotateY(0deg)",
        }}
      >
        {/* Front */}
        <div
          className="absolute inset-0 backface-hidden rounded-2xl overflow-hidden"
          style={{ backfaceVisibility: "hidden" }}
        >
          <div className="w-full h-full rounded-2xl border border-border/50 bg-background/80 backdrop-blur-sm dark:bg-zinc-900/80 dark:border-zinc-800">
            {front}
          </div>
        </div>

        {/* Back */}
        <div
          className="absolute inset-0 backface-hidden rounded-2xl overflow-hidden rotate-y-180"
          style={{
            backfaceVisibility: "hidden",
            transform: "rotateY(180deg)",
          }}
        >
          <div className="w-full h-full rounded-2xl border border-border/50 bg-background/80 backdrop-blur-sm dark:bg-zinc-900/80 dark:border-zinc-800">
            {back}
          </div>
        </div>
      </div>
    </div>
  );
};
