"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { motion, useAnimation } from "framer-motion"
import Footer from "../components/Footer"
import { useMousePosition } from "../hooks/useMousePosition"

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
        {/* Title Section */}
        <motion.h1
          className="text-5xl font-bold leading-tight mb-8 relative text-center md:text-left max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          𐚁 HOWDY, I'M STEPHEN—A{" "}
          <span className="relative inline-block italic bg-gradient-to-r from-pastel-blue to-pastel-green bg-clip-text text-transparent">
            SOCIAL MEDIA & CREATIVE PRO
          </span>{" "}
          HTX 📍 <br className="sm:hidden" />
          <span className="bg-pastel-green text-deep-grey px-2 py-1 rounded-xl">
            FREELANCING ACROSS INDUSTRIES 🐎
          </span>
        </motion.h1>

        {/* Formerly Section */}
        <motion.h2
          className="text-lg font-light font-jetbrains-mono max-w-3xl leading-relaxed mt-2 relative mx-auto text-center md:text-left"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          FORMERLY @{" "}
          <span className="relative">
            APPLE 👨🏻‍💻, VERIFIEDWORKS AGENCY; MANAGED CLIENTS @SAMSUNGUS, ELECTRONIC ARTS,
            <HandDrawnUnderline className="text-pastel-pink bottom-0 left-0" />
          </span>{" "}
          LED SOCIAL & GAMING CAMPAIGNS FOR{" "}
          <span className="border-b-4 border-dotted border-pastel-purple">
            DISCORD, TWITCH, CYBERPUNK, & POKÉMON GO + MORE 🎮
          </span>
        </motion.h2>

        {/* Explore My Work Button (Centered) */}
        <div className="mt-10 flex justify-center">
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

        {/* Approach Section with New Effects */}
        <motion.section
          id="approach"
          className="container mx-auto px-6 py-16 text-center md:text-left"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h3 className="text-xl font-medium mb-8 uppercase">Approach</h3>
          <div className="text-xl sm:text-2xl md:text-3xl font-normal leading-relaxed max-w-4xl mx-auto space-y-6">
            <motion.p
              className="font-space-grotesk relative"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Stories are the <span className="text-pastel-pink font-bold">heartbeat</span> of connection, shaping our
              digital landscape. It's not just about{" "}
              <span className="font-bold text-pastel-blue">what</span> we say, but{" "}
              <span className="font-bold text-pastel-green">how we say it</span>.
              <HandDrawnUnderline className="text-pastel-pink bottom-0 left-0" />
            </motion.p>

            <motion.p
              className="font-jetbrains-mono"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              My focus? Crafting narratives that **resonate**, designing visuals that **captivate**, and developing
              strategies that **engage**.
            </motion.p>

            <motion.p
              className="font-space-grotesk relative"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              Because when content speaks to the **soul**,{" "}
              <span className="italic relative inline-block">
                it ignites real change
                <HandDrawnUnderline className="text-pastel-purple bottom-0 left-0" />
              </span>
            </motion.p>
          </div>
        </motion.section>
      </main>

      <Footer />
    </div>
  )
}