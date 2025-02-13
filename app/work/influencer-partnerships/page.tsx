"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import Header from "@/components/Header"
import Footer from "@/components/Footer"

// Project specific data
const projectData = {
  title: "Influencer Partnerships",
  category: "Partnership Strategy",
  client: "Various Brands",
  date: "2019-2023",
  description: "Led 300+ contracted partnerships over four years, collaborating with Twitch streamers, celebrity musicians, actors, and emerging content creators to drive brand impact, audience engagement, and business growth.",
  challenge: "Navigating the evolving creator economy to establish meaningful, high-performing partnerships while ensuring seamless execution across multiple departments and initiatives. Key challenges included:\n• Managing complex relationships with diverse creator types\n• Coordinating multiple stakeholders across departments\n• Ensuring brand safety and compliance\n• Measuring and optimizing partnership performance",
  solution: "Implemented a comprehensive partnership strategy that included:\n• Cross-functional collaboration with creative, design, and development teams\n• Data-driven content optimization reaching 15.7MM+ viewers\n• Launch of the 'Team Galaxy' gaming collective\n• Brand identity refresh initiative\n• Streamlined workflow processes for partnership management\n• Regular performance analysis and optimization",
  results: "Achieved significant impact across multiple metrics:\n• Successfully managed $400K+ in project budgets\n• Increased brand sentiment by 33%\n• Reached 15.7MM+ viewers across campaigns\n• Executed 300+ successful creator partnerships\n• Strengthened brand positioning in creator and gaming communities\n• Established long-term relationships with high-profile creators",
  images: [
    {
      src: "/work/influencer-partnerships/image1.jpg",
      alt: "Creator Collaborations",
      caption: "High-profile partnerships with Twitch streamers and content creators"
    },
    {
      src: "/work/influencer-partnerships/image2.jpg",
      alt: "Team Galaxy Collective",
      caption: "Launch and growth of the Team Galaxy gaming collective"
    },
    {
      src: "/work/influencer-partnerships/image3.jpg",
      alt: "Campaign Highlights",
      caption: "Notable campaign moments and creator content"
    },
    {
      src: "/work/influencer-partnerships/image4.jpg",
      alt: "Partnership Impact",
      caption: "Visual representation of partnership results and metrics"
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
