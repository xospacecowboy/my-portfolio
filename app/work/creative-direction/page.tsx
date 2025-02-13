"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import Script from "next/script"
import Header from "@/components/Header"
import Footer from "@/components/Footer"
import { useEffect } from "react"

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
  credits: {
    roles: ["Producer", "Designer", "Copywriter", "Talent Manager"],
    disclaimer: "This is a small sample across all creative work produced for these initiatives."
  },
  socialPosts: [
    {
      type: "youtube",
      url: "https://www.youtube.com/embed/ixbKgcLu-9Y",
      title: "Samsung Creator Collective",
      width: "full"
    },
    {
      type: "instagram",
      url: "https://www.instagram.com/p/Ckq2o7JJYTg/embed",
      title: "Samsung Gaming"
    },
    {
      type: "twitter",
      id: "1338221155753185280",
      author: "maudegarrett",
      title: "Maude Garrett Post"
    },
    {
      type: "tiktok",
      url: "https://www.tiktok.com/embed/v2/7190473244279934254",
      title: "EA Gaming Community"
    },
    {
      type: "instagram",
      url: "https://www.instagram.com/p/CilKvBdpWrm/embed",
      title: "Community Event"
    },
    {
      type: "twitter",
      id: "1287130451371466752",
      author: "ImTheMyth",
      title: "Myth Samsung"
    },
    {
      type: "tiktok",
      url: "https://www.tiktok.com/embed/v2/7179288062940335406",
      title: "EA Gaming Highlights"
    },
    {
      type: "instagram",
      url: "https://www.instagram.com/p/CbtO5PGsiE-/embed",
      title: "Gaming Initiative"
    },
    {
      type: "twitter",
      id: "1328844665039118337",
      author: "maudegarrett",
      title: "Maude Garrett Gaming"
    },
    {
      type: "tiktok",
      url: "https://www.tiktok.com/embed/v2/7189341579885153579",
      title: "EA Gaming Community"
    },
    {
      type: "instagram",
      url: "https://www.instagram.com/p/CJHrc4fgREf/embed",
      title: "Samsung Gaming"
    },
    {
      type: "twitter",
      id: "1290709505991376896",
      author: "jimkchin",
      title: "Jimmy Chin Post"
    },
    {
      type: "instagram",
      url: "https://www.instagram.com/p/CdrHalFFfKg/embed",
      title: "Community Event"
    },
    {
      type: "twitter",
      id: "1349511625238188032",
      author: "jimkchin",
      title: "Jimmy Chin Samsung"
    },
    {
      type: "instagram",
      url: "https://www.instagram.com/p/Ci-bvCOM8xL/embed",
      title: "Gaming Content"
    },
    {
      type: "instagram",
      url: "https://www.instagram.com/p/CeoyiUBMHkO/embed",
      title: "Gaming Initiative"
    }
  ]
}

// Add Twitter widget type
declare global {
  interface Window {
    twttr: {
      widgets: {
        load: () => void;
      };
    };
  }
}

function GradientText({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return (
    <span className={`bg-clip-text text-transparent bg-gradient-to-r from-pastel-pink via-pastel-purple to-pastel-blue ${className}`}>
      {children}
    </span>
  )
}

export default function ProjectPage() {
  useEffect(() => {
    // Function to load Twitter widgets
    const loadTwitterWidgets = () => {
      if (typeof window !== 'undefined' && window.twttr) {
        window.twttr.widgets.load();
      }
    };

    // Check if script is already loaded
    const existingScript = document.getElementById('twitter-widget-script');
    if (!existingScript) {
      // Create and load Twitter script
      const script = document.createElement('script');
      script.id = 'twitter-widget-script';
      script.src = 'https://platform.twitter.com/widgets.js';
      script.onload = loadTwitterWidgets;
      document.body.appendChild(script);
    } else {
      // If script is already loaded, just load the widgets
      loadTwitterWidgets();
    }

    // Cleanup
    return () => {
      const script = document.getElementById('twitter-widget-script');
      if (script) {
        script.remove();
      }
    };
  }, []);

  return (
    <div className="bg-deep-grey text-white min-h-screen">
      <Header />
      
      {/* Instagram and TikTok embed scripts */}
      <Script src="https://www.instagram.com/embed.js" strategy="lazyOnload" />
      <Script src="https://www.tiktok.com/embed.js" strategy="lazyOnload" />

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

        {/* Social Media Showcase */}
        <section className="pb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-2xl font-bold mb-4">
              <GradientText>Social Media Showcase</GradientText>
            </h2>

            {/* Credits and Disclaimer */}
            <div className="mb-8">
              <div className="text-white/80 font-jetbrains-mono text-sm mb-2">
                {projectData.credits.disclaimer}
              </div>
              <div className="flex flex-wrap gap-2">
                {projectData.credits.roles.map((role, index) => (
                  <span 
                    key={role}
                    className="text-xs font-jetbrains-mono px-3 py-1 rounded-full bg-white/10 text-white/60"
                  >
                    {role}
                  </span>
                ))}
              </div>
            </div>
            
            {/* Featured YouTube Video */}
            <div className="mb-12">
              {projectData.socialPosts.filter(post => post.type === "youtube").map((post, index) => (
                <div key={post.url} className="relative pb-[56.25%] h-0 rounded-lg overflow-hidden">
                  <iframe
                    src={post.url}
                    title={post.title}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="absolute top-0 left-0 w-full h-full rounded-lg"
                  />
                </div>
              ))}
            </div>

            {/* Social Media Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projectData.socialPosts.filter(post => post.type !== "youtube").map((post, index) => (
                <motion.div
                  key={post.url || post.id}
                  className="relative rounded-lg overflow-hidden min-h-[400px] bg-black/10"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  {post.type === "twitter" ? (
                    <div className="p-4">
                      <blockquote
                        className="twitter-tweet"
                        data-theme="dark"
                        data-dnt="true"
                        data-conversation="none"
                      >
                        <a 
                          href={`https://twitter.com/${post.author}/status/${post.id}?ref_src=twsrc%5Etfw`}
                        >
                          Loading tweet...
                        </a>
                      </blockquote>
                    </div>
                  ) : (
                    <div className="aspect-[4/5]">
                      <iframe
                        src={post.url}
                        title={post.title}
                        className="w-full h-full"
                        allowFullScreen
                        scrolling="no"
                        frameBorder="0"
                        allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                      />
                    </div>
                  )}
                </motion.div>
              ))}
            </div>
          </motion.div>
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
