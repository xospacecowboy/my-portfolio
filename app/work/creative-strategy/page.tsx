"use client"

// ===================================
// Imports and Dependencies
// ===================================
import Link from "next/link"
import { motion } from "framer-motion"
import Footer from "@/components/Footer"

const projects = [
  {
    title: "Electronic Arts Image Transformation",
    description:
      "Led a team in implementing a purpose-driven creative platform and nuanced social content strategy to redefine EA's public image.",
    results: "4MM+ new followers and significant increase in positive sentiment within 5 months.",
  },
  {
    title: "Samsung US Influencer Program",
    description: "Designed and scaled a centralized Influencer program, contracting 90 long-term partnerships.",
    results:
      "Generated 5,262+ unique content pieces, resulting in 229.1+ million impressions and 26.1+ million engagements.",
  },
  {
    title: "Electronic Arts Global Holiday Campaign",
    description:
      "Developed a comprehensive marketing and social media campaign involving 25 influencers across various tiers.",
    results:
      "29 curated moments, 153 social media posts, reaching over 13.4 million with 568.9K+ impressions. Sentiment score surpassed benchmark by +17%.",
  },
]

export default function CreativeStrategyPage() {
  return (
    <div className="bg-deep-grey text-white min-h-screen font-space-grotesk">
      <header className="container mx-auto px-6 py-8">
        <Link href="/work" className="text-2xl font-bold tracking-tighter hover:text-pastel-blue transition-colors">
          ← Back to Work
        </Link>
      </header>

      <main className="container mx-auto px-6 py-12">
        <h1 className="text-5xl font-bold mb-12 bg-clip-text text-transparent bg-gradient-to-r from-pastel-pink via-pastel-purple to-pastel-blue">
          Creative Strategy & Brand Storytelling
        </h1>

        <p className="text-xl mb-12 font-jetbrains-mono">
          Crafting innovative campaigns and narratives that resonate with audiences, I specialize in developing
          purpose-driven creative platforms and nuanced social content strategies that redefine brand perceptions and
          foster stronger emotional connections with target demographics.
        </p>

        <div className="grid gap-12">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              className="relative overflow-hidden"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <div className="bg-white/5 p-8 rounded-lg">
                <h2 className="text-3xl font-bold mb-4">{project.title}</h2>
                <p className="text-lg mb-4 font-jetbrains-mono">{project.description}</p>
                <p className="text-lg font-medium text-pastel-blue">Results: {project.results}</p>
              </div>
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-pastel-pink via-pastel-purple to-pastel-blue opacity-0"
                animate={{ opacity: 0.2 }}
                transition={{ duration: 0.3 }}
              />
            </motion.div>
          ))}
        </div>
      </main>

      <Footer />
    </div>
  )
}
