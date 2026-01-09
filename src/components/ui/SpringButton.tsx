"use client";

import React, { useState } from "react";
import { useSpring, animated } from "@react-spring/web";
import { Button, ButtonProps } from "@/components/ui/Button";

interface SpringButtonProps extends ButtonProps {
  springConfig?: {
    tension: number;
    friction: number;
  };
}

export function SpringButton({ 
  children, 
  springConfig = { tension: 300, friction: 10 },
  className,
  ...props 
}: SpringButtonProps) {
  const [isPressed, setIsPressed] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const springs = useSpring({
    transform: isPressed 
      ? "scale(0.95)" 
      : isHovered 
        ? "scale(1.05)" 
        : "scale(1)",
    config: springConfig,
  });

  return (
    <animated.div style={springs} className="inline-block">
      <Button
        className={className}
        onMouseDown={() => setIsPressed(true)}
        onMouseUp={() => setIsPressed(false)}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => {
          setIsHovered(false);
          setIsPressed(false);
        }}
        {...props}
      >
        {children}
      </Button>
    </animated.div>
  );
}
