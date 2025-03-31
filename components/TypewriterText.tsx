"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"

interface TypewriterTextProps {
  text: string
  delay?: number
  className?: string
  repeatDelay?: number
}

export default function TypewriterText({ 
  text, 
  delay = 50, 
  className = "",
  repeatDelay = 4000 // 4 seconds between repeats
}: TypewriterTextProps) {
  const [displayedText, setDisplayedText] = useState("")
  const [isTyping, setIsTyping] = useState(true)

  useEffect(() => {
    const startTyping = () => {
      let currentIndex = 0
      setIsTyping(true)

      // First, erase the text
      const eraseTimer = setInterval(() => {
        if (currentIndex < displayedText.length) {
          setDisplayedText(prev => prev.slice(0, -1))
          currentIndex++
        } else {
          clearInterval(eraseTimer)
          currentIndex = 0

          // Then start typing after a short pause
          setTimeout(() => {
            const typeTimer = setInterval(() => {
              if (currentIndex <= text.length) {
                setDisplayedText(text.slice(0, currentIndex))
                currentIndex++
              } else {
                clearInterval(typeTimer)
                setIsTyping(false)
                // Schedule the next iteration
                setTimeout(startTyping, repeatDelay)
              }
            }, delay)
          }, 500) // 500ms pause between erasing and typing
        }
      }, delay / 2) // Erase text faster than typing
    }

    startTyping()
    return () => {
      // Cleanup timers if component unmounts
      setIsTyping(false)
    }
  }, [text, delay, repeatDelay])

  return (
    <motion.span
      className={`inline-block ${className}`}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3 }}
    >
      {displayedText}
      {isTyping && (
        <span className="opacity-70 animate-pulse">|</span>
      )}
    </motion.span>
  )
}
