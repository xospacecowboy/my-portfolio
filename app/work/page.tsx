"use client"

import { useState } from "react"
import Link from "next/link"
import { motion } from "framer-motion";
import Image from "next/image";
import Footer from "@/components/Footer"
import Header from "@/components/Header"

// Work Projects Data
const workProjects = [
  {
    title: "Social-First Brand Growth",
    description: "Revitalized EA’s brand through strategy, social innovation, and influencers, driving 4MM+ new followers and a surge in positive sentiment.",
    image: "/work/project-1.jpg",
    link: "/work/social-media-campaign",
    category: "Creative Strategy"
  },
  {
    title: "Experiential Gaming Activation",
    description: "Partnered with Samsung and #TeamGalaxy at PAX East 2020, engaging top gaming influencers to amplify mobile initiatives through activations and content.",
    image: "/work/project-2.png",
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
          A showcase of my professional projects, highlighting my expertise in social media management, client relationship, community engaement, design, and creative problem-solving.
          </div>
        </section>

        {/* Featured Project Card */}
        <div className="mb-2 w-full">
          <div className="bg-deep-grey/40 rounded-lg overflow-hidden">
            <div className="h-1 w-full bg-gradient-to-r from-pastel-pink via-pastel-purple to-pastel-blue" />
            <div className="p-8">
              <div className="flex flex-col gap-6">
                <div>
                  <div className="flex items-baseline gap-4 mb-2">
                    <h3 className="text-xl font-bold font-dotgothic16">
                      <span className="bg-clip-text text-transparent bg-gradient-to-r from-pastel-pink to-pastel-blue">
                        Portfolio Design & Development
                      </span>
                    </h3>
                  </div>
                  <div className="flex items-center gap-2 mb-4">
                    <span className="text-sm text-neutral-400 font-jetbrains-mono">✨ You're looking at it!</span>
                    <motion.span
                      animate={{ rotate: [0, 14, -8, 0] }}
                      transition={{ duration: 0.5, repeat: Infinity, repeatDelay: 2 }}
                      className="inline-block"
                    >
                      👋
                    </motion.span>
                  </div>
                  <p className="text-neutral-300 max-w-3xl font-light leading-relaxed">
                    Welcome to my digital playground! 🎨 Built from scratch with modern tech and lots of love, 
                    this portfolio showcases the perfect blend of <span className="text-pastel-pink">minimalist design</span> and{" "}
                    <span className="text-pastel-blue">playful interactions</span>. From gradient animations to 
                    cyberpunk-inspired elements, every detail has been crafted to create an engaging experience. 
                    It's not just a portfolio—it's a vibe ✨
                  </p>
                </div>
                <div className="space-y-3">
                  <div className="text-sm text-neutral-400 font-jetbrains-mono flex items-center gap-2">
                    <span>🛠️ Built with</span>
                    <div className="h-px flex-grow bg-gradient-to-r from-neutral-400/20 to-transparent" />
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {[
                      ["Next.js 14", "⚡"],
                      ["Tailwind CSS", "🎨"],
                      ["Framer Motion", "✨"],
                      ["TypeScript", "🔷"],
                      ["UI/UX Design", "🎯"],
                      ["Design System", "🎪"]
                    ].map(([tag, emoji]) => (
                      <span
                        key={tag}
                        className="px-3 py-1.5 bg-deep-grey rounded text-sm text-neutral-300 font-jetbrains-mono border border-white/5 flex items-center gap-2 hover:border-white/20 transition-colors"
                      >
                        {emoji} {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Samples Header */}
        <div className="mb-4">
          <h2 className="text-4xl font-bold font-dotgothic16">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-pastel-pink to-pastel-blue">
              SAMPLES
            </span>
          </h2>
        </div>

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

        {/* Featured Video Section */}
        <section className="pb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl font-bold mb-6">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-pastel-pink via-pastel-purple to-pastel-blue">
                NOW PLAYING
              </span>
            </h2>
            <div className="space-y-2 mb-6">
              <div className="text-lg text-white/80 font-jetbrains-mono">
                Samsung Galaxy S21 Ultra Launch Campaign featuring Jimmy Chin
              </div>
              <div className="text-sm text-white/60 font-jetbrains-mono">
                Role: Producer, Writer, Talent & Client Liaison
              </div>
            </div>
            <div className="relative pb-[56.25%] h-0 rounded-lg overflow-hidden">
              <iframe
                src="https://www.youtube.com/embed/NjsGLNrgXhw"
                title="Jimmy Chin x Samsung Galaxy S21 Ultra"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="absolute top-0 left-0 w-full h-full rounded-lg"
              />
            </div>
          </motion.div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
