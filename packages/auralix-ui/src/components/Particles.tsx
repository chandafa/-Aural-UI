"use client";

import React from "react";
import { cn } from "../utils";

interface ParticlesProps {
  quantity?: number;
  size?: { min: number; max: number };
  speed?: { min: number; max: number };
  color?: string;
  className?: string;
}

export const Particles: React.FC<ParticlesProps> = ({
  quantity = 50,
  size = { min: 1, max: 3 },
  speed = { min: 10, max: 30 },
  color = "#007AFF",
  className,
}) => {
  const particles = React.useMemo(() => {
    return Array.from({ length: quantity }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: size.min + Math.random() * (size.max - size.min),
      duration: speed.min + Math.random() * (speed.max - speed.min),
      delay: Math.random() * 10,
    }));
  }, [quantity, size.min, size.max, speed.min, speed.max]);

  return (
    <div
      className={cn(
        "absolute inset-0 overflow-hidden pointer-events-none",
        className
      )}
    >
      {particles.map((particle) => (
        <div
          key={particle.id}
          className="absolute rounded-full animate-float-particle"
          style={{
            left: `${particle.x}%`,
            top: `${particle.y}%`,
            width: particle.size,
            height: particle.size,
            backgroundColor: color,
            opacity: 0.4 + Math.random() * 0.4,
            animationDuration: `${particle.duration}s`,
            animationDelay: `${particle.delay}s`,
          }}
        />
      ))}
    </div>
  );
};

// Glowing Particles
interface GlowingParticlesProps {
  quantity?: number;
  color?: string;
  className?: string;
}

export const GlowingParticles: React.FC<GlowingParticlesProps> = ({
  quantity = 20,
  color = "#007AFF",
  className,
}) => {
  const particles = React.useMemo(() => {
    return Array.from({ length: quantity }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: 2 + Math.random() * 4,
      duration: 15 + Math.random() * 25,
      delay: Math.random() * 10,
    }));
  }, [quantity]);

  return (
    <div
      className={cn(
        "absolute inset-0 overflow-hidden pointer-events-none",
        className
      )}
    >
      {particles.map((particle) => (
        <div
          key={particle.id}
          className="absolute rounded-full animate-glow-particle"
          style={{
            left: `${particle.x}%`,
            top: `${particle.y}%`,
            width: particle.size,
            height: particle.size,
            backgroundColor: color,
            boxShadow: `0 0 ${particle.size * 3}px ${color}, 0 0 ${particle.size * 6}px ${color}40`,
            animationDuration: `${particle.duration}s`,
            animationDelay: `${particle.delay}s`,
          }}
        />
      ))}
    </div>
  );
};

// CSS for particle animations
const particlesStyles = `
@keyframes float-particle {
  0%, 100% {
    transform: translateY(0) translateX(0);
  }
  25% {
    transform: translateY(-20px) translateX(10px);
  }
  50% {
    transform: translateY(-10px) translateX(-10px);
  }
  75% {
    transform: translateY(-30px) translateX(5px);
  }
}

@keyframes glow-particle {
  0%, 100% {
    transform: translateY(0) translateX(0) scale(1);
    opacity: 0.6;
  }
  33% {
    transform: translateY(-50px) translateX(30px) scale(1.2);
    opacity: 0.8;
  }
  66% {
    transform: translateY(-20px) translateX(-20px) scale(0.8);
    opacity: 0.4;
  }
}

.animate-float-particle {
  animation: float-particle 20s ease-in-out infinite;
}

.animate-glow-particle {
  animation: glow-particle 20s ease-in-out infinite;
}
`;

if (typeof document !== "undefined") {
  const styleId = "auralix-particles-styles";
  if (!document.getElementById(styleId)) {
    const style = document.createElement("style");
    style.id = styleId;
    style.textContent = particlesStyles;
    document.head.appendChild(style);
  }
}
