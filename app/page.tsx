"use client"

// ===================================
// Imports and Dependencies
// ===================================
import { useState, useEffect, useCallback, MouseEvent } from "react"
import Link from "next/link"
import { motion } from "framer-motion"
import Footer from "@/components/Footer"

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
      role: "Creative",
      icon: "👨🏻‍💻",
      color: "text-pastel-green",
      bgGradient: "from-pastel-green to-pastel-blue"
    },
    {
      company: "VerifiedWorks Agency",
      role: "Creative Strategy Lead",
      color: "text-pastel-blue",
      bgGradient: "from-pastel-blue to-pastel-purple"
    },
    {
      company: "Samsung US",
      role: "Social Media Campaign",
      color: "text-pastel-pink",
      bgGradient: "from-pastel-purple to-pastel-pink"
    },
    {
      company: "Electronic Arts",
      role: "Gaming Campaign",
      icon: "🎮",
      color: "text-pastel-yellow",
      bgGradient: "from-pastel-pink to-pastel-yellow"
    },
    {
      company: "Discord",
      role: "Social Strategy",
      color: "text-pastel-purple",
      bgGradient: "from-pastel-yellow to-pastel-green"
    },
    {
      company: "Twitch",
      role: "Content Strategy",
      color: "text-pastel-blue",
      bgGradient: "from-pastel-green to-pastel-blue"
    },
    {
      company: "Cyberpunk",
      role: "Gaming Campaign",
      icon: "🎮",
      color: "text-pastel-pink",
      bgGradient: "from-pastel-blue to-pastel-pink"
    },
    {
      company: "Pokémon GO",
      role: "Social Campaign",
      icon: "🎮",
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
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${isScrolled ? "bg-deep-grey/90 backdrop-blur-sm" : ""}`}
      >
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          <Link href="/" className="text-2xl font-bold tracking-tighter hover:text-pastel-blue transition-colors">
            @OXYTOCINS
          </Link>
          <nav className="flex items-center space-x-8">
            <Link href="/work" className="text-sm hover:text-pastel-blue transition-colors font-jetbrains-mono">
              WORK
            </Link>
            <Link href="/art" className="text-sm hover:text-pastel-blue transition-colors font-jetbrains-mono">
              ART
            </Link>
            <Link href="/blog" className="text-sm hover:text-pastel-blue transition-colors font-jetbrains-mono">
              BLOG
            </Link>
            <Link href="/meet-stephen" className="text-sm hover:text-pastel-blue transition-colors font-jetbrains-mono">
              ABOUT
            </Link>
            <motion.a
              href="mailto:beardslee.stephen@icloud.com"
              className="bg-white text-deep-grey px-4 py-2 text-sm font-medium hover:bg-pastel-blue hover:text-white transition-colors relative overflow-hidden font-jetbrains-mono"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              @
            </motion.a>
          </nav>
        </div>
      </header>

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
              <motion.div
                className="absolute -top-12 left-1/2 -translate-x-1/2 whitespace-nowrap"
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
                  {/* Dotted line connector */}
                  <motion.div 
                    className="absolute w-px h-8 left-1/2 bottom-0 translate-y-full -translate-x-1/2"
                    style={{
                      background: "linear-gradient(to bottom, rgba(255,255,255,0.2) 50%, transparent 50%)",
                      backgroundSize: "1px 8px"
                    }}
                    initial={{ scaleY: 0 }}
                    animate={{ scaleY: 1 }}
                    transition={{ duration: 0.3, delay: 0.8 }}
                  />
                </motion.div>
              </motion.div>
              I'M STEPHEN
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
              FREELANCING <span className="font-italic">ACROSS INDUSTRIES</span> 🐎
              <HandDrawnUnderline className="text-pastel-green bottom-0 left-0" />
            </span>
          </motion.h1>

          {/* Stats Section */}
          <section className="mt-16 mb-16">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-1">
              {[
                { number: "10+", label: "Years Experience" },
                { number: "50+", label: "Brand Partnerships" },
                { number: "100M+", label: "Social Impressions" },
                { number: "∞", label: "Creative Possibilities" },
              ].map((stat, index) => (
                <motion.div
                  key={stat.label}
                  className="text-center px-2"
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
          <motion.div className="text-2xl sm:text-3xl md:text-4xl font-light italic max-w-5xl text-left mt-4 relative">
            <RandomFont>W/ A PASSION FOR</RandomFont>{" "}
            <motion.span
              className="font-bold relative inline-block cursor-pointer"
              whileHover={{ backgroundSize: "100% 100%" }}
              transition={{ duration: 0.5 }}
              style={{
                backgroundImage: "linear-gradient(to right, #BAE1FF, #BAE1FF)",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "0 100%",
                backgroundSize: "0% 100%",
              }}
            >
              STORYTELLING
            </motion.span>{" "}
            &{" "}
            <motion.span
              className="relative inline-block font-bold cursor-pointer"
              whileHover={{ letterSpacing: "2px" }}
              transition={{ duration: 0.3 }}
            >
              DESIGN
            </motion.span>
            , I{" "}
            <motion.span
              className="font-bold relative inline-block cursor-pointer"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              CRAFT
            </motion.span>{" "}
            DIGITAL{" "}
            <motion.span
              className="relative inline-block font-bold cursor-pointer"
              whileHover={{ backgroundSize: "100% 100%" }}
              transition={{ duration: 0.5 }}
              style={{
                backgroundImage: "linear-gradient(to right, #BAE1FF, #BAE1FF)",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "0 100%",
                backgroundSize: "0% 100%",
              }}
            >
              EXPERIENCES
            </motion.span>{" "}
            THAT{" "}
            <motion.span
              className="relative inline-block font-bold cursor-pointer"
              whileHover={{ letterSpacing: "2px" }}
              transition={{ duration: 0.3 }}
            >
              CONNECT
            </motion.span>
            ,{" "}
            <motion.span
              className="font-bold relative inline-block cursor-pointer"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              INSPIRE
            </motion.span>{" "}
            &{" "}
            <motion.span
              className="relative inline-block font-bold cursor-pointer"
              whileHover={{ backgroundSize: "100% 100%" }}
              transition={{ duration: 0.5 }}
              style={{
                backgroundImage: "linear-gradient(to right, #BAE1FF, #BAE1FF)",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "0 100%",
                backgroundSize: "0% 100%",
              }}
            >
              ENGAGE
            </motion.span>
            .
          </motion.div>

          {/* ===================================
              Approach Section
              =================================== */}
          <motion.div className="text-lg sm:text-xl md:text-2xl font-normal max-w-5xl text-left mt-3 [&>span]:leading-tight">
            <span className="font-dotgothic16 block space-y-5">
              <div>
                I create{" "}
                <motion.span
                  className="bg-clip-text text-transparent bg-gradient-to-r from-pastel-pink via-pastel-purple to-pastel-blue"
                  animate={{ backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                >
                  DIGITAL MAGIC 
                </motion.span>{" "}
                — 
              </div>

              <div className="space-y-1.5">
                Where{" "}
                <motion.span
                  className="font-bold relative inline-block cursor-pointer"
                  whileHover={{ letterSpacing: "2px" }}
                  transition={{ duration: 0.3 }}
                >
                  design
                </motion.span>
                ,{" "}
                <motion.span
                  className="font-bold relative inline-block cursor-pointer"
                  whileHover={{ backgroundSize: "100% 100%" }}
                  transition={{ duration: 0.5 }}
                  style={{
                    backgroundImage: "linear-gradient(to right, #BAE1FF, #BAE1FF)",
                    backgroundRepeat: "no-repeat",
                    backgroundPosition: "0 100%",
                    backgroundSize: "0% 100%",
                  }}
                >
                  storytelling
                </motion.span>
                , and{" "}
                <motion.span
                  className="font-bold relative inline-block cursor-pointer"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                >
                  strategy
                </motion.span>{" "}
                weave together to craft
                <br />
                experiences that{" "}
                <motion.span
                  className="bg-clip-text text-transparent bg-gradient-to-r from-pastel-pink to-pastel-blue"
                  animate={{ backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                >
                  captivate
                </motion.span>
                ,{" "}
                <motion.span
                  className="bg-clip-text text-transparent bg-gradient-to-r from-pastel-blue to-pastel-green"
                  animate={{ backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                >
                  resonate
                </motion.span>
                , and{" "}
                <motion.span
                  className="bg-clip-text text-transparent bg-gradient-to-r from-pastel-green to-pastel-pink"
                  animate={{ backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                >
                  inspire
                </motion.span>
                . Whether through
                <br />
                a campaign, my work is about turning ideas into something you can{" "}
                <motion.span
                  className="relative inline-block"
                  whileHover={{
                    scale: 1.1,
                    transition: { duration: 0.2 }
                  }}
                >
                  <span className="text-pastel-green">FEEL</span>
                  <motion.span
                    className="absolute -bottom-1 left-0 w-full h-0.5 bg-pastel-green"
                    initial={{ scaleX: 0 }}
                    whileHover={{ scaleX: 1 }}
                    transition={{ duration: 0.2 }}
                  />
                </motion.span>
                .
              </div>
              
              <div>
                Because when creativity meets intention, it doesn't just make an impact—
                <motion.span
                  className="italic bg-clip-text text-transparent bg-gradient-to-r from-pastel-blue via-pastel-green to-pastel-pink"
                  animate={{ backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                >
                  it casts a spell that lingers.
                </motion.span>
                ✨
              </div>
            </span>
          </motion.div>

          {/* ===================================
              TL;DR Section
              =================================== */}
          <section className="mt-4">
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link href="/meet-stephen" className="inline-block">
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-pastel-pink via-pastel-purple to-pastel-blue text-lg font-bold hover:underline">
                  Full Bio →
                </span>
              </Link>
            </motion.div>
          </section>

          {/* ===================================
              Formerly Section
              =================================== */}
          <section className="container mx-auto px-6 pt-12 pb-16 relative">
            <motion.h2
              className="text-3xl sm:text-4xl md:text-5xl font-bold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-pastel-green via-pastel-blue to-pastel-pink cursor-pointer text-center font-dotgothic16"
              whileHover={{ backgroundSize: "200% 200%" }}
              transition={{ duration: 0.5 }}
            >
              FORMERLY@
            </motion.h2>
            
            <div className="relative overflow-hidden">
              <motion.div 
                className="flex gap-4 py-4"
                style={{
                  willChange: 'transform'
                }}
                animate={{
                  x: [-20, -1 * (experiences.length * 280)]
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
                    onMouseMove={(e) => onMouseMove(e, index)}
                    onMouseLeave={onMouseLeave}
                  >
                    <motion.div
                      className="relative h-full w-full transition-all duration-300 group rounded-xl overflow-hidden"
                      style={{
                        transform: rotate.index === index 
                          ? `perspective(1000px) rotateX(${rotate.x}deg) rotateY(${rotate.y}deg) scale3d(1, 1, 1)`
                          : 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)',
                        transition: 'all 400ms cubic-bezier(0.03, 0.98, 0.52, 0.99) 0s',
                      }}
                      whileHover={{ scale: 1.05 }}
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

            <motion.div className="mt-8" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link href="/work" className="inline-block">
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-pastel-pink via-pastel-purple to-pastel-blue text-lg font-bold hover:underline">
                  Explore My Work →
                </span>
              </Link>
            </motion.div>
          </section>

          {/* Animated Dot Wave Divider */}
          <div className="relative pt-3 pb-12 overflow-hidden">
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
                  I AM{" "}
                  <motion.span
                    className="font-bold relative inline-block cursor-pointer"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.3 }}
                  >
                    COMMITTED
                  </motion.span>{" "}
                  TO{" "}
                  <motion.span
                    className="bg-clip-text text-transparent bg-gradient-to-r from-pastel-pink via-pastel-purple to-pastel-blue"
                    animate={{ backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"] }}
                    transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                  >
                    DESIGNS THAT BOND
                  </motion.span>{" "}
                  & WOULD{" "}
                  <motion.span
                    className="relative inline-block"
                    whileHover={{
                      scale: 1.1,
                      transition: { duration: 0.2 }
                    }}
                  >
                    <span className="text-pastel-green">LOVE</span>
                    <motion.span
                      className="absolute -bottom-1 left-0 w-full h-0.5 bg-pastel-green"
                      initial={{ scaleX: 0 }}
                      whileHover={{ scaleX: 1 }}
                      transition={{ duration: 0.2 }}
                    />
                  </motion.span>
                </span>

                <span className="block mb-3">
                  TO HEAR WHAT YOU'RE{" "}
                  <motion.span
                    className="italic bg-clip-text text-transparent bg-gradient-to-r from-pastel-blue via-pastel-green to-pastel-pink"
                    animate={{ backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"] }}
                    transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                  >
                    WORKING ON
                  </motion.span>{" "}
                  —
                </span>

                <span className="block">
                  OR EVEN IF YOU JUST WANT TO{" "}
                  <motion.span
                    className="relative inline-block font-bold cursor-pointer"
                    whileHover={{ letterSpacing: "2px" }}
                    transition={{ duration: 0.3 }}
                  >
                    SAY HI
                  </motion.span>{" "}
                  <motion.span
                    initial={{ rotate: 0 }}
                    animate={{ rotate: [0, -10, 10, -10, 10, 0] }}
                    transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
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
            >
              <div className="mb-6">
                <motion.input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Your Name"
                  className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-lg text-white placeholder-white/50
                    focus:outline-none focus:ring-2 focus:ring-pastel-blue focus:border-transparent
                    transition-all duration-300"
                  whileFocus={{ scale: 1.02 }}
                  transition={{ duration: 0.2 }}
                  required
                />
              </div>
              <div className="mb-6">
                <motion.input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Your Email"
                  className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-lg text-white placeholder-white/50
                    focus:outline-none focus:ring-2 focus:ring-pastel-blue focus:border-transparent
                    transition-all duration-300"
                  whileFocus={{ scale: 1.02 }}
                  transition={{ duration: 0.2 }}
                  required
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
                ></motion.textarea>
              </div>
              <motion.button
                type="submit"
                className="w-full bg-deep-grey text-white px-8 py-4 text-lg font-bold rounded-lg 
                  border border-white/20 relative group overflow-hidden"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <span className="relative z-10 font-jetbrains-mono">Send Message →</span>
                <motion.div 
                  className="absolute inset-0 bg-gradient-to-r from-pastel-pink via-pastel-purple to-pastel-blue opacity-0 group-hover:opacity-100 transition-all duration-300"
                  whileHover={{ scale: 1.1 }}
                />
              </motion.button>
            </motion.form>
          </section>
        </section>
        <Footer />
      </main>
    </div>
  )
}
