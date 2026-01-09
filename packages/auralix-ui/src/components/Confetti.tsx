"use client";

import React from "react";
import { cn } from "../utils";

interface ConfettiProps {
  active?: boolean;
  duration?: number;
  particleCount?: number;
  className?: string;
}

export const Confetti: React.FC<ConfettiProps> = ({
  active = false,
  duration = 3000,
  particleCount = 50,
  className,
}) => {
  const [particles, setParticles] = React.useState<
    { id: number; x: number; color: string; delay: number; rotation: number }[]
  >([]);

  React.useEffect(() => {
    if (active) {
      const colors = ["#FF6B6B", "#4ECDC4", "#45B7D1", "#96E6A1", "#DDA0DD", "#FFD93D", "#6BCB77"];
      const newParticles = Array.from({ length: particleCount }, (_, i) => ({
        id: i,
        x: Math.random() * 100,
        color: colors[Math.floor(Math.random() * colors.length)],
        delay: Math.random() * 500,
        rotation: Math.random() * 360,
      }));
      setParticles(newParticles);

      const timeout = setTimeout(() => {
        setParticles([]);
      }, duration);

      return () => clearTimeout(timeout);
    } else {
      setParticles([]);
    }
  }, [active, duration, particleCount]);

  if (particles.length === 0) return null;

  return (
    <div
      className={cn(
        "fixed inset-0 pointer-events-none overflow-hidden z-50",
        className
      )}
    >
      {particles.map((particle) => (
        <div
          key={particle.id}
          className="absolute w-3 h-3 animate-confetti"
          style={{
            left: `${particle.x}%`,
            backgroundColor: particle.color,
            animationDelay: `${particle.delay}ms`,
            transform: `rotate(${particle.rotation}deg)`,
            borderRadius: Math.random() > 0.5 ? "50%" : "0",
          }}
        />
      ))}
    </div>
  );
};

// Trigger Component
interface ConfettiButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  onConfetti?: () => void;
}

export const useConfetti = () => {
  const [active, setActive] = React.useState(false);

  const fire = React.useCallback(() => {
    setActive(true);
    setTimeout(() => setActive(false), 100);
  }, []);

  return { active, fire };
};

// CSS for confetti animation
const confettiStyles = `
@keyframes confetti {
  0% {
    transform: translateY(-10vh) rotate(0deg);
    opacity: 1;
  }
  100% {
    transform: translateY(100vh) rotate(720deg);
    opacity: 0;
  }
}

.animate-confetti {
  animation: confetti 3s ease-out forwards;
}
`;

if (typeof document !== "undefined") {
  const styleId = "auralix-confetti-styles";
  if (!document.getElementById(styleId)) {
    const style = document.createElement("style");
    style.id = styleId;
    style.textContent = confettiStyles;
    document.head.appendChild(style);
  }
}
