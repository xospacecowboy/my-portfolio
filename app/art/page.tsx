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
    title: "Neon Dreams",
    description: "A series exploring the intersection of light and emotion in urban landscapes.",
    image: "/art/neon-dreams.jpg",
    link: "/art/neon-dreams"
  },
  {
    title: "Digital Decay",
    description: "Examining the beauty in digital artifacts and glitch aesthetics.",
    image: "/art/digital-decay.jpg",
    link: "/art/digital-decay"
  },
  {
    title: "Abstract Thoughts",
    description: "Visual representations of complex emotional states and abstract concepts.",
    image: "/art/abstract-thoughts.jpg",
    link: "/art/abstract-thoughts"
  }
]

function GradientText({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return (
    <span className={`bg-clip-text text-transparent bg-gradient-to-r from-pastel-pink via-pastel-purple to-pastel-blue ${className}`}>
      {children}
    </span>
  )
}

export default function ArtPage() {
  return (
    <div className="bg-deep-grey text-white min-h-screen">
      <Header />

      <main className="container mx-auto px-6 pt-32">
        {/* Hero Section */}
        <section className="pb-12">
          <h1 className="text-6xl md:text-7xl font-bold font-dotgothic16 mb-6">
            DIGITAL <br />
            <GradientText>ARTISTRY</GradientText>
          </h1>
          <div className="text-xl text-white/80 font-jetbrains-mono max-w-2xl">
            Exploring the boundaries between technology and creativity through digital art and experimental design.
          </div>
        </section>

        {/* Art Grid */}
        <section className="pb-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {artProjects.map((project, index) => (
              <Link href={project.link} key={project.title}>
                <motion.div
                  className="group relative overflow-hidden rounded-lg bg-white/[0.02] border border-white/[0.05] h-[400px]"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ scale: 1.02 }}
                >
                  <div className="absolute inset-0">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent">
                    <div className="absolute bottom-0 p-6">
                      <div className="text-xl font-bold mb-2">
                        {project.title}
                      </div>
                      <div className="text-sm text-white/80 font-jetbrains-mono">
                        {project.description}
                      </div>
                    </div>
                  </div>
                </motion.div>
              </Link>
            ))}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
