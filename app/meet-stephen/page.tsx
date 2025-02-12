"use client"

import Link from "next/link"
import Image from "next/image"
import { motion } from "framer-motion"
import Footer from "../../components/Footer"
import Header from "../../components/Header"

const GradientText = ({ children, className = "" }: { children: React.ReactNode; className?: string }) => (
  <motion.span
    className={`bg-clip-text text-transparent bg-gradient-to-r from-pastel-pink via-pastel-purple to-pastel-blue cursor-pointer ${className}`}
  >
    {children}
  </motion.span>
)

export default function MeetStephen() {
  return (
    <div className="bg-deep-grey text-white min-h-screen">
      <Header />

      <main className="container mx-auto px-6 pt-32">
        {/* Hero Section */}
        <section className="pb-12">
          <h1 className="text-6xl md:text-7xl font-bold font-dotgothic16 mb-6">
            MEET <br />
            <GradientText>STEPHEN</GradientText>
          </h1>
          <div className="text-xl text-white/80 font-jetbrains-mono max-w-2xl">
            Strategic social media leader based in Houston, crafting transformative digital experiences.
          </div>
        </section>

        {/* Profile Section */}
        <section className="grid md:grid-cols-2 gap-12 pb-16">
          {/* Image Column */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="relative aspect-square rounded-lg overflow-hidden"
          >
            <Image
              src="/headshot.jpg"
              alt="Stephen Beardslee"
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-deep-grey/80 to-transparent" />
          </motion.div>

          {/* Content Column */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="space-y-6"
          >
            <div className="space-y-4">
              <div className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-pastel-pink to-pastel-blue">
                Background
              </div>
              <div className="text-white/80 font-jetbrains-mono space-y-4">
                <div>
                  With over a decade of experience in creative and social media, I've had the privilege of working with some of the world's most innovative brands.
                </div>
                <div>
                  My journey began at Apple, where I honed my skills in creative storytelling and customer experience. Since then, I've led successful campaigns and strategies for various tech and gaming companies.
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <div className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-pastel-blue to-pastel-purple">
                Approach
              </div>
              <div className="text-white/80 font-jetbrains-mono space-y-4">
                <div>
                  I believe in creating authentic connections through strategic storytelling and innovative design. Every project is an opportunity to push creative boundaries while delivering measurable results.
                </div>
                <div>
                  My work combines data-driven insights with creative intuition to craft experiences that resonate with audiences and drive engagement.
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <div className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-pastel-purple to-pastel-pink">
                Beyond Work
              </div>
              <div className="text-white/80 font-jetbrains-mono space-y-4">
                <div>
                  When I'm not crafting digital experiences, you'll find me exploring new creative mediums, experimenting with digital art, or staying up-to-date with the latest trends in technology and design.
                </div>
                <div>
                  I'm always excited to connect with fellow creatives and explore new opportunities for collaboration.
                </div>
              </div>
            </div>
          </motion.div>
        </section>

        {/* Skills Section */}
        <section className="pb-16">
          <div className="text-3xl font-bold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-pastel-pink to-pastel-blue">
            Skills & Expertise
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              "Artist",
              "Designer",
              "Developer",
              "Strategist",
              "Creative Strategy",
              "Social Media",
              "Brand Development",
              "Content Creation",
              "Campaign Management",
              "Digital Marketing",
              "Team Leadership",
              "Project Management"
            ].map((skill, index) => (
              <motion.div
                key={skill}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white/[0.02] border border-white/[0.05] rounded-lg p-4 font-jetbrains-mono text-sm text-center hover:bg-white/[0.05] transition-colors"
              >
                {skill}
              </motion.div>
            ))}
          </div>
        </section>

        {/* Experience Section */}
        <section className="py-12">
          <motion.div
            className="space-y-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="bg-white/5 p-8 rounded-lg border border-white/10">
              <h2 className="text-3xl font-bold mb-6 font-dotgothic16">
                <GradientText>Professional Journey</GradientText>
              </h2>
              <div className="space-y-6 text-lg text-white/80 font-jetbrains-mono">
                <div>
                  With a background in global social media management at <GradientText>Electronic Arts</GradientText> and
                  experience as a social strategist and gaming consultant at <GradientText>Cashmere Agency</GradientText>,
                  Stephen has worked with major brands like <GradientText>Google, Meta, and Twitch</GradientText>.
                </div>
                <div>
                  Stephen's approach focuses on creating <GradientText>transformative content</GradientText> that is relevant,
                  meaningful, entertaining, and inspiring. He believes that{" "}
                  <GradientText>good stories are the key to good content</GradientText> and strives to extract meaningful
                  narratives from every idea.
                </div>
              </div>
            </div>

            <div className="bg-white/5 p-8 rounded-lg border border-white/10">
              <h2 className="text-3xl font-bold mb-6 font-dotgothic16">
                <GradientText>Creative Vision</GradientText>
              </h2>
              <div className="space-y-6 text-lg text-white/80 font-jetbrains-mono">
                <div>
                  Beyond his professional endeavors, Stephen is an{" "}
                  <GradientText>accomplished artist and graphic designer</GradientText>. His creative work spans various
                  mediums, from traditional painting to digital design. As an{" "}
                  <GradientText>emerging web developer</GradientText>, Stephen combines his artistic vision with technical
                  skills to create engaging and innovative digital experiences.
                </div>
              </div>
            </div>
          </motion.div>
        </section>

        {/* Stats Section */}
        <section className="py-20">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { number: "10+", label: "Years Experience" },
              { number: "50+", label: "Brand Partnerships" },
              { number: "100M+", label: "Social Impressions" },
              { number: "∞", label: "Creative Possibilities" },
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                className="text-center"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-pastel-pink to-pastel-blue mb-2">
                  {stat.number}
                </div>
                <div className="text-sm text-white/60 font-jetbrains-mono">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
