"use client"

// ===================================
// Imports and Dependencies
// ===================================
import Link from "next/link"
import { motion } from "framer-motion"
import Footer from "@/components/Footer"

// ===================================
// Utility Components
// ===================================
const RandomFont = ({ children }: { children: React.ReactNode }) => {
  const fonts = ["font-dotgothic16", "font-jetbrains-mono"]
  const randomFont = fonts[Math.floor(Math.random() * fonts.length)]
  return <span className={randomFont}>{children}</span>
}

// ===================================
// Gradient Text Component
// ===================================
const GradientText = ({ children, className = "" }: { children: React.ReactNode; className?: string }) => (
  <motion.span
    className={`bg-clip-text text-transparent bg-gradient-to-r from-pastel-pink via-pastel-purple to-pastel-blue cursor-pointer ${className}`}
  >
    {children}
  </motion.span>
)

// ===================================
// Main About Page Component
// ===================================
export default function AboutPage() {
  return (
    <div className="bg-deep-grey text-white min-h-screen font-space-grotesk">
      {/* ===================================
          Header Section
          =================================== */}
      <header className="container mx-auto px-6 py-8">
        <Link href="/" className="text-2xl font-bold tracking-tighter hover:text-pastel-blue transition-colors">
          @OXYTOCINS
        </Link>
      </header>

      {/* ===================================
          Main Content Section
          =================================== */}
      <main className="container mx-auto px-6 py-12">
        {/* ===================================
            Hero Section
            =================================== */}
        <h1 className="text-5xl font-bold mb-12">
          Meet <GradientText>Stephen</GradientText>
        </h1>

        {/* ===================================
              TL;DR Section
              =================================== */}
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

        {/* ===================================
            Bio Section
            =================================== */}
        <div className="grid gap-8 font-jetbrains-mono">
          <motion.p
            className="text-lg"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Stephen Beardslee is a <GradientText>strategic social media leader</GradientText> based in Houston,
            currently working as a <GradientText>Digital Marketing & Social Media Professional</GradientText>.
          </motion.p>

          <motion.p
            className="text-lg"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            With a background in global social media management at <GradientText>Electronic Arts</GradientText> and
            experience as a social strategist and gaming consultant at <GradientText>Cashmere Agency</GradientText>,
            Stephen has worked with major brands like <GradientText>Google, Meta, and Twitch</GradientText>.
          </motion.p>

          <motion.p
            className="text-lg"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            Stephen's approach focuses on creating <GradientText>transformative content</GradientText> that is relevant,
            meaningful, entertaining, and inspiring. He believes that{" "}
            <GradientText>good stories are the key to good content</GradientText> and strives to extract meaningful
            narratives from every idea.
          </motion.p>

          <motion.div
            className="mt-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            <h2 className="text-3xl font-bold mb-4">
              <GradientText>Artistic Pursuits</GradientText>
            </h2>
            <p className="text-lg">
              Beyond his professional endeavors, Stephen is an{" "}
              <GradientText>accomplished artist and graphic designer</GradientText>. His creative work spans various
              mediums, from traditional painting to digital design. As an{" "}
              <GradientText>emerging web developer</GradientText>, Stephen combines his artistic vision with technical
              skills to create engaging and innovative digital experiences.
            </p>
          </motion.div>
        </div>
      </main>

      {/* ===================================
          Footer Section
          =================================== */}
      <Footer />
    </div>
  )
}
