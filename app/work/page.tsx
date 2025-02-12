"use client"

import { useState } from "react"
import Link from "next/link"
import { motion } from "framer-motion"
import Footer from "@/components/Footer"
import { useMousePosition } from "@/hooks/useMousePosition"

const categories = [
  {
    title: "Creative Strategy & Brand Storytelling",
    description: "Crafting innovative campaigns and narratives that resonate with audiences.",
    link: "/work/creative-strategy",
  },
  {
    title: "Community Building & Engagement",
    description: "Fostering vibrant communities and driving meaningful interactions.",
    link: "/work/community-building",
  },
  {
    title: "Influencer & Talent Partnerships",
    description: "Collaborating with creators and celebrities to amplify brand messages.",
    link: "/work/influencer-partnerships",
  },
  {
    title: "Experiential Marketing & Events",
    description: "Creating immersive experiences that leave lasting impressions.",
    link: "/work/experiential-marketing",
  },
  {
    title: "Social Media & Content Development",
    description: "Developing engaging content strategies across various platforms.",
    link: "/work/social-media",
  },
]

export default function WorkPage() {
  const [hoveredCategory, setHoveredCategory] = useState<number | null>(null)
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
        <h1 className="text-5xl font-bold mb-12 bg-clip-text text-transparent bg-gradient-to-r from-pastel-pink via-pastel-purple to-pastel-blue">
          Work
        </h1>

        <div className="grid gap-12">
          {categories.map((category, index) => (
            <motion.div
              key={category.title}
              className="relative overflow-hidden"
              onMouseEnter={() => setHoveredCategory(index)}
              onMouseLeave={() => setHoveredCategory(null)}
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <Link href={category.link} className="block">
                <div className="bg-white/5 p-8 rounded-lg">
                  <h2 className="text-3xl font-bold mb-4">{category.title}</h2>
                  <p className="text-lg mb-4 font-jetbrains-mono">{category.description}</p>
                  <span className="inline-flex items-center text-lg font-medium text-pastel-blue">Explore</span>
                </div>
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-pastel-pink via-pastel-purple to-pastel-blue opacity-0"
                  animate={{ opacity: hoveredCategory === index ? 0.2 : 0 }}
                  transition={{ duration: 0.3 }}
                />
              </Link>
            </motion.div>
          ))}
        </div>
      </main>

      <Footer />
    </div>
  )
}

