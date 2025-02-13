"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { usePathname } from "next/navigation"
import { useState, useEffect } from "react"
import { Menu, X } from "lucide-react"

export default function Header() {
  const pathname = usePathname()
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navLinks = [
    { href: "/work", label: "WORK" },
    { href: "/art", label: "ART" },
    { href: "/blog", label: "BLOG" },
    { href: "/meet-stephen", label: "ABOUT" },
  ]

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled || isMobileMenuOpen
          ? "bg-deep-grey/80 backdrop-blur-sm" 
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          <Link href="/" className="text-xl md:text-2xl font-bold tracking-tighter hover:text-pastel-blue transition-colors">
            @OXYTOCINS
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm hover:text-pastel-blue transition-colors font-jetbrains-mono"
              >
                {link.label}
              </Link>
            ))}
            <motion.a
              href="mailto:beardslee.stephen@icloud.com"
              className="bg-white text-deep-grey px-4 py-2 text-sm font-medium hover:bg-pastel-blue hover:text-white transition-colors relative overflow-hidden font-jetbrains-mono"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              @
            </motion.a>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 hover:text-pastel-blue transition-colors"
            aria-label="Toggle mobile menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <motion.nav
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden py-4"
          >
            <div className="flex flex-col space-y-4">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-sm hover:text-pastel-blue transition-colors font-jetbrains-mono py-2"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
              <motion.a
                href="mailto:beardslee.stephen@icloud.com"
                className="bg-white text-deep-grey px-4 py-2 text-sm font-medium hover:bg-pastel-blue hover:text-white transition-colors font-jetbrains-mono inline-block w-fit"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                CONTACT
              </motion.a>
            </div>
          </motion.nav>
        )}
      </div>
    </header>
  )
}
