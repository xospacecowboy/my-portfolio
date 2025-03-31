"use client"

import { useEffect, useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'

const SpaceBackground = () => {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll()

  // Create parallax effect for different star layers
  const y1 = useTransform(scrollYProgress, [0, 1], ['0%', '20%'])
  const y2 = useTransform(scrollYProgress, [0, 1], ['0%', '40%'])
  const y3 = useTransform(scrollYProgress, [0, 1], ['0%', '60%'])

  return (
    <div 
      ref={containerRef}
      className="fixed inset-0 -z-1 overflow-hidden pointer-events-none"
      style={{
        background: 'radial-gradient(circle at center, rgba(88, 28, 135, 0.15), rgba(0, 0, 0, 0.8)), linear-gradient(to bottom, #000000, #0a0a0a)'
      }}
    >
      {/* Star layers with different parallax speeds */}
      <motion.div
        className="absolute inset-0"
        style={{ y: y1 }}
      >
        <StarLayer count={50} size={1} opacity={0.8} />
      </motion.div>
      
      <motion.div
        className="absolute inset-0"
        style={{ y: y2 }}
      >
        <StarLayer count={30} size={2} opacity={0.9} />
      </motion.div>
      
      <motion.div
        className="absolute inset-0"
        style={{ y: y3 }}
      >
        <StarLayer count={20} size={3} opacity={1} />
      </motion.div>
    </div>
  )
}

// Component to generate a layer of stars
const StarLayer = ({ count, size, opacity }: { count: number, size: number, opacity: number }) => {
  const stars = Array.from({ length: count }).map((_, i) => ({
    id: i,
    left: `${Math.random() * 100}%`,
    top: `${Math.random() * 100}%`,
    animationDelay: `${Math.random() * 3}s`
  }))

  return (
    <>
      {stars.map(star => (
        <div
          key={star.id}
          className="absolute rounded-full animate-twinkle"
          style={{
            left: star.left,
            top: star.top,
            width: `${size}px`,
            height: `${size}px`,
            opacity,
            backgroundColor: 'white',
            boxShadow: `0 0 ${size * 2}px rgba(255, 255, 255, ${opacity})`,
            animationDelay: star.animationDelay
          }}
        />
      ))}
    </>
  )
}

export default SpaceBackground
