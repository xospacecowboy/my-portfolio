"use client"

import { useEffect } from 'react';
import { motion } from 'framer-motion';

const StarTrail = () => {
  useEffect(() => {
    let particles: HTMLDivElement[] = [];
    let isEnabled = true;

    const colors = [
      'rgba(255, 182, 193, 0.4)', // pastel-pink
      'rgba(186, 225, 255, 0.4)', // pastel-blue
      'rgba(221, 160, 221, 0.4)'  // pastel-purple
    ];

    const createParticle = (x: number, y: number) => {
      const particle = document.createElement('div');
      const size = Math.random() * 2 + 1;
      const color = colors[Math.floor(Math.random() * colors.length)];
      
      particle.style.position = 'fixed';
      particle.style.pointerEvents = 'none';
      particle.style.width = `${size}px`;
      particle.style.height = `${size}px`;
      particle.style.borderRadius = '50%';
      particle.style.backgroundColor = 'transparent';
      particle.style.boxShadow = `0 0 ${size * 2}px ${color}`;
      particle.style.filter = 'blur(0.5px)';
      particle.style.left = x + 'px';
      particle.style.top = y + 'px';
      particle.style.transform = 'translate(-50%, -50%)';
      particle.style.zIndex = '50';
      
      document.body.appendChild(particle);
      particles.push(particle);

      const keyframes = [
        { 
          opacity: 0.6,
          transform: 'translate(-50%, -50%) scale(1)',
          offset: 0
        },
        { 
          opacity: 0,
          transform: `translate(
            calc(-50% + ${Math.random() * 100 - 50}px), 
            calc(-50% + ${Math.random() * 100 - 50}px)
          ) scale(0)`,
          offset: 1
        }
      ];

      const animation = particle.animate(keyframes, {
        duration: 1500,
        easing: 'ease-out'
      });

      animation.onfinish = () => {
        particle.remove();
        particles = particles.filter(p => p !== particle);
      };
    };

    let lastCreationTime = 0;
    const creationInterval = 20;

    const handleMouseMove = (e: MouseEvent) => {
      if (!isEnabled) return;

      const currentTime = Date.now();
      if (currentTime - lastCreationTime < creationInterval) return;

      createParticle(e.clientX, e.clientY);
      lastCreationTime = currentTime;
    };

    const handleKeyPress = (e: KeyboardEvent) => {
      if (e.key.toLowerCase() === 't') {
        isEnabled = !isEnabled;
        if (!isEnabled) {
          particles.forEach(p => p.remove());
          particles = [];
        }
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('keydown', handleKeyPress);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('keydown', handleKeyPress);
      particles.forEach(p => p.remove());
    };
  }, []);

  return null;
};

export default StarTrail;
