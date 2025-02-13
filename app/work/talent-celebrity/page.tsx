"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import Header from "@/components/Header"
import Footer from "@/components/Footer"

// Project specific data
const projectData = {
  title: "Talent & Celebrity",
  category: "Talent Management",
  client: "Various Brands",
  date: "2019-2023",
  description: "Spearheaded talent relations and contract management for 200+ partnerships with high-profile musicians, actors, and content creators, orchestrating seamless campaign execution while maintaining brand integrity.",
  challenge: "Managing complex talent partnerships and negotiations while ensuring alignment between celebrity schedules, brand objectives, and campaign deliverables across multiple stakeholders.",
  solution: "Developed streamlined contract processes and talent guidelines while building strong relationships with agencies and management teams to ensure smooth campaign execution and deliverable tracking.",
  results: "Successfully managed $400K+ in talent contracts achieving 15.7MM+ reach across campaigns, while maintaining 100% contract compliance and establishing long-term partnerships with key celebrities.",
  images: [
    {
      src: "/work/talent-celebrity/image1.jpg",
      alt: "Talent Partnerships",
      caption: "Curated content with high profile Twitch streamers"
    },
    {
      src: "/work/talent-celebrity/image2.jpg",
      alt: "Contract Management",
      caption: "Oversaw in-person activations with celebrity talent @ TwitchCon"
    },
    {
      src: "/work/talent-celebrity/image3.png",
      alt: "Campaign Execution",
      caption: "Production and content assistant for high-profile campaigns"
    },
    {
      src: "/work/talent-celebrity/image4.png",
      alt: "Partnership Results",
      caption: "Managed talent relationships across a variety of creators"
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

        {/* Video Section */}
        <div className="mb-16">
          <div className="bg-deep-grey/40 rounded-lg overflow-hidden">
            <div className="h-1 w-full bg-gradient-to-r from-pastel-pink via-pastel-purple to-pastel-blue" />
            <div className="p-8">
              <div className="flex flex-col gap-6">
                <div>
                  <h2 className="text-3xl font-bold mb-4 font-dotgothic16">
                    <span className="bg-clip-text text-transparent bg-gradient-to-r from-pastel-pink to-pastel-blue">
                      NOW PLAYING
                    </span>
                  </h2>
                  <div className="space-y-2 mb-6">
                    <div className="text-lg text-white/80 font-jetbrains-mono">
                      Samsung Galaxy S21 Ultra Launch Campaign featuring Jimmy Chin
                    </div>
                    <div className="text-sm text-white/60 font-jetbrains-mono flex items-center gap-2">
                      <span>🎬 Producer</span>
                      <span className="text-white/20">•</span>
                      <span>✍️ Writer</span>
                      <span className="text-white/20">•</span>
                      <span>🤝 Talent Manager</span>
                    </div>
                  </div>
                  <div className="relative rounded-lg overflow-hidden bg-black/20">
                    <div className="relative pb-[56.25%] h-0">
                      <iframe
                        src="https://www.youtube.com/embed/NjsGLNrgXhw"
                        title="Jimmy Chin x Samsung Galaxy S21 Ultra"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                        className="absolute top-0 left-0 w-full h-full rounded-lg"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

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
