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
      d="M0 7.5C8 2.5 20 12.5 30 7.5C40 2.5 50 12.5 60 7.5C70 2.5 80 12.5 90 7.5C95 5 100 7.5 100 7.5"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
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

      <main className="pt-24">
        <section className="container mx-auto px-6 py-16 flex flex-col">
          <motion.h1
            className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight mb-4 max-w-3xl text-left"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            HOWDY, I'M STEPHEN—A{" "}
            <motion.span
              className="font-normal italic relative inline-block"
              initial={{ backgroundSize: "0 100%" }}
              animate={{ backgroundSize: "100% 100%" }}
              transition={{ duration: 1, delay: 0.5 }}
              style={{
                backgroundImage: "linear-gradient(to right, #BAE1FF, #BAE1FF)",
                backgroundRepeat: "repeat-x",
                backgroundPosition: "0 100%",
                padding: "2px 5px",
              }}
            >
              SOCIAL MEDIA & CREATIVE PRO
            </motion.span>{" "}
            HTX 📍 FREELANCING <span className="bg-pastel-green text-deep-grey px-1">ACROSS INDUSTRIES 🐎</span>
          </motion.h1>

          <motion.h2
            className="text-lg sm:text-xl md:text-2xl font-normal max-w-3xl text-left leading-relaxed mt-2 relative font-jetbrains-mono"
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
        </section>

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

        <motion.section
          id="approach"
          className="container mx-auto px-6 py-16"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h3 className="text-xl font-medium mb-8 uppercase">Approach</h3>
          <div className="text-xl sm:text-2xl md:text-3xl font-normal leading-relaxed max-w-4xl relative space-y-6">
            <p className="font-space-grotesk">
              Stories are the heartbeat of connection, shaping our digital landscape. It's not just about{" "}
              <span className="font-bold text-pastel-pink">what</span> we say, but{" "}
              <span className="font-bold text-pastel-blue">how we say it</span>.
            </p>

            <p className="font-jetbrains-mono">
              My focus? Crafting narratives that resonate, designing visuals that captivate, and developing strategies
              that engage.
            </p>

            <p className="font-space-grotesk">
              Because when content speaks to the soul,{" "}
              <span className="italic relative inline-block">
                it ignites real change
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

