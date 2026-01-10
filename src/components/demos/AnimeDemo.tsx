"use client";

import React, { useEffect, useRef, useState } from 'react';

export const AnimeDemo = () => {
    const gridRef = useRef<HTMLDivElement>(null);
    const sectionRef = useRef<HTMLElement>(null);
    const [isVisible, setIsVisible] = useState(false);
    const animationRef = useRef<any>(null);

    // Intersection Observer to detect visibility
    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                setIsVisible(entry.isIntersecting);
            },
            { threshold: 0.1 }
        );

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => observer.disconnect();
    }, []);

    // Initialize and control animation based on visibility
    useEffect(() => {
        if (!gridRef.current) return;

        const initAnime = async () => {
            const { animate, stagger } = await import('animejs');
            
            // Only create animation once
            if (!animationRef.current) {
                animationRef.current = animate(gridRef.current!.children, {
                    scale: [0.5, 1],
                    delay: stagger(100, { grid: [10, 5], from: 'center' }),
                    loop: true,
                    direction: 'alternate',
                    easing: 'easeInOutQuad',
                    duration: 1500,
                    autoplay: false, // Don't autoplay, we control it
                });
            }
        };

        initAnime();

        return () => {
            if (animationRef.current) {
                animationRef.current.pause();
            }
        };
    }, []);

    // Play/pause based on visibility
    useEffect(() => {
        if (animationRef.current) {
            if (isVisible) {
                animationRef.current.play();
            } else {
                animationRef.current.pause();
            }
        }
    }, [isVisible]);

    // Generate grid items - optimized without heavy filters
    const items = Array.from({ length: 50 }).map((_, i) => (
        <div 
            key={i} 
            className="w-8 h-8 rounded-lg bg-gradient-to-br from-indigo-500 to-purple-600 shadow-md"
            style={{ willChange: 'transform' }}
        />
    ));

    return (
        <section 
            ref={sectionRef}
            className="w-full py-20 overflow-hidden flex flex-col items-center justify-center bg-black/20"
        >
            <h2 className="text-3xl font-bold mb-10 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
                Anime.js Integration
            </h2>
            <div 
                ref={gridRef} 
                className="grid grid-cols-10 gap-2 place-items-center"
                style={{ width: 'fit-content' }}
            >
                {items}
            </div>
            <p className="mt-8 text-neutral-400 text-sm">
                Complex staggering grid animation powered by Anime.js
            </p>
        </section>
    );
};
