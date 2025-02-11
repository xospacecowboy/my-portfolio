"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { motion } from "framer-motion"
import Footer from "../components/Footer"

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

const HandDrawnSquiggle = ({ className }: { className?: string }) => (
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
      d="M0 7.5C10 2.5 20 12.5 30 7.5C40 2.5 50 12.5 60 7.5C70 2.5 80 12.5 90 7.5C95 5 100 7.5 100 7.5"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
    />
  </svg>
)

export default function Home() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <div className="bg-deep-grey text-white min-h-screen font-space-grotesk overflow-x-hidden">
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled ? "bg-deep-grey/90 backdrop-blur-sm" : ""
        }`}
      >
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          <Link href="/" className="text-2xl font-bold tracking-tighter">@OXYTOCINS</Link>
          <nav className="flex items-center space-x-8">
            <Link href="/work" className="text-sm hover:opacity-70 transition-opacity font-jetbrains-mono">PORTFOLIO</Link>
            <Link href="/meet-stephen" className="text-sm hover:opacity-70 transition-opacity font-jetbrains-mono">ABOUT</Link>
            <motion.a
              href="mailto:beardslee.stephen@icloud.com"
              className="bg-white text-deep-grey px-4 py-2 text-sm font-medium hover:bg-gray-200 transition-colors relative overflow-hidden font-jetbrains-mono"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              MAIL
            </motion.a>
          </nav>
        </div>
      </header>

      <main className="pt-24">
        <section className="container mx-auto px-6 py-16 flex flex-col space-y-8">
          <motion.h1
            className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight mb-4 max-w-3xl text-left"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            HOWDY, I'M STEPHEN—A{" "}
            <span className="font-normal italic relative inline-block">
              SOCIAL MEDIA & CREATIVE PRO
              <HandDrawnUnderline className="text-pastel-blue bottom-0 left-0 w-full" />
            </span>{" "}
            📍HOUSTON, FREELANCING <span className="bg-pastel-green text-deep-grey px-1">ACROSS INDUSTRIES.</span>
          </motion.h1>

          <motion.h2
            className="text-lg sm:text-xl md:text-2xl font-normal max-w-3xl text-left leading-relaxed mt-2 mb-8 relative font-jetbrains-mono"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            FORMERLY @{" "}
            <span className="relative">
              APPLE 👨🏻‍💻, VERIFIEDWORKS AGENCY; MANAGED CLIENTS @SAMSUNGUS, ELECTRONIC ARTS,
              <HandDrawnUnderline className="text-pastel-green bottom-0 left-0" />
            </span>{" "}
            LED SOCIAL & GAMING CAMPAIGNS FOR{" "}
            <span className="border-b-2 border-dotted border-pastel-pink">DISCORD, TWITCH, CYBERPUNK, & POKÉMON GO + MORE 🎮</span>
          </motion.h2>

          <motion.div
            className="mt-8 mb-8 text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <Link href="/work">
              <motion.button
                className="bg-pastel-blue text-deep-grey px-6 py-3 rounded-full text-lg font-bold hover:bg-pastel-purple transition-colors duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Explore My Work
              </motion.button>
            </Link>
          </motion.div>
        </section>
      </main>

      <motion.section
        id="approach"
        className="container mx-auto px-6 py-16"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h3 className="text-xl font-medium mb-8 uppercase">Approach</h3>
        <p className="text-2xl sm:text-3xl md:text-4xl font-normal leading-relaxed max-w-4xl relative font-jetbrains-mono">
          Stories are the heartbeat of connection, shaping our digital landscape 🌟 It's not just about{" "}
          <span className="font-bold text-pastel-pink">what</span> we say, but{" "}
          <span className="font-bold text-pastel-blue">how we say it.</span>
        </p>

        <p className="text-xl mt-6">
          My focus? Crafting{" "}
          <span className="italic relative inline-block">
            narratives that resonate 📚
            <HandDrawnSquiggle className="text-pastel-green bottom-0 left-0" />
          </span>
          , designing visuals that captivate, and developing strategies that engage.
        </p>
      </motion.section>

      <Footer />
    </div>
  )
}