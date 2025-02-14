"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { usePathname } from "next/navigation"
import { useState } from "react"
import { Menu, X } from "lucide-react"

export default function Header() {
  const pathname = usePathname()
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const navLinks = [
    { href: "/work", label: "WORK" },
    { href: "/art", label: "ART" },
    { href: "/blog", label: "BLOG" },
    { href: "/game", label: "COSMIC QUEST" },
    { href: "/meet-stephen", label: "ABOUT" },
  ]

  return (
    <header className="z-50">
      <div className="container mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          <Link href="/" className="text-xl md:text-2xl font-bold font-dotgothic16 hover:bg-clip-text hover:text-transparent hover:bg-gradient-to-r hover:from-pastel-pink hover:via-pastel-purple hover:to-pastel-blue transition-all">
            @OXYTOCINS
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm hover:bg-clip-text hover:text-transparent hover:bg-gradient-to-r hover:from-pastel-pink hover:via-pastel-purple hover:to-pastel-blue transition-all font-jetbrains-mono"
              >
                {link.label}
              </Link>
            ))}
            <motion.a
              href="mailto:howdy@oxytocins.me"
              className="bg-white text-deep-grey px-4 py-2 text-sm font-medium hover:bg-gradient-to-r hover:from-pastel-pink hover:via-pastel-purple hover:to-pastel-blue hover:text-white transition-all relative overflow-hidden font-jetbrains-mono"
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
