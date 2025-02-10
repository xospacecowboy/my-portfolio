"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { ArrowUpRight } from "lucide-react"
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
            STEPHEN
          </Link>
          <nav className="flex items-center space-x-8">
            <Link href="/work" className="text-sm hover:opacity-70 transition-opacity font-jetbrains-mono">
              WORK
            </Link>
            <Link href="/meet-stephen" className="text-sm hover:opacity-70 transition-opacity font-jetbrains-mono">
              MEET STEPHEN
            </Link>
            <motion.a
              href="mailto:beardslee.stephen@icloud.com"
              className="bg-white text-deep-grey px-4 py-2 text-sm font-medium hover:bg-gray-200 transition-colors relative overflow-hidden font-jetbrains-mono"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              HIT ME UP
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
        <section className="container mx-auto px-6 py-24 min-h-screen flex flex-col justify-center">
          <motion.h1
            className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight mb-8 max-w-2xl relative"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            HOWDY, I’M{" "}
            <span className="font-normal italic relative">
              STEPHEN—A CREATIVE AND SOCIAL ALCHEMIST 📍
              <HandDrawnUnderline className="text-pastel-blue bottom-0 left-0" />
            </span>{" "}
            HOUSTON, FREELANCING AS A{" "}
            <span className="bg-pastel-green text-deep-grey px-1">MARKETING CONSULTANT</span>.
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
        </section>

        <section id="methodology" className="container mx-auto px-6 py-24">
          <h3 className="text-xl font-medium mb-8 uppercase">Methodology</h3>
          <p className="text-2xl sm:text-3xl md:text-4xl font-normal leading-relaxed max-w-4xl relative font-jetbrains-mono">
            Good stories are the key to{" "}
            <span className="relative inline-block">
              good content 📚
              <HandDrawnCircle className="text-pastel-purple -top-1/4 -left-1/4 w-150 h-150" />
            </span>
            . The greatest idea in the world will fail if you cannot extract a meaningful story from it. So, focus on
            creating transformative content that is{" "}
            <span className="italic relative bg-pastel-red text-deep-grey px-1">
              relevant, meaningful, entertaining, and inspiring
            </span>{" "}
            and results will follow.
          </p>
        </section>

        <section id="partnerships" className="container mx-auto px-6 py-24">
          <h3 className="text-xl font-medium mb-12 uppercase">Significant Partnerships 🤝</h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8 text-lg">
            {[
              "SAMSUNG",
              "ELECTRONIC ARTS",
              "EPIC GAMES",
              "NIANTIC",
              "JIMMY CHIN",
              "TWITCH.tv",
              "APPLE",
              "ANINE BING",
              "TSM",
              "YARA SHAHIDI",
              "MYTH",
              "KHALID",
              "NATIONAL GEOGRAPHIC",
              "POKIMANE",
              "META",
              "DISCORD",
            ].map((partner, index) => (
              <motion.div
                key={partner}
                className="group cursor-pointer font-jetbrains-mono"
                whileHover={{ scale: 1.1 }}
                transition={{ type: "spring", stiffness: 400 }}
              >
                <Link href="/work">
                  {partner}
                  <ArrowUpRight className="inline-block ml-1 opacity-0 group-hover:opacity-100 transition-opacity" />
                </Link>
              </motion.div>
            ))}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}

