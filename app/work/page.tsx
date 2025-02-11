"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { ArrowUpRight } from "lucide-react"
import { motion, useAnimation } from "framer-motion"
import Footer from "../../components/Footer"
import { useMousePosition } from "../../hooks/useMousePosition"

export default function Work() {
  const [scrolled, setScrolled] = useState(false)
  const mousePosition = useMousePosition()
  const cursorControls = useAnimation()

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  useEffect(() => {
    cursorControls.start({
      x: mousePosition.x - 16,
      y: mousePosition.y - 16,
    })
  }, [mousePosition, cursorControls])

  return (
    <div className="bg-deep-grey text-white min-h-screen font-space-grotesk overflow-x-hidden">
      <motion.div
        className="fixed w-8 h-8 rounded-full bg-pastel-blue mix-blend-difference pointer-events-none z-50"
        animate={cursorControls}
      />

      <header className="container mx-auto px-6 py-8">
        <Link href="/" className="text-2xl font-bold tracking-tighter">
          STEPHEN
        </Link>
      </header>

      <main className="container mx-auto px-6 py-12">
        <h1 className="text-5xl font-bold mb-12">Work</h1>

        <div className="grid gap-12">
          <div>
            <h2 className="text-3xl font-bold mb-4">Creative Strategy 🎨</h2>
            <p className="text-lg mb-4 font-jetbrains-mono">
              Tasked with reversing Electronic Arts' negative public image as the perennial "Worst Company in America,"
              I led my team through the implementation of a purpose-driven creative platform...
            </p>
            <Link href="#" className="inline-flex items-center text-lg font-medium text-pastel-blue">
              Read More <ArrowUpRight className="ml-2 w-5 h-5" />
            </Link>
          </div>

          <div>
            <h2 className="text-3xl font-bold mb-4">Community Building 🌟</h2>
            <p className="text-lg mb-4 font-jetbrains-mono">
              Instrumental in reshaping Electronic Arts' public perception, I spearheaded the development of a Discord
              platform. This involved crafting and executing a creative strategy...
            </p>
            <Link href="#" className="inline-flex items-center text-lg font-medium text-pastel-pink">
              Read More <ArrowUpRight className="ml-2 w-5 h-5" />
            </Link>
          </div>

          {/* Add more work items here */}
        </div>
      </main>

      <Footer />
    </div>
  )
}

