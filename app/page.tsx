"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { motion, useAnimation } from "framer-motion"
import Footer from "../components/Footer"
import { useMousePosition } from "../hooks/useMousePosition"

// Hand-drawn underline effect
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

<header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${scrolled ? "bg-deep-grey/90 backdrop-blur-sm" : ""}`}
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


      <main className="container mx-auto px-6 pt-40 pb-12">
        {/* Title Section */}
        <motion.h1
          className="text-5xl font-bold leading-tight mb-8 relative text-left max-w-4xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          𐚁 HOWDY, I'M STEPHEN—A{" "}
          <motion.span
            className="font-normal italic relative inline-block"
            initial={{ backgroundSize: "0 100%" }}
            animate={{ backgroundSize: "100% 100%" }}
            transition={{ duration: 1, delay: 0.5 }}
            style={{
              backgroundImage: "linear-gradient(to right, #BAE1FF, #BAE1FF)",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "0 100%",
            }}
          >
            SOCIAL MEDIA & CREATIVE PRO
          </motion.span>{" "}
          📍HTX, <br className="sm:hidden" />
          <span className="bg-pastel-green text-deep-grey px-2 py-1 rounded-xl">
            FREELANCING ACROSS INDUSTRIES 🐎
          </span>
        </motion.h1>

        {/* Formerly Section */}
        <motion.h2
          className="text-3xl sm:text-3xl font-medium font-jetbrains-mono max-w-3xl leading-snug mt-20 relative text-left"
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

        <motion.div
          className="container mx-auto px-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <div className="w-full h-px bg-gradient-to-r from-transparent via-white/20 to-transparent my-8" />
          <div className="flex justify-center">
            <Link href="/work" className="inline-block">
              <motion.button
                className="bg-deep-grey text-white px-8 py-4 text-lg font-bold border border-pastel-blue hover:bg-pastel-blue hover:text-deep-grey transition-all duration-300 relative group"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="relative z-10">Explore My Work</span>
                <div className="absolute inset-0 bg-gradient-to-r from-pastel-pink via-pastel-purple to-pastel-blue opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </motion.button>
            </Link>
          </div>
          <div className="w-full h-px bg-gradient-to-r from-transparent via-white/20 to-transparent my-8" />
        </motion.div>

        {/* Approach Section with New Effects */}
        <motion.section
          id="approach"
          className="container mx-auto px-6 py-16 text-left md:text-left"
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

        {/* Partnerships Section */}
        <motion.section
          id="partnerships"
          className="container mx-auto px-6 py-16 text-left"
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
                className="bg-deep-grey border border-white/20 p-4 rounded-lg flex items-center justify-center text-left hover:bg-white/10 transition-colors duration-300 cursor-pointer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {partner}
              </motion.div>
            ))}
          </div>
        </motion.section>
      </main>

      <Footer />
    </div>
  )
}