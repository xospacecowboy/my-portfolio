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
        <section className="relative py-20">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <motion.h1 
                className="text-6xl md:text-7xl font-bold font-dotgothic16"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                MEET <br />
                <GradientText>STEPHEN</GradientText>
              </motion.h1>
              <motion.p
                className="text-xl text-white/80 font-jetbrains-mono max-w-lg"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                Strategic social media leader based in Houston, crafting transformative digital experiences.
              </motion.p>
            </div>
            <motion.div 
              className="relative h-[500px] rounded-2xl overflow-hidden"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <Image
                src="/headshot.jpg"
                alt="Stephen Beardslee"
                fill
                className="object-cover"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-deep-grey via-transparent to-transparent" />
            </motion.div>
          </div>
        </section>

        {/* Skills Grid */}
        <section className="py-0">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { title: "Artist", color: "text-pastel-pink", desc: "Exploring various mediums" },
              { title: "Designer", color: "text-pastel-blue", desc: "Crafting visual identities" },
              { title: "Developer", color: "text-pastel-green", desc: "Building digital experiences" },
              { title: "Strategist", color: "text-pastel-yellow", desc: "Leading social initiatives" },
            ].map((skill, index) => (
              <motion.div
                key={skill.title}
                className="bg-white/5 p-6 rounded-lg border border-white/10 group hover:bg-white/10 transition-all duration-300"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <h3 className={`text-xl font-bold mb-2 ${skill.color}`}>{skill.title}</h3>
                <p className="text-sm text-white/60 font-jetbrains-mono">{skill.desc}</p>
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
                <p>
                  With a background in global social media management at <GradientText>Electronic Arts</GradientText> and
                  experience as a social strategist and gaming consultant at <GradientText>Cashmere Agency</GradientText>,
                  Stephen has worked with major brands like <GradientText>Google, Meta, and Twitch</GradientText>.
                </p>
                <p>
                  Stephen's approach focuses on creating <GradientText>transformative content</GradientText> that is relevant,
                  meaningful, entertaining, and inspiring. He believes that{" "}
                  <GradientText>good stories are the key to good content</GradientText> and strives to extract meaningful
                  narratives from every idea.
                </p>
              </div>
            </div>

            <div className="bg-white/5 p-8 rounded-lg border border-white/10">
              <h2 className="text-3xl font-bold mb-6 font-dotgothic16">
                <GradientText>Creative Vision</GradientText>
              </h2>
              <div className="space-y-6 text-lg text-white/80 font-jetbrains-mono">
                <p>
                  Beyond his professional endeavors, Stephen is an{" "}
                  <GradientText>accomplished artist and graphic designer</GradientText>. His creative work spans various
                  mediums, from traditional painting to digital design. As an{" "}
                  <GradientText>emerging web developer</GradientText>, Stephen combines his artistic vision with technical
                  skills to create engaging and innovative digital experiences.
                </p>
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
