"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { motion } from "framer-motion"
import Footer from "../../components/Footer"
import Header from "../../components/Header"

// Art Projects Data
const artProjects = [
  { 
    id: 1, 
    title: "Abstract Composition", 
    category: "Painting", 
    description: "Exploring form and color through abstract expression",
    imageUrl: "/placeholder.svg?height=300&width=300" 
  },
  { 
    id: 2, 
    title: "Digital Landscape", 
    category: "Digital Art", 
    description: "Merging natural elements with digital techniques",
    imageUrl: "/placeholder.svg?height=300&width=300" 
  },
  {
    id: 3,
    title: "Minimalist Logo Design",
    category: "Graphic Design",
    description: "Clean, modern branding solutions",
    imageUrl: "/placeholder.svg?height=300&width=300",
  },
  { 
    id: 4, 
    title: "Responsive Website", 
    category: "Web Design", 
    description: "Beautiful, functional digital experiences",
    imageUrl: "/placeholder.svg?height=300&width=300" 
  },
]

const GradientText = ({ children, className = "" }: { children: React.ReactNode; className?: string }) => (
  <span
    className={`bg-clip-text text-transparent bg-gradient-to-r from-pastel-pink via-pastel-purple to-pastel-blue cursor-pointer ${className}`}
  >
    {children}
  </span>
)

export default function ArtPage() {
  const [hoveredProject, setHoveredProject] = useState<number | null>(null)

  return (
    <div className="bg-deep-grey text-white min-h-screen">
      <Header />

      <main className="container mx-auto px-6 pt-32">
        {/* Hero Section */}
        <section className="pb-12">
          <h1 
            className="text-6xl md:text-7xl font-bold font-dotgothic16 mb-6"
          >
            CREATIVE <br />
            <GradientText>EXPRESSIONS</GradientText>
          </h1>
          <p
            className="text-xl text-white/80 font-jetbrains-mono max-w-2xl"
          >
            A curated collection of artistic explorations, from traditional mediums to digital innovations. 
            Each piece represents a unique perspective on design, creativity, and visual storytelling.
          </p>
        </section>

        {/* Art Grid */}
        <section className="pb-16">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {artProjects.map((project, index) => (
              <motion.div
                key={project.id}
                className="group relative overflow-hidden rounded-lg bg-white/[0.02] border border-white/[0.05] transition-all duration-300 hover:bg-white/[0.05]"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.02 }}
              >
                <div className="aspect-square relative">
                  <Image
                    src={project.imageUrl}
                    alt={project.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="absolute inset-0 flex flex-col justify-end p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="relative z-10">
                    <h3 className="text-xl font-bold mb-2 text-white">
                      {project.title}
                    </h3>
                    <div className="text-sm text-white/80 font-jetbrains-mono">
                      {project.category}
                    </div>
                  </div>
                </div>
                <div className="absolute inset-0 bg-gradient-to-r from-pastel-pink via-pastel-purple to-pastel-blue opacity-0 transition-opacity duration-300 group-hover:opacity-30" />
              </motion.div>
            ))}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
