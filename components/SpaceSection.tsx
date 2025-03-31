"use client"

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

interface SpaceSectionProps {
  children: React.ReactNode
  className?: string
}

const SpaceSection = ({ children, className = '' }: SpaceSectionProps) => {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: "-20%" })

  const variants = {
    hidden: { 
      opacity: 0,
      scale: 0.9,
      filter: 'blur(10px)',
      y: 50
    },
    visible: { 
      opacity: 1,
      scale: 1,
      filter: 'blur(0px)',
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.16, 1, 0.3, 1] // Custom ease for a space-like feel
      }
    }
  }

  return (
    <motion.div
      ref={ref}
      variants={variants}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      className={`relative ${className}`}
    >
      {/* Warp effect overlay */}
      <motion.div
        className="absolute inset-0 pointer-events-none"
        variants={{
          hidden: { opacity: 0, scale: 1.5 },
          visible: { 
            opacity: [0, 0.2, 0],
            scale: 1,
            transition: { duration: 1.2, times: [0, 0.5, 1] }
          }
        }}
      >
        <div className="w-full h-full bg-gradient-to-r from-pastel-purple/20 via-pastel-blue/20 to-pastel-pink/20" />
      </motion.div>

      {children}
    </motion.div>
  )
}

export default SpaceSection
