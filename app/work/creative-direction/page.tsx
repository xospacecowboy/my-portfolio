"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import Header from "@/components/Header"
import Footer from "@/components/Footer"

// Project specific data
const projectData = {
  title: "Creative Direction",
  category: "Creative Strategy",
  client: "Samsung & Electronic Arts",
  date: "2020-2024",
  description: "Led creative strategy and multimedia production for major gaming initiatives including #TeamGalaxy mobile gaming collective and EA's community programs, delivering captivating digital experiences across platforms.",
  challenge: "Developing innovative creative strategies that maintain brand consistency while scaling content production across multiple platforms, from mobile gaming initiatives to community programs.",
  solution: "Curated the first-of-its-kind Team Galaxy Gaming collective and developed comprehensive EA community initiatives, managing end-to-end program creation from talent acquisition to post-production.",
  results: "Successfully launched multiple gaming initiatives and executed 10+ product activations including live events, experiential activations, and social campaigns, while establishing efficient content workflows and creative frameworks.",
  images: [
    {
      src: "/work/creative-direction/image1.jpg",
      alt: "Campaign Overview",
      caption: "#TeamGalaxy and EA community program highlights"
    },
    {
      src: "/work/creative-direction/image2.jpg",
      alt: "Content Production",
      caption: "Behind-the-scenes of content creation and production"
    },
    {
      src: "/work/creative-direction/image3.jpg",
      alt: "Platform Launches",
      caption: "Discord and TikTok platform launch campaigns"
    },
    {
      src: "/work/creative-direction/image4.jpg",
      alt: "Creative Process",
      caption: "Creative workflow and asset management systems"
    }
  ]
}

function GradientText({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return (
    <span className={`bg-clip-text text-transparent bg-gradient-to-r from-pastel-pink via-pastel-purple to-pastel-blue ${className}`}>
      {children}
    </span>
  )
}

export default function ProjectPage() {
  return (
    <div className="bg-deep-grey text-white min-h-screen">
      <Header />

      <main className="container mx-auto px-6 pt-32">
        {/* Hero Section */}
        <section className="pb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="text-sm font-bold text-pastel-green mb-4 font-jetbrains-mono">
              {projectData.category}
            </div>
            <h1 className="text-6xl md:text-7xl font-bold font-dotgothic16 mb-6">
              <GradientText>{projectData.title}</GradientText>
            </h1>
            <div className="text-xl text-white/80 font-jetbrains-mono max-w-2xl">
              {projectData.description}
            </div>
          </motion.div>
        </section>

        {/* Project Details */}
        <section className="grid md:grid-cols-3 gap-8 pb-16">
          <div className="space-y-6">
            <div>
              <div className="text-sm text-white/60 mb-2 font-jetbrains-mono">CLIENT</div>
              <div className="text-lg font-bold">{projectData.client}</div>
            </div>
            <div>
              <div className="text-sm text-white/60 mb-2 font-jetbrains-mono">DATE</div>
              <div className="text-lg font-bold">{projectData.date}</div>
            </div>
          </div>
          <div className="md:col-span-2">
            <div className="space-y-8">
              <div>
                <h2 className="text-2xl font-bold mb-4">
                  <GradientText>Challenge</GradientText>
                </h2>
                <div className="text-white/80 font-jetbrains-mono whitespace-pre-line">
                  {projectData.challenge}
                </div>
              </div>
              <div>
                <h2 className="text-2xl font-bold mb-4">
                  <GradientText>Solution</GradientText>
                </h2>
                <div className="text-white/80 font-jetbrains-mono whitespace-pre-line">
                  {projectData.solution}
                </div>
              </div>
              <div>
                <h2 className="text-2xl font-bold mb-4">
                  <GradientText>Results</GradientText>
                </h2>
                <div className="text-white/80 font-jetbrains-mono whitespace-pre-line">
                  {projectData.results}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Image Gallery */}
        <section className="pb-16">
          <h2 className="text-3xl font-bold mb-8">
            <GradientText>Gallery</GradientText>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projectData.images.map((image, index) => (
              <motion.div
                key={image.src}
                className="relative aspect-video rounded-lg overflow-hidden"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent">
                  <div className="absolute bottom-0 p-4">
                    <div className="text-sm text-white/80 font-jetbrains-mono">
                      {image.caption}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Back to Work */}
        <section className="pb-16">
          <Link href="/work">
            <motion.div
              className="inline-block text-lg font-bold font-jetbrains-mono"
              whileHover={{ x: -10 }}
              transition={{ duration: 0.2 }}
            >
              ← Back to Work
            </motion.div>
          </Link>
        </section>
      </main>

      <Footer />
    </div>
  )
}
