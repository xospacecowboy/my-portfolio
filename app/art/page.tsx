"use client"

import { useState } from "react"
import Link from "next/link"
import { motion } from "framer-motion"
import Footer from "@/components/Footer"
import { useMousePosition } from "@/hooks/useMousePosition"

// This is a placeholder for your art projects. You'll need to replace this with your actual data.
const artProjects = [
  { id: 1, title: "Abstract Composition", category: "Painting", imageUrl: "/placeholder.svg?height=300&width=300" },
  { id: 2, title: "Digital Landscape", category: "Digital Art", imageUrl: "/placeholder.svg?height=300&width=300" },
  {
    id: 3,
    title: "Minimalist Logo Design",
    category: "Graphic Design",
    imageUrl: "/placeholder.svg?height=300&width=300",
  },
  { id: 4, title: "Responsive Website", category: "Web Design", imageUrl: "/placeholder.svg?height=300&width=300" },
  // Add more projects as needed
]

export default function ArtPage() {
  const [hoveredProject, setHoveredProject] = useState<number | null>(null)
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
          Artistic Portfolio
        </h1>

        <p className="text-xl mb-12 font-jetbrains-mono">
          Explore my diverse range of artistic projects, from traditional paintings to digital designs and web
          development.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {artProjects.map((project, index) => (
            <motion.div
              key={project.id}
              className="relative overflow-hidden rounded-lg"
              onMouseEnter={() => setHoveredProject(index)}
              onMouseLeave={() => setHoveredProject(null)}
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <img
                src={project.imageUrl || "/placeholder.svg"}
                alt={project.title}
                className="w-full h-64 object-cover"
              />
              <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-end p-4 transition-opacity duration-300 opacity-0 hover:opacity-100">
                <h2 className="text-2xl font-bold mb-2">{project.title}</h2>
                <p className="text-sm font-jetbrains-mono">{project.category}</p>
              </div>
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-pastel-pink via-pastel-purple to-pastel-blue opacity-0"
                animate={{ opacity: hoveredProject === index ? 0.2 : 0 }}
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

