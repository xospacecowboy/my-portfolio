"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { usePathname } from "next/navigation"
import { useState, useEffect } from "react"

export default function Header() {
  const pathname = usePathname()
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? "bg-deep-grey/80 backdrop-blur-sm" 
          : "bg-transparent"
      }`}
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
  )
}
