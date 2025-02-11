"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { ArrowUpRight } from "lucide-react"
import { motion, useAnimation } from "framer-motion"
import Footer from "../../components/Footer"
import { useMousePosition } from "../../hooks/useMousePosition"

const portfolioItems = [
  {
    title: "Creative Strategy 🎨",
    description:
      "Redefining Electronic Arts' public image through purpose-driven campaigns and influencer collaborations. Increased brand sentiment and gained 4MM+ new followers.",
    link: "https://drive.google.com/file/d/1kuw0kRWxzysufPdO0n9gEWzm7anrpuwW/view?usp=sharing",
    color: "text-pastel-blue",
  },
  {
    title: "Community Building 🌟",
    description:
      "Developed a Discord platform to engage and retain gaming audiences. Led community management and created a space with 5,000+ unique sign-ups.",
    link: "#",
    color: "text-pastel-pink",
  },
  {
    title: "Talent & Celebrity 🤝",
    description:
      "Negotiated 300+ creator partnerships, working with Twitch streamers, musicians, and actors to amplify digital campaigns.",
    link: "#",
    color: "text-pastel-green",
  },
  {
    title: "Experiential Marketing 🎭",
    description:
      "Led Samsung’s PAX East activation, partnering with top gaming influencers to drive product engagement and capture 200+ brand assets.",
    link: "#",
    color: "text-pastel-yellow",
  },
  {
    title: "Influencer Strategy 🚀",
    description:
      "Built and scaled an influencer program for Samsung US, contracting 90 creators to generate 5,262+ unique content pieces, reaching 229M+ impressions.",
    link: "https://www.youtube.com/watch?v=o3aLdZK_9TI",
    color: "text-pastel-orange",
  },
]

export default function Work() {
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
        <section className="container mx-auto px-6 py-16 flex flex-col space-y-12">
          <motion.h1
            className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight mb-4 max-w-3xl text-left"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            WORK
          </motion.h1>
        </section>

        <section className="container mx-auto px-6 py-16">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {portfolioItems.map((item, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.05 }}
                className="bg-dark-grey p-6 rounded-2xl shadow-lg transition-all"
              >
                <h2 className={`text-3xl font-bold mb-4 ${item.color}`}>{item.title}</h2>
                <p className="text-lg mb-4 font-jetbrains-mono">{item.description}</p>
                <Link
                  href={item.link}
                  target="_blank"
                  className="inline-flex items-center text-lg font-medium text-white hover:underline"
                >
                  View Work <ArrowUpRight className="ml-2 w-5 h-5" />
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