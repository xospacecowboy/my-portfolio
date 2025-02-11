"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { motion } from "framer-motion"
import Footer from "../components/Footer"

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
    height="20"
    viewBox="0 0 100 20"
    preserveAspectRatio="none"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M0 10C10 5 20 15 30 10C40 5 50 15 60 10C70 5 80 15 90 10C95 7.5 100 10 100 10"
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
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? "bg-deep-grey/90 backdrop-blur-sm" : ""}`}
      >
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          <Link href="/" className="text-2xl font-bold tracking-tighter">
            @OXYTOCINS
          </Link>
          <nav className="flex items-center space-x-8">
            <Link href="/work" className="text-sm hover:opacity-70 transition-opacity font-jetbrains-mono">
              PORTFOLIO
            </Link>
            <Link href="/meet-stephen" className="text-sm hover:opacity-70 transition-opacity font-jetbrains-mono">
              ABOUT
            </Link>
            <motion.a
              href="mailto:beardslee.stephen@icloud.com"
              className="bg-white text-deep-grey px-4 py-2 text-sm font-medium hover:bg-gray-200 transition-colors relative overflow-hidden font-jetbrains-mono"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              MAIL
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-pastel-pink via-pastel-purple to-pastel-blue opacity-0"
                initial={{ x: "-100%" }}
                whileHover={{ x: "100%", opacity: 0.5 }}
                transition={{ duration: 0.5 }}
              />
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
            className="text-lg sm:text-xl md:text-2xl font-normal max-w-3xl text-left leading-relaxed mt-2 mb-4 relative font-jetbrains-mono"
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
            <span className="border-b-2 border-dotted border-pastel-pink">
              DISCORD, TWITCH, CYBERPUNK, & POKÉMON GO + MORE 🎮
            </span>
          </motion.h2>

          <motion.div
            className="py-16" // Increased padding for better spacing
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <Link href="/work" className="inline-block">
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
        className="container mx-auto px-6 py-16" // Adjusted padding
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h3 className="text-xl font-medium mb-8 uppercase">Approach</h3>
        <div className="text-xl sm:text-2xl md:text-3xl font-normal leading-relaxed max-w-4xl relative font-jetbrains-mono space-y-4">
          <p>
            🌟 Stories are the heartbeat of connection,{" "}
            <span className="relative inline-block">
              shaping our digital landscape 🌐
              <HandDrawnCircle className="text-pastel-purple -top-1/4 -left-1/4 w-150 h-150" />
            </span>
            . It's not just about <span className="font-bold text-pastel-pink">what</span> we say, but{" "}
            <span className="font-bold text-pastel-blue">how we say it</span>.
          </p>

          <p>
            My focus? Crafting{" "}
            <span className="italic relative inline-block">
              narratives that resonate 📚
              <HandDrawnSquiggle className="text-pastel-green bottom-0 left-0" />
            </span>
            , designing <span className="font-bold text-pastel-green">visuals that captivate 🎨</span>, and developing{" "}
            <span className="font-bold text-pastel-purple">strategies that engage 🎯</span>.
          </p>

          <p>
            Because when content speaks to the soul,{" "}
            <span className="italic relative inline-block bg-pastel-blue text-deep-grey px-1">
              it ignites real change 🔥
              <HandDrawnUnderline className="text-pastel-pink bottom-0 left-0" />
            </span>
          </p>
        </div>
      </motion.section>

      <motion.section
        id="partnerships"
        className="container mx-auto px-6 py-16"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <h3 className="text-xl font-medium mb-8 uppercase">Featured Partnerships</h3>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 text-sm font-jetbrains-mono">
          {["APPLE", "SAMSUNG", "ELECTRONIC ARTS", "DISCORD", "TWITCH", "CYBERPUNK", "POKÉMON GO", "VERIFIEDWORKS"].map(
            (partner, index) => (
              <motion.div
                key={partner}
                className="bg-deep-grey border border-white/20 p-4 rounded-lg flex items-center justify-center text-center hover:bg-white/10 transition-colors duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {partner}
              </motion.div>
            ),
          )}
        </div>
      </motion.section>

      <Footer />
    </div>
  )
}

