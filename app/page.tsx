"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { motion, useAnimation } from "framer-motion"
import Footer from "../components/Footer"
import { useMousePosition } from "../hooks/useMousePosition"
import { Menu, X } from "lucide-react" // Importing icons for menu toggle

const HandDrawnUnderline = ({ className }: { className?: string }) => (
  <svg
    className={`absolute pointer-events-none ${className}`}
    width="100%"
    height="15"
    viewBox="0 0 100 15"
    preserveAspectRatio="none"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M0 7.5C8 2.5 20 12.5 30 7.5C40 2.5 50 12.5 60 7.5C70 2.5 80 12.5 90 7.5C95 5 100 7.5 100 7.5"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
    />
  </svg>
)

const HandDrawnCircle = ({ className }: { className?: string }) => (
  <svg
    className={`absolute pointer-events-none ${className}`}
    width="120"
    height="120"
    viewBox="0 0 120 120"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M60 10C71.2 10 82 13.8 90.7 20.8C99.4 27.8 105.6 37.7 108.2 48.8C110.8 59.9 109.6 71.5 104.8 81.7C100 91.9 91.9 100 81.7 104.8C71.5 109.6 59.9 110.8 48.8 108.2C37.7 105.6 27.8 99.4 20.8 90.7C13.8 82 10 71.2 10 60"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeDasharray="7 14"
    />
  </svg>
)

export default function Home() {
  const [scrolled, setScrolled] = useState(false)
  const [isOpen, setIsOpen] = useState(false) // State for mobile menu
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
      {/* Mouse Effect */}
      <motion.div
        className="fixed w-8 h-8 rounded-full bg-pastel-blue mix-blend-difference pointer-events-none z-50"
        animate={cursorControls}
      />

      {/* Header with Hamburger Menu */}
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? "bg-deep-grey/90 backdrop-blur-sm" : ""}`}>
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          <Link href="/" className="text-2xl font-bold tracking-tighter">
            @OXYTOCINS
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link href="/work" className="text-sm hover:opacity-70 transition-opacity font-jetbrains-mono">PORTFOLIO</Link>
            <Link href="/meet-stephen" className="text-sm hover:opacity-70 transition-opacity font-jetbrains-mono">ABOUT</Link>
            <motion.a
              href="mailto:beardslee.stephen@icloud.com"
              className="bg-white text-deep-grey px-4 py-2 text-sm font-medium hover:bg-gray-200 transition-colors font-jetbrains-mono"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              MAIL
            </motion.a>
          </nav>

          {/* Mobile Menu Button */}
          <button className="md:hidden z-50" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </header>

      {/* Mobile Navigation */}
      <motion.nav
        initial={{ y: "-100%", opacity: 0 }}
        animate={isOpen ? { y: 0, opacity: 1 } : { y: "-100%", opacity: 0 }}
        transition={{ duration: 0.3 }}
        className={`fixed top-0 left-0 right-0 h-screen bg-deep-grey z-40 flex flex-col items-center justify-center space-y-8 text-xl font-bold ${
          isOpen ? "block" : "hidden"
        }`}
      >
        <Link href="/work" onClick={() => setIsOpen(false)} className="hover:opacity-70 transition-opacity">PORTFOLIO</Link>
        <Link href="/meet-stephen" onClick={() => setIsOpen(false)} className="hover:opacity-70 transition-opacity">ABOUT</Link>
        <motion.a
          href="mailto:beardslee.stephen@icloud.com"
          className="bg-white text-deep-grey px-6 py-3 text-lg font-medium hover:bg-gray-200 transition-colors"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => setIsOpen(false)}
        >
          MAIL
        </motion.a>
      </motion.nav>

      <main className="pt-24">
        <section className="container mx-auto px-6 py-16 flex flex-col space-y-12">
          <motion.h1
            className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight mb-4 max-w-3xl text-left"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            HOWDY, I’M{" "}
            <span className="font-normal italic relative inline-block">
              STEPHEN—A SOCIAL MEDIA & CREATIVE PRO
              <HandDrawnUnderline className="text-pastel-blue bottom-0 left-0 w-full" />
            </span>{" "}
            📍BASED IN HOUSTON, FREELANCING{" "}
            <span className="bg-pastel-green text-deep-grey px-1">ACROSS INDUSTRIES.</span>
          </motion.h1>
          <motion.h2
            className="text-lg sm:text-xl md:text-2xl font-normal max-w-2xl leading-relaxed mb-8 relative font-jetbrains-mono"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            FORMERLY @{" "}
            <span className="relative">
              APPLE, VW AGENCY, & SAMSUNG US
              <HandDrawnUnderline className="text-pastel-green bottom-0 left-0" />
            </span>{" "}
            . LED SOCIAL & GAMING CAMPAIGNS FOR{" "}
            <span className="relative inline-block">
              DISCORD, TWITCH, CYBERPUNK, & POKÉMON GO 🎮
              <HandDrawnCircle className="text-pastel-pink -top-1/4 -left-1/4 w-24 h-24" />
            </span>
          </motion.h2>
          <Link href="/work" className="inline-block bg-pastel-blue text-deep-grey px-6 py-3 text-lg font-medium rounded-md hover:bg-pastel-blue/90 transition-colors">
            View My Work
          </Link>
        </section>

        <section id="approach" className="container mx-auto px-6 py-16 space-y-12">
          <h3 className="text-xl font-medium mb-8 uppercase">Approach</h3>
          <p className="text-2xl sm:text-3xl md:text-4xl font-normal leading-relaxed max-w-4xl relative font-jetbrains-mono">
            Stories shape how we connect,{" "}
            <span className="relative inline-block">
              not just what we consume 🎭
              <HandDrawnCircle className="text-pastel-purple -top-1/4 -left-1/4 w-24 h-24" />
            </span>.  
            The right message, told the right way, reaches people where they are and makes them feel seen.  
            I focus on crafting{" "}
            <span className="italic relative bg-pastel-red text-deep-grey px-1">
              compelling narratives, immersive visuals, and strategic copy
            </span>{" "}  
            that resonate with communities in meaningful ways. Because when content feels personal,{" "}
            <span className="italic relative bg-pastel-red text-deep-grey px-1">
              it creates real impact.
            </span>
          </p>
        </section>

        <motion.section
          id="partnerships"
          className="container mx-auto px-6 py-16"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <h3 className="text-xl font-medium mb-8 uppercase">Featured Partnerships</h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 text-sm font-jetbrains-mono">
            {[
              "APPLE",
              "SAMSUNG",
              "ELECTRONIC ARTS",
              "DISCORD",
              "TWITCH",
              "CYBERPUNK",
              "POKÉMON GO",
              "VERIFIEDWORKS",
            ].map((partner, index) => (
              <motion.div
                key={partner}
                className="bg-deep-grey border border-white/20 p-4 rounded-lg flex items-center justify-center text-center hover:bg-white/10 transition-colors duration-300 cursor-pointer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <motion.div
                  className="relative w-full h-full"
                  initial={false}
                  whileHover={{ rotateY: 180 }}
                  transition={{ duration: 0.6 }}
                >
                  <motion.div className="absolute w-full h-full flex items-center justify-center backface-hidden">
                    {partner}
                  </motion.div>
                  <motion.div
                    className="absolute w-full h-full flex items-center justify-center backface-hidden"
                    style={{ rotateY: 180 }}
                  >
                    <div className="w-full h-full bg-gradient-to-br from-pastel-pink via-pastel-purple to-pastel-blue opacity-70 rounded-lg" />
                  </motion.div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </motion.section>
      </main>

      <Footer />
    </div>
  )
}

