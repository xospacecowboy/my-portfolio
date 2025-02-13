"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import Image from "next/image"
import Header from "@/components/Header"
import Footer from "@/components/Footer"

const projectData = {
  title: "Influencer Program Development",
  category: "Program Strategy",
  client: "Samsung US",
  date: "2019-2023",
  description: "Designed and scaled Samsung US's centralized influencer program, securing 90 long-term partnerships and producing over 5,262 pieces of content that delivered massive audience reach and engagement.",
  challenge: "Creating a scalable, high-impact influencer strategy that fosters long-term partnerships while maximizing content output and effectively driving both brand awareness and product sales.",
  solution: "Led a structured influencer program that centralized partnerships and streamlined content production, negotiating and managing 90 long-term contracts while optimizing content strategy for maximum impact.",
  results: "Generated 229.1+ million impressions and 26.1+ million engagements across influencer channels in one year, amplifying Samsung's brand presence through sustained creator collaborations.",
  video: {
    url: "https://www.youtube.com/embed/Na-iOW5I5Iw",
    title: "#TeamGalaxy House Rules Hero Sizzle",
    description: "Role: Producer, Talent Manager, Device Expert"
  },
  images: [
    {
      src: "/work/influencer-program/image1.jpg",
      alt: "Program Overview"
    },
    {
      src: "/work/influencer-program/image2.jpg",
      alt: "Content Creation"
    },
  ]
}

function GradientText({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return (
    <span className={`bg-clip-text text-transparent bg-gradient-to-r from-pastel-pink via-pastel-purple to-pastel-blue ${className}`}>
      {children}
    </span>
  )
}

export default function InfluencerProgramPage() {
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

        {/* Video Showcase */}
        <section className="pb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-6"
          >
            <h2 className="text-2xl font-bold">
              <GradientText>Selected Works</GradientText>
            </h2>
            <div className="relative pb-[56.25%] h-0 rounded-lg overflow-hidden">
              <iframe
                src={projectData.video.url}
                title={projectData.video.title}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="absolute top-0 left-0 w-full h-full rounded-lg"
              />
            </div>
            <div className="space-y-2">
              <div className="text-lg text-white/80 font-jetbrains-mono">
                {projectData.video.title}
              </div>
              <div className="text-sm text-white/60 font-jetbrains-mono">
                {projectData.video.description}
              </div>
            </div>
          </motion.div>
        </section>

        {/* Image Gallery */}
        <section className="pb-16">
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
