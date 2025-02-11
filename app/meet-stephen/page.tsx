"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { motion, useAnimation } from "framer-motion"
import Footer from "../../components/Footer"
import { useMousePosition } from "../../hooks/useMousePosition"

export default function MeetStephen() {
  const [scrolled, setScrolled] = useState(false)
  const mousePosition = useMousePosition()
  const cursorControls = useAnimation()

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  useEffect(() => {
    cursorControls.start({
      x: mousePosition.x - 16,
      y: mousePosition.y - 16,
    })
  }, [mousePosition, cursorControls])

  return (
    <div className="bg-deep-grey text-white min-h-screen font-space-grotesk overflow-x-hidden">
      <motion.div
        className="fixed w-8 h-8 rounded-full bg-pastel-blue mix-blend-difference pointer-events-none z-50"
        animate={cursorControls}
      />

      <header className="container mx-auto px-6 py-8">
        <Link href="/" className="text-2xl font-bold tracking-tighter">
          @OXYTOCINS
        </Link>
      </header>

      <main className="container mx-auto px-6 py-12">
        <h1 className="text-5xl font-bold mb-12">Meet Stephen</h1>

        <div className="grid gap-8 font-jetbrains-mono">
          <p className="text-lg">
            Stephen Beardslee is a creative force in digital marketing and social media, blending strategic insight with 
            compelling storytelling. Based in Houston, he works as a Digital Marketing & Social Media Professional, 
            specializing in crafting impactful narratives and fostering authentic brand connections.
          </p>

          <p className="text-lg">
            With experience at Samsung, Electronic Arts, and VerifiedWorks Agency, Stephen has led social and gaming campaigns 
            for Discord, Twitch, Cyberpunk, Pokémon GO, and more. His expertise spans content strategy, influencer marketing, 
            and community engagement, helping brands turn moments into cultural conversations.
          </p>

          <p className="text-lg">
            Passionate about innovation and storytelling, Stephen believes great content isn’t just consumed—it’s experienced. 
            His approach focuses on crafting dynamic, relevant, and engaging campaigns that resonate with audiences and drive 
            meaningful impact across industries.
          </p>

          {/* Add more paragraphs or sections about Stephen's background, skills, and experiences */}
        </div>
      </main>

      <Footer />
    </div>
  )
}

