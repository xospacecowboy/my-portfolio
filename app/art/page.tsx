"use client"

import { Metadata } from 'next'
import { motion } from "framer-motion"
import Header from "../../components/Header"
import Footer from "../../components/Footer"
import GradientText from "../../components/GradientText"

export const metadata: Metadata = {
  title: 'Digital Art Gallery | Stephen Beardslee',
  description: 'Upcoming digital art gallery featuring a curated collection of creative experiments and digital artwork by Stephen Beardslee. Opening soon.',
  openGraph: {
    title: 'Digital Art Gallery | Stephen Beardslee',
    description: 'Upcoming digital art gallery featuring a curated collection of creative experiments and digital artwork by Stephen Beardslee. Opening soon.',
    url: 'https://oxytocins.me/art',
  },
}

export default function ArtPage() {
  return (
    <div className="bg-deep-grey text-white min-h-screen">
      <Header />

      <main className="container mx-auto px-6 pt-32 pb-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col items-center justify-center text-center"
        >
          <h1 className="text-6xl md:text-7xl font-bold font-dotgothic16 mb-6">
            ART <GradientText>GALLERY</GradientText>
          </h1>
          
          {/* Coming Soon Badge */}
          <div className="relative inline-block mb-8">
            <div className="absolute inset-0 bg-gradient-to-r from-pastel-pink via-pastel-blue to-pastel-green blur-lg opacity-50"></div>
            <div className="relative px-6 py-2 bg-white/5 backdrop-blur-sm border border-white/10 rounded-full">
              <span className="text-sm font-jetbrains-mono text-white/80">Coming Soon</span>
            </div>
          </div>

          {/* Construction Message */}
          <div className="max-w-2xl mx-auto">
            <p className="text-xl text-white/80 font-jetbrains-mono mb-8">
              This gallery is currently under construction. Check back soon to explore a curated collection of digital art and creative experiments.
            </p>
            
            {/* Construction Animation */}
            <motion.div
              animate={{ 
                rotate: [0, 10, -10, 10, 0],
                y: [0, -5, 5, -5, 0]
              }}
              transition={{ 
                duration: 5,
                repeat: Infinity,
                repeatType: "reverse"
              }}
              className="text-6xl mb-12"
            >
              🎨
            </motion.div>

            {/* Feature Preview */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm font-jetbrains-mono text-white/60">
              <div className="p-4 bg-white/5 rounded-lg backdrop-blur-sm border border-white/10">
                <span className="block text-2xl mb-2">🖼️</span>
                Digital Art
              </div>
              <div className="p-4 bg-white/5 rounded-lg backdrop-blur-sm border border-white/10">
                <span className="block text-2xl mb-2">✨</span>
                Creative Experiments
              </div>
              <div className="p-4 bg-white/5 rounded-lg backdrop-blur-sm border border-white/10">
                <span className="block text-2xl mb-2">🌈</span>
                Visual Stories
              </div>
            </div>
          </div>
        </motion.div>
      </main>

      <Footer />
    </div>
  )
}
