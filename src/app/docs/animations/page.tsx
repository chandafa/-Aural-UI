"use client";

import React, { useRef, useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useSpring, animated } from "@react-spring/web";
import gsap from "gsap";

export default function AnimationsPage() {
  return (
    <div className="space-y-12 py-10">
      <div>
        <h1 className="text-3xl font-bold mb-4">Advanced Animations</h1>
        <p className="text-muted-foreground mb-8">
          A showcase of different animation libraries implemented interactively.
        </p>
      </div>

      <section className="space-y-6">
        <h2 className="text-2xl font-semibold border-b pb-2">1. Layout Animation (Framer Motion)</h2>
        <p className="text-sm text-muted-foreground">
          Seamless layout transitions and shared element animations. Click the toggle to see the layout shift.
        </p>
        <FramerMotionDemo />
      </section>

      <section className="space-y-6">
        <h2 className="text-2xl font-semibold border-b pb-2">2. Natural Physics (React Spring)</h2>
        <p className="text-sm text-muted-foreground">
          Spring-physics based animation that feels organic. Hover over the card to see the physics in action.
        </p>
        <ReactSpringDemo />
      </section>

      <section className="space-y-6">
        <h2 className="text-2xl font-semibold border-b pb-2">3. Complex Timeline (GSAP)</h2>
        <p className="text-sm text-muted-foreground">
          Precise control over timing and sequences. Click "Play" to run the complex timeline.
        </p>
        <GsapDemo />
      </section>
    </div>
  );
}

// --- Demo Components ---

function FramerMotionDemo() {
  const [isOn, setIsOn] = useState(false);

  return (
    <div className="p-8 rounded-xl border bg-card flex flex-col items-center justify-center gap-8 min-h-[300px]">
      <div 
        className="w-[300px] h-[40px] bg-muted rounded-full flex items-center px-2 cursor-pointer"
        onClick={() => setIsOn(!isOn)}
        style={{ justifyContent: isOn ? "flex-end" : "flex-start" }}
      >
        <motion.div
          layout
          transition={{ type: "spring", stiffness: 700, damping: 30 }}
          className="w-8 h-8 bg-primary rounded-full shadow-md"
        />
      </div>
      <div className="flex gap-4">
        {["Item 1", "Item 2", "Item 3"].map((item) => (
            <motion.div
                key={item}
                layout
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                whileHover={{ scale: 1.05 }}
                className="bg-accent px-4 py-2 rounded-lg text-sm font-medium"
            >
                {item}
            </motion.div>
        ))}
      </div>
    </div>
  );
}

function ReactSpringDemo() {
  const [hovered, setHovered] = useState(false);
  
  const styles = useSpring({
    transform: hovered ? "scale(1.2) rotate(10deg)" : "scale(1) rotate(0deg)",
    boxShadow: hovered 
        ? "0px 20px 40px rgba(0,0,0,0.2)" 
        : "0px 5px 10px rgba(0,0,0,0.05)",
    config: { tension: 300, friction: 10 },
  });

  return (
    <div className="p-8 rounded-xl border bg-card flex items-center justify-center min-h-[300px]">
      <animated.div
        style={{
            ...styles,
            width: 100,
            height: 100,
            background: "linear-gradient(135deg, #f6d365 0%, #fda085 100%)",
            borderRadius: 16,
            cursor: "pointer",
        }}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      />
    </div>
  );
}

function GsapDemo() {
  const boxRef1 = useRef(null);
  const boxRef2 = useRef(null);
  const boxRef3 = useRef(null);
  const containerRef = useRef(null);

  const handlePlay = () => {
    const tl = gsap.timeline();
    
    // Reset properties just in case
    gsap.set([boxRef1.current, boxRef2.current, boxRef3.current], { x: 0, rotation: 0, opacity: 1, scale: 1 });

    tl.to(boxRef1.current, { x: 100, rotation: 360, duration: 1, ease: "back.out(1.7)" })
      .to(boxRef2.current, { x: 100, rotation: -360, scale: 1.5, duration: 1, ease: "elastic.out(1, 0.3)" }, "-=0.5")
      .to(boxRef3.current, { x: 100, rotation: 180, opacity: 0.5, duration: 1 }, "-=0.5")
      .to([boxRef1.current, boxRef2.current, boxRef3.current], { x: 0, rotation: 0, scale: 1, opacity: 1, duration: 0.8, stagger: 0.1 });
  };

  return (
    <div className="p-8 rounded-xl border bg-card flex flex-col items-center justify-center gap-8 min-h-[300px]" ref={containerRef}>
      <div className="flex flex-col gap-4">
        <div ref={boxRef1} className="w-12 h-12 bg-blue-500 rounded-lg shadow-sm" />
        <div ref={boxRef2} className="w-12 h-12 bg-purple-500 rounded-lg shadow-sm" />
        <div ref={boxRef3} className="w-12 h-12 bg-pink-500 rounded-lg shadow-sm" />
      </div>
      
      <button 
        onClick={handlePlay}
        className="px-4 py-2 bg-primary text-primary-foreground rounded-lg font-medium hover:opacity-90 transition-opacity"
      >
        Play Timeline
      </button>
    </div>
  );
}
