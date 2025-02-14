"use client"

import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import Header from '../../../components/Header'
import BlogFooter from '../../../components/BlogFooter'
import { BlogPost } from '@/lib/notion'
import Link from 'next/link'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import type { Components } from 'react-markdown'

interface FullBlogPost extends BlogPost {
  content?: string
}

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const [post, setPost] = useState<FullBlogPost | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const res = await fetch(`/api/posts/${params.slug}`)
        if (!res.ok) {
          if (res.status === 404) {
            throw new Error('Post not found')
          }
          throw new Error('Failed to fetch post')
        }
        const data = await res.json()
        if (data.error) {
          throw new Error(data.error)
        }
        setPost(data)
      } catch (err) {
        console.error('Error loading post:', err)
        setError(err instanceof Error ? err.message : 'Failed to load post')
        setPost(null)
      } finally {
        setLoading(false)
      }
    }

    fetchPost()
  }, [params.slug])

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-black via-purple-900/20 to-black">
        <Header />
        <main className="container mx-auto px-6 pt-32">
          <div className="text-center">
            <div className="inline-block animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-purple-400"></div>
            <div className="mt-4 text-white/60 font-jetbrains-mono">Loading post...</div>
          </div>
        </main>
        <BlogFooter />
      </div>
    )
  }

  if (error || !post) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-black via-purple-900/20 to-black">
        <Header />
        <main className="container mx-auto px-6 pt-32">
          <div className="max-w-3xl mx-auto">
            <div className="p-8 rounded-xl bg-gradient-to-br from-purple-900/50 via-black to-pink-900/30 backdrop-blur border border-white/10">
              <div className="text-center">
                <div className="text-2xl font-bold text-white/80 mb-4">😕 {error || 'Post not found'}</div>
                <Link 
                  href="/blog" 
                  className="inline-flex items-center text-pastel-blue hover:text-pastel-pink transition-colors font-jetbrains-mono group"
                >
                  <span className="mr-2 transform transition-transform group-hover:-translate-x-1">←</span>
                  Back to Blog
                </Link>
              </div>
            </div>
          </div>
        </main>
        <BlogFooter />
      </div>
    )
  }

  const components: Components = {
    a: props => (
      <a 
        {...props} 
        target="_blank" 
        rel="noopener noreferrer" 
        className="text-pastel-blue hover:text-pastel-pink transition-colors"
      />
    ),
    code: ({ className, children, ...props }) => {
      const match = /language-(\w+)/.exec(className || '')
      return match ? (
        <pre className="bg-white/[0.02] p-4 rounded-lg overflow-x-auto">
          <code {...props} className={className}>
            {children}
          </code>
        </pre>
      ) : (
        <code {...props} className="bg-white/[0.02] px-1.5 py-0.5 rounded text-pastel-pink">
          {children}
        </code>
      )
    },
    p: props => (
      <div {...props} className="mb-4" />
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-purple-900/20 to-black">
      <Header />

      <main className="container mx-auto px-6 py-8">
        <motion.article
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl mx-auto"
        >
          {/* Back Link */}
          <div className="mb-8">
            <Link 
              href="/blog" 
              className="inline-flex items-center text-pastel-blue hover:text-pastel-pink transition-colors font-jetbrains-mono group"
            >
              <span className="mr-2 transform transition-transform group-hover:-translate-x-1">←</span>
              Back to Blog
            </Link>
          </div>

          {/* Category */}
          <div className="text-sm font-bold text-pastel-green mb-4 font-jetbrains-mono">
            {post.category}
          </div>

          {/* Title */}
          <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-400">
            {post.title}
          </h1>

          {/* Date */}
          <time className="text-sm text-white/60 font-jetbrains-mono mb-8 block" dateTime={post.date}>
            {new Date(post.date).toLocaleDateString('en-US', {
              year: 'numeric',
              month: 'long',
              day: 'numeric'
            })}
          </time>

          {/* Content */}
          <div className="prose prose-invert max-w-none font-jetbrains-mono">
            {post.content ? (
              <div className="p-8 rounded-xl bg-gradient-to-br from-purple-900/50 via-black to-pink-900/30 backdrop-blur border border-white/10">
                <ReactMarkdown 
                  remarkPlugins={[remarkGfm]}
                  className="blog-content"
                  components={components}
                >
                  {post.content}
                </ReactMarkdown>
              </div>
            ) : (
              <div className="text-lg text-white/80 leading-relaxed">
                {post.excerpt}
              </div>
            )}
          </div>
        </motion.article>
      </main>

      <BlogFooter />
    </div>
  )
}
