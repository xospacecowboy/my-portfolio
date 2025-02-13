"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { motion } from "framer-motion"
import Footer from "@/components/Footer"
import Header from "@/components/Header"

// Work Projects Data
const workProjects = [
  {
    title: "Social-First Brand Growth",
    description: "Revitalized EA’s brand through strategy, social innovation, and influencers, driving 4MM+ new followers and a surge in positive sentiment.",
    image: "/work/project-1.png",
    link: "/work/social-media-campaign",
    category: "Creative Strategy"
  },
  {
    title: "Experiential Gaming Activation",
    description: "Partnered with Samsung and #TeamGalaxy at PAX East 2020, engaging top gaming influencers to amplify mobile initiatives through activations and content.",
    image: "/work/project-2.jpg",
    link: "/work/gaming-activation",
    category: "Influencer Marketing"
  },
  {
    title: "Talent & Celebrity",
    description: "Managed 300+ talent partnerships with musicians, actors, and creators, overseeing contract negotiations, relationship management, and campaign execution.",
    image: "/work/project-3.jpg",
    link: "/work/talent-celebrity",
    category: "Talent Management"
  },
  {
    title: "Community Building & Engagement",
    description: "Built and managed thriving Discord communities for EA, Helldivers 2, and Suicide Squad, driving 10K+ sign-ups through strategic community initiatives.",
    image: "/work/project-4.jpg",
    link: "/work/community-building",
    category: "Community Strategy"
  },
  {
    title: "Influencer Program Development",
    description: "Built Samsung US's centralized influencer program, securing 90 long-term partnerships and generating 229.1M+ impressions through 5,262+ content pieces.",
    image: "/work/project-5.jpg",
    link: "/work/influencer-program",
    category: "Program Strategy"
  },
  {
    title: "Creative Direction",
    description: "Led creative strategy for major gaming initiatives including #TeamGalaxy and EA's community programs, delivering captivating digital experiences across platforms.",
    image: "/work/project-6.jpg",
    link: "/work/creative-direction",
    category: "Creative Strategy"
  }
]

function GradientText({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return (
    <span className={`bg-clip-text text-transparent bg-gradient-to-r from-pastel-pink via-pastel-purple to-pastel-blue ${className}`}>
      {children}
    </span>
  )
}

export default function WorkPage() {
  return (
    <div className="bg-deep-grey text-white min-h-screen">
      <Header />

      <main className="container mx-auto px-6 pt-32">
        {/* Hero Section */}
        <section className="pb-12">
          <h1 className="text-6xl md:text-7xl font-bold font-dotgothic16 mb-6">
            SELECTED <br />
            <GradientText>WORKS</GradientText>
          </h1>
          <div className="text-xl text-white/80 font-jetbrains-mono max-w-2xl">
            A showcase of my professional projects, highlighting my expertise in web development, design, and creative problem-solving.
          </div>
        </section>

        {/* Work Grid */}
        <section className="pb-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {workProjects.map((project, index) => (
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
                      <div className="text-sm font-bold text-pastel-green mb-2 font-jetbrains-mono">
                        {project.category}
                      </div>
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
