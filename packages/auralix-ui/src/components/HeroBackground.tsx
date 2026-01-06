"use client";

import dynamic from "next/dynamic";

// Dynamically import FloatingLines with SSR disabled (Three.js requires browser)
const FloatingLines = dynamic(
  () => import("./FloatingLines"),
  { ssr: false }
);

export default function HeroBackground() {
  return (
    <FloatingLines
      enabledWaves={['top', 'middle', 'bottom']}
      lineCount={[10, 15, 20]}
      lineDistance={[8, 6, 4]}
      bendRadius={5.0}
      bendStrength={-0.5}
      interactive={true}
      parallax={true}
      linesGradient={['#8b5cf6', '#a855f7', '#d946ef', '#ec4899']}
      animationSpeed={0.8}
      mixBlendMode="normal"
    />
  );
}
