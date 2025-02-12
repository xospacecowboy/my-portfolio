"use client"
import Link from "next/link"
import { motion } from "framer-motion"
import Footer from "@/components/Footer"
import { useMousePosition } from "@/hooks/useMousePosition"

const GradientText = ({ children, className = "" }) => (
  <motion.span
    className={`bg-clip-text text-transparent bg-gradient-to-r from-pastel-pink via-pastel-purple to-pastel-blue cursor-pointer ${className}`}
    whileHover={{ backgroundSize: "200% 200%" }}
    transition={{ duration: 0.5 }}
  >
    {children}
  </motion.span>
)

export default function AboutPage() {
  const mousePosition = useMousePosition()

  return (
    <div className="bg-deep-grey text-white min-h-screen font-space-grotesk cursor-none">
      <motion.div
        className="fixed z-50 pointer-events-none w-8 h-8"
        animate={{ x: mousePosition.x - 16, y: mousePosition.y - 16 }}
      >
        <img src="/cursor.png" alt="Custom Cursor" className="w-full h-full" />
      </motion.div>

      <header className="container mx-auto px-6 py-8">
        <Link href="/" className="text-2xl font-bold tracking-tighter hover:text-pastel-blue transition-colors">
          @OXYTOCINS
        </Link>
      </header>

      <main className="container mx-auto px-6 py-12">
        <h1 className="text-5xl font-bold mb-12">
          Meet <GradientText>Stephen</GradientText>
        </h1>

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

      <Footer />
    </div>
  )
}

