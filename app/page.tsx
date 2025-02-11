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
    style={{
      bottom: '-5px',
      left: 0,
      zIndex: -1,
      transform: 'translateZ(0)', // Force hardware acceleration
    }}
  >
    <path
      d="M0 7.5C8 2.5 20 12.5 30 7.5C40 2.5 50 12.5 60 7.5C70 2.5 80 12.5 90 7.5C95 5 100 7.5 100 7.5"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      vectorEffect="non-scaling-stroke" // Ensures consistent stroke width
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
    <>
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

        <main className="pt-32">
          <section className="container mx-auto px-6 py-16 flex flex-col">
            <motion.h1
              className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight mb-6 max-w-5xl text-left relative"
            >
              {/* HOWDY Effect - Matches DESIGN */}
              <motion.span
                className="relative inline-block px-2 font-bold"
                whileHover={{ letterSpacing: "2px" }}
                transition={{ duration: 0.3 }}
              >
                 𐚁 HOWDY,
              </motion.span>{" "}
              I'M STEPHEN—A{" "}
              
              {/* Gradient for SOCIAL MEDIA & CREATIVE PRO - Plays Once */}
              <motion.span
                className="font-normal italic relative inline-block px-2"
                initial={{ backgroundSize: "0% 100%" }}
                animate={{ backgroundSize: "100% 100%" }}
                transition={{ duration: 1.5, ease: "easeOut" }}
                style={{
                  backgroundImage: "linear-gradient(to right, #B0E57C, #BAE1FF, #FFB6C1)",
                  backgroundRepeat: "no-repeat",
                  backgroundPosition: "0 100%",
                }}
              >
                SOCIAL MEDIA & CREATIVE PRO
              </motion.span>{" "}
              
              <span className="inline-block px-1">BASED IN HTX 📍</span>{" "}
              
              {/* HAND-DRAWN UNDERLINE FOR "FREELANCING ACROSS INDUSTRIES" */}
              <span className="relative">
                FREELANCING{" "}
                <span className="font-italic">ACROSS INDUSTRIES</span> 🐎
                <HandDrawnUnderline className="text-pastel-green bottom-0 left-0" />
              </span>
            </motion.h1>

            {/* FULL-WIDTH DOTTED LINE BREAK */}
            <motion.div
              className="flex justify-center space-x-4 mt-6 mb-4"
            >
              {[...Array(50)].map((_, i) => (
                <motion.span
                  key={i}
                  className="w-2 h-2 bg-gradient-to-r from-pastel-pink via-pastel-purple to-pastel-blue rounded-full"
                  animate={{ y: [0, -2, 0] }}
                  transition={{ duration: 1, delay: i * 0.05, repeat: Infinity, ease: "easeInOut" }}
                />
              ))}
            </motion.div>

            <motion.p className="text-2xl sm:text-3xl md:text-4xl font-light italic max-w-5xl text-left mt-4 relative">
              W/ A PASSION FOR{" "}
              <motion.span
                className="font-bold relative inline-block cursor-pointer"
                whileHover={{ backgroundSize: "100% 100%" }}
                transition={{ duration: 0.5 }}
                style={{
                  backgroundImage: "linear-gradient(to right, #BAE1FF, #BAE1FF)",
                  backgroundRepeat: "no-repeat",
                  backgroundPosition: "0 100%",
                  backgroundSize: "0% 100%",
                }}
              >
                STORYTELLING
              </motion.span>{" "}
              &{" "}
              <motion.span
                className="relative inline-block font-bold cursor-pointer"
                whileHover={{ letterSpacing: "2px" }}
                transition={{ duration: 0.3 }}
              >
                DESIGN
              </motion.span>
              , I{" "}
              <motion.span
                className="font-bold relative inline-block cursor-pointer"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                CRAFT
              </motion.span>{" "}
              DIGITAL{" "}
              <motion.span
                className="relative inline-block font-bold cursor-pointer"
                whileHover={{ backgroundSize: "100% 100%" }}
                transition={{ duration: 0.5 }}
                style={{
                  backgroundImage: "linear-gradient(to right, #BAE1FF, #BAE1FF)",
                  backgroundRepeat: "no-repeat",
                  backgroundPosition: "0 100%",
                  backgroundSize: "0% 100%",
                }}
              >
                EXPERIENCES
              </motion.span>{" "}
              THAT{" "}
              <motion.span
                className="relative inline-block font-bold cursor-pointer"
                whileHover={{ letterSpacing: "2px" }}
                transition={{ duration: 0.3 }}
              >
                CONNECT
              </motion.span>
              ,{" "}
              <motion.span
                className="font-bold relative inline-block cursor-pointer"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                INSPIRE
              </motion.span>{" "}
              &{" "}
              <motion.span
                className="relative inline-block font-bold cursor-pointer"
                whileHover={{ backgroundSize: "100% 100%" }}
                transition={{ duration: 0.5 }}
                style={{
                  backgroundImage: "linear-gradient(to right, #BAE1FF, #BAE1FF)",
                  backgroundRepeat: "no-repeat",
                  backgroundPosition: "0 100%",
                  backgroundSize: "0% 100%",
                }}
              >
                ENGAGE
              </motion.span>
              .
            </motion.p>
          </section>

          <section className="container mx-auto px-6 py-8">
            <motion.h2
              className="text-lg sm:text-xl md:text-2xl font-normal max-w-3xl text-left leading-relaxed relative font-jetbrains-mono"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <motion.span
                className="relative inline-block"
                whileHover={{ letterSpacing: "1px" }}
                transition={{ duration: 0.3 }}
              >
                FORMERLY @{" "}
                <motion.span
                  className="relative inline-block"
                  style={{
                    background: "linear-gradient(to right, #B0E57C, #BAE1FF)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                  }}
                >
                  APPLE 👨🏻‍💻
                </motion.span>
              </motion.span>
              ,{" "}
              <motion.span
                className="relative inline-block"
                whileHover={{ scale: 1.05 }}
              >
                VERIFIEDWORKS AGENCY
              </motion.span>
              ; MANAGED CLIENTS{" "}
              <motion.span
                className="relative inline-block"
                style={{
                  background: "linear-gradient(to right, #FFB6C1, #BAE1FF)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                @SAMSUNGUS, ELECTRONIC ARTS
              </motion.span>
              ,{" "}
              <span className="relative">
                LED SOCIAL & GAMING CAMPAIGNS FOR{" "}
                <motion.span
                  className="border-b-2 border-dotted border-pastel-pink inline-block"
                  whileHover={{ scale: 1.05 }}
                >
                  DISCORD, TWITCH, CYBERPUNK, & POKÉMON GO + MORE 🎮
                </motion.span>
                <HandDrawnUnderline className="text-pastel-purple" />
              </span>
            </motion.h2>
          </section>

          <section id="approach" className="container mx-auto px-6 py-16">
            <h3 className="text-xl font-medium mb-8 uppercase">Approach</h3>
            <div className="text-xl sm:text-2xl md:text-3xl font-normal leading-relaxed max-w-4xl relative space-y-6">
              <motion.p
                className="font-space-grotesk"
                initial={{ backgroundSize: "0% 100%" }}
                whileHover={{ backgroundSize: "100% 100%" }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                style={{
                  backgroundImage: "linear-gradient(to right, #BAE1FF, #FFB6C1)",
                  backgroundRepeat: "no-repeat",
                  backgroundPosition: "0 100%",
                }}
              >
                Stories are the <span className="font-bold">heartbeat</span> of connection, shaping our digital landscape.
                It's not just about <span className="font-bold text-pastel-pink">what</span> we say, but{" "}
                <span className="font-bold text-pastel-blue">how we say it</span>.
              </motion.p>

              <motion.p
                className="font-jetbrains-mono"
                initial={{ backgroundSize: "0% 100%" }}
                whileHover={{ backgroundSize: "100% 100%" }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                style={{
                  backgroundImage: "linear-gradient(to right, #FFD700, #FF6347)",
                  backgroundRepeat: "no-repeat",
                  backgroundPosition: "0 100%",
                }}
              >
                My focus? Crafting narratives that <span className="font-bold">resonate</span>, designing visuals that{" "}
                <span className="font-bold">captivate</span>, and developing strategies that <span className="font-bold">engage</span>.
              </motion.p>

              <motion.p
                className="font-space-grotesk"
                initial={{ backgroundSize: "0% 100%" }}
                whileHover={{ backgroundSize: "100% 100%" }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                style={{
                  backgroundImage: "linear-gradient(to right, #8A2BE2, #00CED1)",
                  backgroundRepeat: "no-repeat",
                  backgroundPosition: "0 100%",
                }}
              >
                Because when content speaks to the <span className="italic">soul</span>,{" "}
                <span className="italic relative inline-block">
                  it ignites real change
                  <HandDrawnUnderline className="text-pastel-pink bottom-0 left-0" />
                </span>
              </motion.p>
            </div>
          </section>

          <section
            id="partnerships"
            className="container mx-auto px-6 py-16"
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
          </section>

          <section
            id="skills"
            className="container mx-auto px-6 py-16"
          >
            <h3 className="text-xl font-medium mb-8 uppercase">Skills</h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 text-sm font-jetbrains-mono">
              {[
                "Social Media",
                "Client relationships",
                "Copywriting",
                "Creative direction",
                "Content production",
                "Communication skills",
                "Influencer Marketing",
                "Team leadership",
              ].map((skill, index) => (
                <motion.div
                  key={skill}
                  className="bg-deep-grey border border-white/20 p-4 rounded-lg flex items-center justify-center text-center transition-colors duration-300 cursor-pointer"
                  whileHover={{ backgroundColor: "rgba(255, 255, 255, 0.1)" }}
                >
                  {skill}
                </motion.div>
              ))}
            </div>
          </section>

        <div className="container mx-auto px-6 mt-16">
          <div className="w-full h-px bg-gradient-to-r from-transparent via-white/20 to-transparent my-16" />
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
          <div className="w-full h-px bg-gradient-to-r from-transparent via-white/20 to-transparent my-16" />
        </div>
      </main>
    </div>
  </>
)
}