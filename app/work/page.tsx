"use client"

// ===================================
// Imports and Dependencies
// ===================================
import { useState } from "react"
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
// Work Categories Data
// ===================================
interface Category {
  title: string;
  description: string;
  link?: string;
  isStatic?: boolean;
}

const categories: Category[] = [
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
  {
    title: "More Coming Soon...",
    description: "Additional project samples and references available upon request.",
    isStatic: true,
  },
]

// ===================================
// Main Work Page Component
// ===================================
export default function WorkPage() {
  const [hoveredCategory, setHoveredCategory] = useState<number | null>(null)

  return (
    <div className="bg-deep-grey text-white min-h-screen font-space-grotesk">
      <header className="container mx-auto px-6 py-8">
        <Link href="/" className="text-2xl font-bold tracking-tighter hover:text-pastel-blue transition-colors">
          @OXYTOCINS
        </Link>
      </header>

      <main className="container mx-auto px-6 py-12">
        {/* Hero Section */}
        <section className="text-center mb-16">
          <motion.h1 
            className="text-5xl sm:text-6xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-pastel-pink via-pastel-purple to-pastel-blue mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span className="font-dotgothic16">MY WORK</span>
          </motion.h1>
          <motion.p 
            className="text-xl md:text-2xl text-white/80 max-w-3xl mx-auto font-jetbrains-mono"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Crafting digital experiences that captivate, engage, and inspire.
          </motion.p>
        </section>

        {/* Expertise Pills */}
        <section className="mb-16">
          <motion.div 
            className="grid grid-cols-4 gap-4 max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
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
                className="bg-deep-grey px-4 py-2 rounded-full border border-white/10 text-sm font-jetbrains-mono relative group overflow-hidden cursor-pointer flex items-center justify-center text-center"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.2 }}
              >
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-pastel-pink via-pastel-purple to-pastel-blue opacity-0 group-hover:opacity-10 transition-opacity duration-300"
                />
                {skill}
              </motion.div>
            ))}
          </motion.div>
        </section>

        {/* Work Categories */}
        <section>
          <motion.div 
            className="grid md:grid-cols-2 gap-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            {categories.map((category, index) => (
              <motion.div
                key={category.title}
                className="relative overflow-hidden group"
                onMouseEnter={() => setHoveredCategory(index)}
                onMouseLeave={() => setHoveredCategory(null)}
                whileHover={{ scale: category.isStatic ? 1 : 1.02 }}
                transition={{ duration: 0.3 }}
              >
                {category.isStatic ? (
                  <div className="bg-white/5 p-8 rounded-lg border border-white/10 h-full">
                    <div className="flex flex-col h-full">
                      <div className="flex-grow">
                        <h2 className="text-2xl md:text-3xl font-bold mb-4 font-dotgothic16 text-white/80">{category.title}</h2>
                        <p className="text-lg mb-4 font-jetbrains-mono text-white/60">{category.description}</p>
                      </div>
                      <motion.div 
                        className="inline-flex items-center text-lg font-medium text-white/40 font-jetbrains-mono"
                      >
                        Contact for Details →
                      </motion.div>
                    </div>
                  </div>
                ) : category.link ? (
                  <Link href={category.link} className="block h-full">
                    <div className="bg-white/5 p-8 rounded-lg border border-white/10 group-hover:border-white/20 transition-all duration-300 h-full">
                      <div className="flex flex-col h-full">
                        <div className="flex-grow">
                          <h2 className="text-2xl md:text-3xl font-bold mb-4 font-dotgothic16">{category.title}</h2>
                          <p className="text-lg mb-4 font-jetbrains-mono text-white/80">{category.description}</p>
                        </div>
                        <motion.span 
                          className="inline-flex items-center text-lg font-medium text-pastel-blue font-jetbrains-mono group-hover:translate-x-2 transition-transform duration-300"
                          whileHover={{ scale: 1.05 }}
                        >
                          Explore →
                        </motion.span>
                      </div>
                    </div>
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-pastel-pink via-pastel-purple to-pastel-blue opacity-0 group-hover:opacity-10"
                      animate={{ opacity: hoveredCategory === index ? 0.1 : 0 }}
                      transition={{ duration: 0.3 }}
                    />
                  </Link>
                ) : null}
              </motion.div>
            ))}
          </motion.div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
