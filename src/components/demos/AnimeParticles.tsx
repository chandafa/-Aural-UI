"use client";

import React, { useEffect, useRef } from 'react';

export const AnimeParticles = () => {
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (!containerRef.current) return;

        let animation: any;

        const initAnime = async () => {
            const { animate, utils } = await import('animejs');
            // Create particles
            const container = containerRef.current!;
            const particleCount = 20;

            // Clear existing
            while (container.firstChild) {
                container.removeChild(container.firstChild);
            }

            for (let i = 0; i < particleCount; i++) {
                const particle = document.createElement('div');
                particle.classList.add('absolute', 'rounded-full', 'bg-white/10', 'backdrop-blur-sm');
                
                // Random size
                const size = utils.random(4, 12);
                particle.style.width = `${size}px`;
                particle.style.height = `${size}px`;
                
                // Random position
                particle.style.left = `${utils.random(0, 100)}%`;
                particle.style.top = `${utils.random(0, 100)}%`;
                
                container.appendChild(particle);
            }

            // Animate particles
            animation = animate(container.children, {
                translateX: () => utils.random(-50, 50),
                translateY: () => utils.random(-50, 50),
                scale: () => [0, utils.random(1, 2)],
                opacity: () => [0.2, 0.8],
                easing: 'easeInOutQuad',
                duration: () => utils.random(3000, 5000),
                delay: () => utils.random(0, 500),
                direction: 'alternate',
                loop: true
            });
        };

        initAnime();

        return () => {
            if (animation) animation.pause();
        };
    }, []);

    return (
        <div 
            ref={containerRef} 
            className="absolute inset-0 overflow-hidden pointer-events-none"
        />
    );
};
