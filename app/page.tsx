"use client"

// ===================================
// Imports and Dependencies
// ===================================
import { useState, useEffect, useCallback, MouseEvent, FormEvent } from "react"
import Link from "next/link"
import { motion } from "framer-motion"
import Footer from "@/components/Footer"
import Header from "@/components/Header"
import emailjs from '@emailjs/browser'

// ===================================
// Utility Functions
// ===================================
function throttle<T extends (...args: any[]) => any>(
  func: T,
  delay: number
): (...args: Parameters<T>) => void {
  let lastCall = 0;
  return (...args: Parameters<T>) => {
    const now = new Date().getTime();
    if (now - lastCall < delay) {
      return;
    }
    lastCall = now;
    return func(...args);
  };
}

// ===================================
// Utility Components
// ===================================
const HandDrawnUnderline = ({ className }: { className?: string }) => (
  <svg
    className={`absolute pointer-events-none ${className}`}
    width="100%"
    height="15"
    viewBox="0 0 100 15"
    preserveAspectRatio="none"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    style={{
      bottom: "-5px",
      left: 0,
      zIndex: -1,
      transform: "translateZ(0)",
    }}
  >
    <path
      d="M0 7.5C8 2.5 20 12.5 30 7.5C40 2.5 50 12.5 60 7.5C70 2.5 80 12.5 90 7.5C95 5 100 7.5 100 7.5"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      vectorEffect="non-scaling-stroke"
    />
  </svg>
)

const RandomFont = ({ children }: { children: React.ReactNode }) => {
  const [isAltFont, setIsAltFont] = useState(false)

  useEffect(() => {
    setIsAltFont(Math.random() > 0.5)
  }, [])

  return <span className={isAltFont ? "font-dotgothic16" : ""}>{children}</span>
}

// ===================================
// Main Home Component
// ===================================
export default function Home() {
  // State Management
  const [isScrolled, setIsScrolled] = useState(false)
  const [rotate, setRotate] = useState({ x: 0, y: 0, index: -1 })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const onMouseMove = useCallback(
    throttle((e: MouseEvent<HTMLDivElement>, index: number) => {
      const card = e.currentTarget;
      const box = card.getBoundingClientRect();
      const x = e.clientX - box.left;
      const y = e.clientY - box.top;
      const centerX = box.width / 2;
      const centerY = box.height / 2;
      const rotateX = (y - centerY) / 4;
      const rotateY = (centerX - x) / 4;

      setRotate({ x: rotateX, y: rotateY, index });
    }, 100),
    []
  );

  const onMouseLeave = () => {
    setRotate({ x: 0, y: 0, index: -1 });
  };

  // ===================================
  // Experience Data
  // ===================================
  const experiences = [
    {
      company: "Apple",
      role: "Technical Specialist, Product Education & Support",
      icon: "👨🏻‍💻",
      color: "text-pastel-green",
      bgGradient: "from-pastel-green to-pastel-blue"
    },
    {
      company: "VerifiedWorks",
      role: "Creative Strategy Lead & Senior Social Media Manager",
      icon: "🎨",
      color: "text-pastel-blue",
      bgGradient: "from-pastel-blue to-pastel-purple"
    },
    {
      company: "Samsung US",
      role: "Creative Direction & Gaming Collective Program Lead",
      icon: "📺",
      color: "text-pastel-pink",
      bgGradient: "from-pastel-purple to-pastel-pink"
    },
    {
      company: "Electronic Arts",
      role: "Social Strategy Lead & Community Program Manager",
      icon: "🎮",
      color: "text-pastel-yellow",
      bgGradient: "from-pastel-pink to-pastel-yellow"
    },
    {
      company: "Discord",
      role: "Community Engagement & Platform Development for existing and emerging communities",
      icon: "💬",
      color: "text-pastel-purple",
      bgGradient: "from-pastel-yellow to-pastel-green"
    },
    {
      company: "Twitch",
      role: "Managed talent for a variety of live stream events; Twitch Rivals, Galaxy Cup, and more",
      icon: "🕹️",
      color: "text-pastel-blue",
      bgGradient: "from-pastel-green to-pastel-blue"
    },
    {
      company: "Cyberpunk",
      role: "Oversaw influencer-led launch campaign in partnership with Samsung US and CD Projekt Red",
      icon: "🎮",
      color: "text-pastel-pink",
      bgGradient: "from-pastel-blue to-pastel-pink"
    },
    {
      company: "Pokémon GO",
      role: "Partnered w/ Samsung and Niantic for Community Day events ft. popular creators",
      icon: "🐣",
      color: "text-pastel-green",
      bgGradient: "from-pastel-pink to-pastel-green"
    }
  ];

  // Duplicate the array to create seamless loop
  const duplicatedExperiences = [...experiences, ...experiences];

  return (
    <div className="bg-deep-grey text-white min-h-screen font-space-grotesk overflow-x-hidden">
      {/* ===================================
          Background Grid Pattern
          =================================== */}
      <div className="fixed inset-0 bg-grid-pattern opacity-5 pointer-events-none"></div>

      {/* ===================================
          Header Section
          =================================== */}
      <Header />

      {/* ===================================
          Main Content Section
          =================================== */}
      <main className="pt-32">
        <section className="container mx-auto px-6 py-16 flex flex-col relative">
          {/* ===================================
              Hero Section
              =================================== */}
          <motion.h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight mb-6 max-w-5xl text-left relative">
            <motion.span
              className="relative inline-block px-2 font-bold"
              whileHover={{ letterSpacing: "2px" }}
              transition={{ duration: 0.3 }}
            >
              <RandomFont>𐚁 HOWDY,</RandomFont>
            </motion.span>{" "}
            <span className="relative inline-block">
              {/* AKA Button - Only visible on desktop */}
              <motion.div
                className="absolute md:-top-12 -top-20 left-1/2 -translate-x-1/2 whitespace-nowrap hidden md:block"
                initial={{ y: 0 }}
                animate={{ y: [-2, 2, -2] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              >
                <motion.div
                  className="relative bg-deep-grey px-4 py-1.5 rounded-full border border-white/20 font-jetbrains-mono text-sm"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3, delay: 0.5 }}
                >
                  <span className="bg-clip-text text-transparent bg-gradient-to-r from-pastel-pink to-pastel-blue">
                    AKA @OXYTOCINS
                  </span>
                </motion.div>
              </motion.div>
              I'M STEPHEN
            </span>
            {/* Mobile AKA text */}
            <span className="md:hidden">
              <span className="font-dotgothic16">
                {" "}(
                <motion.span
                  className="bg-clip-text text-transparent bg-gradient-to-r from-pastel-pink via-pastel-purple to-pastel-blue"
                  animate={{ backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                >
                AKA @OXYTOCINS
                </motion.span>
                )
              </span>
            </span>—A{" "}
            <motion.span
              className="font-normal italic relative inline-block px-2"
              initial={{ backgroundSize: "0% 100%" }}
              animate={{ backgroundSize: "100% 100%" }}
              transition={{ duration: 1.5, ease: "easeOut" }}
              style={{
                backgroundImage: "linear-gradient(to right, #BFFCC6, #BAE1FF, #FFB6C1)",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "0 100%",
              }}
            >
              SOCIAL MEDIA & CREATIVE PRO
            </motion.span>{" "}
            <span className="inline-block px-1">BASED IN HTX 📍</span>{" "}
            <span className="relative">
              DIGITAL COWBOY & <span className="font-italic">CREATIVE FOR HIRE.</span> 
              <br />
              <motion.span
                className="relative inline-block font-bold cursor-pointer hover:bg-clip-text hover:text-transparent hover:bg-gradient-to-r hover:from-pastel-pink hover:via-pastel-purple hover:to-pastel-blue"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.2 }}
              >
                LET'S RIDE
              </motion.span> 🐎
              <HandDrawnUnderline className="text-pastel-green bottom-0 left-0" />
            </span>
          </motion.h1>

          {/* Stats Section */}
          <section className="mt-12 md:mt-16 mb-20">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-1 md:gap-1 gap-y-12">
              {[
                { 
                  number: "7+", 
                  label: "Years\nExperience",
                  className: "whitespace-pre-line md:whitespace-normal"
                },
                { number: "100+", label: "Influencer Partnerships" },
                { 
                  number: "200M+", 
                  label: "Social\nImpressions",
                  className: "whitespace-pre-line md:whitespace-normal"
                },
                { number: "∞", label: "Creative Possibilities" },
              ].map((stat, index) => (
                <motion.div
                  key={stat.label}
                  className={`text-center px-2 ${stat.className || ''}`}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                >
                  <div className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-pastel-pink to-pastel-blue mb-1">
                    {stat.number}
                  </div>
                  <div className="text-xs text-white/60 font-jetbrains-mono">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </section>

          {/* ===================================
              About Section
              =================================== */}
          <div className="relative w-full mb-8">
            {/* Background gradient blur */}
            <motion.div 
              className="absolute inset-0 bg-gradient-to-r from-pastel-pink/10 via-pastel-purple/10 to-pastel-blue/10 blur-3xl"
              animate={{ 
                scale: [1, 1.1, 1],
                rotate: [0, 5, -5, 0]
              }}
              transition={{
                duration: 10,
                repeat: Infinity,
                ease: "linear"
              }}
            />

            {/* Content */}
            <motion.div 
              className="relative"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              <div className="space-y-6">
                <div className="relative">
                  <motion.div 
                    className="text-5xl sm:text-6xl font-bold"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.2 }}
                  >
                    BIG{" "}
                    <motion.span 
                      className="relative inline-block"
                      animate={{ 
                        backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"]
                      }}
                      transition={{ 
                        duration: 5,
                        repeat: Infinity,
                        ease: "linear"
                      }}
                      style={{
                        backgroundImage: "linear-gradient(90deg, #ff69b4, #9370db, #87ceeb, #ff69b4)",
                        backgroundSize: "200% 100%",
                        WebkitBackgroundClip: "text",
                        WebkitTextFillColor: "transparent"
                      }}
                    >
                      IDEAS
                    </motion.span>
                    {" "}NEED ROOM TO RUN
                  </motion.div>
                  
                  <motion.div 
                    className="mt-6 space-y-6"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1 }}
                  >
                    <p className="text-xl sm:text-2xl text-neutral-300 font-light leading-normal max-w-3xl font-dotgothic16">
                      And I've got the{" "}
                      <motion.span whileHover={{ color: "#ff69b4" }}>creative drive</motion.span>{" "}
                      to keep pace. My work blends{" "}
                      <motion.span whileHover={{ color: "#9370db" }}>design</motion.span>,{" "}
                      <motion.span whileHover={{ color: "#87ceeb" }}>storytelling</motion.span>, and{" "}
                      <motion.span whileHover={{ color: "#98fb98" }}>strategy</motion.span>{" "}
                      to craft experiences that don't just capture attention—they make a{" "}
                      <motion.span
                        className="font-medium"
                        whileHover={{ scale: 1.2, rotate: 360 }}
                        transition={{ duration: 0.5 }}
                      >
                        lasting
                      </motion.span>{" "}
                      impact.{" "}
                      <span className="block mt-2">
                        Whether shaping a brand or building a campaign, I don't just generate ideas—I bring them to{" "}
                        <motion.span whileHover={{ color: "#dda0dd" }}>life</motion.span>{" "}
                        in ways that resonate, move, and endure.{" "}
                      </span>
                      <span className="block mt-2">
                        Because creativity, when done right, never rides alone.
                      </span>
                    </p>

                    <motion.div
                      whileHover={{ x: 10, scale: 1.05 }}
                      transition={{ duration: 0.2 }}
                      className="mt-4"
                    >
                      <Link 
                        href="/meet-stephen" 
                        className="group inline-flex items-center gap-2 text-neutral-400 hover:text-neutral-200 transition-colors font-jetbrains-mono"
                      >
                        FULL BIO{" "}
                        <motion.span
                          animate={{ x: [0, 5, 0] }}
                          transition={{ 
                            duration: 1.5,
                            repeat: Infinity,
                            repeatType: "reverse"
                          }}
                        >
                          →
                        </motion.span>
                      </Link>
                    </motion.div>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* ===================================
              Formerly Section
              =================================== */}
          <motion.section 
            className="mt-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            <motion.h2
              className="text-3xl sm:text-4xl md:text-5xl font-bold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-pastel-green via-pastel-blue to-pastel-pink cursor-pointer text-center font-dotgothic16"
              whileHover={{ backgroundSize: "200% 200%" }}
              transition={{ duration: 0.5 }}
            >
              FORMERLY@
            </motion.h2>
            
            <div className="relative overflow-hidden">
              <motion.div 
                className="flex gap-4 py-4 md:animate-none animate-scroll"
                style={{
                  willChange: 'transform'
                }}
                animate={{
                  x: window.innerWidth >= 768 ? [-20, -1 * (experiences.length * 280)] : 0
                }}
                transition={{
                  duration: 40,
                  ease: "linear",
                  repeat: Infinity,
                  repeatDelay: 0
                }}
              >
                {duplicatedExperiences.map((exp, index) => (
                  <div
                    key={`${exp.company}-${index}`}
                    className="flex-none w-64 h-40 perspective-1000 overflow-hidden rounded-xl"
                    onMouseMove={(e) => window.innerWidth >= 768 ? onMouseMove(e, index) : null}
                    onMouseLeave={window.innerWidth >= 768 ? onMouseLeave : null}
                  >
                    <motion.div
                      className="relative h-full w-full transition-all duration-300 group rounded-xl overflow-hidden"
                      style={{
                        transform: window.innerWidth >= 768 && rotate.index === index 
                          ? `perspective(1000px) rotateX(${rotate.x}deg) rotateY(${rotate.y}deg) scale3d(1, 1, 1)`
                          : 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)',
                        transition: 'all 400ms cubic-bezier(0.03, 0.98, 0.52, 0.99) 0s',
                      }}
                      whileHover={{ scale: window.innerWidth >= 768 ? 1.05 : 1 }}
                    >
                      <div className={`h-full w-full rounded-xl p-6 select-none
                        bg-gradient-to-tr from-deep-black via-deep-grey to-deep-black border border-white/10
                        group-hover:border-white/20 transition-all duration-300 overflow-hidden relative`}>
                        <div className="relative z-10">
                          <h3 className={`text-xl font-bold ${exp.color} mb-2`}>
                            {exp.company} {exp.icon}
                          </h3>
                          <p className="text-sm font-jetbrains-mono text-white/80 group-hover:text-white transition-colors duration-300">
                            {exp.role}
                          </p>
                        </div>
                        {/* Glossy overlay */}
                        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                          <div className="absolute inset-0 bg-gradient-to-tr from-pastel-blue/5 via-pastel-purple/5 to-pastel-pink/5" />
                          <div className="absolute inset-0 bg-gradient-to-b from-white/[0.07] to-transparent" />
                        </div>
                        {/* Subtle accent based on card's theme */}
                        <div className={`absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-300
                          bg-gradient-to-tr ${exp.bgGradient}`} />
                      </div>
                    </motion.div>
                  </div>
                ))}
              </motion.div>
            </div>

            <motion.div className="mt-8 md:mt-8 mb-16 md:mb-8" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link href="/work" className="inline-block">
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-pastel-pink via-pastel-purple to-pastel-blue text-lg font-bold hover:underline">
                  Explore My Work →
                </span>
              </Link>
            </motion.div>
          </motion.section>

          {/* Animated Dot Wave Divider */}
          <div className="relative py-4 md:py-8 overflow-hidden">
            <motion.div 
              className="flex justify-center items-center gap-4"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              {[...Array(12)].map((_, i) => (
                <motion.div
                  key={i}
                  className="w-2 h-2 rounded-full"
                  style={{
                    background: `linear-gradient(to right, ${
                      i < 4 ? '#FFB6C1' : i < 8 ? '#BAE1FF' : '#B0E57C'
                    }, ${
                      i < 4 ? '#BAE1FF' : i < 8 ? '#B0E57C' : '#FFB6C1'
                    })`
                  }}
                  animate={{
                    y: [0, -10, 0],
                    scale: [1, 1.2, 1]
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    delay: i * 0.1,
                    ease: "easeInOut"
                  }}
                />
              ))}
            </motion.div>
          </div>

          {/* ===================================
              Let's Work Together Section
              =================================== */}
          <section className="container mx-auto px-6 pt-8 pb-16">
            <motion.div className="text-2xl sm:text-3xl md:text-4xl font-normal max-w-5xl mx-auto text-center leading-relaxed mb-12">
              <span className="font-dotgothic16 block">
                <span className="block mb-3">
                  LET'S{" "}
                  <motion.span
                    className="font-bold relative inline-block cursor-pointer"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.3 }}
                  >
                    CREATE
                  </motion.span>{" "}
                  
                  <motion.span
                    className="bg-clip-text text-transparent bg-gradient-to-r from-pastel-pink via-pastel-purple to-pastel-blue"
                    animate={{ backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"] }}
                    transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                  >
                    SOMETHING
                  </motion.span>{" "}
                  THAT RESONATES.{" "}
                  <motion.span
                    className="relative inline-block"
                    whileHover={{
                      scale: 1.1,
                      transition: { duration: 0.2 }
                    }}
                  >
                    <span className="text-pastel-green"></span>
                    <motion.span
                      className="absolute -bottom-1 left-0 w-full h-0.5 bg-pastel-green"
                      initial={{ scaleX: 0 }}
                      whileHover={{ scaleX: 1 }}
                      transition={{ duration: 0.2 }}
                    />
                  </motion.span>
                </span>

                <span className="block mb-3">
                  TELL ME WHAT YOU'RE{" "}
                  <motion.span
                    className="italic bg-clip-text text-transparent bg-gradient-to-r from-pastel-blue via-pastel-green to-pastel-pink"
                    animate={{ backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"] }}
                    transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                  >
                    DREAMING UP,
                  </motion.span>{" "}
                  
                </span>

                <span className="block">
                  OR JUST SAY{" "}
                  <motion.span
                    className="relative inline-block font-bold cursor-pointer"
                    whileHover={{ letterSpacing: "2px" }}
                    transition={{ duration: 0.3 }}
                  >
                    SAY HI
                  </motion.span>{" "}
                  <motion.span
                    initial={{ rotate: 0 }}
                    animate={{ rotate: [0, 14, -8, 14, -4, 10, 0] }}
                    transition={{ 
                      duration: 2,
                      repeat: Infinity,
                      repeatDelay: 1
                    }}
                    className="inline-block"
                  >
                    👋
                  </motion.span>
                </span>
              </span>
            </motion.div>

            <motion.form 
              className="max-w-lg mx-auto"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              onSubmit={async (e: FormEvent<HTMLFormElement>) => {
                e.preventDefault()
                setIsSubmitting(true)
                setSubmitStatus('idle')

                try {
                  const form = e.currentTarget
                  await emailjs.sendForm(
                    'service_f50b8oo', // Add your EmailJS service ID
                    'template_v0nhr1g', // Add your EmailJS template ID
                    form,
                    'X42nvZuQ7Z1lWq-iv' // Add your EmailJS public key
                  )
                  setSubmitStatus('success')
                  form.reset()
                } catch (error) {
                  console.error('Error sending email:', error)
                  setSubmitStatus('error')
                } finally {
                  setIsSubmitting(false)
                }
              }}
            >
              <div className="mb-6">
                <motion.input
                  type="text"
                  id="from_name"
                  name="from_name"
                  placeholder="Your Name"
                  className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-lg text-white placeholder-white/50
                    focus:outline-none focus:ring-2 focus:ring-pastel-blue focus:border-transparent
                    transition-all duration-300"
                  whileFocus={{ scale: 1.02 }}
                  transition={{ duration: 0.2 }}
                  required
                  disabled={isSubmitting}
                />
              </div>
              <div className="mb-6">
                <motion.input
                  type="email"
                  id="reply_to"
                  name="reply_to"
                  placeholder="Your Email"
                  className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-lg text-white placeholder-white/50
                    focus:outline-none focus:ring-2 focus:ring-pastel-blue focus:border-transparent
                    transition-all duration-300"
                  whileFocus={{ scale: 1.02 }}
                  transition={{ duration: 0.2 }}
                  required
                  disabled={isSubmitting}
                />
              </div>
              <div className="mb-6">
                <motion.textarea
                  id="message"
                  name="message"
                  rows={4}
                  placeholder="Your Message"
                  className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-lg text-white placeholder-white/50
                    focus:outline-none focus:ring-2 focus:ring-pastel-blue focus:border-transparent
                    transition-all duration-300 resize-none"
                  whileFocus={{ scale: 1.02 }}
                  transition={{ duration: 0.2 }}
                  required
                  disabled={isSubmitting}
                ></motion.textarea>
              </div>
              <motion.button
                type="submit"
                className="w-full bg-deep-grey text-white px-8 py-4 text-lg font-bold rounded-lg 
                  border border-white/20 relative group overflow-hidden"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                disabled={isSubmitting}
              >
                <span className="relative z-10 font-jetbrains-mono">
                  {isSubmitting ? 'Sending...' : 'Send Message →'}
                </span>
                <motion.div 
                  className="absolute inset-0 bg-gradient-to-r from-pastel-pink via-pastel-purple to-pastel-blue opacity-0 group-hover:opacity-100 transition-all duration-300"
                  whileHover={{ scale: 1.1 }}
                />
              </motion.button>
              {submitStatus === 'success' && (
                <p className="mt-4 text-pastel-green text-sm text-center">
                  Message sent successfully! I'll get back to you soon.
                </p>
              )}
              {submitStatus === 'error' && (
                <p className="mt-4 text-pastel-pink text-sm text-center">
                  Oops! Something went wrong. Please try again or email me directly.
                </p>
              )}
            </motion.form>
          </section>
        </section>
        <Footer />
      </main>
    </div>
  )
}
