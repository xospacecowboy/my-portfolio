"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import Header from "../../components/Header"
import BlogFooter from "../../components/BlogFooter"
import Link from "next/link"

const POSTS_PER_PAGE = 4

interface BlogPost {
  id?: string
  title: string
  date: string
  slug: string
  excerpt: string
  category: string
}

export default function BlogPage() {
  const [posts, setPosts] = useState<BlogPost[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [visiblePosts, setVisiblePosts] = useState<number>(POSTS_PER_PAGE)

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const res = await fetch('/api/posts')
        if (!res.ok) {
          throw new Error('Failed to fetch posts')
        }
        const data = await res.json()
        if (data.error) {
          throw new Error(data.error)
        }
        console.log('Posts fetched:', data.length)
        setPosts(data)
      } catch (err) {
        console.error('Error in blog page:', err)
        setError(err instanceof Error ? err.message : 'Failed to load posts')
      } finally {
        setLoading(false)
      }
    }

    fetchPosts()
  }, [])

  const loadMore = () => {
    setVisiblePosts(prev => Math.min(prev + POSTS_PER_PAGE, posts.length))
  }

  return (
    <div className="min-h-screen">
      <Header />

      <main className="container mx-auto px-6 py-12 md:py-32">
        {/* Hero Section */}
        <motion.section 
          className="pb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-6xl md:text-7xl font-bold font-dotgothic16 mb-6">
            SPACED <br />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-pastel-pink via-pastel-purple to-pastel-blue">
              OUT
            </span>
          </h1>
          <div className="text-xl text-white/80 font-jetbrains-mono max-w-2xl">
            Exploring creativity, technology, and the intersection of art and business. 
            Join me as I share insights from my journey in the digital landscape.
          </div>
        </motion.section>

        {/* Loading State */}
        {loading && (
          <div className="flex justify-center items-center py-12">
            <div className="inline-block animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-purple-400"></div>
            <div className="ml-4 text-white/60 font-jetbrains-mono">Loading posts...</div>
          </div>
        )}

        {/* Error Message */}
        {error && (
          <div className="mb-8 p-8 rounded-xl bg-gradient-to-br from-purple-900/50 via-black to-pink-900/30 backdrop-blur border border-white/10">
            <div className="text-center">
              <div className="text-2xl font-bold text-white/80 mb-4">😕 Oops!</div>
              <div className="text-red-400 font-jetbrains-mono text-sm">{error}</div>
            </div>
          </div>
        )}

        {/* No Posts Message */}
        {!loading && !error && posts.length === 0 && (
          <div className="p-8 rounded-xl bg-gradient-to-br from-purple-900/50 via-black to-pink-900/30 backdrop-blur border border-white/10">
            <div className="text-center">
              <div className="text-2xl font-bold text-white/80 mb-4">No Posts Yet</div>
              <div className="text-white/60 font-jetbrains-mono">Check back soon for new content!</div>
            </div>
          </div>
        )}

        {/* Blog Posts Grid */}
        {posts.length > 0 && (
          <section className="pb-16 space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {posts.slice(0, visiblePosts).map((post, index) => (
                <Link 
                  href={`/blog/${post.slug}`} 
                  key={post.slug}
                  className="block"
                >
                  <motion.article
                    className="group p-6 rounded-xl bg-gradient-to-br from-purple-900/50 via-black to-pink-900/30 backdrop-blur border border-white/10 hover:border-white/20 transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/10 h-full"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    whileHover={{ scale: 1.02 }}
                  >
                    <div className="flex flex-col h-full">
                      <div className="text-xs font-bold text-pastel-green mb-3 font-jetbrains-mono">
                        {post.category}
                      </div>
                      <h2 className="text-xl font-bold mb-2 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-400 group-hover:from-purple-300 group-hover:to-pink-300 transition-all">
                        {post.title}
                      </h2>
                      <time className="text-xs text-white/60 font-jetbrains-mono mb-3" dateTime={post.date}>
                        {new Date(post.date).toLocaleDateString('en-US', {
                          year: 'numeric',
                          month: 'long',
                          day: 'numeric'
                        })}
                      </time>
                      <div className="font-jetbrains-mono text-gray-400 text-sm mb-4 line-clamp-2 group-hover:text-gray-300 transition-all">
                        {post.excerpt}
                      </div>
                      <div className="text-pastel-blue font-jetbrains-mono text-sm mt-auto group-hover:text-pastel-pink transition-colors">
                        Read more →
                      </div>
                    </div>
                  </motion.article>
                </Link>
              ))}
            </div>

            {/* Load More Button */}
            {visiblePosts < posts.length && (
              <div className="flex justify-center pt-8">
                <button
                  onClick={loadMore}
                  className="px-6 py-3 rounded-lg bg-gradient-to-r from-purple-900/50 to-pink-900/50 hover:from-purple-800/50 hover:to-pink-800/50 border border-white/10 hover:border-white/20 transition-all duration-300 font-jetbrains-mono text-sm text-white/80 hover:text-white hover:shadow-lg hover:shadow-purple-500/10"
                >
                  Load More Posts
                </button>
              </div>
            )}
          </section>
        )}
      </main>

      <BlogFooter />
    </div>
  )
}
