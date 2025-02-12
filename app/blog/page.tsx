"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import Header from "../../components/Header"
import Footer from "../../components/Footer"
import { getBlogPosts, staticBlogPosts, type BlogPost } from "@/lib/notion"
import Link from "next/link"

export default function BlogPage() {
  const [posts, setPosts] = useState<BlogPost[]>(staticBlogPosts)
  const [error, setError] = useState<string | null>(null)

  // Fetch posts on mount
  useEffect(() => {
    getBlogPosts()
      .then(newPosts => {
        console.log('Posts fetched:', newPosts.length)
        setPosts(newPosts)
      })
      .catch(err => {
        console.error('Error in blog page:', err)
        setError(err.message)
      })
  }, [])

  return (
    <div className="bg-deep-grey text-white min-h-screen">
      <Header />

      <main className="container mx-auto px-6 pt-32">
        {/* Hero Section */}
        <motion.section 
          className="pb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-6xl md:text-7xl font-bold font-dotgothic16 mb-6">
            THOUGHTS & <br />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-pastel-pink via-pastel-purple to-pastel-blue">
              INSIGHTS
            </span>
          </h1>
          <div className="text-xl text-white/80 font-jetbrains-mono max-w-2xl">
            Exploring creativity, technology, and the intersection of art and business. 
            Join me as I share insights from my journey in the digital landscape.
          </div>
        </motion.section>

        {/* Error Message */}
        {error && (
          <div className="mb-8 p-4 bg-red-500/10 border border-red-500/20 rounded-lg">
            <div className="text-red-400 font-jetbrains-mono text-sm">Error loading posts: {error}</div>
          </div>
        )}

        {/* Blog Posts Grid */}
        <section className="pb-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {posts.map((post, index) => (
              <Link 
                href={`/blog/${post.slug}`} 
                key={post.slug}
              >
                <motion.article
                  className="group relative overflow-hidden rounded-lg bg-white/[0.02] border border-white/[0.05] transition-all duration-300 hover:bg-white/[0.05] h-[280px] flex flex-col"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ scale: 1.02 }}
                >
                  <div className="p-6 flex flex-col flex-grow">
                    <div className="text-xs font-bold text-pastel-green mb-3 font-jetbrains-mono">
                      {post.category}
                    </div>
                    <h2 className="text-xl font-bold mb-2 bg-clip-text text-transparent bg-gradient-to-r from-pastel-pink to-pastel-blue line-clamp-2">
                      {post.title}
                    </h2>
                    <time className="text-xs text-white/60 font-jetbrains-mono mb-3" dateTime={post.date}>
                      {new Date(post.date).toLocaleDateString('en-US', {
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric'
                      })}
                    </time>
                    <div className="font-jetbrains-mono text-sm text-white/80 mb-4 line-clamp-2">
                      {post.excerpt}
                    </div>
                    <div className="text-pastel-blue font-jetbrains-mono text-sm mt-auto">
                      Read more →
                    </div>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-r from-pastel-pink via-pastel-purple to-pastel-blue opacity-0 transition-opacity duration-300 group-hover:opacity-20" />
                </motion.article>
              </Link>
            ))}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
