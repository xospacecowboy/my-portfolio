"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { motion } from "framer-motion"
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
      bottom: "-5px",
      left: 0,
      zIndex: -1,
      transform: "translateZ(0)",
    }}
  >
    <path
      d="M0 7.5C8 2.5 20 12.5 30 7.5C40 2.5 50 12.5 60 7.5C70 2.5 80 12.5 90 7.5C95 5 100 7.5 100 7.5"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      vectorEffect="non-scaling-stroke"
    />
  </svg>
)

const GreenSquiggle = () => (
  <svg className="w-full h-8 my-8" viewBox="0 0 200 20" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M0 10C20 5 40 15 60 10C80 5 100 15 120 10C140 5 160 15 180 10C190 7.5 200 10 200 10"
      fill="none"
      stroke="#BFFCC6"
      strokeWidth="3"
      strokeLinecap="round"
    >
      <animate
        attributeName="d"
        dur="5s"
        repeatCount="indefinite"
        values="
          M0 10C20 5 40 15 60 10C80 5 100 15 120 10C140 5 160 15 180 10C190 7.5 200 10 200 10;
          M0 10C20 15 40 5 60 10C80 15 100 5 120 10C140 15 160 5 180 10C190 12.5 200 10 200 10;
          M0 10C20 5 40 15 60 10C80 5 100 15 120 10C140 5 160 15 180 10C190 7.5 200 10 200 10
        "
      />
    </path>
  </svg>
)

const RandomFont = ({ children }) => {
  const [isAltFont, setIsAltFont] = useState(false)

  useEffect(() => {
    setIsAltFont(Math.random() > 0.5)
  }, [])

  return <span className={isAltFont ? "font-dotgothic16" : ""}>{children}</span>
}

export default function Home() {
  const [scrolled, setScrolled] = useState(false)
  const mousePosition = useMousePosition()

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <div className="bg-deep-grey text-white min-h-screen font-space-grotesk overflow-x-hidden cursor-none">
      <div className="fixed inset-0 bg-grid-pattern opacity-5 pointer-events-none"></div>

      <motion.div
        className="fixed z-50 pointer-events-none w-8 h-8"
        animate={{ x: mousePosition.x - 16, y: mousePosition.y - 16 }}
      >
        <img src="/cursor.png" alt="Custom Cursor" className="w-full h-full" />
      </motion.div>

      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${scrolled ? "bg-deep-grey/90 backdrop-blur-sm" : ""}`}
      >
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          <Link href="/" className="text-2xl font-bold tracking-tighter hover:text-pastel-blue transition-colors">
            @OXYTOCINS
          </Link>
          <nav className="flex items-center space-x-8">
            <Link href="/work" className="text-sm hover:text-pastel-blue transition-colors font-jetbrains-mono">
              PORTFOLIO
            </Link>
            <Link href="/art" className="text-sm hover:text-pastel-blue transition-colors font-jetbrains-mono">
              ART
            </Link>
            <Link href="/blog" className="text-sm hover:text-pastel-blue transition-colors font-jetbrains-mono">
              BLOG
            </Link>
            <Link href="/meet-stephen" className="text-sm hover:text-pastel-blue transition-colors font-jetbrains-mono">
              ABOUT
            </Link>
            <motion.a
              href="mailto:beardslee.stephen@icloud.com"
              className="bg-white text-deep-grey px-4 py-2 text-sm font-medium hover:bg-pastel-blue hover:text-white transition-colors relative overflow-hidden font-jetbrains-mono"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              MAIL
            </motion.a>
          </nav>
        </div>
      </header>

      <main className="pt-32">
        <section className="container mx-auto px-6 py-16 flex flex-col relative">
          <motion.h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight mb-6 max-w-5xl text-left relative">
            <motion.span
              className="relative inline-block px-2 font-bold"
              whileHover={{ letterSpacing: "2px" }}
              transition={{ duration: 0.3 }}
            >
              <RandomFont>𐚁 HOWDY,</RandomFont>
            </motion.span>{" "}
            I'M STEPHEN—A{" "}
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
            <span className="relative">
              FREELANCING <span className="font-italic">ACROSS INDUSTRIES</span> 🐎
              <HandDrawnUnderline className="text-pastel-green bottom-0 left-0" />
            </span>
          </motion.h1>

          <GreenSquiggle />

          <motion.p className="text-2xl sm:text-3xl md:text-4xl font-light italic max-w-5xl text-left mt-4 relative">
            <RandomFont>W/ A PASSION FOR</RandomFont>{" "}
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

          <section className="container mx-auto px-6 py-16 relative">
            <motion.h2
              className="text-3xl sm:text-4xl md:text-5xl font-bold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-pastel-green via-pastel-blue to-pastel-pink cursor-pointer"
              whileHover={{ backgroundSize: "200% 200%" }}
              transition={{ duration: 0.5 }}
            >
              <RandomFont>TL;DR</RandomFont>
            </motion.h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <motion.div
                className="group relative overflow-hidden rounded-lg bg-white/5 p-6 transition-all duration-300 hover:bg-white/10"
                whileHover={{ scale: 1.05 }}
              >
                <h3 className="text-2xl font-bold mb-4 text-pastel-pink">Artist</h3>
                <p className="font-jetbrains-mono text-sm">
                  Exploring various mediums to create visually striking and emotionally resonant pieces.
                </p>
                <div className="absolute inset-0 bg-gradient-to-r from-pastel-pink to-pastel-purple opacity-0 transition-opacity duration-300 group-hover:opacity-20" />
              </motion.div>
              <motion.div
                className="group relative overflow-hidden rounded-lg bg-white/5 p-6 transition-all duration-300 hover:bg-white/10"
                whileHover={{ scale: 1.05 }}
              >
                <h3 className="text-2xl font-bold mb-4 text-pastel-blue">Graphic Designer</h3>
                <p className="font-jetbrains-mono text-sm">
                  Crafting compelling visual identities and designs that communicate powerful messages.
                </p>
                <div className="absolute inset-0 bg-gradient-to-r from-pastel-blue to-pastel-green opacity-0 transition-opacity duration-300 group-hover:opacity-20" />
              </motion.div>
              <motion.div
                className="group relative overflow-hidden rounded-lg bg-white/5 p-6 transition-all duration-300 hover:bg-white/10"
                whileHover={{ scale: 1.05 }}
              >
                <h3 className="text-2xl font-bold mb-4 text-pastel-green">Emerging Web Developer</h3>
                <p className="font-jetbrains-mono text-sm">
                  Building interactive and responsive web experiences that blend creativity with functionality.
                </p>
                <div className="absolute inset-0 bg-gradient-to-r from-pastel-green to-pastel-yellow opacity-0 transition-opacity duration-300 group-hover:opacity-20" />
              </motion.div>
              <motion.div
                className="group relative overflow-hidden rounded-lg bg-white/5 p-6 transition-all duration-300 hover:bg-white/10"
                whileHover={{ scale: 1.05 }}
              >
                <h3 className="text-2xl font-bold mb-4 text-pastel-yellow">Chronically Online</h3>
                <p className="font-jetbrains-mono text-sm">
                  Constantly dialed into social media trends, always at the forefront of digital culture and innovation.
                </p>
                <div className="absolute inset-0 bg-gradient-to-r from-pastel-yellow to-pastel-pink opacity-0 transition-opacity duration-300 group-hover:opacity-20" />
              </motion.div>
            </div>
            <motion.div className="mt-8" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link href="/meet-stephen" className="inline-block">
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-pastel-pink via-pastel-purple to-pastel-blue text-lg font-bold hover:underline">
                  Full Bio →
                </span>
              </Link>
            </motion.div>
          </section>

          <section className="container mx-auto px-6 py-8 relative">
            <motion.h2
              className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-pastel-green via-pastel-blue to-pastel-pink cursor-pointer"
              whileHover={{ backgroundSize: "200% 200%" }}
              transition={{ duration: 0.5 }}
            >
              <RandomFont>FORMERLY</RandomFont>
            </motion.h2>
            <p className="text-lg sm:text-xl md:text-2xl font-normal max-w-3xl leading-relaxed font-jetbrains-mono">
              @ <span className="text-pastel-green">APPLE 👨🏻‍💻</span>,{" "}
              <span className="text-pastel-blue">VERIFIEDWORKS AGENCY</span>; MANAGED CLIENTS{" "}
              <span className="text-pastel-pink">@SAMSUNGUS, ELECTRONIC ARTS</span>, LED SOCIAL & GAMING CAMPAIGNS FOR{" "}
              <span className="whitespace-nowrap">DISCORD, TWITCH, CYBERPUNK,</span>{" "}
              <span className="whitespace-nowrap">& POKÉMON GO + MORE 🎮</span>
            </p>
            <motion.div className="mt-6" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link href="/work" className="inline-block">
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-pastel-pink via-pastel-purple to-pastel-blue text-lg font-bold hover:underline">
                  Explore My Work →
                </span>
              </Link>
            </motion.div>
          </section>

          <section id="skills" className="container mx-auto px-6 py-16 relative">
            <motion.h3
              className="text-3xl sm:text-4xl md:text-5xl font-bold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-pastel-blue via-pastel-green to-pastel-yellow cursor-pointer"
              whileHover={{ backgroundSize: "200% 200%" }}
              transition={{ duration: 0.5 }}
            >
              <RandomFont>EXPERTISE</RandomFont>
            </motion.h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 text-sm font-jetbrains-mono">
              {[
                "SOCIAL MEDIA",
                "CLIENT RELATIONSHIPS",
                "COPYWRITING",
                "CREATIVE DIRECTION",
                "CONTENT PRODUCTION",
                "COMMUNICATION SKILLS",
                "INFLUENCER MARKETING",
                "TEAM LEADERSHIP",
              ].map((skill, index) => (
                <motion.div
                  key={skill}
                  className="bg-deep-grey border border-white/20 p-4 rounded-lg flex items-center justify-center text-center transition-colors duration-300 cursor-pointer"
                  whileHover={{ background: "linear-gradient(to right, #B0E57C, #BAE1FF, #FFB6C1)", color: "#1a1a1a" }}
                >
                  {skill}
                </motion.div>
              ))}
            </div>
          </section>

          <section id="approach" className="container mx-auto px-6 py-8 relative">
            <motion.h3
              className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-pastel-pink via-pastel-purple to-pastel-blue cursor-pointer"
              whileHover={{ backgroundSize: "200% 200%" }}
              transition={{ duration: 0.5 }}
            >
              <RandomFont>APPROACH</RandomFont>
            </motion.h3>
            <div className="text-lg sm:text-xl md:text-2xl font-normal leading-relaxed max-w-4xl space-y-6">
              <p className="font-space-grotesk">
                Stories are the <span className="font-bold text-pastel-green">HEARTBEAT</span> of connection, shaping
                our digital landscape and artistic expression. It's not just about{" "}
                <span className="font-bold text-pastel-pink">WHAT</span> we create, but{" "}
                <span className="font-bold text-pastel-blue">HOW WE BRING IT TO LIFE</span>.
              </p>
              <p className="font-jetbrains-mono uppercase">
                My focus? Crafting narratives that <span className="font-bold text-pastel-yellow">RESONATE</span>,
                designing visuals that <span className="font-bold text-pastel-green">CAPTIVATE</span>, and developing
                strategies that <span className="font-bold text-pastel-blue">ENGAGE</span> — whether in the
                <span className="font-dotgothic16"> DIGITAL REALM </span> or on a{" "}
                <span className="font-dotgothic16"> CANVAS</span>.
              </p>
              <p className="font-space-grotesk">
                Because when content speaks to the <span className="italic text-pastel-pink">SOUL</span>,{" "}
                <span className="italic relative inline-block font-dotgothic16">
                  IT IGNITES REAL CHANGE
                  <HandDrawnUnderline className="text-pastel-purple" />
                </span>
              </p>
            </div>
          </section>

          <section className="container mx-auto px-6 py-16">
            <motion.h2
              className="text-3xl sm:text-4xl md:text-5xl font-bold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-pastel-green via-pastel-blue to-pastel-pink cursor-pointer"
              whileHover={{ backgroundSize: "200% 200%" }}
              transition={{ duration: 0.5 }}
            >
              <RandomFont>LATEST THOUGHTS</RandomFont>
            </motion.h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <motion.div
                className="group relative overflow-hidden rounded-lg bg-white/5 p-6 transition-all duration-300 hover:bg-white/10"
                whileHover={{ scale: 1.05 }}
              >
                <Link href="/blog/creative-storytelling">
                  <h3 className="text-2xl font-bold mb-2">The Art of Creative Storytelling in Social Media</h3>
                  <p className="text-sm text-gray-400 mb-4">May 15, 2023</p>
                  <p className="font-jetbrains-mono text-sm">
                    Exploring how narrative techniques can elevate your social media content...
                  </p>
                  <div className="absolute inset-0 bg-gradient-to-r from-pastel-pink to-pastel-purple opacity-0 transition-opacity duration-300 group-hover:opacity-20" />
                </Link>
              </motion.div>
              <motion.div
                className="group relative overflow-hidden rounded-lg bg-white/5 p-6 transition-all duration-300 hover:bg-white/10"
                whileHover={{ scale: 1.05 }}
              >
                <Link href="/blog/influencer-collaborations">
                  <h3 className="text-2xl font-bold mb-2">Maximizing Impact with Influencer Collaborations</h3>
                  <p className="text-sm text-gray-400 mb-4">June 2, 2023</p>
                  <p className="font-jetbrains-mono text-sm">
                    Tips and strategies for successful partnerships with content creators...
                  </p>
                  <div className="absolute inset-0 bg-gradient-to-r from-pastel-blue to-pastel-green opacity-0 transition-opacity duration-300 group-hover:opacity-20" />
                </Link>
              </motion.div>
              <motion.div
                className="group relative overflow-hidden rounded-lg bg-white/5 p-6 transition-all duration-300 hover:bg-white/10"
                whileHover={{ scale: 1.05 }}
              >
                <Link href="/blog">
                  <h3 className="text-2xl font-bold mb-2">Explore More</h3>
                  <p className="text-sm text-gray-400 mb-4">Dive deeper into my thoughts</p>
                  <p className="font-jetbrains-mono text-sm">
                    Discover more insights on social media, creativity, and digital marketing...
                  </p>
                  <div className="absolute inset-0 bg-gradient-to-r from-pastel-green to-pastel-yellow opacity-0 transition-opacity duration-300 group-hover:opacity-20" />
                </Link>
              </motion.div>
            </div>
          </section>

          <section className="container mx-auto px-6 py-16">
            <motion.h2
              className="text-3xl sm:text-4xl md:text-5xl font-bold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-pastel-green via-pastel-blue to-pastel-pink cursor-pointer"
              whileHover={{ backgroundSize: "200% 200%" }}
              transition={{ duration: 0.5 }}
            >
              <RandomFont>LET'S WORK TOGETHER</RandomFont>
            </motion.h2>
            <form className="max-w-lg">
              <div className="mb-6">
                <motion.input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Your Name"
                  className="w-full px-3 py-2 bg-white/10 border border-white/20 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-pastel-blue"
                  whileFocus={{ scale: 1.02 }}
                  transition={{ duration: 0.2 }}
                  required
                />
              </div>
              <div className="mb-6">
                <motion.input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Your Email"
                  className="w-full px-3 py-2 bg-white/10 border border-white/20 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-pastel-blue"
                  whileFocus={{ scale: 1.02 }}
                  transition={{ duration: 0.2 }}
                  required
                />
              </div>
              <div className="mb-6">
                <motion.textarea
                  id="message"
                  name="message"
                  rows={4}
                  placeholder="Your Message"
                  className="w-full px-3 py-2 bg-white/10 border border-white/20 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-pastel-blue"
                  whileFocus={{ scale: 1.02 }}
                  transition={{ duration: 0.2 }}
                  required
                ></motion.textarea>
              </div>
              <div>
                <motion.button
                  type="submit"
                  className="bg-deep-grey text-white px-8 py-4 text-lg font-bold border border-pastel-blue hover:bg-pastel-blue hover:text-deep-grey transition-all duration-300 relative group"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <span className="relative z-10">Send Message</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-pastel-pink via-pastel-purple to-pastel-blue opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </motion.button>
              </div>
            </form>
          </section>
        </section>
        <Footer />
      </main>
    </div>
  )
}

