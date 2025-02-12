"use client"

// ===================================
// Imports and Dependencies
// ===================================
import { useState } from "react"
import Link from "next/link"
import { motion } from "framer-motion"
import Footer from "@/components/Footer"

// ===================================
// Blog Posts Data
// ===================================
const blogPosts = [
  {
    title: "The Art of Creative Storytelling in Social Media",
    date: "May 15, 2023",
    slug: "creative-storytelling",
    excerpt: "Exploring how narrative techniques can elevate your social media content...",
    category: "Social Media",
  },
  {
    title: "Maximizing Impact with Influencer Collaborations",
    date: "June 2, 2023",
    slug: "influencer-collaborations",
    excerpt: "Tips and strategies for successful partnerships with content creators...",
    category: "Influencer Marketing",
  },
  {
    title: "Emerging Trends in Digital Marketing for 2023",
    date: "June 20, 2023",
    slug: "digital-marketing-trends-2023",
    excerpt: "A look at the latest innovations shaping the digital marketing landscape...",
    category: "Digital Marketing",
  },
  {
    title: "Building Authentic Brand Voices on Social Platforms",
    date: "July 5, 2023",
    slug: "authentic-brand-voices",
    excerpt: "Strategies for developing a genuine and resonant brand personality online...",
    category: "Branding",
  },
]

// ===================================
// Main Blog Page Component
// ===================================
export default function BlogPage() {
  // State Management
  const [hoveredPost, setHoveredPost] = useState<number | null>(null)

  return (
    <div className="bg-deep-grey text-white min-h-screen font-space-grotesk">
      {/* ===================================
          Header Section
          =================================== */}
      <header className="container mx-auto px-6 py-8">
        <Link href="/" className="text-2xl font-bold tracking-tighter hover:text-pastel-blue transition-colors">
          @OXYTOCINS
        </Link>
      </header>

      {/* ===================================
          Main Content Section
          =================================== */}
      <main className="container mx-auto px-6 py-12">
        <h1 className="text-5xl font-bold mb-12 bg-clip-text text-transparent bg-gradient-to-r from-pastel-pink via-pastel-purple to-pastel-blue">
          Blog
        </h1>

        {/* ===================================
            Blog Posts Grid
            =================================== */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {blogPosts.map((post, index) => (
            <motion.div
              key={post.slug}
              className="relative overflow-hidden"
              onMouseEnter={() => setHoveredPost(index)}
              onMouseLeave={() => setHoveredPost(null)}
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <Link href={`/blog/${post.slug}`}>
                <div className="bg-white/5 p-8 rounded-lg h-full flex flex-col justify-between">
                  <div>
                    <span className="text-xs font-bold text-pastel-green mb-2 block">{post.category}</span>
                    <h2 className="text-2xl font-bold mb-2">{post.title}</h2>
                    <p className="text-sm text-gray-400 mb-4">{post.date}</p>
                    <p className="font-jetbrains-mono text-sm">{post.excerpt}</p>
                  </div>
                  <div className="mt-4">
                    <span className="text-pastel-blue hover:underline">Read more →</span>
                  </div>
                </div>
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-pastel-pink via-pastel-purple to-pastel-blue opacity-0"
                  animate={{ opacity: hoveredPost === index ? 0.2 : 0 }}
                  transition={{ duration: 0.3 }}
                />
              </Link>
            </motion.div>
          ))}
        </div>
      </main>

      {/* ===================================
          Footer Section
          =================================== */}
      <Footer />
    </div>
  )
}
