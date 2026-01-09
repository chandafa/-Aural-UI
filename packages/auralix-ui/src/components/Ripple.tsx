"use client";

import React from "react";
import { cn } from "../utils";

interface RippleProps {
  className?: string;
  color?: string;
  duration?: number;
}

export const Ripple: React.FC<RippleProps> = ({
  className,
  color = "#007AFF",
  duration = 600,
}) => {
  const [ripples, setRipples] = React.useState<
    { x: number; y: number; id: number }[]
  >([]);

  const handleClick = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const id = Date.now();

    setRipples((prev) => [...prev, { x, y, id }]);

    setTimeout(() => {
      setRipples((prev) => prev.filter((r) => r.id !== id));
    }, duration);
  };

  return (
    <div
      className={cn("absolute inset-0 overflow-hidden", className)}
      onClick={handleClick}
    >
      {ripples.map((ripple) => (
        <span
          key={ripple.id}
          className="absolute rounded-full animate-ripple pointer-events-none"
          style={{
            left: ripple.x,
            top: ripple.y,
            backgroundColor: color,
            animationDuration: `${duration}ms`,
          }}
        />
      ))}
    </div>
  );
};

// Button with Ripple effect
interface RippleButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  rippleColor?: string;
  className?: string;
}

export const RippleButton: React.FC<RippleButtonProps> = ({
  children,
  rippleColor = "rgba(255, 255, 255, 0.3)",
  className,
  ...props
}) => {
  const [ripples, setRipples] = React.useState<
    { x: number; y: number; id: number }[]
  >([]);

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const id = Date.now();

    setRipples((prev) => [...prev, { x, y, id }]);

    setTimeout(() => {
      setRipples((prev) => prev.filter((r) => r.id !== id));
    }, 600);

    props.onClick?.(e);
  };

  return (
    <button
      className={cn(
        "relative overflow-hidden px-4 py-2 rounded-xl font-medium",
        "bg-[#007AFF] text-white hover:bg-[#0056D2] transition-colors",
        "dark:bg-[#0A84FF] dark:hover:bg-[#0070E0]",
        className
      )}
      onClick={handleClick}
      {...props}
    >
      {children}
      {ripples.map((ripple) => (
        <span
          key={ripple.id}
          className="absolute rounded-full animate-ripple pointer-events-none"
          style={{
            left: ripple.x,
            top: ripple.y,
            backgroundColor: rippleColor,
          }}
        />
      ))}
    </button>
  );
};

// CSS for ripple animation
const rippleStyles = `
@keyframes ripple {
  0% {
    transform: translate(-50%, -50%) scale(0);
    opacity: 0.5;
  }
  100% {
    transform: translate(-50%, -50%) scale(4);
    opacity: 0;
  }
}
.animate-ripple {
  animation: ripple 600ms ease-out forwards;
  width: 100px;
  height: 100px;
}
`;

if (typeof document !== "undefined") {
  const styleId = "auralix-ripple-styles";
  if (!document.getElementById(styleId)) {
    const style = document.createElement("style");
    style.id = styleId;
    style.textContent = rippleStyles;
    document.head.appendChild(style);
  }
}
