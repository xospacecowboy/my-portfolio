"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { motion, useAnimation } from "framer-motion"
import Footer from "../components/Footer"
import { useMousePosition } from "../hooks/useMousePosition"

// Hand-drawn underline SVG
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
      d="M0 7.5C10 1.5 25 14.5 40 7.5C55 1.5 70 14.5 85 7.5C95 2.5 100 7.5 100 7.5"
      stroke="currentColor"
      strokeWidth="3"
      strokeLinecap="round"
      strokeDasharray="4 3"
    />
  </svg>
)

export default function Home() {
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
          @OXYTOCINS
        </Link>
      </header>

      <main className="container mx-auto px-6 py-12">
        {/* Title Section with Hand-Drawn Effect */}
        <motion.h1
          className="text-5xl font-bold leading-tight mb-8 relative"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          𐚁 HOWDY, I'M STEPHEN—A{" "}
          <span className="relative inline-block italic bg-gradient-to-r from-pastel-blue to-pastel-green bg-clip-text text-transparent">
            SOCIAL MEDIA & CREATIVE PRO
          </span>{" "}
          HTX 📍 FREELANCING{" "}
          <span className="relative inline-block px-2 py-1 bg-pastel-green text-deep-grey rounded-xl">
            ACROSS INDUSTRIES 🐎
            <HandDrawnUnderline className="text-black left-0 bottom-0" />
          </span>
        </motion.h1>

        {/* Subheading with Wavy Underline */}
        <motion.h2
          className="text-xl font-light font-jetbrains-mono max-w-3xl leading-relaxed mt-2 relative"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          FORMERLY @{" "}
          <span className="relative">
            APPLE 👨🏻‍💻, VERIFIEDWORKS AGENCY; MANAGED CLIENTS @SAMSUNGUS, ELECTRONIC ARTS,
            <HandDrawnUnderline className="text-pastel-pink left-0 bottom-0" />
          </span>{" "}
          LED SOCIAL & GAMING CAMPAIGNS FOR{" "}
          <span className="border-b-4 border-dotted border-pastel-purple">
            DISCORD, TWITCH, CYBERPUNK, & POKÉMON GO + MORE 🎮
          </span>
        </motion.h2>

        {/* Call to Action Button */}
        <div className="mt-10">
          <Link href="/work">
            <motion.button
              className="bg-black border-4 border-pastel-blue text-white px-8 py-4 text-lg font-bold rounded-lg hover:bg-pastel-blue hover:text-black transition-all duration-300 relative group"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="relative z-10">Explore My Work</span>
              <div className="absolute inset-0 bg-gradient-to-r from-pastel-pink via-pastel-purple to-pastel-blue opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg" />
            </motion.button>
          </Link>
        </div>

        {/* Section Divider */}
        <div className="w-full h-1 bg-gradient-to-r from-transparent via-white/20 to-transparent my-10" />

        {/* Partnerships Section */}
        <section className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 text-lg font-bold tracking-wide">
          {["APPLE", "SAMSUNG", "ELECTRONIC ARTS", "DISCORD", "TWITCH", "CYBERPUNK", "POKÉMON GO", "VERIFIEDWORKS"].map(
            (partner, index) => (
              <motion.div
                key={partner}
                className="bg-deep-grey border-4 border-white/20 p-4 rounded-xl flex items-center justify-center text-center hover:bg-white/10 transition-all duration-300 cursor-pointer"
                whileHover={{ scale: 1.05, rotate: -1.5 }}
                whileTap={{ scale: 0.95 }}
              >
                {partner}
              </motion.div>
            )
          )}
        </section>
      </main>

      <Footer />
    </div>
  )
}